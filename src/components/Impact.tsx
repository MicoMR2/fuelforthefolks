import React from 'react';
import { Shield, Heart, Gift, Trophy, Users, Calendar } from 'lucide-react';

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
  color: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, title, description, stats, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className={`inline-flex items-center justify-center p-3 rounded-full ${color} mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
      <p className="text-lg font-semibold text-red-600">{stats}</p>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Making Real Impact</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every rev of an engine, every car show, and every rally we organize translates into tangible support for our community. Here's how we're making a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ImpactCard 
            icon={<Shield className="h-6 w-6 text-white" />}
            title="Veterans Support"
            description="Supporting our heroes through specialized programs, career transition assistance, and community reintegration initiatives. Our car shows create spaces where veterans connect and heal."
            stats="150+ Veterans Supported"
            color="bg-blue-700"
          />
          
          <ImpactCard 
            icon={<Heart className="h-6 w-6 text-white" />}
            title="Children's Hospitals"
            description="Bringing joy to young patients through interactive car displays, fundraising for medical equipment, and creating unforgettable experiences for families facing medical challenges."
            stats="$100K+ Raised for Medical Equipment"
            color="bg-red-600"
          />
          
          <ImpactCard 
            icon={<Gift className="h-6 w-6 text-white" />}
            title="Holiday Toy Drives"
            description="Ensuring every child experiences the magic of the holidays through our annual toy drive. We fill performance cars with gifts and deliver joy to families in need."
            stats="5,000+ Toys Delivered"
            color="bg-amber-600"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2023 Impact Highlights</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Through the dedication of our car community and supporters, we've achieved remarkable milestones in serving our community.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-red-600">12</p>
                  <p className="text-sm text-gray-600">Major Events</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-red-600">300+</p>
                  <p className="text-sm text-gray-600">Active Members</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-red-600">$250K</p>
                  <p className="text-sm text-gray-600">Funds Raised</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-red-600">52</p>
                  <p className="text-sm text-gray-600">Weekly Meets</p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/1383554/pexels-photo-1383554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Car rally for charity" 
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 mt-4 text-center italic">
                "Cars & Coffee for a Cause" - Our weekly community gathering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;