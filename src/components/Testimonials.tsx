import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Fastrack',
      position: 'Corporate Office',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      rating: 5,
      text: 'Outstanding service quality. Highly recommended!'
    },
    {
      name: 'Medicover Hospital',
      position: 'Healthcare Facility',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      rating: 5,
      text: 'Very good service and they are excellent'
    },
    {
      name: 'Pandav Nagar Resident',
      position: 'Residential Customer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
      rating: 5,
      text: 'Simply the best pest control service. Highly satisfied!'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">
            Trusted by thousands of satisfied customers across Delhi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg ${
                  index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-green-600' : 'bg-red-600'
                }`}>
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                />
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
