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
        className="w-full h-[50vh] md:h-[60vh] relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625449281218-cbb6183f0aec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          {/* Back Button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium tracking-wide uppercase">Back to Blogs</span>
          </Link>

          {/* Category Badge */}
          <div className="flex justify-center mb-6">
            <span className={`inline-flex items-center gap-2 px-3 py-1 ${blog.categoryColor} text-white rounded-full text-xs font-bold uppercase tracking-wider`}>
              <Tag className="w-3 h-3" />
              {blog.category}
            </span>
          </div>

          {/* Title - Centered & Impactful */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information - Centered */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-500"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered Single Column */}
      <div className="w-full bg-white py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image - Wide & Aesthetic */}
          <div className="mb-12 md:mb-16 -mx-6 md:-mx-12 lg:-mx-20 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover max-h-[500px]"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>

          {/* Blog Text */}
          <article className="prose prose-lg md:prose-xl prose-slate max-w-none mx-auto">
            {/* Render paragraphs manually for control */}
            {contentParagraphs.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl md:text-3xl font-display font-semibold text-slate-900 mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl md:text-2xl font-display font-medium text-slate-900 mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                const items = paragraph.split('\n').filter(item => item.trim());
                return (
                  <ul key={index} className="list-disc list-outside ml-6 space-y-3 my-6 text-slate-700">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.replace(/^[-*]\s+/, '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-lg leading-8 text-slate-700 mb-8 font-light">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Divider */}
          <div className="border-t border-slate-200 my-16"></div>

          {/* Suggested Reads Section - Bottom Grid */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900">Read Next</h2>
              <Link href="/blogs" className="text-gold font-medium hover:text-yellow-600 transition-colors flex items-center gap-2 text-sm">
                View all <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-lg mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider">{relatedBlog.category}</span>
                  </div>
                  <h3 className="text-lg font-display font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                    {relatedBlog.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{relatedBlog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{relatedBlog.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

