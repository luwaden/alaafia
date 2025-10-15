// src/components/home/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Button from '@/components/shared/Button';
import { fadeInUp, slideInLeft, slideInRight } from '@/components/lib/animations';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
          {/* Left: Headline */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unlocking <span className="text-primary">Credit</span>.
              <br />
              Powering <span className="text-accent">Possibilities</span>.
            </h1>
          </motion.div>

          {/* Right: Description and CTA */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Alaafia provides fast, fair, and flexible credit for Nigeria's nano-businesses — 
              traders, artisans, and smallholder farmers who keep our communities alive yet 
              remain invisible to traditional finance.
            </p>
            <Button variant="primary" size="md" href="/model">
              Our Model
            </Button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden"
        >
          <img
            src="https://res.cloudinary.com/dergk96ic/image/upload/v1760511497/alaafia_main_hero_1_easlrv.png"
            alt="Nigerian market vendor"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}