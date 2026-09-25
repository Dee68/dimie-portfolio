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
   <section id="skills" className="border-t border-slate-200 bg-slate-50 px-6 py-24 dark:border-slate-800 dark:bg-slate-900">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
        Skills
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        Technologies and tools I work with.
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
        A selection of technologies I have worked with through academic
        projects, personal development and practical training.
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-2">
      {[
        {
          category: 'Programming',
          primary: ['Python', 'JavaScript', 'C#'],
          also: ['Java'],
        },
        {
          category: 'Frontend & Backend',
          primary: ['React', 'Node.js', 'Express', 'Django'],
          also: ['HTML', 'CSS'],
        },
        {
          category: 'Databases & Cloud',
          primary: ['PostgreSQL', 'SQLite'],
          also: ['AWS', 'Azure'],
        },
        {
          category: 'Tools & Practices',
          primary: ['Git', 'GitHub', 'REST APIs', 'Docker'],
          also: ['CI/CD'],
        },
      ].map((group) => (
        <div key={group.category}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {group.category}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {group.primary.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>

          {group.also.length > 0 && (
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
              Also familiar with:{' '}
              {group.also.join(' · ')}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Skills