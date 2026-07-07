// Projects (pulled from resume / repos).
//  - name:  display name of the project
//  - tech:  short tech-stack label
//  - image: path under /public (or a full URL). Uses the project placeholder
//           by default — drop a screenshot in /public and point to it.
//  - repo:  full URL to the GitHub repository.
const base = import.meta.env.BASE_URL

const projects = [
  {
    name: 'CloakedOracle',
    tech: 'Python · RAG · Ollama · Local-First',
    image: `${base}projects/cloakedoracle.png`,
    repo: 'https://github.com/tmedha/local-rag-system',
  },
  {
    name: 'Verbatim',
    tech: 'Java Spring Boot · React · TypeScript',
    image: `${base}projects/verbatim.png`,
    repo: 'https://github.com/tmedha/gre-flashcards',
  },
  {
    name: 'Calorie Tracker',
    tech: 'JavaFX · SQLite',
    image: `${base}projects/calorie-tracker.png`,
    repo: 'https://github.com/tmedha/calorie-tracker',
  },
  {
    name: 'Flower Companion',
    tech: 'Node.js · Electron',
    image: `${base}projects/flower-companion.png`,
    repo: 'https://github.com/tmedha/flower-companion',
  },
  {
    name: 'Manobal',
    tech: 'Python · Cryptography · Docker',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha/manobal',
  },
  {
    name: 'location2time',
    tech: 'Python · REST API Integration',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha/location2time',
  },
  {
    name: 'Search Engine',
    tech: 'Python · BeautifulSoup · Flask',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha/info-retrieval-project',
  },
]

export default projects
