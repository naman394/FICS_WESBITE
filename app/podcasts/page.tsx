import React from 'react';
import Navbar from '@/components/Navbar';
import PodcastList from '@/components/PodcastList';
import Footer from '@/components/Footer';
import { getPodcasts } from '@/lib/podgen';

export const revalidate = 60;

export default async function PodcastsPage() {
  const podcasts = await getPodcasts();
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <PodcastList podcasts={podcasts} />
      </main>
      <Footer />
    </div>
  );
}
