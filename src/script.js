
(function () {
  "use strict";

  var I18N = {

    announce: {
      ar: "🚚 شحن مجاني إلى جميع أنحاء المغرب",
      en: "🚚 Free shipping anywhere in Morocco",
      fr: "🚚 Livraison gratuite partout au Maroc"
    },
    announce_stock: {
      ar: "بقي <strong>{n}</strong> فقط في المخزون",
      en: "Only <strong>{n}</strong> left in stock",
      fr: "Reste <strong>{n}</strong> en stock"
    },
    nav_shop: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },
    brand_sub: { ar: "PARFUM", en: "PARFUM", fr: "PARFUM" },

    home_hero_h: { ar: "Lure Her — حضورٌ لا يُنسى.", en: "Lure Her — an unforgettable presence.", fr: "Lure Her — une présence inoubliable." },
    home_hero_sub: { ar: "عطر فيرومونات فاخر للرجال. رائحة تدوم طول النهار وحضور يلفت الأنظار.", en: "Luxury pheromone perfume for men. All-day scent and a magnetic presence.", fr: "Parfum aux phéromones pour homme. Une tenue toute la journée et une présence magnétique." },
    home_cta: { ar: "اكتشف العطر", en: "Discover the scent", fr: "Découvrir le parfum" },

    hero_badge: { ar: "🎁 عطر إضافي هدية مع كل طلب", en: "🎁 A free bonus perfume with every order", fr: "🎁 Un parfum offert avec chaque commande" },

    land_hero_h: {
      ar: "إثارة حقيقية مع عطر جذّاب غاية في الجاذبية.",
      en: "Real attraction — an irresistibly magnetic scent.",
      fr: "Une attraction réelle — un parfum irrésistiblement magnétique."
    },
    land_hero_sub: {
      ar: "Lure Her عطر فيرومونات أصلي للرجال يدوم طول اليوم. وتتوصل بعطر راقي إضافي هدية مع كل طلب. الدفع عند الاستلام، توصيل مجاني لكل مدن المغرب، وتقدر تشوف المنتج وتشمّو قبل ما تخلّص.",
      en: "Lure Her is an authentic pheromone perfume for men that lasts all day — plus a premium bonus perfume free with every order. Cash on delivery, free shipping across Morocco, inspect before you pay.",
      fr: "Lure Her, un parfum authentique aux phéromones pour homme qui tient toute la journée — avec un parfum premium offert à chaque commande. Paiement à la livraison, livraison gratuite au Maroc, vérifiez avant de payer."
    },

    trust_lasting: { ar: "يدوم طول اليوم", en: "Lasts all day", fr: "Tient toute la journée" },
    trust_ship: { ar: "توصيل مجاني", en: "Free shipping", fr: "Livraison gratuite" },
    trust_cod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", fr: "Paiement à la livraison" },

    gift_note: { ar: "🎁 + عطر راقي هدية مع كل طلب", en: "🎁 + a premium perfume free with every order", fr: "🎁 + un parfum premium offert" },
    savings_tag: { ar: "وفّرت 61 درهم", en: "You save 61 MAD", fr: "Économie 61 MAD" },

    notes_eyebrow: { ar: "هرم الروائح", en: "Scent pyramid", fr: "Pyramide olfactive" },
    notes_h: { ar: "رائحة تتطوّر معك طول اليوم", en: "A scent that evolves with you all day", fr: "Un sillage qui évolue toute la journée" },
    notes_sub: {
      ar: "ثلاث طبقات من العطر تتكشّف الواحدة بعد الأخرى — من أول رشّة حتى آخر المساء.",
      en: "Three layers of scent unfold one after another — from the first spray to late evening.",
      fr: "Trois couches qui se révèlent l'une après l'autre — de la première vaporisation jusqu'au soir."
    },
    note_top_h: { ar: "المقدّمة", en: "Top note", fr: "Note de tête" },
    note_top_p: { ar: "برغموت وحمضيات منعشة — انطباع أول جريء يلفت الانتباه فوراً.", en: "Bergamot and fresh citrus — a bold first impression that grabs attention instantly.", fr: "Bergamote et agrumes frais — une première impression audacieuse." },
    note_heart_h: { ar: "القلب", en: "Heart note", fr: "Note de cœur" },
    note_heart_p: { ar: "توابل دافئة ولافندر — قلب رجولي أنيق يدوم لساعات.", en: "Warm spices and lavender — an elegant masculine heart that lasts for hours.", fr: "Épices chaudes et lavande — un cœur masculin élégant qui dure." },
    note_base_h: { ar: "القاعدة", en: "Base note", fr: "Note de fond" },
    note_base_p: { ar: "عود، مسك وعنبر — أثر عميق ودافئ يبقى عالق في الذاكرة.", en: "Oud, musk and amber — a deep, warm trail that stays in memory.", fr: "Oud, musc et ambre — un sillage profond et mémorable." },

    ben_eyebrow: { ar: "خصائص المنتج", en: "Product features", fr: "Caractéristiques" },
    land_benefits_h: { ar: "خصائص المنتج", en: "Product features", fr: "Caractéristiques du produit" },
    ben_1: { ar: "عطر غير قابل للمقاومة", en: "An irresistible scent", fr: "Un parfum irrésistible" },
    ben_2: { ar: "يحقق ثقة خيالية بالنفس", en: "Boosts your confidence like never before", fr: "Une confiance en soi incroyable" },
    ben_3: { ar: "رائحة رجولية ومنعشة وجميلة", en: "A masculine, fresh and beautiful scent", fr: "Une senteur masculine, fraîche et élégante" },
    ben_4: { ar: "يحقق مفعولاً خيالياً عند العناق", en: "An unforgettable effect up close", fr: "Un effet inoubliable de près" },
    ben_5: { ar: "مركّب من زيوت أصلية طبيعية", en: "Made from authentic natural oils", fr: "Composé d'huiles naturelles authentiques" },
    ben_6: { ar: "يدوم طول اليوم", en: "Lasts all day long", fr: "Tient toute la journée" },

    why_eyebrow: { ar: "احذر التقليد", en: "Beware of fakes", fr: "Méfiez-vous des imitations" },
    why_title: { ar: "عطر Lure Her الأصلي", en: "The authentic Lure Her", fr: "Le véritable Lure Her" },
    land_feat1_h: { ar: "منتج أصلي 100%", en: "100% authentic", fr: "100% authentique" },
    land_feat1_p: {
      ar: "نوفّر لكم عطر Lure Her الأصلي وتتوصلون بالخط العطري الأصلي. احذروا المنتجات الرخيصة المقلّدة — الجودة كتبان من أول رشّة.",
      en: "We supply the authentic Lure Her fragrance line. Beware of cheap imitations — you'll feel the quality from the first spray.",
      fr: "Nous fournissons la ligne authentique Lure Her. Méfiez-vous des imitations bon marché — la qualité se sent dès la première vaporisation."
    },
    land_feat2_h: { ar: "هدية مع كل طلب", en: "A gift with every order", fr: "Un cadeau à chaque commande" },
    land_feat2_p: {
      ar: "مع كل طلب كتوصلك هدية: عطر راقي إضافي مجاناً — قيمة حقيقية فثمن واحد.",
      en: "Every order comes with a free premium bonus perfume — real value in one purchase.",
      fr: "Chaque commande inclut un parfum premium offert — une vraie valeur en un seul achat."
    },

    rev_eyebrow: { ar: "آراء حقيقية", en: "Real reviews", fr: "Avis vérifiés" },
    rev_title: { ar: "آراء العملاء", en: "Customer Reviews", fr: "Avis clients" },
    rev_sub: {
      ar: "+2,000 طلبية وصلات للمغرب — هادو شي تعليقات من زبنائنا",
      en: "+2,000 orders delivered in Morocco — here are some of our customers' reviews",
      fr: "+2 000 commandes livrées au Maroc — voici quelques avis de nos clients"
    },
    rev_rating_label: { ar: "معدل التقييم", en: "Average rating", fr: "Note moyenne" },
    rev_verified: { ar: "طلبية مؤكدة", en: "Verified order", fr: "Commande vérifiée" },
    rev1_name: { ar: "ياسين .م", en: "Yassine .M", fr: "Yassine .M" },
    rev1_city: { ar: "الدار البيضاء", en: "Casablanca", fr: "Casablanca" },
    rev1_text: {
      ar: "رائحة قوية وراقية، وأهم حاجة كتبقى. من أول مرة لبستو، الناس بداو يسولوني على شنو العطر اللي حاطط. صراحة فاق توقعاتي.",
      en: "Strong, classy scent and most importantly it lasts. The first time I wore it people started asking what perfume I had on. Honestly exceeded my expectations.",
      fr: "Senteur forte et raffinée, et surtout elle tient. Dès la première fois, on m'a demandé quel parfum je portais. Franchement au-dessus de mes attentes."
    },
    rev2_name: { ar: "أنس .ب", en: "Anas .B", fr: "Anas .B" },
    rev2_city: { ar: "الرباط", en: "Rabat", fr: "Rabat" },
    rev2_text: {
      ar: "كنقلّب على عطر يدوم وما كنلقاش. هاد المرة لقيت اللي بغيت — كنحطّو الصباح وكيبقى حتى الليل. الثبات ديالو ماشي طبيعي.",
      en: "I'd been searching for a scent that lasts. This time I found it — I put it on in the morning and it stays till night. The longevity is unreal.",
      fr: "Je cherchais un parfum qui tient. Cette fois j'ai trouvé — je le mets le matin et il reste jusqu'au soir. Une tenue incroyable."
    },
    rev3_name: { ar: "مهدي .أ", en: "Mehdi .A", fr: "Mehdi .A" },
    rev3_city: { ar: "طنجة", en: "Tangier", fr: "Tanger" },
    rev3_text: {
      ar: "التغليف فاخر والعطر أصلي. خلّصت عند الاستلام بلا أي مشكل، والتوصيل كان سريع. وزادو عطيوني عطر هدية!",
      en: "Luxury packaging and the perfume is authentic. Paid on delivery with no issues, fast shipping — and they even included a free gift perfume!",
      fr: "Emballage luxueux et parfum authentique. Payé à la livraison sans souci, livraison rapide — et un parfum offert en cadeau !"
    },
    rev4_name: { ar: "رضا .ح", en: "Reda .H", fr: "Reda .H" },
    rev4_city: { ar: "مراكش", en: "Marrakech", fr: "Marrakech" },
    rev4_text: {
      ar: "عطر رجولي بمعنى الكلمة، دافي وجذّاب. مراتي عجبها بزّاف. واحد من أحسن العطور اللي جربت وبثمن معقول.",
      en: "A truly masculine scent, warm and attractive. My wife loved it. One of the best perfumes I've tried, and at a fair price.",
      fr: "Un parfum vraiment masculin, chaud et séduisant. Ma femme a adoré. L'un des meilleurs que j'aie essayés, à un prix juste."
    },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_address: { ar: "العنوان", en: "Address", fr: "Adresse" },
    form_name_ph: { ar: "اسم", en: "Your name", fr: "Votre nom" },
    form_phone_ph: { ar: "06XX XXX XXX", en: "06XX XXX XXX", fr: "06XX XXX XXX" },
    form_city_ph: { ar: "مدينة", en: "City", fr: "Ville" },
    form_address_ph: { ar: "العنوان", en: "Address", fr: "Adresse" },
    form_secure: { ar: "معلوماتك آمنة ومحمية", en: "Your information is safe and secure", fr: "Vos informations sont sécurisées" },
    submit_order: { ar: "أكد الطلب", en: "Confirm order", fr: "Confirmer" },

    ct_ship: { ar: "توصيل مجاني و سريع", en: "Free & fast delivery", fr: "Livraison gratuite et rapide" },
    ct_guarantee: { ar: "منتج أصلي 100%", en: "100% authentic", fr: "100% authentique" },

    sticky_name: { ar: "Lure Her", en: "Lure Her", fr: "Lure Her" },
    sticky_price: { ar: "189 درهم", en: "189 MAD", fr: "189 MAD" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    faq_eyebrow: { ar: "أسئلة شائعة", en: "FAQ", fr: "FAQ" },
    faq_title: { ar: "كل ما خصك تعرف قبل الطلب", en: "Everything you need to know before ordering", fr: "Tout savoir avant de commander" },
    faq_cta: { ar: "صيفط طلبيتك دابا", en: "Order now", fr: "Commander" },
    faq_q1: { ar: "شحال كيدوم العطر؟", en: "How long does it last?", fr: "Combien de temps tient-il ?" },
    faq_a1: {
      ar: "Lure Her كيدوم طول اليوم فالبشرة، وكيبقى عالق فالحوايج حتى لأكثر. حط رشّة على نقاط النبض (الرقبة، المعصم) باش يدوم أكثر.",
      en: "Lure Her lasts all day on the skin and even longer on clothes. Spray on pulse points (neck, wrist) for maximum longevity.",
      fr: "Lure Her tient toute la journée sur la peau, et encore plus sur les vêtements. Vaporisez sur les points de pulsation (cou, poignet) pour une meilleure tenue."
    },
    faq_q2: { ar: "شنو هي الفيرومونات وكيفاش كتخدم؟", en: "What are pheromones and how do they work?", fr: "Que sont les phéromones et comment agissent-elles ?" },
    faq_a2: {
      ar: "الفيرومونات هي جزيئات كتزيد الجاذبية والحضور. فالعطر، كتعطي إحساس بالثقة وكتخلّي حضورك ألفت للانتباه بطريقة طبيعية وأنيقة.",
      en: "Pheromones are molecules that enhance attraction and presence. In the perfume they boost confidence and make your presence naturally magnetic.",
      fr: "Les phéromones sont des molécules qui renforcent l'attraction et la présence. Dans le parfum, elles boostent la confiance et rendent votre présence naturellement magnétique."
    },
    faq_q3: { ar: "واش هو خاص بالرجال؟", en: "Is it for men?", fr: "Est-il pour homme ?" },
    faq_a3: {
      ar: "نعم، Lure Her مصمّم خصيصاً للرجال — رائحة دافئة وجريئة بطابع رجولي راقٍ مناسب للنهار والليل وكل المناسبات.",
      en: "Yes, Lure Her is made specifically for men — a warm, bold scent with a refined masculine character for day, night and every occasion.",
      fr: "Oui, Lure Her est conçu pour homme — une senteur chaude et audacieuse au caractère masculin raffiné, pour le jour, le soir et toutes les occasions."
    },
    faq_q4: { ar: "واش المنتج أصلي؟", en: "Is the product authentic?", fr: "Le produit est-il authentique ?" },
    faq_a4: {
      ar: "100% أصلي. كيوصلك فالتغليف الأصلي المختوم، وكتقدر تتأكد منو وتشمّو قبل ما تخلّص — الدفع كيكون عند الاستلام. احذر المنتجات الرخيصة المقلّدة.",
      en: "100% authentic. It arrives in sealed original packaging, and you can check and smell it before you pay — cash on delivery. Beware of cheap imitations.",
      fr: "100% authentique. Il arrive dans son emballage d'origine scellé, et vous pouvez le vérifier et le sentir avant de payer — paiement à la livraison. Méfiez-vous des imitations."
    },
    faq_q5: { ar: "شحال وقت التوصيل وكيفاش كنخلص؟", en: "What is delivery time & payment?", fr: "Délai de livraison & paiement ?" },
    faq_a5: {
      ar: "التوصيل فابور وسريع لجميع مدن المغرب (من 24 لـ 48 ساعة). الدفع كيكون عند الاستلام (COD)، يعني كتخلص حتى كتوصلك الطلبية ليديك وتأكد منها.",
      en: "Free and fast delivery across Morocco (24 to 48 hours). Payment is cash on delivery (COD) — you only pay when you receive and check your order.",
      fr: "Livraison gratuite et rapide partout au Maroc (24 à 48h). Paiement en espèces à la livraison (COD) — vous ne payez qu'après vérification."
    },
    faq_q6: { ar: "شنو هي سياسة الإرجاع؟", en: "What is the return policy?", fr: "Quelle est la politique de retour ?" },
    faq_a6: {
      ar: "تقدر تشوف وتشمّ العطر قبل ما تخلّص، وإيلا ما عجبكش تقدر ترفضو. وإيلا وصلك مخسور أو مقلّد، تواصل معانا خلال 48 ساعة مع صورة المنتج وكنحلّو ليك المشكل.",
      en: "You can see and smell the perfume before paying, and refuse it if you don't like it. If it arrives damaged or fake, contact us within 48 hours with a photo and we'll resolve it.",
      fr: "Vous pouvez voir et sentir le parfum avant de payer, et le refuser s'il ne vous plaît pas. S'il arrive endommagé ou contrefait, contactez-nous sous 48h avec une photo et nous réglerons le problème."
    }
  };

  var langs = ["ar", "fr"];
  var DEFAULT_LANG = "ar";
  var LANG_LABELS = { fr: "Français", ar: "العربية" };

  function resolveInitialLang() {
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
      ar: "Lure Her — عطر الفيرومونات للرجال",
      en: "Lure Her — Pheromone Perfume for Men",
      fr: "Lure Her — Parfum aux phéromones pour homme"
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

  var HERO_ASSET_VERSION = 1;
  var HERO_MANIFEST_URL =
    "https://raw.githubusercontent.com/chafiyounes/lurher-lp/main/images/hero/manifest.json?v=" +
    HERO_ASSET_VERSION;

  var HERO_MANIFEST_FALLBACK = {
    baseUrl: "https://raw.githubusercontent.com/chafiyounes/lurher-lp/main/images/hero/",
    slides: [
      {
        id: "main",
        image: "01-main.png",
        thumb: "01-main.png",
        alt: { ar: "عطر Lure Her الأصلي للرجال", en: "Lure Her authentic men's perfume", fr: "Lure Her, parfum authentique pour homme" }
      },
      {
        id: "lifestyle",
        image: "02-lifestyle.png",
        thumb: "02-lifestyle.png",
        alt: { ar: "حضور وجاذبية مع Lure Her", en: "Presence and attraction with Lure Her", fr: "Présence et attraction avec Lure Her" }
      },
      {
        id: "product",
        image: "03-product.png",
        thumb: "03-product.png",
        alt: { ar: "العطر مع علبته الفاخرة", en: "The perfume with its luxury box", fr: "Le parfum avec son coffret de luxe" }
      },
      {
        id: "gift",
        image: "04-gift.png",
        thumb: "04-gift.png",
        alt: { ar: "عطر إضافي هدية مع كل طلب", en: "Free bonus perfume with every order", fr: "Parfum offert avec chaque commande" }
      }
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

    var SPEED_PX_PER_SEC = 11;
    var lastViewportWidth = 0;

    function getUnitHtml() {
      var l = langs[currentLangIndex];
      var announce = (I18N.announce && I18N.announce[l]) ? I18N.announce[l] : "";
      var stockTpl = (I18N.announce_stock && I18N.announce_stock[l]) ? I18N.announce_stock[l] : "";
      var stockN = window.__V34_STOCK_COUNT || computeDeterministicStock();
      var stockHtml = stockTpl.replace("{n}", String(stockN));
      return (
        '<span class="announce-msg" data-i18n="announce">' + announce + "</span>" +
        '<span class="announce-sep" aria-hidden="true"> · </span>' +
        '<span class="announce-msg announce-stock">' + stockHtml + "</span>" +
        '<span class="announce-sep" aria-hidden="true"> · </span>'
      );
    }

    function buildLayout() {
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

      var duration = Math.max(96, Math.round(groupWidth / SPEED_PX_PER_SEC));
      track.style.setProperty("--announce-duration", duration + "s");
      track.classList.add("is-ready");
    }

    function refreshAnnounceContent() {
      if (!track.querySelector(".announce-group")) {
        buildLayout();
        return;
      }
      localize(track, langs[currentLangIndex]);
      updateStockLabels(window.__V34_STOCK_COUNT || computeDeterministicStock());
    }

    buildLayout();
    window.__V34_REBUILD_MARQUEE = buildLayout;
    window.__V34_REFRESH_ANNOUNCE = refreshAnnounceContent;

    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var vw = marquee.clientWidth || window.innerWidth || 360;
        if (Math.abs(vw - lastViewportWidth) < 48) return;
        buildLayout();
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
    var sels = ["#ba-section", "#benefits-section", "#why-section", ".reviews-section", "#faq-section"];
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
      ar: "Lure Her عطر فيرومونات أصلي للرجال يدوم طول اليوم — جاذبية وثقة، مع عطر هدية. الدفع عند الاستلام وتوصيل مجاني في المغرب.",
      en: "Lure Her — authentic pheromone perfume for men that lasts all day, with a free bonus perfume. Cash on delivery, free shipping in Morocco.",
      fr: "Lure Her — parfum authentique aux phéromones pour homme, tenue toute la journée, avec un parfum offert. Paiement à la livraison, livraison gratuite au Maroc."
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
