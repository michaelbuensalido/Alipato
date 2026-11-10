const steps = [
  {
    step: "01",
    title: "Discovery & Auditing",
    time: "30 minutes",
    text: "We audit your website, Google Map Pack listing and Messenger response speed to find missing AEO schema, slow load times and manual inquiry bottlenecks.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    time: "2 hours",
    text: "AI UI generators and our Tailwind component library spin up a live, interactive homepage preview before you sign anything.",
  },
  {
    step: "03",
    title: "Web, AEO & Automation Build",
    time: "6–10 hours",
    text: "We deploy your site with auto-generated AEO files (llms.txt + JSON-LD), then set up your AI agent, payment gateway and CRM integration from proven blueprints.",
  },
  {
    step: "04",
    title: "Handoff & Ongoing Support",
    time: "Day 14+",
    text: "A short video walkthrough shows leads flowing from website and Messenger to payment to your sheet. Then we keep it growing with monthly SEO/AEO and automation maintenance.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 border-b border-line/50 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            How We Work
          </h2>
          <span className="text-sm font-light text-muted hidden md:block">
            (04 Steps)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="group border border-line rounded-sm p-8 flex flex-col gap-6 hover:border-accent/40 hover:bg-surface transition-colors duration-500"
            >
              <span className="text-sm font-light text-accent">{s.step}</span>
              <div>
                <h3 className="text-xl font-medium tracking-tight mb-2">
                  {s.title}
                </h3>

                <p className="text-sm font-light text-muted leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
