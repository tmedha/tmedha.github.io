// Canonical frosted-glass card treatment, shared across pages so every card
// looks identical. `cardInteractive` adds a hover lift for clickable cards.
export const card =
  'rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-md'

export const cardInteractive = `${card} transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]`
