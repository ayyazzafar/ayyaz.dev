import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ayyaz Zafar",
  description: "A collection of projects I've built - products, client work, experiments, and learning projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  const activeProjects = projects.filter((p) => p.status === "active");
  const completedProjects = projects.filter((p) => p.status === "completed");
  const otherProjects = projects.filter(
    (p) => p.status !== "active" && p.status !== "completed"
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        A collection of things I&apos;ve built — products I maintain, client work,
        experiments, and learning projects.
      </p>

      {activeProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Active
          </h2>
          <div className="grid gap-6">
            {activeProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {completedProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            Completed
          </h2>
          <div className="grid gap-6">
            {completedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            Paused / Archived
          </h2>
          <div className="grid gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {projects.length === 0 && (
        <p className="text-gray-500 text-center py-12">
          No projects yet. Check back soon!
        </p>
      )}
    </div>
  );
}
