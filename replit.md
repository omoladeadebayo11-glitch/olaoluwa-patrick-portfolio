# Aladeojebi Olaoluwa Patrick — Portfolio

A premium, nature-inspired personal portfolio site for a Sustainability Advocate, built as a standalone frontend-only React + Vite app.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio site locally in this workspace
- `cd artifacts/portfolio && npm install && npm run build` — standalone build, produces `dist/public` (this is what Netlify runs)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9 (repo-wide)
- `artifacts/portfolio`: React 19 + Vite + Tailwind v4 + Framer Motion, deliberately standalone (no workspace: deps, no catalog: versions) so it also installs/builds with plain `npm` outside the monorepo
- Other scaffolded artifacts (`api-server`, `mockup-sandbox`) exist in the workspace but are unused — the portfolio has no backend, no database, no auth

## Where things live

- `artifacts/portfolio/` — the entire site (single page, sections under `src/components/sections/`, composed in `src/pages/Portfolio.tsx`)
- `netlify.toml` (repo root) — sets `base = "artifacts/portfolio"`, `command = "npm run build"`, `publish = "dist/public"`, and an SPA redirect, so Netlify deploys with zero manual dashboard config
- Editable placeholders (social links, email/phone/location) live as named constants near the top of `Connect.tsx` and `Contact.tsx`

## Architecture decisions

- The portfolio artifact was deliberately decoupled from the monorepo's shared workspace conventions (no `workspace:*` deps, no `catalog:` versions, self-contained `tsconfig.json`, no `PORT`/`BASE_PATH` required for build) because the user needs it to build and deploy standalone on Netlify.
- No backend/API/database — this is a static, frontend-only site by explicit requirement.

## Product

Single-page portfolio: hero, about, mission/vision, soft skills grid, passions grid, social links, contact, footer. Nature-inspired green/white/blue palette, glassmorphism cards, floating background shapes, Framer Motion scroll animations.

## User preferences

- Footer credit line "Site by RaidenSmith" must remain alongside the owner's copyright line.

## Gotchas

- Before editing `artifacts/portfolio`, remember it intentionally does NOT follow the rest of the monorepo's `workspace:*`/`catalog:` conventions — keep it that way or the standalone Netlify build breaks.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
