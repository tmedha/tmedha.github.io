import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import StarField from './components/StarField.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950">
      <StarField />
      {/* All content sits above the canvas via z-index */}
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 sm:py-16">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
