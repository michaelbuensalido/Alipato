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

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 py-24 px-6 md:px-12 border-b border-line/50 bg-canvas"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Service Packages
            </h2>
            <p className="text-base font-light text-muted max-w-xl">
              Modular packages built on reusable blueprints—so your business
              gets full-stack digital infrastructure and AI automation deployed
              in days, not months.
            </p>
          </div>
          <span className="text-sm font-light text-muted hidden md:block">
            (06 Tiers)
          </span>
        </div>

        {/* Core 4-Stage Value Ladder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreTiers.map((t) => (
            <div
              key={t.tier}
              className={`group relative rounded-sm p-8 md:p-10 flex flex-col justify-between border transition-colors duration-300 ${
                t.featured
                  ? "border-accent bg-surface"
                  : "border-line bg-surface/40 hover:border-accent/40 hover:bg-surface"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-light text-accent uppercase tracking-widest">
                    {t.tier}
                  </span>
                  {t.badge && (
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        t.featured
                          ? "bg-accent text-canvas"
                          : "border border-accent/30 text-accent"
                      }`}
                    >
                      {t.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-1">
                  {t.name}
                </h3>
                <p className="text-sm font-light text-accent mb-4">
                  {t.subtitle}
                </p>
                <p className="text-sm font-light text-muted leading-relaxed pb-6 mb-6 border-b border-line">
                  {t.bestFor}
                </p>

                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm font-light text-fg/80"
                    >
                      <Icon
                        icon="solar:check-circle-linear"
                        size={18}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-light text-muted mb-4">
                  {t.turnaround}
                </p>
                <a
                  href="/#contact"
                  className={`w-full inline-flex items-center justify-between px-6 py-3.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                    t.featured
                      ? "bg-accent text-canvas hover:bg-fg"
                      : "border border-line text-fg hover:border-accent hover:bg-accent hover:text-canvas"
                  }`}
                >
                  <span>{t.cta}</span>
                  <Icon icon="solar:arrow-right-up-linear" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* High-Ticket / Enterprise Packages */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-light text-muted uppercase tracking-widest">
              Custom Apps &amp; Advisory
            </span>
            <span className="text-xs font-light text-muted">
              50% upfront · 50% on launch
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enterpriseTiers.map((t) => (
              <div
                key={t.tier}
                className="border border-line rounded-sm p-8 md:p-10 flex flex-col justify-between hover:border-accent/40 hover:bg-surface transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-light text-accent uppercase tracking-widest">
                      {t.tier}
                    </span>
                    {t.badge && (
                      <span className="text-xs font-light border border-line text-muted px-3 py-1 rounded-full">
                        {t.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-1">
                    {t.name}
                  </h3>
                  <p className="text-sm font-light text-accent mb-4">
                    {t.subtitle}
                  </p>
                  <p className="text-sm font-light text-muted leading-relaxed pb-6 mb-6 border-b border-line">
                    {t.bestFor}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm font-light text-fg/80"
                      >
                        <Icon
                          icon="solar:check-circle-linear"
                          size={18}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-light text-muted mb-4">
                    {t.turnaround}
                  </p>
                  <a
                    href="/#contact"
                    className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-full border border-line text-sm font-medium hover:border-accent hover:bg-accent hover:text-canvas transition-colors duration-300"
                  >
                    <span>{t.cta}</span>
                    <Icon icon="solar:arrow-right-up-linear" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
