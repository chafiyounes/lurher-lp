#!/usr/bin/env python3
"""Generate the standalone site's pages from their body fragments — one-shot
transform for the Cloudflare Pages (post-YouCan) site.

For each page in PAGES:
- wraps the body fragment in a full HTML document (head: meta/OG/preconnects,
  stylesheet, deferred script)
- rewrites jsDelivr image URLs -> same-origin /images/... paths
- strips the YouCan-only hidden inputs from the checkout form

Run again whenever a source page.html changes:
    python build_standalone.py

Pages:
  lure-her  LIVE offer (189 + decant). Source src_live/, frozen at the
            DEPLOY_SHA the YouCan loader pinned. Real traffic is on this.
  lureher   NEW offer build (Night + Day, 249). Source src_new/, started as a
            byte-copy of src_live/page.html. Has its OWN assets under
            /assets/lureher/ so restyling it cannot break the live page.
"""
import re
import io
import os
import hashlib

HERE = os.path.dirname(os.path.abspath(__file__))


def asset_ver(rel_path):
    """Short content hash for cache-busting. /assets/* is served immutable with
    a 1-year max-age, so the referencing URL must change when the file changes —
    otherwise returning visitors stay frozen on stale JS/CSS. Query versioning is
    honored by `immutable` because a different URL is a different cache entry."""
    p = os.path.join(HERE, "public", rel_path.lstrip("/"))
    data = io.open(p, "rb").read()
    return hashlib.md5(data).hexdigest()[:8]


# src_live/ = extracted from commit 3a8ad7e — the DEPLOY_SHA the live YouCan
# loader pins (v5-11). repo HEAD (v5-12/13) has srcset changes never deployed
# to live; we ship what live traffic actually sees. See CLOUDFLARE.md.
COMMON_META = {
    "lang": "ar",
    "dir": "rtl",
    "title": "Lure Her — عطر رجالي فاخر · الدفع عند الاستلام",
    "description": "عطر Lure Her الرجالي الفاخر. توصيل مجاني لكل المغرب، الدفع عند الاستلام، تجرّب قبل ما تخلّص.",
    "og_title": "Lure Her — عطر رجالي فاخر",
    "og_description": "توصيل مجاني لكل المغرب · الدفع عند الاستلام",
    "og_image": "/images/hero/01-main.webp",
}

PAGES = [
    dict(COMMON_META,
         slug="lure-her",
         src=os.path.join("src_live", "page.html"),
         css="/assets/styles.css",
         js="/assets/script.js"),
    # New-offer build (Night + Day pack, 249). Own copy, own assets.
    dict(COMMON_META,
         slug="lureher",
         src=os.path.join("src_new", "page.html"),
         css="/assets/lureher/styles.css",
         js="/assets/lureher/script.js",
         title="LureHer Night × LureHer Day — الباك الأصلي · الدفع عند الاستلام",
         description="باك LureHer الكامل: Night للجاذبية وDay للحضور. جوج عطور 50ml أصليين، ثبات أكثر من 8 ساعات، توصيل مجاني، الدفع عند الاستلام.",
         og_title="LureHer Night × LureHer Day — الباك الأصلي",
         og_description="جوج عطور 50ml بـ249 درهم بلاصة 500 · الدفع عند الاستلام",
         og_image="/images/hero/h-duo-v3-800.webp"),
    # Clarity rewrite of the 249 offer (2026-07-27 copy audit applied). Separate
    # slug + separate assets so /pages/lureher stays exactly as it is for
    # side-by-side comparison. Same offer, same pack key, same /api/order.
    dict(COMMON_META,
         slug="lureher-v2",
         src=os.path.join("src_v2", "page.html"),
         css="/assets/lureher-v2/styles.css",
         js="/assets/lureher-v2/script.js",
         title="LureHer Night × LureHer Day — الباك الأصلي · الدفع عند الاستلام",
         description="جوج عطور 50ml: Night لليل وDay للنهار. القنينة وحدها بـ189 درهم، الباك بـ249. توصيل مجاني، الدفع عند الاستلام.",
         og_title="LureHer Night × LureHer Day — الباك الأصلي",
         og_description="جوج عطور 50ml بـ249 درهم · الدفع عند الاستلام",
         og_image="/images/hero/h-duo-v3-800.webp"),
]

# Meta browser pixel — pixel_id comes from standalone.config.json; the same
# events are mirrored server-side by /api/order (CAPI) with a shared event_id.
cfg_path = os.path.join(HERE, "standalone.config.json")
cfg = {}
if os.path.exists(cfg_path):
    import json
    cfg = json.load(io.open(cfg_path, encoding="utf-8"))
PIXEL_ID = cfg.get("pixel_id", "")

PIXEL_SNIPPET = ""
if PIXEL_ID:
    PIXEL_SNIPPET = """
  <script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  window.LH_PIXEL_ID = '%s';
  fbq('init', '%s');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=%s&ev=PageView&noscript=1"/></noscript>
""" % (PIXEL_ID, PIXEL_ID, PIXEL_ID)


def build(page):
    src = os.path.join(HERE, page["src"])
    out = os.path.join(HERE, "public", "pages", page["slug"], "index.html")
    body = io.open(src, encoding="utf-8").read()

    # 1. jsDelivr / raw.github asset URLs -> same-origin (images/ + reviews/)
    body = re.sub(
        r"https://cdn\.jsdelivr\.net/gh/chafiyounes/lurher-lp@[^/]+/(images|reviews)/",
        r"/\1/", body)
    body = re.sub(
        r"https://raw\.githubusercontent\.com/chafiyounes/lurher-lp/[^/]+/(images|reviews)/",
        r"/\1/", body)

    # 2. YouCan-only hidden inputs out of the form (the new /api/order needs none)
    for name in ("id", "quantity", "is_page_builder_express_checkout", "extra_payload"):
        body = re.sub(
            r'\s*<input type="hidden" name="' + re.escape(name) + r'"[^>]*>', "", body)

    # 3. brand link: absolute store URL -> same-page top
    body = re.sub(r'href="https://cleopatra\.beauty/[^"]*"', 'href="#top"', body)

    head = """<!DOCTYPE html>
<html lang="%s" dir="%s">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>%s</title>
  <meta name="description" content="%s">
  <meta property="og:title" content="%s">
  <meta property="og:description" content="%s">
  <meta property="og:image" content="%s">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/webp" href="/images/logos/lureher-logo-nav.webp">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="%s?v=%s">""" % (
        page["lang"], page["dir"], page["title"], page["description"],
        page["og_title"], page["og_description"], page["og_image"],
        page["css"], asset_ver(page["css"])) + PIXEL_SNIPPET + """
</head>
<body id="top">
"""

    foot = """
<script src="%s?v=%s" defer></script>
</body>
</html>
""" % (page["js"], asset_ver(page["js"]))

    doc = head + body + foot
    os.makedirs(os.path.dirname(out), exist_ok=True)
    io.open(out, "w", encoding="utf-8").write(doc)
    print("wrote", out, len(doc), "bytes")
    assert "jsdelivr" not in doc, "jsDelivr URL left behind in %s!" % page["slug"]
    assert "youcan" not in doc.lower(), "YouCan reference left in %s!" % page["slug"]


for _page in PAGES:
    build(_page)
print("clean: no jsDelivr / YouCan references")
