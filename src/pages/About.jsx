import skills from '../data/skills.js'
import experience from '../data/experience.js'
import education from '../data/education.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Timeline from '../components/Timeline.jsx'
import { card } from '../lib/styles.js'

// Assets in public/ must be prefixed with the Vite base URL so they resolve
// under the /Portfolio/ sub-path on GitHub Pages.
const profilePhoto = `${import.meta.env.BASE_URL}myself.jpeg`

// --- Stat-card icons (Heroicons outline) ---
const iconProps = {
  className: 'h-6 w-6 text-sky-400',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const TrophyIcon = () => (
  <svg {...iconProps}>
    <path d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.872M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
  </svg>
)

const FolderIcon = () => (
  <svg {...iconProps}>
    <path d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
  </svg>
)

// Sparkle marker for skills — ties into the starfield aesthetic.
const SparkleIcon = () => (
  <svg
    className="h-4 w-4 flex-shrink-0 text-sky-400/80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 0 0 2.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
)

const stats = [
  { icon: TrophyIcon, title: 'Experience', subtitle: '2 Years' },
  { icon: FolderIcon, title: 'Projects', subtitle: '3 Featured' },
]

function About() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
        {/* TODO: replace myself.jpeg in /public with your own photo */}
        <img
          src={profilePhoto}
          alt="Medha"
          className="h-48 w-48 flex-shrink-0 rounded-full object-cover shadow-2xl shadow-black/30 ring-1 ring-white/15 md:h-60 md:w-60"
        />

        <div className="w-full text-center text-white md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Get to know
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I'm Medha
          </h1>
          <p className="mt-2 text-lg font-medium text-sky-300">
            Software Engineer
          </p>

          {/* Quick stat cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className={`${card} flex items-center gap-4 p-5`}>
                <span className="flex-shrink-0 rounded-xl bg-sky-400/10 p-2.5">
                  <Icon />
                </span>
                <span className="text-left">
                  <span className="block font-semibold text-white">{title}</span>
                  <span className="block text-sm text-slate-400">
                    {subtitle}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            I'm a Software Engineer with a strong foundation in programming, web
            development, cloud technologies, and software deployment. I love
            building practical applications — integrating APIs, managing
            databases, and solving technical problems across both frontend and
            backend systems.
          </p>
        </div>
      </section>

      {/* Skills — grouped glass cards */}
      <section>
        <SectionHeading eyebrow="What I work with">Skills</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className={`${card} p-6`}>
              <h3 className="mb-6 text-center text-xl font-bold text-sky-300">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {group.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <SparkleIcon />
                    <span className="font-medium text-slate-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education — two-sided timeline */}
      <section>
        <SectionHeading eyebrow="My journey">
          Experience &amp; Education
        </SectionHeading>
        <Timeline work={experience} education={education} />
      </section>
    </div>
  )
}

export default About
