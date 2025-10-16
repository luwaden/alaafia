// src/components/about/MeaningSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp, scaleIn } from '@/components/lib/animations';

export default function MeaningSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Background pattern/texture (optional) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            The Meaning of Alaafia
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/95 leading-relaxed"
          >
            In Yoruba, <span className="font-semibold">Alaafia</span> means peace, wholeness, and wellbeing. For us, it's more than a 
            name. It's a promise — that prosperity should feel possible, even for the smallest 
            trader, and that finance can finally work with the people, for the people, and by the 
            people.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}