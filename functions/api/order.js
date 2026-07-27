/**
 * POST /api/order — Cloudflare Pages Function.
 *
 * Pipeline per order:
 *   1. validate (server-side phone re-check — bad phone = dead COD order)
 *   2. append row to the confLureHer intake tab (Google Sheets, SA JWT, 3 tries)
 *   3. fire Meta CAPI `Lead` (same event_id as the browser pixel -> dedup)
 *   4. failure ladder: sheet dead -> Telegram alert with the full order
 *      (+ KV stash when a DLQ binding exists) so NO lead is ever lost.
 *
 * The customer gets {ok:true} whenever the order was captured ANYWHERE
 * (sheet, telegram or KV). Only a total capture failure returns 500.
 *
 * Required env (Pages -> Settings -> Environment variables / Secrets):
 *   GOOGLE_SA_KEY   full service-account JSON (secret)
 *   SHEET_ID        confLureHer spreadsheet id
 *   SHEET_TAB       intake tab name the distribution code reads
 *   PIXEL_ID        Meta pixel id
 *   CAPI_TOKEN      Meta Conversions API access token (secret)
 *   TG_BOT_TOKEN    Telegram bot token (secret)         [failure alerts]
 *   TG_CHAT_ID      Telegram chat id                    [failure alerts]
 * Optional:
 *   ORDER_DLQ       KV namespace binding (dead-letter queue)
 *   CAPI_TEST_CODE  Meta test_event_code while validating events
 *   PRODUCT_NAME    row product column (default "lureHer")
 *   PRICE_MAD       row price column   (default "189")
 */

// ---------------------------------------------------------------- helpers

const enc = new TextEncoder();

function b64url(bytes) {
  let s = typeof bytes === "string" ? bytes : String.fromCharCode(...new Uint8Array(bytes));
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sha256hex(str) {
  const d = await crypto.subtle.digest("SHA-256", enc.encode(str));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, "0")).join("");
}

/** Moroccan phone -> local 0XXXXXXXXX, or null if invalid. */
function normPhone(raw) {
  let d = String(raw || "").replace(/\D/g, "");
  if (d.startsWith("00212")) d = "0" + d.slice(5);
  else if (d.startsWith("212") && d.length === 12) d = "0" + d.slice(3);
  return /^0[5-7]\d{8}$/.test(d) ? d : null;
}

/** "YYYY-MM-DD HH:MM:SS" in Morocco time (matches the agents' sheet format). */
function casablancaNow() {
  const p = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Casablanca", hour12: false,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  }).formatToParts(new Date()).reduce((o, x) => (o[x.type] = x.value, o), {});
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second}`;
}

// ------------------------------------------------- Google Sheets (SA JWT)

let tokenCache = { token: null, exp: 0 };

async function googleToken(env) {
  if (tokenCache.token && Date.now() / 1000 < tokenCache.exp - 60) return tokenCache.token;
  const sa = JSON.parse(env.GOOGLE_SA_KEY);
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now, exp: now + 3600,
  }));
  const pem = sa.private_key.replace(/-----[A-Z ]+-----|\n/g, "");
  const keyBytes = Uint8Array.from(atob(pem), c => c.charCodeAt(0));
  const key = await crypto.subtle.importKey(
    "pkcs8", keyBytes.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, enc.encode(`${header}.${claims}`));
  const jwt = `${header}.${claims}.${b64url(sig)}`;

  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=${encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer")}&assertion=${jwt}`,
  });
  if (!r.ok) throw new Error(`google token ${r.status}: ${await r.text()}`);
  const j = await r.json();
  tokenCache = { token: j.access_token, exp: now + (j.expires_in || 3600) };
  return tokenCache.token;
}

/**
 * Multi-offer support: the page sends an opaque pack KEY, never a price —
 * product name and price are resolved server-side from this whitelist. An
 * unknown or absent key falls through to the env defaults (the live 189
 * offer), so the original /pages/lure-her keeps working unchanged.
 */
const PACKS = {
  "night-day-249": { product: "LureHer Night+Day", price: "249" },
};
function packOf(o) {
  return (o.pack && PACKS[o.pack]) || null;
}

/**
 * Column K = "campaign|adset|ad". Meta never sends a literal `utm_data` param,
 * it sends the three parts SEPARATELY as utm_campaign / utm_term / utm_content.
 * The old YouCan store-header script combined them client-side; this standalone
 * page does not, so `at.utm_data` was always empty and column K silently died
 * when traffic finished moving to the Pages LP on 2026-07-18. Combine here.
 */
function utmData(at) {
  if (at.utm_data) return at.utm_data;                 // legacy/pre-combined
  return [at.utm_campaign, at.utm_term, at.utm_content].filter(Boolean).join("|");
}

/**
 * Row layout = the REAL Youcan-Orders header (verified 2026-07-17):
 * A Order ID | B Order date | C Product name | D Product variant | E City
 * F Region(address) | G Full name | H Phone (+212...) | I Variant price
 * J utm_source | K utm_data (campaign|adset|ad) | L Customer IP
 * M commentaire | N Etat_confirmation  [+ O event_id | P lang, extra]
 */
function buildRow(o, env) {
  const at = o.attribution || {};
  const pack = packOf(o);
  return [
    o.order_id, o.date, pack ? pack.product : (env.PRODUCT_NAME || "Lure her"), "default",
    o.city, o.address, o.name,
    "'+212" + o.phone.slice(1),        // leading ' = literal text in Sheets, keeps the +
    pack ? pack.price : (env.PRICE_MAD || "189"),
    at.utm_source || "organic", utmData(at), o.ip || "",
    // row ends at N — O+ ("2eme jour"...) are the agents' working columns
  ];
}

async function nextOrderId(token, env) {
  // Continue the numeric YouCan sequence (owner rule 2026-07-17): read the
  // last numeric Order ID in column A and +1. Falls back to a CB- id if the
  // read fails — an order must never be lost over an id.
  const tab = encodeURIComponent(env.SHEET_TAB);
  const r = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}/values/${tab}!A:A?majorDimension=COLUMNS`,
    { headers: { Authorization: `Bearer ${token}` } });
  if (!r.ok) throw new Error(`id read ${r.status}`);
  const col = ((await r.json()).values || [[]])[0];
  for (let i = col.length - 1; i >= 0; i--) {
    const n = parseInt(col[i], 10);
    if (Number.isFinite(n)) return String(n + 1);
  }
  throw new Error("no numeric id found");
}

async function appendToSheet(o, env) {
  const token = await googleToken(env);
  try { o.order_id = await nextOrderId(token, env); } catch { /* keep CB- fallback id */ }
  const tab = encodeURIComponent(env.SHEET_TAB);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}` +
    `/values/${tab}!A:N:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ values: [buildRow(o, env)] }),
  });
  if (!r.ok) throw new Error(`sheets append ${r.status}: ${await r.text()}`);
}

// ------------------------------------------------------------- Meta CAPI

async function sendCapiLead(o, req, env) {
  if (!env.PIXEL_ID || !env.CAPI_TOKEN) return;
  const ud = {
    ph: [await sha256hex("212" + o.phone.slice(1))],           // E.164 digits, hashed
    fn: [await sha256hex(o.name.toLowerCase().trim())],
    ct: [await sha256hex(o.city.toLowerCase().replace(/\s+/g, ""))],
    country: [await sha256hex("ma")],
    client_ip_address: req.headers.get("CF-Connecting-IP") || undefined,
    client_user_agent: req.headers.get("User-Agent") || undefined,
  };
  const fbclid = (o.attribution || {}).fbclid;
  if (fbclid) ud.fbc = `fb.1.${Date.now()}.${fbclid}`;

  const body = {
    data: [{
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      event_id: o.event_id,                                    // dedup vs browser pixel
      action_source: "website",
      event_source_url: o.source_url,
      user_data: ud,
      custom_data: { currency: "MAD", value: Number((packOf(o) || {}).price || env.PRICE_MAD || 189) },
    }],
  };
  if (env.CAPI_TEST_CODE) body.test_event_code = env.CAPI_TEST_CODE;

  const r = await fetch(
    `https://graph.facebook.com/v21.0/${env.PIXEL_ID}/events?access_token=${env.CAPI_TOKEN}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`capi ${r.status}: ${await r.text()}`);
}

// ------------------------------------------------------ failure channels

async function telegramAlert(o, err, env) {
  if (!env.TG_BOT_TOKEN || !env.TG_CHAT_ID) return false;
  const text =
    `🚨 ORDER NOT IN SHEET — enter manually:\n` +
    `${o.order_id} · ${o.date}\n` +
    `👤 ${o.name}\n📞 ${o.phone}\n📍 ${o.city} — ${o.address}\n` +
    `lang ${o.lang} · ${JSON.stringify(o.attribution || {})}\n` +
    `error: ${String(err).slice(0, 300)}`;
  const r = await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: env.TG_CHAT_ID, text }),
  });
  return r.ok;
}

async function kvStash(o, env) {
  if (!env.ORDER_DLQ) return false;
  try {
    await env.ORDER_DLQ.put(`order:${o.order_id}`, JSON.stringify(o),
      { expirationTtl: 60 * 60 * 24 * 30 });
    return true;
  } catch { return false; }
}

// ---------------------------------------------------------------- handler

export async function onRequestPost({ request, env, waitUntil }) {
  let body;
  try { body = await request.json(); }
  catch { return json({ ok: false, error: "bad json" }, 400); }

  const phone = normPhone(body.phone);
  const name = String(body.name || "").trim().slice(0, 120);
  const city = String(body.city || "").trim().slice(0, 120);
  const address = String(body.address || "").trim().slice(0, 240);
  if (!phone || !name || !city) {
    return json({ ok: false, error: "missing/invalid fields" }, 422);
  }

  const order = {
    order_id: "CB-" + Date.now().toString(36).toUpperCase() +
              Math.random().toString(36).slice(2, 5).toUpperCase(),
    date: casablancaNow(),
    name, phone, city, address,
    ip: request.headers.get("CF-Connecting-IP") || "",
    lang: String(body.lang || "ar").slice(0, 5),
    event_id: String(body.event_id || "").slice(0, 64),
    pack: String(body.pack || "").slice(0, 40),
    attribution: typeof body.attribution === "object" && body.attribution ? body.attribution : {},
    source_url: request.headers.get("Referer") || "https://cleopatra.beauty/pages/lure-her",
  };

  // 1) sheet append with retries
  let sheetOk = false, lastErr = null;
  for (let i = 0; i < 3 && !sheetOk; i++) {
    try { await appendToSheet(order, env); sheetOk = true; }
    catch (e) { lastErr = e; if (i < 2) await new Promise(r => setTimeout(r, 400 * (i + 1))); }
  }

  // 2) failure ladder — capture the lead SOMEWHERE before answering
  let captured = sheetOk;
  if (!sheetOk) {
    const [tg, kv] = await Promise.all([
      telegramAlert(order, lastErr, env).catch(() => false),
      kvStash(order, env),
    ]);
    captured = tg || kv;
  }

  // 3) CAPI — never blocks the customer response
  waitUntil(sendCapiLead(order, request, env).catch(() => {}));

  if (!captured) return json({ ok: false, error: "capture failed" }, 500);
  return json({ ok: true, order_id: order.order_id });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status, headers: { "Content-Type": "application/json" },
  });
}

