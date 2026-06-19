import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

function Projects() {
  return (
    <section>
      <h1 className="mb-10 text-center text-4xl font-bold tracking-tight text-white drop-shadow-sm">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
