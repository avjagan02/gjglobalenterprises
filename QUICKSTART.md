# Quick Start — Deploy in 5 Minutes

This is a static multi-page site (HTML/CSS/JS). No build step. Pick any host.

## Option 1 — Netlify Drop (Fastest)

1. Visit https://app.netlify.com/drop
2. Drag the `import-export-website` folder into the browser
3. Done. Live URL appears immediately.

The included [`netlify.toml`](netlify.toml) wires up:
- Clean URLs (`/services`, `/trade`, etc. → `.html`)
- Legacy redirects (`/products` → `/trade#products`, `/scm` → `/services#scm`)
- Security headers
- Long-cache for `Gallery/`, `picture/`, `logo/`

## Option 2 — Netlify via GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/import-export-website.git
git push -u origin main
```

Then on https://netlify.com:
1. **New site from Git** → pick the repo
2. Click **Deploy** (no build settings needed)

## Option 3 — Vercel

```bash
npx vercel
```

…or import the GitHub repo on https://vercel.com. [`vercel.json`](vercel.json) is preconfigured with `cleanUrls: true`, the legacy redirects, and cache headers.

## Option 4 — GitHub Pages

1. Push to GitHub (commands above)
2. Repo **Settings → Pages**
3. Source: **`main` branch**, folder **`/ (root)`**
4. Save

Note: GitHub Pages doesn't honor `netlify.toml` / `vercel.json`, so clean URLs won't work — use `/services.html` rather than `/services` on GH Pages. Everything else works fine.

## Run Locally

```bash
# Python
python -m http.server 8000

# Node
npx http-server -p 8000
```

Then open http://localhost:8000.

You can also just double-click `index.html` — there's no server-side code, so it works straight from the filesystem (though the gallery modal and form work best over `http://`).

## Before Going Live — Checklist

- [ ] Replace the canonical domain (currently `gjglobalenterprises.com`) in every page's `<link rel="canonical">` and `og:url` if your real domain is different
- [ ] Update `sitemap.xml` and `robots.txt` to use your real domain
- [ ] Replace placeholder testimonials in [index.html](index.html) with real clients
- [ ] Add real registration numbers to the accreditation cards in [about.html](about.html)
- [ ] Verify the Web3Forms access key in [contact.html](contact.html) still works
- [ ] Test the contact form end-to-end and confirm the thank-you redirect
- [ ] Test on mobile (real device, not just devtools)

## Custom Domain

After deployment:
1. Buy a domain (Namecheap, GoDaddy, Google Domains)
2. In your host (Netlify/Vercel): **Domain Settings → Add custom domain**
3. Follow the DNS instructions shown
4. Allow 24–48 hours for DNS propagation

## Continuous Deployment

If you connected via GitHub, every `git push` to `main` will auto-deploy. No further action needed.

## Troubleshooting

| Symptom                                  | Likely cause                                                 |
|------------------------------------------|--------------------------------------------------------------|
| Clean URLs (`/services`) return 404      | Hosted on GitHub Pages — use `.html` extensions instead      |
| Contact form doesn't submit              | Web3Forms access key invalid; replace it in [contact.html](contact.html) |
| Gallery modal won't open                 | Browser blocked file:// JS; serve over `http://`             |
| WhatsApp button does nothing             | Pop-ups blocked; check `wa.me/919600610294` in browser       |
| Images missing                           | Confirm filenames in `Gallery/` match (case-sensitive on Linux hosts) |
