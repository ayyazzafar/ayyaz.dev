import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
          ayyaz.dev
        </Link>
        <div className="flex gap-6">
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
