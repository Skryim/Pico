# Pico — website

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, JSON-LD
  page.tsx           Home page (assembles all sections below)
  globals.css        Tailwind directives + base styles
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           robots.txt config
components/
  ui/                 Reusable primitives: Button, Container, Eyebrow
  pico/               PicoCharacter — the signature animated character
  sections/           One component per homepage section (Hero, Problem, etc.)
```

## Design tokens

All color, type, and spacing tokens live in `tailwind.config.ts`. Colors
are derived from the Pico logo:

- `cream` / `peach` / `peach-soft` — warm neutral backgrounds
- `blue` / `blue-dark` / `blue-deep` — primary brand color
- `coral` / `coral-soft` — sparse accent, used deliberately, not decoratively
- `ink` / `ink-soft` / `ink-faint` — text, never pure black

Fonts: **Sora** (display, headlines) + **Inter** (body), loaded via
`next/font/google` in `app/layout.tsx`.

## Waitlist signup

The homepage signup form posts to `app/api/waitlist/route.ts`, which
writes each email as a row in a Google Sheet you control. This needs a
one-time setup — see **[WAITLIST_SETUP.md](./WAITLIST_SETUP.md)** for the
full walkthrough. Until that's done, the form will show an error on
submit rather than fail silently.

## Pages

All pages from the original site structure are built:

- `/` — Home
- `/about` — mission, vision, origin story, core values
- `/product` — deep dive on Pico himself
- `/how-it-works` — the 5-step trust-building process, expanded
- `/community` — how early involvement works
- `/faq` — accordion, honest answers including what's not decided yet
- `/contact` — form, wired to `/api/contact` → the same Google Sheet
  (different tab) as the waitlist
- `/blog` — empty state for now; posts array is ready for real content
- `/press-kit` — logo download, brand colors, boilerplate, media contact

## Still to build

- Individual blog post template (`app/blog/[slug]/page.tsx`) once there's
  real content to publish
- OG image at `/public/og-image.png`
- Dark mode (tokens are structured to support it, not yet implemented)
- Scroll-triggered reveal animations on section entry
