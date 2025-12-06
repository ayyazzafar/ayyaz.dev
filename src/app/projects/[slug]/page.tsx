import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { markdownToHtml } from "@/lib/markdown";
import { BrowserMockup } from "@/components/BrowserMockup";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Ayyaz Zafar`,
    description: project.description,
  };
}

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

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const contentHtml = project.content
    ? await markdownToHtml(project.content)
    : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="text-gray-400 hover:text-white transition-colors mb-8 inline-block"
      >
        &larr; Back to Projects
      </Link>

      <header className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
          <span
            className={`text-sm px-3 py-1 rounded border ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-xl text-gray-400 mb-6">
          {project.longDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 bg-gray-800 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>{typeLabels[project.type]}</span>
          <span>Started {project.started}</span>
          {project.completed && <span>Completed {project.completed}</span>}
        </div>
      </header>

      {(project.url || project.github) && (
        <div className="flex gap-4 mb-8">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Visit Project &rarr;
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Source
            </a>
          )}
        </div>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Screenshots</h2>
          <div className="space-y-6">
            {project.screenshots.map((screenshot, index) => (
              <BrowserMockup
                key={index}
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                url={project.url}
              />
            ))}
          </div>
        </section>
      )}

      {contentHtml && (
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      )}
    </div>
  );
}
