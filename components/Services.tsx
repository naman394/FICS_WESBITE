'use client';

import React, { useState, useEffect } from 'react';
import { Copyright, FileCheck, Shield, Fingerprint, AlertTriangle, RefreshCw, Building2, FileSearch, UserCheck, Search, Lock, GraduationCap, Scale, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: any;
  slug: string;
}

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

  const groupedServices: { [key: string]: Service[] } = {
    'Forensic & Legal Services': [
      {
        title: 'Cyber Forensics',
        description: 'Our cyber forensic services help uncover critical digital evidence and include forensic examination of laptops, mobile forensic investigations, email forensics, data recovery, network forensics, and collection of digital evidence from crime scenes.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        icon: Shield,
        slug: 'cyber-forensics'
      },
      {
        title: 'Document Verification',
        description: 'Our Document Examination and Verification services help authenticate and validate critical records. We use advanced forensic techniques to identify alterations, confirm authenticity, and provide expert reports.',
        image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80',
        icon: FileCheck,
        slug: 'document-examination-verification'
      },
      {
        title: 'Fingerprint Examination',
        description: 'Our Fingerprint Examination services help identify individuals and link evidence to crime scenes. Services include latent fingerprint detection, database matching, and expert testimony.',
        image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=800&q=80',
        icon: Fingerprint,
        slug: 'fingerprint-examination'
      },
      {
        title: 'Expert Testimony',
        description: 'We provide expert testimony services in court for various forensic investigations. Our forensic experts support clients during litigation by ensuring that forensic findings are accurately interpreted and presented.',
        image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
        icon: Scale,
        slug: 'expert-testimony-legal-support'
      },
    ],
    'Corporate & Risk Solutions': [
      {
        title: 'IPR Investigations',
        description: 'We view intellectual property as a strategic asset. Our IPR Investigation Services address challenges related to infringement, misuse, and unauthorized exploitation of IP assets.',
        image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80',
        icon: Copyright,
        slug: 'ipr-investigations'
      },
      {
        title: 'Corporate Investigations',
        description: 'Our corporate investigations focus on identifying and addressing misconduct within businesses, including internal and external fraud, corporate espionage, and intellectual property protection.',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
        icon: Building2,
        slug: 'corporate-investigations'
      },
      {
        title: 'Forensic Audit',
        description: 'Our forensic audit services uncover financial fraud and ensure compliance. We investigate discrepancies in accounting records, trace illicit financial activities, and ensure accurate reporting.',
        image: 'https://images.unsplash.com/photo-1554224155-220d5d1c6a36?auto=format&fit=crop&w=800&q=80',
        icon: FileSearch,
        slug: 'forensic-audit'
      },
      {
        title: 'Background Verification',
        description: 'We offer comprehensive background verification services to mitigate risks in recruitment and partnerships, including educational checks, address verification, and criminal record checks.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
        icon: UserCheck,
        slug: 'background-verification'
      },
      {
        title: 'Due Diligence',
        description: 'Our due diligence investigations help clients make informed decisions by thoroughly evaluating financial, legal, and reputational risks through detailed investigations.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        icon: Search,
        slug: 'due-diligence-investigations'
      },
    ],
    'Cybersecurity & Response': [
      {
        title: 'Cyber Crime Investigation',
        description: 'We provide specialized investigations for cyber-related offenses, including social media investigations, ransomware, financial fraud, and online defamation.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        icon: AlertTriangle,
        slug: 'cyber-crime-investigation'
      },
      {
        title: 'Incident Response (DFIR)',
        description: 'Our incident response services ensure rapid action and resolution for cyber incidents. We utilize our DFIR IRIS system for efficient case management and threat mitigation.',
        image: 'https://images.unsplash.com/photo-1563206767-5b1d97299337?auto=format&fit=crop&w=800&q=80',
        icon: RefreshCw,
        slug: 'incident-response'
      },
      {
        title: 'Cybersecurity Services',
        description: 'Our cybersecurity services protect businesses from potential threats includes VAPT, Red Team Testing, Blue teaming, and Security Risk Assessment.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        icon: Lock,
        slug: 'cybersecurity-services'
      },
    ],
    'Training & Workshops': [
      {
        title: 'Forensic & Cyber Workshops',
        description: 'We conduct workshops to educate students, teachers, and caregivers about global cyber scams and the POCSO Act 2012, empowering them to recognize and prevent cyber threats.',
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80',
        icon: GraduationCap,
        slug: 'workshops'
      },
    ]
  };

  const [activeCategory, setActiveCategory] = useState<string>('Forensic & Legal Services');
  const [activeServices, setActiveServices] = useState<Service[]>(groupedServices['Forensic & Legal Services']);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsTransitioning(false);
    setActiveCategory(category);
    setActiveServices(groupedServices[category]);
    setCurrentIndex(0);
    setTimeout(() => setIsTransitioning(true), 50);
  };

  // Duplicate services for seamless infinite scroll
  // Only duplicate if we have more than 1 item
  const extendedServices = activeServices.length > 1 ? [...activeServices, ...activeServices] : activeServices;

  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollEnabled || activeServices.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= activeServices.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
            requestAnimationFrame(() => {
              setIsTransitioning(true);
            });
          }, 700);
          return activeServices.length;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeServices.length, autoScrollEnabled]);

  const goToNext = () => {
    if (activeServices.length <= 1) return;
    setAutoScrollEnabled(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= activeServices.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        }, 700);
        return activeServices.length;
      }
      return nextIndex;
    });
  };

  const goToPrevious = () => {
    if (activeServices.length <= 1) return;
    setAutoScrollEnabled(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(activeServices.length - 1);
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        }, 700);
        return -1;
      }
      return prevIndex;
    });
  };

  const renderServiceCard = (service: Service, index: number) => {
    const IconComponent = service.icon;
    return (
      <div
        key={`${service.title}-${index}`}
        className="relative group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/10 flex-shrink-0 w-full flex flex-col"
        style={{ minHeight: '100%' }}
      >
        {/* Abstract Header Image */}
        <div className="relative w-full h-40 md:h-48 overflow-hidden flex-shrink-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
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
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all duration-300 group/link"
            >
              <span className="underline">Continue reading</span>
              <ArrowRight
                width="16"
                height="16"
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="w-full px-4 py-8 md:px-12 lg:px-16 md:py-20 rounded-t-3xl md:rounded-t-[3rem] rounded-b-3xl md:rounded-b-[3rem] mt-4 md:mt-12 relative z-10"
      style={{
        backgroundColor: '#2C2520', // Deep Espresso Brown
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-12">
          <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-200 mb-2 md:mb-4">
            OUR SERVICES
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-normal text-white mb-4 md:mb-8">
            Expert forensic services <br />
            <span className="italic font-serif">designed for your business success</span>.
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {Object.keys(groupedServices).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-white text-black shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Carousel */}
        <div className="relative w-full overflow-hidden min-h-[400px]">
          {/* Navigation Arrows */}
          {activeServices.length > 1 && (
            <>
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
            </>
          )}

          <div
            className={`flex items-stretch ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''} ${activeServices.length <= 1 ? 'justify-center' : ''}`}
            style={{
              transform: activeServices.length > 1 ? (isMobile
                ? `translateX(calc(-${currentIndex} * 100%))`
                : `translateX(calc(-${currentIndex} * (100% / 3)))`) : 'none',
            }}
          >
            {extendedServices.length > 0 ? (
              extendedServices.map((service, index) => (
                <div
                  key={`service-${index}`}
                  className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-3 flex items-stretch"
                >
                  {renderServiceCard(service, index)}
                </div>
              ))
            ) : (
              <div className="w-full text-white text-center py-10">No services found in this category.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
