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
      className="bg-canvas px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-condensed text-outline mb-14 text-[22vw] font-semibold uppercase leading-[0.82] tracking-[-0.01em] md:mb-20 md:text-[15vw] lg:text-[11rem]">
          Services
        </h2>

        <ul className="border-b border-line">
          {services.map((s) => (
            <li
              key={s.title}
              className="group grid grid-cols-1 gap-6 border-t border-line py-10 md:py-14 lg:grid-cols-12 lg:gap-10"
            >
              <div className="flex items-start gap-5 lg:col-span-5">
                <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent md:h-14 md:w-14">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.9"
                    aria-hidden="true"
                  >
                    {s.svg}
                  </svg>
                </span>
                <h3 className="font-condensed text-balance text-4xl font-semibold uppercase leading-[0.92] text-fg md:text-5xl lg:text-6xl">
                  {s.title}
                </h3>
              </div>

              <div className="md:pl-[4.75rem] lg:col-span-7 lg:pl-0 lg:pt-2">
                <p className="max-w-[60ch] text-base font-light leading-relaxed text-muted md:text-lg">
                  {s.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-xs text-fg/80 transition-colors duration-300 group-hover:border-accent/30"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-accent">{s.meta}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
