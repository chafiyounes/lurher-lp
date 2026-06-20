# Benefits infographic (AR / EN / FR)

**Live page:** uses native HTML/CSS (`.benefits-visual`) with i18n strings — perfect Arabic and blends with `--surface-alt` (`#f4f0f9`).

**Optional raster exports** (AI text often breaks Arabic — not used on page):

| File | Language |
|------|----------|
| `benefits-infographic-ar.webp` | Arabic (legacy) |
| `benefits-infographic-en.webp` | English (legacy) |
| `benefits-infographic-fr.webp` | French (legacy) |
| `strip-center.webp` | Center product strip crop |

Regenerate rasters (OpenAI `dall-e-2` edit, not Nano Banana):

```bash
set OPENAI_API_KEY=your_key
python scripts/generate-benefits-infographic.py ar --model dall-e-2
```

Source: `source.png` (from root `product image.png`).
