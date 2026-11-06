import Icon from "./Icon";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <a href="#" className={`group block ${p.wrapper}`}>
      <div className="relative overflow-hidden aspect-[4/3] bg-surface mb-6 rounded-sm">
        <div
          className={`absolute inset-0 ${p.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={`Project ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          style={{ objectPosition: "center" }}
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`text-xl md:text-2xl font-medium tracking-tight mb-2 ${p.titleHover} transition-colors`}>
            {p.title}
          </h3>
          <p className={`text-sm font-light ${p.categoryColor}`}>{p.category}</p>
        </div>
        <Icon
          icon="solar:arrow-right-up-linear"
          size={24}
          className={`text-muted ${p.arrowHover} transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1`}
        />
      </div>
    </a>
  );
}
