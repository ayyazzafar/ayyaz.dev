import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ayyaz Zafar | Full-Stack Developer",
  description: "Full-stack developer with 15+ years of experience. Building with React, Next.js, Node.js, and Laravel.",
  keywords: ["developer", "full-stack", "react", "nextjs", "nodejs", "laravel"],
  authors: [{ name: "Ayyaz Zafar" }],
  openGraph: {
    title: "Ayyaz Zafar | Full-Stack Developer",
    description: "Full-stack developer with 15+ years of experience.",
    url: "https://ayyaz.dev",
    siteName: "ayyaz.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayyaz Zafar | Full-Stack Developer",
    description: "Full-stack developer with 15+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
