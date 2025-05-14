import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle';
import ResearchCard from '@/components/common/ResearchCard';
import NewsCard from '@/components/common/NewsCard';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  // Mock data for featured research areas
  const featuredResearch = [
    {
      title: "Rapid Prototyping",
      description: "We develop methods using xurography, 3D printing, and PCB techniques to rapidly prototype metal thin film sensors at a fraction of the cost.",
      imageUrl: "/Assets/Images/Xurography.png",
      link: "/research#rapid-prototyping"
    },
    {
      title: "Electrochemical Deposition",
      description: "Creating in-situ pretreatment methods for electrodes that improve sensitivity by 150% without requiring external chemicals.",
      imageUrl: "/Assets/Images/Electrochemical_protocols.png",
      link: "/research#electrochemical-deposition"
    },
    {
      title: "Chemiresistive Sensors",
      description: "Developing reagent-free hydrogen peroxide sensors using electropolymerized CNTs for medical diagnostics applications.",
      imageUrl: "/Assets/Images/H2O2_detection.png",
      link: "/research#chemiresistive-sensors"
    }
  ];

  // Updated news data
  const latestNews = [
    {
      title: "Farewell to the Graduating Batch",
      date: "May 5, 2025",
      excerpt: "We gave farewell to our graduating batch and went out to have lab lunch.",
      imageUrl: "/Assets/Images/GroupPhoto.jpg",
      slug: "lab-farewell-2025"
    },
    {
      title: "Results of Master Thesis Project: Advanced Creatinine Detection Methods",
      date: "April 30, 2025",
      excerpt: "Pranav's master thesis project has successfully developed enhanced methods for creatinine detection, with promising applications for early CKD diagnosis.",
      imageUrl: "/Assets/Images/Pranav_MTP.png",
      slug: "pranav-thesis-project-results"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-health-blue to-health-teal text-white">
        <div className="absolute inset-0">
          <div className="bg-health-blue/50 absolute inset-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Health technology research laboratory" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins animate-fade-in">
              Transforming Healthcare Through Sensor Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Developing solid-state sensor platforms using rapid prototyping, electrochemical deposition, and chemiresistive sensing for applications in healthcare, environmental, and bioprocess monitoring.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Link 
                to="/research" 
                className="bg-white text-health-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
                aria-label="Explore our research areas and projects"
              >
                Explore Research
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-white/10 border-2 border-white px-6 py-3 rounded-lg font-medium transition-colors"
                aria-label="Contact our lab for inquiries or collaborations"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-light rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-light rounded-full -z-10"></div>
              <img
                src="/Assets/Images/Sensor_fabrication.png"
                alt="Health Technology Research Equipment"
                className="rounded-lg shadow-xl w-full h-auto z-10 relative"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <SectionTitle 
                title="Advancing Health Through Technology" 
                className="mb-8"
              />
              <p className="text-gray-600 mb-6">
                The One Health Tech Lab is a multidisciplinary research group focused on developing low-cost, high-performance sensing technologies for healthcare, environmental, and industrial applications. We specialize in end-to-end product development using electrochemical, chemiresistive, and colorimetric platforms combined with rapid prototyping tools like xurography and 3D printing.
              </p>
              <p className="text-gray-600 mb-8">
                Our goal is to engineer robust, scalable solutions that make diagnostics and monitoring accessible in real-world and low-resource settings.
              </p>
              <Link 
                to="/lab" 
                className="inline-flex items-center text-health-blue hover:text-health-teal transition-colors font-medium"
                aria-label="Learn more about our lab team and facilities"
              >
                Learn more about our lab <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Our Research Areas" 
            subtitle="Exploring innovative technologies to address healthcare challenges across multiple domains."
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResearch.map((item, index) => (
              <ResearchCard
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/research"
              className="inline-flex items-center bg-health-blue hover:bg-opacity-90 text-white py-3 px-6 rounded-lg transition-colors font-medium"
              aria-label="View all our research areas and projects"
            >
              View All Research Areas <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-health-blue text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-poppins mb-2">5+</div>
              <p className="text-blue-100">Research Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-poppins mb-2">10+</div>
              <p className="text-blue-100">Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-poppins mb-2">30+</div>
              <p className="text-blue-100">Publications</p>
            </div>
            <div>
              <div className="text-4xl font-bold font-poppins mb-2">2</div>
              <p className="text-blue-100">Global Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Latest News" 
            subtitle="Stay updated with the latest developments and announcements from our lab."
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                date={news.date}
                excerpt={news.excerpt}
                imageUrl={news.imageUrl}
                slug={news.slug}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/news"
              className="inline-flex items-center text-health-blue hover:text-health-teal transition-colors font-medium"
              aria-label="View all our news and announcements"
            >
              View All News <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-health-blue to-health-teal text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Interested in Collaborating?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            We're always looking for research partners, industry collaborators, and talented individuals to join our mission of advancing healthcare through technology.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-health-blue hover:bg-opacity-90 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            aria-label="Contact us about collaboration opportunities"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
