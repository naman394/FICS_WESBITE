'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, Mic, Play } from 'lucide-react';
import { podcasts } from '@/data/podcasts';

const PodcastList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-black min-h-screen">
      {/* Search Section - Image Background */}
      <div
        className="w-full h-[60vh] md:h-[70vh] px-6 md:px-12 lg:px-16 relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        {/* Creamy Overlay Layer */}
        <div className="absolute inset-0 bg-[#FFFAF3]/10"></div>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 md:mb-4">
            OUR PODCASTS
          </h3>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-4 md:mb-6">
            Listen to the <span className="italic font-serif">Future</span> of Forensics.
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Deep dives into cybercrime, legal frameworks, and digital investigation strategies.
          </p>

          <div className="mb-4">
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold">
              Search podcasts by title
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by podcast title..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-400">
            Showing {filteredPodcasts.length} {filteredPodcasts.length === 1 ? 'result' : 'results'} out of {podcasts.length}.
          </p>
        </div>
      </div>

      {/* Podcast Posts Grid */}
      <div className="w-full px-4 md:px-6 lg:px-12 pb-12 md:pb-20 bg-[#FFFAF3] rounded-t-3xl md:rounded-t-[3rem] -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
        <div className="max-w-7xl mx-auto pt-8 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPodcasts.map((podcast) => (
              <Link
                key={podcast.id}
                href={`/podcasts/${podcast.slug}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {podcast.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-display text-slate-900 mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">
                    {podcast.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Mic className="w-3.5 h-3.5" />
                      <span>Host: {podcast.host}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{podcast.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{podcast.duration}</span>
                      </div>
                    </div>
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

export default PodcastList;
