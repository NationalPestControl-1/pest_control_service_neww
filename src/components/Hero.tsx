import React from 'react';
import { Star, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Reliable Pest Solutions in Delhi
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Over 10 Years of Expert Service
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              National Pest Control Service has been providing reliable, effective, 
              and personalized pest control solutions to Delhi residents for over a decade. We 
              pride ourselves on dependable, thorough service and a track record of 
              satisfied customers across the city.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Book Free Inspection
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 Stars</span>
              <span className="text-green-600 font-medium">Highly Rated</span>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581579806026-5d4c8a677e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional Pest Control Specialist"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
