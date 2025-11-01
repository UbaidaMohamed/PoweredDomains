import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DomainCard from '../components/DomainCard';
import { Search, Filter } from 'lucide-react';

const Browse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const domains = [
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

  const categories = ['All', 'Technology', 'SaaS', 'Data & Analytics', 'Branding', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Gaming'];
  const priceRanges = ['All', 'Under $10k', '$10k - $20k', 'Over $20k'];

  const filteredDomains = useMemo(() => {
    return domains.filter(domain => {
      const matchesSearch = domain.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           domain.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || domain.category === selectedCategory;
      
      const price = parseInt(domain.price.replace(/[$,]/g, ''));
      let matchesPrice = true;
      if (priceRange === 'Under $10k') {
        matchesPrice = price < 10000;
      } else if (priceRange === '$10k - $20k') {
        matchesPrice = price >= 10000 && price <= 20000;
      } else if (priceRange === 'Over $20k') {
        matchesPrice = price > 20000;
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Browse Premium Domains
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of premium domains perfect for your business
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search domains..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredDomains.length} domain{filteredDomains.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Domain Grid */}
          {filteredDomains.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDomains.map((domain, index) => (
                <DomainCard key={index} {...domain} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No domains found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
