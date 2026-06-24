'use client'
import { motion } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import EditableText from '@/components/ui/EditableText'
import LotusDivider from '@/components/ui/LotusDivider'

export default function FooterSection() {
  const weddingData = useWeddingData()
  const { isEditing, data: editData } = useEditMode()
  const d = isEditing ? editData : weddingData
  return (
    <footer id="footer" className="py-20 px-6 text-center" style={{ background: 'var(--color-surface2)' }}>
      <div className="max-w-2xl mx-auto">
        <LotusDivider className="mb-10" />

        <p className="shimmer-text font-display mb-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
          <EditableText field="brideName">{d.brideName}</EditableText> &amp; <EditableText field="groomName">{d.groomName}</EditableText>
        </p>
        <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
          20 December 2026
        </p>

        <p className="font-serif italic text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
          <EditableText field="tagline">{d.tagline}</EditableText>
        </p>

        <p className="font-sans text-xs tracking-widest" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>
          <EditableText field="hashtag">{d.hashtag}</EditableText>
        </p>

        <LotusDivider className="mt-10" />

        <p className="font-sans text-xs mt-8 opacity-30" style={{ color: 'var(--color-muted)' }}>
          Made with love · Inspired by Pichwai Art
        </p>
      </div>
    </footer>
  )
}
