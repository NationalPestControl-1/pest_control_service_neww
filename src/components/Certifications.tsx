import React from 'react';
import { Award, Shield, FileText, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      icon: <Award className="text-blue-600" size={48} />,
      title: 'License',
      description: 'Fully licensed and certified for pest control operations'
    },
    {
      icon: <Shield className="text-green-600" size={48} />,
      title: 'Insured Service',
      description: 'Complete insurance coverage for all our services'
    },
    {
      icon: <CheckCircle className="text-yellow-600" size={48} />,
      title: 'Certified Personnel',
      description: 'All technicians are certified and trained professionals'
    },
    {
      icon: <FileText className="text-blue-600" size={48} />,
      title: 'Documentation Available',
      description: 'Complete service documentation and certificates provided'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Licensed & Certified
          </h2>
          <p className="text-gray-600">
            Our expertise is backed by proper licensing and industry certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                  {cert.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
