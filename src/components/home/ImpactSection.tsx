// src/components/home/ImpactSection.tsx
'use client';
import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp, AlertCircle, Heart } from 'lucide-react';
import Container from '@/components/layout/Container';
import { fadeInUp, slideInLeft, slideInRight } from '@/components/lib/animations';

export default function ImpactSection() {
  const stats = [
    { icon: DollarSign, label: '$6,000+ disbursed' },
    { icon: Users, label: '71 nano businesses across 5 zones' },
    { icon: TrendingUp, label: '97% on-time daily repayments' },
    { icon: AlertCircle, label: '0% defaults' },
    { icon: Heart, label: '2000+ nano businesses awaiting service' },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Stats */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-base md:text-lg font-medium text-neutral">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Image with Overlay */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
          >
            <img
              src="https://res.cloudinary.com/dergk96ic/image/upload/v1760511596/image_4_of_market_ik1phj.png"
              alt="Market impact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4 self-start">
                Impact snapshot
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Proof That It Works.
              </h3>
              <p className="text-base text-white/90">
                In our pilot program, we disbursed over ₦8 million across 59 nano-businesses 
                in five zones of Oyo State. The results speak for themselves.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}