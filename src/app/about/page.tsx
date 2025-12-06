import { getAboutData } from "@/lib/about";
import { markdownToHtml } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ayyaz Zafar",
  description: "Full-stack developer with 15+ years of experience. Learn more about my background, skills, and what I'm working on.",
};

export default async function AboutPage() {
  const aboutData = getAboutData();

  if (!aboutData) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-400">About page content coming soon...</p>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(aboutData.content);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-2">{aboutData.name}</h1>
      <p className="text-xl text-gray-400 mb-2">{aboutData.title}</p>
      <p className="text-gray-500 mb-8">{aboutData.location}</p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-4">Background</h2>
          <p className="text-gray-400 leading-relaxed">{aboutData.bio}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Experience</h2>
          <p className="text-gray-400">{aboutData.experience}</p>
        </div>
      </div>

      {aboutData.skills.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {aboutData.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
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
