'use client'
import { useRef } from 'react'
import FlowerOverlay from '@/components/ui/FlowerOverlay'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, staggerContainer } from '@/lib/animations'
import PichwaiCorner from '@/components/ui/PichwaiCorner'
import LotusPond from '@/components/ui/LotusPond'
import { formatShortDate } from '@/lib/utils'

export default function HeroSection() {
  const weddingData = useWeddingData()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1])
  const srijiY  = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const cowY    = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-12">
      <FlowerOverlay />

      {/* ═══ Sriji fullscreen intro overlay — plays on load, then fades ═══ */}
      <motion.div
        className="fixed inset-0 z-[100] flex items-start justify-center pointer-events-none"
        style={{ background: 'var(--color-bg)' }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 4, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ width: '40vw', marginTop: '30vh' }}
          animate={{ width: '140px', marginTop: '48px' }}
          transition={{ duration: 2.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="ganesha-backdrop" style={{ position: 'absolute', inset: '-15%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(136,14,79,0.4) 0%, rgba(232,130,90,0.25) 50%, transparent 75%)', filter: 'blur(20px)' }} />
            <img src="/assets/sriji.png" alt="" className="ganesha-glow" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }} />
          </div>
        </motion.div>
      </motion.div>

      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src="/assets/pichwai-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.6) saturate(0.8) sepia(0.2)' }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(255,236,216,0.8) 0%, rgba(255,236,216,0.3) 35%, rgba(232,168,120,0.4) 70%, rgba(255,236,216,0.95) 100%)'
        }} />
      </motion.div>

      {/* Gold picture-frame border */}
      <div className="absolute inset-3 md:inset-6 pointer-events-none z-20" aria-hidden>
        <div className="absolute inset-0" style={{ border: '1px solid rgba(200,146,42,0.3)' }} />
        <div className="absolute inset-2" style={{ border: '0.5px solid rgba(200,146,42,0.12)' }} />
        <PichwaiCorner size={70} className="absolute top-0 left-0" />
        <PichwaiCorner size={70} flip={{ x: true }} className="absolute top-0 right-0" />
        <PichwaiCorner size={70} flip={{ y: true }} className="absolute bottom-0 left-0" />
        <PichwaiCorner size={70} flip={{ x: true, y: true }} className="absolute bottom-0 right-0" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute rounded-full blur-[180px]" style={{ width: 500, height: 400, background: 'rgba(136,14,79,0.1)', top: '5%', left: '-8%' }} />
        <div className="absolute rounded-full blur-[140px]" style={{ width: 400, height: 300, background: 'rgba(232,130,90,0.12)', top: '20%', right: '-5%' }} />
        <div className="absolute rounded-full blur-[120px]" style={{ width: 350, height: 350, background: 'rgba(216,27,96,0.08)', bottom: '25%', left: '30%' }} />
      </div>

      {/* ═══ 1. Sriji — small, with glow ═══ */}
      <motion.div className="relative z-10 flex justify-center mb-4" style={{ y: srijiY, opacity }}>
        <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="ganesha-backdrop" style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'radial-gradient(circle, rgba(136,14,79,0.4) 0%, rgba(232,130,90,0.25) 50%, transparent 75%)', filter: 'blur(14px)' }} />
          <img src="/assets/sriji.png" alt="" className="ganesha-glow" style={{ width: 140, height: 'auto', position: 'relative', zIndex: 1 }} />
        </div>
      </motion.div>

      {/* ═══ 2. Text ═══ */}
      <motion.div
        className="relative z-10 text-center px-8"
        style={{ y: textY, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="shimmer-text font-display leading-none"
          style={{ fontSize: 'clamp(2.4rem, 9vw, 6.4rem)', letterSpacing: '0.06em' }}
        >
          {weddingData.brideName}
        </motion.h1>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 my-4">
          <div className="h-px w-12 md:w-24" style={{ background: 'linear-gradient(to right, transparent, var(--color-accent))' }} />
          <img src="/assets/lotus1.png" alt="" style={{ width: 36, height: 'auto', filter: 'brightness(1.4)' }} />
          <div className="h-px w-12 md:w-24" style={{ background: 'linear-gradient(to left, transparent, var(--color-accent))' }} />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-serif italic text-lg md:text-2xl tracking-[0.3em] mb-4"
          style={{ color: 'var(--color-accent)', opacity: 0.7 }}
        >
          {weddingData.heroSubtitle || 'weds'}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="shimmer-text font-display leading-none"
          style={{ fontSize: 'clamp(2.4rem, 9vw, 6.4rem)', letterSpacing: '0.06em' }}
        >
          {weddingData.groomName}
        </motion.h1>

        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2 mt-6">
          <div className="h-px w-20 opacity-35" style={{ background: 'var(--color-accent)' }} />
          <p className="font-sans text-xs tracking-[0.4em] uppercase mt-1" style={{ color: 'var(--color-accent)', opacity: 0.75 }}>
            {formatShortDate(weddingData.weddingDate)}
          </p>
          <div className="h-px w-20 opacity-35" style={{ background: 'var(--color-accent)' }} />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-serif italic mt-3 text-sm md:text-base opacity-45 tracking-wider"
          style={{ color: 'var(--color-text)' }}
        >
          {weddingData.tagline}
        </motion.p>
      </motion.div>

      {/* ═══ 3. Cows ═══ */}
      <motion.div
        className="relative z-[8] flex justify-between w-full px-0 mt-4 mb-16"
        style={{ y: cowY, opacity }}
      >
        <motion.img src="/assets/cow.png" alt="" className="w-[120px] sm:w-[240px] md:w-[200px]"
          style={{ height: 'auto', filter: 'brightness(1.2)', opacity: 0.85 }}
          animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img src="/assets/cow.png" alt="" className="w-[120px] sm:w-[240px] md:w-[200px]"
          style={{ height: 'auto', filter: 'brightness(1.2)', opacity: 0.85, scaleX: -1 }}
          animate={{ y: [0, -6, 0], rotate: [1, -1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </motion.div>

      {/* ═══ 4. Lotus pond ═══ */}
      <LotusPond className="z-[4]" />

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0.35 }}
      >
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase" style={{ color: 'var(--color-accent)' }}>Scroll</span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 0.1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
