import Link from "next/link";
import Icon from "./Icon";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-line/60 bg-canvas px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex items-end justify-between gap-6 md:mb-20">
          <h2 className="font-condensed text-[15vw] font-semibold uppercase leading-[0.84] tracking-[-0.01em] md:text-[10vw] lg:text-[8.5rem]">
            Selected <span className="text-outline">Work</span>
          </h2>
          <span className="hidden pb-3 text-sm text-muted md:block">(04 Projects)</span>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
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
