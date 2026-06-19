import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-colors duration-300">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold hover:opacity-75 transition-opacity duration-200"
        >
          HC
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            <Link
              href="/"
              className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 font-medium"
            >
              Project
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
