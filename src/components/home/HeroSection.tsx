// src/components/home/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Button from '@/components/shared/Button';
import GradientText from '@/components/ui/GradientText';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { fadeInUp, slideInLeft, slideInRight } from '@/components/lib/animations';
import { HERO_TEXT } from '@/components/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral leading-tight">
              Unlocking <GradientText>Credit</GradientText>.{' '}
              Powering <span className="text-accent">Possibilities</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              {HERO_TEXT.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" href="/model">
                Our Model
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ResponsiveImage
              src="/images/hero.jpg"
              alt="Nigerian nano-business owner"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}