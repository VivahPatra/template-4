'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { WeddingDataProvider } from '@/context/WeddingDataContext'
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
import SectionGate from '@/components/ui/SectionGate'

const LOTUS_IMAGE = '/assets/lotus.png'

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <WeddingDataProvider>
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
              <SectionGate name="hero">
                <HeroSection />
                <LotusPondStrip bgColor="#b3ddf0" lotusImage={LOTUS_IMAGE} />
                <LotusWaveDivider fromColor="var(--color-bg)" toColor="var(--color-surface)" />
                <ShowerDivider />
              </SectionGate>

              <SectionGate name="invitation">
                <InvitationSection />
                <LotusPondStrip bgColor="#a8d8ea" lotusImage={LOTUS_IMAGE} />
                <LotusWaveDivider fromColor="var(--color-surface)" toColor="var(--color-surface2)" />
                <ShowerDivider />
              </SectionGate>

              <SectionGate name="events">
                <EventsSection />
                <LotusPondStrip bgColor="#b3ddf0" lotusImage={LOTUS_IMAGE} />
                <LotusWaveDivider fromColor="var(--color-surface2)" toColor="var(--color-surface)" />
                <ShowerDivider />
              </SectionGate>

              <SectionGate name="coupleStory">
                <CoupleStory />
                <LotusPondStrip bgColor="#a8d8ea" lotusImage={LOTUS_IMAGE} />
                <LotusWaveDivider fromColor="var(--color-surface)" toColor="var(--color-surface2)" />
                <ShowerDivider />
              </SectionGate>

              <SectionGate name="gallery">
                <GallerySection />
                <LotusPondStrip bgColor="#b3ddf0" lotusImage={LOTUS_IMAGE} />
                <LotusWaveDivider fromColor="var(--color-surface2)" toColor="var(--color-surface)" />
                <ShowerDivider />
              </SectionGate>

              <SectionGate name="rsvp">
                <RSVPSection />
                <LotusPondStrip bgColor="#a8d8ea" lotusImage={LOTUS_IMAGE} />
                <LotusWaveDivider fromColor="var(--color-surface)" toColor="var(--color-bg)" />
                <ShowerDivider />
              </SectionGate>

              <SectionGate name="countdown">
                <CountdownSection />
                <LotusPondStrip bgColor="#b3ddf0" lotusImage={LOTUS_IMAGE} />
                <LotusWaveDivider fromColor="var(--color-bg)" toColor="var(--color-surface2)" />
              </SectionGate>

              <SectionGate name="footer">
                <FooterSection />
              </SectionGate>
            </main>
          </div>
        </>
      )}
    </WeddingDataProvider>
  )
}
