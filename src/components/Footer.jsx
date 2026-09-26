import { FiGithub, FiArrowUp } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Dimie Egberipou. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Dee68"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <FiGithub size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <span>Back to top</span>
            <FiArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer