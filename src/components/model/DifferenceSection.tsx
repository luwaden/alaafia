// src/components/model/DifferenceSection.tsx
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';

export default function DifferenceSection() {
  const features = [
    {
      title: 'Offline-First Technology',
      titleColor: 'text-accent',
      description: 'Works via USSD and feature phones—no smartphones or data required for borrowers',
    },
    {
      title: 'Automated Accountability',
      titleColor: 'text-white',
      description: 'Smart systems apply rules consistently while maintaining group trust',
    },
    {
      title: 'Local Language Support',
      titleColor: 'text-white',
      description: 'Voice and SMS communications in members\' native languages',
    },
    {
      title: 'Security Reserve Protection',
      titleColor: 'text-white',
      description: 'LSR system protects groups from defaults while incentivizing good behavior',
    },
    {
      title: 'Transparent Tracking',
      titleColor: 'text-white',
      description: 'Real-time wallet visibility for all stakeholders via multiple channels',
    },
    {
      title: 'Scalable to 100M+',
      titleColor: 'text-white',
      description: 'Architecture designed for massive scale across Africa',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary via-blue-700 to-blue-900">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Makes Àlàáfíà Different
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-3 ${feature.titleColor}`}>
                {feature.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}