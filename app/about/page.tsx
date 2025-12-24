'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    // Try to play video when component mounts
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully');
          })
          .catch((error) => {
            console.error('Video play failed:', error);
            setVideoError(true);
          });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main>
        {/* Video Hero Section */}
        <section className="w-full relative h-[60vh] md:h-[70vh] bg-black" style={{ zIndex: 1 }}>
          {/* Video Element */}
          {!videoError && (
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
                onLoadedData={() => {
                  console.log('Video loaded successfully');
                  if (videoRef.current) {
                    videoRef.current.play().catch((error) => {
                      console.error('Video play error:', error);
                      setVideoError(true);
                    });
                  }
                }}
                onError={(e) => {
                  console.error('Video error:', e);
                  setVideoError(true);
                }}
              >
                <source src="/assets/videos/about-hero.mp4" type="video/mp4" />
              </video>
            </div>
          )}

          {/* Fallback background image - shows if video fails to load */}
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center ${videoError ? '' : 'opacity-0'}`}
            style={{
              backgroundImage: 'url(/assets/images/about/hero-poster.jpg)',
              zIndex: 0,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }}></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
            <div className="text-center px-6 max-w-4xl mx-auto">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Transforming Forensics Through<br />
                <span className="italic">Innovation</span>
              </h2>
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Content Sections - Cream Background with rounded corners */}
        <div className="w-full px-6 pt-16 pb-16 md:px-12 lg:px-16 md:pt-24 md:pb-24 bg-[#FFFAF3] rounded-t-3xl md:rounded-t-[3rem] -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
          <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">

            {/* ISO Certified Intro */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider mb-6">
                <span>ISO 9001:2015 Certified</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-slate-900 mb-8 leading-tight">
                Setting the Standard in <br /><span className="italic text-gold">Forensic Excellence</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                FICS Pvt. Ltd. stands as a beacon of trust and precision in the world of forensic investigations. As an ISO 9001:2015 certified agency, we strictly adhere to global quality standards, ensuring that every investigation is conducted with absolute methodological integrity, traceability, and accountability. Our certification is not just a badge; it is our promise of delivering evidence that stands the test of scrutiny.
              </p>
            </div>

            {/* Who We Are */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
                  WHO WE ARE
                </h3>
                <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-6">
                  Pioneers of Digital <br /> & Legal Truth.
                </h2>
                <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                  <p>
                    Forensic Investigations and Consultancy Services (FICS) was founded with a singular vision: to bridge the gap between complex digital evidence and legal resolution. We are a collective of seasoned forensic experts, cybercrime investigators, legal consultants, and ethical hackers united by a passion for truth.
                  </p>
                  <p>
                    From corporate fraud to sophisticated cyber-attacks, we provide the clarity needed to navigate crises. We don&apos;t just analyze data; we reconstruct narratives, identify perpetrators, and secure the evidence required for successful litigation or internal resolution.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-2xl">
                <img
                  src="/assets/images/about/team-meeting.jpg"
                  alt="FICS Team meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <p className="font-display text-2xl italic">&quot;Truth lies in the details.&quot;</p>
                </div>
              </div>
            </div>

            {/* Why FICS */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
                  WHY CHOOSE FICS
                </h3>
                <h2 className="text-3xl md:text-5xl font-display text-slate-900">
                  Reliability in <span className="text-gold italic">Critical Moments</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Unmatched Expertise",
                    desc: "Our team comprises veterans from law enforcement, innovative tech minds, and legal scholars who bring decades of combined experience to every case."
                  },
                  {
                    title: "Cutting-Edge Tech",
                    desc: "We leverage state-of-the-art forensic hardware and AI-driven analytical software to uncover evidence that others miss, ensuring comprehensive results."
                  },
                  {
                    title: "Absolute Confidentiality",
                    desc: "We understand the sensitivity of your data. Our protocols ensure strict non-disclosure, secure data handling, and complete privacy throughout the investigation."
                  },
                  {
                    title: "Legal Admissibility",
                    desc: "Every piece of evidence we extract is handled with a strict Chain of Custody, ensuring it is fully admissible in courts of law under Section 65B of the Indian Evidence Act."
                  },
                  {
                    title: "Rapid Response",
                    desc: "Cyber incidents require immediate action. Our rapid response team is available 24/7 to contain breaches, preserve volatile evidence, and mitigate damage."
                  },
                  {
                    title: "Tailored Solutions",
                    desc: "We recognize that no two cases are alike. We customize our investigative approach to align with your specific organizational goals and legal requirements."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-gold/30 transition-all duration-300 group">
                    <div className="w-12 h-1 bg-gold mb-6 group-hover:w-20 transition-all"></div>
                    <h3 className="text-xl font-display font-semibold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Commitment */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gold/80 mb-6">
                    OUR COMMITMENT
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-display mb-8 leading-tight">
                    Integrity is our <br />Core Algorithm.
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    At FICS, we commit to more than just solving cases; we commit to restoring peace of mind. We pledge to operate with the highest ethical standards, providing unbiased, factual findings upon which you can base critical decisions. Your trust is our most valuable asset, and we strive to protect it with every engagement.
                  </p>
                  <Link href="/contact" className="inline-block px-8 py-4 bg-gold text-slate-900 font-bold rounded-lg hover:bg-white transition-colors">
                    Partner With Us
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src="/assets/images/about/handshake.jpg"
                    alt="Handshake"
                    className="rounded-xl shadow-2xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
