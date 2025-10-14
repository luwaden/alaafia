// src/components/about/VisionSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp } from '@/components/lib/animations';

export default function VisionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral">
            Our Vision
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Alaafia, we've reimagined credit for the realities of everyday life. Our 
            unique approach blends trust, culture, and technology into a Triple Layer 
            Trust (TLT) system.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}