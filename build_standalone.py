#!/usr/bin/env python3
"""Generate public/pages/lure-her/index.html from src/page.html — one-shot
transform for the Cloudflare Pages standalone (post-YouCan) site.

- wraps the body fragment in a full HTML document (head: meta/OG/preconnects,
  stylesheet, deferred script)
- rewrites jsDelivr image URLs -> same-origin /images/... paths
- strips the YouCan-only hidden inputs from the checkout form

Run again whenever src/page.html changes during the parallel period:
    python build_standalone.py
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
SRC = os.path.join(HERE, "src_live", "page.html")
OUT = os.path.join(HERE, "public", "pages", "lure-her", "index.html")

body = io.open(SRC, encoding="utf-8").read()

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

HEAD = """<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lure Her — عطر رجالي فاخر · الدفع عند الاستلام</title>
  <meta name="description" content="عطر Lure Her الرجالي الفاخر. توصيل مجاني لكل المغرب، الدفع عند الاستلام، تجرّب قبل ما تخلّص.">
  <meta property="og:title" content="Lure Her — عطر رجالي فاخر">
  <meta property="og:description" content="توصيل مجاني لكل المغرب · الدفع عند الاستلام">
  <meta property="og:image" content="/images/hero/01-main.webp">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/webp" href="/images/logos/lureher-logo-nav.webp">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="/assets/styles.css?v=%s">""" % asset_ver("assets/styles.css") + PIXEL_SNIPPET + """
</head>
<body id="top">
"""

FOOT = """
<script src="/assets/script.js?v=%s" defer></script>
</body>
</html>
""" % asset_ver("assets/script.js")

os.makedirs(os.path.dirname(OUT), exist_ok=True)
io.open(OUT, "w", encoding="utf-8").write(HEAD + body + FOOT)
print("wrote", OUT, len(HEAD + body + FOOT), "bytes")
assert "jsdelivr" not in (HEAD + body + FOOT), "jsDelivr URL left behind!"
assert "youcan" not in (HEAD + body + FOOT).lower(), "YouCan reference left!"
print("clean: no jsDelivr / YouCan references")
