// Projects (pulled from resume).
//  - name:  display name of the project
//  - tech:  short tech-stack label
//  - image: path under /public (or a full URL). Uses the project placeholder
//           by default — drop a screenshot in /public and point to it.
//  - repo:  full URL to the GitHub repository.
//           TODO: these point to the GitHub profile — swap in each project's
//           exact repository URL once available.
const base = import.meta.env.BASE_URL

const projects = [
  {
    name: 'Manobal',
    tech: 'Python · Cryptography · Docker',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha',
  },
  {
    name: 'location2time',
    tech: 'Python · REST API Integration',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha',
  },
  {
    name: 'Search Engine',
    tech: 'Python · BeautifulSoup · Flask',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha',
  },
]

export default projects
