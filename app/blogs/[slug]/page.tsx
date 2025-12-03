'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Clock, ArrowUpRight } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '@/data/blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(blog.id, 3);

  // Split content into paragraphs for better rendering
  const contentParagraphs = blog.fullContent.split('\n\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-[#FFFAF3]">
      <Navbar />
      {/* Header Section - Image Background */}
      <div 
        className="w-full h-[60vh] md:h-[70vh] px-6 md:px-12 lg:px-16 relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625449281218-cbb6183f0aec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 md:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm md:text-base font-medium">Back to Blogs</span>
          </Link>

          {/* Category Badge */}
          <div className="mb-4 md:mb-6">
            <span className={`inline-flex items-center gap-2 px-4 py-2 ${blog.categoryColor} text-white rounded-full text-xs md:text-sm font-semibold`}>
              <Tag className="w-3 h-3 md:w-4 md:h-4" />
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-normal text-white mb-4 md:mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Light Background */}
      <div className="w-full bg-[#FFFAF3] py-8 md:py-12 px-6 md:px-12 lg:px-16 -mt-8 md:-mt-12 lg:-mt-16 relative z-10 rounded-t-3xl md:rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>

              {/* Blog Content */}
              <article className="prose prose-lg max-w-none">
                <div className="text-gray-800">
                  {contentParagraphs.map((paragraph, index) => {
                    // Check if paragraph is a heading
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2
                          key={index}
                          className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 first:mt-0"
                        >
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    // Check if paragraph is a subheading
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3
                          key={index}
                          className="text-xl md:text-2xl font-semibold text-black mt-6 mb-3"
                        >
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    // Check if paragraph is a list item
                    if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                      const items = paragraph.split('\n').filter(item => item.trim());
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 my-4 text-gray-800">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-base md:text-lg leading-relaxed">
                              {item.replace(/^[-*]\s+/, '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    // Regular paragraph
                    return (
                      <p
                        key={index}
                        className="text-base md:text-lg text-gray-800 leading-relaxed mb-4 md:mb-6"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </article>
            </div>

            {/* Sidebar - Suggested Reads */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-black mb-6 pb-4 border-b border-gray-200">
                    Suggested Reads
                  </h2>
                  
                  <div className="space-y-6">
                    {relatedBlogs.map((relatedBlog) => (
                      <Link
                        key={relatedBlog.id}
                        href={`/blogs/${relatedBlog.slug}`}
                        className="block group hover:opacity-80 transition-opacity"
                      >
                        <div className="flex flex-col gap-3">
                          {/* Image */}
                          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                            <img
                              src={relatedBlog.image}
                              alt={relatedBlog.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80';
                              }}
                            />
                          </div>
                          
                          {/* Content */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 ${relatedBlog.categoryColor} text-white rounded text-xs font-semibold`}>
                                {relatedBlog.category}
                              </span>
                              <span className="text-xs text-gray-500">{relatedBlog.date}</span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-black mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                              {relatedBlog.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-2">
                              {relatedBlog.description}
                            </p>
                            <div className="flex items-center gap-1 text-xs md:text-sm text-black font-medium group-hover:gap-2 transition-all">
                              <span>Read more</span>
                              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* View All Blogs Link */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href="/blogs"
                      className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-black hover:gap-3 transition-all group"
                    >
                      <span>View all blogs</span>
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

