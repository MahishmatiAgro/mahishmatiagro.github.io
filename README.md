# Mahishmati Agro - Website

Official website of **Mahishmati Agro (महिष्मति एग्रो)**, an organic oyster mushroom farm in Maharajpur, Mandla, Madhya Pradesh.

**Live site:** https://mahishmatiagro.github.io/

We sell:
- Organic fresh oyster mushroom
- Dried oyster mushroom
- Oyster mushroom powder

## Contact

| | |
|---|---|
| Owner | Pt. Prashant Tripathi |
| Phone / WhatsApp | [+91 72230 47175](tel:+917223047175) |
| Email | [mahishmatiagro@gmail.com](mailto:mahishmatiagro@gmail.com) |
| Instagram | [@mahishmatiagro](https://www.instagram.com/mahishmatiagro) |
| Address | Ayodhya Puram Colony, near Railway Station, Maharajpur, Mandla, Madhya Pradesh 481665 |
| Udyam Registration | UDYAM-MP-29-0021697 |

## About the site

A single-page static website (plain HTML, CSS and JavaScript). It has no build step and no dependencies, and GitHub Pages serves it as is.

- **English / Hindi**: the language toggle in the top bar switches every piece of text. The site remembers the choice.
- **Orders by WhatsApp**: product buttons and the enquiry form open WhatsApp with a ready-written message. There's no backend.
- **14 recipes** from the Mahishmati Agro recipe pamphlet, plus a PDF download.
- **Sections**: About, Products, Why Us, Nutrition, Recipes, Bulk / Dealer orders, Gallery, Feedback, FAQ, Contact with map.

## Project structure

```
index.html                 Main page (English text lives here)
404.html                   "Page not found" page
robots.txt, sitemap.xml    Search-engine files
assets/
  css/style.css            All styles (brand colours at the top in :root)
  js/i18n.js               Hindi translations + WhatsApp message text
  js/recipes.js            The 14 recipes (English + Hindi)
  js/main.js               Language toggle, menu, recipes, form, animations
  img/logo.png             Logo (logo-512.png, favicon.png, apple-touch-icon.png are resized copies)
  img/products/            Product photos (*.jpg are the web-sized copies used on the site)
  img/dishes/              Recipe and gallery photos
  pdf/                     Recipe pamphlet PDF
```

## Common edits

**Change text.** Edit the English text in `index.html`. Each text element has a `data-i18n="key"` attribute; change the matching key in `assets/js/i18n.js` for Hindi. Every key used in `index.html` must exist in `i18n.js`.

**Change product photos.** Replace the `.jpg` files in `assets/img/products/`, keeping the same file names. Use square images about 900 × 900 px, under 300 KB. On macOS you can make a web copy with:

```bash
sips -s format jpeg -s formatOptions 82 -Z 900 "original.png" --out assets/img/products/fresh-oyster-mushroom.jpg
```

**Add gallery photos.** Put the image in `assets/img/gallery/`, then copy one `<figure class="g-item">` block in the Gallery section of `index.html`.

**Add customer reviews.** Follow the instructions in the HTML comment above the `#reviews` section in `index.html`.

**Edit recipes.** Edit `assets/js/recipes.js`. The images are `assets/img/dishes/<id>.png`.

**Change the WhatsApp number.** Update `WA_NUMBER` in `assets/js/main.js`, plus the `tel:` / `wa.me` links in `index.html`.

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. The version badge in the footer shows `dev` locally.

## Deploy

The site is deployed to GitHub Pages by the workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It runs on every push to `main` and can also be started by hand from the **Actions** tab.

```bash
git push origin main
```

The workflow:
1. Copies only the website files into the published site. README, configs, `.github/` and `_private/` are never published.
2. Stamps the version into the footer's bottom-right corner as **`v<Major.Minor.Fix> · build <n>`**. Hover over it to see the commit and date.
3. Replaces every `?v=…` cache-busting number with `<version>.<build>`, so visitors always get the latest CSS/JS. You never need to change these by hand.
4. Publishes `version.json` (version, build, commit, date) at https://mahishmatiagro.github.io/version.json.

**One-time setup:** in the repo's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.

### Versioning

The version comes from `"version"` in [`package.json`](package.json) and must be `Major.Minor.Fix`, for example `1.2.3`. The build number is the GitHub Actions run number and goes up by itself on every deploy.

Change the version before pushing a release:

| Change | Example | Bump |
|---|---|---|
| Small fix: typo, broken link, photo swap | `1.0.0` → `1.0.1` | **Fix** |
| New section, product or feature | `1.0.1` → `1.1.0` | **Minor** |
| Full redesign or a big change | `1.1.0` → `2.0.0` | **Major** |

If you don't change it, the site redeploys with the same version and a new build number.

## Notes

- Food and nutrition text on the site is general information only. The site makes no medical or health claims.
- The `_private/` folder is not uploaded. It holds the source scans used to make the dish photos.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

© 2026 Mahishmati Agro. All rights reserved.
