import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'How do I purchase a domain from PoweredDomains?',
      answer: 'Simply browse our domain listings and click "Buy Now" or "Make Offer" on any domain that interests you. You\'ll be redirected to our trusted partners (Atom or Afternic) to complete the secure transaction.'
    },
    {
      question: 'Are all domains listed actually available for purchase?',
      answer: 'Yes, all domains listed on our website are available for purchase. We regularly update our inventory to ensure accuracy. If a domain becomes unavailable, we remove it from our listings immediately.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Payment methods vary depending on the platform (Atom or Afternic) but typically include wire transfers, credit cards, PayPal, and cryptocurrency. Specific payment options will be shown during checkout.'
    },
    {
      question: 'How long does the domain transfer process take?',
      answer: 'Domain transfers typically take 5-7 business days to complete. This includes verification, payment processing, and the actual domain transfer. You\'ll receive updates throughout the process.'
    },
    {
      question: 'Do you offer payment plans for expensive domains?',
      answer: 'Yes, for domains over $10,000, we often offer payment plans through our partner platforms. Contact us directly to discuss financing options for your specific domain of interest.'
    },
    {
      question: 'Can I negotiate the price of a domain?',
      answer: 'Many of our domains have "Make Offer" options where you can submit a counteroffer. The domain owner will review your offer and respond accordingly. Some domains have fixed "Buy Now" prices.'
    },
    {
      question: 'What happens after I purchase a domain?',
      answer: 'After purchase, you\'ll receive transfer instructions and the domain will be pushed to your registrar account. We provide full support throughout the transfer process to ensure everything goes smoothly.'
    },
    {
      question: 'Do you provide domain appraisals?',
      answer: 'While we don\'t provide formal appraisals, our team can offer guidance on domain values. For official appraisals, we recommend using certified domain appraisal services.'
    },
    {
      question: 'Are there any additional fees beyond the listed price?',
      answer: 'The listed price is what you pay for the domain. However, there may be small transaction fees charged by the payment processor or transfer fees charged by your registrar.'
    },
    {
      question: 'Can I return a domain if I change my mind?',
      answer: 'Domain sales are typically final due to the nature of digital assets. However, if there are technical issues with the transfer or the domain wasn\'t as described, we\'ll work to resolve the situation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about purchasing premium domains from PoweredDomains
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openItems.includes(index)}
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;