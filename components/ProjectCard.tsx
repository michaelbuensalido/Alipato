import Icon from "./Icon";
import type { Project } from "@/lib/projects";

const DOTS =
  "bg-[radial-gradient(rgb(26_18_20/0.2)_1.3px,transparent_1.6px)] bg-[size:12px_12px]";

/** Square-cornered project card: pastel screenshot panel over a light body. */
export default function ProjectCard({ project: p, className = "" }: { project: Project; className?: string }) {
  return (
    <a
      href={p.href}
      className={`group relative flex flex-col bg-[#FBF9F7] text-[#1A1214] transition duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:shadow-[0_30px_50px_-22px_rgba(0,0,0,.95),0_0_0_2px_theme(colors.accent)] focus-visible:z-10 focus-visible:outline-offset-0 ${className}`}
    >
      {/* Screenshot panel */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: p.tint }}>
        <span aria-hidden="true" className={`absolute left-0 top-3 h-20 w-28 ${DOTS}`} />
        <span aria-hidden="true" className={`absolute bottom-6 right-0 h-24 w-24 ${DOTS}`} />
        <div className="absolute inset-x-6 bottom-0 top-8 overflow-hidden shadow-[0_14px_30px_-12px_rgba(26,18,20,.5)] transition-transform duration-500 ease-out group-hover:-translate-y-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`${p.title} website`}
            loading="lazy"
            className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#1A1214]/55">{p.summary}</p>
        <div className="mt-auto flex items-center justify-between gap-3 whitespace-nowrap pt-6">
          <span className="inline-flex h-11 shrink-0 items-center gap-2 bg-[#1A1214] px-4 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-accent">
            View project
            <Icon
              icon="solar:arrow-right-up-linear"
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
          <span className="truncate text-right text-[13px] font-medium text-[#1A1214]/70">{p.category}</span>
        </div>
      </div>
    </a>
  );
}
