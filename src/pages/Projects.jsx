import projects from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

function Projects() {
  return (
    <section>
      <SectionHeading eyebrow="My work">My Projects</SectionHeading>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
