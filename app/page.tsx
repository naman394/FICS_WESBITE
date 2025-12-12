'use client';

import React from 'react';
import { ScrollProvider, useScroll } from '@/contexts/ScrollContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
// import FeatureScroll from '@/components/FeatureScroll';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import BlogSection from '@/components/BlogSection';
import PodcastSection from '@/components/PodcastSection';

function HomeContent() {
  const { bgColor } = useScroll();

  const bgStyle = {
    backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
  };

  return (
    <div
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gold selection:text-white"
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <PodcastSection />
        <div className="w-full max-w-7xl mx-auto border-t-2 border-dotted border-slate-200 my-0"></div>
        <VideoSection />
        <Stats />
        {/* White Spacer */}
        <div className="w-full bg-white h-16 md:h-24"></div>
        {/* <FeatureScroll /> */}
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ScrollProvider>
      <HomeContent />
    </ScrollProvider>
  );
}

