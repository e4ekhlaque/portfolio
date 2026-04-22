export default function Navbar({ dark, toggleDark }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base font-medium">
          <a
            href="#home"
            className="hover:text-blue-500 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-500 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-blue-500 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-blue-500 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-blue-500 transition"
          >
            Contact
          </a>

          <button
            onClick={toggleDark}
            className="w-10 h-10 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}