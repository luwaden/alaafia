// src/app/model/page.tsx
import ModelHeroSection from '@/components/model/ModelHeroSection';
import CorePrinciplesSection from '@/components/model/CorePrinciplesSection';
import HowItWorksSection from '@/components/model/HowItWorksSection';
import DifferenceSection from '@/components/model/DifferenceSection';

export const metadata = {
  title: 'Our Model - Alaafia',
  description: 'A trust-first, tech-enabled lending system designed to unlock economic potential for nano-businesses across Africa',
};

export default function ModelPage() {
  return (
    <>
      <ModelHeroSection />
      <CorePrinciplesSection />
      <HowItWorksSection />
      <DifferenceSection />
    </>
  );
}