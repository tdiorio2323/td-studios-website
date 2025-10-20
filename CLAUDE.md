# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a **single-level repository** with all source code, configuration, and build files at the root level. All development commands should be run from the repository root.

**Note**: The `td-studios-digital/` subdirectory contains a separate Next.js project with its own package.json and dependencies. This is a standalone application and not part of the main Vite build.

## Development Commands

**Core Development**:
- `npm run dev` - Start Vite development server (port 8081 by default, configurable via PORT env var)
- `npm i` - Install dependencies

**Building & Analysis**:
- `npm run build` - Production build (auto-generates shop manifest before build, opens bundle visualizer)
- `npm run build:dev` - Development build without optimizations
- `npm run preview` - Preview production build locally (port 4173)
- `npm run analyze` - Build with bundle analysis (outputs to dist-analyze/ with stats.html)

**Code Quality**:
- `npm run typecheck` - Type check without emitting files
- `npm run lint` - Run ESLint with React hooks rules
- `npm run lint:fix` - Auto-fix ESLint issues

**Testing**:
- `npm test` - Run Vitest tests once
- `npm run test:watch` - Run Vitest in watch mode
- `npm run capture:all` - Generate Playwright screenshots of all pages for documentation
- `npm run capture:preview` - Generate screenshots and open preview

**Code Generation & Deployment**:
- `npm run gen:page` - Interactive script to generate new page with automatic routing setup
- `npm run deploy:hook` - Trigger Vercel deployment via webhook (requires VERCEL_DEPLOY_HOOK_URL in .env.local)

## Environment Setup

- **Environment Variables**: Configuration in `.env.local` (create from template if needed)
  - `VITE_SUPABASE_URL` - Supabase project URL (https://crpalakzdzvtgvljlutd.supabase.co)
  - `VITE_SUPABASE_ANON_KEY` - Supabase anonymous/public key (safe for frontend)
  - `VERCEL_DEPLOY_HOOK_URL` - Webhook URL for manual deployments via `npm run deploy:hook`
- **TypeScript Configuration**: Project uses relaxed TypeScript settings (`noImplicitAny: false`, `strictNullChecks: false`) for rapid development

## Architecture Overview

This is a React application built with Vite, TypeScript, and shadcn/ui components, serving as both a TD Studios business website and a cannabis dispensary/menu system with dual architecture.

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: Tailwind CSS with shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Error Handling**: ErrorBoundary wrapper in App.tsx catches and displays React errors

### Dual Application Architecture

**CoreLayout Routes** (TD Studios Main Site):
- `/` - TD Studios homepage with premium design showcase
- `/web` - Web development services
- `/dev` - Development services
- `/social` - Social media services
- `/portfolio` - Portfolio showcase
- `/shop` - Customer shopping interface (cannabis products)
- `/mylar-designs` - Mylar packaging design gallery
- `/custom-designs` - Custom design services
- `/social-content` - Social media content packs
- `/digital-assets` - Digital design assets and downloads
- `/custom-mylar-form` - Custom mylar request form
- `/custom-websites` - Website development services form
- `/custom-design-form` - Custom design request form
- `/referral` - Referral program
- `/contact` - Contact form
- `/checkout` - Shopping cart checkout flow

**Standalone Routes** (No CoreLayout):
- `/admin` - Super admin dashboard
- `/brand` - Brand/dispensary dashboard
- `/auth` - Authentication page
- `/tdstudios` - TD Studios brand page
- `/tddesigns` - TD Designs brand page
- `/quickprintz` - QuickPrintz brand page
- `/quickprintz/form` - QuickPrintz form
- `/show` - Show page
- `/tdreferall` - TD Referral page

**Developer Routes**:
- `/__builder` - Page builder interface
- `/__auth-builder` - Auth card builder
- `/__card-editor` - Mass card editor
- `/__components` - Component library

**404 Route**:
- `*` - NotFound page (catch-all route, must be defined last in routing config)

### Key Architecture Patterns

**CoreLayout System**:
- `src/layouts/CoreLayout.tsx` - Unified header/footer for TD Studios pages
- Sticky header with centered TD STUDIOS logo (clickable to home)
- Desktop: Logo above flat navigation menu
- Mobile: Logo + hamburger menu with collapsible navigation
- Footer with company info and quick links
- Integrated shopping cart in header with quantity indicator

**Navigation Structure**:
- Main menu: HOME, SHOP, WEBSITES, REFERRAL, CONTACT
- Flat navigation without dropdowns
- Shopping cart slide-out accessible from header
- Mobile: Hamburger menu with full navigation and cart access

**Role-Based Access**:
- `admin` role → `/admin` dashboard
- `brand` role → `/brand` dashboard
- Default/customer → TD Studios pages with shopping

**Key Components**:
- `CustomerApp` - Shopping interface (now without header, uses CoreLayout)
- `SuperAdminDashboard` - Admin management
- `BrandDashboard` - Brand/dispensary management
- `CheckoutFlow` - Purchase process
- `AuthPage` - Authentication handling

**Database Integration**:
- Supabase authentication and data (Project ID: `crpalakzdzvtgvljlutd`)
- 17+ migrations in `supabase/migrations/`
- User roles in `user_roles` table (admin, brand, customer)
- TypeScript types generated in `supabase/types.ts`
- TanStack Query for server state management

**Styling System**:
- shadcn/ui with Radix UI primitives
- Tailwind CSS with custom configuration
- Glassmorphism effects throughout (bg-white/5, backdrop-blur-md)
- Theme support via next-themes
- Path alias `@/` points to `src/`

### Design Philosophy

**TD Studios Brand**:
- Luxury/premium aesthetic with glassmorphism
- Cannabis industry focus with mylar packaging specialization
- Professional service offerings (websites, design, social content)
- Consistent header/navigation across all main pages

**Development Patterns**:
- Route-based architecture with clear separation of concerns
- CoreLayout for unified TD Studios experience
- Standalone routes for admin/brand functionality
- Responsive design with mobile-first approach
- Component reusability with shadcn/ui system
- Lazy loading for all routes via React.lazy() and Suspense for optimal code splitting
- Manual vendor chunk splitting in vite.config.ts (react, supabase, ui, charts, utils)

## Shop System Architecture

**Data Priority Flow**:
1. `public/_shop-layout.json` - Published layout (order/text override)
2. `public/_shop-manifest.json` - Build-time generated from `td slide` and `shoppagepics` folders
3. Dev middleware `/__list-public` - Live folder listing in development
4. Hardcoded fallback products

**Shop Editing Workflow**:
- Edit Mode: drag to reorder, inline edit titles/descriptions, select/delete items
- Save Layout: stores in browser localStorage only
- Export JSON: downloads shop-layout.json for publishing
- Publish: place exported file at `public/_shop-layout.json`, commit, deploy

**Cart System**:
- Global cart state via `useCart` hook with localStorage persistence
- Cart preview slide-out with quantity controls and item management
- Integrated into CoreLayout header with count indicator

## Development Scripts & Automation

**Page Generation**:
- `npm run gen:page` - Interactive script creates new page component and auto-adds routing to App.tsx
- Vite dev middleware `/__scaffold` - Development-only endpoint for programmatic page creation (POST with name, route, code)

**Asset Management**:
- `scripts/generate-shop-manifest.mjs` - Scans `public/td slide` and `public/shoppagepics` for images, excludes specific files, outputs `_shop-manifest.json`
- Vite dev middleware `/__list-public` - Development-only endpoint for live folder listing (GET with optional ?dir= params)
- Automatic manifest generation during `npm run build`
- OCR scripts for batch image processing

**Documentation**:
- `npm run capture:all` - Playwright screenshots of all pages
- Auto-generated screenshot gallery at `screenshots/index.html`

**Build Optimization**:
- Production builds use Terser minification with 2-pass compression
- Manual vendor chunk splitting configured in `vite.config.ts`:
  - `react-vendor` - React, React DOM, React Router DOM
  - `supabase-vendor` - Supabase client, TanStack Query
  - `ui-vendor` - Radix UI components, Lucide icons
  - `charts-vendor` - Recharts library
  - `utils-vendor` - clsx, tailwind-merge, date-fns
- Sourcemaps enabled in production builds
- Chunk size warning limit: 900kb

**Bundle Analysis**:
- `npm run analyze` - Special build mode with unminified code and detailed stats
- Outputs to `dist-analyze/` directory with `stats.html` bundle visualization
- Uses rollup-plugin-visualizer with gzip and brotli size analysis
- Regular production builds also generate stats in `dist/stats.html`

**Deployment**:
- Vercel auto-deploy on main branch push
- Manual deploy via `npm run deploy:hook` (reads `VERCEL_DEPLOY_HOOK_URL` from `.env.local`)
- Build artifacts: `dist/` (production) or `dist-analyze/` (analyze mode)

## Project Context

This serves as both:
1. **TD Studios Business Website** - Professional design services for cannabis brands
2. **Cannabis Dispensary System** - Multi-tenant ordering and management platform

The dual nature requires careful routing: main business pages use CoreLayout for consistency, while admin/brand functionality remains separate for specialized workflows.

## Key File Locations

- `src/App.tsx` - Main routing configuration with CoreLayout vs standalone route separation
- `src/layouts/CoreLayout.tsx` - Unified TD Studios layout with header/footer
- `src/pages/Shop.tsx` - Shopping interface with edit mode and layout publishing
- `src/hooks/use-cart.ts` - Global cart state management (CartProvider and useCart hook)
- `src/hooks/useCart.tsx` - Legacy shim file (imports should use use-cart.ts directly)
- `supabase/` - Database configuration and migrations
- `scripts/` - Automation tools for page generation, asset processing, deployment
- `public/td slide/` and `public/shoppagepics/` - Product image directories

## SEO & Metadata

- **Meta Tags**: Manual meta tag management in HTML head (react-helmet-async not currently installed)
- **Product Pages**: Static meta tags in index.html, dynamic SEO implementation planned
- **Future**: JSON-LD Product schema for `/mylars/:slug` routes with price/availability data
- **Testing**: Verify meta tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [X Card Validator](https://cards-dev.twitter.com/validator)

## Sitemap & Robots

- **Sitemap**: `public/sitemap.xml` exists (manual sitemap generation script not yet implemented)
- **Robots.txt**: Located at `public/robots.txt` and references the sitemap
- **Future**: Automated sitemap generation from Mylar product slugs

## Testing

**Unit Testing**:
- Framework: Vitest with jsdom environment
- Configuration: `vitest.config.ts` with React plugin and path aliases
- Setup file: `vitest.setup.ts` for global test configuration
- Run tests: `npm test` (once) or `npm run test:watch` (watch mode)
- Coverage: Available via Vitest with text and HTML reporters

**Type Checking**:
- `npm run typecheck` - TypeScript type checking without emitting files
- Note: Project uses relaxed TS settings for rapid development (noImplicitAny: false, strictNullChecks: false)

**Linting**:
- `npm run lint` - Check for issues
- `npm run lint:fix` - Auto-fix issues
- ESLint with React hooks and refresh plugins

**E2E/Visual Testing**:
- Playwright installed for screenshot automation
- `npm run capture:all` - Generate screenshots of all pages
- Auto-generated screenshot gallery at `screenshots/index.html`

## HMR Hygiene Playbook

**Problem**: React Fast Refresh (HMR) breaks when component files export non-component items (hooks, contexts, constants, variants).

**Solution Pattern**: Extract non-component exports into separate files, import them where needed.

### Files Created During Refactor
- `src/components/ui/form-contexts.ts` - FormFieldContext, FormItemContext
- `src/components/ui/toggle-variants.ts` - toggleVariants cva definition
- `src/hooks/use-cart.ts` - useCart hook (already existed)
- `src/components/ui/use-form-field.ts` - useFormField hook (already existed)
- `src/components/ui/use-sidebar.ts` - useSidebar hook, SidebarContext (already existed)

### Commands Used
```bash
# Find all HMR violations
npm run lint 2>&1 | grep "react-refresh/only-export-components"

# Typecheck
npx tsc --noEmit

# Build
npm run build

# Count warnings (8 → 2 after refactor)
npm run lint 2>&1 | grep -c "react-refresh/only-export-components"
```

### Changes Made
1. **ErrorBoundary.tsx**: Added comment to DefaultFallback (internal component, not exported)
2. **form.tsx**: Moved FormFieldContext/FormItemContext → `form-contexts.ts`
3. **sidebar.tsx**: Imported useSidebar/SidebarContext from `use-sidebar.ts`, removed export
4. **sonner.tsx**: Removed toast re-export (consumers import from 'sonner' directly)
5. **toggle.tsx**: Moved toggleVariants → `toggle-variants.ts`
6. **toggle-group.tsx**: Updated import to use `toggle-variants.ts` directly
7. **useCart.tsx**: Removed re-export shim (consumers import from `use-cart.ts`)

### Remaining Warnings (Acceptable)
- `ErrorBoundary.tsx:16` - Class component with internal function component (architectural constraint)
- `useCart.tsx:20` - CartContext exported with CartProvider (provider pattern requirement)

These 2 warnings are architectural necessities and don't impact HMR in practice.

