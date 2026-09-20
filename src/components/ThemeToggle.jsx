import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FiMoon, FiSun } from 'react-icons/fi'

function ThemeToggle({ showLabel = false }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-900"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
       {showLabel && (
        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      )}
    </button>
  )
}

export default ThemeToggle