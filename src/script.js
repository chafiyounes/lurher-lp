/* ============================================================
   HISMILE V34 Whitening Strips — Landing Page JavaScript
   Managed by: Antigravity → GitHub → YouCan sync pipeline

   PASTE INTO: YouCan page editor → Custom code → Footer code box
   (Raw JavaScript — no <script> tags needed)
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
    // In YouCan context, translations are inlined at build time.
    // In dev context, we try to fetch the JSON file.
    I18N = TRANSLATIONS_INLINE || {};
  } catch (e) {
    // Fallback: inline translations object
    I18N = {
      announce: { en: "Money-Back Guarantee · Free Shipping Over $50", ar: "ضمان استرداد الأموال · شحن مجاني للطلبات فوق 50$" },
      hero_badge: { en: "Colour Correction Technology", ar: "تقنية تصحيح اللون" },
      hero_h1: { en: "Whiter Teeth After Just One Use.", ar: "أسنان أكثر بياضاً بعد استخدام واحد." },
      hero_sub: { en: "Dual-active V34 colour correction + PAP+ whitening. Visible results in one 30-minute application. No peroxide.", ar: "تقنية مزدوجة الفعالية: تصحيح لون V34 + تبييض PAP+. نتائج مرئية بتطبيق واحد لمدة 30 دقيقة. خالٍ من البيروكسيد." },
      hero_reviews: { en: "4.5 · 172 reviews", ar: "4.5 · 172 تقييماً" },
      price_main: { en: "$39 AUD", ar: "39$ AUD" },
      price_sub: { en: 'or 4 payments of $9.75 · <b>$2.79 per application</b>', ar: 'أو 4 دفعات بقيمة 9.75$ · <b>2.79$ لكل تطبيق</b>' },
      hero_cta: { en: "Add to Cart", ar: "أضف إلى السلة" },
      trust_30: { en: "Whitens in 30 Mins", ar: "تبييض خلال 30 دقيقة" },
      trust_perox: { en: "Peroxide-Free", ar: "خالٍ من البيروكسيد" },
      trust_results1: { en: "Results in 1 Use", ar: "نتائج من أول استخدام" },
      trust_mbg: { en: "Money-Back Guarantee", ar: "ضمان استرداد الأموال" },
      trust_14: { en: "14 Applications", ar: "14 تطبيقاً" },
      anchor_small: { en: "V34 products sold worldwide", ar: "منتج V34 تم بيعه حول العالم" },
      mech_eyebrow: { en: "How It Works", ar: "كيف يعمل" },
      mech_title: { en: "The Science Behind the Strip", ar: "العلم وراء الشريحة" },
      step1_h: { en: "Colour Corrects", ar: "يصحّح اللون" },
      step1_p: { en: "V34 purple pigments neutralise yellow tones for instant visual brightness.", ar: "أصباغ V34 البنفسجية تعادل الدرجات الصفراء لإشراقة فورية." },
      step2_h: { en: "Whitens Actively", ar: "تبييض فعّال" },
      step2_p: { en: "PAP+ targets surface stains. No peroxide, no sting.", ar: "تقنية PAP+ تستهدف البقع السطحية. بلا بيروكسيد وبلا لسعة." },
      step3_h: { en: "One & Done", ar: "مرة واحدة تكفي" },
      step3_p: { en: "One 30-minute application. Brush off the purple residue to reveal results.", ar: "تطبيق واحد لمدة 30 دقيقة. نظّف بقايا اللون البنفسجي لتكشف النتائج." },
      demo_eyebrow: { en: "See It Work", ar: "شاهد النتيجة" },
      demo_title: { en: "Before & After", ar: "قبل وبعد" },
      demo_hint: { en: "← Drag to reveal your results →", ar: "← اسحب لكشف النتيجة →" },
      demo_disclaimer: { en: "Purple residue from strip will need to be brushed off to reveal results. Images shown are for illustrative purposes only and do not guarantee specific results or outcomes. Temporary results, results may vary. Staff results.", ar: "يجب تنظيف بقايا اللون البنفسجي للكشف عن النتائج. الصور المعروضة لأغراض توضيحية فقط ولا تضمن نتائج محددة. النتائج مؤقتة وقد تختلف. نتائج طاقم العمل." },
      clin_eyebrow: { en: "Clinically Proven", ar: "مثبت سريرياً" },
      clin_title: { en: "Backed by a Study", ar: "مدعوم بدراسة" },
      clin_cap: { en: "Blinded, placebo-controlled study of 60 participants. 96% had 2+ shades whiter teeth 24 hours after one application. Assessed via VITA Bleachguide 3D-MASTER®. Results not guaranteed; individual results may vary and are not permanent.", ar: "دراسة مزدوجة التعمية ومضبوطة بدواء وهمي على 60 مشاركاً. حصل 96% على درجتين أو أكثر من البياض بعد 24 ساعة من تطبيق واحد. تم التقييم باستخدام VITA Bleachguide 3D-MASTER®. النتائج غير مضمونة وقد تختلف وليست دائمة." },
      wall_eyebrow: { en: "Real People", ar: "أشخاص حقيقيون" },
      wall_title: { en: "Top Teeth Results", ar: "نتائج الأسنان العلوية" },
      wall_disclaimer: { en: "*Temporary results, results may vary.", ar: "*نتائج مؤقتة وقد تختلف." },
      rev_eyebrow: { en: "Verified Buyers", ar: "مشترون موثّقون" },
      rev_title: { en: "What People Say", ar: "ماذا يقول الناس" },
      rev_vp: { en: "Verified Purchase", ar: "عملية شراء موثّقة" },
      rev_works: { en: "WORKS", ar: "فعّالة فعلاً" },
      rev_quote: { en: '"Was sceptical about this but wow yes they work great."', ar: '«كنت متشككاً لكن واو، نعم، فعّالة جداً.»' },
      rev_who: { en: "— John Swift", ar: "— جون سويفت" },
      faq_eyebrow: { en: "Questions", ar: "أسئلة" },
      faq_title: { en: "Good to Know", ar: "معلومات مهمة" },
      faq_q1: { en: "How many shades whiter?", ar: "كم درجة تبييض؟" },
      faq_a1: { en: "Results vary, but many people see a visible difference after just one use. In a study, 96% of participants had 2 or more shades whiter teeth 24 hours after a single application.", ar: "تختلف النتائج، لكن كثيرين يلاحظون فرقاً واضحاً بعد استخدام واحد. في إحدى الدراسات، حصل 96% من المشاركين على درجتين أو أكثر من البياض بعد 24 ساعة من تطبيق واحد." },
      faq_q2: { en: "How do I use them?", ar: "كيف أستخدمها؟" },
      faq_a2: { en: "Dry your teeth, apply the long strip to your top teeth and the short strip to your bottom teeth, wait 30 minutes, then remove and brush off any purple residue.", ar: "جفّف أسنانك، ضع الشريحة الطويلة على الأسنان العلوية والقصيرة على السفلية، انتظر 30 دقيقة، ثم أزلها ونظّف أي بقايا بنفسجية." },
      faq_q3: { en: "Is it safe?", ar: "هل هي آمنة؟" },
      faq_a3: { en: "Yes — V34 is peroxide-free and designed to be gentle, using colour-correction and PAP+ technology rather than harsh bleaching agents.", ar: "نعم — V34 خالية من البيروكسيد ومصممة لتكون لطيفة، باستخدام تقنية تصحيح اللون وPAP+ بدلاً من عوامل التبييض القاسية." },
      faq_q4: { en: "What if it doesn't work for me?", ar: "ماذا لو لم تنجح معي؟" },
      faq_a4: { en: "You're covered by a full money-back guarantee. If you're not satisfied, you can request a refund of the purchase price (excluding shipping), subject to terms and conditions.", ar: "أنت مشمول بضمان استرداد كامل للأموال. إذا لم تكن راضياً، يمكنك طلب استرداد ثمن الشراء (باستثناء الشحن)، وفقاً للشروط والأحكام." },
      guar_title: { en: "30-Day Money-Back Guarantee", ar: "ضمان استرداد الأموال خلال 30 يوماً" },
      guar_p: { en: "We're confident you'll love it. If you're not satisfied, we'll refund the purchase price — no stress.", ar: "نحن واثقون أنك ستحبها. إذا لم تكن راضياً، سنعيد لك ثمن الشراء — بكل بساطة." },
      offer_eyebrow: { en: "The Offer", ar: "العرض" },
      offer_title: { en: "Less Than a Coffee per Use", ar: "أقل من فنجان قهوة لكل استخدام" },
      offer_num: { en: "$39 for 14 applications", ar: "39$ مقابل 14 تطبيقاً" },
      offer_per: { en: "just $2.79 each", ar: "فقط 2.79$ لكل تطبيق" },
      offer_pay: { en: "or 4 interest-free payments of $9.75", ar: "أو 4 دفعات بدون فوائد بقيمة 9.75$" },
      final_fast: { en: "Selling Fast", ar: "ينفد بسرعة" },
      final_h2: { en: "Whiter Teeth After Just One Use.", ar: "أسنان أكثر بياضاً بعد استخدام واحد." },
      final_meta: { en: '<b>$39</b> · 14 applications · <b>Money-back guarantee</b>', ar: '<b>39$</b> · 14 تطبيقاً · <b>ضمان استرداد الأموال</b>' },
      final_cta: { en: "Add to Cart — $39", ar: "أضف إلى السلة — 39$" },
      foot_mbg: { en: "Money-back guarantee", ar: "ضمان استرداد الأموال" },
      foot_secure: { en: "Secure checkout", ar: "دفع آمن" },
      foot_ship: { en: "Free shipping over $50", ar: "شحن مجاني فوق 50$" },
      foot_link_ship: { en: "Shipping", ar: "الشحن" },
      foot_link_contact: { en: "Contact", ar: "اتصل بنا" },
      foot_link_privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      foot_link_terms: { en: "Terms", ar: "الشروط" },
      foot_copy: { en: "© 2024 Hismile. All rights reserved.", ar: "© 2024 Hismile. جميع الحقوق محفوظة." },
      sticky_name: { en: "V34 Strips", ar: "شرائح V34" },
      sticky_price: { en: "$39.00 · 14 uses", ar: "39.00$ · 14 استخداماً" },
      sticky_cta: { en: "Add to Cart", ar: "أضف إلى السلة" }
    };
  }

  var lang = "en";

  /* ── Diagnostics (runs 1.5s after load) ── */
  setTimeout(function () {
    console.log(
      "[V34] 1.5s check → slider:",
      !!document.getElementById("baSlider"),
      "| toggle:",
      !!document.getElementById("langToggle"),
      "| .app:",
      !!document.querySelector(".app"),
      "| [data-i18n] count:",
      document.querySelectorAll("[data-i18n]").length
    );
  }, 1500);

  /* ══════════════════════════════════════════
     LANGUAGE TOGGLE (event delegation)
     ══════════════════════════════════════════ */
  function applyLang(l) {
    lang = l;
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
    if (label) label.textContent = l === "ar" ? "English" : "العربية";
  }

  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest("#langToggle")) {
      console.log("[V34] language button clicked → switching from", lang);
      applyLang(lang === "en" ? "ar" : "en");
    }
  });

  /* ══════════════════════════════════════════
     BEFORE / AFTER SLIDER (mouse + touch + pen)
     ══════════════════════════════════════════ */
  var dragging = false,
    activeSlider = null;

  function pctFrom(slider, clientX) {
    var r = slider.getBoundingClientRect();
    return ((clientX - r.left) / r.width) * 100;
  }

  function setPos(slider, p) {
    p = Math.max(0, Math.min(100, p));
    var after = slider.querySelector(".ba-after");
    var divider = slider.querySelector(".ba-divider");
    var handle = slider.querySelector(".ba-handle");
    if (after) after.style.clipPath = "inset(0 0 0 " + p + "%)";
    if (divider) divider.style.left = p + "%";
    if (handle) handle.style.left = p + "%";
  }

  function clientXOf(e) {
    if (e.touches && e.touches.length) return e.touches[0].clientX;
    if (e.changedTouches && e.changedTouches.length)
      return e.changedTouches[0].clientX;
    return e.clientX;
  }

  function startDrag(e) {
    if (!e.target || !e.target.closest) return;
    var slider = e.target.closest("#baSlider");
    if (!slider) return;
    console.log("[V34] slider drag start (" + e.type + ")");
    dragging = true;
    activeSlider = slider;
    setPos(slider, pctFrom(slider, clientXOf(e)));
    if (e.cancelable) e.preventDefault();
  }

  function moveDrag(e) {
    if (dragging && activeSlider) {
      setPos(activeSlider, pctFrom(activeSlider, clientXOf(e)));
      if (e.cancelable) e.preventDefault();
    }
  }

  function stopDrag() {
    dragging = false;
    activeSlider = null;
  }

  /* Kill browser's native image-drag inside slider */
  document.addEventListener("dragstart", function (e) {
    if (e.target && e.target.closest && e.target.closest("#baSlider"))
      e.preventDefault();
  });

  /* Mouse events */
  document.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", moveDrag);
  document.addEventListener("mouseup", stopDrag);

  /* Touch events */
  document.addEventListener("touchstart", startDrag, { passive: false });
  document.addEventListener("touchmove", moveDrag, { passive: false });
  document.addEventListener("touchend", stopDrag);
  document.addEventListener("touchcancel", stopDrag);

  /* ══════════════════════════════════════════
     STICKY BAR: sync price from checkout form
     + scroll to form on click
     ══════════════════════════════════════════ */
  function syncStickyPrice() {
    var priceEl = document.querySelector(".product-price");
    var stickyPriceEl = document.getElementById("stickyPrice");
    if (priceEl && stickyPriceEl) {
      var val = priceEl.querySelector(".value");
      var cur = priceEl.querySelector(".currency");
      if (val && cur) {
        stickyPriceEl.textContent = val.textContent.trim() + cur.textContent.trim();
      }
    }
  }

  // Sync price on load and watch for dynamic changes
  syncStickyPrice();
  setTimeout(syncStickyPrice, 1000);

  // Observe price changes (YouCan may update price dynamically)
  var priceTarget = document.querySelector(".product-price .value");
  if (priceTarget && window.MutationObserver) {
    new MutationObserver(syncStickyPrice).observe(priceTarget, {
      childList: true, characterData: true, subtree: true
    });
  }

  // Sticky button scrolls to checkout form
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest("#stickyBtn")) {
      var form = document.getElementById("checkout-section-wrap");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  // Final CTA also scrolls to form
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest(".btn-white")) {
      var form = document.getElementById("checkout-section-wrap");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  // ══════════════════════════════════════════
  // CUSTOM EXPRESS CHECKOUT SUBMISSION (AJAX)
  // ══════════════════════════════════════════
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("express-checkout-form");
    var submitBtn = document.querySelector(".checkout-submit-btn");
    if (!form || !submitBtn) return;

    // Dynamically sync variant ID from YouCan't default hidden form
    function syncProductVariantId() {
      var originalForm = document.querySelector('#app #express-checkout-form');
      if (originalForm) {
        var correctVariantId = originalForm.querySelector('[name="id"]')?.value;
        if (correctVariantId) {
          var ourVariantInput = form.querySelector('[name="id"]');
          if (ourVariantInput && ourVariantInput.value !== correctVariantId) {
            ourVariantInput.value = correctVariantId;
            console.log("[Checkout] Successfully synced variant ID dynamically:", correctVariantId);
          }
        }
      }
    }
    syncProductVariantId();

    function showErrors(fieldErrors) {
      for (var fieldKey in fieldErrors) {
        if (Object.prototype.hasOwnProperty.call(fieldErrors, fieldKey)) {
          var messages = fieldErrors[fieldKey];
          var inputName = fieldKey;
          
          // Map extra_fields.custom_field_... to extra_fields[custom_field_...]
          if (fieldKey.indexOf("extra_fields.") === 0) {
            inputName = fieldKey.replace("extra_fields.", "extra_fields[").replace(/$/, "]");
          }

          var input = form.querySelector('[name="' + inputName + '"]');
          if (input) {
            var parent = input.closest(".form-group");
            if (parent) {
              parent.classList.add("has-error");
              var errEl = parent.querySelector(".error-msg");
              if (!errEl) {
                errEl = document.createElement("div");
                errEl.className = "error-msg";
                parent.appendChild(errEl);
              }
              errEl.textContent = messages[0];
            }
          }
        }
      }
    }

    function clearErrors() {
      var errorGroups = form.querySelectorAll(".form-group.has-error");
      for (var i = 0; i < errorGroups.length; i++) {
        errorGroups[i].classList.remove("has-error");
        var errEl = errorGroups[i].querySelector(".error-msg");
        if (errEl) errEl.remove();
      }
    }

    // Send partial form entries to YouCan (Abandoned Cart tracking)
    var lastCartData = "";
    function sendAbandonedCartInfo() {
      var firstNameVal = form.querySelector('[name="first_name"]')?.value || "";
      var phoneVal = form.querySelector('[name="phone"]')?.value || "";
      var cityVal = form.querySelector('[name="extra_fields[custom_field_cGzlrqWxXctNnheN]"]')?.value || "";

      // Only sync if all required fields are filled out
      if (firstNameVal.trim() !== "" && phoneVal.trim() !== "" && cityVal.trim() !== "") {
        var currentDataString = firstNameVal + "|" + phoneVal + "|" + cityVal;
        
        // Skip duplicate requests if fields haven't changed
        if (currentDataString === lastCartData) return;
        lastCartData = currentDataString;

        var formData = new FormData(form);
        var url = typeof route === "function" ? route("store-front::api.checkout.information.store") : "/checkout/information/store";
        var csrfToken = document.querySelector('meta[name="csrf-token"]');

        fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": csrfToken ? csrfToken.getAttribute("content") : ""
          }
        })
        .then(function (res) {
          if (res.ok) {
            console.log("[Checkout] Abandoned cart updated.");
          }
        })
        .catch(function (err) {
          console.error("[Checkout] Abandoned cart update failed:", err);
        });
      }
    }

    var debounceTimer = null;
    form.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(sendAbandonedCartInfo, 1000);
    });

    // Clear error on input change
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

      // Prevent double submits
      if (submitBtn.disabled) return;

      submitBtn.disabled = true;
      submitBtn.classList.add("loading");

      // Reset errors
      clearErrors();

      // Ensure variant ID is synced dynamically from YouCan't default hidden form
      syncProductVariantId();

      var formData = new FormData(form);
      var url = typeof route === "function" ? route("store-front::api.checkout.express") : "/checkout/express";
      var csrfToken = document.querySelector('meta[name="csrf-token"]');

      fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-TOKEN": csrfToken ? csrfToken.getAttribute("content") : ""
        }
      })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok) {
            return Promise.reject({ status: res.status, data: data });
          }
          return data;
        });
      })
      .then(function (data) {
        // Success redirect
        if (data.has_upsell && data.id) {
          window.location = typeof route === "function"
            ? route("store-front::orders.upsells.show", data.id)
            : "/orders/upsell/" + data.id;
        } else {
          window.location = typeof route === "function"
            ? route("store-front::checkout.thankyou")
            : "/checkout/thankyou";
        }
      })
      .catch(function (err) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");

        var flashMsg = "حدث خطأ غير متوقع. الرجاء المحاولة لاحقاً.";
        if (err && err.status === 422 && err.data && err.data.meta && err.data.meta.fields) {
          showErrors(err.data.meta.fields);
          flashMsg = "الرجاء التحقق من الحقول المطلوبة.";
        } else if (err && err.data && err.data.detail) {
          flashMsg = err.data.detail;
        }

        if (typeof window.flash === "function") {
          window.flash(flashMsg, "error");
        } else {
          alert(flashMsg);
        }
      });
    });
  });

})();
