import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "All Projects | Cendralis" };

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-6 md:px-12 border-b border-line/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h1 className="text-4xl md:text-7xl font-medium tracking-tighter">All Projects</h1>
            <span className="text-sm font-light text-muted hidden md:block">
              ({String(projects.length).padStart(2, "0")} Projects)
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
