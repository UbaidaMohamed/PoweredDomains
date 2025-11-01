# PoweredDomains Website

A small Vite + React + TypeScript site for showcasing premium domain names. This repository contains the frontend for PoweredDomains, with pages for browsing domains, blog posts, and contact/FAQ pages.

## Quick summary

- Framework: Vite + React + TypeScript
- Styling: Tailwind CSS
- Routing: react-router-dom
- Icons: lucide-react

## Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open `http://localhost:5173` (Vite will show the actual URL in the terminal).

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Project structure (key files)

- `index.html` – HTML entry (favicon set to `public/title-logo.png`).
- `index.tsx` – React entrypoint.
- `App.tsx` – Router and top-level layout.
- `src/pages/` – All page components (Home, Browse, Blog, BlogPost, About, Contact, NotFound, etc.).
- `src/components/` – Reusable components (Header, Footer, DomainCard, Logos, etc.).
- `src/data/blogPosts.ts` – Sample blog data used by the Blog pages.
- `public/` – Static assets served as `/` at runtime. Logos: `public/title-logo.png` and `public/homepage-logo.png`.

## How domains are configured

Currently the domain lists are defined in the pages:

- `src/pages/Home.tsx` – `featuredDomains` array (used on the homepage)
- `src/pages/Browse.tsx` – `domains` array (used on the browse page)

If you'd like easier maintenance, consider moving domains to a single `src/data/domains.ts` and importing that in both pages.

## Logos & favicon

- Title/tab favicon: `public/title-logo.png` (set in `index.html`).
- Homepage/footer logo: `public/homepage-logo.png` (rendered via `src/components/Logos.tsx`).

If images do not appear, run a hard refresh in the browser (Ctrl+F5) because browsers can cache images/favicons.

## Changes made in this repository

- Removed references to the original generator branding and external links to Meku.
- Added `src/data/blogPosts.ts` and routing for `/blog/:slug` (see `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx`).
- Added `src/components/Logos.tsx` to centralize logo usage.
- Replaced domain lists with the provided set (see `Home.tsx` and `Browse.tsx`).

## Troubleshooting

- If Vite fails to start, ensure Node.js (>=16) and npm are installed and `node_modules` are present.
- If a logo doesn't render, check `public/` for the expected filenames (`homepage-logo.png`, `title-logo.png`) and hard-refresh the browser.

## Next steps / suggestions

- Move domains to `src/data/domains.ts` for single-source-of-truth.
- Replace PNG logos with SVG versions for crisp scaling on large screens.
- Add SEO/meta per blog post and social sharing metadata.

If you'd like, I can make any of the above improvements or run the dev server and verify a specific page for you.
"# PoweredDomains" 
"# PoweredDomains" 
