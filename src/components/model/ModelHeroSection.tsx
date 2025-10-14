// src/components/model/ModelHeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp, scaleIn } from '@/components/lib/animations';

export default function ModelHeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-3xl px-8 py-16 md:py-24 text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            The Àlàáfíà Model
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-neutral max-w-3xl mx-auto leading-relaxed"
          >
            A trust-first, tech-enabled lending system designed to unlock economic potential 
            for nano-businesses across Africa through group accountability and smart automation.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}