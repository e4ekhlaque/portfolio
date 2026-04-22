export default function Footer() {
  return (
    <footer className="text-center p-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <p className="text-sm">
        © 2026 Mohammad Ekhlaque. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mt-3">
        <a
          href="https://github.com/e4ekhlaque"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/mohammad-ekhlaque-7507a1298/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}