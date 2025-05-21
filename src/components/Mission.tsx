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
            We unite the passion of car enthusiasts with the power of community service to create meaningful change in people's lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Born from the belief that car culture can drive positive change, Fuel for the Folks transforms automotive enthusiasm into meaningful community impact. Our dedicated members combine their love for cars with a commitment to serving those in need.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through expertly organized car shows, charity drives, and community rallies, we create unique opportunities for automotive enthusiasts to make a difference. Every event we host serves a dual purpose: celebrating car culture while generating vital support for our community initiatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What makes us unique is our ability to harness the incredible energy and generosity of the car community. Whether it's bringing smiles to children in hospitals, supporting our veterans, or ensuring every child has a gift during the holidays, we prove that passion for automobiles can fuel positive change.
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
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Car enthusiasts gathering for charity" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">5+ Years</p>
                <p className="text-sm">of Community Impact</p>
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