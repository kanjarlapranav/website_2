
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-health-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-white"></div>
                <div className="h-6 w-6 rounded-full bg-health-teal -ml-2"></div>
              </div>
              <span className="font-poppins font-bold text-lg">One Health Tech Lab</span>
            </Link>
            <p className="text-sm text-gray-300 mt-4 max-w-xs">
              Pioneering innovative health technology research and end-to-end product development to improve healthcare outcomes worldwide.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="font-poppins text-lg font-medium mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/research" className="text-gray-300 hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/lab" className="text-gray-300 hover:text-white transition-colors">Lab</Link></li>
              <li><Link to="/publications" className="text-gray-300 hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>726, 729, Department of Bioscience and Biotechnology</p>
              <p>Life Sciences Building, IIT Kharagpur</p>
              <p>Kharagpur, West Bengal, 721302</p>
              <p className="mt-4">Email: <a href="mailto:vinaypatel@bt.iitkgp.ac.in" className="hover:text-white transition-colors">vinaypatel@bt.iitkgp.ac.in</a></p>
              <p>Phone: <a href="tel:03222-283766" className="hover:text-white transition-colors">03222-283766</a></p>
            </address>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-poppins text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for the latest research and news.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-health-blue-800 border border-gray-600 focus:border-health-teal focus:outline-none text-white placeholder:text-gray-400"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-health-teal hover:bg-opacity-90 transition-colors text-white py-2 px-4 rounded font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} One Health Tech Lab. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
