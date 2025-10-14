// src/components/shared/SectionTitle.tsx
import { SectionTitleProps } from '@/components/types/index';

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`${alignmentClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}