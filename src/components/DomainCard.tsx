import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface DomainCardProps {
  domain: string;
  price: string;
  category: string;
  featured?: boolean;
  buyNowUrl?: string;
  makeOfferUrl?: string;
}

const DomainCard: React.FC<DomainCardProps> = ({
  domain,
  price,
  category,
  featured = false,
  buyNowUrl,
  makeOfferUrl
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6 ${
      featured ? 'border-blue-200 ring-1 ring-blue-100' : 'border-gray-200'
    }`}>
      {featured && (
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-yellow-600 ml-1">Featured</span>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{domain}</h3>
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
          {category}
        </span>
      </div>

      <div className="mb-4">
        <span className="text-2xl font-bold text-blue-600">{price}</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        {buyNowUrl && (
          <a
            href={buyNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Buy Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        )}
        {makeOfferUrl && (
          <a
            href={makeOfferUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            Make Offer
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default DomainCard;