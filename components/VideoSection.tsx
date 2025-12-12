'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoTab {
  id: string;
  label: string;
}

interface VideoContent {
  id: string;
  category: string;
  title: string;
  description: string;
  author: string;
  role: string;
  videoId: string; // YouTube ID
  thumbnail?: string;
}

const VideoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dpdp');
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper function to extract video ID from YouTube URL or return ID directly
  const extractVideoId = (urlOrId: string): string => {
    // If it's already just an ID (no special characters), return it
    if (!/[\/=]/.test(urlOrId)) {
      return urlOrId;
    }

    // Extract from https://www.youtube.com/watch?v=VIDEO_ID
    const watchMatch = urlOrId.match(/[?&]v=([^&]+)/);
    if (watchMatch) {
      return watchMatch[1];
    }

    // Extract from https://youtu.be/VIDEO_ID
    const shortMatch = urlOrId.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) {
      return shortMatch[1];
    }

    // Extract from embed URL https://www.youtube.com/embed/VIDEO_ID
    const embedMatch = urlOrId.match(/embed\/([^?]+)/);
    if (embedMatch) {
      return embedMatch[1];
    }

    // If no pattern matched, return as-is (assume it's an ID)
    return urlOrId;
  };

  // Reset video state when changing tabs
  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsPlaying(false);
  };

  const tabs: VideoTab[] = [
    { id: 'dpdp', label: 'DPDP Act' },
    { id: 'corporate', label: 'Corporate Investigation' },
    { id: 'fraud', label: 'Fraud Detection' },
    { id: 'legal', label: 'Legal Support' },
  ];

  const content: Record<string, VideoContent> = {
    'dpdp': {
      id: 'dpdp',
      category: 'DPDP Act',
      title: 'Decoding the DPDP Act 2023',
      description: 'A comprehensive overview of India\'s Digital Personal Data Protection Act 2023, highlighting key provisions, user rights, and compliance obligations.',
      author: 'FICS Legal Team',
      role: 'Legal Experts',
      videoId: '/videos/Copy%20of%20IOTA%20AI_2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'
    },
    'corporate': {
      id: 'corporate',
      category: 'Corporate Investigation',
      title: 'Mitigating Insider Threats in Corporate Environments',
      description: 'Learn about the strategies employed to detect and prevent commercial espionage and internal fraud, protecting your organization\'s assets and reputation.',
      author: 'Priya Sharma',
      role: 'Director of Investigations',
      videoId: 'inWWhr5tnEA',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    },
    'fraud': {
      id: 'fraud',
      category: 'Fraud Detection',
      title: 'Forensic Accounting: Tracing the Money Trail',
      description: 'An in-depth look at how financial discrepancies are identified and analyzed to expose embezzlement and money laundering schemes.',
      author: 'Amit Verma',
      role: 'Forensic Auditor',
      videoId: 'M9lK3zD73v8',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'
    },
    'legal': {
      id: 'legal',
      category: 'Legal Support',
      title: 'Expert Testimony: Bridging Forensics and the Courtroom',
      description: 'Understanding the pivotal role of expert witnesses in presenting complex technical evidence clearly and convincingly in legal proceedings.',
      author: 'Sanjay Gupta',
      role: 'Senior Legal Consultant',
      videoId: 'xtnMQKpLgcc',
      thumbnail: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80'
    },
  };

  const activeContent = content[activeTab];

  return (
    <section className="w-full bg-white pt-16 pb-16 md:pt-24 md:pb-24 px-6 md:px-12 lg:px-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header content */}
        <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-8 md:mb-12">
          Forensic Lens: Insights from Industry Leaders
        </h2>

        {/* Tabs Navigation */}
        <div className="relative mb-8 md:mb-16 border-b border-slate-200">
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 relative pb-4 -mb-[17px] ${activeTab === tab.id
                  ? 'text-slate-900 border-b-2 border-slate-900'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column: Text */}
          <div className="flex flex-col items-start space-y-4 md:space-y-6 animate-fadeIn">
            <h3 className="text-2xl md:text-4xl font-display text-slate-900 leading-tight">
              {activeContent.title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-lg">
              {activeContent.description}
            </p>
            <button className="px-6 py-2.5 border border-slate-900 text-slate-900 font-medium text-sm rounded transition-all duration-300 hover:bg-slate-900 hover:text-white mt-4">
              Read more
            </button>
          </div>

          {/* Right Column: Video Card */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden group shadow-lg bg-black">
            {!isPlaying ? (
              <>
                {/* Thumbnail: Video First Frame (Local) or Image (Remote) */}
                {activeContent.videoId.startsWith('/') ? (
                  <video
                    src={`${activeContent.videoId}#t=0.1`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    preload="metadata"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={activeContent.thumbnail}
                    alt={activeContent.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors duration-300"></div>

                {/* Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 md:w-20 md:h-20 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 pl-1 group/btn cursor-pointer border-none z-20"
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                  </button>
                </div>
              </>
            ) : (
              activeContent.videoId.startsWith('/') ? (
                <video
                  src={activeContent.videoId}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${extractVideoId(activeContent.videoId)}?autoplay=1`}
                  title={activeContent.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full relative z-20"
                ></iframe>
              )
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
