'use client';

import React, { useState, useEffect } from 'react';
import { Copyright, FileCheck, Shield, Fingerprint, AlertTriangle, RefreshCw, Building2, FileSearch, UserCheck, Search, Lock, GraduationCap, Scale, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: 'Intellectual Property Rights (IPR) Investigations',
      description: 'Preserving Brand Equity | Defending Innovation | Enabling Legal Protection. At FICS, we view intellectual property as a strategic asset that drives growth, fosters innovation, and secures brand identity in competitive markets. Our IPR Investigation Services address challenges related to infringement, misuse, and unauthorized exploitation of IP assets.',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80',
      icon: Copyright,
    },
    {
      title: 'Document Examination and Verification',
      description: 'Our Document Examination and Verification services help authenticate and validate critical records. We use advanced forensic techniques and specialized tools to identify alterations, confirm authenticity, and provide expert reports to support legal, corporate, and investigative needs. Services include handwriting verification, detection of forged documents, and security feature examination.',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80',
      icon: FileCheck,
    },
    {
      title: 'Cyber Forensics',
      description: 'Our cyber forensic services help uncover critical digital evidence and include forensic examination of laptops, mobile forensic investigations, email forensics, data recovery, network forensics, and collection of digital evidence from crime scenes. We utilize advanced tools and methodologies to extract and analyze digital evidence for legal proceedings.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      icon: Shield,
    },
    {
      title: 'Fingerprint Examination',
      description: 'Our Fingerprint Examination services help identify individuals and link evidence to crime scenes. We use advanced forensic methods and high-resolution analysis tools to accurately match fingerprints, strengthen investigations, and support legal, corporate, and security requirements. Services include latent fingerprint detection, database matching, and expert testimony.',
      image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=800&q=80',
      icon: Fingerprint,
    },
    {
      title: 'Cyber Crime Investigation',
      description: 'We provide specialized investigations for cyber-related offenses, including social media investigations, blackmail investigations, ransomware and malware investigations, cyberbullying investigations, identity theft, financial fraud investigations, and online defamation investigations. We identify, investigate, and resolve cybercrimes involving financial fraud and online criminal activities.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      icon: AlertTriangle,
    },
    {
      title: 'Cyber Crime Incident Response',
      description: 'Our incident response services ensure rapid action and resolution for cyber incidents, including internal breaches, external attacks, and complex threat investigations. We utilize our DFIR IRIS system for efficient case management, task delegation, and alert analysis, providing a structured and effective response to mitigate damage and protect your assets.',
      image: 'https://images.unsplash.com/photo-1563206767-5b1d97299337?auto=format&fit=crop&w=800&q=80',
      icon: RefreshCw,
    },
    {
      title: 'Corporate Investigations',
      description: 'Our corporate investigations focus on identifying and addressing misconduct within businesses, including internal and external fraud, corporate espionage, intellectual property protection, brand protection, infringement of patents, trademarks, and copyrights, and online vulnerability assessments. We help protect businesses from both internal and external threats.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
    },
    {
      title: 'Forensic Audit',
      description: 'Our forensic audit services are designed to uncover financial fraud and ensure compliance, including financial statement fraud, omission of transactions, non-disclosure of relevant information, and violation of financial reporting standards. We investigate discrepancies in accounting records, trace illicit financial activities, and ensure accurate reporting.',
      image: 'https://images.unsplash.com/photo-1554224155-220d5d1c6a36?auto=format&fit=crop&w=800&q=80',
      icon: FileSearch,
    },
    {
      title: 'Background Verification',
      description: 'We offer comprehensive background verification services to mitigate risks in recruitment and partnerships, including educational checks, address verification, previous employment checks, criminal record checks, and social media profiling. Our services help businesses make informed hiring decisions and verify the integrity of individuals or companies.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
      icon: UserCheck,
    },
    {
      title: 'Due Diligence Investigations',
      description: 'Our due diligence investigations help clients make informed decisions by thoroughly evaluating financial, legal, and reputational risks. We specialize in financial investigations, business risk assessment, and market and competitor analysis. We conduct background checks and detailed investigations into potential acquisitions, partnerships, or investments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: Search,
    },
    {
      title: 'Cybersecurity Services',
      description: 'Our cybersecurity services protect businesses from potential threats and vulnerabilities, including VAPT (Vulnerability Assessment and Penetration Testing), Red Team Testing, Blue teaming, Purple teaming, Network Security testing, ERP Audit, Web and Mobile Application Security Assessments, and Security Risk Assessment and Mitigation.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      icon: Lock,
    },
    {
      title: 'Forensic and Cyber Security Workshops',
      description: 'We conduct workshops to educate students, teachers, and caregivers about global cyber scams and the POCSO Act 2012, empowering them to recognize and prevent cyber threats. Our educational programs provide practical knowledge and awareness to help protect individuals and communities from cybercrime and online dangers.',
      image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80',
      icon: GraduationCap,
    },
    {
      title: 'Expert Testimony & Legal Support',
      description: 'We provide expert testimony services in court for various forensic investigations, offering professional opinions, analysis, and evidence presentation. Our forensic experts support clients during litigation by ensuring that forensic findings are accurately interpreted and presented. We comply with Section 329 BNSS, Section 59 BSA, and Section 39(1) of BSA 2023.',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
      icon: Scale,
    },
  ];

  // Duplicate services for seamless infinite scroll
  // We need at least 2 full sets to ensure seamless looping
  const extendedServices = [...services, ...services];

  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Auto-scroll effect - scrolls one card at a time
  // Shows 1 card on mobile, 3 cards on desktop
  useEffect(() => {
    if (!autoScrollEnabled) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // When we've scrolled through all original services, reset to 0 seamlessly
        if (nextIndex >= services.length) {
          // Disable transition, reset, then re-enable for seamless loop
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
            // Re-enable transition immediately after reset
            requestAnimationFrame(() => {
              setIsTransitioning(true);
            });
          }, 700); // Match transition duration
          return services.length; // Show duplicate set during transition
        }
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [services.length, autoScrollEnabled]);

  const goToNext = () => {
    setAutoScrollEnabled(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= services.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        }, 700);
        return services.length;
      }
      return nextIndex;
    });
  };

  const goToPrevious = () => {
    setAutoScrollEnabled(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(services.length - 1);
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        }, 700);
        return -1;
      }
      return prevIndex;
    });
  };

  const renderServiceCard = (service: typeof services[0], index: number) => {
    const IconComponent = service.icon;
    return (
      <div
        key={`${service.title}-${index}`}
        className="relative group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/10 flex-shrink-0 w-full flex flex-col"
        style={{ minHeight: '100%' }}
      >
        {/* Abstract Header Image */}
        <div className="relative w-full h-40 md:h-48 overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              console.error('Service image failed to load:', service.image);
              const target = e.currentTarget;
              target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>

        {/* Overlapping Icon - White circle with gray outer circle */}
        <div className="absolute top-32 md:top-40 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            {/* Outer light gray circle */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 flex items-center justify-center">
              {/* Inner white circle */}
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="pt-6 md:pt-10 pb-4 md:pb-6 px-4 md:px-6 bg-white/50 backdrop-blur-sm flex flex-col flex-grow">
          {/* Title - Fixed to 2 lines */}
          <h3
            className="text-lg md:text-xl lg:text-2xl font-display font-normal text-black mb-2 md:mb-3 text-center"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              lineHeight: '1.4',
              height: '4rem',
            }}
          >
            {service.title}
          </h3>

          {/* Description - Fixed to 3 lines */}
          <p
            className="text-xs md:text-sm lg:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed text-center flex-grow"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              minHeight: '4.5rem',
            }}
          >
            {service.description}
          </p>

          {/* Continue reading link */}
          <div className="text-center mt-auto">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all duration-300 group/link"
            >
              <span className="underline">Continue reading</span>
              <ArrowRight
                width="16"
                height="16"
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="w-full px-4 py-8 md:px-12 lg:px-16 md:py-20 rounded-t-3xl md:rounded-t-[3rem] rounded-b-3xl md:rounded-b-[3rem] mt-4 md:mt-12 relative z-10"
      style={{
        backgroundColor: '#2C2520', // Deep Espresso Brown - Warm, Dominating, Soothing
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-16">
          <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-200 mb-2 md:mb-4">
            OUR SERVICES
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-normal text-white mb-4 md:mb-8">
            Expert forensic services <br />
            <span className="italic font-serif">designed for your business success</span>.
          </h2>
        </div>

        {/* Services Carousel - Shows 1 card on mobile, 3 cards on desktop */}
        <div className="relative w-full overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-gray-700 transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-gray-700 transition-colors" />
          </button>

          <div
            className={`flex items-stretch ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{
              transform: isMobile
                ? `translateX(calc(-${currentIndex} * 100%))`
                : `translateX(calc(-${currentIndex} * (100% / 3)))`,
            }}
          >
            {extendedServices.map((service, index) => (
              <div
                key={`service-${index}`}
                className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-3 flex items-stretch"
              >
                {renderServiceCard(service, index)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

