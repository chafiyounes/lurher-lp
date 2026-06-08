/* ============================================================
   HISMILE V34 — Landing Page JavaScript
   Moroccan COD Landing Page — Arabic (Darija) default
   ============================================================ */
(function () {
  "use strict";

  /* ── i18n Dictionary ── */
  var I18N = {
    /* Announcement */
    announce: {
      ar: "🚚 التوصيل لجميع مدن المغرب — الدفع عند الاستلام",
      en: "🚚 Free Delivery Across Morocco — Cash on Delivery",
      fr: "🚚 Livraison partout au Maroc — Paiement à la livraison"
    },
    nav_shop: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    /* Hero extras */
    hero_badge: { ar: "🏆 الأكثر مبيعاً في المغرب", en: "🏆 Best Seller in Morocco", fr: "🏆 Meilleure vente au Maroc" },
    hero_proof: { ar: "+2,000 طلبية سلمات فالمغرب", en: "+2,000 orders delivered in Morocco", fr: "+2 000 commandes livrées au Maroc" },
    hero_cod:   { ar: "✓ الدفع عند الاستلام   ·   ✓ توصيل مجاني", en: "✓ Cash on Delivery   ·   ✓ Free Shipping", fr: "✓ Paiement à la livraison   ·   ✓ Livraison gratuite" },
    trust_safe: { ar: "آمن على المينا", en: "Enamel-safe", fr: "Sans danger pour l'émail" },

    /* ─── LANDING PAGE ─── */
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
    land_feat3_h: { ar: "⏱️ نتيجة فـ 30 دقيقة", en: "⏱️ Results in 30 Minutes", fr: "⏱️ Résultats en 30 minutes" },
    land_feat3_p: {
      ar: "حط الشريطة، استنى 30 دقيقة، شوف الفرق. ما محتاجش تبات معها، ما محتاجش ضوء خاص.",
      en: "Apply the strip, wait 30 minutes, see the difference. No overnight treatment, no special light needed.",
      fr: "Appliquez la bande, attendez 30 minutes, voyez la différence. Pas de traitement de nuit, pas de lumière spéciale."
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

    rev3_name: { ar: "مريم .أ", en: "Meryem .A", fr: "Meryem .A" },
    rev3_city: { ar: "طنجة", en: "Tangier", fr: "Tanger" },
    rev3_text: { ar: "النتيجة صراحة صدماتني! كنت خايفة تضر ليا أسناني حيت عندي حساسة ولكن الحمد لله ما كاين حتى ألم والبياض رائع.", en: "Honestly, the result shocked me! I was worried about my sensitive teeth, but no pain at all and the whiteness is amazing.", fr: "Franchement, le résultat m'a bluffée ! J'avais peur pour mes dents sensibles, mais aucune douleur et la blancheur est là." },
    rev4_name: { ar: "أمين .ر", en: "Amine .R", fr: "Amine .R" },
    rev4_city: { ar: "مراكش", en: "Marrakech", fr: "Marrakech" },
    rev4_text: { ar: "منتج ممتاز وتوصيل سريع في يومين فقط للدار البيضاء. طريقة الاستعمال ساهلة بزاف والنتيجة كتبان من أول مرة.", en: "Excellent product and fast delivery in 2 days. Very easy to use and visible results from the first use.", fr: "Excellent produit et livraison rapide en 2 jours. Très simple à utiliser et résultat visible dès la première fois." },

    land_order_h: { ar: "كل يوم كتأجّل، هو يوم بأسنان أقل بياضًا. صيفط طلبيتك دابا 👇", en: "Every day you delay is a day with less white teeth. Order Now 👇", fr: "Chaque jour de retard est un jour avec des dents moins blanches. Commandez maintenant 👇" },
    land_order_sub: { ar: "الدفع عند الاستلام، بلا خلاص مسبق. التوصيل لجميع مدن المغرب.", en: "Cash on Delivery, no upfront payment. Delivery to all Moroccan cities.", fr: "Paiement à la livraison, aucun paiement d'avance. Livraison dans tout le Maroc." },
    land_price:   { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    land_strike:  { ar: "350 د.م.", en: "350 MAD", fr: "350 MAD" },
    savings_tag:  { ar: "وفّرت 105 د.م. (30%)", en: "You save 105 MAD (30%)", fr: "Vous économisez 105 MAD (30%)" },
    checkout_badge: { ar: "عرض محدود ⏳", en: "Limited Offer ⏳", fr: "Offre Limitée ⏳" },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_name_ph: { ar: "محمد / فاطمة", en: "Your name", fr: "Votre nom" },
    form_phone_ph: { ar: "06XX XXX XXX", en: "06XX XXX XXX", fr: "06XX XXX XXX" },
    form_city_ph: { ar: "الدار البيضاء، الرباط...", en: "Casablanca, Rabat...", fr: "Casablanca, Rabat..." },
    form_title: {
      ar: "أكمل طلبيتك دابا 👇",
      en: "Complete your order now 👇",
      fr: "Complétez votre commande maintenant 👇"
    },
    form_subtitle: {
      ar: "ملي تضغط 'أكد الطلب'، غادي يتواصل معك أحد دفرقة ديالنا باش يأكد التوصيل.",
      en: "Once you click 'Confirm Order', our team will contact you to confirm delivery.",
      fr: "Une fois que vous cliquez sur 'Confirmer', notre équipe vous contactera pour confirmer la livraison."
    },
    form_secure: { ar: "معلوماتك آمنة ومحمية", en: "Your information is safe and secure", fr: "Vos informations sont sécurisées" },
    submit_order: {
      ar: "أكد الطلب — الدفع عند الاستلام",
      en: "Confirm Order — Cash on Delivery",
      fr: "Confirmer la commande — Paiement à la livraison"
    },

    ct_ship: { ar: "توصيل سريع", en: "Fast Shipping", fr: "Livraison Rapide" },
    ct_ship_sub: { ar: "فابور و سريع (24-48 ساعة)", en: "Free and fast (24-48h)", fr: "Gratuit et rapide (24-48h)" },
    trust_cod_sub: { ar: "تأكد من المنتج عاد خلص", en: "Check your product, then pay", fr: "Vérifiez avant de payer" },
    ct_guarantee: { ar: "ضمان 100%", en: "100% Guarantee", fr: "Garantie 100%" },
    ct_guarantee_sub: { ar: "ضمان 30 يوم استرجاع الفلوس", en: "30-day money-back guarantee", fr: "Garantie de remboursement de 30 jours" },

    sticky_name: { ar: "شرائط V34", en: "V34 Strips", fr: "Bandes V34" },
    sticky_price: { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    foot_copy: { ar: "© 2024 HISMILE. جميع الحقوق محفوظة.", en: "© 2024 HISMILE. ALL RIGHTS RESERVED.", fr: "© 2024 HISMILE. TOUS DROITS RÉSERVÉS." },

    /* FAQ translations */
    faq_title: { ar: "الأسئلة الشائعة", en: "Frequently Asked Questions", fr: "Questions Fréquentes" },
    faq_q1: { ar: "كيفاش كنستعمل شرائط V34؟", en: "How do I use V34 strips?", fr: "Comment utiliser les bandes V34 ?" },
    faq_a1: {
      ar: "نشّف سنانك مزيان، حط الشريطة الطويلة على سنانك الفوقانيين والصغيرة على التحتانيين. خليها 30 دقيقة، من بعد حيدها وشلل فمك بالماء وحك البقايا البنفسجية بالشيّتة.",
      en: "Dry your teeth, apply the long strip to your top teeth and the short strip to your bottom teeth. Wait 30 minutes, then remove and brush off any purple residue.",
      fr: "Séchez vos dents, appliquez la bande longue sur les dents du haut et la courte sur celles du bas. Attendez 30 minutes, retirez et brossez le résidu violet."
    },
    faq_q2: { ar: "شحال كتصبر النتيجة؟", en: "How long do results last?", fr: "Combien de temps dure le résultat ?" },
    faq_a2: {
      ar: "النتيجة الفورية ديال تصحيح اللون كتصبر يومين إلى 3 أيام حسب الماكلة والشراب ديالك (أتاي، قهوة، سجائر). ومع الاستعمال المتكرر لتقنية PAP+، التبييض كيولي دائم ومستمر.",
      en: "The instant colour correction lasts 2 to 3 days depending on diet (tea, coffee, smoking). With regular PAP+ tech, teeth whitening improves and lasts longer.",
      fr: "La correction instantanée dure 2 à 3 jours selon l'alimentation (café, thé, tabac). Avec la technologie PAP+, le blanchiment devient plus durable."
    },
    faq_q3: { ar: "واش آمنة على الأسنان الحساسة والمينا؟", en: "Is it safe for sensitive teeth?", fr: "Est-ce sûr pour les dents sensibles ?" },
    faq_a3: {
      ar: "نعم، آمنة 100%. شرائط V34 خالية تماماً من البيروكسيد (الماء الأوكسجيني) اللي كيسبب الألم والحساسية. كتخدم بتقنية تصحيح اللون الطبيعي وتبييض PAP+ الطبي الآمن.",
      en: "Yes, 100% safe. V34 strips are peroxide-free to avoid sensitivity and pain, using natural color correction and dentist-approved PAP+ whitening.",
      fr: "Oui, 100% sûr. Les bandes V34 sont sans peroxyde pour éviter la sensibilité, utilisant la correction de couleur naturelle et le blanchiment PAP+."
    },
    faq_q4: { ar: "شحال من استعمال كاين فالباطة؟", en: "How many uses in each box?", fr: "Combien d'utilisations par boîte ?" },
    faq_a4: {
      ar: "كل باطة كتحتوي على 14 شريطة للأسنان العلوية و 14 شريطة للأسنان السفلية، يعني كافية لـ 14 حصة تبييض كاملة.",
      en: "Each box contains 14 strips for upper teeth and 14 strips for lower teeth, providing 14 full treatment applications.",
      fr: "Chaque boîte contient 14 bandes pour le haut et 14 pour le bas, soit 14 applications complètes."
    },
    faq_q5: { ar: "شحال وقت التوصيل وكيفاش كنخلص؟", en: "What is delivery time & payment?", fr: "Délai de livraison & paiement ?" },
    faq_a5: {
      ar: "التوصيل فابور وسريع لجميع مدن المغرب (من 24 لـ 48 ساعة). الدفع كيكون عند الاستلام (COD)، يعني كتخلص حتى كتوصلك الطلبية ليديك وتأكد منها.",
      en: "Free and fast delivery across Morocco (24 to 48 hours). Payment is cash on delivery (COD), meaning you only pay when you receive and check your order.",
      fr: "Livraison gratuite et rapide partout au Maroc (24 à 48h). Paiement en espèces à la livraison (COD), vous ne payez qu'après vérification."
    },
    faq_q6: { ar: "شنو هي سياسة الإرجاع؟", en: "What is the return policy?", fr: "Quelle est la politique de retour ?" },
    faq_a6: {
      ar: "حنا واثقين من جودة المنتج، داكشي علاش كنقدّمو ضمان استرجاع الأموال لمدة 30 يوم. إلا ماعجبتكش النتيجة، تواصل معانا ورجع فلوسك بلا تعقيدات.",
      en: "We are confident in our quality, which is why we offer a 30-day money-back guarantee. If you are not satisfied, contact us for a hassle-free refund.",
      fr: "Confiants de notre qualité, nous offrons une garantie de 30 jours. Si vous n'êtes pas satisfait, contactez-nous pour un remboursement facile."
    }
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

    // Dynamically update document title based on language
    var titleDict = {
      ar: "Hismile V34 — شرائح تبييض الأسنان",
      en: "Hismile V34 — Teeth Whitening Strips",
      fr: "Hismile V34 — Bandes de Blanchiment"
    };
    document.title = titleDict[l] || "Hismile V34";
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
    if (bottomCta) {
      // Show sticky CTA after scrolling past 300px
      if (window.scrollY > 300) {
        bottomCta.classList.add("visible");
      } else {
        bottomCta.classList.remove("visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);

  /* ── Smooth Scroll to Top ── */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var btn = e.target.closest(".scroll-to-top");
    if (btn) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  /* ── Smooth Scroll to Checkout ── */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var btn = e.target.closest(".scroll-to-checkout");
    if (btn) {
      e.preventDefault();
      var section = document.getElementById("checkout-section");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
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

  /* ── FAQ Accordion ── */
  function initFaq() {
    var faqItems = document.querySelectorAll(".faq-item");
    for (var i = 0; i < faqItems.length; i++) {
      var btn = faqItems[i].querySelector(".faq-question");
      if (btn) {
        btn.addEventListener("click", function (e) {
          var currentItem = this.closest(".faq-item");
          var isOpen = currentItem.classList.contains("faq-open");

          // Close all FAQ items
          var allItems = document.querySelectorAll(".faq-item");
          for (var j = 0; j < allItems.length; j++) {
            allItems[j].classList.remove("faq-open");
          }

          // Toggle current item
          if (!isOpen) {
            currentItem.classList.add("faq-open");
          }
        });
      }
    }
  }

  /* ── Checkout Form ── */
  function initCustomCheckout() {
    var form = document.getElementById("custom-express-checkout-form");
    var submitBtn = document.querySelector("#checkout-section .btn-submit") ||
                  document.querySelector("#checkout-section button[type='submit']");
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

  /* ── Init & Hash Routing ── */
  function handleHashRoute() {
    var hash = window.location.hash || '#home';
    var views = document.querySelectorAll('.view-container');
    for (var i = 0; i < views.length; i++) {
      views[i].style.display = 'none';
    }
    
    if (hash === '#landing') {
      var landing = document.getElementById('view-landing');
      if (landing) landing.style.display = 'block';
    } else {
      var home = document.getElementById('view-home');
      if (home) home.style.display = 'block';
    }
    // Scroll to top when view changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("hashchange", handleHashRoute);

  function init() {
    applyLang(currentLangIndex);
    handleHashRoute();
    handleScroll();
    initSlider();
    initCustomCheckout();
    initFaq();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
