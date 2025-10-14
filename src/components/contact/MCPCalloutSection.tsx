// src/components/contact/MCPCalloutSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp } from '@/components/lib/animations';

export default function MCPCalloutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-neutral rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4">
              Interested in becoming an MCP?
            </h2>
            <p className="text-base md:text-lg text-white mb-8 leading-relaxed">
              Market Credit Partners earn incentives while helping their communities grow. 
              Learn more about the opportunity.
            </p>
            <button className="bg-white text-neutral font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Learn about MCP program
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}