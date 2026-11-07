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
      className="scroll-mt-16 py-24 px-6 md:px-12 border-b border-line/50 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              Developer-Led by Design
            </h2>
            <p className="text-base md:text-lg font-light text-muted leading-relaxed mb-10 max-w-md">
              We are a digital growth and IT solutions partner led by developers,
              not a bloated traditional agency. We embed AI across the whole
              business lifecycle, so small and medium businesses get fast,
              full-stack digital infrastructure without the overhead.
            </p>
          </div>

          <div className="relative group">
            <div className="relative grid gap-px bg-line rounded-sm overflow-hidden">
              {markets.map((m) => (
                <div key={m.name} className="bg-canvas p-8">
                  <span className="text-xs font-light text-muted uppercase tracking-widest">
                    {m.name}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mt-2 mb-3">
                    {m.title}
                  </h3>
                  <p className="text-sm font-light text-muted leading-relaxed">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
