// src/components/home/ProblemSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp } from '@/components/lib/animations';

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/4"
          >
            <div className="w-full h-[280px] md:h-[340px] rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dergk96ic/image/upload/v1760511502/image_2_of_seller_bnljq9.png"
                alt="Nano business owner 1"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center space-y-4"
          >
            <div className="inline-block px-4 py-1.5 bg-neutral text-white text-sm font-medium rounded-full mb-4">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral">
              Excluded but not Invisible.
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Across Nigeria, 32 million of hardworking nano-business owners run their 
              businesses without fair access to credit. They are seen in every market, every 
              street corner—yet when it comes to finance, they are shut out.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              The result? Limited growth, daily struggles, and opportunities lost.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/4"
          >
            <div className="w-full h-[280px] md:h-[340px] rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dergk96ic/image/upload/v1760511507/image_3_of_seller_e436h6.png"
                alt="Nano business owner 2"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}