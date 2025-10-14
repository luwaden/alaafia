// src/components/home/SolutionSection.tsx
'use client';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import InfoCard from '@/components/ui/InfoCard';
import { fadeInUp, staggerContainer } from '@/components/lib/animations';
import { SOLUTION_TEXT, SOLUTION_FEATURES } from '@/components/lib/constants';

const icons = [
  <Users key="users" size={32} />,
  <DollarSign key="dollar" size={32} />,
  <TrendingUp key="trending" size={32} />,
];

export default function SolutionSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <SectionTitle
            title={SOLUTION_TEXT.title}
            subtitle={SOLUTION_TEXT.description}
            align="center"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12"
        >
          {SOLUTION_FEATURES.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <InfoCard
                title={feature.title}
                description={feature.description}
                icon={icons[index]}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}