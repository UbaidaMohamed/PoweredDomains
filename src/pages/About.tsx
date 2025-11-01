import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About PoweredDomains
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about helping businesses find the perfect domain name that powers their success and establishes a strong online presence.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At PoweredDomains, we believe that every great business starts with a great domain name. 
                Our mission is to provide entrepreneurs, startups, and established businesses with premium 
                domain names that give them a competitive edge in the digital marketplace.
              </p>
              <p className="text-lg text-gray-600">
                We specialize in one-word .com domains, brandable names, and niche industry domains 
                that are not just web addresses, but powerful branding assets that drive business growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We carefully curate only the highest quality premium domains that offer real value to businesses.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Success</h3>
                <p className="text-gray-600">
                  Your success is our success. We're committed to helping you find the perfect domain for your goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Security</h3>
                <p className="text-gray-600">
                  All transactions are handled through secure, trusted platforms ensuring safe domain transfers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of trends to offer domains that position your business for future success.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                PoweredDomains was founded by domain industry veterans who recognized the growing need 
                for premium, brandable domain names in the startup and SaaS ecosystem. With years of 
                experience in domain investing and digital marketing, our team understands what makes 
                a domain truly valuable.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We've helped hundreds of businesses find their perfect domain name, from tech startups 
                to established enterprises looking to rebrand or expand their digital presence. Our 
                portfolio includes carefully selected domains across various industries, all chosen 
                for their branding potential and market appeal.
              </p>
              <p className="text-lg text-gray-600">
                Today, PoweredDomains continues to be a trusted partner for businesses seeking premium 
                domain names that power their growth and success in the digital marketplace.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;