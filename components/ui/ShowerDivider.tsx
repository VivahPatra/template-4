'use client'
import { useRef, useEffect, useState } from 'react'

const CSS = `
@keyframes leafFall {
  0%   { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.8; }
  50%  { transform: translateY(70px) rotate(180deg) scale(0.8); opacity: 0.6; }
  100% { transform: translateY(140px) rotate(360deg) scale(0.5); opacity: 0; }
}
`

export default function ShowerDivider({ count = 14 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [leaves] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: (i * (100 / count)) + (Math.random() * 4 - 2),
      delay: Math.random() * 1.8,
      size: Math.random() * 16 + 14,
      duration: Math.random() * 1.5 + 1.8,
    }))
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} aria-hidden style={{ position: 'relative', height: 0, overflow: 'visible', pointerEvents: 'none', zIndex: 20 }}>
      <style>{CSS}</style>
      {active && leaves.map(l => (
        <img key={l.id} src="/assets/leaf-1.png" alt="" style={{
          position: 'absolute',
          left: `${l.left}%`,
          top: 0,
          width: l.size,
          height: 'auto',
          opacity: 0,
          animation: `leafFall ${l.duration}s ${l.delay}s ease-in forwards`,
        }} />
      ))}
    </div>
  )
}
