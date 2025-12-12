'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#2C2520] text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

