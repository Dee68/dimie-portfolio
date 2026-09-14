function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  status,
  demoVideo,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-slate-600">
      {demoVideo && (
        <div className="border-b border-slate-800 bg-black">
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
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          {status && (
            <span className="shrink-0 rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
              {status}
            </span>
          )}
        </div>

        <p className="mt-4 flex-1 leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-900 px-3 py-1 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-medium text-white transition hover:text-slate-300"
          >
            View on GitHub
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
