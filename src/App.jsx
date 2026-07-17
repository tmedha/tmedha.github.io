import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import StarField from './components/StarField.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import LiveLinks from './pages/LiveLinks.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#03050c]">
      {/* Night-sky background layers (deepest first) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a1733] via-[#060c22] to-[#03050c]" />
      {/* Soft glow near the top, like distant light on the horizon */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(56,189,248,0.16),transparent_60%)]" />
      {/* Faint film-grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <StarField />
      {/* All content sits above the canvas via z-index */}
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 sm:py-16">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/live" element={<LiveLinks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
