// src/components/about/AboutHeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { slideInLeft, slideInRight } from '@/components/lib/animations';

export default function AboutHeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523539693385-e5e891eb4465?w=800&h=600&fit=crop"
                alt="Market scene in Nigeria"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Lighting up <span className="text-accent">possibilities</span> in overlooked places
            </h1>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Alaafia is a fintech company unlocking credit for Nigeria's most underserved 
                nano-businesses — street traders, market women, artisans, and smallholder 
                farmers — who are excluded from traditional finance.
              </p>
              <p>
                We believe financial inclusion isn't about charity. It's about trust, dignity, and 
                opportunity. Every day, over 32 million hardworking nano-business traders are 
                forced to run on tiny margins, not because they lack ambition, but because the 
                financial system wasn't designed for them. Alaafia is changing that.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}