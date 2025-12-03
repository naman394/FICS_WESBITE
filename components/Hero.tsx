'use client';

import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const subLabel = 'Forensic Services India';
  const headlineLine1 = 'Forensic';
  const headlineLine2 = 'Investigations';
  const headlineLine3 = 'and Consultancy Services';

  // Image banner data
  const imageUrls = useMemo(() => [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png"
  ], []);

  const bannerCards = [
    { type: 'image', src: imageUrls[0], alt: 'Image 1' },
    { type: 'image', src: imageUrls[2], alt: 'Image 3' },
    { type: 'image', src: imageUrls[4], alt: 'Image 5' },
    { type: 'image', src: imageUrls[1], alt: 'Image 2' },
    { type: 'image', src: imageUrls[3], alt: 'Image 4' },
  ];
  const allBannerCards = [...bannerCards, ...bannerCards];

  // Preload critical images for faster loading
  useEffect(() => {
    const preloadImages = imageUrls.slice(0, 3); // Preload first 3 images
    const links: HTMLLinkElement[] = [];
    
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      // Cleanup preload links
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [imageUrls]);

  return (
    <section className="relative z-10 w-full min-h-screen bg-black flex items-center pb-12 md:pb-0">
      <div className="w-full px-6 md:px-10 pt-8 md:pt-0 md:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start text-left mt-0 lg:mt-2 w-full">
            {/* Sub-label */}
            <div className="mb-5 md:mb-6">
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300">
                {subLabel}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.95] md:leading-[0.85] font-display font-normal text-white max-w-2xl mb-6 md:mb-8">
              {headlineLine1}
              <br />
              {headlineLine2}
              <br />
              and <span className="italic">Consultancy</span> Services
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto mb-8 md:mb-12">
              <Link href="/contact" className="w-full sm:w-auto px-7 py-3 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-200 transition-transform active:scale-95 shadow-sm text-center">
                Get started now
              </Link>
              <Link href="/services" className="w-full sm:w-auto px-7 py-3 bg-transparent border-2 border-white text-white text-[15px] font-medium rounded-lg hover:bg-white/10 transition-transform active:scale-95 text-center">
                Explore more
              </Link>
            </div>

            {/* Image Animation Banner */}
            <div className="w-full overflow-hidden relative -mx-4 md:-mx-6">
              {/* Left blur gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
              
              {/* Right blur gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
              
              <div className="flex w-full">
                <div className="flex items-center gap-4 animate-marquee min-w-full shrink-0 px-3">
                  {allBannerCards.map((card, index) => (
                    <div 
                      key={`banner-1-${index}`}
                      className="relative w-[150px] h-[90px] sm:w-[180px] sm:h-[110px] rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] bg-gray-900 shadow-lg"
                    >
                      <Image 
                        src={card.src} 
                        alt={card.alt} 
                        fill
                        className="object-cover"
                        loading={index < 5 ? "eager" : "lazy"}
                        priority={index < 3}
                        sizes="(max-width: 640px) 150px, 180px"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 animate-marquee min-w-full shrink-0 px-3" aria-hidden="true">
                  {allBannerCards.map((card, index) => (
                    <div 
                      key={`banner-2-${index}`}
                      className="relative w-[150px] h-[90px] sm:w-[180px] sm:h-[110px] rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] bg-gray-900 shadow-lg"
                    >
                      <Image 
                        src={card.src} 
                        alt={card.alt} 
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 150px, 180px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full flex items-center justify-start">
            <div className="relative w-full max-w-lg lg:max-w-xl h-auto aspect-square overflow-hidden rounded-lg ml-4 lg:ml-8">
              <Image 
                src="https://images.unsplash.com/photo-1706359563992-9823e4a6f712?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Forensic Services"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 512px"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-20 md:bottom-24 left-[45%] md:left-[48%] transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <div className="flex items-center gap-3 animate-bounce-slow">
          <p className="text-sm md:text-base font-medium text-gray-300 tracking-wide">
            Discover More
          </p>
          <svg 
            width="24" 
            height="40" 
            viewBox="0 0 24 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-300"
          >
            <rect 
              x="4" 
              y="4" 
              width="16" 
              height="28" 
              rx="8" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
            />
            <circle 
              cx="12" 
              cy="12" 
              r="3" 
              fill="currentColor"
              className="animate-scroll-wheel"
            />
          </svg>
        </div>
        <div className="w-px h-6 bg-gradient-to-b from-gray-300 to-transparent animate-bounce-slow"></div>
      </div> */}
    </section>
  );
};

export default Hero;


