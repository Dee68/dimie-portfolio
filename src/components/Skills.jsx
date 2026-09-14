function Skills() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C#'],
    },
    {
      title: 'Frontend & Backend',
      skills: [
        'React',
        'Node.js',
        'Express',
        'Django',
        'HTML',
        'CSS',
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        'PostgreSQL',
        'SQLite',
        'AWS',
        'Azure',
      ],
    },
    {
      title: 'Tools & Practices',
      skills: [
        'Git',
        'GitHub',
        'REST APIs',
        'Docker',
        'CI/CD',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies and tools I work with.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A selection of technologies and development practices I have
            worked with through academic projects, personal development
            and practical training.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills