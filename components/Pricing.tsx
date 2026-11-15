import Icon from "./Icon";

type Tier = {
  tier: string;
  name: string;
  subtitle: string;
  featured?: boolean;
  badge?: string;
  turnaround: string;
  bestFor: string;
  features: string[];
  cta: string;
};

const coreTiers: Tier[] = [
  {
    tier: "Tier 01",
    name: "Launchpad",
    subtitle: "Web + Local SEO + AEO Setup",
    badge: "Pilot slots available",
    turnaround: "One-time setup ",
    bestFor:
      "Best for local businesses needing a fast, high-converting website that ranks on Google and AI search.",
    features: [
      "5-page custom responsive website",
      "Google Business Profile (GBP) optimization",
      "Technical SEO & Answer Engine Optimization (llms.txt + JSON-LD schema)",
      "AI Q&A blocks for ChatGPT, Perplexity & Google AI Overviews",
      "Spam-protected lead capture forms",
      "High-speed Cloudflare / Vercel hosting",
    ],
    cta: "Book an Appointment",
  },
  {
    tier: "Tier 02",
    name: "Search & AI Visibility",
    subtitle: "Monthly SEO + AEO Retainer",
    turnaround: "Monthly retainer · Ongoing growth",
    bestFor:
      "Best for established brands looking to dominate local Map Pack rankings and AI recommendations every month.",
    features: [
      "Monthly Google Business Profile posts & photo updates",
      "2–4 programmatic local & AI-search Q&A pages per month",
      "Local directory & citation building",
      "Automated Google Review funnel link",
      "Search Console & AI citation tracking report",
    ],
    cta: "Contact Us",
  },
  {
    tier: "Tier 03",
    name: "AI Chat & Payment Suite",
    subtitle: "Messenger / IG / WhatsApp AI + Auto-Pay",
    featured: true,
    badge: "Most Popular",
    turnaround: "Setup + monthly ",
    bestFor:
      "Best for clinics, gyms, and service businesses losing leads to slow replies or manual GCash screenshot checks.",
    features: [
      "24/7 Taglish-fluent AI Sales Agent on FB Messenger, IG DM & WhatsApp",
      "Trained on your exact FAQs, services & pricing",
      "Automated booking deposit checkout via GCash & Maya (PayMongo / Xendit)",
      "Instant calendar slot lock on Google Calendar / Cal.com",
      "Zero manual screenshot verification or late replies",
    ],
    cta: "Book an Appointment",
  },
  {
    tier: "Tier 04",
    name: "AI Automation & Operations OS",
    subtitle: "Back-Office Integrations & Custom Systems",
    turnaround: "Setup + monthly ",
    bestFor:
      "Best for teams spending hours on manual encoding, quoting, and follow-ups across disconnected tools.",
    features: [
      "Instant speed-to-lead Messenger / WhatsApp / Slack router (<10s response)",
      "Auto-sync leads to Google Sheets, Notion, HubSpot or Airtable",
      "Automated branded PDF quote & invoice generator",
      "Post-service automated review & SMS/chat reactivation triggers",
      "Custom Supabase operations dashboards",
    ],
    cta: "Contact Us",
  },
];

const enterpriseTiers: Tier[] = [
  {
    tier: "Tier 05",
    name: "Mobile App Development",
    subtitle: "Cross-Platform iOS & Android",
    badge: "Shipped in 3–4 weeks",
    turnaround: "Custom build + App Store maintenance",
    bestFor:
      "Best for multi-branch clinics, gyms, and retail brands ready for a dedicated iOS & Android app.",
    features: [
      "Single codebase deployment to Apple App Store & Google Play",
      "Push notifications, loyalty programs & VIP booking flows",
      "Internal staff management & Supabase backend",
      "App Store & Play Store submission and ongoing maintenance",
    ],
    cta: "Book an Appointment",
  },
  {
    tier: "Tier 06",
    name: "Digital Transformation Audit",
    subtitle: "Productized Advisory & Roadmap",
    badge: "1-Day Audit",
    turnaround: "Fixed-scope audit · Optional Fractional CTO",
    bestFor:
      "Best for growing SMEs (20–50+ staff) that need a clear automation and software roadmap before investing in a build.",
    features: [
      "2-hour deep-dive interview with your management & ops team",
      "Full audit of disjointed SaaS tools & manual data bottlenecks",
      "Comprehensive 15-page Digital Transformation Roadmap PDF",
      "Actionable architecture blueprint before any software spend",
    ],
    cta: "Book an Appointment",
  },
];

function TierCard({ t, compact = false }: { t: Tier; compact?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[18px] p-7 transition-colors duration-300 md:p-10 ${
        t.featured
          ? "bg-surface shadow-[inset_0_0_0_1px_theme(colors.accent)]"
          : "bg-surface/50 shadow-[inset_0_0_0_1px_theme(colors.line)] hover:bg-surface"
      }`}
    >
      {t.featured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(255_94_26/0.22),transparent_65%)]"
        />
      )}
      <div className="relative">
        <h3
          className={`font-condensed text-balance font-semibold uppercase leading-[0.92] text-fg ${
            compact ? "text-4xl md:text-[2.75rem]" : "text-4xl md:text-5xl"
          }`}
        >
          {t.name}
        </h3>
        <p className="mt-3 text-sm text-accent">{t.subtitle}</p>
        {t.badge && (
          <span
            className={`mt-5 inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
              t.featured
                ? "bg-accent text-canvas"
                : "text-fg/80 shadow-[inset_0_0_0_1px_theme(colors.line)]"
            }`}
          >
            {t.badge}
          </span>
        )}
        <p className="mb-7 mt-5 border-b border-line pb-7 text-sm font-light leading-relaxed text-muted">
          {t.bestFor}
        </p>

        <ul className="mb-10 space-y-3">
          {t.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm font-light leading-relaxed text-fg/85">
              <Icon
                icon="solar:check-circle-linear"
                size={18}
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <p className="mb-4 text-xs text-muted">
          <span className="uppercase tracking-[0.16em] text-accent">{t.tier}</span>
          <span aria-hidden="true"> · </span>
          {t.turnaround}
        </p>
        <a
          href="/#contact"
          className={`group/cta inline-flex h-12 w-full items-center justify-between rounded-full px-6 text-[15px] font-medium transition duration-150 ease-out active:scale-[.99] ${
            t.featured
              ? "bg-accent text-canvas hover:brightness-110"
              : "text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] hover:bg-accent hover:text-canvas hover:shadow-none"
          }`}
        >
          <span>{t.cta}</span>
          <Icon
            icon="solar:arrow-right-up-linear"
            size={17}
            className="transition-transform duration-150 ease-out group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-canvas px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 grid grid-cols-1 items-end gap-8 md:mb-20 lg:grid-cols-12">
          <h2 className="font-condensed text-[15vw] font-semibold uppercase leading-[0.84] tracking-[-0.01em] md:text-[10vw] lg:col-span-8 lg:text-[8.5rem]">
            Service <span className="text-outline">Packages</span>
          </h2>
          <div className="lg:col-span-4 lg:pb-3">
            <span className="mb-4 hidden text-sm text-muted md:block">(06 Tiers)</span>
            <p className="max-w-xl text-base font-light leading-relaxed text-muted">
              Modular packages built on reusable blueprints—so your business
              gets full-stack digital infrastructure and AI automation deployed
              in days, not months.
            </p>
          </div>
        </div>

        {/* Core 4-Stage Value Ladder */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {coreTiers.map((t) => (
            <TierCard key={t.tier} t={t} />
          ))}
        </div>

        {/* High-Ticket / Enterprise Packages */}
        <div className="mt-20">
          <div className="mb-6 flex flex-col justify-between gap-2 border-t border-line pt-6 sm:flex-row sm:items-center">
            <span className="font-condensed text-2xl font-semibold uppercase text-fg md:text-3xl">
              Custom Apps &amp; Advisory
            </span>
            <span className="text-sm text-muted">50% upfront · 50% on launch</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2">
            {enterpriseTiers.map((t) => (
              <TierCard key={t.tier} t={t} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
