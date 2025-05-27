import React, { useState } from 'react';
import { Mail, ChevronRight, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Clock } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const formData = {
      email: newsletterEmail,
    };

    console.log('Newsletter Subscription:', formData);
    alert('Thank you for subscribing! (This is a demo; no data has been saved.) Email logged to console.');
    setNewsletterEmail(''); // Reset email field
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Based in the DMV, we welcome connections with fellow car enthusiasts and supporters. Whether you're looking to join an event, donate, or learn more about our cause, reach out anytime. Let's fuel the future together!
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-12">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-blue-300"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  Join Us
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            </form>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-blue-100">DMV Area</p>
                    <p className="text-blue-100">Washington, DC</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Weekly Meets</h3>
                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-blue-100">Every Saturday</p>
                    <p className="text-blue-100">8:00 AM - 11:00 AM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-blue-100">(555) 123-4567</p>
                    <p className="text-blue-100">info@fuelforthefolks.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-6">
              <a href="javascript:void(0);" className="group flex items-center space-x-3 text-blue-100 hover:text-white transform transition-all duration-300 hover:scale-105">
                <Facebook className="h-6 w-6" />
                <span>Facebook</span>
              </a>
              <a href="javascript:void(0);" className="group flex items-center space-x-3 text-blue-100 hover:text-white transform transition-all duration-300 hover:scale-105">
                <Instagram className="h-6 w-6" />
                <span>Instagram</span>
              </a>
              <a href="javascript:void(0);" className="group flex items-center space-x-3 text-blue-100 hover:text-white transform transition-all duration-300 hover:scale-105">
                <Twitter className="h-6 w-6" />
                <span>Twitter</span>
              </a>
              <a href="javascript:void(0);" className="group flex items-center space-x-3 text-blue-100 hover:text-white transform transition-all duration-300 hover:scale-105">
                <Youtube className="h-6 w-6" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;