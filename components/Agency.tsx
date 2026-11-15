const stats = [
  { value: "<7", label: "Days to launch" },
  { value: "24/7", label: "AI lead response" },
];

const markets = [
  {
    name: "Philippines",
    title: "Chat & Payment Automation",
    text: "Most local commerce happens in Messenger, IG DMs and Viber. A Taglish-fluent AI agent answers instantly, collects a GCash/Maya deposit and logs the booking automatically.",
  },
  {
    name: "Singapore",
    title: "Speed-to-Lead & Efficiency",
    text: "A sub-second site tuned for the Map Pack and AI search, with instant WhatsApp lead routing, PayNow/Stripe deposits and automated quoting that saves 10+ admin hours a week.",
  },
];

export default function Agency() {
  return (
    <section
      id="agency"
      className="relative overflow-hidden border-t border-line/60 bg-surface px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      {/* A slow contour line, the hero's flow motif carried into About. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-fg/[.08]"
        fill="none"
        stroke="currentColor"
      >
        <path d="M-40 420C180 300 360 520 620 430S1040 160 1250 250 1500 420 1500 420" />
        <path d="M-40 470C200 360 380 560 640 480S1060 220 1270 300 1500 470 1500 470" />
      </svg>

      <div className="relative mx-auto max-w-[1440px]">
        <h2 className="font-condensed mb-14 text-[15vw] font-semibold uppercase leading-[0.84] tracking-[-0.01em] md:mb-20 md:text-[10vw] lg:text-[8.5rem]">
          Developer-Led <span className="text-outline">by Design</span>
        </h2>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <p className="max-w-md text-lg font-light leading-relaxed text-muted lg:col-span-5 lg:text-xl">
            We are a digital growth and IT solutions partner led by developers,
            not a bloated traditional agency. We embed AI across the whole
            business lifecycle, so small and medium businesses get fast,
            full-stack digital infrastructure without the overhead.
          </p>

          <div className="lg:col-span-7">
            {markets.map((m) => (
              <div
                key={m.name}
                className="grid grid-cols-[6.25rem_1fr] gap-4 border-t border-line py-8 last:border-b sm:grid-cols-[9rem_1fr] sm:gap-8 md:py-10"
              >
                <span className="pt-1 text-xs uppercase tracking-[0.16em] text-accent">
                  {m.name}
                </span>
                <div>
                  <h3 className="font-condensed text-3xl font-semibold uppercase leading-[0.95] text-fg md:text-4xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-[56ch] text-sm font-light leading-relaxed text-muted md:text-base">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
