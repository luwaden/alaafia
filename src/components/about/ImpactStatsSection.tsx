// src/components/about/ImpactStatsSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';

export default function ImpactStatsSection() {
  const stats = [
    {
      value: '₦8M+',
      label: 'disbursed to nano-businesses across Oyo State',
      size: 'normal',
    },
    {
      value: '59 businesses',
      label: 'supported across 5 geopoltical zones',
      size: 'large',
    },
    {
      value: '97%',
      label: 'on-time daily repayment rate — proving trust works',
      size: 'normal',
    },
    {
      value: '0%',
      label: 'defaults during pilot phase',
      size: 'normal',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
            Our Impact So Far
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            These numbers aren't just metrics. They are families thriving, stalls 
            expanding, apprentices trained, and hope restored.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Custom staggered layout matching Figma */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left stat - ₦8M+ */}
            <motion.div
              variants={fadeInUp}
              className="border-4 border-primary bg-white rounded-2xl p-8 text-center md:justify-self-end"
            >
              <div className="text-4xl md:text-5xl font-bold text-neutral mb-2">
                {stats[0].value}
              </div>
              <p className="text-sm text-gray-600">
                {stats[0].label}
              </p>
            </motion.div>

            {/* Center large stat - 59 businesses */}
            <motion.div
              variants={fadeInUp}
              className="border-4 border-primary bg-white rounded-2xl p-10 text-center md:col-span-2 md:mx-auto max-w-md"
            >
              <div className="text-5xl md:text-6xl font-bold text-neutral mb-2">
                {stats[1].value}
              </div>
              <p className="text-sm text-gray-600">
                {stats[1].label}
              </p>
            </motion.div>

            {/* Right stat - 97% */}
            <motion.div
              variants={fadeInUp}
              className="border-4 border-primary bg-white rounded-2xl p-8 text-center md:col-start-2 md:justify-self-start"
            >
              <div className="text-4xl md:text-5xl font-bold text-neutral mb-2">
                {stats[2].value}
              </div>
              <p className="text-sm text-gray-600">
                {stats[2].label}
              </p>
            </motion.div>

            {/* Bottom center stat - 0% */}
            <motion.div
              variants={fadeInUp}
              className="border-4 border-primary bg-white rounded-2xl p-8 text-center md:col-span-2 md:mx-auto max-w-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-neutral mb-2">
                {stats[3].value}
              </div>
              <p className="text-sm text-gray-600">
                {stats[3].label}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}