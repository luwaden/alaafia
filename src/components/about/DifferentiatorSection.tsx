// src/components/about/DifferentiatorSection.tsx
'use client';
import { motion } from 'framer-motion';
import { Shield, Calendar, TrendingUp, Globe } from 'lucide-react';
import Container from '@/components/layout/Container';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';

export default function DifferentiatorSection() {
  const differentiators = [
    {
      icon: Shield,
      title: 'Triple Layer Trust (TLT) Model',
      description: 'A unique verification system that blends social trust, local leadership, and smart technology — ensuring credit goes only to reliable, committed borrowers.',
    },
    {
      icon: Calendar,
      title: 'Daily Repayment Structure',
      description: 'Payments spread into small, manageable amounts — six days a week — designed to match the rhythms of informal trade.',
    },
    {
      icon: TrendingUp,
      title: 'People-Powered Growth',
      description: 'We don\'t just give loans. We help traders and farmers scale, rehire, and reinvest, turning micro-capital into sustainable livelihoods.',
    },
    {
      icon: Globe,
      title: 'Culturally Grounded, Tech-Enabled',
      description: 'Our model is as local as the markets we serve, yet as scalable as the global technology powering it.',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral">
            What Makes Us Different
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-neutral text-white p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-neutral" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}