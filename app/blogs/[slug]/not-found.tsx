import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-[#FFFAF3] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl md:text-5xl font-display font-normal text-black mb-4">
          Blog Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-base font-medium text-black hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Blogs</span>
        </Link>
      </div>
    </div>
  );
}

