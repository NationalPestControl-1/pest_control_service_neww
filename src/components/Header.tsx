import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600">National Pest Control</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Contact</a>
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-2">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
