const contacts = [
  {
    label: 'Email',
    value: 'tmedha504@gmail.com',
    href: 'mailto:tmedha504@gmail.com',
    icon: (
      <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.06-.31 7.69 5.13 7.69-5.13a.75.75 0 0 0-.69-.44h-14a.75.75 0 0 0-.69.44Zm15.44 1.5-7.27 4.85a.75.75 0 0 1-.83 0L4.38 7.94v9.31c0 .41.34.75.75.75h14.74c.41 0 .75-.34.75-.75V7.94Z" />
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/tmedha',
    href: 'https://github.com/tmedha',
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.71c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
      />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/medha-tripathi23',
    href: 'https://www.linkedin.com/in/medha-tripathi23/',
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.74V21h-4v-5.66c0-1.35-.03-3.09-1.99-3.09-1.99 0-2.29 1.46-2.29 2.98V21H9V9Z" />
    ),
  },
]

function Contact() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white drop-shadow-sm">
        Contact Me
      </h1>
      <p className="mb-10 text-center text-lg text-slate-50/90">
        Let's connect — find me here:
      </p>

      <ul className="flex w-full max-w-md flex-col gap-4">
        {contacts.map(({ label, value, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/95 px-6 py-4 shadow-lg ring-1 ring-white/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 flex-shrink-0 fill-slate-800"
                aria-hidden="true"
              >
                {icon}
              </svg>
              <span className="flex flex-col">
                <span className="font-semibold text-slate-900">{label}</span>
                <span className="text-sm text-slate-600">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
