/* ============================================================
   YOUCAN LOADER — Fetches HTML, CSS, JS from GitHub (Parallelized)
   
   Paste this script into YouCan's Header or Footer code box.
   It pulls the latest files from your GitHub repo on every
   page load. Edit via Antigravity → push to GitHub → done.
   ============================================================ */
(function () {
  "use strict";

  // ── Configuration: Only run on these specific URL paths ──
  // If this array is empty, it runs on ALL pages. 
  // Example: ["/products/v34-strips", "/pages/checkout-test"]
  var TARGET_URLS = ["/products/v34", "test2"]; 

  var isTargetPage = TARGET_URLS.length === 0;
  var currentPath = window.location.pathname + window.location.search;
  for (var i = 0; i < TARGET_URLS.length; i++) {
    if (currentPath.indexOf(TARGET_URLS[i]) !== -1) {
      isTargetPage = true;
      break;
    }
  }

  // If we are not on the targeted landing page, stop the script completely and let YouCan load normally.
  if (!isTargetPage) return;

  // ── 0. Prevent Flicker Instantly ──
  if (!document.getElementById("v34-flicker-prevent")) {
    var style = document.createElement("style");
    style.id = "v34-flicker-prevent";
    style.textContent = "#app { display: none !important; } #v34-root { display: none; } .loader-active #v34-root { display: block !important; }";
    document.head.appendChild(style);
  }

  var REPO = "chafiyounes/mapper-youcant";
  var BRANCH = "main";
  var BASE = "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/";

  var FILES = {
    css: BASE + "src/styles.css",
    html: BASE + "src/page.html",
    js: BASE + "src/script.js"
  };

  // Helper to fetch text with cache busting in dev mode
  var cacheBuster = "?t=" + new Date().getTime();

  console.log("[V34 Loader] Starting parallel fetch...");

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

      console.log("[V34 Loader] All resources loaded successfully.");

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

      // ── 3. Inject JS ──
      var scriptEl = document.getElementById("v34-script");
      if (scriptEl) scriptEl.remove(); // Remove old script if exists

      scriptEl = document.createElement("script");
      scriptEl.id = "v34-script";
      scriptEl.textContent = jsText;
      document.body.appendChild(scriptEl);

      // ── 4. Activate ──
      document.body.classList.add("loader-active");
      console.log("[V34 Loader] Activation completed successfully.");
    })
    .catch(function (err) {
      console.error("[V34 Loader] Critical error during load:", err);
      // Fallback: show the default app if loading fails so the store isn't broken
      var flickerPrevent = document.getElementById("v34-flicker-prevent");
      if (flickerPrevent) flickerPrevent.remove();
    });
})();
