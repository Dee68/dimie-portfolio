function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-50 px-6 py-24 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
           <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let's connect.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            I am open to opportunities in software development and
            technology. If you would like to discuss a project,
            apprenticeship or career opportunity, feel free to get in touch.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:ddimie283@gmail.com"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Dee68"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dimie-w-283-e/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact