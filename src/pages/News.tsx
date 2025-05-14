import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import NewsCard from '@/components/common/NewsCard';
import { Separator } from '@/components/ui/separator';
import { Calendar, Award, Users } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: 'press' | 'award' | 'event';
  imageUrl?: string;
}

const newsData: NewsItem[] = [
  {
    id: "lab-farewell-2025",
    title: "Farewell to the Graduating Batch",
    date: "May 5, 2025",
    excerpt: "We bid farewell to our graduating batch with a celebratory lab lunch outing.",
    content: `
      <p>Today marked a bittersweet occasion as the One Health Tech Lab bid farewell to our graduating batch of researchers and students. The entire lab gathered to celebrate their achievements and wish them well in their future endeavors.</p>
      
      <p>After a warm ceremony in the lab each graduate shared their most memorable experiences post that we all enjoyed a special lunch at a local restaurant. The afternoon was filled with laughter, stories, and reflections on the work accomplished by our departing colleagues.</p>
      
      <p>"While we're sad to see them go, we're excited to see how they'll continue to advance the field in their new positions."</p>
      
      <p>Several of our graduating members will be continuing on to pursue high studies for UPSE, while others are taking positions in industry. We're proud of all they've achieved and look forward to future collaborations.</p>
      
      <p>The lab extends heartfelt congratulations to all our graduates and welcomes them as the newest members of our growing alumni community.</p>
    `,
    category: 'event',
    imageUrl: "/Assets/Images/GroupPhoto.jpg"
  },
  {
    id: "pranav-thesis-project-results",
    title: "Results of Master Thesis Project: Advanced Creatinine Detection Methods",
    date: "April 30, 2025",
    excerpt: "Pranav's master thesis project has successfully developed enhanced methods for creatinine detection, with promising applications for early CKD diagnosis.",
    content: `
      <p>We are pleased to share the results of Pranav's master thesis project focused on developing improved methods for creatinine detection—a crucial biomarker for kidney function assessment and early diagnosis of chronic kidney disease (CKD).</p>
      
      <p>Creatinine is an important biomarker related to the kidney's function and forms an essential part of early diagnosis of chronic kidney disease (CKD). Proper detection of an increase in the amount of creatinine at an appropriate time is crucial for the diagnosis of CKD, because intervention can be applied when at an early stage so as to reduce the further progress of the disease.</p>
      
      <p>The project explored two promising approaches:</p>
      
      <h3>Colorimetric Method</h3>
      <p>Based on the Jaffe reaction, this method uses an alkaline picrate solution that reacts with creatinine to produce a distinctive reddish-orange color. The experimental data indicates that this optimized assay can differentiate between normal and elevated creatinine concentrations very accurately—a crucial factor for early diagnosis and subsequent monitoring of patients with CKD.</p>
      
      <p>Initially performed on Thermoscientific's Genesys 180 UV-Visible Spectrophotometer, the research later shifted to IO Rodeo's portable spectrophotometer to explore cheaper and more convenient alternatives for point-of-care applications.</p>
      
      <h3>Molecular Imprinted Polymer (MIP) Based Biosensor</h3>
      <p>The project successfully established a protocol for the synthesis of CuO@MIP polymer, using Methacrylic acid (MAA) as the monomer, N,N′-(1,2-Dihydroxy Ethylene)bisacrylamide (DHEBA) as the cross-linker, and Azobisisobutyronitrile (AIBN) as the initiator. A graphite composite paste was prepared to coat on top of a gold electrode.</p>
      
      <p>Cyclic Voltammetric analysis was performed on the developed biosensor, and a Lovable AI-based website was created for visual representation of the data.</p>
      
      <p>This research has significantly advanced the diagnostics of CKD by developing an enhanced Jaffe-based colorimetric assay for creatinine measurement and also by providing an innovative CuO@MIP based biosensor for point-of-care testing.</p>
      
      <p>Congratulations to Pranav on this significant contribution to the field of healthcare diagnostics!</p>
    `,
    category: 'press',
    imageUrl: "/Assets/Images/Pranav_MTP.png"
  }
];

const News: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'press' | 'award' | 'event'>('all');
  
  // If a slug is provided, show the full news article
  if (slug) {
    const newsItem = newsData.find(item => item.id === slug);
    
    if (!newsItem) {
      return (
        <div className="container mx-auto px-4 md:px-8 py-16">
          <h1 className="text-3xl font-bold text-health-blue mb-4">News Item Not Found</h1>
          <p>The requested news article could not be found.</p>
        </div>
      );
    }
    
    return (
      <div>
        <PageHeader
          title={newsItem.title}
          subtitle={`${newsItem.date} | ${getCategoryLabel(newsItem.category)}`}
          imageUrl={newsItem.imageUrl}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: newsItem.content }} className="prose prose-lg max-w-none" />
              
              <Separator className="my-8" />
              
              <a 
                href="/news"
                className="text-health-blue hover:text-health-teal transition-colors"
              >
                ← Back to all news
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // Filter news items based on category
  const filteredNews = newsData.filter(item => 
    categoryFilter === 'all' || item.category === categoryFilter
  );

  return (
    <div>
      <PageHeader
        title="News & Events"
        subtitle="Stay updated with the latest announcements, achievements, and upcoming events from our lab."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button 
              onClick={() => setCategoryFilter('all')}
              className={`px-4 py-2 rounded-full border ${
                categoryFilter === 'all' 
                  ? 'bg-health-blue text-white border-health-blue' 
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }`}
            >
              All News
            </button>
            <button 
              onClick={() => setCategoryFilter('press')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                categoryFilter === 'press' 
                  ? 'bg-health-blue text-white border-health-blue' 
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Users size={16} /> Press Releases
            </button>
            <button 
              onClick={() => setCategoryFilter('award')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                categoryFilter === 'award' 
                  ? 'bg-health-blue text-white border-health-blue' 
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Award size={16} /> Awards
            </button>
            <button 
              onClick={() => setCategoryFilter('event')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                categoryFilter === 'event' 
                  ? 'bg-health-blue text-white border-health-blue' 
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Calendar size={16} /> Events
            </button>
          </div>
          
          {/* News items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.map((newsItem) => (
              <NewsCard
                key={newsItem.id}
                title={newsItem.title}
                date={newsItem.date}
                excerpt={newsItem.excerpt}
                imageUrl={newsItem.imageUrl}
                slug={newsItem.id}
              />
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No news items found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Helper function to get category label
function getCategoryLabel(category: string): string {
  switch (category) {
    case 'press':
      return 'Press Release';
    case 'award':
      return 'Award';
    case 'event':
      return 'Event';
    default:
      return 'News';
  }
}

export default News;
