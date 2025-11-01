import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DomainCard from '../components/DomainCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const featuredDomains = [
    {
      domain: 'PoweredDomains.com',
      price: '$12,500',
      category: 'Marketplace',
      featured: true,
      buyNowUrl: 'https://powereddomains.com',
      makeOfferUrl: 'https://powereddomains.com'
    },
    {
      domain: 'GPTXtra.com',
      price: '$9,500',
      category: 'AI',
      buyNowUrl: 'https://gptxtra.com',
      makeOfferUrl: 'https://gptxtra.com'
    },
    {
      domain: 'ProgramSeed.com',
      price: '$7,800',
      category: 'Developer',
      buyNowUrl: 'https://programseed.com',
      makeOfferUrl: 'https://programseed.com'
    },
    {
      domain: 'PowerMaxAi.com',
      price: '$14,000',
      category: 'AI',
      featured: true,
      buyNowUrl: 'https://powermaxai.com',
      makeOfferUrl: 'https://powermaxai.com'
    },
    {
      domain: 'BoxVol.com',
      price: '$6,500',
      category: 'Storage',
      buyNowUrl: 'https://boxvol.com',
      makeOfferUrl: 'https://boxvol.com'
    },
    {
      domain: 'BriefFolder.com',
      price: '$5,900',
      category: 'Productivity',
      buyNowUrl: 'https://brieffolder.com',
      makeOfferUrl: 'https://brieffolder.com'
    },
    {
      domain: 'BreakFastRules.com',
      price: '$4,200',
      category: 'Lifestyle',
      buyNowUrl: 'https://breakfastrules.com',
      makeOfferUrl: 'https://breakfastrules.com'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'PoweredDomains helped us find the perfect domain for our startup. The process was smooth and professional.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      company: 'Digital Ventures',
      content: 'Excellent selection of premium domains. Found exactly what we needed for our new SaaS product.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      company: 'CloudTech Solutions',
      content: 'Great experience! The domain we purchased has been instrumental in building our brand identity.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Power Your Business with
              <span className="text-blue-600 block">Premium Domains</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover premium one-word .com domains, brandable names, and niche industry domains 
              that give your startup the competitive edge it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/browse"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Browse Domains
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PoweredDomains?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in premium domains that help businesses establish strong online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-picked premium domains that are short, memorable, and brandable for maximum impact.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Transfers</h3>
              <p className="text-gray-600">
                Safe and secure domain transfers through trusted platforms like Atom and Afternic.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Value</h3>
              <p className="text-gray-600">
                Domains that appreciate in value and provide excellent ROI for your business investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Domains Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Premium Domains
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium domains perfect for your next venture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDomains.map((domain, index) => (
              <DomainCard key={index} {...domain} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/browse"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Domains
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of successful businesses who found their perfect domain with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Power Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of premium domains and find the perfect name for your next venture.
          </p>
          <Link
            to="/browse"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Browsing
            <Search className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;