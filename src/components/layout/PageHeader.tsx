
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className,
  imageUrl,
  children
}) => {
  return (
    <div 
      className={cn(
        "relative py-24 md:py-32 bg-gradient-to-r from-health-blue to-health-teal overflow-hidden",
        className
      )}
    >
      {imageUrl && (
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-health-blue/90 to-health-teal/80"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
