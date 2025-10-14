// src/types/index.ts
export interface NavLink {
  label: string;
  href: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}