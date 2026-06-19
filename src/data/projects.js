// TODO: edit this list with your real projects.
//  - name:  display name of the project
//  - image: path under /public (or a full URL). Uses the project placeholder
//           by default — drop your own image in /public and point to it.
//  - repo:  full URL to the GitHub repository
const base = import.meta.env.BASE_URL

const projects = [
  {
    name: 'Project One',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha/Portfolio',
  },
  {
    name: 'Project Two',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha/Portfolio',
  },
  {
    name: 'Project Three',
    image: `${base}project-placeholder.svg`,
    repo: 'https://github.com/tmedha/Portfolio',
  },
]

export default projects
