
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  name: string;
  title: string;
  imageUrl: string;
  bio?: string;
  email?: string;
  researchInterests?: string[];
  className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  imageUrl,
  bio,
  email,
  researchInterests,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-health-blue font-poppins mb-1">{name}</h3>
        <p className="text-health-teal mb-4">{title}</p>
        
        {bio && (
          <p className="text-gray-600 mb-4 line-clamp-3">{bio}</p>
        )}
        
        {researchInterests && researchInterests.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Research Interests:</h4>
            <div className="flex flex-wrap gap-1">
              {researchInterests.map((interest, index) => (
                <span 
                  key={index}
                  className="text-xs bg-primary-light text-health-blue px-2 py-0.5 rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {email && (
          <a 
            href={`mailto:${email}`}
            className="text-health-teal hover:text-health-blue transition-colors text-sm"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
