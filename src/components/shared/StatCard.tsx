// src/components/shared/StatCard.tsx
'use client';
import { motion } from 'framer-motion';
import { StatCardProps } from '@/components/types/index';
import { fadeInUp } from '@/components/lib/animations';

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="text-center p-6"
    >
      {icon && <div className="mb-3 flex justify-center">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  );
}