import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-gray-900 overflow-hidden">
      {/* Background overlay with opacity */}
      <div 
        className="absolute inset-0 bg-black opacity-50 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'multiply'
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block">Driving Change.</span>
          <span className="block">Fueling Hope.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Where car culture meets compassion, creating powerful impact for those who need it most.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#donate" 
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 text-lg w-full sm:w-auto"
          >
            Donate Now
          </a>
          <a 
            href="#mission" 
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 text-lg w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Hero;