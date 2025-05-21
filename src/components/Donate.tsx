import React from 'react';
import { DollarSign, Calendar, Users } from 'lucide-react';

interface DonationOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  primary?: boolean;
}

const DonationOption: React.FC<DonationOptionProps> = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  buttonLink,
  primary = false 
}) => {
  return (
    <div className={`rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 ${
      primary 
        ? 'bg-red-600 text-white shadow-lg hover:shadow-xl border-2 border-red-600' 
        : 'bg-white text-gray-800 shadow-md hover:shadow-lg border-2 border-gray-100'
    }`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-4 text-center ${primary ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`mb-6 leading-relaxed text-center ${primary ? 'text-white/90' : 'text-gray-700'}`}>
        {description}
      </p>
      <div className="text-center">
        <a 
          href={buttonLink} 
          className={`inline-block px-6 py-3 rounded-md font-medium transition-colors ${
            primary 
              ? 'bg-white text-red-600 hover:bg-gray-100' 
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const Donate: React.FC = () => {
  return (
    <section id="donate" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your support fuels our mission. Join us in making a difference through donations, volunteering, or attending our events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <DonationOption 
            icon={<DollarSign className="h-10 w-10 text-red-600" />}
            title="Make a Donation"
            description="Your financial contribution directly supports our initiatives for veterans, children's hospitals, and holiday toy drives."
            buttonText="Donate Now"
            buttonLink="#donate-form"
            primary={true}
          />
          
          <DonationOption 
            icon={<Calendar className="h-10 w-10 text-red-600" />}
            title="Attend Events"
            description="Join our car shows, rallies, and community gatherings. Your ticket proceeds go directly to our charitable initiatives."
            buttonText="Upcoming Events"
            buttonLink="#events"
          />
          
          <DonationOption 
            icon={<Users className="h-10 w-10 text-red-600" />}
            title="Volunteer With Us"
            description="Share your time and talents. We need organizers, promoters, and day-of-event helpers to make our mission possible."
            buttonText="Join Our Team"
            buttonLink="#volunteer"
          />
        </div>
        
        <div id="donate-form" className="bg-white rounded-lg shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Donate Today</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="johndoe@example.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Donation Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[25, 50, 100, 250].map((amount) => (
                  <button 
                    key={amount}
                    type="button"
                    className="px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none hover:border-red-600 hover:bg-red-50 transition-colors"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="custom" className="block text-gray-700 mb-2">Custom Amount</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input 
                  type="number" 
                  id="custom" 
                  className="w-full px-4 py-3 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors"
            >
              Complete Donation
            </button>
            
            <p className="text-sm text-gray-600 text-center">
              All donations are tax-deductible. You will receive a receipt via email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Donate;