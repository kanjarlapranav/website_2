
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        'mb-12',
        centered ? 'text-center' : 'text-left',
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold font-poppins text-health-blue mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 bg-health-teal w-24 mt-4",
        centered ? "mx-auto" : ""
      )}></div>
    </div>
  );
};

export default SectionTitle;
