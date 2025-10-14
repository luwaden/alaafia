// src/app/about/page.tsx
import AboutHeroSection from '@/components/about/AboutHeroSection';
import VisionSection from '@/components/about/VisionSection';
import MissionSection from '@/components/about/MissionSection';
import DifferentiatorSection from '@/components/about/DifferentiatorSection';
import ImpactStatsSection from '@/components/about/ImpactStatsSection';
import MeaningSection from '@/components/about/MeaningSection';

export const metadata = {
  title: 'About Us - Àlàáfíà',
  description: 'Learn about our mission to unlock financial possibilities for Nigeria\'s nano-businesses',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <VisionSection />
      <MissionSection />
      <DifferentiatorSection />
      <ImpactStatsSection />
      <MeaningSection />
    </>
  );
}