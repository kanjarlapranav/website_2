
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/common/ContactForm';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for collaborations, inquiries, or opportunities."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/5">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-health-blue font-poppins">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-12">
                Have questions about our research? Interested in collaboration opportunities? Want to learn more about our lab? We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary-light p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-health-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                    <address className="not-italic text-gray-600">
                      726, 729, Department of Bioscience and Biotechnology<br />
                      Life Sciences Building, IIT Kharagpur<br />
                      Kharagpur, West Bengal, 721302
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary-light p-3 rounded-full">
                      <Phone className="h-6 w-6 text-health-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:03222-283766" className="hover:text-health-blue transition-colors">
                        03222-283766
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary-light p-3 rounded-full">
                      <Mail className="h-6 w-6 text-health-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:vinaypatel@bt.iitkgp.ac.in" className="hover:text-health-blue transition-colors">
                        vinaypatel@bt.iitkgp.ac.in
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary-light p-3 rounded-full">
                      <Clock className="h-6 w-6 text-health-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <h3 className="font-semibold text-xl text-health-blue mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/vinaypatel2482/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-health-blue">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/vinaypatel2482/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-health-blue">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/vinaypatel2482/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-health-blue">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-health-blue font-poppins">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-health-blue font-poppins text-center">
            Find Us
          </h2>
          
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-md">
            {/* Embed a Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.100258543669!2d87.29386410103866!3d22.314891807357778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d45b28077808f%3A0xfeaec408883ef7cb!2sLife%20science%20building!5e0!3m2!1sen!2sin!4v1746784160186!5m2!1sen!2sin"
              width="1200"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lab location map"
              aria-label="Map showing the location of One Health Tech Lab"
            />

            {/* Map attribution */}
            <div className="absolute bottom-2 right-2">
              <a 
                href="https://www.google.com/maps/place/22%C2%B018'53.9%22N+87%C2%B018'44.5%22E/@22.314998,87.312367,19z/data=!4m4!3m3!8m2!3d22.314967!4d87.31236?hl=en&entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white px-3 py-1 rounded-md shadow-sm text-sm text-gray-600 hover:text-health-blue transition-colors"
              >
                Open in Google Maps <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-health-blue font-poppins text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-3 text-health-blue">
                How can I collaborate with the lab?
              </h3>
              <p className="text-gray-600">
                We welcome collaborations with academic institutions, healthcare organizations, industry partners, and government agencies. Please contact us through the form above with details about your proposed collaboration, and our team will follow up to discuss possibilities.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-3 text-health-blue">
                Are there opportunities for students?
              </h3>
              <p className="text-gray-600">
                Yes, we offer research opportunities for graduate and undergraduate students. We typically accept students for summer internships and semester-long research assistantships. Check our News page for current openings or contact us directly with your resume and areas of interest.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-3 text-health-blue">
                Do you provide consulting services?
              </h3>
              <p className="text-gray-600">
                Our researchers occasionally provide consulting services in their areas of expertise. Please contact us with specific details about your needs, and we'll let you know if we can assist or recommend appropriate resources.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-3 text-health-blue">
                How can I stay updated about your research?
              </h3>
              <p className="text-gray-600">
                You can subscribe to our newsletter for regular updates, follow us on social media, or check our News page periodically. We also publish our research findings in academic journals and present at conferences, which are listed on our Publications page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
