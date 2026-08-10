'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Mic,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  RotateCw,
  Share2
} from 'lucide-react';
import type { Podcast } from '@/lib/podgen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PodcastDetailProps {
  podcast: Podcast;
  relatedPodcasts: Podcast[];
}

export default function PodcastDetail({ podcast, relatedPodcasts }: PodcastDetailProps) {
  const slug = podcast.slug;

  // Audio Player State
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Reset state when podcast changes
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("00:00");
    setDuration("00:00");
    setVolume(1);
    setIsMuted(false);
  }, [slug]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, audioRef.current.duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      const progressPercent = (current / total) * 100;

      setProgress(progressPercent || 0);
      setCurrentTime(formatTime(current));

      // Update duration if it wasn't set correctly initially
      if (duration === "00:00" && !isNaN(total) && total !== Infinity) {
        setDuration(formatTime(total));
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const total = audioRef.current.duration;
      if (!isNaN(total) && total !== Infinity) {
        setDuration(formatTime(total));
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === Infinity) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (audioRef.current) {
      const time = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setProgress(value);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    setIsMuted(value === 0);
    if (audioRef.current) {
      audioRef.current.volume = value;
      audioRef.current.muted = value === 0;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;
      if (newMutedState) {
        setVolume(0);
      } else {
        setVolume(1);
        audioRef.current.volume = 1;
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-gold selection:text-white">
      <Navbar />

      {/* Background Gradient Blur */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] opacity-20"
        ></div>
        <div
          className="absolute top-1/2 -left-1/4 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px] opacity-20"
        ></div>
      </div>

      <main className="flex-grow z-10 pt-24 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">

          {/* Back Navigation */}
          <Link
            href="/podcasts"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-gold transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium tracking-wide">Back to Podcasts</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Artwork & Quick Info */}
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32">
              <div className="space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 group">
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Playing Overlay */}
                  {isPlaying && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="flex gap-1 items-end h-12">
                        <div className="w-1.5 bg-gold animate-[music-bar_1s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-gold animate-[music-bar_1.2s_ease-in-out_infinite_0.1s]"></div>
                        <div className="w-1.5 bg-gold animate-[music-bar_0.8s_ease-in-out_infinite_0.2s]"></div>
                        <div className="w-1.5 bg-gold animate-[music-bar_1.1s_ease-in-out_infinite_0.3s]"></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>{podcast.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Player & Content */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-8">

              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {podcast.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                    <Mic className="w-3 h-3" />
                    {podcast.host}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
                  {podcast.title}
                </h1>

                <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
                  {podcast.description}
                </p>
              </div>

              {/* Compact Player */}
              <div className="bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col gap-4">
                  {/* Controls & Time */}
                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4">
                      <button onClick={skipBackward} className="text-neutral-400 hover:text-white transition-colors" aria-label="Rewind 15s">
                        <RotateCcw className="w-5 h-5" />
                      </button>
                      <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center hover:scale-105 hover:bg-white transition-all shadow-lg text-lg"
                      >
                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                      </button>
                      <button onClick={skipForward} className="text-neutral-400 hover:text-white transition-colors" aria-label="Skip 15s">
                        <RotateCw className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono text-neutral-400">
                      <span className="min-w-[45px] text-right">{currentTime}</span>
                      <span className="text-neutral-600">/</span>
                      <span className="min-w-[45px]">{duration}</span>
                    </div>

                    {/* Volume - Always Visible */}
                    <div className="flex items-center gap-2 group/vol relative w-24 sm:w-32">
                      <button onClick={toggleMute} className="text-neutral-400 hover:text-white transition-colors z-10">
                        {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <div className="relative flex-1 h-1.5 bg-neutral-700 rounded-full cursor-pointer group/slider">
                        <div
                          className="absolute top-0 left-0 h-full bg-neutral-400 rounded-full group-hover/slider:bg-white transition-colors"
                          style={{ width: `${volume * 100}%` }}
                        ></div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          aria-label="Volume"
                        />
                      </div>
                    </div>

                  </div>

                  {/* Progress Bar */}
                  <div className="group pt-2">
                    <div className="relative h-1.5 bg-neutral-800 rounded-full cursor-pointer">
                      <div
                        className="absolute top-0 left-0 h-full bg-gold rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleProgressBarChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <audio
                  ref={audioRef}
                  src={podcast.audioUrl}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>

              {/* Episode Notes */}
              <div className="prose prose-invert prose-lg max-w-none">
                <h3 className="text-xl font-display font-medium text-white mb-4">Episode Notes</h3>
                <p className="text-neutral-300 font-light leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {podcast.fullDescription}
                </p>
              </div>

              <div className="border-t border-neutral-800 my-8"></div>

              {/* Related */}
              <div>
                <h3 className="text-lg font-display font-medium text-white mb-6">You might also like</h3>
                <div className="space-y-4">
                  {relatedPodcasts.map(p => (
                    <Link href={`/podcasts/${p.slug}`} key={p.slug} className="flex items-center gap-4 group hover:bg-white/5 p-3 rounded-xl transition-colors">
                      <img src={p.image} alt={p.title} className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-medium text-neutral-200 group-hover:text-gold transition-colors line-clamp-1">{p.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
                          <span>{p.duration}</span>
                          <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                          <span>{p.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* CSS for custom animations if needed */}
      <style jsx global>{`
        @keyframes music-bar {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
