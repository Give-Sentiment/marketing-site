@AGENTS.md

## Project Overview

Marketing site for **Sentiment**, a decentralized survey / Web3 data marketplace. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind v4. Live at **sentiment.biz**.

- Legal entity: GiveSentiment, Inc. (`info@givesentiment.com`)
- GitHub: [`Give-Sentiment/marketing-site`](https://github.com/Give-Sentiment/marketing-site), public repo, branch `main`
- No PR flow yet — changes are committed and pushed straight to `main` after local review on a dev server
- Hosting: Vercel, under the `david@givesentiment.com` account (Hobby plan) — **not** David's personal `cryptocorrell` Vercel account
- DNS: configured at Name.com. Both `sentiment.biz` and `www.sentiment.biz` resolve over valid HTTPS. The `www` → apex canonical redirect is **intentionally not set up yet** (deferred, not an oversight)
- This site was originally an untracked folder inside the `sentiment-reality-only` repo (the Scala/Babel SDK node project) on a since-deleted `marketing-site-draft` branch. It was split out into this standalone repo on 2026-06-26 to decouple the marketing site from the node codebase. If you ever see references to it living inside `sentiment-reality-only`, that's historical.

### GitHub auth gotcha
Pushes must be authenticated as **GiveSentimentAdmin**, not `cryptocorrell` (David's personal account, used for other projects). Both accounts are already logged in via `gh`. If `git push` fails with a `403`/`Permission ... denied to cryptocorrell`, run:
```
gh auth switch --user GiveSentimentAdmin
```
then retry — no fresh login needed.

### Local dev workflow notes
- `npm run dev` may already be running in another terminal/session — check with `netstat` (or just try the likely port) before starting a second one; Next.js will refuse with "Another next dev server is already running" if it detects the lock file, and silently picks a different port otherwise, which can cause you to check the wrong instance.
- To run an isolated instance for verification without disturbing an existing one: `npm run dev -- -p <port>`.
- No automated test suite exists. Verification is manual: dev server + `npx tsc --noEmit` + `npx eslint`.
- `node_modules` is not committed; if it's missing after a fresh clone/move, `npm install` first.

## What Sentiment actually is (for content/copy decisions)

The marketing site describes a real product implemented in the sibling repo `sentiment-reality-only` (Scala 3 node app, `sentiment-reality/` folder, built on the "Babel SDK"/Reality protocol). Keep marketing copy consistent with what's actually built:

- **Node identity = user identity.** There are no separate user accounts — a node's keypair is the identity. Every node can both create surveys and respond to them.
- **Surveys**: title + up to 10 open-text questions, WASM-verified on-chain before being accepted (no manual review).
- **Responses**: encrypted client-side (AES-GCM + RSA-OAEP) before leaving the device; verification happens on the proof, not the plaintext.
- **Deduplication**: one response per node per survey, enforced on-chain (checked in-memory + Supabase) — this is the basis for the "no bots, no duplicate farming" marketing claim.
- **Proof bundles**: each verified record gets a cryptographic proof bundle, a portable receipt anyone can check independently.
- **Reputation**: a daily background process scores nodes based on activity; higher reputation gets priority visibility for surveys created.
- **Rewards**: milestone-based token rewards (10, 25, 50, 100... verified responses), referred to in copy as **$SENT**. Not yet distributed on-chain as of the last check in `sentiment-reality-only`.
- **Buyers marketplace**: verified surveys + response counts, synced to Supabase (`reality_surveys`, `reality_responses`, `reality_proofs` tables) — this is what backs the "not scraped, not bot-filled" claim on `/buyers`.
- **Node operators / validators**: the `/node-program` page ("Founding Node Operator Program") is recruiting 20–30 technical operators to run validator nodes and stress-test consensus. This is explicitly **temporary** — once Sentiment's planned "SaaS frontend" ships, running a node won't be required to participate. Requirements pitched: 2+ CPU cores, 4+ GB RAM, Java 17, basic command-line/Docker comfort, ~1 hour first-time setup.
- The actual node setup (genesis/validator Docker Compose, ports 9000/9010/9030, etc.) lives in `sentiment-reality-only/sentiment-reality/` — see that repo's `CLAUDE.md` for implementation details. You generally won't need those details for marketing-site work, only the product behavior described above.

### Brand tension — read before any rebrand-adjacent content work
The underlying survey app (formerly `sentiment-dapp`, Vite + React 19 SPA) was renamed to **Freely** (`cryptocorrell/freely`) — a deliberate move *away* from the "Sentiment" name. This creates open tension: this marketing site and the `sentiment.biz` domain are branded "Sentiment," while the actual respondent/buyer-facing app may end up branded "Freely." It's undecided whether:
- Freely is a rebrand of the whole survey product (in which case `sentiment.biz` may be the wrong domain for it long-term), or
- Freely is a distinct app from the Sentiment/Reality node ecosystem this site describes.

Also undecided: whether the node (`sentiment-reality-only`) and app side fully decouple, and whether this marketing site eventually gets repointed at Freely instead. **Don't treat the current branding/domain/repo mapping as permanent** — favor reversible choices, and flag to David before any content change that assumes one resolution over the other.

## Site structure

```
src/app/
  page.tsx                    — homepage (Hero, DualPathSplit, HowItWorks, ProofOfTrust, node-program teaser, Cta)
  respondents/page.tsx         — for respondents: how earning/verification works, reward milestones
  buyers/page.tsx              — for buyers: data marketplace pitch, Formz waitlist embed
  protocol/page.tsx            — explains the Reality protocol (WASM verification, consensus, proof bundles, off-chain sync)
  node-program/page.tsx        — Founding Node Operator Program application, Formz embed
  about/page.tsx               — About Sentiment, two-column hero (copy + sentiment-logo-mirror.png)
  blog/page.tsx, blog/[slug]/page.tsx
  terms/page.tsx               — Terms of Service (linked in footer)
  privacy/page.tsx             — Privacy Policy (linked in footer)
  copyright-dispute-policy/page.tsx  — linked inline from Terms body only, NOT in footer (deliberate)
  rewards-policy/page.tsx           — linked inline from Terms body only, NOT in footer (deliberate)
  sitemap.ts, robots.ts, opengraph-image.tsx, layout.tsx (root metadata)

src/components/
  ui/        — Section, Container, Heading, Badge, Card, Button, StatCounter, Logo, SocialLinks
  layout/    — NavBar, Footer
  sections/  — Hero, DualPathSplit, HowItWorks, ProofOfTrust, Cta (reused across pages)
  json-ld/   — OrganizationJsonLd, WebSiteJsonLd
  integrations/FormzEmbed.tsx
  legal/LegalDocument.tsx

src/content/legal/   — terms.ts, privacy.ts, copyright-dispute-policy.ts, rewards-policy.ts
src/lib/site.ts       — SITE_NAME, SITE_TITLE, SITE_URL, SITE_DESCRIPTION
public/images/        — Sentiment-logo.svg, sentiment-logo-mirror.png, sentiment-favicon.png
```

Footer (`Footer.tsx`) intentionally only links Terms of Service and Privacy Policy in its bottom bar — Copyright Dispute Policy and Rewards Policy are reachable only via inline links inside the Terms page body. This was a deliberate instruction, not an oversight; don't "fix" it by adding them to the footer.

## Key conventions

- **Site-wide metadata**: `src/lib/site.ts` exports `SITE_NAME` ("Sentiment"), `SITE_TITLE` ("Official Sentiment website" — the `<title>` default), `SITE_URL` (env-driven, placeholder `https://example.com` until `NEXT_PUBLIC_SITE_URL` is set at deploy time), `SITE_DESCRIPTION` ("Sentiment is a decentralized Web3 data marketplace secured by the Reality protocol — verified responses, real rewards, trustworthy data."). These feed `layout.tsx` metadata, `OrganizationJsonLd`, `WebSiteJsonLd`. Per-page titles use the template `%s | Sentiment` (short brand name, independent of `SITE_TITLE`).
- **Favicon**: wired via `metadata.icons.icon` in `layout.tsx` pointing at `/images/sentiment-favicon.png` — **not** the Next.js `app/favicon.ico` file convention (that default file was deleted to avoid a duplicate/conflicting icon tag).
- **Legal documents**: `LegalDocument.tsx` takes a `heading` + a `content` template-literal string (from `src/content/legal/*.ts`), splits on blank lines into blocks, and renders each block as a paragraph (`whitespace-pre-line`, so single line breaks inside a block render as visual line breaks — used for bullet-less lists). Inline cross-links use `[label](/href)` markdown-lite syntax. **Heading detection**: a standalone single-line block is rendered as an `<h2>` if it ends in `?` (the original convention, used by Terms/Privacy, whose section headers are phrased as questions) **or** if it's explicitly prefixed with `## ` (added for Rewards Policy, whose headers — "Eligibility and Account Requirements," etc. — aren't questions). The `##` marker is additive; it doesn't change how Terms/Privacy render. Use `## ` for any new legal doc whose headers aren't question-phrased.
- **FormzEmbed** (`src/components/integrations/FormzEmbed.tsx`): wraps joinformz.com form embeds (`/buyers` and `/node-program` currently). Renders a dashed placeholder if no `formId` prop is given. Important quirk: `embed.js` only scans the DOM for `[data-formz-form]` **once**, on initial load — it has no `MutationObserver` and no re-init hook, and `next/script` dedupes by `src` so it won't re-fire on client-side route navigation. The component works around this by manually creating and appending a fresh `<script>` element via `useEffect` on every mount, forcing a re-scan.
- **Images**: use `next/image` with explicit `width`/`height` props (check actual pixel dimensions, e.g. via the PNG header, rather than guessing), sized for display via Tailwind `max-w-*` classes. `sentiment-logo-mirror.png` is 1024×1024.
- Tailwind v4, no `tailwind.config` — config lives in `globals.css` / PostCSS. No Prettier config file — relies on Prettier defaults (double quotes, matches existing code style).

## Decision log (reverse-chronological — don't re-litigate these)

- **2026-06-26/27**: Added `/copyright-dispute-policy` and `/rewards-policy`, linked only from inline text in `terms.ts` (not the footer), added to `sitemap.ts`. Effective/Last Updated dates set to **June 26, 2026** (matches Terms/Privacy). `[insert link]` placeholders pointing at Terms of Use / Privacy Policy were resolved to real `/terms` and `/privacy` links; placeholders for actual missing content (Designated Agent contact info) were left untouched, verbatim — don't invent values for those. A few obvious typos were fixed when transcribing the source text ("Notifcation"→"Notification", "an GiveSentiment Account"→"a GiveSentiment Account", "crypto-currently related"→"cryptocurrency-related", smart quotes normalized to straight quotes for consistency) — flagged to David, not reverted as of this writing.
- **2026-06-26/27**: Site title → "Official Sentiment website"; description iterated twice, settled on "Sentiment is a decentralized Web3 data marketplace secured by the Reality protocol — verified responses, real rewards, trustworthy data."
- **2026-06-26/27**: Favicon wired to `sentiment-favicon.png` via metadata; default Next.js `favicon.ico` removed.
- **2026-06-26/27**: About page hero restructured from a `grid md:grid-cols-2` to a `flex md:flex-row md:justify-between` layout specifically so the original paragraph width/wrapping (`max-w-2xl`) is preserved rather than being squeezed into a 50% column — `sentiment-logo-mirror.png` added to the right at `max-w-xs`/`md:max-w-sm`.
- **2026-06-26/27**: Footer LinkedIn URL updated to `linkedin.com/company/joinsentiment/` (was `givesentiment`).
- **2026-06-26/27**: Buyers page Formz waitlist embed wired up — went through two form-ID swaps before settling on `4db37644-ad4d-4171-881e-55bb89f2ecd4`; width matched to the Node Program page's embed (`max-w-3xl`) so the two forms render consistently sized.
- **2026-06-26**: `sentiment.biz` went live on Vercel; DNS configured at Name.com; `sentiment-dapp` renamed to **Freely** (see Brand tension above) — both same-day as the marketing-site repo split.

## Open items

- `www` → apex canonical redirect: deferred, not yet configured.
- Freely vs. Sentiment branding/domain question: unresolved (see Brand tension).
- Legal docs still have unfilled placeholders that aren't dates: Designated Agent contact info in the Copyright Dispute Policy (`[insert information from form]`), and any other bracketed content placeholders — these need real values from David/legal, don't fabricate them.
