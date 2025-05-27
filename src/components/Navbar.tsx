import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Car } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <Car className="h-6 w-6 text-red-600" />
            <Heart className="h-6 w-6 text-red-600 -ml-2" />
          </div>
          <h1 className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Fuel for the Folks
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="#mission" 
            className={`font-medium hover:text-red-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Our Mission
          </a>
          <a 
            href="#impact" 
            className={`font-medium hover:text-red-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Impact
          </a>
          <a 
            href="#testimonials" 
            className={`font-medium hover:text-red-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Stories
          </a>
          <a 
            href="#contact" 
            className={`font-medium hover:text-red-600 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Contact
          </a>
          <a 
            href="#donate" 
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
          >
            Donate
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a 
              href="#mission" 
              className="block font-medium text-gray-800 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Our Mission
            </a>
            <a 
              href="#impact" 
              className="block font-medium text-gray-800 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </a>
            <a 
              href="#testimonials" 
              className="block font-medium text-gray-800 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Stories
            </a>
            <a 
              href="#contact" 
              className="block font-medium text-gray-800 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#donate" 
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;