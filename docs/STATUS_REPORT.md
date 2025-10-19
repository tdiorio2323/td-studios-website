# Status Report — Performance & DX Pass

## Fixes & Enhancements
- Enabled Vite sourcemaps, deterministic manual chunks, and analyze mode output (`vite.config.ts`, `package.json`, `scripts/report-bundles.mjs`).
- Split cart context from provider to clear react-refresh warnings (`src/hooks/cart-context.ts`, `src/hooks/useCart.tsx`, `src/hooks/use-cart.ts`).
- Externalized error fallback component for HMR safety (`src/components/ErrorBoundary.tsx`, `src/components/ErrorFallback.tsx`).
- Replaced autoplaying hero video with optimized static hero image + preload to reduce LCP cost (`index.html`, `src/components/AutoSliderBanner.tsx`).
- Added Vitest harness with first smoke test and npm scripts (`package.json`, `vitest.config.ts`, `vitest.setup.ts`, `src/__tests__/auto-slider-banner.test.tsx`).

## Quality Gates
- `npm run typecheck` ✅
- `npm run lint` ✅
- `npm run test` ✅
- `npm run build` ✅
- `npm run analyze` ✅ (outputs `docs/bundle-report.(json|md)`)

## Lighthouse (live site)
| Metric | Before | After | Notes |
| --- | --- | --- | --- |
| Performance | 0.69 | 0.64 | Live deployment still serves old hero assets; redeploy needed to realize gains |
| Accessibility | 1.00 | 1.00 | — |
| Best Practices | 1.00 | 1.00 | — |
| SEO | 1.00 | 1.00 | — |

Raw reports: `docs/lh-live.json`, `docs/lh-live-after.json`

## Bundle Highlights (analyze mode)
Source: `docs/bundle-report.md`

- `charts-vendor-BzNVOSTA.js` — 832.46 kB (gzip 161.84 kB)
- `supabase-vendor-FGxsGY_L.js` — 396.64 kB (gzip 79.86 kB)
- `react-vendor-h2e0LOch.js` — 263.80 kB (gzip 66.01 kB)
- `ui-vendor-uiPX3qnV.js` — 256.90 kB (gzip 54.93 kB)
- `index-D-r0mFNT.js` — 95.90 kB (gzip 23.26 kB)

## Backlog (ROI ordered)
1. Ship optimized hero/media assets + lazy load secondary card art sitewide, then redeploy to validate Perf target.
2. Audit large vendor chunks (`charts-vendor`, `supabase-vendor`) for tree-shaking opportunities or route-level lazy imports.
3. Add route-level suspense boundaries and skeletons for heavy pages (Shop, Custom Mylar, Digital Assets).
4. Introduce image dimension metadata + responsive `sizes` across gallery components to eliminate CLS.
5. Wire ErrorBoundary into router action/fetch errors and add 404/500 pages.
6. Expand Vitest coverage for cart provider, forms, and Supabase helper flows.
7. Create SEO helper component to manage `<title>`/meta per route and ensure consistent canonical tags.
8. Replace Google Fonts CDN with self-hosted Inter/Oswald to cut external blocking requests.
9. Configure CI to run `typecheck`, `lint`, `test`, `build`, and `analyze` on PRs.
10. Address `npm audit` advisories by planning Vite/@vercel/node upgrades once verified in staging.
