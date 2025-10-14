// src/components/shared/MotionWrapper.tsx
'use client';
import { motion } from 'framer-motion';
import { MotionWrapperProps } from '@/components/types/index';
import { fadeInUp } from '@/components/lib/animations';

export default function MotionWrapper({
  children,
  className = '',
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}