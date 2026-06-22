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
      ar: "🚚 شحن مجاني إلى جميع أنحاء المغرب",
      en: "🚚 Free shipping anywhere in Morocco",
      fr: "🚚 Livraison gratuite partout au Maroc"
    },
    announce_stock: {
      ar: "بقي <strong>{n}</strong> فقط في المخزون",
      en: "Only <strong>{n}</strong> left in stock",
      fr: "Plus que <strong>{n}</strong> en stock"
    },
    nav_shop: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    /* Hero extras */
    hero_badge: { ar: "🏆 الأكثر مبيعاً في المغرب", en: "🏆 Best Seller in Morocco", fr: "🏆 Meilleure vente au Maroc" },
    hero_proof: { ar: "+2,000 طلبية سلمات فالمغرب", en: "+2,000 orders delivered in Morocco", fr: "+2 000 commandes livrées au Maroc" },
    hero_cod:   { ar: "✓ الدفع عند الاستلام   ·   ✓ توصيل مجاني", en: "✓ Cash on Delivery   ·   ✓ Free Shipping", fr: "✓ Paiement à la livraison   ·   ✓ Livraison gratuite" },
    hero_cod_cod: { ar: "بلا خلاص مسبق", en: "No upfront payment", fr: "Sans paiement d'avance" },
    hero_cod_ship: { ar: "توصيل مجاني", en: "Free shipping", fr: "Livraison gratuite" },
    trust_safe: { ar: "آمن على المينا", en: "Enamel-safe", fr: "Sans danger pour l'émail" },

    /* ─── LANDING PAGE ─── */
    land_hero_h: { 
      ar: "تعبتي من الصفر فالأسنان؟ V34 كتبيّضهم فـ30 دقيقة — بلا ألم.", 
      en: "Tired of yellow teeth in every photo? V34 whitens visibly in 30 minutes — zero pain.",
      fr: "Marre des dents jaunes sur chaque photo ? V34 blanchit visiblement en 30 minutes — sans douleur."
    },
    land_hero_sub: {
      ar: "نفس النتيجة اللي كتخلّص المئات فعيادات التبييض — ولكن من دارك. 14 استعمال فالعلبة، توصيل مجاني لجميع مدن المغرب، وضمان استرجاع الفلوس.",
      en: "The same results people pay hundreds for at clinics — but at home. 14 uses per box, free delivery across Morocco, money-back guarantee.",
      fr: "Le même résultat qu'en clinique — chez vous. 14 utilisations par boîte, livraison gratuite au Maroc, satisfait ou remboursé."
    },
    land_hero_sub_short: {
      ar: "شرائط تبييض من Hismile — بلا بيروكسيد، آمنة على المينا والسنان الحساسة. الدفع عند الاستلام.",
      en: "Hismile whitening strips — peroxide-free, enamel-safe, even for sensitive teeth. Pay on delivery.",
      fr: "Bandes Hismile — sans peroxyde, sans danger pour l'émail ni les dents sensibles. Paiement à la livraison."
    },
    land_hero_cta: { ar: "صيفط طلبيتك دابا — 245 درهم", en: "Order now — 245 MAD", fr: "Commander — 245 MAD" },
    
    trust_guarantee: { ar: "ضمان استرجاع الفلوس", en: "Money-back guarantee", fr: "Garantie de remboursement" },
    trust_ship: { ar: "توصيل لجميع المدن", en: "Delivery to all cities", fr: "Livraison partout" },
    trust_cod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", fr: "Paiement à la livraison" },

    why_title: { ar: "التكنولوجيا", en: "Technology", fr: "Technologie" },
    land_feat1_h: { ar: "يبيّض الأسنان الصفراء فوراً", en: "Instantly Brightens Yellow Teeth", fr: "Éclaircit instantanément les dents jaunes" },
    land_feat2_h: { ar: "آمن حتى للأسنان الحساسة", en: "Safe Even for Sensitive Teeth", fr: "Sûr même pour les dents sensibles" },
    triptych_before: { ar: "قبل", en: "Before", fr: "Avant" },
    triptych_apply: { ar: "أثناء الاستعمال", en: "During use", fr: "Pendant l'application" },
    triptych_after: { ar: "بعد", en: "After", fr: "Après" },
    v34_disclaimer: {
      ar: "*النتائج كتختلف من شخص لآخر. اتبع التعليمات على العلبة باش تجيب أحسن نتيجة. الصور للتوضيح فقط.",
      en: "*Results vary by person. Follow the box instructions for best results. Images are illustrative only.",
      fr: "*Les résultats varient. Suivez les instructions de la boîte. Images à titre illustratif."
    },

    land_benefits_h: { ar: "ما الذي ستحصل عليه", en: "What you will gain", fr: "Ce que vous obtenez" },
    ben_1: { ar: "أسنان أكثر بياضاً بشكل ملحوظ من أول استعمال", en: "Visibly whiter teeth from the very first use", fr: "Des dents visiblement plus blanches dès la première utilisation" },
    ben_2: { ar: "نتيجة في 30 دقيقة وليس بعد أسابيع", en: "Results in 30 minutes — not weeks", fr: "Résultat en 30 minutes — pas en plusieurs semaines" },
    ben_3: { ar: "آمن تماماً — بلا ألم وبلا حساسية", en: "Completely safe — no pain, no sensitivity", fr: "Totalement sûr — sans douleur, sans sensibilité" },
    ben_4: { ar: "سهل الاستعمال: ضع، انتظر 30 دقيقة، ثم أزل", en: "Easy: apply, wait 30 minutes, peel off", fr: "Facile : posez, attendez 30 minutes, retirez" },
    ben_5: { ar: "14 استعمالاً في كل علبة", en: "14 uses in every box", fr: "14 utilisations dans chaque boîte" },
    ben_6: { ar: "ضمان استرجاع المال — إذا لم يعجبك، نُعيد لك أموالك", en: "Money-back guarantee — don't love it? Full refund", fr: "Satisfait ou remboursé — si ça ne vous plaît pas, on vous rembourse" },

    proof_10m: { ar: "منتج V34 تباع حول العالم", en: "V34 products sold worldwide", fr: "Produits V34 vendus dans le monde" },
    proof_96_lead: { ar: "في دراسة سريرية*", en: "In a clinical study*", fr: "Dans une étude clinique*" },
    proof_96_sub: { ar: "من المشاركين لاحظوا درجتين أفتح أو أكثر", en: "of participants had 2+ shades whiter teeth", fr: "des participants ont eu 2 nuances ou plus" },
    proof_96_foot: { ar: "*النتائج الفردية كتختلف", en: "*Individual results may vary", fr: "*Les résultats individuels peuvent varier" },
    proof_one_use: {
      ar: "أسنان أبيض ملحوظ من <strong>أول استعمال*</strong>",
      en: "Whiter teeth after <strong>just one use*</strong>",
      fr: "Dents plus blanches dès la <strong>première utilisation*</strong>"
    },
    proof_guarantee: { ar: "ضمان استرجاع الفلوس", en: "Money back guarantee", fr: "Garantie satisfait ou remboursé" },
    proof_guarantee_sub: { ar: "إلا ما عجبكش — نرجعو ليك فلوسك", en: "Not satisfied? Get your money back", fr: "Pas satisfait ? Remboursement" },
    proof_morocco: { ar: "طلبية وصلات للمغرب", en: "orders delivered in Morocco", fr: "commandes livrées au Maroc" },
    proof_results_cap: { ar: "نتائج حقيقية من زبنائنا", en: "Real results from our customers", fr: "Résultats réels de nos clients" },

    land_ba_h: {
      ar: "يُمكنك أن تدفع آلاف الدراهم عند الأطباء، أو أن تحصل على منتجٍ مؤكَّد ومضمون من منزلك.",
      en: "You can pay thousands at clinics — or get a proven, guaranteed product from home.",
      fr: "Vous pouvez payer des milliers chez le dentiste — ou obtenir un produit éprouvé et garanti chez vous."
    },
    land_ba_hint: { ar: "← اسحب لكشف النتيجة →", en: "← Drag to reveal →", fr: "← Glissez pour révéler →" },
    ba_before: { ar: "قبل", en: "BEFORE", fr: "AVANT" },
    ba_after: { ar: "بعد", en: "AFTER", fr: "APRÈS" },
    land_checkout_h: {
      ar: "أكمل طلبك الآن",
      en: "Complete your order now",
      fr: "Complétez votre commande"
    },
    checkout_eyebrow: { ar: "اطلب دابا", en: "Order now", fr: "Commandez" },
    why_eyebrow: { ar: "التكنولوجيا", en: "The technology", fr: "La technologie" },
    ben_eyebrow: { ar: "الفوائد", en: "Benefits", fr: "Avantages" },
    ba_eyebrow: { ar: "نتائج حقيقية", en: "Real results", fr: "Résultats réels" },

    rev_title: { ar: "آراء العملاء", en: "Customer Reviews", fr: "Avis clients" },
    rev_eyebrow: { ar: "آراء حقيقية", en: "Real reviews", fr: "Avis vérifiés" },
    rev_sub: {
      ar: "+2,000 طلبية وصلات للمغرب — هادو شي تعليقات من زبنائنا",
      en: "+2,000 orders delivered in Morocco — here are some of our customers' reviews",
      fr: "+2 000 commandes livrées au Maroc — voici quelques avis de nos clients"
    },
    rev_rating_label: { ar: "معدل التقييم", en: "Average rating", fr: "Note moyenne" },
    rev_verified: { ar: "طلبية مؤكدة", en: "Verified order", fr: "Commande vérifiée" },
    rev_tap_img: { ar: "اضغط لمشاهدة الصور بوضوح", en: "Tap to view photos clearly", fr: "Appuyez pour voir les photos" },
    rev_instructions_note: {
      ar: "نصيحة مهمة: اتبع التعليمات مزيان — نشّف سنانك بالمنشفة الورقية، حط الشرائط، خليهم من 30 دقيقة لساعة (ما كاينش حساسية)، وفرك عادي من بعد. هاد الصور ديال زبناء تبعو نفس الخطوات.",
      en: "The secret: follow the instructions exactly — dry teeth with a paper towel, apply strips, leave 30 minutes to 1 hour (no sensitivity), then brush normally. These photos are from customers who followed the steps properly.",
      fr: "Le secret : suivez les instructions à la lettre — séchez avec un essuie, appliquez les bandes, laissez 30 min à 1 h (sans sensibilité), puis brossez normalement."
    },
    rev1_name: { ar: "سناء .م", en: "Sanaa .M", fr: "Sanaa .M" },
    rev1_city: { ar: "الدار البيضاء", en: "Casablanca", fr: "Casablanca" },
    rev1_text: {
      ar: "منين بديت كنشّف سناني بالورقة وكنطبّق التعليمات كيف ما كاينين، الفرق ولى واضح: قبل، أثناء، وبعد. خليت الشرائط ساعة وما حسّيت بأي ألم.",
      en: "Once I started drying my teeth with a paper towel and following the instructions exactly, the difference was clear — before, during, and after. I left them on for an hour with zero pain.",
      fr: "Une fois que j'ai séché mes dents avec un essuie et suivi les instructions à la lettre, la différence était claire — avant, pendant et après. Une heure sans aucune douleur."
    },
    rev2_name: { ar: "ياسين .ب", en: "Yassine .B", fr: "Yassine .B" },
    rev2_city: { ar: "الرباط", en: "Rabat", fr: "Rabat" },
    rev2_text: {
      ar: "أول مرة ما تبعتش التعليمات وما بان حتى فرق. الثانية نشّفت سناني مزيان، لصقت الشرائط مزيان، خليتها 45 دقيقة وفركت من بعد — النتيجة باينة فالصور.",
      en: "First time I didn't follow the instructions — nothing happened. Second time I dried properly, applied with the plastic strip, waited 45 minutes, brushed after — the photos speak for themselves.",
      fr: "La première fois sans suivre les instructions — rien. La deuxième fois : séchage, application, 45 minutes, brossage après — les photos parlent d'elles-mêmes."
    },
    rev3_name: { ar: "مريم .أ", en: "Meryem .A", fr: "Meryem .A" },
    rev3_city: { ar: "طنجة", en: "Tangier", fr: "Tanger" },
    rev3_text: {
      ar: "عندي سنان حساسة وكنت خايفة نجرب. ولكن بلا بيروكسيد، ما حسّيت بحتى حساسية. من أول أسبوع بدا الفرق يبان، وبعد 14 استعمال سناني أفتح بكثير. توصيتها لـ3 صاحبات وكلهم راضيين.",
      en: "I have sensitive teeth and was nervous to try. But no peroxide means zero sensitivity. After the first week I started seeing a difference — and after 14 uses my teeth were noticeably brighter. Recommended it to 3 friends, all happy.",
      fr: "Dents sensibles, j'hésitais. Mais sans peroxyde, aucune sensibilité ressentie. Dès la première semaine la différence se voyait. Après 14 utilisations mes dents sont bien plus claires. Recommandé à 3 amies, toutes satisfaites."
    },
    rev4_name: { ar: "أمين .ر", en: "Amine .R", fr: "Amine .R" },
    rev4_city: { ar: "مراكش", en: "Marrakech", fr: "Marrakech" },
    rev4_text: {
      ar: "المنتج وصل بالتغليف الأصلي مافيه أي خدش. العلبة فيها 14 شريط — كافيين لشهر كامل. الفرق فسناني بان واضح والناس بدات تلاحظ. صورة المنتج صادقة 100%.",
      en: "Product arrived in perfect original packaging. The box has 14 strips — enough for a full month. The difference in my teeth was obvious and people started to notice. The product photos are 100% accurate.",
      fr: "Produit reçu dans son emballage d'origine impeccable. La boîte contient 14 bandes — suffisant pour un mois entier. La différence était visible et mon entourage l'a remarqué. Les photos du produit sont fidèles à la réalité."
    },
    land_order_h: { ar: "كل يوم كتأجّل، هو يوم بأسنان أقل بياضًا.", en: "Every day you delay is a day with less white teeth.", fr: "Chaque jour de retard est un jour avec des dents moins blanches." },
    land_order_sub: { ar: "الدفع عند الاستلام، بلا خلاص مسبق. التوصيل لجميع مدن المغرب.", en: "Cash on Delivery, no upfront payment. Delivery to all Moroccan cities.", fr: "Paiement à la livraison, aucun paiement d'avance. Livraison dans tout le Maroc." },
    final_cta_sub: {
      ar: "ضمان استرجاع الفلوس — آخر فرصة على هاد الثمن.",
      en: "Money-back guarantee — last chance at this price.",
      fr: "Garantie satisfait ou remboursé — dernière chance à ce prix."
    },
    land_price:   { ar: "245 درهم", en: "245 MAD", fr: "245 MAD" },
        savings_tag:  { ar: "وفّرت 105 درهم (30%)", en: "You save 105 MAD (30%)", fr: "Vous économisez 105 MAD (30%)" },
    checkout_badge: { ar: "عرض محدود", en: "Limited Offer", fr: "Offre Limitée" },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_name_ph: { ar: "اسم", en: "Your name", fr: "Votre nom" },
    form_phone_ph: { ar: "06XX XXX XXX", en: "06XX XXX XXX", fr: "06XX XXX XXX" },
    form_city_ph: { ar: "المدينة", en: "City", fr: "Ville" },
    form_address: { ar: "العنوان", en: "Address", fr: "Adresse" },
    form_address_ph: { ar: "العنوان", en: "Address", fr: "Adresse" },
    form_title: {
      ar: "أكمل طلبيتك دابا",
      en: "Complete your order",
      fr: "Complétez votre commande"
    },
    form_subtitle: {
      ar: "ملي تضغط 'أكد الطلب'، غادي يتواصل معك أحد دفرقة ديالنا باش يأكد التوصيل.",
      en: "Once you click 'Confirm Order', our team will contact you to confirm delivery.",
      fr: "Une fois que vous cliquez sur 'Confirmer', notre équipe vous contactera pour confirmer la livraison."
    },
    form_secure: { ar: "معلوماتك آمنة ومحمية", en: "Your information is safe and secure", fr: "Vos informations sont sécurisées" },
    submit_order: {
      ar: "أكد الطلب",
      en: "Confirm order",
      fr: "Confirmer"
    },
    submit_order_long: {
      ar: "أكد الطلب — الدفع عند الاستلام",
      en: "Confirm — cash on delivery",
      fr: "Confirmer — paiement à la livraison"
    },

    ct_ship: { ar: "توصيل سريع", en: "Fast Shipping", fr: "Livraison Rapide" },
    ct_ship_sub: { ar: "مجاني وسريع (24–48 ساعة)", en: "Free and fast (24–48h)", fr: "Gratuit et rapide (24–48h)" },
    trust_cod_sub: { ar: "تحقق من المنتج ثم ادفع", en: "Check your product, then pay", fr: "Vérifiez avant de payer" },
    ct_guarantee: { ar: "ضمان استرجاع الأموال", en: "Money-back guarantee", fr: "Garantie de remboursement" },
    ct_guarantee_sub: {
      ar: "إذا لم تعجبك النتيجة — أموالك مضمونة",
      en: "Not happy with results? Money back.",
      fr: "Pas satisfait ? Remboursement garanti."
    },

    sticky_name: { ar: "شرائط V34", en: "V34 Strips", fr: "Bandes V34" },
    sticky_price: { ar: "245 درهم", en: "245 MAD", fr: "245 MAD" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    foot_copy: { ar: "© 2025 HISMILE. جميع الحقوق محفوظة.", en: "© 2025 HISMILE. All rights reserved.", fr: "© 2025 HISMILE. Tous droits réservés." },
    foot_tagline: {
      ar: "تبييض أسنان آمن — توصيل لجميع مدن المغرب",
      en: "Safe teeth whitening — delivery across Morocco",
      fr: "Blanchiment sûr — livraison partout au Maroc"
    },

    /* FAQ translations */
    faq_eyebrow: { ar: "أسئلة شائعة", en: "FAQ", fr: "FAQ" },
    faq_title: { ar: "كل ما تحتاج معرفته قبل الطلب", en: "Everything you need to know before ordering", fr: "Tout ce qu'il faut savoir avant de commander" },
    faq_sub: {
      ar: "مازال عندك شك؟ هاد الإجابات كتغطي الاستعمال، الأمان، التوصيل والإرجاع.",
      en: "Still unsure? These answers cover usage, safety, delivery and returns.",
      fr: "Encore des doutes ? Ces réponses couvrent l'utilisation, la sécurité, la livraison et les retours."
    },
    faq_cta: {
      ar: "صيفط طلبيتك دابا",
      en: "Order now",
      fr: "Commander"
    },
    faq_q1: { ar: "كيفاش كنستعمل شرائط V34؟", en: "How do I use V34 strips?", fr: "Comment utiliser les bandes V34 ?" },
    faq_a1: {
      ar: "① نشّف سنانك مزيان بالورقة أو منشفة ورقية — خاص يكونو جافين باش الشريطة تلصق. ② حط الشريطة الكبيرة فالفوق والصغيرة فالتحت، ضغط على البلاستيك باش تثبت. ③ خليها من 30 دقيقة لساعة — بلا بيروكسيد، ما كيسببوش حساسية حتى مع وقت طويل. ④ حيد الشرائط وفرك سنانك عادي بالشيّتة باش تحيد البقايا البنفسجية. كتبع التعليمات بالحرف باش تجيب أحسن نتيجة.",
      en: "① Dry teeth thoroughly with a paper towel — they must be dry for strips to stick. ② Apply long strip to upper teeth, short to lower, press firmly. ③ Leave 30 minutes to 1 hour — peroxide-free, no sensitivity even with longer wear. ④ Remove and brush normally to clear purple residue. Follow instructions exactly for best results.",
      fr: "① Séchez bien avec un essuie — dents sèches pour que les bandes adhèrent. ② Bande longue en haut, courte en bas, appuyez fermement. ③ Laissez 30 min à 1 h — sans peroxyde, pas de sensibilité. ④ Retirez et brossez normalement. Suivez les instructions pour le meilleur résultat."
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
      ar: "إذا لم تلاحظ أي نتيجة بعد استعمال المنتج بالطريقة الصحيحة لمدة 15 يوماً، نُعيد لك أموالك مضمونة — 200 درهم. يجب تقديم طلب الاسترجاع مع صور قبل وبعد قبل انتهاء مدة 15 يوماً من التوصيل. بعد 15 يوماً من التوصيل دون طلب = لا استرجاع.",
      en: "If you see no results after using the product as directed within 15 days of delivery, you get a guaranteed 200 MAD refund. Submit your claim with before & after photos before the 15-day-from-delivery deadline. No claim within 15 days of delivery = no refund.",
      fr: "Si aucun résultat après utilisation correcte dans les 15 jours suivant la livraison, remboursement garanti de 200 MAD. Envoyez votre demande avec photos avant/après avant la fin du délai de 15 jours. Passé ce délai, aucun remboursement."
    }
  };

  /* ── Language Detection & State ── */
  var langs = ["ar", "en", "fr"];

  function resolveInitialLang() {
    try {
      var savedLang = localStorage.getItem("v34_lang");
      if (savedLang && langs.indexOf(savedLang) !== -1) return savedLang;
    } catch (e) {}
    if (window.__V34_INITIAL_LANG && langs.indexOf(window.__V34_INITIAL_LANG) !== -1) {
      return window.__V34_INITIAL_LANG;
    }
    return "ar";
  }

  var currentLangIndex = langs.indexOf(resolveInitialLang());
  if (currentLangIndex < 0) currentLangIndex = 0;

  /* ── i18n Apply ── */
  function applyLang(index) {
    currentLangIndex = index;
    var l = langs[currentLangIndex];
    localStorage.setItem("v34_lang", l);
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
    updateHeroGalleryAlts();
    updateStockLabels(window.__V34_STOCK_COUNT || computeDeterministicStock());
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
    var hero = document.getElementById("landing-hero");
    var checkoutForm = document.getElementById("checkout-form");
    var stickyBtn = document.getElementById("stickyBtn");
    if (!bottomCta) return;

    window.__stickyCtaIO = true;
    bottomCta.classList.remove("visible");
    bottomCta.classList.remove("is-hidden-over-form");

    function syncStickyState() {
      var vh = window.innerHeight;
      var hideForForm = false;
      // Follow the user through the whole page — only tuck away on the form itself
      var shouldShow = window.scrollY > 24;

      if (checkoutForm) {
        var formRect = checkoutForm.getBoundingClientRect();
        var visTop = Math.max(0, formRect.top);
        var visBottom = Math.min(vh, formRect.bottom);
        var visibleFormH = Math.max(0, visBottom - visTop);
        hideForForm = visibleFormH >= vh * 0.5 && formRect.top < vh * 0.38;
      }

      if (hideForForm) {
        bottomCta.classList.remove("visible");
        bottomCta.classList.add("is-hidden-over-form");
      } else if (shouldShow) {
        bottomCta.classList.add("visible");
        bottomCta.classList.remove("is-hidden-over-form");
      } else {
        bottomCta.classList.remove("visible");
        bottomCta.classList.remove("is-hidden-over-form");
      }
    }

    window.addEventListener("scroll", syncStickyState, { passive: true });
    window.addEventListener("resize", syncStickyState, { passive: true });
    window.addEventListener("load", syncStickyState);
    if (hero && window.ResizeObserver) {
      new ResizeObserver(syncStickyState).observe(hero);
    }
    if (checkoutForm && window.ResizeObserver) {
      new ResizeObserver(syncStickyState).observe(checkoutForm);
    }
    syncStickyState();
    requestAnimationFrame(function () {
      requestAnimationFrame(syncStickyState);
    });
    setTimeout(syncStickyState, 600);
    setTimeout(syncStickyState, 2000);

    if (stickyBtn) {
      stickyBtn.addEventListener("click", function () {
        stickyBtn.classList.add("pulse-stopped");
      });
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

  /* ── Shared horizontal carousel (hero gallery only) ── */
  var HERO_ASSET_VERSION = 7;
  var HERO_MANIFEST_URL =
    "https://raw.githubusercontent.com/chafiyounes/mapper-youcant/main/images/hero/manifest.json?v=" +
    HERO_ASSET_VERSION;

  var HERO_MANIFEST_FALLBACK = {
    baseUrl: "https://raw.githubusercontent.com/chafiyounes/mapper-youcant/main/images/hero/",
    slides: [
      {
        id: "main",
        image: "01-main.webp",
        thumb: "01-main-thumb.webp",
        alt: { ar: "أكثر من 10 ملايين منتج V34 تباع عالمياً", en: "10M+ V34 products sold worldwide", fr: "Plus de 10 millions de produits V34 vendus" }
      },
      {
        id: "main2",
        image: { ar: "02-main2-ar.webp", en: "02-main2-en.webp", fr: "02-main2-fr.webp" },
        thumb: { ar: "02-main2-ar-thumb.webp", en: "02-main2-en-thumb.webp", fr: "02-main2-fr-thumb.webp" },
        alt: { ar: "نتائج حقيقية — بدون مبالغة", en: "Real results — no exaggeration", fr: "Résultats réels — sans exagération" }
      },
      {
        id: "info",
        image: { ar: "03-info-ar.webp", en: "03-info-en.webp", fr: "03-info-fr.webp" },
        thumb: { ar: "03-info-ar-thumb.webp", en: "03-info-en-thumb.webp", fr: "03-info-fr-thumb.webp" },
        alt: { ar: "96% من المشاركين أسنانهم أفتح بدرجتين أو أكثر", en: "96% of participants had teeth two shades whiter or more", fr: "96% des participants : dents deux teintes plus blanches" }
      },
      {
        id: "topresults",
        image: "04-topresults.webp",
        thumb: "04-topresults-thumb.webp",
        alt: { ar: "أفضل نتائج التبييض", en: "Top teeth whitening results", fr: "Meilleurs résultats de blanchiment" }
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
        var isRtlScroll = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
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

  /* ── Before/After Slider ── */
  function initSlider() {
    var slider = document.getElementById("slider");
    var sliderAfter = document.getElementById("slider-after");
    var sliderHandle = document.getElementById("slider-handle");
    var baHint = document.getElementById("ba-hint");

    if (slider && sliderAfter && sliderHandle) {
      var isDragging = false;
      var currentPct = 50;
      var hintHidden = false;

      function hideHint() {
        if (hintHidden || !baHint) return;
        hintHidden = true;
        baHint.classList.add("is-hidden");
      }

      function moveSlider(clientX) {
        var rect = slider.getBoundingClientRect();
        var position = clientX - rect.left;
        if (position < 0) position = 0;
        if (position > rect.width) position = rect.width;
        var pct = (position / rect.width) * 100;
        currentPct = pct;
        var isRtl = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
        sliderHandle.style.left = pct + "%";
        if (isRtl) {
          sliderAfter.style.clipPath = "inset(0 " + (100 - pct) + "% 0 0)";
        } else {
          sliderAfter.style.clipPath = "inset(0 0 0 " + pct + "%)";
        }
        slider.setAttribute("aria-valuenow", Math.round(pct));
      }

      (function initSliderPosition() {
        var rect = slider.getBoundingClientRect();
        if (rect.width > 0) {
          moveSlider(rect.left + rect.width / 2);
        } else {
          requestAnimationFrame(initSliderPosition);
        }
      })();

      var startDrag = function (e) {
        if (e.type === "touchstart" && e.touches) {
          slider._touchStartX = e.touches[0].clientX;
          slider._touchStartY = e.touches[0].clientY;
          slider._touchAxis = null;
          return;
        }
        isDragging = true;
        hideHint();
        var cx = e.touches ? e.touches[0].clientX : e.clientX;
        moveSlider(cx);
        if (e.cancelable) e.preventDefault();
      };
      var moveDrag = function (e) {
        if (e.type === "touchmove" && e.touches) {
          var dx = e.touches[0].clientX - slider._touchStartX;
          var dy = e.touches[0].clientY - slider._touchStartY;
          if (!slider._touchAxis) {
            if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.15) {
              slider._touchAxis = "x";
              isDragging = true;
              hideHint();
            } else if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) {
              slider._touchAxis = "y";
              return;
            } else {
              return;
            }
          }
          if (slider._touchAxis === "y") return;
        }
        if (!isDragging) return;
        var cx2 = e.touches ? e.touches[0].clientX : e.clientX;
        moveSlider(cx2);
        if (e.cancelable) e.preventDefault();
      };
      var stopDrag = function () {
        isDragging = false;
        slider._touchAxis = null;
      };

      slider.addEventListener("mousedown", startDrag);
      slider.addEventListener("touchstart", startDrag, { passive: true });
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchend", stopDrag);
      window.addEventListener("mousemove", moveDrag);
      window.addEventListener("touchmove", moveDrag, { passive: false });
      slider.addEventListener("dragstart", function (e) { e.preventDefault(); });

      slider.addEventListener("keydown", function (e) {
        var isRtl = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
        var step = 4;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          hideHint();
          currentPct = isRtl
            ? Math.min(100, currentPct + step)
            : Math.max(0, currentPct - step);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          hideHint();
          currentPct = isRtl
            ? Math.max(0, currentPct - step)
            : Math.min(100, currentPct + step);
        } else {
          return;
        }
        var rect = slider.getBoundingClientRect();
        moveSlider(rect.left + (rect.width * currentPct / 100));
      });
    }
  }

  /* ── FAQ Accordion ── */
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

  /* ── Checkout Form ── */
  function initCustomCheckout() {
    var form = document.getElementById("custom-express-checkout-form");
    var submitBtn = document.querySelector("#checkout-section .btn-submit") ||
                  document.querySelector("#checkout-section button[type='submit']");
    if (!form || !submitBtn) return;

    // Sync hidden fields from YouCan's native page-builder form so we never
    // need to hard-code product IDs or field slugs in this file.
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
          // native has a field we don't — add it as hidden so it gets submitted
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
        alert(l === "ar" ? "خطأ في النظام. حاول مرة أخرى." : "System error. Please try again.");
      }
    });
  }

  /* ── Review split modal ── */
  function initReviewLightbox() {
    var lightbox = document.getElementById("review-lightbox");
    var lbImg = document.getElementById("review-lightbox-img");
    var lbCounter = document.getElementById("review-lightbox-counter");
    var lbAvatar = document.getElementById("review-lightbox-avatar");
    var lbName = document.getElementById("review-lightbox-name");
    var lbCity = document.getElementById("review-lightbox-city");
    var lbStars = document.getElementById("review-lightbox-stars");
    var lbText = document.getElementById("review-lightbox-text");
    var btnClose = document.getElementById("review-lightbox-close");
    var btnBackdrop = document.getElementById("review-lightbox-backdrop");
    var btnPrev = document.getElementById("review-lightbox-prev");
    var btnNext = document.getElementById("review-lightbox-next");
    if (!lightbox || !lbImg) return;

    if (lightbox.parentElement !== document.body) {
      document.body.appendChild(lightbox);
    }

    var gallery = [];
    var index = 0;

    function renderSlide() {
      if (!gallery.length) return;
      lbImg.src = gallery[index];
      lbImg.alt = "Review photo " + (index + 1);
      if (lbCounter) {
        lbCounter.textContent = gallery.length > 1 ? (index + 1) + " / " + gallery.length : "";
      }
      var multi = gallery.length > 1;
      if (btnPrev) btnPrev.classList.toggle("is-hidden", !multi);
      if (btnNext) btnNext.classList.toggle("is-hidden", !multi);
    }

    function fillDetails(card) {
      var avatar = card.querySelector(".reviewer-avatar");
      var name = card.querySelector(".reviewer-name");
      var city = card.querySelector(".reviewer-city");
      var stars = card.querySelector(".stars");
      var text = card.querySelector(".review-text");
      if (lbAvatar && avatar) lbAvatar.textContent = avatar.textContent;
      if (lbName && name) lbName.textContent = name.textContent;
      if (lbCity && city) lbCity.textContent = city.textContent;
      if (lbStars && stars) lbStars.innerHTML = stars.innerHTML;
      if (lbText && text) lbText.textContent = text.textContent;
    }

    function openLightbox(card, images, startAt) {
      gallery = images;
      index = startAt || 0;
      fillDetails(card);
      renderSlide();
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lbImg.src = "";
      gallery = [];
    }

    function step(dir) {
      if (gallery.length < 2) return;
      index = (index + dir + gallery.length) % gallery.length;
      renderSlide();
    }

    var cards = document.querySelectorAll(".review-card--gallery");
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function () {
        try {
          var imgs = JSON.parse(this.getAttribute("data-review-images") || "[]");
          if (imgs.length) openLightbox(this, imgs, 0);
        } catch (e) {}
      });
    }

    if (btnClose) btnClose.addEventListener("click", closeLightbox);
    if (btnBackdrop) btnBackdrop.addEventListener("click", closeLightbox);
    if (btnPrev) btnPrev.addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
    if (btnNext) btnNext.addEventListener("click", function (e) { e.stopPropagation(); step(1); });

    var lbMedia = lightbox.querySelector(".review-lightbox-media");
    if (lbMedia) {
      var lbTouchX = 0;
      lbMedia.addEventListener("touchstart", function (e) {
        lbTouchX = e.touches[0].clientX;
      }, { passive: true });
      lbMedia.addEventListener("touchend", function (e) {
        var dx = e.changedTouches[0].clientX - lbTouchX;
        if (Math.abs(dx) < 50) return;
        var isRtl = document.querySelector(".app") &&
          document.querySelector(".app").getAttribute("dir") === "rtl";
        if (isRtl) dx = -dx;
        step(dx > 0 ? -1 : 1);
      }, { passive: true });
    }

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(-1);
      if (e.key === "ArrowLeft") step(1);
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

  /* ── Price sync from YouCan native form ── */
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

  /* ── Stock count (deterministic on page load) ── */
  function computeDeterministicStock() {
    var MIN = 3;
    var MAX = 30;
    var DROP_PER_DAY = 3.5;
    var cycleDays = (MAX - MIN) / DROP_PER_DAY;
    var daysFloat = (Date.now() / 36e5) / 24;
    var phase = daysFloat % cycleDays;
    return Math.max(MIN, Math.round(MAX - phase * DROP_PER_DAY));
  }

  function initStockTicker() {
    window.__V34_STOCK_COUNT = computeDeterministicStock();
    updateStockLabels(window.__V34_STOCK_COUNT);
  }

  /* ── Defer non-default language image assets ── */
  function deferNonDefaultLangAssets() {
    if (langs[currentLangIndex] !== "ar") return;
    var imgs = document.querySelectorAll(".img-en, .img-fr, .benefits-infographic.img-en, .benefits-infographic.img-fr");
    for (var i = 0; i < imgs.length; i++) {
      if (!imgs[i].dataset.deferredSrc && imgs[i].getAttribute("src")) {
        imgs[i].dataset.deferredSrc = imgs[i].getAttribute("src");
        imgs[i].removeAttribute("src");
      }
    }
  }

  function loadDeferredLangAssets(lang) {
    if (lang === "ar") return;
    var imgs = document.querySelectorAll(".img-" + lang);
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].dataset.deferredSrc && !imgs[i].getAttribute("src")) {
        imgs[i].setAttribute("src", imgs[i].dataset.deferredSrc);
      }
    }
  }

  /* ── Lazy below-fold sections ── */
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

  /* ── SEO meta (injected HTML cannot set document head) ── */
  function injectPageSeoMeta() {
    var desc = {
      ar: "شرائح Hismile V34 للتبييض — نتائج في 30 دقيقة، آمنة للأسنان الحساسة، الدفع عند الاستلام في المغرب.",
      en: "Hismile V34 whitening strips — visible results in 30 minutes, enamel-safe, cash on delivery in Morocco.",
      fr: "Bandes blanchissantes Hismile V34 — résultats en 30 minutes, sans danger, paiement à la livraison au Maroc."
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

  /* ── Init & Hash Routing ── */
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
    // Scroll to top when view changes (instant — avoids spurious sticky CTA during smooth scroll)
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", handleHashRoute);

  function init() {
    injectPageSeoMeta();
    applyLang(currentLangIndex);
    handleHashRoute();
    handleScroll();
    deferNonDefaultLangAssets();
    initLazySections();
    initStockTicker();
    initSlider();
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
    initReviewLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
