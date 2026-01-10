'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const subLabel = 'Forensic Services India';
  const headlineLine1 = 'Forensic';
  const headlineLine2 = 'Investigations';


  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videoSources = [
    "/assets/videos/hero-bg-cycle-1.mp4",
    "/assets/videos/hero-bg-cycle-2.mp4",
    "/assets/videos/hero-bg-cycle-3.mp4",
    "/assets/videos/hero-bg-cycle-4.mp4"
  ];

  // Handle video rotation: Max 7s OR when video ends (if shorter)
  const isFirstMount = useRef(true);

  useEffect(() => {
    const activeVideo = videoRefs.current[currentVideoIndex];
    if (!activeVideo) return;

    // Playback logic
    if (isFirstMount.current) {
      // On first load, don't reset time to avoid jumping/glitching if autoplay started
      isFirstMount.current = false;
      // Ensure it's playing in case autoplay failed (e.g. low power mode)
      const playPromise = activeVideo.play();
      if (playPromise !== undefined) playPromise.catch(() => { });
    } else {
      // For subsequent videos, reset to start
      activeVideo.currentTime = 0;
      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play was prevented:", error);
        });
      }
    }

    const handleNext = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    };

    // 1. Transition after 5 seconds max
    const timeoutId = setTimeout(handleNext, 5000);

    // 2. Transition immediately if video ends (for videos < 7s)
    activeVideo.addEventListener('ended', handleNext);

    return () => {
      clearTimeout(timeoutId);
      activeVideo.removeEventListener('ended', handleNext);
    };
  }, [currentVideoIndex, videoSources.length]);





  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 bg-slate-900">
        {videoSources.map((src, index) => (
          <video
            key={src}
            ref={(el) => {
              // Assign to ref array without returning a value
              if (videoRefs.current) {
                videoRefs.current[index] = el;
              }
            }}
            muted
            playsInline
            autoPlay={index === 0} // Autoplay the first one immediately
            preload="auto"
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentVideoIndex ? 'opacity-70' : 'opacity-0'
              }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}

        {/* Classy Overlay - Deep, Rich, No Noise */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-transparent to-slate-900/80"></div>
        <div className="absolute inset-0 bg-slate-900/30"></div>

      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 md:px-6 text-center pt-28 md:pt-32">

        {/* Brand Badge - Understated Luxury */}
        <div className="mb-8 md:mb-12 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          <span className="inline-block py-1.5 px-5 md:px-6 border-y border-gold/40 text-[10px] md:text-xs font-serif font-medium tracking-[0.3em] md:tracking-[0.4em] uppercase text-gold-light/90">
            {subLabel}
          </span>
        </div>

        {/* Headline - Unified Company Name */}
        <h1 className="flex flex-col items-center justify-center text-center text-white mb-8 md:mb-10 w-full drop-shadow-2xl">
          <div className="flex flex-col items-center leading-[1.1] md:leading-[1.0] tracking-tight font-display font-medium text-slate-100">
            <span className="block text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] opacity-0 animate-[slideUpFade_1s_ease-out_0.7s_forwards]">
              Forensic <span className="text-[#dcc07e]">Investigations</span>
            </span>
            <span className="block text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] opacity-0 animate-[slideUpFade_1s_ease-out_0.8s_forwards]">
              & <span className="text-[#dcc07e]">Consultancy</span> Services
            </span>
          </div>
        </h1>

        {/* Description - Perfectly Centered & Balanced */}
        <p className="text-neutral-300 text-base md:text-xl leading-relaxed font-light max-w-3xl mx-auto mb-14 text-center text-balance opacity-0 animate-[fadeIn_1s_ease-out_1.1s_forwards]">
          Pioneering forensic investigations with comprehensive, customized services deployed by our expert team.
        </p>

        {/* Buttons - Minimalist & Premium */}
        <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
          <Link
            href="/contact"
            className="group relative min-w-[200px] px-8 py-4 bg-white text-slate-900 text-sm font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-500"
          >
            <span className="relative z-10">Get Started</span>
          </Link>

          <Link
            href="/services"
            className="group relative min-w-[200px] px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-bold tracking-[0.2em] uppercase hover:border-gold-light/50 hover:text-gold-light transition-all duration-500"
          >
            <span className="relative z-10">Our Services</span>
          </Link>
        </div>

      </div>

      {/* Subtle Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
