# Ratek — Rapid Access Technology

First-page homepage implementation for Ratek using Next.js App Router, TypeScript, semantic HTML, and handcrafted CSS.

## Stack

- Next.js App Router
- React
- TypeScript
- CSS (no Tailwind)
- Minimal runtime dependencies

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

## Architecture

The homepage is deliberately compact and componentized so future routes can be added without restructuring the UI:

- `/services`
- `/services/technical-support`
- `/services/software-development`
- `/services/data-solutions`
- `/services/infrastructure`
- `/about`
- `/contact`

The visual system uses Ratek's emerald green, dark slate, fine borders, technical labels, and a custom parallel-line/network treatment rather than stock imagery or generic gradients.

Replace the placeholder canonical domain in `app/layout.tsx` if the production domain differs from `https://ratekdigital.com`.
