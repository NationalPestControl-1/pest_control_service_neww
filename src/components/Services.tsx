import React from 'react';
import { Bug } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bug className="text-blue-600" size={48} />,
      title: 'General Pest Control (GPC)',
      description: 'Comprehensive monthly inspection and pest control treatment. Complete protection for your premises.',
      features: ['Monthly inspections', 'Targeted treatments', 'Preventive measures']
    },
    {
      icon: <Bug className="text-green-600" size={48} />,
      title: 'Termite Treatment',
      description: 'Advanced anti-termite barrier treatments to safeguard your property from destructive termite infestations.',
      features: ['Pre-construction treatment', 'Post-construction treatment', 'Annual maintenance']
    },
    {
      icon: <Bug className="text-red-600" size={48} />,
      title: 'Cockroach Treatment',
      description: 'Specialized gel application for effective cockroach elimination at the source.',
      features: ['Gel-based treatment', 'Long-lasting protection', 'Safe for family']
    },
    {
      icon: <Bug className="text-purple-600" size={48} />,
      title: 'Bedbugs Treatment',
      description: 'Complete bedbug elimination using advanced treatment methods for peaceful sleep.',
      features: ['Heat treatment', 'Chemical application', 'Follow-up service']
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive pest control solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
