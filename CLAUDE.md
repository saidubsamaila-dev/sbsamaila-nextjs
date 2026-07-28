# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # prisma generate + next build (used by Netlify)
npm run start    # Serve the production build
npm run lint     # next lint (ESLint)
```

Prisma:

```bash
npx prisma generate        # Regenerate client (also runs on postinstall + build)
npx prisma migrate dev     # Create/apply a migration in dev
npx prisma db push         # Push schema without a migration
npx prisma studio          # Inspect the database in the browser
```

There is no test suite. Verify changes by running `npm run dev` and exercising the UI/API routes manually.

## Architecture

Next.js 14 App Router site for a Nigerian chartered-accounting firm (Saidu B. Samaila & Co.). Two distinct surfaces share one Next app:

1. **Marketing site** (`app/page.tsx`) — a single-page composition of section components from `components/` (Hero, About, Services, Training, Contact, etc.). It's a client component that handles smooth-scroll to hash anchors. `Navbar` is rendered globally in `app/layout.tsx`.
2. **Chamco training funnel** (`app/chamco/`) — an AI-training enrollment flow with paid checkout, plus `payment-success`. Uses `ChamcoEnrollForm`, `ChamcoVideoHero`, `ChamcoBanner`.
3. **Admin dashboards** (`app/admin/callbacks`, `app/admin/enrollments`) — client pages that read from the API routes. ⚠️ **No auth layer** — these currently expose enrollment and callback data without authentication. Add auth middleware before production use.

### Data layer

- **Prisma + PostgreSQL (Neon)**. Schema in [prisma/schema.prisma](prisma/schema.prisma). Three models: `CallbackRequest` (contact form leads), `DiscountCode` (salesperson referral codes), `Enrollment` (paid course signups).
- Prisma client is a global singleton in [lib/prisma.ts](lib/prisma.ts) to survive dev hot-reload.
- Requires two env vars: `DATABASE_URL` (pooled, pgbouncer) and `DIRECT_URL` (direct connection for migrations). See [.env.example](.env.example).

### Payments (important legacy naming)

The payment gateway is **Fincra**, but the codebase was migrated from Paystack and the old names persist:

- Active routes: [app/api/fincra/checkout/route.ts](app/api/fincra/checkout/route.ts) (forwards signed requests to the payment proxy) and [app/api/fincra/webhook/route.ts](app/api/fincra/webhook/route.ts) (verifies `charge.successful`).
- Dead/legacy routes still present: `app/api/paystack/*`. Prefer Fincra when adding payment logic. ⚠️ **Remove the live Paystack key** from `.env` and revoke it in the Paystack dashboard — it's unused and a security liability.
- The `Enrollment.paystackRef` column stores the **Fincra** reference — the column name was not renamed. Don't be misled by it.
- The webhook verifies an **HMAC SHA-512** signature (header `signature`) against `FINCRA_WEBHOOK_SECRET`, and is **idempotent** via a `findUnique` on the reference before creating an enrollment.
- Program prices are hardcoded in the checkout route's `PROGRAM_PRICES` map (amounts in major currency units, e.g. dollars). The `GET` handler serves display prices to the enrollment form — update prices there.
- Amounts are stored in **minor units** (`amountKobo`, ×100) for display formatting.

### Payment Proxy (Static IP Whitelisting)

The Vercel checkout route no longer calls Fincra directly. Instead, it forwards **HMAC-signed requests** to a **payment proxy** running on Google Cloud (`pay.sbsamailaaccountants.com`) with a reserved static IP.

**Why:** Fincra's live API requires a whitelisted static IP. Vercel's free tier has dynamic egress IPs. The proxy isolates the Fincra secret key (which lives only on the VPS) and ensures all outbound API calls originate from a single, whitelisted IP. The webhook (inbound, Fincra → Vercel) stays on Vercel and needs no static IP.

**Architecture:**
```
Browser → Vercel /api/fincra/checkout (signs request)
  → Payment Proxy on GCP (136.113.9.240, Caddy + Node.js)
    → Fincra API (outbound from static IP)
Fincra webhook → Vercel /api/fincra/webhook (unchanged)
```

**Setup & Deployment:** See [payment-proxy/README.md](payment-proxy/README.md) for complete instructions (Oracle Cloud Always Free or GCP e2-micro, Caddy auto-HTTPS, systemd).

**Environment Variables (Vercel, Production scope):**
- `PAYMENT_PROXY_URL`: The proxy's HTTPS endpoint (e.g., `https://pay.sbsamailaaccountants.com`)
- `PROXY_SHARED_SECRET`: HMAC-SHA256 shared secret for request signing/verification (generate: `openssl rand -hex 32`)
- **Remove from Vercel:** `FINCRA_SECRET_KEY`, `FINCRA_PUBLIC_KEY`, `FINCRA_BUSINESS_ID` (these live only on the proxy VPS in `/opt/fincra-proxy/.env`)
- **Keep on Vercel:** `FINCRA_WEBHOOK_SECRET` (webhook signature verification happens on Vercel)

**Testing:** Use `FINCRA_SANDBOX=true` + sandbox credentials on the proxy first. Verify sandbox checkout works, then switch to live credentials and whitelist the proxy IP in Fincra's dashboard.

### Email

[lib/email.ts](lib/email.ts) sends admin alerts and registrant confirmations via the Resend HTTP API (`RESEND_API_KEY`, `EMAIL_FROM`). If `RESEND_API_KEY` is unset it **logs instead of failing** — safe in dev. The webhook fires these emails fire-and-forget (`.catch`) so it can return fast.

### Conventions

- Path alias `@/*` maps to the repo root (e.g. `@/lib/prisma`, `@/components/Hero`).
- Styling is Tailwind CSS (`app/globals.css`, `tailwind.config`).
- API routes return `NextResponse.json` with explicit status codes; Prisma unique-violation is caught as error code `P2002` (409).

## Deployment

**Primary:** Deploys to **Vercel** (production). Git commits to `main` trigger automatic deployments.

**Legacy:** A `netlify.toml` with `@netlify/plugin-nextjs` exists (Node 20 build); if deploying to Netlify, the build runs `prisma generate && next build`. A `.vercel` directory also exists from earlier configuration.

**Build:** `prisma generate && next build` (runs on postinstall and before build).

**Config:** `next.config.js` whitelists remote images from `www.sbsamailaaccountants.com`.
