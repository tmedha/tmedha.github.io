// Assets in public/ must be prefixed with the Vite base URL so they resolve
// under the /Portfolio/ sub-path on GitHub Pages.
const profilePhoto = `${import.meta.env.BASE_URL}myself.jpeg`

function About() {
  return (
    <section className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
      {/* TODO: replace profile-placeholder.svg in /public with your own photo */}
      <img
        src={profilePhoto}
        alt="Medha"
        className="h-48 w-48 flex-shrink-0 rounded-full object-cover shadow-xl ring-4 ring-white/40 md:h-60 md:w-60"
      />

      <div className="text-center text-white md:text-left">
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-sm sm:text-5xl">
          Hi, I'm Medha
        </h1>
        {/* TODO: replace this with your own bio */}
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-50/90">
          I'm a developer who loves building clean, thoughtful software. This is
          a short placeholder bio — swap it out with a paragraph about who you
          are, what you work on, and what you're excited about. Keep it warm and
          concise, and let your projects do the rest of the talking.
        </p>
      </div>
    </section>
  )
}

export default About
