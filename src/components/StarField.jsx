import { useEffect, useRef } from 'react'

const CONFIG = {
  count: 160,
  // Most stars are white, a few have a cool/warm tint for a realistic sky.
  colors: ['#ffffff', '#ffffff', '#ffffff', '#cfe8ff', '#bae6fd', '#fde8c8'],
  maxSize: 1.7,
  speed: 0.32,
  repulseDistance: 200,
  repulseDuration: 0.4, // seconds
}

function makeParticle(w, h) {
  const angle = Math.random() * Math.PI * 2
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: 0.4 + Math.random() * CONFIG.maxSize,
    color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
    baseAlpha: 0.25 + Math.random() * 0.6, // brightness variation
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.4 + Math.random() * 1.6, // radians / second
    vx: Math.cos(angle) * CONFIG.speed,
    vy: Math.sin(angle) * CONFIG.speed,
    repulseVx: 0,
    repulseVy: 0,
    repulseUntil: 0,
  }
}

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    let particles = []
    let animId
    let w, h

    function resize() {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      particles = Array.from({ length: CONFIG.count }, () => makeParticle(w, h))
    }

    function handleClick(e) {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const now = performance.now() / 1000

      particles.forEach((p) => {
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONFIG.repulseDistance && dist > 0) {
          const force = (CONFIG.repulseDistance - dist) / CONFIG.repulseDistance
          p.repulseVx = (dx / dist) * force * 8
          p.repulseVy = (dy / dist) * force * 8
          p.repulseUntil = now + CONFIG.repulseDuration
        }
      })
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      const now = performance.now() / 1000

      particles.forEach((p) => {
        let vx = p.vx
        let vy = p.vy
        if (now < p.repulseUntil) {
          const t = 1 - (p.repulseUntil - now) / CONFIG.repulseDuration
          const decay = 1 - t
          vx += p.repulseVx * decay
          vy += p.repulseVy * decay
        }

        p.x += vx
        p.y += vy

        // Bounce off edges
        if (p.x < 0) { p.x = 0; p.vx *= -1 }
        if (p.x > w) { p.x = w; p.vx *= -1 }
        if (p.y < 0) { p.y = 0; p.vy *= -1 }
        if (p.y > h) { p.y = h; p.vy *= -1 }

        // Twinkle: oscillate brightness over time.
        const twinkle = 0.65 + 0.35 * Math.sin(now * p.twinkleSpeed + p.twinklePhase)
        ctx.globalAlpha = Math.min(1, p.baseAlpha * twinkle)
        ctx.fillStyle = p.color

        // Brighter/larger stars get a soft glow.
        if (p.r > 1.1) {
          ctx.shadowBlur = p.r * 4
          ctx.shadowColor = p.color
        } else {
          ctx.shadowBlur = 0
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    canvas.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  )
}
