'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Clock, Calendar, Mic, Headphones, AlertCircle } from 'lucide-react';
import Image from 'next/image';

// Mock Data for Podcasts
const podcasts = [
  {
    id: 0,
    title: "DPDP Act (Hindi) Overview",
    date: "Dec 13, 2024",
    duration: "10:00",
    host: "FICS Team",
    description: "A comprehensive breakdown of the Digital Personal Data Protection Act (DPDP) in Hindi, explaining key provisions and compliance requirements.",
    image: "/assets/images/podcasts/podcast-1-dpdp.jpg",
    audioUrl: "/audios/DPDT_ACT_HINDI_1.mp3"
  },
  {
    id: 1,
    title: "The Future of Digital Forensics",
    date: "Dec 12, 2024",
    duration: "14:20",
    host: "Dr. Sarah Mitchell",
    description: "Exploring how AI is reshaping the landscape of cyber investigations and evidence analysis.",
    image: "/assets/images/podcasts/podcast-2-future.jpg",
    audioUrl: "" // Restricted
  },
  {
    id: 2,
    title: "Uncovering Financial Fraud Patterns",
    date: "Dec 11, 2024",
    duration: "18:45",
    host: "James Carter",
    description: "A deep dive into the red flags of corporate embezzlement and how forensic accountants track the money.",
    image: "/assets/images/podcasts/podcast-3-fraud.jpg",
    audioUrl: "" // Restricted
  },
  {
    id: 3,
    title: "Cyber Security in the Remote Era",
    date: "Dec 10, 2024",
    duration: "12:10",
    host: "Emily Chen",
    description: "Discussing the vulnerabilities of remote workforces and strategies to secure distributed networks.",
    image: "/assets/images/podcasts/podcast-4-remote.jpg",
    audioUrl: "" // Restricted
  },
  {
    id: 4,
    title: "IPR Protection Strategies",
    date: "Dec 09, 2024",
    duration: "16:30",
    host: "Michael Ross",
    description: "Legal experts share insights on protecting intellectual property rights in global markets.",
    image: "/assets/images/podcasts/podcast-5-ipr.jpg",
    audioUrl: "" // Restricted
  }
];

const PodcastSection: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [showAll, setShowAll] = useState(false);
  const [showMobilePlaylist, setShowMobilePlaylist] = useState(false);
  const [comingSoonAlert, setComingSoonAlert] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = podcasts[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Playback error:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => {
    if (currentTrack.id !== 0) {
      setComingSoonAlert(true);
      setTimeout(() => setComingSoonAlert(false), 3000);
      return;
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      const progressPercent = (current / total) * 100;

      setProgress(progressPercent || 0);
      setCurrentTime(formatTime(current));
      setDuration(formatTime(total));
    }
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrackIndex(index);
    if (podcasts[index].id === 0) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setComingSoonAlert(true);
      setTimeout(() => setComingSoonAlert(false), 3000);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (audioRef.current && currentTrack.id === 0) {
      const time = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setProgress(value);
    }
  };

  // Filter out the current track from suggestions
  const remainingPodcasts = podcasts.filter((_, index) => index !== currentTrackIndex);
  // Show only 2 if not expanded
  const visiblePodcasts = showAll ? remainingPodcasts : remainingPodcasts.slice(0, 2);

  return (
    <section className="w-full py-8 md:py-20 bg-[#111] text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-2 md:mb-3 block">
            Listen On The Go
          </span>
          <h2 className="text-2xl md:text-5xl font-display text-white">
            Daily Forensic <span className="italic font-serif text-slate-400">Brief</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Main Player Area (Left) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-8 shadow-2xl relative">
            {/* Alert Overlay */}
            {comingSoonAlert && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
                <div className="bg-gold text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Coming Soon!</span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row md:flex-row gap-5 md:gap-8 items-center md:items-start">
              {/* Album Art */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 aspect-square rounded-xl overflow-hidden shadow-lg relative group flex-shrink-0">
                <Image
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                {/* Playing Indicator Overlay */}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/40 backdrop-blur-[2px]">
                    <div className="w-1.5 h-6 bg-white animate-[music-bar_0.5s_ease-in-out_infinite]"></div>
                    <div className="w-1.5 h-8 bg-white animate-[music-bar_0.7s_ease-in-out_infinite]"></div>
                    <div className="w-1.5 h-4 bg-white animate-[music-bar_0.4s_ease-in-out_infinite]"></div>
                    <div className="w-1.5 h-7 bg-white animate-[music-bar_0.6s_ease-in-out_infinite]"></div>
                  </div>
                )}
              </div>

              {/* Controls & Info */}
              <div className="flex-1 w-full text-center md:text-left min-w-0">
                <h3 className="text-2xl md:text-3xl font-display mb-2 leading-tight">
                  {currentTrack.title}
                </h3>
                <p className="text-gray-400 mb-6 flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                  <Mic className="w-4 h-4 text-gold" />
                  Hosted by {currentTrack.host}
                </p>

                {/* Progress Bar */}
                <div className="mb-6 group">
                  <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                    <span>{currentTime}</span>
                    <span>{duration !== "00:00" ? duration : currentTrack.duration}</span>
                  </div>
                  <div className="relative h-1.5 bg-white/10 rounded-full cursor-pointer">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold to-yellow-600 rounded-full"
                      style={{ width: `${progress}%` }}
                    >
                      <div className={`absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transition-opacity ${currentTrack.id === 0 ? 'opacity-0 group-hover:opacity-100' : 'hidden'}`}></div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleProgressBarChange}
                      disabled={currentTrack.id !== 0}
                      className={`absolute inset-0 w-full h-full opacity-0 ${currentTrack.id === 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    />
                  </div>
                </div>

                {/* Main Controls */}
                <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8">
                  <button
                    onClick={() => handleTrackChange((currentTrackIndex - 1 + podcasts.length) % podcasts.length)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <SkipBack className="w-6 h-6" />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                  </button>

                  <button
                    onClick={() => handleTrackChange((currentTrackIndex + 1) % podcasts.length)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <SkipForward className="w-6 h-6" />
                  </button>

                  <div className="hidden md:flex ml-auto items-center gap-2 text-gray-400">
                    <Volume2 className="w-5 h-5" />
                    <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              src={currentTrack.audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Mobile Playlist Toggle */}
            <button
              onClick={() => setShowMobilePlaylist(!showMobilePlaylist)}
              className="lg:hidden w-full mt-6 py-2 border-t border-white/10 text-xs font-medium text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
            >
              {showMobilePlaylist ? 'Hide Playlist' : 'View Playlist'}
            </button>
          </div>

          {/* Playlist Side (Right) */}
          <div className={`lg:col-span-5 flex flex-col gap-4 ${showMobilePlaylist ? 'flex' : 'hidden lg:flex'}`}>
            <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2 px-1">
              Playing Next
            </h4>

            {visiblePodcasts.map((podcast) => {
              // We need to find the original index of this podcast to handle clicks correctly
              const originalIndex = podcasts.findIndex(p => p.id === podcast.id);

              return (
                <div
                  key={podcast.id}
                  onClick={() => handleTrackChange(originalIndex)}
                  className="flex gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5 group"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                    <Image src={podcast.image} alt={podcast.title} fill className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Play className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h5 className="font-medium text-base text-white truncate mb-1 group-hover:text-gold transition-colors">
                      {podcast.title}
                    </h5>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {podcast.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {podcast.duration}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* See More Button */}
            {remainingPodcasts.length > 2 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-3 text-sm font-medium text-gold hover:text-white transition-colors flex items-center gap-1 w-fit px-2"
              >
                {showAll ? 'Show Less' : 'View All Episodes'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
