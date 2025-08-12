import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does treatment last?',
      answer: 'Our treatments typically last 3-6 months depending on the type of service and environmental conditions.'
    },
    {
      question: 'Is pest control safe for children and pets?',
      answer: 'Yes, we use eco-friendly and safe pest control methods that are harmless to children and pets when applied correctly.'
    },
    {
      question: 'Do I need to leave my home during treatment?',
      answer: 'In most cases, you can stay in your home during treatment. We will inform you if any specific precautions are needed.'
    },
    {
      question: 'How often should I get pest control service?',
      answer: 'We recommend quarterly treatments for optimal protection, though frequency may vary based on your specific needs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Get answers to common questions about our pest control services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white p-6 rounded-lg shadow-sm border flex items-center justify-between text-left hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-600 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 pb-6 rounded-b-lg border-t-0 border border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
