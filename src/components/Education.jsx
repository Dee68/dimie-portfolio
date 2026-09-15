function Education() {
  const education = [
    {
      qualification: 'FIT Intermediate IT Skills – Software Development',
      institution: 'FIT / CMETB',
      period: 'Jan 2026 – Jul 2026',
      description:
        'Completed a 26-week full-time online software development programme focused on practical IT and software development skills.',
    },
    {
      qualification: 'BSc (Hons) Computing in Contemporary Software Development',
      institution: 'Atlantic Technological University',
      period: 'Sep 2023 – Jun 2024',
      description:
        'Developed practical knowledge across software development, full-stack application development, databases, programming and software engineering.',
    },
    {
      qualification: 'Diploma in Full Stack Software Development',
      institution: 'Code Institute',
      period: 'Nov 2022 – Jun 2023',
      description:
        'Focused on full-stack web development, including frontend technologies, backend development, databases and application deployment.',
    },
    {
      qualification: 'BSc Computer Science',
      institution: 'Zaporozhye State Industrial Academy',
      period: 'Sep 2004 – Jun 2009',
      description:
        'Studied computer science and developed a foundation in programming, computing principles and information technology.',
    },
  ]

  return (
    <section
      id="education"
      className="border-t border-slate-200 bg-white px-6 py-24 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Education & Professional Development
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Education and professional development.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My academic background and recent practical training have given me
            a foundation in software development and computing.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <article
              key={`${item.qualification}-${item.institution}`}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.qualification}
                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    {item.institution}
                  </p>
                </div>

                <span className="shrink-0 text-sm text-slate-500 dark:text-slate-500">
                  {item.period}
                </span>
              </div>

              <p className="mt-4 max-w-4xl leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education