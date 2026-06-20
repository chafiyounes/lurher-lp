# Hero gallery images

The hero carousel reads [`manifest.json`](manifest.json). Four slides: **main**, **main2**, **info**, **topresults**.

## Slides

| ID | Files | Language |
|----|-------|----------|
| `main` | `01-main.webp` | Same for AR / EN / FR |
| `main2` | `02-main2-{ar,en,fr}.webp` | Per language |
| `info` | `03-info-{ar,en,fr}.webp` | Per language (96% study) |
| `topresults` | `04-topresults.webp` | Same for all |

Each slide has a `-thumb.webp` variant for the thumbnail row below the viewport.

## Lang-keyed slide (manifest)

```json
{
  "id": "main2",
  "image": { "ar": "02-main2-ar.webp", "en": "02-main2-en.webp", "fr": "02-main2-fr.webp" },
  "thumb": { "ar": "02-main2-ar-thumb.webp", "en": "02-main2-en-thumb.webp", "fr": "02-main2-fr-thumb.webp" },
  "alt": { "ar": "...", "en": "...", "fr": "..." }
}
```

Regenerate from source assets in `images/`:

```bash
python scripts/optimize-landing-images.py
```

Push to `main` and bump `manifest.json?v=` in `src/script.js` if CDN caches stale.
