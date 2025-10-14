// src/components/home/ImpactSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import StatCard from '@/components/shared/StatCard';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/components/lib/animations';
import { IMPACT_TEXT, IMPACT_STATS } from '@/components/lib/constants';

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral mb-8">
              {IMPACT_TEXT.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {IMPACT_TEXT.description}
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {IMPACT_STATS.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ResponsiveImage
              src="/images/impact.jpg"
              alt="Business impact and success"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Real Impact. Real Change.
                </h3>
                <p className="text-lg opacity-90">
                  Every business we support is a step toward economic inclusion.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}