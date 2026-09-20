function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  status,
  demoVideo,
  caseStudyUrl,
  demoUrl,
  demoStatus,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600">
      {demoVideo && (
        <div className="border-b border-slate-200 bg-black dark:border-slate-800">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={demoVideo}
              title={`${title} demo video`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          {status && (
            <span className="shrink-0 rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
              {status}
            </span>
          )}
        </div>

        <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* <div className="mt-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-medium text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
          >
            View on GitHub

            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div> */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
  {githubUrl && (
    <a
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center font-medium text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
    >
      View on GitHub
      <span className="ml-2 transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  )}

  {caseStudyUrl && (
    <a
      href={caseStudyUrl}
      className="inline-flex items-center font-medium text-slate-700 transition hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100"
    >
      Project Case Study
      <span className="ml-2">→</span>
    </a>
  )}

  {demoUrl && (
    <a
      href={demoUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center font-medium text-slate-700 transition hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100"
    >
      Live Demo
      <span className="ml-2">↗</span>
    </a>
  )}

  {demoStatus && (
    <span className="text-sm text-slate-500 dark:text-slate-500">
      {demoStatus}
    </span>
  )}
</div>
      </div>
    </article>
  )
}

export default ProjectCard