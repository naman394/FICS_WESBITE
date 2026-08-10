import React from 'react';
import Navbar from '@/components/Navbar';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import { getBlogPosts } from '@/lib/podgen';

export const revalidate = 60;

export default async function BlogsPage() {
  const posts = await getBlogPosts();
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Blog posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

