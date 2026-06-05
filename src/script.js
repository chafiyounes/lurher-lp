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
    home_badge: { ar: "تقنية تصحيح اللون", en: "Colour Correction Technology", fr: "Technologie de Correction Couleur" },
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
      ar: "اكتشف V34 <span class='material-symbols-outlined' style='font-size:20px;'>arrow_back</span>",
      en: "Discover V34 <span class='material-symbols-outlined' style='font-size:20px;'>arrow_forward</span>",
      fr: "Découvrir V34 <span class='material-symbols-outlined' style='font-size:20px;'>arrow_forward</span>"
    },
    home_brand_h: { ar: "شنو هي Hismile؟", en: "What is Hismile?", fr: "Qu'est-ce que Hismile ?" },
    home_brand_p: {
      ar: "Hismile هي علامة تجارية عالمية رائدة فمجال تبييض الأسنان. كتستعمل تقنيات متطورة بحال PAP+ وتصحيح اللون بدلاً من المواد الكيماوية القاسية. أكثر من 10 مليون منتج تباع فالعالم كامل.",
      en: "Hismile is a globally leading teeth whitening brand. It uses advanced technologies like PAP+ and colour correction instead of harsh chemicals. Over 10 million products sold worldwide.",
      fr: "Hismile est une marque leader mondial du blanchiment dentaire. Elle utilise des technologies avancées comme PAP+ et la correction de couleur au lieu de produits chimiques agressifs."
    },
    home_pap_h: { ar: "تقنية PAP+", en: "PAP+ Technology", fr: "Technologie PAP+" },
    home_pap_sub: {
      ar: "تبييض حقيقي بلا بيروكسيد — آمن 100% على المينا والأسنان الحساسة.",
      en: "Real whitening without peroxide — 100% safe for enamel and sensitive teeth.",
      fr: "Blanchiment réel sans peroxyde — 100% sûr pour l'émail et les dents sensibles."
    },
    home_feat1_h: { ar: "بلا بيروكسيد", en: "Peroxide-Free", fr: "Sans peroxyde" },
    home_feat1_p: {
      ar: "أغلب منتجات التبييض كتستعمل الماء الأوكسجيني اللي كيضر المينا. PAP+ كيبيض بطريقة آمنة بلا ألم ولا حساسية.",
      en: "Most whitening products use peroxide that damages enamel. PAP+ whitens safely without pain or sensitivity.",
      fr: "La plupart des produits utilisent du peroxyde qui endommage l'émail. PAP+ blanchit sans douleur ni sensibilité."
    },
    home_feat2_h: { ar: "مثبت سريرياً", en: "Clinically Proven", fr: "Prouvé cliniquement" },
    home_feat2_p: {
      ar: "تركيبة مدروسة ومثبتة بالدراسات. النتيجة كتبان من أول استعمال وكتزيد مع الوقت.",
      en: "A researched formula proven by studies. Results visible from first use and improve over time.",
      fr: "Formule étudiée et prouvée. Résultats visibles dès la première utilisation."
    },
    home_cc_h: { ar: "تصحيح اللون الفوري", en: "Instant Colour Correction", fr: "Correction de couleur instantanée" },
    home_cc_p: {
      ar: "نفس مبدأ الشامبو البنفسجي للشعر، ولكن للأسنان. اللون البنفسجي ديال V34 كيلغي الاصفرار فوراً — النتيجة كتبان من أول استعمال.",
      en: "Same principle as purple shampoo for hair, but for teeth. V34's purple tone cancels yellowness instantly — visible from first use.",
      fr: "Même principe que le shampoing violet pour les cheveux, mais pour les dents. Le ton violet de V34 annule le jaunissement instantanément."
    },
    home_cta_h: { ar: "واجد لابتسامة كتبهر؟", en: "Ready for a brighter smile?", fr: "Prêt pour un sourire éclatant ?" },
    home_cta_sub: {
      ar: "اكتشف شرائط V34 وجرب الفرق بنفسك.",
      en: "Discover V34 strips and see the difference for yourself.",
      fr: "Découvrez les bandes V34 et voyez la différence."
    },
    home_cta_btn: { ar: "تسوق الآن", en: "Shop Now", fr: "Acheter maintenant" },

    /* ─── LANDING PAGE ─── */
    land_badge: { ar: "الأكثر مبيعاً", en: "Best Seller", fr: "Best-seller" },
    land_hero_h: { ar: "أسنان بيضا فـ30 دقيقة", en: "Whiter Teeth in 30 Minutes", fr: "Des dents plus blanches en 30 minutes" },
    land_hero_sub: {
      ar: "شرائط V34 كتعطيك أسنان أكثر بياضاً من أول استعمال. تقنية مزدوجة: تصحيح اللون الفوري + تبييض PAP+.",
      en: "V34 strips give you visibly whiter teeth from first use. Dual technology: instant colour correction + PAP+ whitening.",
      fr: "Les bandes V34 vous donnent des dents visiblement plus blanches dès la première utilisation."
    },
    land_price: { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    land_price_sub: {
      ar: "الدفع عند الاستلام — التوصيل لجميع المدن",
      en: "Cash on Delivery — Free shipping to all cities",
      fr: "Paiement à la livraison — Livraison gratuite"
    },
    land_hero_cta: { ar: "اطلب الآن 👇", en: "Order Now 👇", fr: "Commander maintenant 👇" },
    land_sold: { ar: "+10,000,000<br>منتج تم بيعه", en: "10,000,000+<br>Products Sold", fr: "10 000 000+<br>Produits vendus" },

    trust_guarantee: { ar: "ضمان استرجاع الفلوس", en: "Money-back guarantee", fr: "Garantie de remboursement" },
    trust_ship: { ar: "التوصيل لجميع المدن", en: "Delivery to all cities", fr: "Livraison partout" },
    trust_cod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", fr: "Paiement à la livraison" },
    trust_reviews: { ar: "+172 تقييم إيجابي", en: "172+ positive reviews", fr: "172+ avis positifs" },

    land_how_h: { ar: "كيفاش كتستعمل؟", en: "How to Use?", fr: "Comment utiliser ?" },
    step1_h: { ar: "نشّف وحط", en: "Dry & Apply", fr: "Séchez et appliquez" },
    step1_p: { ar: "نشّف أسنانك وحط شريط V34 بإحكام.", en: "Dry your teeth and apply the V34 strip firmly.", fr: "Séchez vos dents et appliquez la bande V34." },
    step2_h: { ar: "استنى 30 دقيقة", en: "Wait 30 Minutes", fr: "Attendez 30 minutes" },
    step2_p: { ar: "خلي تقنية تصحيح اللون تخدم.", en: "Let the colour correction technology work.", fr: "Laissez la technologie agir." },
    step3_h: { ar: "نحّي وشوف الفرق", en: "Remove & Reveal", fr: "Retirez et admirez" },
    step3_p: { ar: "نحّي الشريط واشطب — ابتسامة بيضا فوراً.", en: "Remove the strip and rinse — instantly whiter smile.", fr: "Retirez et rincez — sourire plus blanc instantanément." },

    land_ba_h: { ar: "نتائج حقيقية", en: "Real Results", fr: "Résultats réels" },
    land_ba_hint: { ar: "← اسحب لكشف النتيجة →", en: "← Drag to reveal →", fr: "← Glissez pour révéler →" },
    land_mid_cta: { ar: "اطلب الآن — 245 د.م.", en: "Order Now — 245 MAD", fr: "Commander — 245 MAD" },

    land_why_h: { ar: "علاش V34 مختلفة؟", en: "Why is V34 Different?", fr: "Pourquoi V34 est différent ?" },
    land_why_sub: {
      ar: "أغلب منتجات التبييض كتاخد أسابيع ولا كتضر المينا. حنا اخترنا طريق آخر.",
      en: "Most whitening products take weeks or damage enamel. We chose a different path.",
      fr: "La plupart des produits prennent des semaines ou abîment l'émail. Nous avons choisi une autre voie."
    },
    land_feat1_h: { ar: "🟣 تصحيح اللون الفوري", en: "🟣 Instant Colour Correction", fr: "🟣 Correction de couleur instantanée" },
    land_feat1_p: {
      ar: "اللون البنفسجي كيلغي الاصفرار — نفس مبدأ الشامبو البنفسجي للشعر، ولكن للأسنان.",
      en: "Purple tone cancels yellowness — same principle as purple shampoo for hair, but for teeth.",
      fr: "Le ton violet annule le jaunissement — même principe que le shampoing violet."
    },
    land_feat2_h: { ar: "⚪ تبييض PAP+ آمن", en: "⚪ Safe PAP+ Whitening", fr: "⚪ Blanchiment PAP+ sûr" },
    land_feat2_p: {
      ar: "تبييض حقيقي كيزيد مع الوقت — بلا بيروكسيد، آمن 100% على المينا والأسنان الحساسة.",
      en: "Real whitening that improves over time — peroxide-free, 100% safe for enamel.",
      fr: "Blanchiment réel qui s'améliore — sans peroxyde, 100% sûr."
    },

    land_order_h: { ar: "صيفط طلبيتك دابا 👇", en: "Place Your Order Now 👇", fr: "Passez votre commande 👇" },
    land_order_sub: { ar: "الدفع عند الاستلام — التوصيل مجاني", en: "Cash on Delivery — Free Shipping", fr: "Paiement à la livraison — Livraison gratuite" },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_name_ph: { ar: "محمد / فاطمة", en: "Your name", fr: "Votre nom" },
    form_phone_ph: { ar: "06XX XXX XXX", en: "06XX XXX XXX", fr: "06XX XXX XXX" },
    form_city_ph: { ar: "الدار البيضاء، الرباط...", en: "Casablanca, Rabat...", fr: "Casablanca, Rabat..." },
    submit_order: {
      ar: "اطلب الآن — الدفع عند الاستلام",
      en: "Order Now — Cash on Delivery",
      fr: "Commander — Paiement à la livraison"
    },

    ct_secure: { ar: "دفع آمن", en: "Secure", fr: "Sécurisé" },
    ct_ship: { ar: "توصيل مجاني", en: "Free shipping", fr: "Livraison gratuite" },
    ct_guarantee: { ar: "ضمان استرجاع", en: "Money-back", fr: "Garantie" },

    faq_title: { ar: "أسئلة شائعة", en: "FAQ", fr: "Questions fréquentes" },
    faq_q1: { ar: "واش آمنة على المينا؟", en: "Is it safe for enamel?", fr: "Est-ce sûr pour l'émail ?" },
    faq_a1: {
      ar: "نعم، آمنة تماماً. V34 كتستعمل تقنية تصحيح اللون وPAP+ — بلا ماء أوكسجيني، ما كتضرش المينا نهائياً.",
      en: "Yes, completely safe. V34 uses colour correction and PAP+ — no peroxide, zero damage to enamel.",
      fr: "Oui, totalement sûr. V34 utilise la correction de couleur et PAP+ — sans peroxyde."
    },
    faq_q2: { ar: "شحال ديال الاستعمالات فالعلبة؟", en: "How many uses per box?", fr: "Combien d'utilisations par boîte ?" },
    faq_a2: {
      ar: "كل علبة فيها 14 استعمال. نشّف أسنانك، حط الشريط 30 دقيقة، نحّيه واشطب. بسيطة!",
      en: "Each box has 14 uses. Dry your teeth, apply for 30 mins, remove and rinse. Simple!",
      fr: "Chaque boîte contient 14 utilisations. Séchez, appliquez 30 min, retirez et rincez."
    },
    faq_q3: { ar: "كيفاش كيتم التوصيل والدفع؟", en: "How does delivery and payment work?", fr: "Comment fonctionne la livraison ?" },
    faq_a3: {
      ar: "التوصيل لجميع مدن المغرب. الدفع عند الاستلام — ما كتخلصش حتى يوصلك المنتج لباب دارك.",
      en: "Delivery to all Moroccan cities. Cash on Delivery — you don't pay until the product is at your door.",
      fr: "Livraison dans toutes les villes. Paiement à la livraison — vous ne payez qu'à réception."
    },

    sticky_name: { ar: "شرائط V34", en: "V34 Strips", fr: "Bandes V34" },
    sticky_price: { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    foot_privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy", fr: "Politique de confidentialité" },
    foot_terms: { ar: "الشروط", en: "Terms", fr: "Conditions" },
    foot_ship: { ar: "الشحن", en: "Shipping", fr: "Livraison" },
    foot_contact: { ar: "اتصل بنا", en: "Contact", fr: "Contact" },
    foot_copy: { ar: "© 2024 HISMILE. جميع الحقوق محفوظة.", en: "© 2024 HISMILE. ALL RIGHTS RESERVED.", fr: "© 2024 HISMILE. TOUS DROITS RÉSERVÉS." }
  };

  /* ── Language Detection & State ── */
  var langs = ["ar", "en", "fr"];
  var currentLangIndex = 0; // Default: Arabic

  // Auto-detect: if browser language is French, switch to French. Otherwise Arabic.
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
    var hash = window.location.hash || "#home";
    var viewHome = document.getElementById("view-home");
    var viewLanding = document.getElementById("view-landing");

    if (!viewHome || !viewLanding) return;

    // Reset reveals
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

    // Text content
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (I18N[k] && I18N[k][l] != null) {
        nodes[i].innerHTML = I18N[k][l];
      }
    }

    // Placeholders
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

    // Sticky CTA visibility
    var bottomCta = document.getElementById("bottom-cta");
    var hash = window.location.hash || "#home";
    if (bottomCta) {
      if (hash === "#home" && window.scrollY > 400) {
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
      var section = document.getElementById("checkout-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
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

  /* ── Accordion ── */
  window.toggleAccordion = function (id) {
    var content = document.getElementById(id);
    var icon = document.getElementById("icon-" + id);
    if (!content || !icon) return;

    if (content.classList.contains("open")) {
      content.classList.remove("open");
      icon.classList.remove("open");
    } else {
      content.classList.add("open");
      icon.classList.add("open");
    }
  };

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

    // Clear errors on input
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

    // Submit
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
