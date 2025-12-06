import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  slug: string;
  title: string;
  status: "active" | "completed" | "paused" | "archived";
  type: "product" | "client" | "experiment" | "learning";
  description: string;
  longDescription?: string;
  tech: string[];
  url?: string;
  github?: string;
  started: string;
  completed?: string;
  featured?: boolean;
  order?: number;
  screenshots?: string[];
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        status: data.status,
        type: data.type,
        description: data.description,
        longDescription: data.longDescription,
        tech: data.tech || [],
        url: data.url,
        github: data.github,
        started: data.started,
        completed: data.completed,
        featured: data.featured || false,
        order: data.order || 999,
        screenshots: data.screenshots || [],
        content,
      } as Project;
    });

  return allProjects.sort((a, b) => (a.order || 999) - (b.order || 999));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}
