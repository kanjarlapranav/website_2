
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from '@/components/ui/hover-card';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
}

interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image: string;
  problem: string;
  solution: string;
  publication: Publication;
}

interface ResearchFocusAreaProps {
  area: ResearchArea;
  index: number;
}

export const ResearchFocusArea: React.FC<ResearchFocusAreaProps> = ({
  area,
  index
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-center`}
      id={area.id}
    >
      <div className="w-full lg:w-1/2 group">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img 
            src={area.image} 
            alt={area.title} 
            className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-health-blue mb-4 font-poppins">
          {area.title}
        </h2>
        <p className="text-gray-600 mb-6">
          {area.description}
        </p>
        
        <Collapsible
          open={isExpanded}
          onOpenChange={setIsExpanded}
          className="space-y-2"
        >
          <div className="flex items-center space-x-4">
            <CollapsibleTrigger 
              className="group flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition-colors"
            >
              <span className="font-medium text-health-blue">
                {isExpanded ? "Hide Details" : "Learn More"}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-health-teal" />
              ) : (
                <ChevronDown className="h-4 w-4 text-health-teal" />
              )}
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="space-y-4 mt-2">
            <div className="p-5 bg-white rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-medium text-lg text-health-blue mb-2">Problem</h3>
              <p className="text-gray-600">{area.problem}</p>
            </div>
            
            <div className="p-5 bg-white rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-medium text-lg text-health-blue mb-2">Solution</h3>
              <p className="text-gray-600">{area.solution}</p>
            </div>
            
            <div className={cn(
              "flex items-center justify-between p-5 bg-white rounded-lg border border-gray-100 shadow-sm",
              "hover:border-health-teal transition-colors"
            )}>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-health-teal" />
                <HoverCard>
                  <HoverCardTrigger className="text-health-blue font-medium underline-offset-4 hover:underline">
                    Publication Details
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-1">
                      <h4 className="font-medium text-health-blue">{area.publication.title}</h4>
                      <p className="text-sm text-gray-500">{area.publication.authors}</p>
                      <p className="text-sm text-gray-500">{area.publication.journal}, {area.publication.year}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <a 
                href={area.publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-health-teal text-white text-sm px-4 py-2 rounded hover:bg-health-blue transition-colors"
              >
                View Publication
              </a>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};
