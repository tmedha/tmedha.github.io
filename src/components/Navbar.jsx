import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About Me', end: true },
  { to: '/projects', label: 'My Projects' },
  { to: '/contact', label: 'Contact Me' },
]

// Shared base styles so the external Resume link matches the route links.
const linkBase = 'text-lg font-semibold tracking-wide transition-opacity'
const linkInactive = 'text-white/60 hover:text-white/90'

// Resolve the PDF under the Vite base path so it works on GitHub Pages.
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

// Open the resume in a new tab AND trigger a download in one click. The
// download attribute alone suppresses the new tab, so we do both manually.
function handleResumeClick(event) {
  event.preventDefault()
  window.open(resumeUrl, '_blank', 'noopener,noreferrer')

  const link = document.createElement('a')
  link.href = resumeUrl
  link.download = 'Medha_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 px-6 py-5">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? 'text-white underline decoration-sky-400 decoration-2 underline-offset-8'
                  : linkInactive
              }`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Resume opens the PDF in a new tab and downloads it in one click.
            TODO: drop your resume file at public/resume.pdf. */}
        <a
          href={resumeUrl}
          onClick={handleResumeClick}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkBase} ${linkInactive}`}
        >
          Resume
        </a>
      </nav>
    </header>
  )
}

export default Navbar
