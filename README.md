# Applewood Referral & Admissions Hub

Polished clickable demo for **Applewood Our House**, a family-owned residential memory care provider with five small homes in the Denver metro area.

Built for a ~90-second Loom sales demo: premium UI, instant load, and AI features that never break on camera (pre-written fallbacks when the API key is missing or a call fails).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- shadcn-style UI primitives + lucide-react
- Recharts
- `/api/draft` → Anthropic (`claude-sonnet-4-5`) with safe fallbacks
- Hardcoded sample data in `/src/data/*.ts`, no database, no auth

## Screens

1. **Overview**, KPIs, AI-prioritized actions, inquiries/tours chart
2. **Referral Partners**, filterable partner table, drawer, AI check-in draft
3. **Tour Follow-up**, messy notes → summary, family text, CRM tasks, lead score

## Getting started

```bash
npm install
```

Copy the env example (optional, the demo works without a key):

```bash
cp .env.example .env.local
```

Set your key if you want live AI drafts:

```bash
ANTHROPIC_API_KEY=sk-ant-...
```

Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Branding (demo)

| Token   | Value                                                                             |
| ------- | --------------------------------------------------------------------------------- |
| Homes   | Cherry Creek House, Highlands Cottage, Littleton Lodge, Aurora Home, Parker Place |
| Primary | `#2C5F4F`                                                                         |
| Accent  | `#C4785A`                                                                         |

All names, families, and numbers are fictional sample data.

## Deploy to Vercel

1. Push this repo to GitHub (or import the folder in the Vercel dashboard).
2. Create a new Vercel project → import the repo.
3. (Optional) Add `ANTHROPIC_API_KEY` under Project Settings → Environment Variables.
4. Deploy. Zero extra config required.

Or with the CLI:

```bash
npx vercel
```

## Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm run dev`   | Local development      |
| `npm run build` | Production build       |
| `npm start`     | Serve production build |
| `npm run lint`  | ESLint                 |

## Demo tips for Loom

- Start on **Overview**, click a High priority into **Referral Partners**.
- Open a Cold/Cooling partner → **Draft check-in with AI** → **Mark as sent**.
- Jump to **Tour Follow-up** → **Generate follow-up** (works with or without an API key).
