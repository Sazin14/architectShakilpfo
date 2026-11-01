# architectShakilpfo

Portfolio website for an architect / photographer / filmmaker / traveller / author / entrepreneur.

```
frontend/   Next.js (App Router) + TypeScript + Tailwind v4 + Framer Motion + Lenis   ← this commit
backend/    NestJS + TypeScript                                                       ← later
```

## Run the frontend

```bash
cd frontend
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Design system

| Token | Value / use |
|---|---|
| Base | white `#fff`; black `#0a0a0a` for transitions, menu, footer |
| Greys | `g50 … g900` (see `src/app/globals.css`), the main working palette |
| Accent | mustard `#d4a30a`, **3–4 % of a page max**: one CTA button, one highlighted word (`[word]` in `SplitHeading`), small labels |
| Display font | Impact (`.font-display`) |
| Editorial font | Helvetica Neue UltraLight (`.font-light-h`), falls back to Helvetica/Arial |
| Body font | Arial |

Impact and Helvetica Neue UltraLight are system fonts (UltraLight ships with macOS/iOS only). For consistent rendering everywhere, license/self-host webfonts and add `@font-face` in `globals.css`.

## Structure

```
src/app/            routes: / architecture photography films travel writing ventures about hire contact
src/components/
  layout/           Header (full-screen menu), Footer, SmoothScroll (Lenis)
  home/             Hero (counter intro → portrait fade-in), Marquee, FieldsList, Statement, Highlights
  ui/               Reveal, SplitHeading, Button, PageHero, Section, ImagePlaceholder, VideoCard, BuyButton, ContactForm …
  icons/            FieldIcon: line-drawn symbols that animate themselves
src/data/           ALL placeholder content (site.ts, content.ts), to be replaced by NestJS API calls
src/types/          shared types (mirror these as DTOs in the backend)
```

## Where to drop assets

- Hero portrait: replace `public/images/hero-portrait.jpg` (or change `site.heroImage`).
- Project/gallery/book images: set `image`/`cover` in `src/data/content.ts`, pass `src` to `ImagePlaceholder`.
- Travel/film videos: set `youtubeId` in `videos` (`src/data/content.ts`).

## Not yet wired (needs backend)

- Contact / hire enquiry form (`ContactForm`): shows a demo confirmation only.
- Book "Buy PDF" (`BuyButton`): payment + secure PDF delivery.
