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
      ar: "🚚 توصيل مجاني لجميع مدن المغرب",
      en: "🚚 Free delivery across Morocco",
      fr: "🚚 Livraison gratuite partout au Maroc"
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
      ar: "ابتسامتك هي أول حاجة كيشوفوها فيك. خليها بيضا.", 
      en: "Your smile is the first thing they see. Make it white.", 
      fr: "Votre sourire est la première chose qu'ils voient. Rendez-le blanc." 
    },
    land_hero_sub: {
      ar: "تخيّل: كتهدر مع شي حد، كتبسم، وكتشوف نظرتو كتبدل. الأسنان البيضا ماشي غير زين — هي ثقة، هي حضور. شرائط V34 كتعطيك هاد الإحساس فـ30 دقيقة فقط.",
      en: "Imagine: you talk to someone, smile, and see their look change. White teeth aren't just beauty — they're confidence, they're presence. V34 strips give you this feeling in just 30 minutes.",
      fr: "Imaginez : vous parlez, souriez et voyez leur regard changer. Les dents blanches ne sont pas qu'une question de beauté — c'est de la confiance. Les bandes V34 vous donnent cette sensation en 30 minutes."
    },
    land_hero_sub_short: {
      ar: "بياض ملحوظ فـ30 دقيقة — بلا ألم، بلا بيروكسيد.",
      en: "Visible whitening in 30 minutes — no pain, no peroxide.",
      fr: "Blanchiment visible en 30 minutes — sans douleur, sans peroxyde."
    },
    land_hero_cta: { ar: "صيفط طلبيتك دابا", en: "Order now", fr: "Commander" },
    
    trust_guarantee: { ar: "ضمان استرجاع الفلوس", en: "Money-back guarantee", fr: "Garantie de remboursement" },
    trust_ship: { ar: "توصيل لجميع المدن", en: "Delivery to all cities", fr: "Livraison partout" },
    trust_cod: { ar: "الدفع عند الاستلام", en: "Cash on Delivery", fr: "Paiement à la livraison" },

    land_why_h: { ar: "علاش V34 مختلفة على كلشي؟", en: "Why is V34 Different?", fr: "Pourquoi V34 est différent ?" },
    land_why_sub: {
      ar: "أغلب منتجات التبييض إما كتاخد أسابيع باش تبان، ولا كتضر المينا ديالك بالماء الأوكسجيني. حنا اخترنا طريق آخر:",
      en: "Most whitening products take weeks or damage enamel. We chose a different path:",
      fr: "La plupart des produits prennent des semaines ou abîment l'émail. Nous avons choisi une autre voie :"
    },
    land_feat1_h: { ar: "تصحيح اللون الفوري", en: "Instant Colour Correction", fr: "Correction de couleur instantanée" },
    land_feat1_p: {
      ar: "اللون البنفسجي كيلغي الاصفرار — نفس مبدأ الشامبو البنفسجي للشعر، ولكن للأسنان. النتيجة كتبان من أول استعمال.",
      en: "Purple tone cancels yellowness — same principle as purple shampoo for hair, but for teeth. Visible from first use.",
      fr: "Le ton violet annule le jaunissement — même principe que le shampoing violet. Visible dès la première utilisation."
    },
    land_feat2_h: { ar: "تبييض PAP+", en: "PAP+ Whitening", fr: "Blanchiment PAP+" },
    land_feat2_p: {
      ar: "تبييض حقيقي كيزيد مع الوقت — بلا بيروكسيد، آمن 100% على المينا والأسنان الحساسة.",
      en: "Real whitening that improves over time — peroxide-free, 100% safe for enamel.",
      fr: "Blanchiment réel qui s'améliore — sans peroxyde, 100% sûr."
    },
    land_feat3_h: { ar: "جرّبوه ملايين حول العالم", en: "Tried by millions worldwide", fr: "Des millions de personnes l'ont essayé" },
    land_feat3_p: {
      ar: "أكثر من 10 ملايين منتج V34 تباع عالمياً — ملايين اختاروه قبلك.",
      en: "10M+ V34 products sold worldwide — millions chose it before you.",
      fr: "Plus de 10 millions de produits V34 vendus — des millions l'ont choisi avant vous."
    },
    triptych_before: { ar: "قبل", en: "Before", fr: "Avant" },
    triptych_apply: { ar: "أثناء الاستعمال", en: "During use", fr: "Pendant l'application" },
    triptych_after: { ar: "بعد", en: "After", fr: "Après" },
    v34_disclaimer: {
      ar: "*النتائج كتختلف من شخص لآخر. اتبع التعليمات على العلبة باش تجيب أحسن نتيجة. الصور للتوضيح فقط.",
      en: "*Results vary by person. Follow the box instructions for best results. Images are illustrative only.",
      fr: "*Les résultats varient. Suivez les instructions de la boîte. Images à titre illustratif."
    },

    land_benefits_h: { ar: "شنو غادي تربح:", en: "What you will gain:", fr: "Ce que vous y gagnez :" },
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

    land_ba_h: { ar: "الناس كتخلّص المئات فعيادات التبييض... حنا جبنا ليك نفس النتيجة لدارك.", en: "People pay hundreds at clinics... We brought the same result to your home.", fr: "Les gens paient des centaines en clinique... Nous avons apporté le même résultat chez vous." },
    land_ba_hint: { ar: "← اسحب لكشف النتيجة →", en: "← Drag to reveal →", fr: "← Glissez pour révéler →" },
    ba_before: { ar: "قبل", en: "BEFORE", fr: "AVANT" },
    ba_after: { ar: "بعد", en: "AFTER", fr: "APRÈS" },
    land_checkout_h: {
      ar: "أكمل طلبيتك دابا",
      en: "Complete your order now",
      fr: "Complétez votre commande"
    },
    checkout_eyebrow: { ar: "اطلب دابا", en: "Order now", fr: "Commandez" },
    why_eyebrow: { ar: "التكنولوجيا", en: "The technology", fr: "La technologie" },
    ben_eyebrow: { ar: "الفوائد", en: "Benefits", fr: "Avantages" },
    ba_eyebrow: { ar: "نتائج حقيقية", en: "Real results", fr: "Résultats réels" },

    rev_title: { ar: "آراء الزبناء", en: "Customer Reviews", fr: "Avis Clients" },
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
      ar: "عندي سنان حساسة وكنت خايفة من التبييض. بلا بيروكسيد، خليت الشرائط ساعة كاملة بلا ما نحس بألم. المهم: يكونو السنان جافين قبل ما تحطي، ومن بعد تفركي عادي.",
      en: "I have sensitive teeth and was scared of whitening. Peroxide-free — left strips on a full hour, no pain. Key: dry teeth before applying and brush normally after.",
      fr: "Dents sensibles — j'avais peur. Sans peroxyde, une heure complète sans douleur. Clé : dents sèches avant et brossage normal après."
    },
    rev4_name: { ar: "أمين .ر", en: "Amine .R", fr: "Amine .R" },
    rev4_city: { ar: "مراكش", en: "Marrakech", fr: "Marrakech" },
    rev4_text: {
      ar: "المنتج وصل أصلي والعلبة فيها 14 استعمال. قريت التعليمات: نشّف، حط، استنّى 30 دقيقة على الأقل، حيد الشرائط وفرك — هكذا كتطلع أحسن نتيجة.",
      en: "Genuine product, 14 uses in the box. Read the box instructions: dry, apply, wait at least 30 minutes, remove and brush — that's how you get the best results.",
      fr: "Produit authentique, 14 utilisations. Instructions sur la boîte : sécher, appliquer, attendre 30 min minimum, retirer et brosser — pour le meilleur résultat."
    },
    land_order_h: { ar: "كل يوم كتأجّل، هو يوم بأسنان أقل بياضًا.", en: "Every day you delay is a day with less white teeth.", fr: "Chaque jour de retard est un jour avec des dents moins blanches." },
    land_order_sub: { ar: "الدفع عند الاستلام، بلا خلاص مسبق. التوصيل لجميع مدن المغرب.", en: "Cash on Delivery, no upfront payment. Delivery to all Moroccan cities.", fr: "Paiement à la livraison, aucun paiement d'avance. Livraison dans tout le Maroc." },
    final_cta_sub: {
      ar: "ضمان استرجاع الفلوس — آخر فرصة على هاد الثمن.",
      en: "Money-back guarantee — last chance at this price.",
      fr: "Garantie satisfait ou remboursé — dernière chance à ce prix."
    },
    land_price:   { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    land_strike:  { ar: "350 د.م.", en: "350 MAD", fr: "350 MAD" },
    savings_tag:  { ar: "وفّرت 105 د.م. (30%)", en: "You save 105 MAD (30%)", fr: "Vous économisez 105 MAD (30%)" },
    checkout_badge: { ar: "عرض محدود", en: "Limited Offer", fr: "Offre Limitée" },

    form_name: { ar: "الإسم الكامل", en: "Full Name", fr: "Nom complet" },
    form_phone: { ar: "رقم الهاتف", en: "Phone Number", fr: "Numéro de téléphone" },
    form_city: { ar: "المدينة", en: "City", fr: "Ville" },
    form_name_ph: { ar: "محمد / فاطمة", en: "Your name", fr: "Votre nom" },
    form_phone_ph: { ar: "06XX XXX XXX", en: "06XX XXX XXX", fr: "06XX XXX XXX" },
    form_city_ph: { ar: "الدار البيضاء، الرباط...", en: "Casablanca, Rabat...", fr: "Casablanca, Rabat..." },
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
    ct_ship_sub: { ar: "فابور و سريع (24-48 ساعة)", en: "Free and fast (24-48h)", fr: "Gratuit et rapide (24-48h)" },
    trust_cod_sub: { ar: "تأكد من المنتج عاد خلص", en: "Check your product, then pay", fr: "Vérifiez avant de payer" },
    ct_guarantee: { ar: "ضمان 100%", en: "100% Guarantee", fr: "Garantie 100%" },
    ct_guarantee_sub: { ar: "ضمان 30 يوم استرجاع الفلوس", en: "30-day money-back guarantee", fr: "Garantie de remboursement de 30 jours" },

    sticky_name: { ar: "شرائط V34", en: "V34 Strips", fr: "Bandes V34" },
    sticky_price: { ar: "245 د.م.", en: "245 MAD", fr: "245 MAD" },
    sticky_cta: { ar: "اطلب الآن", en: "Order Now", fr: "Commander" },

    foot_copy: { ar: "© 2025 HISMILE. جميع الحقوق محفوظة.", en: "© 2025 HISMILE. All rights reserved.", fr: "© 2025 HISMILE. Tous droits réservés." },
    foot_tagline: {
      ar: "تبييض أسنان آمن — توصيل لجميع مدن المغرب",
      en: "Safe teeth whitening — delivery across Morocco",
      fr: "Blanchiment sûr — livraison partout au Maroc"
    },

    /* FAQ translations */
    faq_eyebrow: { ar: "أسئلة شائعة", en: "FAQ", fr: "FAQ" },
    faq_title: { ar: "كل ما خصك تعرف قبل الطلب", en: "Everything you need to know before ordering", fr: "Tout ce qu'il faut savoir avant de commander" },
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
      ar: "حنا واثقين من جودة المنتج، داكشي علاش كنقدّمو ضمان استرجاع الأموال لمدة 30 يوم. إلا ماعجبتكش النتيجة، تواصل معانا ورجع فلوسك بلا تعقيدات.",
      en: "We are confident in our quality, which is why we offer a 30-day money-back guarantee. If you are not satisfied, contact us for a hassle-free refund.",
      fr: "Confiants de notre qualité, nous offrons une garantie de 30 jours. Si vous n'êtes pas satisfait, contactez-nous pour un remboursement facile."
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
    baseUrl: "https://cdn.jsdelivr.net/gh/chafiyounes/mapper-youcant@main/images/hero/",
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
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (crossfade) root.classList.add("media-carousel--crossfade");

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
    if (viewport) {
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

    heroGalleryController = initMediaCarousel(root, {
      slideSelector: ".media-carousel-slide",
      autoplayMs: 5000,
      crossfade: true
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
        isDragging = true;
        hideHint();
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
    applyLang(currentLangIndex);
    handleHashRoute();
    handleScroll();
    initSlider();
    initHeroGallery();
    initStickyCta();
    initCustomCheckout();
    initFaq();
    initReviewLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
