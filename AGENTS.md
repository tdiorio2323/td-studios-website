# Repository Guidelines

## Project Structure & Module Organization
The Vite app lives in `src/`. Reusable presentation sits in `src/components/`, route views in `src/pages/`, data hooks in `src/hooks/`, and Supabase helpers in `src/supabase/`. Shared utilities stay in `src/utils.ts`. Keep assets alongside their consuming component; ship unprocessed files through `public/`. Treat `dist/` as read-only build output. Supabase SQL lives in `supabase/migrations/` with `config.toml`. Documentation and reference media are in `docs/` and `screenshots/`; update them when UI changes.

## Build, Test, and Development Commands
Run `npm install` once per machine. Use `npm run dev` for the hot-reloading dev server, and `npm run build` to emit the production bundle into `dist/`. Confirm production output locally with `npm run preview`. Check lint and type safety via `npm run lint` before opening a pull request.

## Coding Style & Naming Conventions
Author components in TypeScript using React function components and Tailwind utility classes. Indent with two spaces. Component and page files use PascalCase (e.g., `HeroBanner.tsx`, `Pricing.tsx`); hooks export camelCase from kebab-case files (e.g., `use-billing.ts`). Keep constants in `UPPER_SNAKE_CASE`, favour named exports, and place shared helpers in modules rather than duplicating logic.

## Testing Guidelines
The repo ships without automated tests; add Vitest with React Testing Library when coverage is needed. Co-locate specs as `*.test.ts(x)` beside the code or under `src/__tests__/`. Prioritise scenarios covering Supabase auth flows, pricing calculators, and critical navigation. Document new scripts in `package.json` (e.g., `npm run test`) and ensure they pass in CI before merging.

## Commit & Pull Request Guidelines
Use Conventional Commits such as `feat: add pricing calculator` or `fix: handle expired session`. Scope changes narrowly and avoid unrelated refactors. Pull requests should include a concise summary, linked issues, screenshots or GIFs for UI changes, and manual validation notes (commands run, routes visited). Rebase or merge regularly to stay current with `main`.

## Security & Configuration Tips
Never commit secrets. Store Supabase credentials in `.env.local` as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, loading them via `import.meta.env`. Audit new dependencies for Vite compatibility, and verify `.env*`, `dist/`, and generated assets remain ignored by Git.
