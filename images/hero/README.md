# Hero gallery images

The hero carousel reads [`manifest.json`](manifest.json). Add your Arabic diagrams/graphics here, then push to GitHub.

## File naming

For each slide in `manifest.json`:

| Field | Purpose |
|-------|---------|
| `image` | Main slide (e.g. `02-sold-10m.webp`) — full width in carousel |
| `thumb` | Thumbnail under carousel (e.g. `02-sold-10m-thumb.webp`) — ~120px wide |
| `fallback` | Used until your file exists on CDN (optional after upload) |

## Adding a new slide

1. Drop `07-my-slide.webp` and `07-my-slide-thumb.webp` in this folder.
2. Append to `manifest.json`:

```json
{
  "id": "my-slide",
  "image": "07-my-slide.webp",
  "thumb": "07-my-slide-thumb.webp",
  "fallback": "https://...",
  "alt": { "ar": "...", "en": "...", "fr": "..." }
}
```

3. Push to `main` — no HTML/JS edit required unless you change layout.

Recommended: WebP, ~1200px wide for main slides, ~200px for thumbs.
