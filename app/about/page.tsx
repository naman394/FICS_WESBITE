'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Try to play video when component mounts
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully');
          })
          .catch((error) => {
            console.error('Video play failed:', error);
            setVideoError(true);
          });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main>
        {/* Video Hero Section */}
        <section className="w-full relative h-[60vh] md:h-[70vh] bg-black" style={{ zIndex: 1 }}>
          {/* Video Element */}
          {!videoError && (
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
                onLoadedData={() => {
                  console.log('Video loaded successfully');
                  if (videoRef.current) {
                    videoRef.current.play().catch((error) => {
                      console.error('Video play error:', error);
                      setVideoError(true);
                    });
                  }
                }}
                onError={(e) => {
                  console.error('Video error:', e);
                  setVideoError(true);
                }}
              >
                {/* Using direct Pexels video URL */}
                <source src="https://videos.pexels.com/video-files/6125525/6125525-hd_1920_1080_30fps.mp4" type="video/mp4" />
                {/* Alternative Pexels video URL */}
                <source src="https://player.vimeo.com/external/6125525.sd.mp4?s=8e8741dbee251d8c35f99d6aaf83f6ee" type="video/mp4" />
                {/* Fallback to local file if direct URL doesn't work */}
                <source src="/videos/pexels-video-6125525.mp4" type="video/mp4" />
              </video>
            </div>
          )}
          
          {/* Fallback background image - shows if video fails to load */}
          <div 
            className={`absolute inset-0 w-full h-full bg-cover bg-center ${videoError ? '' : 'opacity-0'}`}
            style={{
              backgroundImage: 'url(https://images.pexels.com/videos/6125525/pexels-photo-6125525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920)',
              zIndex: 0,
            }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }}></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
            <div className="text-center px-6 max-w-4xl mx-auto">
              <h2 
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Transforming Forensics Through<br />
                <span className="italic">Innovation</span>
              </h2>
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Content Sections - Cream Background with rounded corners */}
        <div className="w-full px-6 pt-8 pb-8 md:px-12 lg:px-16 md:pt-10 md:pb-20 bg-[#FFFAF3] rounded-t-3xl md:rounded-t-[3rem] rounded-b-3xl md:rounded-b-[3rem] -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
          <div 
            ref={sectionRef}
            className="max-w-4xl mx-auto py-16 md:py-24 text-center"
          >
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-normal text-black mb-6"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'normal',
                fontWeight: 400,
              }}
            >
              Coming Soon
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Under Development
            </p>
            <p className="text-base md:text-lg text-gray-600">
              This page is currently being developed. Please check back soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

