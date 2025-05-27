import React from 'react';
import { Car, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="flex items-center mr-2">
              <Car className="h-6 w-6 text-red-600" />
              <Heart className="h-6 w-6 text-red-600 -ml-2" />
            </div>
            <h2 className="font-bold text-xl">Fuel for the Folks</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#mission" className="hover:text-red-600 transition-colors">Our Mission</a>
            <a href="#impact" className="hover:text-red-600 transition-colors">Impact</a>
            <a href="#testimonials" className="hover:text-red-600 transition-colors">Stories</a>
            <a href="#donate" className="hover:text-red-600 transition-colors">Donate</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Fuel for the Folks. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
        
        <p className="text-center text-gray-500 text-xs mt-8">
          Fuel for the Folks is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
        </p>
      </div>
    </footer>
  );
};

export default Footer;