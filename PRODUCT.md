# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Owners and managers of small and medium service businesses (clinics, gyms, restaurants, retail, professional services) in the Philippines and Singapore. They lose leads to slow replies in Messenger, IG DMs, WhatsApp and Viber, and lose hours to manual encoding, quoting and payment checks. On the landing page they are deciding whether to book a free audit.

## Product Purpose
Alipato is a developer-led digital growth and IT solutions partner. It builds automated client-acquisition and operations pipelines for SMEs: websites, local SEO and AEO, 24/7 AI chat agents with deposit collection, back-office automation, mobile apps, and digital transformation audits. Success on the site means a booked free audit (via the Contact form, WhatsApp, phone or email).

## Positioning
Developer-led rather than a traditional agency. AI is embedded across the whole business lifecycle and deployed from reusable blueprints, so SMEs get full-stack infrastructure in days, not months. Local fluency is part of the offer: Taglish AI agents, GCash/Maya and PayNow deposits.

## Capabilities and Constraints
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 3, `@iconify/react` (Solar set), Inter via `next/font`.
- The audit form posts to `app/api/audit/route.ts` (Resend). Its route, environment keys and the GTM/favicon setup in `app/layout.tsx` are fixed.
- Service, process, pricing tier and project copy in `components/` and `lib/projects.ts` is product truth and is not rewritten.

## Brand Commitments
- Name "Alipato" (Tagalog for an ember/spark). Logo is `public/images/logo/logo.svg` (flame emblem + wordmark).
- Dark background with flame-orange accent `#FF5E1A`; crimson `#F21368` and violet `#9B23B6` come from the logo.
- Hero line: "Digital Growth, Engineered For Scale". Primary call to action: "Book a Free Audit". Secondary: "Explore our services".

## Evidence on Hand
- Four portfolio projects with images in `public/images` (`lib/projects.ts`).
- No client logos, testimonials, published prices or performance statistics beyond what the existing copy states. None may be invented.

## Product Principles
1. Every surface moves the visitor toward a free audit.
2. Plain, specific claims about what gets built, never vague transformation talk.
3. Speed is part of the offer, so the site itself must feel fast.
4. Local context (PH/SG channels and payment rails) is a strength to show, not hide.
