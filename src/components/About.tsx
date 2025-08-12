import React from 'react';
import { TrendingUp, Users, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About National Pest Control Service
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to rid every customer, every crack and tiny infestation from 
              your premises. National Pest Control Service has been providing trusted, reliable, 
              and comprehensive pest control services. Our team of experts has a track record of 
              successfully eliminating and preventing pests, ensuring the well-being of homes 
              and businesses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">3500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  C
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Chatru Singh</h4>
                  <p className="text-sm text-gray-600 mb-2">Owner & Founder</p>
                  <p className="text-gray-600 text-sm italic">
                    "We deliver personalized and high-quality service for over a 
                    decade to ensure complete customer satisfaction."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pest Control Team"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
