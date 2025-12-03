'use client';

import React, { useState } from 'react';
import { Copyright, FileCheck, Shield, Fingerprint, AlertTriangle, RefreshCw, Building2, FileSearch, UserCheck, Search, Lock, GraduationCap, Scale, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const services = [
    {
      title: 'Intellectual Property Rights (IPR) Investigations',
      description: 'Preserving Brand Equity | Defending Innovation | Enabling Legal Protection. At FICS, we view intellectual property as a strategic asset that drives growth, fosters innovation, and secures brand identity in competitive markets. Our IPR Investigation Services address challenges related to infringement, misuse, and unauthorized exploitation of IP assets.',
      image: '/images/image1.png',
      icon: Copyright,
    },
    {
      title: 'Document Examination and Verification',
      description: 'Our Document Examination and Verification services help authenticate and validate critical records. We use advanced forensic techniques and specialized tools to identify alterations, confirm authenticity, and provide expert reports to support legal, corporate, and investigative needs. Services include handwriting verification, detection of forged documents, and security feature examination.',
      image: '/images/image2.png',
      icon: FileCheck,
    },
    {
      title: 'Cyber Forensics',
      description: 'Our cyber forensic services help uncover critical digital evidence and include forensic examination of laptops, mobile forensic investigations, email forensics, data recovery, network forensics, and collection of digital evidence from crime scenes. We utilize advanced tools and methodologies to extract and analyze digital evidence for legal proceedings.',
      image: '/images/image3.png',
      icon: Shield,
    },
    {
      title: 'Fingerprint Examination',
      description: 'Our Fingerprint Examination services help identify individuals and link evidence to crime scenes. We use advanced forensic methods and high-resolution analysis tools to accurately match fingerprints, strengthen investigations, and support legal, corporate, and security requirements. Services include latent fingerprint detection, database matching, and expert testimony.',
      image: '/images/image4.png',
      icon: Fingerprint,
    },
    {
      title: 'Cyber Crime Investigation',
      description: 'We provide specialized investigations for cyber-related offenses, including social media investigations, blackmail investigations, ransomware and malware investigations, cyberbullying investigations, identity theft, financial fraud investigations, and online defamation investigations. We identify, investigate, and resolve cybercrimes involving financial fraud and online criminal activities.',
      image: '/images/image5.png',
      icon: AlertTriangle,
    },
    {
      title: 'Cyber Crime Incident Response',
      description: 'Our incident response services ensure rapid action and resolution for cyber incidents, including internal breaches, external attacks, and complex threat investigations. We utilize our DFIR IRIS system for efficient case management, task delegation, and alert analysis, providing a structured and effective response to mitigate damage and protect your assets.',
      image: '/images/image1.png',
      icon: RefreshCw,
    },
    {
      title: 'Corporate Investigations',
      description: 'Our corporate investigations focus on identifying and addressing misconduct within businesses, including internal and external fraud, corporate espionage, intellectual property protection, brand protection, infringement of patents, trademarks, and copyrights, and online vulnerability assessments. We help protect businesses from both internal and external threats.',
      image: '/images/image2.png',
      icon: Building2,
    },
    {
      title: 'Forensic Audit',
      description: 'Our forensic audit services are designed to uncover financial fraud and ensure compliance, including financial statement fraud, omission of transactions, non-disclosure of relevant information, and violation of financial reporting standards. We investigate discrepancies in accounting records, trace illicit financial activities, and ensure accurate reporting.',
      image: '/images/image3.png',
      icon: FileSearch,
    },
    {
      title: 'Background Verification',
      description: 'We offer comprehensive background verification services to mitigate risks in recruitment and partnerships, including educational checks, address verification, previous employment checks, criminal record checks, and social media profiling. Our services help businesses make informed hiring decisions and verify the integrity of individuals or companies.',
      image: '/images/image4.png',
      icon: UserCheck,
    },
    {
      title: 'Due Diligence Investigations',
      description: 'Our due diligence investigations help clients make informed decisions by thoroughly evaluating financial, legal, and reputational risks. We specialize in financial investigations, business risk assessment, and market and competitor analysis. We conduct background checks and detailed investigations into potential acquisitions, partnerships, or investments.',
      image: '/images/image5.png',
      icon: Search,
    },
    {
      title: 'Cybersecurity Services',
      description: 'Our cybersecurity services protect businesses from potential threats and vulnerabilities, including VAPT (Vulnerability Assessment and Penetration Testing), Red Team Testing, Blue teaming, Purple teaming, Network Security testing, ERP Audit, Web and Mobile Application Security Assessments, and Security Risk Assessment and Mitigation.',
      image: '/images/image1.png',
      icon: Lock,
    },
    {
      title: 'Forensic and Cyber Security Workshops',
      description: 'We conduct workshops to educate students, teachers, and caregivers about global cyber scams and the POCSO Act 2012, empowering them to recognize and prevent cyber threats. Our educational programs provide practical knowledge and awareness to help protect individuals and communities from cybercrime and online dangers.',
      image: '/images/image2.png',
      icon: GraduationCap,
    },
    {
      title: 'Expert Testimony & Legal Support',
      description: 'We provide expert testimony services in court for various forensic investigations, offering professional opinions, analysis, and evidence presentation. Our forensic experts support clients during litigation by ensuring that forensic findings are accurately interpreted and presented. We comply with Section 329 BNSS, Section 59 BSA, and Section 39(1) of BSA 2023.',
      image: '/images/image3.png',
      icon: Scale,
    },
  ];

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderServiceCard = (service: typeof services[0], index: number) => {
    const IconComponent = service.icon;
    return (
      <div
        key={`${service.title}-${index}`}
        className="relative group bg-[#FFFAF3] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200/60 flex-shrink-0 h-full flex flex-col"
      >
        {/* Abstract Header Image */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden flex-shrink-0">
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
        <div className="absolute top-40 md:top-56 left-1/2 transform -translate-x-1/2 z-10">
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
              minHeight: '3rem',
              maxHeight: '4rem',
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
              minHeight: 'clamp(3rem, 6vw, 4.5rem)',
              maxHeight: 'clamp(4.5rem, 8vw, 5.5rem)',
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
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main>
        {/* Header Section - Image Background */}
        <section 
          className="w-full h-[60vh] md:h-[70vh] px-6 md:px-12 lg:px-16 relative bg-cover bg-center bg-no-repeat flex items-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8371718/pexels-photo-8371718.jpeg')`
          }}
        >
          {/* Creamy Overlay Layer */}
          <div className="absolute inset-0 bg-[#FFFAF3]/20"></div>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 md:mb-4">
              OUR SERVICES
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-4 md:mb-6">
              Expert forensic services <br />
              <span className="italic font-serif">for your business success</span>.
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Comprehensive forensic investigation and consultancy services to protect your business, assets, and reputation.
            </p>
            
            <div className="mb-4">
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold">
                Search services by title
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by service title..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-400">
              Showing {filteredServices.length} {filteredServices.length === 1 ? 'result' : 'results'} out of {services.length}.
            </p>
          </div>
        </section>

        {/* Services Grid Section - Cream Background with rounded corners */}
        <div className="w-full px-4 pt-4 pb-8 md:px-12 lg:px-16 md:pt-6 md:pb-20 bg-[#FFFAF3] rounded-t-3xl md:rounded-t-[3rem] rounded-b-3xl md:rounded-b-[3rem] -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
          <div className="max-w-7xl mx-auto">
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredServices.map((service, index) => (
                    <div key={`service-${index}`} className="h-full">
                      {renderServiceCard(service, index)}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No services found matching "{searchQuery}"</p>
                </div>
              )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
