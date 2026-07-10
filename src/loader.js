
(function () {
  "use strict";

  // This loader is designed for the STORE-LEVEL header/footer code (which
  // executes before YouCan renders any content — page-builder blocks run too
  // late and let the native page flash first). Because store-level code runs
  // on EVERY page, this gate makes it a no-op everywhere except the LP.
  var RUN_ON_PATHS = /^\/pages\/(lure-her|lureher-1)\/?$/;
  if (!RUN_ON_PATHS.test(window.location.pathname || "")) return;

  // Idempotence: if the loader is accidentally present twice (store header +
  // a leftover page-builder block), the second copy must do nothing —
  // otherwise the page injects twice and form handlers double-fire.
  if (window.__V34_LOADER_RAN) return;
  window.__V34_LOADER_RAN = true;

  /* ----------------------------------------------------------------------
   * Lure Her — YouCan footer loader
   *
   * Primary CDN  : jsDelivr @DEPLOY_SHA — fast, globally cached, exact version
   * Fallback 1   : raw.githubusercontent @DEPLOY_SHA — same commit, redundancy
   * Fallback 2   : jsDelivr @main — if footer SHA wasn't bumped after a push
   * Graceful fail: if ALL sources fail, OR the network is too slow, we send
   *                the customer to the proven image-based page (FALLBACK_URL)
   *                so they always land on something that sells. (With ?debug=1
   *                we stay put and show the error instead of redirecting.)
   * Debug box    : the red diagnostic banner now appears ONLY with ?debug=1
   *                in the URL — never to real customers.
   *
   * On each deploy: bump DEPLOY_SHA + LOADER_VERSION, paste footer once.
   * -------------------------------------------------------------------- */

  var REPO = "chafiyounes/lurher-lp";
  var BRANCH = "main";
  // Bump on each deploy — pins HTML/CSS/JS to an exact commit (no raw @main 5-min lag).
  var DEPLOY_SHA = "3a8ad7e";
  var LOADER_VERSION = "lureher-v5-12";

  // jsDelivr uses @ref; raw uses /ref/ — note the different shape.
  var CDN_BASE = "https://cdn.jsdelivr.net/gh/" + REPO + "@" + DEPLOY_SHA + "/";
  var RAW_BASE = "https://raw.githubusercontent.com/" + REPO + "/" + DEPLOY_SHA + "/";
  var CDN_MAIN = "https://cdn.jsdelivr.net/gh/" + REPO + "@" + BRANCH + "/";
  var BASE = CDN_MAIN; // OG images track @main (images use ?v= cache bust)

  var FETCH_TIMEOUT_MS = 5000; // after this we stop waiting and fall back
  var DEBUG = /[?&]debug=1/.test(window.location.search || "");

  // Where to send customers if our custom page can't load: the proven,
  // image-based YouCan landing page. The query string is preserved so ad
  // click IDs / UTMs (fbclid, utm_*) survive the redirect for attribution.
  var FALLBACK_URL = "https://cleopatra.beauty/pages/lure-her";

  var FILES = { css: "src/styles.css", html: "src/page.html", js: "src/script.js" };

  // ---- 1. Anti-flicker: hide YouCan's default page until ours is ready ----
  // Instead of a stark white gap, show a branded splash (cream bg + pulsing
  // logo) until the page swaps in. The overlay lives in the same style tag,
  // so revealNativePage() (fallback) removes it together with the hide-rule.
  if (!document.getElementById("v34-flicker-prevent")) {
    var style = document.createElement("style");
    style.id = "v34-flicker-prevent";
    style.textContent =
      "#app { display: none !important; } " +
      "#v34-root { display: none; } " +
      ".loader-active #v34-root { display: block !important; } " +
      "html::before { content: ''; position: fixed; inset: 0; z-index: 99998; " +
      "background: #f8f3ea url('" + CDN_MAIN + "images/logos/lureher-logo-nav.webp?v=10') center / 120px auto no-repeat; " +
      "animation: v34pulse 1.3s ease-in-out infinite; } " +
      "html.v34-ready::before { display: none; } " +
      "@keyframes v34pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.55; } }";
    document.head.appendChild(style);
  }

  var activated = false;

  // Drop the hide-rule → YouCan's native page (with its working COD form) shows.
  function revealNativePage(reason) {
    var fp = document.getElementById("v34-flicker-prevent");
    if (fp) fp.parentNode && fp.parentNode.removeChild(fp);
    console.warn("[V34 Loader] Fallback → showing YouCan native page. Reason:", reason);
  }

  function showDebugBox(err) {
    function paint() {
      if (!document.body) { setTimeout(paint, 20); return; }
      var errBox = document.createElement("div");
      errBox.style.cssText = "position:fixed;top:0;left:0;width:100%;background:#D0021B;color:white;z-index:999999;padding:24px;font-size:16px;font-family:sans-serif;box-sizing:border-box;border-bottom:4px solid #000;";
      var msg = err ? (err.stack || err.message || String(err)) : "Unknown Error";
      errBox.innerHTML = "<strong style='font-size:20px'>[DEBUG] V34 Loader failed</strong><br><br><b>Error:</b> " + msg;
      document.body.appendChild(errBox);
    }
    paint();
  }

  // Send the customer to the proven image-based page. Guards against a redirect
  // loop if the loader ever runs ON that page (then we reveal the native shell).
  function goToFallback(reason) {
    try {
      if ((window.location.pathname || "").indexOf("/pages/lure-her") !== -1) {
        revealNativePage(reason + " (already on fallback page)");
        return;
      }
    } catch (e) {}
    console.warn("[V34 Loader] Redirecting to image-based page. Reason:", reason);
    window.location.replace(FALLBACK_URL + (window.location.search || ""));
  }

  // Single failure handler — used by fetch errors, timeouts, AND injection errors.
  function handleFailure(err) {
    if (activated) return; // page already swapped in successfully; ignore late noise
    var reason = err && err.message ? err.message : String(err);
    console.error("[V34 Loader] Load failed:", err);
    var stray = document.getElementById("v34-root");
    if (stray && stray.parentNode) stray.parentNode.removeChild(stray);
    if (DEBUG) {
      // developer mode: stay on the page, reveal the native shell, show the error
      revealNativePage(reason);
      showDebugBox(err);
      return;
    }
    goToFallback(reason);
  }

  // Read ?lang= from the page URL — this is the "language variable" you put in
  // the ad link (e.g. ...?lang=fr for French ads, ...?lang=ar for Arabic ads).
  function getLangParam() {
    try {
      var m = /[?&]lang=([a-zA-Z]{2})/.exec(window.location.search || "");
      if (m) {
        var v = m[1].toLowerCase();
        if (v === "en") return "ar";          // English not supported → Arabic
        if (v === "fr" || v === "ar") return v;
      }
    } catch (e) {}
    return null;
  }

  // Priority: ad-link ?lang= wins → then saved preference → then default Arabic.
  function detectV34Lang() {
    var supported = ["fr", "ar"];
    var fromUrl = getLangParam();
    if (fromUrl) return fromUrl;
    try {
      var saved = localStorage.getItem("lureher_lang");
      if (saved === "en") return "ar";
      if (saved && supported.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return "ar";
  }

  window.__V34_INITIAL_LANG = detectV34Lang();

  var ASSET_VERSION = "10";
  var LCP_HERO_IMAGE = CDN_BASE + "images/hero/h-couple-v2-720.webp?v=" + ASSET_VERSION;
  var LCP_HERO_SRCSET =
    CDN_BASE + "images/hero/h-couple-v2-720.webp?v=" + ASSET_VERSION + " 720w, " +
    CDN_BASE + "images/hero/h-couple-v2-800.webp?v=" + ASSET_VERSION + " 800w";
  var MATERIAL_ICONS =
    "block,chevron_left,chevron_right,expand_more,favorite,forum,home,language," +
    "local_mall,local_shipping,location_on,lock,mic,payments,person,phone,photo_camera,published_with_changes," +
    "schedule,science,verified,verified_user";
  var FONT_STYLESHEET =
    "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700" +
    "&family=Outfit:wght@400;500;600;700" +
    "&family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600" +
    "&family=El+Messiri:wght@500;600;700&display=swap";
  var SYMBOLS_STYLESHEET =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" +
    "&icon_names=" + MATERIAL_ICONS + "&display=swap";

  function injectHeadResources() {
    if (document.getElementById("v34-head-resources")) return;
    var wrap = document.createElement("div");
    wrap.id = "v34-head-resources";
    wrap.innerHTML = [
      '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>',
      '<link rel="dns-prefetch" href="https://raw.githubusercontent.com">',
      '<link rel="preconnect" href="https://fonts.googleapis.com">',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
      '<link rel="preload" as="image" href="' + LCP_HERO_IMAGE + '" imagesrcset="' + LCP_HERO_SRCSET + '" imagesizes="100vw" fetchpriority="high">',
      '<link rel="stylesheet" href="' + FONT_STYLESHEET + '">',
      '<link rel="stylesheet" href="' + SYMBOLS_STYLESHEET + '">'
    ].join("");
    while (wrap.firstChild) document.head.appendChild(wrap.firstChild);
  }

  injectHeadResources();

  function injectSeoMeta() {
    if (document.getElementById("v34-seo-meta")) return;
    var wrap = document.createElement("div");
    wrap.id = "v34-seo-meta";
    wrap.innerHTML = [
      '<meta name="description" content="Lure Her — باك عطر فاخر للرجال: 50ml كيدوم طول النهار + Layton أصلي هدية. توصيل مجاني والدفع عند الاستلام في المغرب.">',
      '<meta property="og:title" content="Lure Her — باك العطر الفاخر للرجال">',
      '<meta property="og:description" content="عطر مغناطيسي كيدوم طول النهار + Layton أصلي هدية. الدفع عند الاستلام، توصيل مجاني لكل المغرب — 189 درهم.">',
      '<meta property="og:image" content="' + BASE + 'images/hero/h-couple-v2-800.webp?v=' + ASSET_VERSION + '">',
      '<meta property="og:type" content="product">',
      '<meta name="twitter:card" content="summary_large_image">',
      '<meta name="twitter:title" content="Lure Her — باك العطر الفاخر للرجال">',
      '<meta name="twitter:description" content="عطر مغناطيسي + Layton أصلي هدية — الدفع عند الاستلام.">',
      '<meta name="twitter:image" content="' + BASE + 'images/hero/h-couple-v2-800.webp?v=' + ASSET_VERSION + '">'
    ].join("");
    while (wrap.firstChild) document.head.appendChild(wrap.firstChild);
    if (!document.title || document.title === "test2") {
      document.title = "Lure Her — باك العطر الفاخر للرجال";
    }
  }

  injectSeoMeta();

  // jsDelivr @SHA = fast global CDN + exact version. raw @SHA = instant fallback.
  // CDN @main = last resort if footer SHA wasn't bumped after a push.
  console.log("[V34 Loader] v" + LOADER_VERSION + " @ " + DEPLOY_SHA + " → jsDelivr, raw, @main");

  // ---- 2. Fetch one file: jsDelivr @SHA → raw @SHA → jsDelivr @main ----
  function fetchFile(relPath) {
    function get(base) {
      return fetch(base + relPath).then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status + " @ " + base);
        return r.text();
      });
    }
    return get(CDN_BASE).catch(function (e1) {
      console.warn("[V34 Loader] jsDelivr @" + DEPLOY_SHA + " miss for " + relPath + " → raw:", e1.message);
      return get(RAW_BASE).catch(function (e2) {
        console.warn("[V34 Loader] raw @" + DEPLOY_SHA + " miss → @main:", e2.message);
        return get(CDN_MAIN);
      });
    });
  }

  // ---- 3. Bound the whole load with a timeout so a slow net can't hang on white ----
  function withTimeout(promise, ms) {
    return new Promise(function (resolve, reject) {
      var to = setTimeout(function () { reject(new Error("timeout after " + ms + "ms")); }, ms);
      promise.then(
        function (v) { clearTimeout(to); resolve(v); },
        function (e) { clearTimeout(to); reject(e); }
      );
    });
  }

  withTimeout(
    Promise.all([fetchFile(FILES.css), fetchFile(FILES.html), fetchFile(FILES.js)]),
    FETCH_TIMEOUT_MS
  )
    .then(function (results) {
      var cssText = results[0];
      var htmlText = results[1];
      var jsText = results[2];

      console.log("[V34 Loader] Resources fetched. Waiting for document.body…");

      function doInject() {
        if (!document.body) { setTimeout(doInject, 20); return; }

        try {
          var styleEl = document.getElementById("v34-styles");
          if (!styleEl) {
            styleEl = document.createElement("style");
            styleEl.id = "v34-styles";
            document.head.appendChild(styleEl);
          }
          styleEl.textContent = cssText;

          var target = document.getElementById("v34-root");
          if (!target) {
            target = document.createElement("div");
            target.id = "v34-root";
            document.body.appendChild(target);
          }
          target.innerHTML = htmlText;

          var earlyLang = window.__V34_INITIAL_LANG || "ar";
          document.documentElement.setAttribute("lang", earlyLang);
          document.documentElement.setAttribute("dir", earlyLang === "ar" ? "rtl" : "ltr");
          var appRoot = target.querySelector(".app");
          if (appRoot) {
            appRoot.setAttribute("lang", earlyLang);
            appRoot.setAttribute("dir", earlyLang === "ar" ? "rtl" : "ltr");
          }
          var LANG_LABELS = { fr: "Français", ar: "العربية" };
          var langLabel = target.querySelector("#langLabel");
          if (langLabel) langLabel.textContent = LANG_LABELS[earlyLang] || earlyLang;

          var scriptEl = document.getElementById("v34-script");
          if (scriptEl) scriptEl.remove();
          scriptEl = document.createElement("script");
          scriptEl.id = "v34-script";
          scriptEl.textContent = jsText;
          document.body.appendChild(scriptEl);

          document.body.classList.add("loader-active");
          document.documentElement.classList.add("v34-ready");
          activated = true;
          console.log("[V34 Loader] Activation completed successfully.");
        } catch (injectionError) {
          handleFailure(injectionError);
        }
      }

      doInject();
    })
    .catch(handleFailure);
})();
