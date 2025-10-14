// src/components/home/PromiseSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Button from '@/components/shared/Button';
import { fadeInUp, scaleIn } from '@/components/lib/animations';
import { PROMISE_TEXT } from '@/components/lib/constants';

export default function PromiseSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/promise.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {PROMISE_TEXT.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed"
          >
            {PROMISE_TEXT.description}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button variant="secondary" size="lg" href="/about">
              Learn Our Story
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}