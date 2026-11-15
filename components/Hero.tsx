import Icon from "./Icon";
import MoltenSphere from "./MoltenSphere";

/*
 * Desktop (lg+) is a fixed 1440×900 composition scaled to the stage width with
 * container query units (1cqw = 14.4px at 1440). Below lg the same layers flow
 * vertically and the sphere centres itself behind the headline.
 */

const headline =
  "font-condensed whitespace-nowrap text-[20vw] font-semibold uppercase leading-[0.86] tracking-[-0.012em] md:text-[16vw] lg:text-[11.11cqw]";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line/60 bg-canvas">
      <div className="container-inline relative isolate mx-auto flex min-h-[100svh] flex-col px-5 pb-10 pt-32 sm:px-8 md:min-h-0 md:pb-14 md:pt-36 lg:block lg:aspect-[1440/900] lg:min-h-0 lg:w-[min(100%,max(160svh,1024px))] lg:p-0">
        <MoltenSphere />

        {/* Headline: a solid copy under the sphere and an outline copy over it. */}
        <div
          data-sphere-anchor
          className="relative lg:absolute lg:left-[6.25cqw] lg:top-[14.86cqw]"
        >
          <h1 className={`${headline} relative z-[2] animate-rise`}>
            <span className="block">
              <span className="text-fg">Digital</span>{" "}
              <span className="block text-outline lg:inline">Growth,</span>
            </span>
            <span className="block text-fg">Engineered</span>
            <span className="block">
              <span className="text-molten">For Scale</span>
            </span>
          </h1>
          <div aria-hidden="true" className={`${headline} pointer-events-none absolute inset-0 z-[4] animate-rise`}>
            <span className="block">
              <span className="text-outline">Digital</span>{" "}
              <span className="block text-outline lg:inline">Growth,</span>
            </span>
            <span className="block text-fg">Engineered</span>
            <span className="block">
              <span className="text-outline-accent">For Scale</span>
            </span>
          </div>
        </div>

        <div
          className="relative z-[6] mt-auto max-w-md pt-16 animate-rise [animation-delay:.15s] md:mt-14 md:pt-0 lg:absolute lg:right-[4.86cqw] lg:top-[39.86cqw] lg:mt-0 lg:w-[26.67cqw] lg:max-w-none lg:pt-0"
        >
          <p className="max-w-[340px] text-base leading-[1.55] text-muted lg:text-[clamp(15px,1.18cqw,19px)] lg:max-w-[23.6cqw]">
            A digital growth and IT solutions partner building automated client
            acquisition and operations pipelines for SMEs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-5 min-[1400px]:flex-nowrap">
            <a
              href="#contact"
              className="group inline-flex h-[46px] items-center gap-2.5 whitespace-nowrap rounded-full bg-accent pl-[22px] pr-5 text-[15px] font-medium text-canvas transition duration-150 ease-out hover:-translate-y-px hover:brightness-110 active:translate-y-px active:scale-[.985]"
            >
              Book a Free Audit
              <Icon
                icon="solar:arrow-right-up-linear"
                size={17}
                className="transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#services"
              className="group relative inline-flex h-[46px] items-center gap-2 whitespace-nowrap text-[15px] font-medium text-fg"
            >
              <span className="border-b border-fg/35 pb-0.5 transition-colors duration-150 group-hover:border-accent">
                Explore our services
              </span>
              <Icon
                icon="solar:arrow-down-linear"
                size={17}
                className="transition-transform duration-150 ease-out group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative z-[6] mt-12 hidden flex-wrap gap-x-12 gap-y-2 border-t border-fg/10 pt-4 text-xs uppercase tracking-[0.14em] text-fg/45 md:flex lg:absolute lg:bottom-[3.61cqw] lg:left-[6.67cqw] lg:right-[4.86cqw] lg:mt-0 lg:gap-x-[3.9cqw]"
        >
          <span>Client acquisition</span>
          <span>Operations pipelines</span>
          <span>IT solutions</span>
          <span className="lg:ml-auto">Built for SMEs</span>
        </div>
      </div>
    </section>
  );
}
