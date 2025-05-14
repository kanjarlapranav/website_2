
import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import PublicationCard from '@/components/common/PublicationCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal?: string; // Made optional
  year: string;
  type: 'journal' | 'patent' | 'conference';
  doi?: string;
  abstract?: string;
  citations?: number;
  link?: string;
}

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'journal' | 'patent' | 'conference'>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [years, setYears] = useState<string[]>([]);
  
  // Updated publications data from Google Scholar with correct titles and information
  const publicationsData: Publication[] = [
    {
      id: 1,
      title: 'Solid state sensors for hydrogen peroxide detectionSolid state sensors for hydrogen peroxide detection',
      authors: 'Vinay Patel, Peter Kruse, Ponnambalam Ravi Selvaganapathy',
      journal: 'Biosensors',
      year: '2020',
      type: 'journal',
      doi: '10.3390/bios11010009',
      citations: 60,
      abstract: 'Hydrogen peroxide (H2O2) is a key molecule in numerous physiological, industrial, and environmental processes. H2O2 is monitored using various methods like colorimetry, luminescence, fluorescence, and electrochemical methods. Here, we aim to provide a comprehensive review of solid state sensors to monitor H2O2. The review covers three categories of sensors: chemiresistive, conductometric, and field effect transistors. A brief description of the sensing mechanisms of these sensors has been provided. All three sensor types are evaluated based on the sensing parameters like sensitivity, limit of detection, measuring range and response time. We highlight those sensors which have advanced the field by using innovative materials or sensor fabrication techniques. Finally, we discuss the limitations of current solid state sensors and the future directions for research and development in this exciting area.',
      link: 'https://www.mdpi.com/2079-6374/11/1/9'
    },
    {
      id: 2,
      title: 'Voices of Nanomedicine: Blueprint Guidelines for Collaboration in Addressing Global Unmet Medical Needs',
      authors: 'Rajendra Prasad, Arnab Ghosh, Vinay Patel, Berney Peng, Bárbara B Mendes, Eaint Honey Aung Win, Lucia Gemma Delogu, Joyce Y Wong, Kristin J Pischel, Jayesh R Bellare, Amnon Bar-Shir, Avnesh S Thakor, Wolfgang J Parak, Zaver M Bhujwalla, Yu Shrike Zhang, Nagavendra Kommineni, Vince M Rotello, Weibo Cai, Twan Lammers, Teri W Odom, Govindarajan Padmanaban, Dan Peer, Jonathan F Lovell, Rohit Srivastava, Robert Langer, João Conde',
      journal: 'American Chemical Society',
      year: '2025',
      type: 'journal',
      doi: '10.1021/acsnano.4c13513',
      citations: 4,
      link: 'https://pubs.acs.org/doi/abs/10.1021/acsnano.4c13513'
    },
    {
      id: 3,
      title: 'Opto-electrochemical transducers for molecular sensing utilizing nanozyme-based sensing technologies',
      authors: 'Indrani Nandi, Vinay Patel, Rohit Srivastava, Pranjal Chandra',
      journal: 'Microchemical Journal',
      year: '2024',
      type: 'journal',
      doi: '10.1016/j.microc.2024.111360',
      citations: 1,
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S0026265X24014723'
    },
    {
      id: 4,
      title: 'Versatile Approaches of Quantum Dots in Biosensing and Imaging',
      authors: 'Daphika S Dkhar, Rohini Kumari, Vinay Patel, Ananya Srivastava, Rajendra Prasad, Rohit Srivastava, Pranjal Chandra',
      journal: 'John Wiley & Sons, Inc.',
      year: '2024',
      type: 'journal',
      doi: '10.1002/wnan.1998',
      citations: 5,
      link: 'https://wires.onlinelibrary.wiley.com/doi/abs/10.1002/wnan.1998'
    },
    {
      id: 5,
      title: 'Evolution of materials, geometries, and fabrication of sweat patches and their use in high-throughput point-of-care/onsite sensing',
      authors: 'Vinay Patel, Shweta Bhatt, Aritra Daspoddar, Vedant Shirsekar, Rohini Kumari, Pranjal Chandra, Rohit Srivastava',
      journal: 'Microchemical Journal',
      year: '2024',
      type: 'journal',
      doi: '10.1016/j.microc.2024.111165',
      citations: 1,
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S0026265X24012773'
    },
    {
      id: 6,
      title: 'Maximization of energy recovery from starch processing wastewater by thermophilic dark fermentation coupled with microbial fuel cell technology',
      authors: 'Mohit Kumar, Soumya Pandit, Vinay Patel, Namita Khanna, Moupriya Nag, Dibyajit Lahiri, Rina Rani Ray, Alok Prasad Das, Debabrata Das',
      journal: 'Geomicrobiology Journal',
      year: '2024',
      type: 'journal',
      doi: '10.1080/01490451.2023.2209555',
      citations: 31,
      link: 'https://www.tandfonline.com/doi/abs/10.1080/01490451.2023.2209555'
    },
    {
      id: 7,
      title: 'Theranostic applications of peptide-based nanoformulations for growth factor defective cancers',
      authors: 'Arnab Ghosh, Priyanka Maske, Vinay Patel, Jyoti Dubey, Kundu Aniket, Rohit Srivastava',
      journal: 'International Journal of Biological Macromolecules',
      year: '2024',
      type: 'journal',
      doi: '10.1016/j.ijbiomac.2023.129151',
      citations: 3,
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S0141813023060506'
    },
    {
      id: 8,
      title: 'APPARATUS AND METHODS FOR MEASURING PHOSPHATE IN WATER',
      authors: 'Ponnambalam Ravi Selvaganapathy, Vinay Patel',
      year: '2023',
      type: 'patent',
      link: 'https://patents.google.com/patent/US20230072883A1/en'
    }
  ];
  
  // Find most cited publication - this is our highlighted paper from MDPI
  const mostCitedPublication = publicationsData.find(pub => pub.doi === "10.3390/bios11010009") || publicationsData[0];
  
  useEffect(() => {
    // Extract unique years and sort descending
    const uniqueYears = Array.from(new Set(publicationsData.map(pub => pub.year)))
      .sort((a, b) => parseInt(b) - parseInt(a));
    
    setYears(uniqueYears);
    setPublications(publicationsData);
  }, []);
  
  // Filter publications based on selected filters
  const filteredPublications = publications.filter(pub => {
    const typeMatch = filter === 'all' || pub.type === filter;
    const yearMatch = yearFilter === 'all' || pub.year === yearFilter;
    return typeMatch && yearMatch;
  });

  return (
    <div>
      <PageHeader
        title="Publications"
        subtitle="Our research publications, patents, and conference papers."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Most Cited Publication Highlight */}
          <div className="mb-12 bg-gradient-to-r from-health-blue/10 to-health-teal/10 p-6 rounded-lg border border-health-teal/30">
            <h2 className="text-xl md:text-2xl font-bold text-health-blue mb-4">
              Most Cited Publication
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <h3 className="font-medium text-lg mb-2">{mostCitedPublication.title}</h3>
                <p className="text-gray-600 mb-2">{mostCitedPublication.authors}</p>
                <p className="text-gray-500 mb-4">
                  {mostCitedPublication.journal}, {mostCitedPublication.year}
                </p>
                {mostCitedPublication.abstract && (
                  <p className="text-gray-600 mb-4">{mostCitedPublication.abstract}</p>
                )}
                <div className="flex items-center space-x-4">
                  <a 
                    href={mostCitedPublication.link || `https://doi.org/${mostCitedPublication.doi}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-health-blue hover:text-health-teal transition-colors"
                  >
                    View Publication
                  </a>
                  <Badge variant="outline" className="bg-health-blue/10 text-health-blue">
                    {mostCitedPublication.citations} Citations
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(value) => setFilter(value as any)}>
              <TabsList>
                <TabsTrigger value="all">All Publications</TabsTrigger>
                <TabsTrigger value="journal">Journal Articles</TabsTrigger>
                <TabsTrigger value="patent">Patents</TabsTrigger>
                <TabsTrigger value="conference">Conference Papers</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="w-full md:w-auto">
              <select 
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-health-blue"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map(publication => (
                <PublicationCard 
                  key={publication.id}
                  title={publication.title}
                  authors={publication.authors}
                  journal={publication.journal}
                  year={publication.year}
                  doi={publication.doi}
                  link={publication.link}
                  type={publication.type}
                  citations={publication.citations}
                />
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                No publications found matching your filters.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
