import Link from "next/link";
import Icon from "./Icon";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="overflow-hidden border-t border-line/60 bg-canvas px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex items-end justify-between gap-6 md:mb-20">
          <h2 className="font-condensed text-[15vw] font-semibold uppercase leading-[0.84] tracking-[-0.01em] md:text-[10vw] lg:text-[8.5rem]">
            Selected <span className="text-outline">Work</span>
          </h2>
          <span className="hidden pb-3 text-sm text-muted md:block">
            ({String(projects.length).padStart(2, "0")} Projects)
          </span>
        </div>

        {/* Tilted, tightly packed board; hovering one card dims the rest. */}
        <div className="lg:-mx-[2%] lg:py-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:-rotate-[7deg] lg:grid-cols-4 [&:hover>a:not(:hover)]:opacity-55">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} className={i % 2 ? "sm:mt-12 lg:mt-20" : ""} />
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex h-12 items-center gap-2.5 rounded-full px-7 text-[15px] font-medium text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] transition duration-150 ease-out hover:bg-accent hover:text-canvas hover:shadow-none active:scale-[.985]"
          >
            View All Projects
            <Icon
              icon="solar:arrow-right-linear"
              size={17}
              className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
