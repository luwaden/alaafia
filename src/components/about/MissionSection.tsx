// src/components/about/MissionSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { slideInLeft, slideInRight } from '@/components/lib/animations';

export default function MissionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              To unlock the hidden wealth of underserved people and places by providing{' '}
              <span className="font-semibold text-neutral">fast, fair, and flexible credit</span>{' '}
              built on trust, culture, and technology.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dergk96ic/image/upload/v1760511638/ourMission-image_vwimw8.png"
                alt="Market vendors"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}