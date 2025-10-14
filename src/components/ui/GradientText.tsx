// src/components/ui/GradientText.tsx
import { GradientTextProps } from '@/components/types/index';

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}