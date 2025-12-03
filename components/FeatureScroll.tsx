'use client';

import React from 'react';

const FeatureScroll: React.FC = () => {
  const imageUrls = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png"
  ];

  // Create a sequence that cycles through all 5 images without consecutive duplicates
  // Shuffle order: 1, 3, 5, 2, 4, 1, 3, 5, 2, 4, etc.
  const cards = [
    { type: 'image', src: imageUrls[0], alt: 'Image 1' },
    { type: 'image', src: imageUrls[2], alt: 'Image 3' },
    { type: 'image', src: imageUrls[4], alt: 'Image 5' },
    { type: 'image', src: imageUrls[1], alt: 'Image 2' },
    { type: 'image', src: imageUrls[3], alt: 'Image 4' },
    { type: 'image', src: imageUrls[0], alt: 'Image 1' },
    { type: 'image', src: imageUrls[2], alt: 'Image 3' },
    { type: 'image', src: imageUrls[4], alt: 'Image 5' },
    { type: 'image', src: imageUrls[1], alt: 'Image 2' },
    { type: 'image', src: imageUrls[3], alt: 'Image 4' },
  ];

  // Duplicate cards for seamless loop
  const allCards = [...cards, ...cards];

  return (
    <section className="w-full py-10 md:py-16 overflow-hidden bg-transparent relative z-0">
      <div className="flex w-full">
        <div className="flex items-center gap-6 animate-marquee min-w-full shrink-0 px-3">
          {allCards.map((card, index) => (
            <Card key={`card-1-${index}`} data={card} />
          ))}
        </div>
        <div className="flex items-center gap-6 animate-marquee min-w-full shrink-0 px-3" aria-hidden="true">
          {allCards.map((card, index) => (
            <Card key={`card-2-${index}`} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ data: any }> = ({ data }) => {
  const baseClasses = "relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-2xl overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] bg-gray-900 shadow-lg shadow-black/50";

  if (data.type === 'image') {
    return (
      <div className={baseClasses}>
        <img 
          src={data.src} 
          alt={data.alt} 
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            console.error('Image failed to load:', data.src);
            // Show a placeholder on error
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23ddd" width="300" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImage%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>
    );
  }

  if (data.type === 'revenue') {
    return (
      <div className={`${baseClasses} bg-[#0A3D35] relative border-0`}>
        {/* Background abstract shapes */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500 rounded-full blur-[80px] opacity-80 mix-blend-screen"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-60 mix-blend-screen"></div>
        
        {/* Glass Card Content */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full h-full bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <p className="text-sm text-gray-200 font-medium mb-1">Revenue Summary</p>
              <h3 className="text-4xl font-serif text-white tracking-tight">$80,000</h3>
              <div className="w-full h-px bg-white/20 mt-4 mb-2"></div>
            </div>
            <div className="flex items-end justify-between gap-2 h-24 mt-4">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-full bg-black/40 rounded-sm h-8"></div>
                <span className="text-[10px] text-gray-300">April</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-full bg-black/60 rounded-sm h-12"></div>
                <span className="text-[10px] text-gray-300">May</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-full bg-[#2D2D2A] rounded-sm h-20"></div>
                <span className="text-[10px] text-gray-300">June</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="w-full bg-[#2D2D2A] rounded-sm h-14"></div>
                <span className="text-[10px] text-gray-300">July</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === 'process') {
    return (
      <div className={`${baseClasses} bg-[#F0EFE9] relative flex items-center justify-center border-0`}>
        {/* Floating Pills */}
        <div className="absolute inset-0 p-8">
            <div className="absolute top-10 left-8 px-4 py-2 bg-[#F5F4EF] rounded-full shadow-sm border border-white/50 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                Schedule
            </div>
            <div className="absolute top-10 right-8 px-4 py-2 bg-[#F5F4EF] rounded-full shadow-sm border border-white/50 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                Surfacing Info
            </div>
            <div className="absolute bottom-10 left-8 px-4 py-2 bg-[#F5F4EF] rounded-full shadow-sm border border-white/50 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                Sending Invoices
            </div>
            <div className="absolute bottom-10 right-8 px-4 py-2 bg-[#F5F4EF] rounded-full shadow-sm border border-white/50 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                Resolving
            </div>
        </div>

        {/* Center Orb */}
        <div className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-blue-300/30 via-yellow-200/30 to-transparent blur-xl"></div>
        <div className="absolute z-20 w-40 h-40 rounded-full bg-gradient-to-b from-blue-400/20 to-orange-300/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
             {/* Abstract Logo */}
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow-md">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" stroke="white" strokeWidth="2" />
             </svg>
        </div>
      </div>
    );
  }

  return null;
};

export default FeatureScroll;
