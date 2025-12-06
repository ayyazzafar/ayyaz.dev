import Link from "next/link";
import { Project } from "@/lib/projects";

const statusColors = {
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  paused: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  archived: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const typeLabels = {
  product: "Product",
  client: "Client Work",
  experiment: "Experiment",
  learning: "Learning",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <article className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors bg-gray-900/50">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded border ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-1 text-gray-500">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{typeLabels[project.type]}</span>
          <span>Started {project.started}</span>
        </div>
      </article>
    </Link>
  );
}
