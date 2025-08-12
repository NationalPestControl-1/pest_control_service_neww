import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">National Pest Control Service</h3>
            <p className="text-gray-300 mb-4">
              Professional and reliable pest control services across Delhi. 
              Over 10 years of trusted service with 3500+ satisfied customers.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Currently accepting new clients</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-green-500" />
                <span className="text-gray-300">info@nationalpestcontrol.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-green-500" />
                <span className="text-gray-300">C-66, Pandav Nagar, Delhi - 110092</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 National Pest Control Service. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Service Guarantee</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
