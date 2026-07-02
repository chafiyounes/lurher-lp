
(function () {
  "use strict";

  var I18N = {

    announce_cod: {
      ar: "الدفع عند الاستلام",
      en: "Cash on delivery",
      fr: "Paiement à la livraison"
    },
    announce_ship: {
      ar: "توصيل مجاني في كل المغرب",
      en: "Free shipping across Morocco",
      fr: "Livraison gratuite partout au Maroc"
    },
    announce_stock: {
      ar: "أقل من <strong>{n}</strong> باقة متبقية هذا الأسبوع !",
      en: "Only <strong>{n}</strong> packs left this week!",
      fr: "Moins de <strong>{n}</strong> packs disponibles cette semaine !"
    },
    announce_order: {
      ar: "اطلب باقتك الآن",
      en: "Order your pack now",
      fr: "Commandez votre pack maintenant"
    },
    nav_shop: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },
    brand_sub: { ar: "PARFUM", en: "PARFUM", fr: "PARFUM" },

    home_hero_h: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },
    home_hero_sub: { ar: "العطر اللي ما غاديش تقدر تقاوموا.", en: "The perfume she won't be able to resist.", fr: "Le parfum auquel elle ne pourra pas résister." },
    home_cta: { ar: "اكتشف العطر", en: "Discover the scent", fr: "Découvrir le parfum" },

    hero_badge: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },

    land_hero_h: {
      ar: "العطر اللي ما غاديش تقدر تقاوموا",
      en: "The perfume she won't be able to resist",
      fr: "Le parfum auquel elle ne pourra pas résister"
    },
    land_hero_sub: {
      ar: "عطر مغناطيسي — حصري، قوي ومثير للإغراء.",
      en: "A magnetic scent — exclusive, powerful and irresistible.",
      fr: "Un parfum magnétique — exclusif, puissant et irrésistible."
    },

    trust_attract: { ar: "يلفت الأنظار", en: "Turns heads", fr: "Attire les regards" },
    trust_lasting: { ar: "يدوم طول اليوم", en: "Lasts all day", fr: "Tient toute la journée" },
    trust_authentic: { ar: "أصلي 100%", en: "100% authentic", fr: "100% authentique" },
    trust_cod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", fr: "Paiement à la livraison" },

    gift_note: {
      ar: "مع كل طلب: 10ml هدية مجانية",
      en: "With every order: free 10ml gift",
      fr: "Avec chaque commande : 10ml offert en cadeau"
    },
    price_subnote: {
      ar: "<strong class='subnote-gift'>عطر بريميوم 10مل — هدية مع كل طلب هذا الأسبوع</strong>",
      en: "<strong class='subnote-gift'>A premium 10ml scent — free with every order this week</strong>",
      fr: "<strong class='subnote-gift'>Un parfum premium 10ml — offert avec chaque commande cette semaine</strong>"
    },
    savings_tag: { ar: "وفّرت 61 درهم", en: "You save 61 DH", fr: "Économisez 61 DH" },

    ct_ship: { ar: "توصيل مجاني", en: "Free delivery", fr: "Livraison gratuite" },
    ct_guarantee: { ar: "أصلي 100%", en: "100% authentic", fr: "100% authentique" },
    trust_shipping: { ar: "توصيل مجاني في كل المغرب", en: "Free shipping in Morocco", fr: "Livraison gratuite au Maroc" },
    trust_gift: { ar: "عطر بريميوم هدية", en: "Free premium scent", fr: "Parfum premium offert" },

    tb_cod: {
      ar: "الدفع عند الاستلام — ما كتخلّص حتى يوصلك المنتج ليديك",
      en: "Cash on delivery — you only pay once the product is in your hands",
      fr: "Paiement à la livraison — vous ne payez qu'une fois le produit en main"
    },
    tb_ship: {
      ar: "توصيل مجاني لجميع مدن المغرب",
      en: "Free delivery to every city in Morocco",
      fr: "Livraison gratuite dans toutes les villes du Maroc"
    },
    tb_return: {
      ar: "جرّبو بكل ثقة — إيلا ما عجبكش العطر أو شككتي فأصالتو، ترجعو بلا أي مشكل",
      en: "Try with confidence — if you don't like the perfume or doubt its authenticity, you send it back, no hassle",
      fr: "Essayez en toute confiance — si le parfum ne vous plaît pas ou si vous doutez de son authenticité, vous le renvoyez, sans souci"
    },
    guarantee_title: {
      ar: "شمّو قبل ما تخلّص",
      en: "Smell it before you pay",
      fr: "Sentez avant de payer"
    },
    guarantee_sub: {
      ar: "تشوف العطر، تشمّو، وإيلا ما عجبكش — ترجعو بلا أي مشكل. الدفع عند الاستلام.",
      en: "See it, smell it, and if you don't like it — send it back, no hassle. Cash on delivery.",
      fr: "Vous le voyez, vous le sentez, et s'il ne vous plaît pas — vous le retournez, sans souci. Paiement à la livraison."
    },
    guarantee_meta_1: {
      ar: "توصيل من 24 إلى 48 ساعة في كل المغرب",
      en: "Delivery in 24–48 hours across Morocco",
      fr: "Livraison en 24 à 48 h partout au Maroc"
    },
    guarantee_meta_2: {
      ar: "10ml هدية مجانية مع كل طلب",
      en: "Free 10ml gift with every order",
      fr: "10ml offert avec chaque commande"
    },

    reframe_eyebrow: { ar: "علاش حنا مختلفين", en: "Why we're different", fr: "Pourquoi nous sommes différents" },
    reframe_h: {
      ar: "وحدة كتخدم خير من خمسة ما كيريحو بوالو",
      en: "One that works beats five that smell like nothing",
      fr: "Un seul qui fonctionne vaut mieux que cinq qui ne sentent à rien"
    },
    reframe_p1: {
      ar: "هاد العطور الرخيصة اللي كيبيعو 5 بـ200؟ كيبانو ريحة الكحول، كيطيرو فساعة، وما كيديرو حتى تأثير.",
      en: "Those cheap perfumes sold 5 for 200? They smell of alcohol, fade in an hour and produce no effect.",
      fr: "Ces parfums bon marché vendus 5 pour 200 ? Ils sentent l'alcool, s'évaporent en une heure et ne produisent aucun effet."
    },
    reframe_p2: {
      ar: "حنا درنا العكس. فورمولة حصرية بتركيز عالي من الزيوت — قنينة وحدة كتدير تأثير بصح.",
      en: "We did the opposite. An exclusive high-concentration formula — one bottle that actually works.",
      fr: "Nous avons fait l'inverse. Une formule exclusive à forte concentration d'huiles — un seul flacon qui fait vraiment effet."
    },
    reframe_p3: {
      ar: "ماشي مسألة كمية. مسألة عطر كيدير تأثير بصح.",
      en: "It was never about quantity. It's about a perfume that actually works.",
      fr: "Ce n'a jamais été une question de quantité. C'est une question de parfum qui fait vraiment effet."
    },
    vs_us_label: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },
    vs_them_label: { ar: "المقلّدات والعطور الرخيصة 5 بـ200", en: "Fakes & cheap perfumes, 5 for 200", fr: "Contrefaçons & parfums 5 pour 200" },
    vs_them_short: { ar: "الباقي", en: "The rest", fr: "Les autres" },
    vs_f1: { ar: "تركيز عالي من الزيوت الأصلية", en: "High concentration of authentic oils", fr: "Forte concentration d'huiles authentiques" },
    vs_f2: { ar: "ثبات يدوم طول اليوم", en: "Lasts all day long", fr: "Tient toute la journée" },
    vs_f3: { ar: "شعار مطبوع على القنينة (ماشي ستيكر)", en: "Logo printed on the bottle (not a sticker)", fr: "Logo imprimé sur le flacon (pas un autocollant)" },
    vs_f4: { ar: "10ml هدية مع كل طلب", en: "Free 10ml gift with every order", fr: "10ml offert avec chaque commande" },

    ben_eyebrow: { ar: "الفوائد", en: "The benefits", fr: "Les bénéfices" },
    land_benefits_h: { ar: "شنو كيوفّر ليك Lure Her", en: "What Lure Her gives you", fr: "Ce que Lure Her vous apporte" },
    ben_1: { ar: "عطر ما يتقاومش", en: "An irresistible scent", fr: "Un parfum irrésistible" },
    ben_1_sub: { ar: "فوحان كيخلّي الناس يسولوك شنو حاطط.", en: "A sillage that makes people ask what you're wearing.", fr: "Un sillage qui fait demander ce que vous portez." },
    ben_2: { ar: "ثقة من أول رشّة", en: "Confidence from the first spray", fr: "Confiance dès la première vaporisation" },
    ben_2_sub: { ar: "كتحسّ بالفرق من اللحظة اللي كترشّو.", en: "You feel the difference the moment you spray.", fr: "Vous sentez la différence dès la vaporisation." },
    ben_3: { ar: "رجولي، منعش وراقٍ", en: "Masculine, fresh and refined", fr: "Masculin, frais et raffiné" },
    ben_3_sub: { ar: "فورمولة حصرية بتركيز عالي.", en: "An exclusive high-concentration formula.", fr: "Une formule exclusive à forte concentration." },
    ben_4: { ar: "التأثير الحقيقي فالعناق", en: "The real effect, in the embrace", fr: "Le vrai effet, dans l'étreinte" },
    ben_4_sub: { ar: "مصمّم للحظات القريبة اللي كتبقى فالذاكرة.", en: "Made for the close moments that stay in memory.", fr: "Conçu pour les moments rapprochés qui marquent." },

    proof_eyebrow: { ar: "الجودة والإثبات", en: "Proof & quality", fr: "Preuves & qualité" },
    proof_h: { ar: "الجودة اللي ما تبانش من الشاشة", en: "Quality you can't judge on a screen", fr: "La vraie qualité — impossible à juger sur écran" },
    proof_1: {
      ar: "شعار UV DTF مطبوع على القنينة — ماشي ستيكر كيتقلّع بحال المقلّد",
      en: "UV DTF logo printed on the bottle — not a sticker that peels like the fakes",
      fr: "Logo UV DTF imprimé sur le flacon — pas un autocollant qui se décolle comme les contrefaçons"
    },
    proof_2: {
      ar: "تركيز عالي من الزيوت الأصلية = كيدوم طول اليوم",
      en: "High concentration of authentic oils = lasts all day",
      fr: "Forte concentration d'huiles authentiques = tient toute la journée"
    },
    proof_4: { ar: "بلا ريحة الكحول", en: "No alcohol smell", fr: "Sans odeur d'alcool" },

    box_eyebrow: { ar: "شنو غادي توصلك", en: "What you receive", fr: "Ce que vous recevez" },
    box_h: { ar: "كل طلب فيه عطرين", en: "Every order contains two perfumes", fr: "Chaque commande contient deux parfums" },
    box_1_title: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },
    box_1_sub: { ar: "50ml — قوي ومغناطيسي", en: "50ml — powerful and magnetic", fr: "50ml — puissant et magnétique" },
    box_2_title: { ar: "10ml — هدية مجانية", en: "10ml — free gift", fr: "10ml — cadeau offert" },
    box_2_sub: { ar: "مفاجأة حصرية مع كل طلب", en: "An exclusive surprise with every order", fr: "Une surprise exclusive avec chaque commande" },
    box_cta: { ar: "اطلب الآن", en: "Order now", fr: "Commander" },
    box_foot: { ar: "الزوج كامل بـ 189 درهم فقط", en: "Both together for only 189 DH", fr: "Les deux ensemble pour seulement 189 DH" },

    rev_eyebrow: { ar: "آراء الزبناء", en: "Customer reviews", fr: "Avis clients" },
    rev_title: { ar: "جرّبو Lure Her", en: "They tried Lure Her", fr: "Ils ont essayé Lure Her" },
    rev_sub: {
      ar: "+2000 طلبية وصلات للمغرب",
      en: "+2,000 orders delivered in Morocco",
      fr: "+2 000 commandes livrées au Maroc"
    },
    rev_rating_label: { ar: "معدل التقييم", en: "Average rating", fr: "Note moyenne" },
    rev_verified: { ar: "طلبية مؤكدة", en: "Verified order", fr: "Commande vérifiée" },
    rev1_name: { ar: "يوسف", en: "Youssef", fr: "Youssef" },
    rev1_city: { ar: "الدار البيضاء", en: "Casablanca", fr: "Casablanca" },
    rev1_text: {
      ar: "وصلني فيومين. العطر خطير وكيدوم. مراتي سولاتني أشنو حاطط",
      en: "Delivered in two days. The perfume is incredible and it lasts. My wife asked what I was wearing",
      fr: "Livré en deux jours. Le parfum est incroyable et il tient. Ma femme m'a demandé ce que je portais"
    },
    rev2_name: { ar: "أنس", en: "Anas", fr: "Anas" },
    rev2_city: { ar: "مراكش", en: "Marrakech", fr: "Marrakech" },
    rev2_text: {
      ar: "كنت خايف يكون بحال المنتجات الرخيصة — ولكن لا، هادا أصلي، راقٍ وكيدوم بزّاف.",
      en: "I was afraid it'd be like the cheap products — but no, it's the real thing, refined and long-lasting.",
      fr: "J'avais peur que ce soit comme les produits bon marché — mais non, c'est du vrai, raffiné et longue tenue."
    },
    rev3_name: { ar: "مهدي", en: "Mehdi", fr: "Mehdi" },
    rev3_city: { ar: "طنجة", en: "Tangier", fr: "Tanger" },
    rev3_text: {
      ar: "بزّاف ديال المجاملات فالخدمة. مستاهل الثمن بزّاف.",
      en: "Tons of compliments at work. More than worth the price.",
      fr: "Énormément de compliments au travail. Largement à la hauteur du prix."
    },
    rev4_name: { ar: "رضا", en: "Reda", fr: "Reda" },
    rev4_city: { ar: "أكادير", en: "Agadir", fr: "Agadir" },
    rev4_text: {
      ar: "حتى الهدية 10ml زوينة بزّاف — عطر راقٍ بصح. خدمة ممتازة، كننصح بيه.",
      en: "Even the 10ml gift is excellent — a truly classy perfume. Impeccable service, I recommend.",
      fr: "Même le cadeau 10ml est excellent — un parfum vraiment classe. Service impeccable, je recommande."
    },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_address: { ar: "العنوان", en: "Address", fr: "Adresse" },
    form_name_ph: { ar: "الإسم الكامل", en: "Full name", fr: "Nom complet" },
    form_phone_ph: { ar: "رقم الهاتف", en: "Phone number", fr: "Numéro de téléphone" },
    form_city_ph: { ar: "المدينة", en: "City", fr: "Ville" },
    form_address_ph: { ar: "العنوان", en: "Address", fr: "Adresse" },
    form_secure: { ar: "معلوماتك آمنة ومحمية", en: "Your information is safe and secure", fr: "Vos informations sont sécurisées" },
    submit_order: { ar: "اطلب الآن", en: "ORDER", fr: "COMMANDER" },

    sticky_name: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },
    sticky_price: { ar: "189 درهم", en: "189 DH", fr: "189 DH" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    fcta_h: { ar: "عطر واحد يقدر يبدّل كلشي", en: "One perfume can change everything", fr: "Un seul parfum peut tout changer" },
    fcta_offer: {
      ar: "Lure Her 50ml + 10ml هدية · 250 درهم ← 189 درهم · الدفع عند الاستلام · توصيل مجاني",
      en: "Lure Her 50ml + free 10ml gift · 250 DH → 189 DH · Cash on delivery · Free shipping",
      fr: "Lure Her 50ml + 10ml offert · 250 DH → 189 DH · Paiement à la livraison · Livraison gratuite"
    },
    fcta_cta: { ar: "اطلب الآن", en: "ORDER", fr: "COMMANDER" },
    fcta_stock: { ar: "ما بقاوش غير 30 قطعة", en: "Only 30 pieces left", fr: "Plus que 30 pièces" },

    faq_eyebrow: { ar: "أسئلة شائعة", en: "FAQ", fr: "FAQ" },
    faq_title: { ar: "كل ما خصك تعرف قبل ما تطلب", en: "Everything to know before ordering", fr: "Tout savoir avant de commander" },
    faq_cta: { ar: "اطلب الآن", en: "Order now", fr: "Commander maintenant" },
    faq_q1: { ar: "واش العطر أصلي؟", en: "Is the perfume authentic?", fr: "Le parfum est-il authentique ?" },
    faq_a1: {
      ar: "أيه — فورمولة حصرية بتركيز عالي، بشعار UV مطبوع على القنينة. بلا أي تقليد رخيص.",
      en: "Yes — an exclusive high-concentration formula, with a UV logo printed on the bottle. No cheap counterfeits.",
      fr: "Oui — une formule exclusive à forte concentration, avec un logo UV imprimé sur le flacon. Aucune contrefaçon bon marché."
    },
    faq_q2: { ar: "شحال كيدوم؟", en: "How long does it last?", fr: "Combien de temps tient-il ?" },
    faq_a2: {
      ar: "بفضل التركيز العالي للزيوت، كيدوم طول النهار.",
      en: "Thanks to the high oil concentration, it lasts all day.",
      fr: "Grâce à la forte concentration d'huiles, il tient toute la journée."
    },
    faq_q3: { ar: "كيفاش كنخلّص؟", en: "How do I pay?", fr: "Comment je paie ?" },
    faq_a3: {
      ar: "الدفع عند الاستلام — ما كتخلّص حتى يوصلك العطر ليديك.",
      en: "Cash on delivery — you only pay once the perfume is in your hands.",
      fr: "Paiement à la livraison — vous ne payez qu'une fois le parfum en main."
    },
    faq_q4: { ar: "إمتى غادي يوصلني؟", en: "When will I be delivered?", fr: "Quand serai-je livré ?" },
    faq_a4: {
      ar: "توصيل مجاني لكل المغرب، عادةً من 24 إلى 48 ساعة.",
      en: "Free delivery across Morocco, usually within 24 to 48 hours.",
      fr: "Livraison gratuite dans tout le Maroc, généralement sous 24 à 48 h."
    },
    faq_q5: { ar: "واش نقدر نرجعو؟", en: "Can I return it?", fr: "Puis-je le renvoyer ?" },
    faq_a5: {
      ar: "بطبيعة الحال — جرّبو، وإيلا ما عجبكش رجعو بلا أي مشكل.",
      en: "Of course — try it, and if you don't like it, send it back with no hassle.",
      fr: "Bien sûr — essayez-le, et s'il ne vous plaît pas, renvoyez-le sans aucun souci."
    }
  };

  var langs = ["ar", "fr"];
  var DEFAULT_LANG = "ar";
  var LANG_LABELS = { fr: "Français", ar: "العربية" };

  // Ad-link ?lang= (e.g. ...?lang=fr) overrides any saved preference, so a
  // French ad always lands in French even for a returning visitor.
  function langFromUrl() {
    try {
      var m = /[?&]lang=([a-zA-Z]{2})/.exec(window.location.search || "");
      if (m) {
        var v = m[1].toLowerCase();
        if (v === "en") return DEFAULT_LANG;
        if (langs.indexOf(v) !== -1) return v;
      }
    } catch (e) {}
    return null;
  }

  function resolveInitialLang() {
    var fromUrl = langFromUrl();
    if (fromUrl) return fromUrl;
    try {
      var savedLang = localStorage.getItem("lureher_lang");
      if (savedLang === "en") return DEFAULT_LANG;
      if (savedLang && langs.indexOf(savedLang) !== -1) return savedLang;
    } catch (e) {}
    if (window.__V34_INITIAL_LANG) {
      if (window.__V34_INITIAL_LANG === "en") return DEFAULT_LANG;
      if (langs.indexOf(window.__V34_INITIAL_LANG) !== -1) return window.__V34_INITIAL_LANG;
    }
    return DEFAULT_LANG;
  }

  var currentLangIndex = langs.indexOf(resolveInitialLang());
  if (currentLangIndex < 0) currentLangIndex = 0;


  function localize(root, l) {
    root = root || document;
    var nodes = root.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (I18N[k] && I18N[k][l] != null) {
        nodes[i].innerHTML = I18N[k][l];
      }
    }
    var phNodes = root.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < phNodes.length; j++) {
      var pk = phNodes[j].getAttribute("data-i18n-placeholder");
      if (I18N[pk] && I18N[pk][l] != null) {
        phNodes[j].setAttribute("placeholder", I18N[pk][l]);
      }
    }
  }

  function applyLang(index) {
    currentLangIndex = index;
    var l = langs[currentLangIndex];
    try { localStorage.setItem("lureher_lang", l); } catch (e) {}
    var app = document.querySelector(".app");

    if (app) {
      app.setAttribute("lang", l);
      app.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    }

    localize(document, l);


    var submitLabel = document.querySelector("#checkout-section .order-submit .btn-label");
    if (submitLabel && I18N.submit_order && I18N.submit_order[l]) {
      submitLabel.textContent = I18N.submit_order[l];
    }

    var label = document.getElementById("langLabel");
    if (label) label.textContent = LANG_LABELS[l] || l;


    var titleDict = {
      ar: "Lure Her — العطر اللي ما تتقاومش",
      en: "Lure Her — The irresistible men's perfume",
      fr: "Lure Her — Le parfum irrésistible pour homme"
    };
    document.title = titleDict[l] || "Lure Her";
    updateHeroGalleryAlts();
    updateStockLabels(window.__V34_STOCK_COUNT || computeDeterministicStock());
    if (window.__V34_REFRESH_ANNOUNCE) window.__V34_REFRESH_ANNOUNCE();
    loadDeferredLangAssets(l);
    syncPricesFromYouCan();
    syncFormLabelsFromYouCan();
  }

  function updateStockLabels(n) {
    var l = langs[currentLangIndex];
    var tpl = I18N.announce_stock && I18N.announce_stock[l] ? I18N.announce_stock[l] : "Only <strong>{n}</strong> left in stock";
    var html = tpl.replace("{n}", String(n));
    document.querySelectorAll(".announce-stock").forEach(function (el) {
      el.innerHTML = html;
    });
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
      var wh = window.innerHeight;
      var et = reveals[i].getBoundingClientRect().top;
      if (et < wh - 40) {
        reveals[i].classList.add("active");
      }
    }

    var bottomCta = document.getElementById("bottom-cta");
    if (bottomCta && !window.__stickyCtaIO) {
      if (window.scrollY > 120) {
        bottomCta.classList.add("visible");
      } else {
        bottomCta.classList.remove("visible");
      }
    }
  }

  function initStickyCta() {
    var bottomCta = document.getElementById("bottom-cta");
    var stickyBtn = document.getElementById("stickyBtn");
    if (!bottomCta) return;

    window.__stickyCtaIO = true;
    bottomCta.classList.add("visible");

    if (stickyBtn) {
      stickyBtn.addEventListener("click", function () {
        stickyBtn.classList.add("pulse-stopped");
      });
    }
  }

  window.addEventListener("scroll", handleScroll);

  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var btn = e.target.closest(".scroll-to-top");
    if (btn) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var btn = e.target.closest(".scroll-to-checkout");
    if (btn) {
      e.preventDefault();
      var target = document.getElementById("checkout-form") ||
        document.querySelector(".checkout-form-side") ||
        document.getElementById("checkout-section");
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: window.innerWidth < 900 ? "start" : "center"
        });
      }
    }
  });

  var HERO_ASSET_VERSION = 8;
  var HERO_MANIFEST_URL =
    "https://cdn.jsdelivr.net/gh/chafiyounes/lurher-lp@main/images/hero/manifest.json?v=" +
    HERO_ASSET_VERSION;

  var HERO_MANIFEST_FALLBACK = {
    baseUrl: "https://cdn.jsdelivr.net/gh/chafiyounes/lurher-lp@main/images/hero/",
    slides: [
      {
        id: "couple",
        image: "h-couple-v2.webp",
        thumb: "h-couple-v2.webp",
        alt: { ar: "امرأة تشمّ رجلاً يضع عطر Lure Her", en: "Woman smelling a man wearing Lure Her", fr: "Une femme sent un homme portant Lure Her" }
      },
      {
        id: "duo",
        image: "h-duo-v3.webp",
        thumb: "h-duo-v3.webp",
        alt: { ar: "عطر Lure Her مع عيّنة Layton", en: "Lure Her with the Layton decant", fr: "Lure Her avec le décant Layton" }
      },
      {
        id: "solo",
        image: "h-solo-v2.webp",
        thumb: "h-solo-v2.webp",
        alt: { ar: "عطر Lure Her الأصلي 50 مل", en: "Lure Her original 50ml", fr: "Lure Her original 50ml" }
      },
      {
        id: "decant",
        image: "h-decant-v2.webp",
        thumb: "h-decant-v2.webp",
        alt: { ar: "عيّنة عطر Layton 10 مل", en: "Layton parfum decant 10ml", fr: "Décant Layton parfum 10ml" }
      },
    ]
  };

  var heroManifestCache = null;

  function heroSlideAsset(asset, lang, base) {
    if (!asset) return "";
    var file = asset;
    if (typeof asset === "object") {
      file = asset[lang] || asset.en || asset.ar || asset.fr;
      if (!file) {
        var keys = Object.keys(asset);
        file = keys.length ? asset[keys[0]] : "";
      }
    }
    if (!file) return "";
    if (file.indexOf("http") === 0) return file;
    var url = base + file;
    var sep = url.indexOf("?") >= 0 ? "&" : "?";
    return url + sep + "v=" + HERO_ASSET_VERSION;
  }

  function heroSlideAlt(slide, lang) {
    if (slide.alt && slide.alt[lang]) return slide.alt[lang];
    return slide.alt && slide.alt.ar ? slide.alt.ar : "";
  }

  function bindImageFallback(img, primarySrc, fallbackSrc) {
    img.src = primarySrc;
    if (!fallbackSrc || fallbackSrc === primarySrc) return;
    img.addEventListener("error", function onErr() {
      if (img.dataset.fallbackTried === "1") return;
      img.dataset.fallbackTried = "1";
      if (img.src !== fallbackSrc) img.src = fallbackSrc;
    });
  }

  function initMediaCarousel(root, options) {
    if (!root) return null;
    options = options || {};
    var track = root.querySelector(options.trackSelector || ".media-carousel-track");
    if (!track) return null;
    var slideSelector = options.slideSelector || ".media-carousel-slide";
    var btnPrev = root.querySelector(options.prevSelector || ".media-carousel-prev");
    var btnNext = root.querySelector(options.nextSelector || ".media-carousel-next");
    var thumbsWrap = options.thumbsEl || root.querySelector(".media-carousel-thumbs");
    var autoplayMs = options.autoplayMs != null ? options.autoplayMs : 0;
    var crossfade = !!options.crossfade;
    var scrollSnap = !!options.scrollSnap;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (crossfade) root.classList.add("media-carousel--crossfade");
    if (scrollSnap) root.classList.add("media-carousel--scroll");

    var index = 0;
    var timer = null;

    function slides() {
      return track.querySelectorAll(slideSelector);
    }

    function thumbButtons() {
      return thumbsWrap ? thumbsWrap.querySelectorAll(".media-carousel-thumb") : [];
    }

    function goTo(i) {
      var slideList = slides();
      var total = slideList.length;
      if (!total) return;
      index = (i + total) % total;
      if (crossfade) {
        track.style.transform = "none";
        for (var s = 0; s < slideList.length; s++) {
          slideList[s].classList.toggle("is-active", s === index);
        }
      } else if (scrollSnap && viewport) {
        track.style.transform = "none";
        var targetSlide = slideList[index];
        if (targetSlide && targetSlide.scrollIntoView) {
          targetSlide.scrollIntoView({ inline: "start", block: "nearest", behavior: reducedMotion ? "auto" : "smooth" });
        }
        for (var sSnap = 0; sSnap < slideList.length; sSnap++) {
          slideList[sSnap].classList.toggle("is-active", sSnap === index);
        }
      } else {
        var isRtl = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
        var offset = isRtl ? index : -index;
        track.style.transform = "translateX(" + (offset * 100) + "%)";
        for (var s2 = 0; s2 < slideList.length; s2++) {
          slideList[s2].classList.toggle("is-active", s2 === index);
        }
      }
      var thumbs = thumbButtons();
      for (var t = 0; t < thumbs.length; t++) {
        thumbs[t].classList.toggle("is-active", t === index);
        thumbs[t].setAttribute("aria-selected", t === index ? "true" : "false");
      }
      if (options.onChange) options.onChange(index);
    }

    function step(delta) {
      goTo(index + delta);
    }

    function resetAutoplay() {
      if (timer) clearInterval(timer);
      if (!autoplayMs || reducedMotion || document.hidden) return;
      timer = setInterval(function () { step(1); }, autoplayMs);
    }

    if (btnPrev) btnPrev.addEventListener("click", function () { step(-1); resetAutoplay(); });
    if (btnNext) btnNext.addEventListener("click", function () { step(1); resetAutoplay(); });

    var viewport = root.querySelector(options.viewportSelector || ".media-carousel-viewport");
    if (viewport && scrollSnap) {
      viewport.addEventListener("scroll", function () {
        var slideList = slides();
        var w = viewport.clientWidth;
        if (!w || !slideList.length) return;
        var raw = Math.abs(viewport.scrollLeft) / w;
        var i = Math.round(raw);
        if (i < 0) i = 0;
        if (i >= slideList.length) i = slideList.length - 1;
        if (i === index) return;
        index = i;
        var thumbs = thumbButtons();
        for (var t2 = 0; t2 < thumbs.length; t2++) {
          thumbs[t2].classList.toggle("is-active", t2 === index);
          thumbs[t2].setAttribute("aria-selected", t2 === index ? "true" : "false");
        }
        if (options.onChange) options.onChange(index);
      }, { passive: true });
    }
    if (viewport && !scrollSnap) {
      var touchStartX = 0;
      var touchStartY = 0;
      viewport.addEventListener("touchstart", function (e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        if (timer) clearInterval(timer);
      }, { passive: true });
      viewport.addEventListener("touchend", function (e) {
        var dx = e.changedTouches[0].clientX - touchStartX;
        var dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) {
          resetAutoplay();
          return;
        }
        var isRtl = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
        if (isRtl) dx = -dx;
        step(dx > 0 ? -1 : 1);
        resetAutoplay();
      }, { passive: true });

      if (window.PointerEvent) {
        var pointerStartX = 0;
        viewport.addEventListener("pointerdown", function (e) {
          if (e.pointerType === "mouse" && e.button !== 0) return;
          pointerStartX = e.clientX;
        });
        viewport.addEventListener("pointerup", function (e) {
          if (e.pointerType === "mouse") return;
          var dx = e.clientX - pointerStartX;
          if (Math.abs(dx) < 40) return;
          var isRtl2 = document.querySelector(".app") &&
            document.querySelector(".app").getAttribute("dir") === "rtl";
          if (isRtl2) dx = -dx;
          step(dx > 0 ? -1 : 1);
          resetAutoplay();
        });
      }
    }

    if (autoplayMs) {
      root.addEventListener("mouseenter", function () {
        if (timer) clearInterval(timer);
      });
      root.addEventListener("mouseleave", resetAutoplay);
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          if (timer) clearInterval(timer);
        } else {
          resetAutoplay();
        }
      });
    }

    goTo(0);
    resetAutoplay();

    return {
      goTo: goTo,
      step: step,
      resetAutoplay: resetAutoplay,
      getIndex: function () { return index; }
    };
  }

  var heroGalleryController = null;

  function buildHeroGallery(manifest) {
    var root = document.getElementById("hero-gallery");
    var track = document.getElementById("hero-gallery-track");
    var thumbs = document.getElementById("hero-gallery-thumbs");
    if (!root || !track || !thumbs || !manifest || !manifest.slides) return;

    heroManifestCache = manifest;
    var lang = langs[currentLangIndex];
    var base = manifest.baseUrl || "";
    track.innerHTML = "";
    thumbs.innerHTML = "";

    manifest.slides.forEach(function (slide, i) {
      var mainSrc = heroSlideAsset(slide.image, lang, base);
      var thumbSrc = heroSlideAsset(slide.thumb || slide.image, lang, base);
      var fallback = slide.fallback || null;
      var alt = heroSlideAlt(slide, lang);

      var li = document.createElement("li");
      li.className = "media-carousel-slide" + (i === 0 ? " is-active" : "");
      li.setAttribute("data-slide-id", slide.id);
      var img = document.createElement("img");
      img.alt = alt;
      img.loading = i === 0 ? "eager" : "lazy";
      img.decoding = "async";
      img.setAttribute("data-slide-index", String(i));
      img.setAttribute("data-alt-ar", slide.alt && slide.alt.ar ? slide.alt.ar : "");
      img.setAttribute("data-alt-en", slide.alt && slide.alt.en ? slide.alt.en : "");
      img.setAttribute("data-alt-fr", slide.alt && slide.alt.fr ? slide.alt.fr : "");
      bindImageFallback(img, mainSrc, fallback);
      li.appendChild(img);
      track.appendChild(li);

      var thumbBtn = document.createElement("button");
      thumbBtn.type = "button";
      thumbBtn.className = "media-carousel-thumb" + (i === 0 ? " is-active" : "");
      thumbBtn.setAttribute("role", "tab");
      thumbBtn.setAttribute("aria-label", alt || "Slide " + (i + 1));
      thumbBtn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      var thumbImg = document.createElement("img");
      thumbImg.alt = "";
      thumbImg.setAttribute("data-slide-index", String(i));
      bindImageFallback(thumbImg, thumbSrc, fallback);
      thumbBtn.appendChild(thumbImg);
      (function (idx) {
        thumbBtn.addEventListener("click", function () {
          if (heroGalleryController) heroGalleryController.goTo(idx);
          if (heroGalleryController) heroGalleryController.resetAutoplay();
        });
      })(i);
      thumbs.appendChild(thumbBtn);
    });

    root.style.setProperty("--hero-thumb-cols", String(manifest.slides.length));

    var isMobileCarousel = window.matchMedia("(max-width: 639px)").matches;
    if (isMobileCarousel) root.classList.add("media-carousel--scroll");

    heroGalleryController = initMediaCarousel(root, {
      slideSelector: ".media-carousel-slide",
      autoplayMs: isMobileCarousel ? 0 : 5000,
      crossfade: !isMobileCarousel,
      scrollSnap: isMobileCarousel
    });
  }

  function updateHeroGalleryImages() {
    if (!heroManifestCache || !heroManifestCache.slides) return;
    var lang = langs[currentLangIndex];
    var base = heroManifestCache.baseUrl || "";
    var slideImgs = document.querySelectorAll("#hero-gallery-track img[data-slide-index]");
    var thumbImgs = document.querySelectorAll("#hero-gallery-thumbs img[data-slide-index]");
    heroManifestCache.slides.forEach(function (slide, i) {
      var mainSrc = heroSlideAsset(slide.image, lang, base);
      var thumbSrc = heroSlideAsset(slide.thumb || slide.image, lang, base);
      if (slideImgs[i]) {
        slideImgs[i].dataset.fallbackTried = "";
        slideImgs[i].src = mainSrc;
      }
      if (thumbImgs[i]) {
        thumbImgs[i].dataset.fallbackTried = "";
        thumbImgs[i].src = thumbSrc;
      }
    });
  }

  function updateHeroGalleryAlts() {
    updateHeroGalleryImages();
    var lang = langs[currentLangIndex];
    var imgs = document.querySelectorAll("#hero-gallery-track img[data-alt-ar]");
    for (var i = 0; i < imgs.length; i++) {
      var key = "data-alt-" + lang;
      var alt = imgs[i].getAttribute(key) || imgs[i].getAttribute("data-alt-ar") || "";
      imgs[i].alt = alt;
    }
    var thumbBtns = document.querySelectorAll("#hero-gallery-thumbs .media-carousel-thumb");
    for (var j = 0; j < thumbBtns.length; j++) {
      var slideImg = document.querySelectorAll("#hero-gallery-track img")[j];
      if (slideImg) thumbBtns[j].setAttribute("aria-label", slideImg.alt || "Slide " + (j + 1));
    }
  }

  function initHeroGallery() {
    var root = document.getElementById("hero-gallery");
    if (!root) return;

    fetch(HERO_MANIFEST_URL, { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("manifest fetch failed");
        return r.json();
      })
      .then(function (data) {
        buildHeroGallery(data);
        updateHeroGalleryAlts();
      })
      .catch(function () {
        buildHeroGallery(HERO_MANIFEST_FALLBACK);
        updateHeroGalleryAlts();
      });
  }

  function initFaq() {
    var faqItems = document.querySelectorAll(".faq-item");
    for (var i = 0; i < faqItems.length; i++) {
      var btn = faqItems[i].querySelector(".faq-question");
      if (btn) {
        btn.addEventListener("click", function () {
          var currentItem = this.closest(".faq-item");
          var isOpen = currentItem.classList.contains("faq-open");
          var allItems = document.querySelectorAll(".faq-item");

          for (var j = 0; j < allItems.length; j++) {
            allItems[j].classList.remove("faq-open");
            var q = allItems[j].querySelector(".faq-question");
            if (q) q.setAttribute("aria-expanded", "false");
          }

          if (!isOpen) {
            currentItem.classList.add("faq-open");
            this.setAttribute("aria-expanded", "true");
          }
        });
      }
    }
  }

  function initCustomCheckout() {
    var form = document.getElementById("custom-express-checkout-form");
    var submitBtn = document.querySelector("#checkout-section .btn-submit") ||
                  document.querySelector("#checkout-section button[type='submit']");
    if (!form || !submitBtn) return;


    (function syncHiddenFromNative() {
      var native = document.querySelector("#app #express-checkout-form") ||
                   document.querySelector(".express-checkout-form-section form") ||
                   document.querySelector("[data-pb-type='single-product'] form");
      if (!native) return;
      var SKIP = { first_name: 1, phone: 1, "": 1 };
      var nativeInputs = native.querySelectorAll("input[type='hidden'], input[name]");
      for (var i = 0; i < nativeInputs.length; i++) {
        var ni = nativeInputs[i];
        var n = ni.getAttribute("name");
        if (!n || SKIP[n]) continue;
        var ours = form.querySelector('[name="' + n + '"]');
        if (ours && !ours.value) {
          ours.value = ni.value;
        } else if (!ours) {

          var clone = document.createElement("input");
          clone.type = "hidden";
          clone.name = n;
          clone.value = ni.value;
          form.appendChild(clone);
        }
      }
    })();

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
        var group = e.target.closest(".form-group, .premium-field");
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
      var nativeForm = document.querySelector("#app #express-checkout-form");
      if (nativeForm && nativeForm.querySelector('[name="region"]')) {
        fieldsToValidate.push("region");
      }
      for (var i = 0; i < fieldsToValidate.length; i++) {
        var name = fieldsToValidate[i];
        var input = form.querySelector('[name="' + name + '"]');
        if (input && !input.value.trim()) {
          hasError = true;
          var parent = input.closest(".form-group, .premium-field");
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
        alert(l === "ar" ? "خطأ في النظام. حاول مرة أخرى." : l === "fr" ? "Erreur système. Réessayez." : "System error. Please try again.");
      }
    });
  }

  function syncFormLabelsFromYouCan() {
    var native = document.querySelector("#app #express-checkout-form") ||
      document.querySelector(".express-checkout-form-section form") ||
      document.querySelector("[data-pb-type='single-product'] form");
    var form = document.getElementById("custom-express-checkout-form");
    if (!native || !form) return;

    // YouCan's native fields are Arabic. Only mirror them when the page is Arabic;
    // otherwise keep the localized (e.g. French) placeholders from the i18n dictionary.
    if (langs[currentLangIndex] === "ar") {
    var nativeGroups = native.querySelectorAll(".form-group");
    for (var g = 0; g < nativeGroups.length; g++) {
      var group = nativeGroups[g];
      var label = group.querySelector(".form-label");
      var input = group.querySelector("input:not([type='hidden']), select, textarea");
      if (!input) continue;
      var name = input.getAttribute("name");
      if (!name) continue;
      var ours = form.querySelector('[name="' + name + '"]');
      if (!ours) continue;
      var labelText = label ? label.textContent.replace(/:\s*$/, "").trim() : "";
      var ph = input.getAttribute("placeholder") || labelText;
      if (ph) ours.setAttribute("placeholder", ph);
      var ourLabel = ours.closest(".premium-field, .form-group");
      if (ourLabel) {
        var lbl = ourLabel.querySelector(".field-label");
        if (lbl && labelText) lbl.textContent = labelText;
      }
    }
    }

    var nativeId = native.querySelector('input[name="id"]');
    var ourId = form.querySelector('input[name="id"]');
    if (nativeId && ourId && nativeId.value) ourId.value = nativeId.value;
  }

  function parsePriceNum(text) {
    if (!text) return null;
    var m = String(text).match(/[\d]+(?:[.,]\d+)?/);
    if (!m) return null;
    return parseFloat(m[0].replace(",", "."));
  }

  function syncPricesFromYouCan() {
    var nativeRoot = document.getElementById("app") || document.body;
    var priceText = "";
    var compareText = "";
    var selectors = [
      ".express-checkout-form-section .product-price",
      ".single-product-price",
      "[class*='product-price']",
      "[class*='ProductPrice']",
      ".price-current",
      ".final-price"
    ];
    for (var i = 0; i < selectors.length && !priceText; i++) {
      var el = nativeRoot.querySelector(selectors[i]);
      if (el && el.textContent.trim() && !el.closest("#v34-root")) priceText = el.textContent.trim();
    }
    if (!priceText) {
      var nodes = nativeRoot.querySelectorAll("h2, h3, span, div, p");
      for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].closest("#v34-root")) continue;
        var t = nodes[j].textContent.trim();
        if (t.length < 24 && /(\d[\d\s.,]*)\s*(درهم|MAD|د\.?\s*م)/i.test(t)) {
          priceText = t;
          break;
        }
      }
    }
    var compareSelectors = [".compare-price", ".was-price", ".old-price", "[class*='compare']", ".price-before"];
    for (var k = 0; k < compareSelectors.length; k++) {
      var cel = nativeRoot.querySelector(compareSelectors[k]);
      if (cel && cel.textContent.trim() && !cel.closest("#v34-root")) {
        compareText = cel.textContent.trim();
        break;
      }
    }

    var display = document.getElementById("display-price");
    var compareEl = document.getElementById("compare-price-display");
    var savingsEl = document.getElementById("savings-display");
    var finalPrice = document.querySelector(".final-display-price");
    var finalCompare = document.querySelector(".final-compare-price");
    var finalSavings = document.querySelector(".final-savings-tag");
    var stickyPrice = document.querySelector(".sticky-price span:last-child") ||
      document.querySelector(".sticky-price");

    if (priceText) {
      if (display) display.textContent = priceText;
      if (finalPrice) finalPrice.textContent = priceText;
      if (stickyPrice && stickyPrice.tagName === "SPAN") stickyPrice.textContent = priceText;
      else if (stickyPrice) {
        var spans = stickyPrice.querySelectorAll("span");
        if (spans.length > 1) spans[spans.length - 1].textContent = priceText;
      }
    }

    var cur = parsePriceNum(priceText);
    var cmp = parsePriceNum(compareText);
    var showCompare = cmp && cur && cmp > cur;
    var lang = langs[currentLangIndex];

    function setCompare(el, on, text) {
      if (!el) return;
      if (on) {
        el.textContent = text;
        el.hidden = false;
        el.classList.remove("is-hidden");
      } else {
        el.hidden = true;
        el.classList.add("is-hidden");
      }
    }
    function setSavings(el, on, saved, pct) {
      if (!el) return;
      if (on) {
        el.textContent = lang === "ar"
          ? "وفّرت " + saved + " درهم (" + pct + "%)"
          : lang === "fr"
            ? "Économie " + saved + " MAD (" + pct + "%)"
            : "You save " + saved + " MAD (" + pct + "%)";
        el.hidden = false;
        el.classList.remove("is-hidden");
      } else {
        el.hidden = true;
        el.classList.add("is-hidden");
      }
    }

    if (showCompare) {
      var saved = Math.round(cmp - cur);
      var pct = Math.round((saved / cmp) * 100);
      setCompare(compareEl, true, compareText);
      setCompare(finalCompare, true, compareText);
      setSavings(savingsEl, true, saved, pct);
      setSavings(finalSavings, true, saved, pct);
    } else {
      setCompare(compareEl, false);
      setCompare(finalCompare, false);
      setSavings(savingsEl, false);
      setSavings(finalSavings, false);
    }
  }


  function computeDeterministicStock() {
    var MIN = 9;
    var DROP_PER_DAY = 3;
    var CYCLE_DAYS = 10;
    var dayIndex = Math.floor(Date.now() / 86400000);
    var cycleIndex = Math.floor(dayIndex / CYCLE_DAYS);
    var dayInCycle = dayIndex - cycleIndex * CYCLE_DAYS;

    var seed = Math.sin(cycleIndex * 127.13 + 11.7) * 10000;
    var rnd = seed - Math.floor(seed);
    var startMax = 30 + Math.floor(rnd * 6);
    var n = startMax - dayInCycle * DROP_PER_DAY;
    return n < MIN ? MIN : n;
  }

  function initStockTicker() {
    window.__V34_STOCK_COUNT = computeDeterministicStock();
    updateStockLabels(window.__V34_STOCK_COUNT);
  }

  function initAnnounceMarquee() {
    var track = document.getElementById("announce-track");
    var marquee = track && track.parentNode;
    if (!track || !marquee) return;

    var SPEED_PX_PER_SEC = 22;
    // Phone marquee speed knob: MOBILE_REF_DURATION = seconds for one Arabic-width
    // loop (bigger = SLOWER). Speed is derived as a CONSTANT px/sec from a fixed
    // reference width, so the visual speed is the SAME in both languages (no toggle
    // slowdown) while you still tune a simple "seconds" number.
    var MOBILE_REF_WIDTH = 782;
    var MOBILE_REF_DURATION = 112;
    var lastViewportWidth = 0;

    function getUnitHtml() {
      var l = langs[currentLangIndex];
      var stockN = window.__V34_STOCK_COUNT || computeDeterministicStock();
      // Four evenly-spaced phrases (each its own .announce-msg = equal padding/gaps).
      var keys = ["announce_cod", "announce_ship", "announce_stock", "announce_order"];
      var sep = '<span class="announce-sep" aria-hidden="true"> · </span>';
      var html = "";
      for (var i = 0; i < keys.length; i++) {
        var txt = (I18N[keys[i]] && I18N[keys[i]][l]) ? I18N[keys[i]][l] : "";
        txt = txt.replace("{n}", String(stockN));
        var cls = keys[i] === "announce_stock" ? "announce-msg announce-stock" : "announce-msg";
        html += '<span class="' + cls + '">' + txt + "</span>" + sep;
      }
      return html;
    }

    function buildLayout() {
      track.classList.remove("is-ready");
      var vw = marquee.clientWidth || window.innerWidth || 360;
      lastViewportWidth = vw;
      var unitHtml = getUnitHtml();
      var group = document.createElement("div");
      group.className = "announce-group";
      group.innerHTML = unitHtml;
      track.innerHTML = "";
      track.appendChild(group);

      var guard = 0;
      while (group.scrollWidth < vw + 80 && guard < 40) {
        group.insertAdjacentHTML("beforeend", unitHtml);
        guard++;
      }

      var groupWidth = group.scrollWidth;
      var clone = group.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);

      var speed = vw <= 600 ? (MOBILE_REF_WIDTH / MOBILE_REF_DURATION) : SPEED_PX_PER_SEC;
      var duration = Math.max(48, Math.round(groupWidth / speed));
      track.style.setProperty("--announce-duration", duration + "s");
      void track.offsetWidth;
      track.classList.add("is-ready");
    }

    function scheduleBuildLayout() {
      requestAnimationFrame(function () {
        requestAnimationFrame(buildLayout);
      });
    }

    function initAnnounceLayout() {
      var run = function () { scheduleBuildLayout(); };
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () {
          run();
          setTimeout(run, 350);
        }).catch(run);
      } else {
        run();
        setTimeout(run, 350);
      }
    }

    function refreshAnnounceContent() {
      // Rebuild from scratch so a language switch re-renders all 4 phrases
      // (the spans are generated, not data-i18n-tagged).
      scheduleBuildLayout();
    }

    initAnnounceLayout();
    window.__V34_REBUILD_MARQUEE = scheduleBuildLayout;
    window.__V34_REFRESH_ANNOUNCE = refreshAnnounceContent;

    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var vw = marquee.clientWidth || window.innerWidth || 360;
        if (Math.abs(vw - lastViewportWidth) < 48) return;
        scheduleBuildLayout();
      }, 350);
    }, { passive: true });
  }

  function loadDeferredLangAssets(lang) {
    if (lang === DEFAULT_LANG) return;
    var imgs = document.querySelectorAll(".img-" + lang);
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].dataset.deferredSrc && !imgs[i].getAttribute("src")) {
        imgs[i].setAttribute("src", imgs[i].dataset.deferredSrc);
      }
    }
  }

  function initLazySections() {
    var sels = ["#trust-band", "#ba-section", "#benefits-section", "#why-section", "#coffret-section", ".reviews-section", "#faq-section"];
    for (var i = 0; i < sels.length; i++) {
      var el = document.querySelector(sels[i]);
      if (el) el.setAttribute("data-lazy-section", "");
    }
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) entries[j].target.classList.add("is-visible");
      }
    }, { rootMargin: "180px 0px" });
    var lazy = document.querySelectorAll("[data-lazy-section]");
    for (var k = 0; k < lazy.length; k++) obs.observe(lazy[k]);
  }

  function injectPageSeoMeta() {
    var desc = {
      ar: "Lure Her — عطر مغناطيسي كيدوم طول اليوم، مع 10ml هدية. الدفع عند الاستلام وتوصيل مجاني في المغرب بـ 189 درهم.",
      en: "Lure Her — a magnetic men's perfume that lasts all day, with a free 10ml gift. Cash on delivery, free shipping in Morocco for 189 DH.",
      fr: "Lure Her — un parfum magnétique pour homme qui tient toute la journée, avec 10ml offert. Paiement à la livraison, livraison gratuite au Maroc à 189 DH."
    };
    var l = langs[currentLangIndex];
    var content = desc[l] || desc.ar;
    var m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    if (!m.content || m.content === "test2" || m.content.length < 12) m.content = content;
  }

  function handleHashRoute() {
    var hash = window.location.hash || '#landing';
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

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", handleHashRoute);

  function init() {
    injectPageSeoMeta();
    applyLang(currentLangIndex);
    handleHashRoute();
    handleScroll();
    initLazySections();
    initStockTicker();
    initAnnounceMarquee();
    initHeroGallery();
    initStickyCta();
    initCustomCheckout();
    syncPricesFromYouCan();
    syncFormLabelsFromYouCan();
    setTimeout(syncPricesFromYouCan, 800);
    setTimeout(syncFormLabelsFromYouCan, 800);
    setTimeout(syncPricesFromYouCan, 2500);
    setTimeout(syncFormLabelsFromYouCan, 2500);
    initFaq();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
