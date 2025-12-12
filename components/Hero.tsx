'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  const subLabel = 'Forensic Services India';
  const headlineLine1 = 'Forensic';
  const headlineLine2 = 'Investigations';

  // Image banner data
  const imageUrls = useMemo(() => [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png"
  ], []);

  const bannerCards = [
    { src: imageUrls[0], alt: 'Forensic Investigation 1' },
    { src: imageUrls[2], alt: 'Forensic Investigation 3' },
    { src: imageUrls[4], alt: 'Forensic Investigation 5' },
    { src: imageUrls[1], alt: 'Forensic Investigation 2' },
    { src: imageUrls[3], alt: 'Forensic Investigation 4' },
  ];
  const allBannerCards = [...bannerCards, ...bannerCards, ...bannerCards]; // Triple for smooth looping

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-between bg-white pt-12 md:pt-20">
      {/* Content Container */}
      <div className="w-full px-6 md:px-10 flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto mb-12">
          {/* Sub-label */}
          <div className="mb-6 md:mb-8">
            <span className="text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-gold">
              {subLabel}
            </span>
          </div>

          {/* Main Headline */}

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-display font-medium text-slate-900 mb-6 md:mb-8 max-w-4xl mx-auto">
            {headlineLine1} {headlineLine2}
            <br />
            and <span className="italic text-slate-800">Consultancy</span> Services
          </h1>

          <p className="text-[15px] md:text-base text-slate-600 max-w-xl mx-auto mb-8 md:mb-12 leading-relaxed font-normal">
            Pioneering forensic investigations with comprehensive, customized services deployed by our expert team to meet your diverse requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-[15px] font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 text-center">
              Get started now
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 text-[15px] font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-105 active:scale-95 text-center shadow-sm">
              Explore services
            </Link>
          </div>
        </div>
      </div>

      {/* Moving Image Banner - Bottom of Hero */}
      <div className="w-full overflow-hidden relative mt-auto pb-8 md:pb-12">
        <div className="flex w-full">
          {/* Moving Left to Right: animate-marquee-reverse */}
          <div className="flex items-center gap-6 animate-marquee-reverse min-w-full shrink-0 px-3">
            {allBannerCards.map((card, index) => (
              <div
                key={`banner-${index}`}
                className="relative w-[280px] h-[180px] sm:w-[360px] sm:h-[240px] md:w-[420px] md:h-[280px] rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 shadow-md border border-slate-100 group"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 420px"
                  priority={index < 4}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-6 animate-marquee-reverse min-w-full shrink-0 px-3" aria-hidden="true">
            {allBannerCards.map((card, index) => (
              <div
                key={`banner-duplicate-${index}`}
                className="relative w-[280px] h-[180px] sm:w-[360px] sm:h-[240px] md:w-[420px] md:h-[280px] rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 shadow-md border border-slate-100 group"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 420px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
