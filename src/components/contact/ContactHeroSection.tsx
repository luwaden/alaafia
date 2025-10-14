// src/components/contact/ContactHeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { slideInLeft, slideInRight } from '@/components/lib/animations';

export default function ContactHeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Have questions about becoming a market credit partner or joining a lending group? 
              We are here to help you unlock economic potential.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative h-[350px] md:h-[400px] rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
              alt="Customer support representative"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}