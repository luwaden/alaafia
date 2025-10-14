// src/components/home/ProblemSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';
import { PROBLEM_TEXT } from '@/components/lib/constants';

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <SectionTitle
            title={PROBLEM_TEXT.title}
            subtitle={PROBLEM_TEXT.description}
            align="center"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <ResponsiveImage
                src={`/images/problem-${index}.jpg`}
                alt={`Nano-business example ${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}