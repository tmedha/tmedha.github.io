import { cardInteractive } from '../lib/styles.js'

// A single project card: clickable image -> repo, name, tech, and repo link.
function ProjectCard({ project }) {
  return (
    <article className={`${cardInteractive} group flex flex-col overflow-hidden`}>
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} repository`}
        className="block border-b border-white/10"
      >
        <img
          src={project.image}
          alt={project.name}
          className="aspect-[3/2] w-full object-cover opacity-90 transition-opacity duration-200 group-hover:opacity-100"
        />
      </a>

      <div className="flex flex-1 flex-col items-center gap-3 p-5 text-center">
        <h2 className="text-lg font-semibold text-white">{project.name}</h2>
        {project.tech && (
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {project.tech}
          </p>
        )}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-sky-300 transition hover:bg-white/10 hover:text-sky-200"
        >
          GitHub Repository
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
