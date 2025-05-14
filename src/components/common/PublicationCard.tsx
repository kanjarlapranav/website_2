
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PublicationCardProps {
  title: string;
  authors: string;
  journal?: string; // Made optional
  year: string;
  citationCount?: number;
  doi?: string;
  link?: string;
  className?: string;
  type?: 'journal' | 'patent' | 'conference';
  citations?: number;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  title,
  authors,
  journal,
  year,
  citationCount,
  doi,
  link,
  className,
  type,
  citations,
}) => {
  // Use citations if provided, otherwise fall back to citationCount
  const displayCitations = citations !== undefined ? citations : citationCount;
  
  // Generate publication link - prioritize provided link, then use DOI
  const publicationLink = link || (doi ? `https://doi.org/${doi}` : undefined);
  
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-health-blue mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-3 italic line-clamp-1">
        {authors}
      </p>
      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
        {journal && <span className="font-medium">{journal}</span>}
        {journal && <span className="mx-2">•</span>}
        <span>{year}</span>
        {displayCitations !== undefined && (
          <>
            <span className="mx-2">•</span>
            <span>Citations: {displayCitations}</span>
          </>
        )}
        {type && (
          <>
            <span className="mx-2">•</span>
            <span className="capitalize">{type}</span>
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {doi && (
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            DOI: {doi}
          </span>
        )}
        {publicationLink && (
          <a 
            href={publicationLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-sm text-health-teal hover:text-health-blue transition-colors"
          >
            View Publication <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PublicationCard;
