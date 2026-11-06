import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-16 py-24 px-6 md:px-12 border-b border-line/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Selected Work
          </h2>
          <span className="text-sm font-light text-muted hidden md:block">
            (04 Projects)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <Link
            href="/projects"
            className="px-8 py-4 border border-line rounded-full text-sm font-medium hover:border-accent hover:bg-accent hover:text-canvas transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
