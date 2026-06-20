# Benefits infographic (AR / EN / FR)

Language-specific marketing graphics for the benefits section.

| File | Language |
|------|----------|
| `benefits-infographic-ar.webp` | Arabic |
| `benefits-infographic-en.webp` | English |
| `benefits-infographic-fr.webp` | French |

Regenerate from `source.png` (copy of root `product image.png`):

```bash
OPENAI_API_KEY=... python scripts/generate-benefits-infographic.py ar
# verify Arabic, then:
OPENAI_API_KEY=... python scripts/generate-benefits-infographic.py en fr
```

Then convert to WebP with Pillow if needed. Push to `main` for jsDelivr CDN.
