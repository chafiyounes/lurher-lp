/* ============================================================
   HISMILE V34 — Landing Page JavaScript
   Moroccan COD Landing Page — Arabic (Darija) default
   ============================================================ */
(function () {
  "use strict";

  console.log(
    "%c[V34] custom script loaded",
    "color:#6C3FA0;font-weight:bold;font-size:14px"
  );

  /* ── i18n Dictionary ── */
  var I18N = {
    /* Announcement */
    announce: {
      ar: "🚚 التوصيل لجميع مدن المغرب — الدفع عند الاستلام",
      en: "🚚 Free Delivery Across Morocco — Cash on Delivery",
      fr: "🚚 Livraison partout au Maroc — Paiement à la livraison"
    },
    nav_shop: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    /* ─── HOME PAGE ─── */
    home_hero_h: {
      ar: "ابتسامتك هي أول حاجة<br>كيشوفوها فيك.",
      en: "Your Smile Is The First Thing<br>People Notice.",
      fr: "Votre sourire est la première chose<br>que les gens remarquent."
    },
    home_hero_sub: {
      ar: "الأسنان البيضا ماشي غير زين — هي ثقة، حضور، وأول انطباع كيبقى فالذاكرة.",
      en: "White teeth aren't just beautiful — they're confidence, presence, and a lasting first impression.",
      fr: "Des dents blanches ne sont pas qu'esthétiques — c'est de la confiance et une première impression durable."
    },
    home_hero_cta: {
      ar: "اكتشف منتجاتنا 👇",
      en: "Discover our products 👇",
      fr: "Découvrez nos produits 👇"
    },
    home_brand_h: { ar: "شنو هي Hismile؟", en: "What is Hismile?", fr: "Qu'est-ce que Hismile ?" },
    home_brand_p: {
      ar: "Hismile هي علامة تجارية عالمية رائدة فمجال تبييض الأسنان. كتستعمل تقنيات متطورة بحال PAP+ وتصحيح اللون بدلاً من المواد الكيماوية القاسية.",
      en: "Hismile is a global leading brand in teeth whitening. It uses advanced tech like PAP+ and colour correction instead of harsh chemicals.",
      fr: "Hismile est une marque mondiale de blanchiment dentaire. Elle utilise des technologies avancées comme PAP+ et la correction de couleur."
    },
    home_feat1_h: { ar: "بلا بيروكسيد", en: "Peroxide-Free", fr: "Sans peroxyde" },
    home_feat1_p: {
      ar: "أغلب منتجات التبييض كتضر المينا. تقنيتنا آمنة 100%.",
      en: "Most whitening products damage enamel. Our tech is 100% safe.",
      fr: "La plupart des produits abîment l'émail. Notre technologie est 100% sûre."
    },

    /* ─── LANDING PAGE (Version 2) ─── */
    land_hero_h: { 
      ar: "ابتسامتك هي أول حاجة كيشوفوها فيك. خليها بيضا.", 
      en: "Your smile is the first thing they see. Make it white.", 
      fr: "Votre sourire est la première chose qu'ils voient. Rendez-le blanc." 
    },
    land_hero_sub: {
      ar: "تخيّل: كتهدر مع شي حد، كتبسم، وكتشوف نظرتو كتبدل. الأسنان البيضا ماشي غير زين — هي ثقة، هي حضور. شرائط V34 كتعطيك هاد الإحساس فـ30 دقيقة فقط.",
      en: "Imagine: you talk to someone, smile, and see their look change. White teeth aren't just beauty — they're confidence, they're presence. V34 strips give you this feeling in just 30 minutes.",
      fr: "Imaginez : vous parlez, souriez et voyez leur regard changer. Les dents blanches ne sont pas qu'une question de beauté — c'est de la confiance. Les bandes V34 vous donnent cette sensation en 30 minutes."
    },
    land_hero_cta: { ar: "صيفط طلبيتك دابا 👇", en: "Order Now 👇", fr: "Commander maintenant 👇" },
    
    trust_guarantee: { ar: "ضمان استرجاع الفلوس", en: "Money-back guarantee", fr: "Garantie de remboursement" },
    trust_ship: { ar: "توصيل لجميع المدن", en: "Delivery to all cities", fr: "Livraison partout" },
    trust_cod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", fr: "Paiement à la livraison" },

    land_why_h: { ar: "علاش V34 مختلفة على كلشي؟", en: "Why is V34 Different?", fr: "Pourquoi V34 est différent ?" },
    land_why_sub: {
      ar: "أغلب منتجات التبييض إما كتاخد أسابيع باش تبان، ولا كتضر المينا ديالك بالماء الأوكسجيني. حنا اخترنا طريق آخر:",
      en: "Most whitening products take weeks or damage enamel. We chose a different path:",
      fr: "La plupart des produits prennent des semaines ou abîment l'émail. Nous avons choisi une autre voie :"
    },
    land_feat1_h: { ar: "🟣 تصحيح اللون الفوري", en: "🟣 Instant Colour Correction", fr: "🟣 Correction de couleur instantanée" },
    land_feat1_p: {
      ar: "اللون البنفسجي كيلغي الاصفرار — نفس مبدأ الشامبو البنفسجي للشعر، ولكن للأسنان. النتيجة كتبان من أول استعمال.",
      en: "Purple tone cancels yellowness — same principle as purple shampoo for hair, but for teeth. Visible from first use.",
      fr: "Le ton violet annule le jaunissement — même principe que le shampoing violet. Visible dès la première utilisation."
    },
    land_feat2_h: { ar: "⚪ تبييض PAP+", en: "⚪ PAP+ Whitening", fr: "⚪ Blanchiment PAP+" },
    land_feat2_p: {
      ar: "تبييض حقيقي كيزيد مع الوقت — بلا بيروكسيد، آمن 100% على المينا والأسنان الحساسة.",
      en: "Real whitening that improves over time — peroxide-free, 100% safe for enamel.",
      fr: "Blanchiment réel qui s'améliore — sans peroxyde, 100% sûr."
    },

    land_benefits_h: { ar: "شنو غادي تربح:", en: "What you will gain:", fr: "Ce que vous y gagnez :" },
    ben_1: { ar: "أسنان أبيض ملحوظ من أول استعمال", en: "Visibly whiter teeth from first use", fr: "Dents visiblement plus blanches dès la première utilisation" },
    ben_2: { ar: "نتيجة فـ30 دقيقة — ماشي أسابيع", en: "Results in 30 minutes — not weeks", fr: "Résultats en 30 minutes — pas en semaines" },
    ben_3: { ar: "آمن تمامًا — بلا ألم، بلا حساسية", en: "Completely safe — no pain, no sensitivity", fr: "Totalement sûr — sans douleur, sans sensibilité" },
    ben_4: { ar: "سهل: حط، استنى 30 دقيقة، نحّي", en: "Easy: apply, wait 30 mins, remove", fr: "Facile : appliquez, attendez 30 min, retirez" },
    ben_5: { ar: "14 استعمال فكل علبة", en: "14 uses in each box", fr: "14 utilisations par boîte" },
    ben_6: { ar: "ضمان استرجاع الفلوس — إلا ماعجبكش، ترجع ليك فلوسك", en: "Money-back guarantee — if you don't like it, get a refund", fr: "Garantie de remboursement — si vous n'aimez pas, vous êtes remboursé" },

    land_ba_h: { ar: "الناس كتخلّص المئات فعيادات التبييض... حنا جبنا ليك نفس النتيجة لدارك.", en: "People pay hundreds at clinics... We brought the same result to your home.", fr: "Les gens paient des centaines en clinique... Nous avons apporté le même résultat chez vous." },
    land_ba_hint: { ar: "← اسحب لكشف النتيجة →", en: "← Drag to reveal →", fr: "← Glissez pour révéler →" },

    rev_title: { ar: "آراء الزبناء ⭐⭐⭐⭐⭐", en: "Customer Reviews ⭐⭐⭐⭐⭐", fr: "Avis Clients ⭐⭐⭐⭐⭐" },
    rev1_name: { ar: "سناء .م", en: "Sanaa .M", fr: "Sanaa .M" },
    rev1_city: { ar: "الدار البيضاء", en: "Casablanca", fr: "Casablanca" },
    rev1_text: { ar: "صراحة ما توقعتش هاد النتيجة! أسناني كانو صفرين بزاف بسبب القهوة، ومن أول استعمال بان الفرق واضح. غادي نزيد نطلب وحدة أخرى.", en: "Honestly didn't expect this! My teeth were very yellow from coffee, and the difference is clear from the first use. Will order another.", fr: "Je ne m'attendais pas à ce résultat ! Mes dents étaient très jaunes à cause du café. La différence est claire dès la première utilisation." },
    rev2_name: { ar: "ياسين .ب", en: "Yassine .B", fr: "Yassine .B" },
    rev2_city: { ar: "الرباط", en: "Rabat", fr: "Rabat" },
    rev2_text: { ar: "التوصيل كان سريع، والمنتج فعال. كيعطي لمعة زوينة للأسنان وكيبيدهم مزيان. شكراً هيسمايل.", en: "Fast delivery, effective product. Gives a nice shine and whitens well. Thanks Hismile.", fr: "Livraison rapide, produit efficace. Donne une belle brillance et blanchit bien. Merci Hismile." },

    land_order_h: { ar: "كل يوم كتأجّل، هو يوم بأسنان أقل بياضًا. صيفط طلبيتك دابا 👇", en: "Every day you delay is a day with less white teeth. Order Now 👇", fr: "Chaque jour de retard est un jour avec des dents moins blanches. Commandez maintenant 👇" },
    land_order_sub: { ar: "الدفع عند الاستلام، بلا خلاص مسبق. التوصيل لجميع مدن المغرب.", en: "Cash on Delivery, no upfront payment. Delivery to all Moroccan cities.", fr: "Paiement à la livraison, aucun paiement d'avance. Livraison dans tout le Maroc." },
    land_price: { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    land_strike: { ar: "350 د.م.", en: "350 MAD", fr: "350 MAD" },
    checkout_badge: { ar: "عرض محدود ⏳", en: "Limited Offer ⏳", fr: "Offre Limitée ⏳" },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_name_ph: { ar: "محمد / فاطمة", en: "Your name", fr: "Votre nom" },
    form_phone_ph: { ar: "06XX XXX XXX", en: "06XX XXX XXX", fr: "06XX XXX XXX" },
    form_city_ph: { ar: "الدار البيضاء، الرباط...", en: "Casablanca, Rabat...", fr: "Casablanca, Rabat..." },
    submit_order: {
      ar: "أكد الطلب — الدفع عند الاستلام",
      en: "Confirm Order — Cash on Delivery",
      fr: "Confirmer la commande — Paiement à la livraison"
    },

    ct_ship: { ar: "توصيل سريع", en: "Fast shipping", fr: "Livraison rapide" },
    ct_guarantee: { ar: "ضمان 100%", en: "100% Guarantee", fr: "Garantie 100%" },

    sticky_name: { ar: "شرائط V34", en: "V34 Strips", fr: "Bandes V34" },
    sticky_price: { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    foot_copy: { ar: "© 2024 HISMILE. جميع الحقوق محفوظة.", en: "© 2024 HISMILE. ALL RIGHTS RESERVED.", fr: "© 2024 HISMILE. TOUS DROITS RÉSERVÉS." }
  };

  /* ── Language Detection & State ── */
  var langs = ["ar", "en", "fr"];
  var currentLangIndex = 0; // Default: Arabic

  try {
    var browserLang = (navigator.language || navigator.userLanguage || "ar").toLowerCase();
    if (browserLang.indexOf("fr") === 0) {
      currentLangIndex = 2;
    } else if (browserLang.indexOf("en") === 0) {
      currentLangIndex = 1;
    }
  } catch (e) { /* fallback to Arabic */ }

  /* ── Routing ── */
  function renderRoute() {
    var hash = window.location.hash || "#landing";
    var viewHome = document.getElementById("view-home");
    var viewLanding = document.getElementById("view-landing");

    if (!viewHome || !viewLanding) return;

    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) { reveals[i].classList.remove("active"); }

    if (hash === "#landing") {
      viewHome.classList.remove("active");
      viewLanding.classList.add("active");
      window.scrollTo(0, 0);
      document.title = "Hismile V34 — اطلب الآن";
    } else {
      viewLanding.classList.remove("active");
      viewHome.classList.add("active");
      window.scrollTo(0, 0);
      document.title = "Hismile — تبييض الأسنان";
    }

    setTimeout(handleScroll, 50);
  }

  window.addEventListener("hashchange", renderRoute);

  /* ── i18n Apply ── */
  function applyLang(index) {
    currentLangIndex = index;
    var l = langs[currentLangIndex];
    var app = document.querySelector(".app");

    if (app) {
      app.setAttribute("lang", l);
      app.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    }

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (I18N[k] && I18N[k][l] != null) {
        nodes[i].innerHTML = I18N[k][l];
      }
    }

    var phNodes = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < phNodes.length; j++) {
      var pk = phNodes[j].getAttribute("data-i18n-placeholder");
      if (I18N[pk] && I18N[pk][l] != null) {
        phNodes[j].setAttribute("placeholder", I18N[pk][l]);
      }
    }

    var label = document.getElementById("langLabel");
    if (label) label.textContent = l.toUpperCase();
  }

  /* ── Language Toggle ── */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest("#langToggle")) {
      var nextIndex = (currentLangIndex + 1) % langs.length;
      applyLang(nextIndex);
    }
  });

  /* ── Scroll Handler ── */
  function handleScroll() {
    var reveals = document.querySelectorAll(".reveal:not(.active)");
    for (var i = 0; i < reveals.length; i++) {
      var wh = window.innerHeight;
      var et = reveals[i].getBoundingClientRect().top;
      if (et < wh - 40) {
        reveals[i].classList.add("active");
      }
    }

    var bottomCta = document.getElementById("bottom-cta");
    var hash = window.location.hash || "#landing";
    if (bottomCta) {
      // Show sticky CTA immediately on landing page, or after scroll on home page
      if (hash === "#landing" || (hash === "#home" && window.scrollY > 400)) {
        bottomCta.classList.add("visible");
      } else {
        bottomCta.classList.remove("visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);

  /* ── Smooth Scroll to Checkout ── */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var btn = e.target.closest(".scroll-to-checkout");
    if (btn) {
      e.preventDefault();
      
      if (window.location.hash !== "#landing") {
        window.location.hash = "#landing";
        setTimeout(function() {
          var section = document.getElementById("checkout-section");
          if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      } else {
        var section = document.getElementById("checkout-section");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });

  /* ── Before/After Slider ── */
  function initSlider() {
    var slider = document.getElementById("slider");
    var sliderAfter = document.getElementById("slider-after");
    var sliderHandle = document.getElementById("slider-handle");

    if (slider && sliderAfter && sliderHandle) {
      var isDragging = false;

      function moveSlider(clientX) {
        var rect = slider.getBoundingClientRect();
        var position = clientX - rect.left;
        if (position < 0) position = 0;
        if (position > rect.width) position = rect.width;
        var pct = (position / rect.width) * 100;
        sliderHandle.style.left = pct + "%";
        sliderAfter.style.clipPath = "inset(0 0 0 " + pct + "%)";
      }

      var startDrag = function (e) {
        isDragging = true;
        var cx = e.touches ? e.touches[0].clientX : e.clientX;
        moveSlider(cx);
        if (e.cancelable) e.preventDefault();
      };
      var moveDrag = function (e) {
        if (!isDragging) return;
        var cx = e.touches ? e.touches[0].clientX : e.clientX;
        moveSlider(cx);
        if (e.cancelable) e.preventDefault();
      };
      var stopDrag = function () { isDragging = false; };

      slider.addEventListener("mousedown", startDrag);
      slider.addEventListener("touchstart", startDrag, { passive: false });
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchend", stopDrag);
      window.addEventListener("mousemove", moveDrag);
      window.addEventListener("touchmove", moveDrag, { passive: false });
      slider.addEventListener("dragstart", function (e) { e.preventDefault(); });
    }
  }

  /* ── Checkout Form ── */
  function initCustomCheckout() {
    var form = document.getElementById("custom-express-checkout-form");
    var submitBtn = document.querySelector("#checkout-section button[type='submit']");
    if (!form || !submitBtn) return;

    function setVueValue(input, value) {
      if (!input) return;
      var proto = Object.getPrototypeOf(input);
      var setter = null;
      var currentProto = proto;
      while (currentProto && !setter) {
        var desc = Object.getOwnPropertyDescriptor(currentProto, "value");
        if (desc && desc.set) {
          setter = desc.set;
          break;
        }
        currentProto = Object.getPrototypeOf(currentProto);
      }
      if (setter) {
        setter.call(input, value);
      } else {
        input.value = value;
      }
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function syncAllInputsToNative() {
      var nativeForm = document.querySelector("#app #express-checkout-form");
      if (!nativeForm) return;

      var inputs = form.querySelectorAll("input, select, textarea");
      for (var i = 0; i < inputs.length; i++) {
        var ourInput = inputs[i];
        var name = ourInput.getAttribute("name");
        if (!name || name === "id" || name === "quantity" || name === "is_page_builder_express_checkout" || name === "extra_payload") continue;
        var nativeInput = nativeForm.querySelector('[name="' + name + '"]');
        if (nativeInput) {
          setVueValue(nativeInput, ourInput.value);
        }
      }
    }

    form.addEventListener("input", function (e) {
      if (e.target && e.target.closest) {
        var group = e.target.closest(".form-group");
        if (group && group.classList.contains("has-error")) {
          group.classList.remove("has-error");
          var errEl = group.querySelector(".error-msg");
          if (errEl) errEl.remove();
        }
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitBtn.disabled) return;

      var hasError = false;
      var fieldsToValidate = ["first_name", "phone", "extra_fields[custom_field_cGzlrqWxXctNnheN]"];
      for (var i = 0; i < fieldsToValidate.length; i++) {
        var name = fieldsToValidate[i];
        var input = form.querySelector('[name="' + name + '"]');
        if (input && !input.value.trim()) {
          hasError = true;
          var parent = input.closest(".form-group");
          if (parent) {
            parent.classList.add("has-error");
            var errEl = parent.querySelector(".error-msg");
            if (!errEl) {
              errEl = document.createElement("div");
              errEl.className = "error-msg";
              parent.appendChild(errEl);
            }
            var l = langs[currentLangIndex];
            errEl.textContent = l === "ar" ? "مطلوب" : l === "fr" ? "Requis" : "Required";
          }
        }
      }

      if (hasError) return;

      syncAllInputsToNative();

      var nativeSubmitBtn = document.querySelector(".express-checkout-form-section .single-submit") ||
        document.querySelector("#app #express-checkout-form button[type=\"submit\"]") ||
        document.querySelector("#app .checkout-submit-btn");

      if (nativeSubmitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        nativeSubmitBtn.click();

        var checkInterval = setInterval(function () {
          if (!nativeSubmitBtn.disabled && !nativeSubmitBtn.classList.contains("loading")) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("loading");
            clearInterval(checkInterval);
          }
        }, 500);

        setTimeout(function () {
          clearInterval(checkInterval);
          submitBtn.disabled = false;
          submitBtn.classList.remove("loading");
        }, 10000);
      } else {
        var l = langs[currentLangIndex];
        alert(l === "ar" ? "خطأ في النظام. حاول مرة أخرى." : "System error. Please try again.");
      }
    });
  }

  /* ── Init ── */
  function init() {
    renderRoute();
    applyLang(currentLangIndex);
    handleScroll();
    initSlider();
    initCustomCheckout();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
