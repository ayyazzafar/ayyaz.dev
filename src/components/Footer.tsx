export function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ayyaz Zafar. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/ayyazzafar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://youtube.com/@AyyazTech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://linkedin.com/in/ayyazzafar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
