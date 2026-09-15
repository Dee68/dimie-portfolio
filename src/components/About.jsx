function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-slate-50 px-6 py-24 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Building software with a practical, problem-solving mindset.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            <p>
              I am a Computing graduate with a background in software
              development and full-stack application development. I enjoy
              turning ideas into practical applications and solving problems
              through technology.
            </p>

            <p>
              My experience includes working with frontend and backend
              technologies, databases, REST APIs, version control and
              deployment. Through academic work, personal projects and
              practical training, I have developed experience across the
              software development lifecycle.
            </p>

            <p>
              I am currently focused on developing my career in software
              development while continuing to build my knowledge of
              cybersecurity and secure software development.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Full-Stack Development
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Building applications across frontend, backend, APIs and
              databases.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Problem Solving
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Applying structured thinking and programming to practical
              technical problems.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Continuous Learning
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Continuing to develop skills in software engineering,
              cloud technologies and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About