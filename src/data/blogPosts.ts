export type BlogPost = {
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  image: string;
  category: string;
  slug: string;
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const raw = [
  {
    title: 'How to Choose the Perfect Domain Name for Your Startup',
    excerpt: 'Learn the key factors to consider when selecting a domain name that will grow with your business.',
    content:
      'Choosing the right domain is crucial. Consider memorability, length, keyword relevance, and trademark checks. Also plan for future growth and internationalization. This article walks through a checklist to help you pick a domain that scales with your startup.',
    author: 'PoweredDomains Team',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Domain Strategy'
  },
  {
    title: 'The ROI of Premium Domain Names: A Business Case Study',
    excerpt: 'Discover how premium domains can significantly impact your brand value and business growth.',
    content:
      'Premium domains can act as brand assets. In this case study we analyze acquisition costs versus increased traffic, conversion and valuation. The results show that in select verticals a premium domain can pay back its cost within 12-24 months through improved organic traffic and trust signals.',
    author: 'PoweredDomains Team',
    date: '2025-01-10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Business Growth'
  },
  {
    title: 'Domain Trends 2025: What Entrepreneurs Need to Know',
    excerpt: 'Stay ahead of the curve with the latest domain trends shaping the digital landscape.',
    content:
      'In 2025 we see consolidation around brandable .coms, growth in short keyword-rich names, and rising interest in cross-border domain portfolios. This article highlights five trends and how founders should respond when planning domain strategy.',
    author: 'PoweredDomains Team',
    date: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Industry Trends'
  }
];

export const blogPosts: BlogPost[] = raw.map((p) => ({ ...p, slug: slugify(p.title) }));

export default blogPosts;
