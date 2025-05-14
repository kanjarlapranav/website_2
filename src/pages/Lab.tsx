
import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, GraduationCap, Beaker, FlaskConical } from "lucide-react";
import PageHeader from '@/components/layout/PageHeader';
import SectionTitle from '@/components/common/SectionTitle';
import TeamMemberCard from '@/components/common/TeamMemberCard';

interface LabMember {
  name: string;
  title: string;
  imageUrl: string;
  bio?: string;
  email?: string;
  researchInterests: string[];
}

interface StudentMember {
  name: string;
  researchAreas: string[];
  imageUrl?: string;
}

const Lab: React.FC = () => {
  const labDirectors: LabMember[] = [
    {
      name: "Dr. Vinay Patel",
      title: "Lab PI, Assistant Professor - Bioscience and Biotechnology",
      imageUrl: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pQUOf6gAAAAJ&citpid=3",
      bio: "Dr. Vinay Patel is an Assistant Professor (Grade II) in the Department of Bioscience and Biotechnology at IIT Kharagpur and Director of the One Health Tech Lab. His work focuses on low-cost, solid-state sensor technologies for point-of-care medical diagnostics, environmental monitoring, and healthcare applications.",
      email: "vinaypatel@bt.iitkgp.ac.in",
      researchInterests: ["Electrochemical sensors", "Biosensors", "Water quality sensors", "sensors", "chemiresistive sensors"]
    }
  ];

  const seniorResearchers: LabMember[] = [
    {
      name: "Sanchita Kuri",
      title: "Research Scholar",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      researchInterests: ["Remote Care", "Polymeric Sensors", "Healthcare Sensors"]
    }
  ];

  const mtechStudents: StudentMember[] = [
    {
      name: "Antika Kumari",
      researchAreas: ["Glucose detection", "Biosensors"]
    },
    {
      name: "Sweta Kumari",
      researchAreas: ["Waste Water detection", "Biosensors"]
    }
  ];

  // Previously 5th Year Students, now moved to alumni
  const labAlumni: StudentMember[] = [
    {
      name: "Sayan Sarkar",
      researchAreas: ["PCB electrodes", "Electrodeposition"]
    },
    {
      name: "Kanjarla Pranav",
      researchAreas: ["Creatinine Detection", "Biosensors", "Molecularly Imprinted Polymer"]
    },
    {
      name: "Parth Bharate",
      researchAreas: ["Nadi Detection"]
    },
    {
      name: "Ratnesh Kr Gautam",
      researchAreas: ["Potentiostat"]
    }
  ];

  // Previously 4th Year Students, now moved to 5th Year Students
  const fifthYearStudents: StudentMember[] = [
    {
      name: "Khushal Borban",
      researchAreas: ["Potentiostat"]
    },
    {
      name: "Giri Prasad",
      researchAreas: ["Biosensors"]
    }
  ];

  // New dummy data for 4th Year Students
  const fourthYearStudents: StudentMember[] = [
    {
      name: "Position Available",
      researchAreas: ["Apply Now"]
    },
    {
      name: "Position Available",
      researchAreas: ["Apply Now"]
    }
  ];

  const facilities = [
    {
      name: "Sensor Fabrication Lab",
      description: "Houses our specialized lab facilities including a fume hood, essential chemicals, and a bath ultra sonicator for seamless experimentation and prototyping.",
      image: "/Assets/Images/Second_lab.jpg"
    },
    {
      name: "Prototyping & Instrumentation Lab",
      description: "A fully equipped electronics lab for developing and testing wearable health monitoring devices, with facilities for circuit design, potentiostat, and sensor calibration.",
      image: "/Assets/Images/prototyping_lab.jpg"
    }
  ];

  // Function to render student member cards
  const renderStudentCards = (students: StudentMember[], roleTitle: string) => {
    return (
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-health-blue mb-4 flex items-center justify-center">
          {roleTitle === "M.Tech Students" ? (
            <GraduationCap className="mr-2" />
          ) : roleTitle.includes("5th Year") ? (
            <FlaskConical className="mr-2" />
          ) : (
            <Beaker className="mr-2" />
          )}
          {roleTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-auto max-w-6xl">
          {students.map((student, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow w-full max-w-xs">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Avatar className="h-8 w-8 bg-primary-light">
                    <AvatarImage src={student.imageUrl} />
                    <AvatarFallback className="bg-health-teal text-white">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-medium">{student.name}</h4>
                </div>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-1 mt-1">
                    {student.researchAreas.map((area, idx) => (
                      <HoverCard key={idx}>
                        <HoverCardTrigger asChild>
                          <span 
                            className="text-xs bg-primary-light text-health-blue px-2 py-0.5 rounded-full cursor-help"
                            tabIndex={0}
                          >
                            {area}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <p className="text-sm">Research area: {area}</p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <PageHeader
        title="Our Lab"
        subtitle="Meet our team and explore our state-of-the-art facilities dedicated to health technology innovation."
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      />

      {/* Lab Overview - Updated to increase image size and add padding to text */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 pl-0 lg:pl-6">
              <SectionTitle title="About Our Lab" />
              <p className="text-gray-600 text-justify">
                One Health Tech laboratory focuses on development of end-to-end product development for various applications. We develop solid-state sensing platforms technologies by utilizing sensing principles such as electrochemical, chemiresistive, colorimetry and fluorescence, and rapid prototyping methods like xurography, laser, to deliver low-cost and robust sensing devices for applications in medical diagnostics, healthcare monitoring, environmental monitoring and bioprocess monitoring.
              </p>  
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
              <img
                src="/Assets/Images/One_Health_Tech_Lab_Section.png"
                alt="One Health Tech Lab"
                className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lab Directors - Decreased size and centered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Lab PI" 
            centered 
          />
          <div className="max-w-xl mx-auto">
            {labDirectors.map((director, index) => (
              <TeamMemberCard
                key={index}
                name={director.name}
                title={director.title}
                imageUrl={director.imageUrl}
                bio={director.bio}
                email={director.email}
                researchInterests={director.researchInterests}
                className="mx-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Researchers - Improved layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Senior Researchers" 
            centered 
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {seniorResearchers.map((researcher, index) => (
              <TeamMemberCard
                key={index}
                name={researcher.name}
                title={researcher.title}
                imageUrl={researcher.imageUrl}
                researchInterests={researcher.researchInterests}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Students - Updated to center everything with equal spacing from ends */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Lab Members"
            subtitle="Our talented students working on cutting-edge research projects"
            centered 
          />
          
          {renderStudentCards(mtechStudents, "M.Tech Students")}
          {renderStudentCards(fifthYearStudents, "5th Year Students")}
          {renderStudentCards(fourthYearStudents, "4th Year Students")}

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Our lab also includes 1 PhD researcher, 2 Master Students, 6 Undergraduates working across various research areas.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Alumni - Updated to center everything with equal spacing from ends */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Lab Alumni"
            subtitle="Former members who contributed to our research and projects"
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-auto max-w-6xl">
            {labAlumni.map((alumni, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow w-full max-w-xs">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Avatar className="h-8 w-8 bg-primary-light">
                      <AvatarImage src={alumni.imageUrl} />
                      <AvatarFallback className="bg-health-teal text-white">
                        {alumni.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-medium">{alumni.name}</h4>
                  </div>
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1 mt-1">
                      {alumni.researchAreas.map((area, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities - Updated layout to ensure equal spacing from ends */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Our Facilities" 
            subtitle="State-of-the-art research spaces designed for health technology innovation."
            centered 
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-health-blue mb-3 font-poppins">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities - Improved UI */}
      <section className="py-16 bg-health-teal text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">
            Join Our Lab
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We're always looking for talented researchers, students, and collaborators who are passionate about using technology to improve healthcare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Students</h3>
              <p className="mb-4 text-white/90">
                We offer opportunities for PhD candidates, master's students, and undergraduates interested in health technology research.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Researchers</h3>
              <p className="mb-4 text-white/90">
                We periodically have openings for postdoctoral fellows and research scientists across our five research areas.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Collaborators</h3>
              <p className="mb-4 text-white/90">
                We welcome collaborations with healthcare organizations, industry partners, and other academic institutions.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a 
              href="/contact" 
              className="bg-white text-health-teal hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Contact Us About Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
