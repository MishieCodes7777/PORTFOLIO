# Bhavya Kundalia — Portfolio

Personal portfolio site for Bhavya Kundalia, a B.Tech student and MERN stack
developer. Built with React 19 and Vite.

**Live site:** https://portfolio-rho-tan-51.vercel.app

![Portfolio screenshot](./screenshot.png)

## Features

- Fully responsive layout, mobile through desktop
- Scroll-linked reading progress bar
- Interactive spotlight portrait — hover reveals colour beneath greyscale
- Scroll-triggered section reveals
- Automatic light and dark theme following the system setting
- Accessible: skip link, visible keyboard focus, semantic landmarks,
  `prefers-reduced-motion` respected
- SEO-ready: Open Graph and Twitter cards, JSON-LD `Person` structured data

## Tech stack

| Layer     | Choice                       |
| --------- | ---------------------------- |
| Framework | React 19                     |
| Build     | Vite 8                       |
| Animation | Framer Motion                |
| Styling   | Plain CSS with design tokens |

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # eslint
```

## Project structure

```
src/
├── components/        one component + one stylesheet per section
├── data/content.js    all copy lives here — edit this, not the components
├── assets/            images
├── index.css          design tokens, reset, shared styles
├── App.jsx            composes the sections
└── main.jsx           entry point
```

## Editing content

Every piece of text on the site comes from `src/data/content.js`. To add a
project, append an object to the `projects` array — nothing else needs to
change.

## Before deploying

- [ ] Add a `screenshot.png` at the repo root for this README
- [ ] Fill in `repo` and `demo` links for each project in `content.js`

## Deployment

Push to GitHub, import the repo at [vercel.com](https://vercel.com), and accept
the detected Vite settings. Every push to `main` redeploys automatically.

## Licence

Code is free to reference. Please don't reuse the personal content, photography
or certificates.
