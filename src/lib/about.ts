import fs from "fs";
import path from "path";
import matter from "gray-matter";

const aboutPath = path.join(process.cwd(), "content/about.md");

export interface AboutData {
  name: string;
  title: string;
  location: string;
  bio: string;
  skills: string[];
  experience: string;
  content: string;
}

export function getAboutData(): AboutData | null {
  if (!fs.existsSync(aboutPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(aboutPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    name: data.name,
    title: data.title,
    location: data.location,
    bio: data.bio,
    skills: data.skills || [],
    experience: data.experience,
    content,
  };
}
