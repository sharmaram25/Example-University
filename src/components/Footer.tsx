import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <span className="ml-2 text-xl font-bold">Example University</span>
            </div>
            <p className="text-sage">
              Empowering minds, shaping futures, and fostering innovation since 1900.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sage hover:text-secondary transition">About Us</Link></li>
              <li><Link to="/courses" className="text-sage hover:text-secondary transition">Programs</Link></li>
              <li><Link to="/admissions" className="text-sage hover:text-secondary transition">Admissions</Link></li>
              <li><Link to="/research" className="text-sage hover:text-secondary transition">Research</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/library" className="text-sage hover:text-secondary transition">Library</Link></li>
              <li><Link to="/student-portal" className="text-sage hover:text-secondary transition">Student Portal</Link></li>
              <li><Link to="/career-services" className="text-sage hover:text-secondary transition">Career Services</Link></li>
              <li><Link to="/alumni" className="text-sage hover:text-secondary transition">Alumni</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sage">
                <MapPin className="h-5 w-5 mr-2 text-secondary" />
                123 University Ave, City, State
              </li>
              <li className="flex items-center text-sage">
                <Phone className="h-5 w-5 mr-2 text-secondary" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-sage">
                <Mail className="h-5 w-5 mr-2 text-secondary" />
                info@example.edu
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sage">
          <p>© 2024 Example University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;