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
            className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#home"
            className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer