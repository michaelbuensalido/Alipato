import Coverflow from "./Coverflow";
import Icon from "./Icon";
import ShowcaseCard from "./ShowcaseCard";
import type { Visual } from "./Infographic";

type Tier = {
  tier: string;
  name: string;
  subtitle: string;
  visual: Visual;
  icon: string;
  featured?: boolean;
  badge?: string;
  turnaround: string;
  bestFor: string;
  features: string[];
};

const tiers: Tier[] = [
  {
    tier: "Tier 01",
    name: "Launchpad",
    visual: "web",
    icon: "solar:rocket-2-linear",
    subtitle: "Web + Local SEO + AEO Setup",
    badge: "Pilot slots available",
    turnaround: "One-time setup",
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
  },
  {
    tier: "Tier 02",
    name: "Search & AI Visibility",
    visual: "seo",
    icon: "solar:map-point-linear",
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
  },
  {
    tier: "Tier 03",
    name: "AI Chat & Payment Suite",
    visual: "chat",
    icon: "solar:chat-round-money-linear",
    subtitle: "Messenger / IG / WhatsApp AI + Auto-Pay",
    featured: true,
    badge: "Most Popular",
    turnaround: "Setup + monthly",
    bestFor:
      "Best for clinics, gyms, and service businesses losing leads to slow replies or manual GCash screenshot checks.",
    features: [
      "24/7 Taglish-fluent AI Sales Agent on FB Messenger, IG DM & WhatsApp",
      "Trained on your exact FAQs, services & pricing",
      "Automated booking deposit checkout via GCash & Maya (PayMongo / Xendit)",
      "Instant calendar slot lock on Google Calendar / Cal.com",
      "Zero manual screenshot verification or late replies",
    ],
  },
  {
    tier: "Tier 04",
    name: "AI Automation & Operations OS",
    visual: "automation",
    icon: "solar:routing-2-linear",
    subtitle: "Back-Office Integrations & Custom Systems",
    turnaround: "Setup + monthly",
    bestFor:
      "Best for teams spending hours on manual encoding, quoting, and follow-ups across disconnected tools.",
    features: [
      "Instant speed-to-lead Messenger / WhatsApp / Slack router (<10s response)",
      "Auto-sync leads to Google Sheets, Notion, HubSpot or Airtable",
      "Automated branded PDF quote & invoice generator",
      "Post-service automated review & SMS/chat reactivation triggers",
      "Custom Supabase operations dashboards",
    ],
  },
  {
    tier: "Tier 05",
    name: "Mobile App Development",
    visual: "mobile",
    icon: "solar:smartphone-linear",
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
  },
  {
    tier: "Tier 06",
    name: "Digital Transformation Audit",
    visual: "audit",
    icon: "solar:document-text-linear",
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
  },
];

export default function Pricing() {
  const featured = Math.max(0, tiers.findIndex((t) => t.featured));
  return (
    <section
      id="pricing"
      className="overflow-x-clip bg-canvas px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 grid grid-cols-1 items-end gap-8 md:mb-12 lg:grid-cols-12">
          <h2 className="font-condensed text-[15vw] font-semibold uppercase leading-[0.84] tracking-[-0.01em] md:text-[10vw] lg:col-span-8 lg:text-[8.5rem]">
            Service <span className="text-outline">Packages</span>
          </h2>
          <div className="lg:col-span-4 lg:pb-3">
            <span className="mb-4 hidden text-sm text-muted md:block">
              ({String(tiers.length).padStart(2, "0")} Tiers)
            </span>
            <p className="max-w-xl text-base font-light leading-relaxed text-muted">
              Modular packages built on reusable blueprints—so your business
              gets full-stack digital infrastructure and AI automation deployed
              in days, not months.
            </p>
          </div>
        </div>

        <Coverflow
          label="Service packages"
          initial={featured}
          slides={tiers.map((t) => ({
            key: t.tier,
            label: t.name,
            node: (
              <ShowcaseCard
                visual={t.visual}
                icon={t.icon}
                title={t.name}
                pill={t.tier.replace("Tier ", "")}
                badge={t.badge}
                subtitle={t.subtitle}
                description={t.bestFor}
                footer={
                  <>
                    <Icon icon="solar:clock-circle-linear" size={16} className="shrink-0 text-accent" />
                    <span>{t.turnaround}</span>
                  </>
                }
              >
                <ul className="mt-5 space-y-2.5 border-t border-white/[.08] pt-5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-fg/85">
                      <Icon icon="solar:check-circle-linear" size={16} className="mt-px shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </ShowcaseCard>
            ),
          }))}
        />

        <p className="mt-8 text-center text-sm text-muted">
          Tiers 05–06 (custom apps &amp; advisory): 50% upfront · 50% on launch
        </p>
      </div>
    </section>
  );
}
