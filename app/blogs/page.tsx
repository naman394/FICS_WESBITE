'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

