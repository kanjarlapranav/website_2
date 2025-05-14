
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  slug: string;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  excerpt,
  imageUrl,
  slug,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
        className
      )}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={14} className="mr-1" />
          <time>{date}</time>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-health-blue font-poppins">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          to={`/news/${slug}`}
          className="text-health-teal hover:text-health-blue font-medium transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
