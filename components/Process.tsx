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
      className="border-y border-line/60 bg-surface px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex items-end justify-between gap-6 md:mb-24">
          <h2 className="font-condensed text-[15vw] font-semibold uppercase leading-[0.84] tracking-[-0.01em] md:text-[10vw] lg:text-[8.5rem]">
            How We <span className="text-outline">Work</span>
          </h2>
          <span className="hidden pb-3 text-sm text-muted md:block">(04 Steps)</span>
        </div>

        <ol className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <li key={s.step} className="group relative">
              <span
                aria-hidden="true"
                className="font-condensed text-outline block text-[7.5rem] font-semibold leading-none transition-colors duration-500 group-hover:text-accent lg:text-[8rem]"
              >
                {s.step}
              </span>
              {/* Pipeline segment: the four steps read as one molten line. */}
              <div aria-hidden="true" className="mt-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <span className="h-px flex-1 bg-gradient-to-r from-accent/80 via-blaze/50 to-flame/20" />
              </div>
              <h3 className="font-condensed mt-7 text-3xl font-semibold uppercase leading-[0.95] text-fg md:text-[2.15rem]">
                <span className="sr-only">Step {s.step}: </span>
                {s.title}
              </h3>
              <p className="mt-4 max-w-[38ch] text-base font-light leading-relaxed text-muted">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
