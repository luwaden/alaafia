// src/components/home/PromiseSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp, scaleIn } from '@/components/lib/animations';

export default function PromiseSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?w=1600&h=900&fit=crop"
          alt="Community prosperity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
            Our Promise
          </div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Àlàáfíà Means Peace and Wellbeing.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/95 leading-relaxed mb-6"
          >
            At Alaafia, we believe finance is more than money—it's a system of finance that restores 
            dignity, brings light, and fuels prosperity for people too often overlooked. We believe 
            when nano-businesses rise, communities rise. And when communities rise, nations transform.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}