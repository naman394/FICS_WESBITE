'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogs';

const BlogSection: React.FC = () => {
  // Get the first 4 posts (1 featured + 3 regular)
  const allPosts = blogPosts.slice(0, 4);
  const featuredPost = allPosts[0];
  const regularPosts = allPosts.slice(1);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-4">
            Latest Insights & Research
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Stay informed with expert analysis, case studies, and industry trends from our forensic specialists.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12 md:mb-16">
            <Link href={`/blogs/${featuredPost.slug}`}>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-gold text-slate-900 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="inline-block mb-1">
                        <span className="text-[10px] md:text-xs font-semibold text-gold uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-display text-slate-900 mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {featuredPost.title}
                      </h3>
                      <p className="text-slate-600 mb-3 line-clamp-6 text-xs md:text-sm leading-relaxed">
                        {featuredPost.description}
                      </p>
                    </div>

                    {/* Middle: Author/Divider */}
                    <div className="py-2 border-t border-dashed border-slate-200 mb-2">
                      <span className="text-[10px] uppercase tracking-wide text-slate-400 font-semibold">
                        By FICS Forensic Team
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 text-[10px] md:text-xs text-slate-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-3 transition-all duration-300 text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <article
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-display text-slate-900 mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/blogs">
            <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
