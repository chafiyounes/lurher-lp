
(function () {
  "use strict";

  /* ----------------------------------------------------------------------
   * Lure Her — YouCan footer loader
   *
   * Primary CDN  : jsDelivr  — fast, globally cached, built to be hotlinked
   *                at ad scale (raw.githubusercontent is NOT a CDN and is
   *                rate-limited).
   * Fallback     : raw.githubusercontent — always fresh; used only if
   *                jsDelivr is unreachable, so we have redundancy.
   * Graceful fail: if BOTH sources fail, OR the network is too slow, we send
   *                the customer to the proven image-based page (FALLBACK_URL)
   *                so they always land on something that sells. (With ?debug=1
   *                we stay put and show the error instead of redirecting.)
   * Debug box    : the red diagnostic banner now appears ONLY with ?debug=1
   *                in the URL — never to real customers.
   * -------------------------------------------------------------------- */

  var REPO = "chafiyounes/lurher-lp";
  var BRANCH = "main";
  var LOADER_VERSION = "lureher-v2-0";

  // jsDelivr uses @branch; raw uses /branch/ — note the different shape.
  var CDN_BASE = "https://cdn.jsdelivr.net/gh/" + REPO + "@" + BRANCH + "/";
  var RAW_BASE = "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/";
  var BASE = CDN_BASE; // used by the OG/SEO image meta below

  var FETCH_TIMEOUT_MS = 5000; // after this we stop waiting and fall back
  var DEBUG = /[?&]debug=1/.test(window.location.search || "");

  // Where to send customers if our custom page can't load: the proven,
  // image-based YouCan landing page. The query string is preserved so ad
  // click IDs / UTMs (fbclid, utm_*) survive the redirect for attribution.
  var FALLBACK_URL = "https://cleopatra.beauty/pages/lure-her";

  var FILES = { css: "src/styles.css", html: "src/page.html", js: "src/script.js" };

  // ---- 1. Anti-flicker: hide YouCan's default page until ours is ready ----
  if (!document.getElementById("v34-flicker-prevent")) {
    var style = document.createElement("style");
    style.id = "v34-flicker-prevent";
    style.textContent = "#app { display: none !important; } #v34-root { display: none; } .loader-active #v34-root { display: block !important; }";
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

  function injectSeoMeta() {
    if (document.getElementById("v34-seo-meta")) return;
    var wrap = document.createElement("div");
    wrap.id = "v34-seo-meta";
    wrap.innerHTML = [
      '<meta name="description" content="Lure Her — عطر فيرومونات للرجال يدوم طول النهار، جاذبية وثقة لا تُقاوَم. توصيل مجاني والدفع عند الاستلام في المغرب.">',
      '<meta property="og:title" content="Lure Her — عطر الفيرومونات للرجال">',
      '<meta property="og:description" content="رائحة فاخرة تدوم +8 ساعات وفيرومونات تزيد جاذبيتك. الدفع عند الاستلام، توصيل مجاني لكل المغرب.">',
      '<meta property="og:image" content="' + BASE + 'images/hero/01-main.png">',
      '<meta property="og:type" content="product">',
      '<meta name="twitter:card" content="summary_large_image">',
      '<meta name="twitter:title" content="Lure Her — عطر الفيرومونات للرجال">',
      '<meta name="twitter:description" content="رائحة فاخرة تدوم وفيرومونات تزيد جاذبيتك — الدفع عند الاستلام.">',
      '<meta name="twitter:image" content="' + BASE + 'images/hero/01-main.png">'
    ].join("");
    while (wrap.firstChild) document.head.appendChild(wrap.firstChild);
    if (!document.title || document.title === "test2") {
      document.title = "Lure Her — عطر الفيرومونات للرجال";
    }
  }

  injectSeoMeta();

  // raw.githubusercontent honors ?t= to bust caches; jsDelivr ignores query
  // strings (purge via purge.jsdelivr.net instead), so we only append for raw.
  var cacheBuster = "?t=" + new Date().getTime();

  console.log("[V34 Loader] v" + LOADER_VERSION + " → primary " + CDN_BASE);

  // ---- 2. Fetch one file: try jsDelivr, fall back to raw on any error ----
  function fetchFile(relPath) {
    function get(base, bust) {
      return fetch(base + relPath + (bust ? cacheBuster : "")).then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status + " @ " + base);
        return r.text();
      });
    }
    return get(CDN_BASE, false).catch(function (e) {
      console.warn("[V34 Loader] jsDelivr miss for " + relPath + " → raw fallback:", e.message);
      return get(RAW_BASE, true);
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
