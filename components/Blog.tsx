'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Tag, Search } from 'lucide-react';
import { blogPosts } from '@/data/blogs';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-black min-h-screen">
      {/* Search Section - Image Background */}
      <div 
        className="w-full h-[60vh] md:h-[70vh] px-6 md:px-12 lg:px-16 relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625449281218-cbb6183f0aec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
        >
        {/* Creamy Overlay Layer */}
        <div className="absolute inset-0 bg-[#FFFAF3]/20"></div>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 md:mb-4">
            OUR BLOGS
          </h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-4 md:mb-6">
            News and <span className="italic font-serif">Insight</span> from our expert team.
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Explore practical insights, strategies, and ideas for modern forensic investigations.
          </p>
          
          <div className="mb-4">
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold">
              Search blogs by title
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by blog title..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-400">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} out of {blogPosts.length}.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid - Full-width cream background with rounded top and inner padding */}
      <div className="w-full px-4 md:px-6 lg:px-12 pb-12 md:pb-20 bg-[#FFFAF3] rounded-t-3xl md:rounded-t-[3rem] -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
        <div className="max-w-7xl mx-auto pt-8 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  
                  {/* Overlay Tags */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className={`px-3 py-1 ${post.categoryColor} text-white rounded-full text-xs font-semibold flex items-center gap-1.5`}>
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-black group-hover:gap-3 transition-all duration-300">
                    <span>Read article</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

