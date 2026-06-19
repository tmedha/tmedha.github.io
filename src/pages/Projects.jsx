import projects from '../data/projects.js'

function Projects() {
  return (
    <section>
      <h1 className="mb-10 text-center text-4xl font-bold tracking-tight text-white drop-shadow-sm">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col overflow-hidden rounded-2xl bg-white/95 shadow-lg ring-1 ring-white/30 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Clickable project image -> repo */}
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} repository`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="aspect-[3/2] w-full object-cover"
              />
            </a>

            <div className="flex flex-1 flex-col items-center gap-2 p-5 text-center">
              <h2 className="text-lg font-semibold text-slate-900">
                {project.name}
              </h2>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline"
              >
                GitHub Repository →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
