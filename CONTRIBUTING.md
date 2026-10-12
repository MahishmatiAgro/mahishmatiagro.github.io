# Contributing to the Mahishmati Agro website

Thank you for helping improve **[mahishmatiagro.github.io](https://mahishmatiagro.github.io/)**, the website of Mahishmati Agro, an organic oyster mushroom farm in Maharajpur, Mandla, Madhya Pradesh.

You can help by:

- Reporting a bug (a broken link, wrong text, or a layout problem)
- Fixing a typo or improving a translation (English or Hindi)
- Suggesting a new feature or section
- Sending a pull request with a fix

> **Want to order mushrooms or ask about prices?** Please don't open an issue.
> Message us on [WhatsApp](https://wa.me/917223047175) (+91 72230 47175) or email [mahishmatiagro@gmail.com](mailto:mahishmatiagro@gmail.com).

By taking part, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Reporting bugs and suggesting features

We track bugs and ideas with [GitHub Issues](https://github.com/MahishmatiAgro/mahishmatiagro.github.io/issues).

1. **Search first.** Someone may already have reported it.
2. Open a [new issue](https://github.com/MahishmatiAgro/mahishmatiagro.github.io/issues/new/choose) and pick **🐞 Bug report** or **✨ Feature request**.
3. Fill in the form. A good bug report includes:
   - which **section** of the site has the problem
   - **steps to reproduce** the problem
   - what you **expected** and what **actually happened**
   - the site **language** (English / हिंदी), your **device** and your **browser**
   - a **screenshot**, if possible

## Making changes

The site is plain **HTML, CSS and JavaScript**. There's no build step, no framework and no npm.

### 1. Fork, clone, and branch

```bash
git clone git@github.com:<your-username>/mahishmatiagro.github.io.git
cd mahishmatiagro.github.io
git checkout -b fix/short-description
```

Name branches like `fix/whatsapp-link`, `feat/pack-sizes` or `content/hindi-faq`.

### 2. Run the site locally

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

### 3. Where things live

| What you want to change | File |
|---|---|
| English text, sections, links | `index.html` |
| Hindi text, WhatsApp message text | `assets/js/i18n.js` |
| Recipes (English + Hindi) | `assets/js/recipes.js` |
| Behaviour (language switch, menu, form, recipes) | `assets/js/main.js` |
| Styles and colours | `assets/css/style.css` |
| Product photos | `assets/img/products/` |
| Recipe / gallery photos | `assets/img/dishes/` |

See the [README](README.md) for more detail.

### 4. Follow these rules

**Text and translations**
- Every visible text element has a `data-i18n="key"` attribute. When you add or change English text in `index.html`, **add or update the same key in `assets/js/i18n.js`** with the Hindi translation.
- Keep both languages saying the same thing.
- Business details must stay consistent everywhere:
  - Name: **Mahishmati Agro** (महिष्मति एग्रो)
  - Phone: **+91 72230 47175**
  - Email: **mahishmatiagro@gmail.com**
  - Instagram: **@mahishmatiagro**

**Content claims**
- **No medical or health-cure claims.** Nutrition text must stay general, e.g. "a source of protein". Don't write things like "prevents disease".
- Don't add prices, delivery promises or customer reviews unless the owner has confirmed them.

**Code style**
- 2 spaces for indentation, no tabs.
- Plain JavaScript (no frameworks or build tools) that works in current mobile browsers.
- Keep it accessible: `alt` text on images, `aria-label` on icon-only buttons, and enough colour contrast.
- Don't edit the `?v=…` numbers on CSS/JS links. The deploy workflow sets them automatically.
- For a release, bump `"version"` in `package.json` (`Major.Minor.Fix`). See [Versioning](README.md#versioning).

**Images**
- Use web-sized images: about 900 px wide and under 300 KB if possible. JPG for photos, PNG only when transparency is needed.
- Only add photos you own or have permission to use.

### 5. Test before you submit

- [ ] The page loads with **no errors** in the browser console.
- [ ] The **EN ↔ हिंदी** toggle works and your new text is translated.
- [ ] It looks right on a **phone** (about 375 px wide) and on a **desktop**.
- [ ] WhatsApp, phone, email, map and Instagram links still work.
- [ ] Every new image loads, and none are broken.

### 6. Open a pull request

1. Commit with a clear message, e.g. `Fix Hindi text in FAQ storage answer`.
2. Push your branch and open a pull request against **`main`**.
3. Explain **what** you changed and **why**, link the related issue (e.g. `Fixes #12`), and add before/after screenshots for visual changes.

The maintainer will review it. Once it's merged to `main`, GitHub Pages updates the live site automatically within a few minutes.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE). By sending a contribution, you agree that it will be licensed under the same GPL-3.0 license.

## Questions?

Open an issue, or email [mahishmatiagro@gmail.com](mailto:mahishmatiagro@gmail.com).

Thank you for your help! 🍄
