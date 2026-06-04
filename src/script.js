/* ============================================================
   HISMILE V34 Whitening Strips — Landing Page JavaScript
   Managed by: Antigravity → GitHub → YouCan sync pipeline
   ============================================================ */
(function () {
  "use strict";

  console.log(
    "%c[V34] custom script loaded",
    "color:#6204a5;font-weight:bold;font-size:14px"
  );

  /* ── Load translations ── */
  var I18N = {};
  try {
    I18N = TRANSLATIONS_INLINE || {};
  } catch (e) {
    I18N = {
      announce: { en: "Free Shipping on Orders Over $50 | 30-Day Money Back Guarantee", ar: "شحن مجاني للطلبات فوق 50$ | ضمان استرداد الأموال خلال 30 يوماً", fr: "Livraison gratuite à partir de 50$ | Garantie de remboursement de 30 jours" },
      hero_badge: { en: "Colour Correction Technology", ar: "تقنية تصحيح اللون", fr: "Technologie de Correction de Couleur" },
      hero_h1: { en: "Whiter Teeth.<br>One Strip.<br>One Use.", ar: "أسنان أكثر بياضاً.<br>شريحة واحدة.<br>استخدام واحد.", fr: "Des dents plus blanches.<br>Une bande.<br>Une utilisation." },
      hero_sub: { en: "Clinically proven to cancel out yellow stains instantly.", ar: "مثبت سريرياً لقدرته على إخفاء البقع الصفراء على الفور.", fr: "Prouvé cliniquement pour annuler les taches jaunes instantanément." },
      hero_reviews: { en: "4.5/5 from 172+ verified reviews", ar: "4.5/5 من 172+ مراجعة موثقة", fr: "4.5/5 à partir de 172+ avis vérifiés" },
      hero_cta: { en: "Shop Now", ar: "تسوق الآن", fr: "Acheter maintenant" },
      see_how_it_works: { en: "See how it works", ar: "اكتشف كيف يعمل", fr: "Voir comment ça marche" },
      sold_badge: { en: "10,000,000+ V34 PRODUCTS SOLD WORLDWIDE", ar: "أكثر من 10,000,000 منتج V34 تم بيعه عالمياً", fr: "PLUS DE 10 000 000 DE PRODUITS V34 VENDUS DANS LE MONDE" },
      tech_pap_h: { en: "PAP+ Technology", ar: "تقنية PAP+", fr: "Technologie PAP+" },
      tech_pap_p: { en: "Our clinically proven formula whitens teeth safely without pain or sensitivity, breaking down stains gently.", ar: "تركيبتنا المثبتة سريرياً تبيض الأسنان بأمان دون ألم أو حساسية، وتكسر البقع بلطف.", fr: "Notre formule cliniquement prouvée blanchit les dents en toute sécurité, sans douleur ni sensibilité." },
      tech_cc_h: { en: "Colour Correction", ar: "تصحيح اللون", fr: "Correction de Couleur" },
      tech_cc_p: { en: "Just like purple shampoo cancels yellow blonde hair, V34's deep purple tones cancel out yellow stains on teeth instantly.", ar: "تماماً كما يلغي الشامبو البنفسجي اللون الأصفر في الشعر، تلغي نغمات V34 البنفسجية العميقة البقع الصفراء على الأسنان فوراً.", fr: "Tout comme le shampoing violet annule les tons jaunes des cheveux blonds, le V34 annule les taches jaunes sur les dents." },
      mech_eyebrow: { en: "How it Works", ar: "كيف يعمل", fr: "Comment ça marche" },
      step1_h: { en: "Peel & Apply", ar: "قشر وطبّق", fr: "Décollez et appliquez" },
      step1_p: { en: "Dry teeth and apply the V34 strip firmly.", ar: "جفف أسنانك وطبق شريحة V34 بإحكام.", fr: "Séchez vos dents et appliquez fermement la bande V34." },
      step2_h: { en: "Wait 30 Mins", ar: "انتظر 30 دقيقة", fr: "Attendez 30 minutes" },
      step2_p: { en: "Let the colour correction technology work.", ar: "دع تقنية تصحيح اللون تعمل.", fr: "Laissez agir la technologie de correction de couleur." },
      step3_h: { en: "Reveal", ar: "اكتشف", fr: "Découvrez" },
      step3_p: { en: "Remove and rinse for an instantly whiter smile.", ar: "أزلها واشطف للحصول على ابتسامة أكثر بياضاً فوراً.", fr: "Retirez et rincez pour un sourire instantanément plus blanc." },
      demo_title: { en: "Real Results", ar: "نتائج حقيقية", fr: "Résultats Réels" },
      demo_hint: { en: "← Drag to reveal your results →", ar: "← اسحب لكشف النتيجة →", fr: "← Faites glisser pour voir les résultats →" },
      before_after_label: { en: "BEFORE &nbsp;|&nbsp; AFTER", ar: "قبل &nbsp;|&nbsp; بعد", fr: "AVANT &nbsp;|&nbsp; APRÈS" },
      final_h2: { en: "Get Your V34 Strips.", ar: "احصل على شرائح V34.", fr: "Obtenez vos bandes V34." },
      price_main: { en: "$39 AUD", ar: "39$ AUD", fr: "39$ AUD" },
      price_sub: { en: "or 4 payments of $9.75 · $2.79 per application", ar: "أو 4 دفعات بقيمة 9.75$ · 2.79$ لكل تطبيق", fr: "ou 4 paiements de 9.75$ · 2.79$ par application" },
      limited_qty: { en: "Limited Quantity Available", ar: "الكمية المتوفرة محدودة", fr: "Quantité limitée disponible" },
      checkout_info: { en: "Customer Information", ar: "معلومات الزبون", fr: "Informations Client" },
      form_name: { en: "Name", ar: "الإسم", fr: "Nom" },
      form_phone: { en: "Phone Number", ar: "رقم الهاتف", fr: "Numéro de téléphone" },
      form_city: { en: "City", ar: "المدينة", fr: "Ville" },
      submit_order: { en: "Place Order", ar: "اطلب الآن", fr: "Passer la commande" },
      faq_title: { en: "Good to Know", ar: "معلومات مهمة", fr: "Bon à savoir" },
      faq_q1: { en: "Is it safe for enamel?", ar: "هل هي آمنة على المينا؟", fr: "Est-ce sûr pour l'émail ?" },
      faq_a1: { en: "Yes, V34 is completely safe for enamel. It uses color correcting technology, not harsh abrasives or bleaching agents.", ar: "نعم، آمنة تماماً. تستخدم تقنية تصحيح اللون وليس التبييض القاسي.", fr: "Oui, totalement sûr pour l'émail. Il utilise une technologie de correction de couleur." },
      faq_q2: { en: "How do I use them?", ar: "كيف أستخدمها؟", fr: "Comment les utiliser ?" },
      faq_a2: { en: "Dry your teeth, apply the long strip to your top teeth and the short strip to your bottom teeth, wait 30 minutes, then remove.", ar: "جفف أسنانك، طبق الشريحة وانتظر 30 دقيقة ثم أزلها.", fr: "Séchez vos dents, appliquez la bande, attendez 30 minutes, puis retirez." },
      foot_secure: { en: "Secure checkout", ar: "دفع آمن", fr: "Paiement sécurisé" },
      foot_ship: { en: "Free shipping", ar: "شحن مجاني", fr: "Livraison gratuite" },
      foot_mbg: { en: "Money-back guarantee", ar: "ضمان استرداد الأموال", fr: "Garantie de remboursement" },
      foot_link_ship: { en: "Shipping", ar: "الشحن", fr: "Livraison" },
      foot_link_contact: { en: "Contact", ar: "اتصل بنا", fr: "Contact" },
      foot_link_privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية", fr: "Politique de confidentialité" },
      foot_link_terms: { en: "Terms", ar: "الشروط", fr: "Conditions" },
      foot_copy: { en: "© 2024 HISMILE. ALL RIGHTS RESERVED.", ar: "© 2024 HISMILE. جميع الحقوق محفوظة.", fr: "© 2024 HISMILE. TOUS DROITS RÉSERVÉS." },
      sticky_name: { en: "V34 Strips", ar: "شرائح V34", fr: "Bandes V34" },
      sticky_price: { en: "$39.00 · 14 uses", ar: "39.00$ · 14 استخداماً", fr: "39.00$ · 14 utilisations" }
    };
  }

  var langs = ["en", "ar", "fr"];
  var currentLangIndex = 0;

  function renderRoute() {
    var hash = window.location.hash || '#home';
    var viewHome = document.getElementById("view-home");
    var viewLanding = document.getElementById("view-landing");
    
    if (!viewHome || !viewLanding) return;

    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(function(el) { el.classList.remove('active'); });

    if (hash === '#landing') {
      viewHome.classList.remove('active');
      viewLanding.classList.add('active');
      window.scrollTo(0, 0);
      document.title = "Hismile V34 - Express Checkout";
    } else {
      viewLanding.classList.remove('active');
      viewHome.classList.add('active');
      window.scrollTo(0, 0);
      document.title = "Hismile V34 - Official Site";
    }
    
    setTimeout(handleScroll, 50);
  }

  window.addEventListener("hashchange", renderRoute);

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
    
    var label = document.getElementById("langLabel");
    if (label) label.textContent = l.toUpperCase();
  }

  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest("#langToggle")) {
      var nextIndex = (currentLangIndex + 1) % langs.length;
      applyLang(nextIndex);
    }
  });

  function handleScroll() {
    var reveals = document.querySelectorAll(".reveal:not(.active)");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }

    var bottomCta = document.getElementById('bottom-cta');
    var hash = window.location.hash || '#home';
    
    if (bottomCta) {
      if (hash === '#home') {
        var currentScrollY = window.scrollY;
        if (currentScrollY > 500) {
          bottomCta.classList.add('visible');
        } else {
          bottomCta.classList.remove('visible');
        }
      } else {
        bottomCta.classList.remove('visible');
      }
    }
  }

  window.addEventListener("scroll", handleScroll);

  function initSlider() {
    var slider = document.getElementById('slider');
    var sliderAfter = document.getElementById('slider-after');
    var sliderHandle = document.getElementById('slider-handle');

    if(slider && sliderAfter && sliderHandle) {
        var isDragging = false;

        function moveSlider(clientX) {
            var rect = slider.getBoundingClientRect();
            var position = clientX - rect.left;
            if (position < 0) position = 0;
            if (position > rect.width) position = rect.width;
            var percentage = (position / rect.width) * 100;
            
            sliderHandle.style.left = percentage + '%';
            sliderAfter.style.clipPath = 'inset(0 0 0 ' + percentage + '%)';
        }

        var startDrag = function(e) {
            isDragging = true;
            var clientX = e.touches ? e.touches[0].clientX : e.clientX;
            moveSlider(clientX);
            if (e.cancelable) e.preventDefault();
        };

        var moveDrag = function(e) {
            if (!isDragging) return;
            var clientX = e.touches ? e.touches[0].clientX : e.clientX;
            moveSlider(clientX);
            if (e.cancelable) e.preventDefault();
        };

        var stopDrag = function() { isDragging = false; };

        slider.addEventListener('mousedown', startDrag);
        slider.addEventListener('touchstart', startDrag, { passive: false });
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchend', stopDrag);
        window.addEventListener('mousemove', moveDrag);
        window.addEventListener('touchmove', moveDrag, { passive: false });
        
        slider.addEventListener("dragstart", function(e) { e.preventDefault(); });
    }
  }

  window.toggleAccordion = function(id) {
    var content = document.getElementById(id);
    var icon = document.getElementById('icon-' + id);
    if (!content || !icon) return;
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.classList.remove('open');
    } else {
        content.classList.add('open');
        icon.classList.add('open');
    }
  };

  function initCustomCheckout() {
    var form = document.getElementById("custom-express-checkout-form");
    var submitBtn = document.querySelector("#view-landing button[type='submit']");
    if (!form || !submitBtn) return;

    function setVueValue(input, value) {
      if (!input) return;
      var prototype = Object.getPrototypeOf(input);
      var setter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;
      if (!setter) {
        var currentProto = prototype;
        while (currentProto && !setter) {
          var desc = Object.getOwnPropertyDescriptor(currentProto, 'value');
          if (desc && desc.set) {
            setter = desc.set;
            break;
          }
          currentProto = Object.getPrototypeOf(currentProto);
        }
      }
      if (setter) {
        setter.call(input, value);
      } else {
        input.value = value;
      }
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function syncAllInputsToNative() {
      var nativeForm = document.querySelector('#app #express-checkout-form');
      if (!nativeForm) return;

      var inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(function (ourInput) {
        var name = ourInput.getAttribute('name');
        if (!name || name === 'id' || name === 'quantity' || name === 'is_page_builder_express_checkout' || name === 'extra_payload') return;

        var nativeInput = nativeForm.querySelector('[name="' + name + '"]');
        if (nativeInput) {
          setVueValue(nativeInput, ourInput.value);
        }
      });
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
      var fieldsToValidate = ['first_name', 'phone', 'extra_fields[custom_field_cGzlrqWxXctNnheN]'];
      fieldsToValidate.forEach(function (name) {
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
            errEl.textContent = "Required";
          }
        }
      });

      if (hasError) return;

      syncAllInputsToNative();

      var nativeSubmitBtn = document.querySelector('.express-checkout-form-section .single-submit') ||
                            document.querySelector('#app #express-checkout-form button[type="submit"]') ||
                            document.querySelector('#app .checkout-submit-btn');

      if (nativeSubmitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        nativeSubmitBtn.click();
        
        var checkInterval = setInterval(function () {
          if (!nativeSubmitBtn.disabled && !nativeSubmitBtn.classList.contains('loading')) {
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
        alert("System error. Please try again later.");
      }
    });
  }

  function init() {
    renderRoute();
    applyLang(currentLangIndex);
    handleScroll();
    initSlider();
    initCustomCheckout();
    
    var priceTarget = document.querySelector(".product-price .value");
    if (priceTarget) {
      var stickyPriceEl = document.getElementById("stickyPrice");
      var cur = document.querySelector(".product-price .currency");
      if (stickyPriceEl && cur) {
        stickyPriceEl.textContent = priceTarget.textContent.trim() + cur.textContent.trim();
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
