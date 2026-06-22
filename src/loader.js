/* ============================================================
   YOUCAN LOADER — Fetches HTML, CSS, JS from GitHub (Parallelized)
   
   Paste this script into YouCan's Header or Footer code box.
   It pulls the latest files from your GitHub repo on every
   page load. Edit via Antigravity → push to GitHub → done.
   ============================================================ */
(function () {
  "use strict";

  // ── 0. Prevent Flicker Instantly ──
  if (!document.getElementById("v34-flicker-prevent")) {
    var style = document.createElement("style");
    style.id = "v34-flicker-prevent";
    style.textContent = "#app { display: none !important; } #v34-root { display: none; } .loader-active #v34-root { display: block !important; }";
    document.head.appendChild(style);
  }

  var REPO = "chafiyounes/mapper-youcant";
  var BRANCH = "main";
  var LOADER_VERSION = "website-fixes-v2-2"; /* bump when asking user to re-paste footer snippet */
  var BASE = "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/";

  var FILES = {
    css: BASE + "src/styles.css",
    html: BASE + "src/page.html",
    js: BASE + "src/script.js"
  };

  function detectV34Lang() {
    var supported = ["ar", "en", "fr"];
    try {
      var saved = localStorage.getItem("v34_lang");
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
      '<meta name="description" content="شرائح Hismile V34 للتبييض — نتائج في 30 دقيقة، آمنة للأسنان الحساسة، الدفع عند الاستلام في المغرب.">',
      '<meta property="og:title" content="Hismile V34 — شرائح تبييض الأسنان">',
      '<meta property="og:description" content="تبييض أسنان فوري في 30 دقيقة — بلا بيروكسيد، توصيل مجاني، الدفع عند الاستلام.">',
      '<meta property="og:image" content="' + BASE + 'images/PP-01-V34Strips_no-badge31_10_15_595x.webp">',
      '<meta property="og:type" content="product">',
      '<meta name="twitter:card" content="summary_large_image">',
      '<meta name="twitter:title" content="Hismile V34 — شرائح تبييض الأسنان">',
      '<meta name="twitter:description" content="تبييض أسنان فوري في 30 دقيقة — الدفع عند الاستلام.">',
      '<meta name="twitter:image" content="' + BASE + 'images/PP-01-V34Strips_no-badge31_10_15_595x.webp">'
    ].join("");
    while (wrap.firstChild) document.head.appendChild(wrap.firstChild);
    if (!document.title || document.title === "test2") {
      document.title = "Hismile V34 — شرائح تبييض الأسنان";
    }
  }

  injectSeoMeta();

  // Helper to fetch text with cache busting in dev mode
  var cacheBuster = "?t=" + new Date().getTime();

  console.log("[V34 Loader] v" + LOADER_VERSION + " → " + BASE);
  if (window.location && window.location.href && window.location.href.indexOf("jsdelivr") !== -1) {
    console.warn("[V34 Loader] OLD jsdelivr loader detected in page — replace footer snippet with latest from repo.");
  }

  // Fetch all resources in parallel
  Promise.all([
    fetch(FILES.css + cacheBuster).then(function (r) { if (!r.ok) throw new Error("CSS HTTP " + r.status); return r.text(); }),
    fetch(FILES.html + cacheBuster).then(function (r) { if (!r.ok) throw new Error("HTML HTTP " + r.status); return r.text(); }),
    fetch(FILES.js + cacheBuster).then(function (r) { if (!r.ok) throw new Error("JS HTTP " + r.status); return r.text(); })
  ])
    .then(function (results) {
    var cssText = results[0];
    var htmlText = results[1];
    var jsText = results[2];

    console.log("[V34 Loader] All resources fetched. Waiting for document.body...");

    function doInject() {
      // 💥 CRITICAL FIX: On mobile, fetch can resolve before HTML parses the body!
      if (!document.body) {
        setTimeout(doInject, 20);
        return;
      }

      try {
        // ── 1. Inject CSS ──
        var styleEl = document.getElementById("v34-styles");
        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = "v34-styles";
          document.head.appendChild(styleEl);
        }
        styleEl.textContent = cssText;

        // ── 2. Inject HTML ──
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
        var langLabel = target.querySelector("#langLabel");
        if (langLabel) langLabel.textContent = earlyLang.toUpperCase();

        // ── 3. Inject JS ──
        var scriptEl = document.getElementById("v34-script");
        if (scriptEl) scriptEl.remove();
        
        scriptEl = document.createElement("script");
        scriptEl.id = "v34-script";
        scriptEl.textContent = jsText;
        document.body.appendChild(scriptEl);

        // ── 4. Activate ──
        document.body.classList.add("loader-active");
        console.log("[V34 Loader] Activation completed successfully.");
      } catch (injectionError) {
        console.error("[V34 Loader] Injection failed (fetch was fine):", injectionError);
        throw injectionError;
      }
    }

    doInject();
  })
  .catch(function (err) {
    console.error("[V34 Loader] Critical error during load:", err);
    
    // VISUAL DEBUGGER FOR PHONE:
    function showDebug() {
      if (!document.body) {
        setTimeout(showDebug, 20);
        return;
      }
      var errBox = document.createElement("div");
      errBox.style.cssText = "position:fixed;top:0;left:0;width:100%;background:#D0021B;color:white;z-index:999999;padding:24px;font-size:16px;font-family:sans-serif;box-sizing:border-box;border-bottom:4px solid #000;";
      var errorMsg = err ? (err.stack || err.message || JSON.stringify(err) || String(err)) : "Unknown Error";
      errBox.innerHTML = "<strong style='font-size:20px'>[DEBUG] V34 Script Failed!</strong><br><br><b>Error:</b> " + errorMsg + "<br><br>Please take a screenshot of this red box and show it to your developer to prove exactly why it isn't working on this phone.";
      document.body.appendChild(errBox);

      // Fallback: show the default app if loading fails so the store isn't broken
      var flickerPrevent = document.getElementById("v34-flicker-prevent");
      if (flickerPrevent) flickerPrevent.remove();
    }
    showDebug();
  });
})();
