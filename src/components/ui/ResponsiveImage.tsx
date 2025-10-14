// src/components/ui/ResponsiveImage.tsx
import Image from 'next/image';
import { ResponsiveImageProps } from '@/components/types/index';

export default function ResponsiveImage({
  src,
  alt,
  className = '',
  priority = false,
}: ResponsiveImageProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}