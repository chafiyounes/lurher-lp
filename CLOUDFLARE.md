# Cloudflare Pages deployment — standalone lureHer LP (post-YouCan)

The `public/` folder + `functions/` folder are a complete standalone site:
same page, same look, no YouCan. Orders go straight to the confLureHer sheet
+ Meta CAPI. `src/` stays frozen for the YouCan loader until DNS cutover,
then dies with the YouCan subscription.

```
public/pages/lure-her/index.html   the LIVE LP (same path as the live YouCan URL)
public/assets/{styles.css,script.js}          <- lure-her's assets
public/pages/lureher/index.html    the NEW-OFFER LP (Night + Day, 249)
public/assets/lureher/{styles.css,script.js}  <- lureher's OWN assets
public/images/, public/reviews/    shared assets, same-origin (no jsDelivr)
public/_redirects                  / -> /pages/lure-her/
functions/api/order.js             order handler (sheet + CAPI + failure ladder)
build_standalone.py                regenerates both pages from their sources
standalone.config.json             pixel_id
```

## Two pages, deliberately isolated

| | `/pages/lure-her/` | `/pages/lureher/` |
|---|---|---|
| offer | LIVE — 189 + Layton decant | NEW — Night + Day, 249 |
| body source | `src_live/page.html` (frozen at DEPLOY_SHA 3a8ad7e) | `src_new/page.html` |
| css / js | `/assets/*` | `/assets/lureher/*` |
| traffic | real ads point here | none until launch |

`src_new/page.html` and `/assets/lureher/*` started as **byte-copies** of the live
page's. They have separate files **on purpose**: the new page gets rewritten
heavily (copy, offer, styling) and a shared stylesheet would mean every
experiment risks breaking the page currently taking real orders.

⚠️ Editing `/assets/styles.css` or `/assets/script.js` changes the **live** page.
For new-offer work edit `/assets/lureher/*` and `src_new/page.html` only.

Both pages post to the same `functions/api/order.js`. If the new offer needs a
different price or product name in the sheet row, that is a change to the order
handler (or a hidden field), not a second endpoint.

## One-time setup (owner, ~15 min)

1. **Cloudflare account** — sign up at cloudflare.com with GitHub.
2. **Workers & Pages → Create → Pages → Connect to git** → pick
   `Naim1234-sys/lureher-lp`, branch `main`.
   - Build command: *(leave empty)*
   - Build output directory: `public`
3. **Settings → Environment variables** (Production) — add:

   | Name | Value | Secret? |
   |---|---|---|
   | `GOOGLE_SA_KEY` | full JSON of the service-account key (same file as `meta-ads/agents/creds/service_account.json`) | ✅ |
   | `SHEET_ID` | confLureHer spreadsheet id (from its URL) | |
   | `SHEET_TAB` | intake tab name the distribution code reads | |
   | `PIXEL_ID` | `597702836290841` | |
   | `CAPI_TOKEN` | Events Manager → pixel → Settings → Conversions API → Generate access token | ✅ |
   | `TG_BOT_TOKEN` | same bot as the daily digest | ✅ |
   | `TG_CHAT_ID` | `1271431918` | |
   | `CAPI_TEST_CODE` | *(only while testing — from Events Manager → Test events; REMOVE for production)* | |

4. **Share the sheet** with the service account as **Editor**
   (`conf-reader@lureher.iam.gserviceaccount.com`).
5. Deploy → site is live at `<project>.pages.dev`. Test BEFORE touching DNS:
   - open `https://<project>.pages.dev/pages/lure-her/`
   - place a test order (name "TEST CLOUDFLARE") → row appears in the sheet
   - Events Manager → Test events → the `Lead` arrives via both browser + server,
     shown as deduplicated
6. **Cutover** (when parallel tests pass): Cloudflare → add site `cleopatra.beauty`
   → follow nameserver instructions → in DNS, point the apex/`www` at the Pages
   project (CNAME). Pages → Custom domains → add `cleopatra.beauty`.
   Ads keep pointing at `https://cleopatra.beauty/pages/lure-her` — URL unchanged,
   no ad edits, no learning reset.
7. After 48h clean: cancel YouCan.

## Editing the page afterwards

- Copy/design edits: edit `src/page.html` / `src/styles.css` as before, then run
  `python build_standalone.py` and commit — Pages redeploys automatically on push.
  (`public/assets/script.js` is edited directly — it diverged from `src/script.js`
  when the YouCan submit was replaced.)

## Row format written to the sheet

`A OrderID · B date (Casablanca time) · C product · D variant("-") · E city ·
F address · G name · H phone · I price · J..N empty (agents' columns) ·
O utm_source · P utm_campaign · Q utm_content · R fbclid · S event_id · T lang`

Columns O-T are new (attribution — enables per-ad cost-per-delivered later);
anything reading A..N is unaffected.

## Failure behavior (gestion de failure)

Sheet write retries 3×. If still failing: full order lands in Telegram
(manual entry possible in 30s) + KV dead-letter if the `ORDER_DLQ` binding is
added. Customer sees success as long as the order was captured anywhere.
Total capture failure (all channels down) = customer sees "try again".
