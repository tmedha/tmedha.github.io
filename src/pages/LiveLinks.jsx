import liveLinks from '../data/liveLinks.js'
import SectionHeading from '../components/SectionHeading.jsx'
import { cardInteractive } from '../lib/styles.js'

function LiveLinks() {
  return (
    <section className="flex flex-col items-center">
      <SectionHeading eyebrow="Try them out">Live Links</SectionHeading>
      <p className="-mt-6 mb-10 text-center text-lg text-slate-300">
        Projects you can open and use right now — nothing to install.
      </p>

      <ul className="grid w-full gap-6 sm:grid-cols-2">
        {liveLinks.map(({ name, blurb, url, repo }) => (
          <li key={url}>
            <article className={`${cardInteractive} group flex h-full flex-col gap-3 p-6`}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-white"
              >
                {name}
                <span className="ml-1.5 inline-block text-sky-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
              <p className="text-sm text-slate-300">{blurb}</p>
              <p className="font-mono text-xs text-slate-500">
                {url.replace('https://', '')}
              </p>
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="mt-auto self-start pt-2 text-sm font-medium text-sky-300 transition hover:text-sky-200"
              >
                GitHub Repository →
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LiveLinks
