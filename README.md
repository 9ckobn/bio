# bio-site

Personal site / portfolio of Anton Chuprun — Flutter & automation engineer.

Stack: **Astro 5** (static, zero-JS by default), no UI framework, no trackers, no cookies.

## Structure

- `src/pages/en|ru/index.astro` — locale home pages (`/` redirects by saved/browser language)
- `src/pages/404.astro` — themed bilingual 404
- `src/layouts/Base.astro` — head, OG/hreflang meta, theme bootstrap (auto/light/dark, no flash)
- `src/components/` — Header, Hero (with contact actions), Cases (App Store-style cards), CV (about, verticals, pilot, OSS), Contacts, Footer
- `src/i18n/ui.ts` — **all copy lives here** (placeholder until content stage)
- `src/data/cases.ts` — case studies + OSS repos data (placeholder copy)
- `src/styles/global.css` — design tokens (GitHub Primer light/dark), mobile-first, desktop up to 1152px

## Page structure

Hero (availability, positioning, contacts) → Cases (4 App Store-style cards, 2-col on desktop) → CV (about + work-format facts + PDF + verticals + OSS) → Contact. Footer repeats the contacts. Header anchors: Work / CV / Contact only.
- `public/og.svg` → `og.png` — OG preview placeholder (1200×630), favicon.svg, robots.txt

## Design system

- Colors: GitHub Primer tokens (light `#ffffff`/`#f6f8fa`, dark `#0d1117`/`#151b23`), accent `#0969da`/`#4493f8`. No neon, no purple.
- Theme: three-state toggle auto → light → dark; auto follows `prefers-color-scheme` (incl. live changes), persisted in `localStorage`, resolved inline before first paint.
- Typography: system font stack (SF Pro on Apple devices).
- Case cards mimic an App Store product page: icon, name, tagline, "View" pill, screenshot carousel (CSS scroll-snap), meta row, description, links.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
```

## TODO (content stage)

- [ ] Final EN/RU copy in `src/i18n/ui.ts` (hero, trust chips, sections)
- [ ] Case descriptions, metrics column, real screenshots (`src/data/cases.ts`, `.shot` slots)
- [ ] Real domain in `astro.config.mjs` + `public/robots.txt`
- [ ] Final OG images per locale (replace `public/og.png`)
- [ ] Deploy (Cloudflare Pages / Netlify) + DNS
