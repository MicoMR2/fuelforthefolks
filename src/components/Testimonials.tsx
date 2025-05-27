import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The impact Fuel for the Folks has had on our pediatric ward is immeasurable. Their monthly car shows bring pure joy to our young patients, and their fundraising efforts have helped us purchase vital medical equipment. They've created a bridge between car enthusiasm and healthcare support that's truly unique.",
    author: "Dr. Sarah Johnson",
    role: "Children's Hospital Director",
    image: "https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "As a veteran struggling with PTSD, finding Fuel for the Folks was a turning point. Their car meets provided me with a supportive community and a sense of purpose. Through their mentorship program, I've not only found healing but also a new career in automotive restoration. They don't just raise funds; they transform lives.",
    author: "Michael Rivera",
    role: "Army Veteran & Program Participant",
    image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "Last year's holiday toy drive was a testament to the power of community. We had over 100 car enthusiasts show up, filling their vehicles with gifts. The joy on children's faces when they saw these amazing cars delivering presents was unforgettable. This organization has mastered the art of turning passion into purpose.",
    author: "Lisa Chen",
    role: "Volunteer Coordinator",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Stories</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Real stories from people whose lives have been touched by our community's dedication to making a difference.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-8 md:p-10 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-red-600 mb-4">
                  <Quote className="h-12 w-12 rotate-180" />
                </div>
                <blockquote className="text-xl text-gray-800 mb-6 leading-relaxed italic">
                  {testimonials[currentIndex].quote}
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <cite className="font-bold text-gray-900 not-italic">
                      {testimonials[currentIndex].author}
                    </cite>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 md:h-full">
                <img 
                  src="https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Car meet charity event"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 items-center">
            <button 
              onClick={prevTestimonial}
              className="group mx-2 p-3 rounded-full border border-gray-300 hover:bg-red-600 text-gray-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 transition-colors duration-300" />
            </button>
            
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-red-600 scale-110' : 'bg-gray-300 hover:bg-red-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={nextTestimonial}
              className="group mx-2 p-3 rounded-full border border-gray-300 hover:bg-red-600 text-gray-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;