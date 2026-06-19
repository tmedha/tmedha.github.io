import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About Me', end: true },
  { to: '/projects', label: 'My Projects' },
  { to: '/contact', label: 'Contact Me' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex max-w-5xl justify-center gap-8 px-6 py-5">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `text-lg font-semibold tracking-wide transition-opacity ${
                isActive
                  ? 'text-white underline decoration-sky-400 decoration-2 underline-offset-8'
                  : 'text-white/60 hover:text-white/90'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
