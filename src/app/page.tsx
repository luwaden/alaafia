// src/app/page.tsx
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import ImpactSection from '@/components/home/ImpactSection';
import PromiseSection from '@/components/home/PromiseSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <PromiseSection />
    </>
  );
}