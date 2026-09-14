function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's connect.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I am open to opportunities in software development and
            technology. If you would like to discuss a project,
            apprenticeship or career opportunity, feel free to get in touch.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:ddimie283@gmail.com"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-slate-500 hover:bg-slate-950"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Dee68"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-slate-500 hover:bg-slate-950"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dimie-w-283-e/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-slate-500 hover:bg-slate-950"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact