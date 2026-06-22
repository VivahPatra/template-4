'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from '@/components/layout/CustomCursor'
import LoadingScreen from '@/components/layout/LoadingScreen'
import FloatingFABs from '@/components/layout/FloatingFABs'
import FloralPetals from '@/components/ui/FloralPetals'
import PageDecorations from '@/components/ui/PageDecorations'
import LotusWaveDivider from '@/components/ui/LotusWaveDivider'
import LotusPondStrip from '@/components/ui/LotusPondStrip'
import ShowerDivider from '@/components/ui/ShowerDivider'
import HeroSection from '@/components/sections/HeroSection'
import InvitationSection from '@/components/sections/InvitationSection'
import EventsSection from '@/components/sections/EventsSection'
import CoupleStory from '@/components/sections/CoupleStory'
import GallerySection from '@/components/sections/GallerySection'
import RSVPSection from '@/components/sections/RSVPSection'
import CountdownSection from '@/components/sections/CountdownSection'
import FooterSection from '@/components/sections/FooterSection'

const LOTUS_IMAGE = '/assets/lotus.png'

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loading" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <>
          <FloralPetals count={20} />
          <FloatingFABs />
          <div className="relative overflow-x-hidden">

            <main>
              <HeroSection />
              <LotusPondStrip bgColor="var(--color-bg)" lotusImage={LOTUS_IMAGE} />
              <LotusWaveDivider fromColor="var(--color-bg)" toColor="var(--color-surface)" />
              <ShowerDivider />

              <InvitationSection />
              <LotusPondStrip bgColor="var(--color-surface)" lotusImage={LOTUS_IMAGE} />
              <LotusWaveDivider fromColor="var(--color-surface)" toColor="var(--color-surface2)" />
              <ShowerDivider />

              <EventsSection />
              <LotusPondStrip bgColor="var(--color-surface2)" lotusImage={LOTUS_IMAGE} />
              <LotusWaveDivider fromColor="var(--color-surface2)" toColor="var(--color-surface)" />
              <ShowerDivider />

              <CoupleStory />
              <LotusPondStrip bgColor="var(--color-surface)" lotusImage={LOTUS_IMAGE} />
              <LotusWaveDivider fromColor="var(--color-surface)" toColor="var(--color-surface2)" />
              <ShowerDivider />

              <GallerySection />
              <LotusPondStrip bgColor="var(--color-surface2)" lotusImage={LOTUS_IMAGE} />
              <LotusWaveDivider fromColor="var(--color-surface2)" toColor="var(--color-surface)" />
              <ShowerDivider />

              <RSVPSection />
              <LotusPondStrip bgColor="var(--color-surface)" lotusImage={LOTUS_IMAGE} />
              <LotusWaveDivider fromColor="var(--color-surface)" toColor="var(--color-bg)" />
              <ShowerDivider />

              <CountdownSection />
              <LotusPondStrip bgColor="var(--color-bg)" lotusImage={LOTUS_IMAGE} />
              <LotusWaveDivider fromColor="var(--color-bg)" toColor="var(--color-surface2)" />

              <FooterSection />
            </main>
          </div>
        </>
      )}
    </>
  )
}
