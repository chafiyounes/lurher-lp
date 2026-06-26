
(function () {
  "use strict";


  if (!document.getElementById("v34-flicker-prevent")) {
    var style = document.createElement("style");
    style.id = "v34-flicker-prevent";
    style.textContent = "#app { display: none !important; } #v34-root { display: none; } .loader-active #v34-root { display: block !important; }";
    document.head.appendChild(style);
  }

  var REPO = "chafiyounes/lurher-lp";
  var BRANCH = "main";
  var LOADER_VERSION = "lureher-v1-0";
  var BASE = "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/";

  var FILES = {
    css: BASE + "src/styles.css",
    html: BASE + "src/page.html",
    js: BASE + "src/script.js"
  };

  function detectV34Lang() {
    var supported = ["fr", "ar"];
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


  var cacheBuster = "?t=" + new Date().getTime();

  console.log("[V34 Loader] v" + LOADER_VERSION + " → " + BASE);
  if (window.location && window.location.href && window.location.href.indexOf("jsdelivr") !== -1) {
    console.warn("[V34 Loader] OLD jsdelivr loader detected in page — replace footer snippet with latest from repo.");
  }


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

      if (!document.body) {
        setTimeout(doInject, 20);
        return;
      }

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

        var earlyLang = window.__V34_INITIAL_LANG || "fr";
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


      var flickerPrevent = document.getElementById("v34-flicker-prevent");
      if (flickerPrevent) flickerPrevent.remove();
    }
    showDebug();
  });
})();
