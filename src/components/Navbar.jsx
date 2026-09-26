import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import NavItem from './NavItem'
import { useActiveSection } from '../hooks/useActiveSection'

// Defined outside the component so the reference is stable across renders
const SECTION_IDS = [
  'home',
  'about',
  'projects',
  'skills',
  'education',
  'contact',
]

const NAV_ITEMS = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#education', label: 'Education' },
  { to: '/#contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        {/* <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="DWE Portfolio"
            className="h-12 object-contain"
          />
        </Link> */}
        <Link to="/" onClick={closeMenu} className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          DWE
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.to}
              {...item}
              isActive={activeSection === item.to.split('#')[1]}
            />
          ))}
        </div>

        {/* Desktop controls */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="https://github.com/Dee68"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-900 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                variant="mobile"
                onClick={closeMenu}
                isActive={activeSection === item.to.split('#')[1]}
              />
            ))}

            <ThemeToggle showLabel />

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