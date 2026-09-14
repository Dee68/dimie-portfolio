import { useEffect, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Dimie<span className="text-slate-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            Skills
          </a>

          <a
            href="#education"
            className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Desktop Controls */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-900"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀' : '☾'}
          </button>

          <a
            href="https://github.com/Dee68"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-900 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="border-b border-slate-200 py-3 text-sm text-slate-600 transition hover:text-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-slate-200 py-3 text-sm text-slate-600 transition hover:text-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="border-b border-slate-200 py-3 text-sm text-slate-600 transition hover:text-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-slate-200 py-3 text-sm text-slate-600 transition hover:text-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="border-b border-slate-200 py-3 text-sm text-slate-600 transition hover:text-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white"
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-3 text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="mt-3 rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-900"
            >
              {darkMode ? '☀ Light Mode' : '☾ Dark Mode'}
            </button>

            <a
              href="https://github.com/Dee68"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-3 rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar