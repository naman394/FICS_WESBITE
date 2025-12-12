'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      name: 'Anjali Parekh',
      title: '',
      quote: "Forensic services india has team of knowledgeable experts and professionals. Their comprehensive approach to cyber forensics investigations is impressive. Highly recommended for cyber forensics services.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Sumit Singh',
      title: '',
      quote: "Skilled and Professional Services in Cyber Forensics specially for Employee Background Verification For New Hires. The team conducted thorough background checks that helped us make informed hiring decisions.",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Annie Khemani',
      title: '',
      quote: "Best detective agency in Delhi. Well done. High quality perfection & dedication delivered. I tried many other agencies but Forensic Services India has outdone them all. They are the best and operated with complete privacy.",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="w-full px-4 pt-8 pb-6 md:px-12 lg:px-16 md:pt-20 md:pb-12 rounded-t-3xl md:rounded-t-[3rem] rounded-b-3xl md:rounded-b-[3rem] -mt-4 md:-mt-12 relative z-10"
      style={{
        backgroundColor: '#2C2520', // Deep Espresso Brown to match Services
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Center Aligned on Mobile, Left Aligned on Desktop */}
        <div className="mb-6 md:mb-16 text-center md:text-left">
          <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 mb-2 md:mb-4">
            WHY THEY CHOSE FICS
          </h4>
          <h2
            className="text-2xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: '"Libre Caslon Text", "Times New Roman", serif',
              fontStyle: 'normal',
              fontWeight: 400,
              color: '#FFFFFF', // White
              lineHeight: 'clamp(28px, 5vw, 40px)',
              letterSpacing: '-0.02em',
            }}
          >
            Real-time data <span className="italic">and</span> insight.
          </h2>
        </div>

        {/* Testimonials Carousel - Shows exactly 2 testimonials */}
        <div className="relative mb-6 md:mb-16 md:-mx-12 lg:-mx-16">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(calc(-${currentIndex} * 43.5%))`,
                gap: '0px',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={isMobile
                    ? "min-w-full max-w-full flex-shrink-0 px-2"
                    : "min-w-[43.5%] max-w-[43.5%] flex-shrink-0 pl-6 md:pl-12 lg:pl-16 pr-0"
                  }
                >
                  <div className={`flex flex-col md:flex-row gap-0 md:gap-10 items-start md:items-end ${isMobile ? 'bg-white rounded-lg overflow-hidden shadow-sm' : ''}`}>
                    {/* Image - Reduced height and width headshot with rounded corners */}
                    <div className={`w-full md:w-[200px] h-[150px] md:h-[240px] flex-shrink-0 ${isMobile ? 'rounded-t-lg' : 'rounded-lg'} overflow-hidden`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 25%' }}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col flex-1 min-w-0 md:max-h-[240px] ${isMobile ? 'p-3 pb-4 rounded-b-lg' : ''}`}
                      style={isMobile ? { backgroundColor: '#3E342E' } : {}}
                    >
                      <blockquote
                        className="font-normal mb-3 md:mb-6 tracking-wide whitespace-pre-line flex-grow"
                        style={{
                          fontFamily: '"BDO Grotesk", Arial, sans-serif',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          color: '#E5E7EB', // Gray-200
                          fontSize: '14px',
                          lineHeight: '20px',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      >
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="mt-auto pt-1">
                        <p
                          style={{
                            fontFamily: '"BDO Grotesk", Arial, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '14px',
                            color: '#FFFFFF', // White
                          }}
                          className="mb-0.5"
                        >
                          {testimonial.name}
                        </p>
                        {testimonial.title && (
                          <p
                            style={{
                              fontFamily: '"BDO Grotesk", Arial, sans-serif',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: '12px',
                              color: '#64748B', // Slate-500
                            }}
                            className="opacity-70"
                          >
                            {testimonial.title}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - CTA and Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 pt-4 md:pt-8 border-t border-slate-200">
          {/* Left - Call to Action */}
          <div className="flex-1">
            <Link href="/contact" className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-slate-900 text-white rounded-lg text-sm md:text-base font-medium hover:bg-slate-800 transition-colors">
              Contact our team
            </Link>
          </div>

          {/* Right - Navigation Arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prevTestimonial}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-black" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
