import React from 'react';
import { Mail, ChevronRight, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Clock } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Be part of a movement where automotive passion drives positive change. Subscribe to our newsletter for event updates, success stories, and ways to make an impact.
            </p>
            
            <form className="mb-12">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
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
                    <p className="text-blue-100">123 Gear Drive</p>
                    <p className="text-blue-100">Los Angeles, CA 90001</p>
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
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Have questions about our events, volunteering opportunities, or how you can support our mission? We'd love to hear from you.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-blue-100 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-blue-100 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-blue-100 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-blue-100 mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                >
                  <option value="">Select a topic</option>
                  <option value="events">Events & Shows</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="donate">Donations</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-100 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-white resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center"
              >
                Send Message
                <ChevronRight className="h-5 w-5 ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;