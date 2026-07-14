# Rubab Bashir — Portfolio

A React + TypeScript + Tailwind CSS v4 portfolio, styled as a "system status" dashboard —
built to reflect a full-stack + ML/AI background (dashboards, real-time systems, monitoring).

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. The site auto-reloads on save.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy (Vercel — recommended, free)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com -> New Project -> import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy -- you'll get a live `.vercel.app` URL, or connect a custom domain.

## Before you publish -- fill these in

- `src/data/portfolio.ts`
  - `profile.links.linkedin` -- add your real LinkedIn URL
  - `profile.links.leetcode` -- add your real LeetCode URL
  - each project's `github` -- currently all point to your GitHub profile; link each to its actual repo
  - each project's `live` -- add a live demo URL where you have one (e.g. FlexiBerry, ServiceHub); leave `""` to hide the "live" link
- Swap the favicon in `public/` and the `<title>` in `index.html` if you want.

## Structure

```
src/
  data/portfolio.ts     <- all content lives here -- edit this file to update the site
  components/           <- Nav, Hero, About, Skills, Experience, Projects, Certifications, Contact, Footer
  index.css             <- design tokens (colors, fonts) + global styles
  App.tsx               <- page assembly
```

## Adding a new project

Open `src/data/portfolio.ts` and add an object to the `projects` array -- the page updates automatically,
no component code needs to change.
