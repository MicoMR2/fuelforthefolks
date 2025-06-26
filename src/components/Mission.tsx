import React from 'react';
import { Heart, Users, Calendar } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Fuel for the Folks, our mission is to harness the passion and camaraderie of the DMV and MR2 car community as a whole to drive positive change.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We organize exciting car events and raffles that bring car enthusiasts together to raise funds for veterans, children's hospitals, and other important causes. We believe in the power of our community to make a tangible impact, one event at a time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a simple idea: to unite MR2 car enthusiasts for a cause greater than ourselves. What started as a passionate group of car lovers has grown into a thriving community dedicated to giving back.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our story is one of friendship, shared interests, and a collective desire to make a difference, proving that even a niche community can have a big impact on the world.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <div className="flex justify-center">
                  <Heart className="h-10 w-10 text-red-600 mb-3" />
                </div>
                <h3 className="font-medium text-gray-900">Compassion</h3>
                <p className="text-sm text-gray-600 mt-2">Driving change with heart</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Users className="h-10 w-10 text-red-600 mb-3" />
                </div>
                <h3 className="font-medium text-gray-900">Community</h3>
                <p className="text-sm text-gray-600 mt-2">United in purpose</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Calendar className="h-10 w-10 text-red-600 mb-3" />
                </div>
                <h3 className="font-medium text-gray-900">Commitment</h3>
                <p className="text-sm text-gray-600 mt-2">Consistent impact</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative w-full md:w-11/12 lg:w-10/12 mx-auto">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZ2hHSQB44pujEkDa3HW5nNXD3c4MkuaVSDUBwrCnEw&s=10" 
                alt="Car enthusiasts gathering for charity" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-red-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
                <p className="font-bold text-xl md:text-2xl">5+ Years</p>
                <p className="text-xs md:text-sm">of Community Impact</p>
                <p className="text-xs mt-1">Est. 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
