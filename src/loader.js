/* ============================================================
   YOUCAN LOADER — Fetches HTML, CSS, JS from GitHub
   
   Paste ONLY this script into YouCan's Footer code box.
   It pulls the latest files from your GitHub repo on every
   page load. Edit via Antigravity → push to GitHub → done.
   ============================================================ */
(function () {
  "use strict";

  var REPO = "chafiyounes/mapper-youcant";
  var BRANCH = "main";
  var BASE = "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/";

  var FILES = {
    css:  BASE + "src/styles.css",
    html: BASE + "src/page.html",
    js:   BASE + "src/script.js"
  };

  // ── 1. Inject CSS ──
  fetch(FILES.css)
    .then(function (r) { return r.text(); })
    .then(function (css) {
      var style = document.createElement("style");
      style.id = "v34-styles";
      style.textContent = css;
      document.head.appendChild(style);
    })
    .catch(function (e) { console.error("[V34 Loader] CSS failed:", e); });

  // ── 2. Inject HTML ──
  fetch(FILES.html)
    .then(function (r) { return r.text(); })
    .then(function (html) {
      // Find or create the container
      var target = document.getElementById("v34-root");
      if (!target) {
        target = document.createElement("div");
        target.id = "v34-root";
        document.body.appendChild(target);
      }
      target.innerHTML = html;
      document.body.classList.add("loader-active");

      // ── 3. Inject JS (after HTML is in the DOM) ──
      fetch(FILES.js)
        .then(function (r) { return r.text(); })
        .then(function (js) {
          var script = document.createElement("script");
          script.id = "v34-script";
          script.textContent = js;
          document.body.appendChild(script);
        })
        .catch(function (e) { console.error("[V34 Loader] JS failed:", e); });
    })
    .catch(function (e) { console.error("[V34 Loader] HTML failed:", e); });
})();
