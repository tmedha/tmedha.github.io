// Shared section/page heading. Optional `eyebrow` renders a small uppercase
// label above the title for a more polished, designed hierarchy.
function SectionHeading({ eyebrow, children, className = '' }) {
  return (
    <div className={`mb-10 text-center ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {children}
      </h2>
    </div>
  )
}

export default SectionHeading
