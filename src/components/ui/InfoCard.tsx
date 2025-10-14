// src/components/ui/InfoCard.tsx
'use client';
import { motion } from 'framer-motion';
import { InfoCardProps } from '@/components/types/index';

export default function InfoCard({ title, description, icon, className = '' }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 70, 255, 0.15)' }}
      transition={{ duration: 0.3 }}
      className={`p-6 md:p-8 bg-white border border-gray-200 rounded-2xl shadow-md hover:border-primary transition-all duration-300 ${className}`}
    >
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-xl md:text-2xl font-bold text-neutral mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}