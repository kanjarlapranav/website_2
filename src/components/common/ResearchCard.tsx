
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResearchCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  className?: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold font-poppins text-health-blue mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center text-health-teal hover:text-health-blue transition-colors group-hover:translate-x-1 duration-300"
        >
          <span className="font-medium">Learn More</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ResearchCard;
