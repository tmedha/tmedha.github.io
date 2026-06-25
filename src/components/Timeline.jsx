import { card } from '../lib/styles.js'

// A centered two-sided timeline: work experience on the left, education on the
// right (desktop), merged into one chronological stream sorted oldest-first.
// On mobile it collapses to a single left-aligned stream with type labels.
function Timeline({ work = [], education = [] }) {
  const items = [
    ...work.map((w) => ({
      type: 'work',
      label: 'Experience',
      start: w.start,
      title: w.role,
      subtitle: w.company,
      period: w.period,
      description: w.description,
    })),
    ...education.map((e) => ({
      type: 'education',
      label: 'Education',
      start: e.start,
      title: e.degree,
      subtitle: e.school,
      period: e.period,
    })),
  ].sort((a, b) => a.start - b.start)

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* The spine: far-left on mobile, centered on desktop */}
      <div className="absolute bottom-0 top-0 left-2 w-px bg-sky-400/30 md:left-1/2 md:-translate-x-1/2" />

      <ul className="space-y-8">
        {items.map((item) => {
          const isWork = item.type === 'work'
          const side = isWork
            ? 'pl-10 md:col-start-1 md:pl-0 md:pr-10 md:text-right'
            : 'pl-10 md:col-start-2 md:pl-10'

          return (
            <li
              key={`${item.title}-${item.start}`}
              className="relative md:grid md:grid-cols-2 md:items-start"
            >
              {/* Node on the spine */}
              <span className="absolute top-2 left-2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 ring-4 ring-sky-400/20 md:left-1/2" />

              <div className={side}>
                <article className={`${card} p-5`}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                    {item.label}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sky-300">{item.subtitle}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  )}
                </article>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Timeline
