// src/components/model/CorePrinciplesSection.tsx
'use client';
import { motion } from 'framer-motion';
import { Users, Wifi, Zap, Shield } from 'lucide-react';
import Container from '@/components/layout/Container';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';

export default function CorePrinciplesSection() {
  const principles = [
    {
      icon: Users,
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary',
      title: 'Trust-First Design',
      description: 'Group-based lending with community accountability',
    },
    {
      icon: Wifi,
      iconBg: 'bg-accent',
      iconColor: 'text-neutral',
      title: 'Offline-Resilient',
      description: 'Works via USSD, SMS, and voice for all users',
    },
    {
      icon: Zap,
      iconBg: 'bg-primary',
      iconColor: 'text-white',
      title: 'Scalable automation',
      description: 'Smart systems reduce costs while maintaining trust',
    },
    {
      icon: Shield,
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary',
      title: 'Risk controls',
      description: 'Layered security with behavioral scoring',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral">
            Core Principles
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${principle.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <principle.icon className={`w-8 h-8 ${principle.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-neutral mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}