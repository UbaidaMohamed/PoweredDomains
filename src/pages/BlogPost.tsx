import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <p className="mb-6">We couldn't find the article you're looking for.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => navigate('/blog')}>
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <div className="text-sm text-gray-500">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>

          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md mb-6" />

          <article className="prose prose-lg">
            <p>{post.content ?? post.excerpt}</p>
          </article>

          <div className="mt-8">
            <button className="px-4 py-2 bg-gray-100 rounded" onClick={() => navigate('/blog')}>
              Back to Blog
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
