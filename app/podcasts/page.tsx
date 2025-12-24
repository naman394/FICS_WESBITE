'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import PodcastList from '@/components/PodcastList';
import Footer from '@/components/Footer';

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <PodcastList />
      </main>
      <Footer />
    </div>
  );
}
