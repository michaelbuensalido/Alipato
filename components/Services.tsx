const services = [
  {
    title: "Web & Mobile Development",
    description:
      "Sub-second HTML/Tailwind websites with spam-protected lead forms, plus cross-platform iOS & Android apps for brands that outgrow a mobile site: push notifications, loyalty programs, VIP bookings and staff tools.",
    tags: [
      "5-page custom site",
      "Cloudflare / Vercel",
      "Expo / FlutterFlow",
      "Supabase",
    ],
    meta: "Sites live in under 7 days · Apps in 3–4 weeks",
    iconBox: "group-hover:text-accent group-hover:border-accent/30",
    tag: "border-accent/20 text-accent",
    svg: (
      <>
        <rect x="3" y="3" width="12" height="12" transform="rotate(45 9 9)" />
        <rect x="9" y="9" width="12" height="12" transform="rotate(45 15 15)" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    title: "Local SEO & AEO",
    description:
      "Rank on the Google Map Pack and get cited by ChatGPT, Gemini, Perplexity and Google AI Overviews. We add the machine-readable context traditional websites lack, then keep it fresh every month.",
    tags: [
      "Google Business Profile",
      "llms.txt",
      "LocalBusiness JSON-LD",
      "AI citation tracking",
    ],
    meta: "One-time setup or monthly retainer",
    iconBox: "group-hover:text-accent group-hover:border-accent/30",
    tag: "border-accent/20 text-accent",
    svg: (
      <>
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="10" ry="3" />
        <ellipse cx="12" cy="12" rx="3" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </>
    ),
  },
  {
    title: "AI Agents & Automation",
    description:
      "24/7 AI sales agents on Messenger, Instagram and WhatsApp that answer inquiries instantly, collect booking deposits via GCash, Maya, PayNow or Stripe, and sync every lead into your CRM, calendar and invoicing with zero data entry.",
    tags: [
      "Messenger / IG / WhatsApp",
      "n8n / Make",
      "PayMongo / Stripe",
      "Google Sheets / CRM",
    ],
    meta: "Agent deployed in under 90 minutes",
    iconBox: "group-hover:text-accent group-hover:border-accent/30",
    tag: "border-accent/20 text-accent",
    svg: (
      <>
        <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" />
        <polygon points="12 6 17 9 17 15 12 18 7 15 7 9" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="3" y1="7" x2="7" y2="9" />
        <line x1="21" y1="7" x2="17" y2="9" />
        <line x1="3" y1="17" x2="7" y2="15" />
        <line x1="21" y1="17" x2="17" y2="15" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </>
    ),
  },
  {
    title: "Digital Consulting",
    description:
      "A productized AI Workflow & Digital Audit for growing businesses with disjointed tools and manual bottlenecks. We interview your team and deliver a clear Digital Transformation Roadmap you can act on.",
    tags: ["1-day audit", "15-page roadmap", "Fractional CTO"],
    meta: "Fixed scope, no open-ended hourly billing",
    iconBox: "group-hover:text-accent group-hover:border-accent/30",
    tag: "border-accent/20 text-accent",
    border: "border-b",
    svg: (
      <>
        <path d="M2 12C2 12 7 4 12 4C17 4 22 12 22 12C22 12 17 20 12 20C7 20 2 12 2 12Z" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="4" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="20" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 border-b border-line/50 bg-canvas"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Services
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col w-full">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group border-t border-line py-8 md:py-12 ${s.border ?? ""}`}
              >
                <div className="flex items-start gap-6 md:gap-8">
                  <div
                    className={`hidden sm:flex shrink-0 w-14 h-14 rounded-full border border-line items-center justify-center text-muted/70 ${s.iconBox} group-hover:scale-110 transition-all duration-500`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                    >
                      {s.svg}
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-light text-muted/70 tracking-widest">
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-fg/80 group-hover:text-fg transition-colors duration-300 mb-4">
                      {s.title}
                    </h3>
                    <div className="hidden group-hover:block animate-[fadeIn_0.3s_ease-in-out]">
                      <p className="text-base text-muted font-light max-w-xl">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className={`text-xs font-light border rounded-full px-3 py-1 ${s.tag}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-light text-muted mt-4">
                        {s.meta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
