import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { ResearchFocusArea } from '@/components/research/ResearchFocusArea';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image: string;
  problem: string;
  solution: string;
  publication: {
    title: string;
    authors: string;
    journal: string;
    year: string;
    link: string;
  };
}

const Research: React.FC = () => {
  const researchAreas: ResearchArea[] = [
    {
      id: "rapid-prototyping",
      title: "Rapid Prototyping",
      description: "We use xurography, 3D printing, and PCB techniques to rapidly prototype metal thin film sensors for various healthcare applications.",
      image: "/Assets/Images/Xurography.png",
      problem: "Traditional fabrication methods for metal thin film sensors are expensive, time-consuming, and often require specialized equipment that limits accessibility for many researchers. This creates a significant barrier to rapid iteration and innovation in medical sensor development.",
      solution: "We've developed a novel method using metal leaves and bench-top plotters to fabricate high-resolution patterns (<100 μm) at approximately 1/5th the cost of conventional sputter-coated gold electrodes. This approach enables researchers to quickly prototype and test new sensor designs without requiring expensive cleanroom facilities.",
      publication: {
        title: "Rapid Prototyping of Metal Thin Film Sensors Using Xurography and Benchtop Micro-Plotters",
        authors: "Patel et al.",
        journal: "Materials Today Communications",
        year: "2022",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S2352492822000101"
      }
    },
    {
      id: "electrochemical-deposition",
      title: "Electrochemical Deposition",
      description: "We develop in-situ pretreatment methods for electrodes used in various sensing applications, improving sensitivity and eliminating the need for external chemicals.",
      image: "/Assets/Images/Electrochemical_protocols.png",
      problem: "Conventional electrochemical sensors often require complex pretreatment processes using hazardous chemicals before they can be used effectively. These procedures add complexity, cost, and potential safety concerns to the sensor manufacturing process, while also creating challenges for real-world deployment.",
      solution: "Our research has developed innovative in-situ pretreatment methods for electrodes that eliminate the need for external chemicals while improving sensitivity by 150%. We specifically demonstrated this with phosphate sensors using cobalt electrodes, creating a more streamlined and environmentally friendly approach to sensor preparation.",
      publication: {
        title: "In-situ Pretreatment Methods for Electrochemical Phosphate Sensors",
        authors: "Patel et al.",
        journal: "Sensors and Actuators B",
        year: "2021",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0925400521013575"
      }
    },
    {
      id: "chemiresistive-sensors",
      title: "Chemiresistive Sensors",
      description: "We create reagent-free hydrogen peroxide sensors using electropolymerized carbon nanotubes (CNTs) for various diagnostic applications including glucose and galactose detection.",
      image: "/Assets/Images/H2O2_detection.png",
      problem: "Traditional hydrogen peroxide detection methods often require additional reagents like enzymes or mediators, which can increase costs, reduce shelf life, and complicate sensor integration into point-of-care diagnostic devices. These limitations hinder widespread adoption in resource-limited settings.",
      solution: "We've engineered reagent-free hydrogen peroxide sensors using electropolymerized carbon nanotubes (CNTs), creating a more stable and cost-effective platform for various diagnostic applications. Our sensors can be directly applied to glucose and galactose detection, providing a simpler approach to important medical diagnostics.",
      publication: {
        title: "Reagent-Free Hydrogen Peroxide Sensor Using Electropolymerized Carbon Nanotubes",
        authors: "Patel et al.",
        journal: "ACS Applied Nanomaterials",
        year: "2022",
        link: "https://pubs.acs.org/doi/abs/10.1021/acsanm.1c04540"
      }
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Research"
        subtitle="Exploring innovative technologies to solve healthcare challenges through applied science and engineering."
        imageUrl="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
      />
      
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-health-blue mb-6 font-poppins">
              Research Focus Areas
            </h2>
            <p className="text-gray-600">
              Our lab focuses on developing innovative sensors and measurement systems for healthcare applications. We emphasize pragmatic solutions that bridge the gap between laboratory research and real-world implementation across multiple technological domains.
            </p>
          </div>
          
          <div className="space-y-24 px-2 sm:px-4">
            {researchAreas.map((area, index) => (
              <ResearchFocusArea 
                key={area.id}
                area={area}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-health-blue mb-6 font-poppins text-center">
              Research Methodology
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Our research follows a comprehensive methodology that ensures rigorous scientific inquiry while maintaining practical applications in healthcare settings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-health-blue font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-health-blue mb-3">Problem Identification</h3>
                <p className="text-gray-600">
                  We collaborate with healthcare providers to identify real clinical needs that can be addressed through technological innovation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-health-blue font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-health-blue mb-3">Design & Prototyping</h3>
                <p className="text-gray-600">
                  Using our rapid prototyping capabilities, we develop multiple iterations of potential solutions, testing and refining as we go.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-health-blue font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-health-blue mb-3">Validation & Optimization</h3>
                <p className="text-gray-600">
                  We rigorously test our technologies against established standards and optimize performance through data-driven improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-health-blue text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-poppins">
            Explore Our Recent Publications
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto text-white/90">
            Our research has been published in leading scientific journals, demonstrating our commitment to advancing knowledge in health technology.
          </p>
          <Link
            to="/publications"
            className="inline-flex items-center bg-white text-health-blue hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors font-medium"
            aria-label="View our published research papers and patents"
          >
            View Publications <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5" 
                alt="Laboratory collaboration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-health-blue font-poppins">
                Research Collaborations
              </h2>
              <p className="text-gray-600 mb-6">
                We actively collaborate with academic institutions, healthcare providers, and industry partners around the world. These partnerships enable us to tackle complex healthcare challenges from multiple perspectives.
              </p>
              <p className="text-gray-600 mb-8">
                Our collaborative approach includes joint grant applications, shared laboratory resources, student exchanges, and multidisciplinary research teams that bring together expertise from engineering, medicine, computer science, and design.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-health-teal hover:bg-opacity-90 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                aria-label="Contact us about research collaboration opportunities"
              >
                Partner With Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
