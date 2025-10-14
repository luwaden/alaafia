// src/components/home/SolutionSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';

export default function SolutionSection() {
  const solutions = [
    {
      title: 'Built on trust and community bonds',
      border: 'border-primary',
    },
    {
      title: 'Repaid in small, daily amounts that fit real incomes',
      border: 'border-accent',
    },
    {
      title: 'Designed for growth—with loan upgrades as businesses succeed',
      border: 'border-primary',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 bg-neutral text-white text-sm font-medium rounded-full mb-6">
            Our Solution
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral mb-4 max-w-3xl">
            Finance That Works the Way People Live.
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
            At Alaafia, we've reimagined credit for the realities of everyday life. Our 
            unique approach blends trust, culture, and technology into a Triple Layer 
            Trust (TLT) system:
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`p-8 md:p-10 bg-white border-4 ${solution.border} rounded-3xl text-center`}
            >
              <h3 className="text-lg md:text-xl font-bold text-neutral leading-snug">
                {solution.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}