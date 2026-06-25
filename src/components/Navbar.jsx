import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About Me', end: true },
  { to: '/projects', label: 'My Projects' },
  { to: '/contact', label: 'Contact Me' },
]

// Shared base styles so the external Resume link matches the route links.
const linkBase = 'text-base font-medium tracking-wide transition-colors'
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
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-4">
        {/* Wordmark */}
        <NavLink
          to="/"
          end
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          Medha <span className="text-sky-400">Tripathi</span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
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
        </div>
      </nav>
    </header>
  )
}

export default Navbar
