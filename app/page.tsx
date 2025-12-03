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

function HomeContent() {
  const { bgColor } = useScroll();

  const bgStyle = {
    backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
  };

  return (
    <div 
      className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black"
    >
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Stats />
        {/* Black Background Spacer */}
        <div className="w-full bg-black h-16 md:h-24"></div>
        {/* <FeatureScroll /> */}
        <Testimonials />
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

