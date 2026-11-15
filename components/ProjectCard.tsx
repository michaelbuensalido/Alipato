import Icon from "./Icon";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <a href="#" className={`group block ${p.wrapper}`}>
      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_theme(colors.line)]">
        <div
          className={`pointer-events-none absolute inset-0 z-10 ${p.overlay} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={`Project ${index + 1}`}
          loading="lazy"
          className="h-full w-full object-cover object-left-top opacity-80 grayscale transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className={`font-condensed text-3xl font-semibold uppercase leading-[0.95] text-fg/90 md:text-4xl ${p.titleHover} transition-colors`}
          >
            {p.title}
          </h3>
          <p className={`mt-2 text-sm ${p.categoryColor}`}>{p.category}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[inset_0_0_0_1px_theme(colors.line)] transition-colors duration-300 group-hover:bg-accent group-hover:text-canvas group-hover:shadow-none">
          <Icon
            icon="solar:arrow-right-up-linear"
            size={20}
            className={`text-muted ${p.arrowHover} transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-canvas`}
          />
        </span>
      </div>
    </a>
  );
}
