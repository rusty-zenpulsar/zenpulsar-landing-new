# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ZENPULSAR landing page - a modern Next.js 15 application featuring AI-powered commodities intelligence platform. The site showcases trading signals, geopolitical risk analysis, and multi-agent AI systems.

**Tech Stack**: Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, MDX, Cloudflare Workers

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (likely already running - avoid restarting unnecessarily)
pnpm dev

# Linting
pnpm lint

# Production build (includes Cloudflare Workers build via @opennextjs/cloudflare)
pnpm build

# Full build (Next.js + Cloudflare)
pnpm build:full

# Preview Cloudflare Workers locally
pnpm preview

# Deploy to Cloudflare Workers
pnpm deploy

# Generate Cloudflare types
pnpm cf-typegen
```

## Architecture

### Deployment Model

**IMPORTANT**: This project uses **Cloudflare Workers** (NOT Cloudflare Pages) with `@opennextjs/cloudflare`. The build process:
1. `next build` creates Next.js production build
2. `opennextjs-cloudflare build` generates `.open-next/worker.js` and `.open-next/assets/`
3. `wrangler deploy` deploys to Cloudflare Workers

### Page Structure

Single-page application with client-side state management in `src/app/page.tsx`:
- Hero → Overview → Offerings → Why It Matters → Pricing → CTA → Footer
- Modal system for demo form and success confirmation
- Floating demo button with scroll detection

### Key Components

**Layout**: Header, Footer
**Sections**: Hero, Overview, Offerings, WhyItMatters, Pricing, CTA (all in `src/components/sections/`)
**Forms**: FormModal, SuccessModal, DemoForm with Slack integration
**UI**: shadcn/ui components in `src/components/ui/`
**Common**: Wave, SectionDivider, FloatingDemoButton, FadeInSection

### Form Submission Flow

1. User fills demo form → `FormModal` component
2. Form submits to `/api/demo` → Next.js API route (`src/app/api/demo/route.ts`)
3. API validates and sends to Slack using `@slack/web-api` (`src/lib/slack.ts`)
4. Success modal shown with user email

**Slack Integration**: Uses Slack App API (Bot Token), NOT webhooks. Requires `SLACK_BOT_TOKEN` and `SLACK_CHANNEL_ID` in environment.

### Content Management

MDX files in `src/content/` allow Markdown with React components. Configuration in `next.config.ts` with `@next/mdx` and `remark-gfm`.

### Brand System

Centralized in `src/lib/brand.ts`:
- **Colors**: Fuchsia (#C926D4), Electric Blue (#2926CF)
- **Gradient**: `linear-gradient(135deg, #C926D4 0%, #2926CF 100%)`
- **Logo variants**: primary, negative (white), positive (high contrast)
- **Wave element**: Signature visual representing data waves

CSS variables in `src/app/globals.css`:
```css
--zp-fuchsia: rgb(201, 38, 212)
--zp-electric-blue: rgb(41, 38, 207)
```

## Important Notes

### Terminal Commands
Always append `| cat` to git commands that may require interaction (e.g., `git log | cat`, `git status | cat`)

### MCP Servers Available
1. **github** - GitHub operations
2. **context7** - Search latest documentation for libraries and frameworks

### Development Guidelines
- All code/docs in English unless requested otherwise
- Don't run `pnpm dev` every time - likely already running; prefer `pnpm lint` or `pnpm build`
- Use latest documentation via context7 MCP tools for dependencies
- Avoid creating unnecessary files - edit existing when possible

### Environment Variables

Required in `.dev.vars` (local) and Cloudflare Workers secrets (production):

```env
# Slack App Integration (NOT webhook)
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_CHANNEL_ID=C1234567890
SLACK_CLIENT_ID=your-client-id
SLACK_CLIENT_SECRET=your-client-secret
SLACK_SIGNING_SECRET=your-signing-secret

# Other services
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_SITE_URL=https://zenpulsar.com
```

### TypeScript Types

Core types in `src/lib/types.ts`:
- `DemoFormData`: Form submission structure
- `SlackMessage`, `SlackBlock`: Slack API payloads
- `SiteConfig`: Site metadata
- `OfferingContent`: Content structure

## Content Reference

Marketing copy and page structure defined in `docs/Zenpulsar Website v.2.md`. Use this as the source of truth for:
- Headlines and messaging
- Pain points and value propositions
- Product descriptions
- Use cases and solutions
- CTA copy
