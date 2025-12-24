'use client';

import React, { useState } from 'react';
import { Copyright, FileCheck, Shield, Fingerprint, AlertTriangle, RefreshCw, Building2, FileSearch, UserCheck, Search, Lock, GraduationCap, Scale, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { servicesData } from '@/data/services';

const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter services based on search query
  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderServiceCard = (service: typeof servicesData[0], index: number) => {
    const IconComponent = service.icon;
    return (
      <div
        key={`${service.title}-${index}`}
        className="relative group bg-[#FFFAF3] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200/60 flex-shrink-0 h-full flex flex-col"
      >
        {/* Abstract Header Image */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              console.error('Service image failed to load:', service.image);
              const target = e.currentTarget;
              target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>

        {/* Overlapping Icon - White circle with gray outer circle */}
        <div className="absolute top-40 md:top-56 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            {/* Outer light gray circle */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 flex items-center justify-center">
              {/* Inner white circle */}
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="pt-6 md:pt-10 pb-4 md:pb-6 px-4 md:px-6 bg-white/50 backdrop-blur-sm flex flex-col flex-grow">
          {/* Title - Fixed to 2 lines */}
          <h3
            className="text-lg md:text-xl lg:text-2xl font-display font-normal text-black mb-2 md:mb-3 text-center"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              lineHeight: '1.4',
              minHeight: '3rem',
              maxHeight: '4rem',
            }}
          >
            {service.title}
          </h3>

          {/* Description - Fixed to 3 lines */}
          <p
            className="text-xs md:text-sm lg:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed text-center flex-grow"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              minHeight: 'clamp(3rem, 6vw, 4.5rem)',
              maxHeight: 'clamp(4.5rem, 8vw, 5.5rem)',
            }}
          >
            {service.shortDescription}
          </p>

          {/* Continue reading link */}
          <div className="text-center mt-auto">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all duration-300 group/link"
            >
              <span className="underline">Continue reading</span>
              <ArrowRight
                width="16"
                height="16"
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main>
        {/* Header Section - Image Background */}
        <section
          className="w-full h-[60vh] md:h-[70vh] px-6 md:px-12 lg:px-16 relative bg-cover bg-center bg-no-repeat flex items-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8371718/pexels-photo-8371718.jpeg')`
          }}
        >
          {/* Creamy Overlay Layer */}
          <div className="absolute inset-0 bg-[#FFFAF3]/20"></div>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 md:mb-4">
              OUR SERVICES
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-4 md:mb-6">
              Expert forensic services <br />
              <span className="italic font-serif">for your business success</span>.
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Comprehensive forensic investigation and consultancy services to protect your business, assets, and reputation.
            </p>

            <div className="mb-4">
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold">
                Search services by title
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by service title..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-400">
              Showing {filteredServices.length} {filteredServices.length === 1 ? 'result' : 'results'} out of {servicesData.length}.
            </p>
          </div>
        </section>

        {/* Services Grid Section - Cream Background with rounded corners */}
        <div className="w-full px-4 pt-4 pb-8 md:px-12 lg:px-16 md:pt-6 md:pb-20 bg-[#FFFAF3] rounded-t-3xl md:rounded-t-[3rem] rounded-b-3xl md:rounded-b-[3rem] -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredServices.map((service, index) => (
                  <div key={`service-${index}`} className="h-full">
                    {renderServiceCard(service, index)}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No services found matching &quot;{searchQuery}&quot;</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
