import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I&apos;m Ayyaz Zafar
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Full-stack developer with 15+ years of experience building web applications
          with React, Next.js, Node.js, and Laravel.
        </p>
        <p className="text-gray-500 mb-8">
          I create YouTube tutorials at{" "}
          <a
            href="https://youtube.com/@AyyazTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            AyyazTech
          </a>
          , build products, and work with clients on interesting problems.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Currently Working On */}
      <section className="mt-16 p-6 border border-gray-800 rounded-lg bg-gray-900/30">
        <h2 className="text-lg font-semibold text-white mb-3">Currently Working On</h2>
        <ul className="space-y-2 text-gray-400">
          <li>
            <span className="text-green-400">●</span> AyyazTech YouTube - Git Mastery Series
          </li>
          <li>
            <span className="text-green-400">●</span> Building developer tools and automations
          </li>
        </ul>
      </section>
    </div>
  );
}
