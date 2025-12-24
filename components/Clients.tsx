'use client';

import React from 'react';

const Clients: React.FC = () => {
  const clientLogos = [
    "/assets/images/clients/baroda-rajasthan-kshetriya-gramin-bank.png",
    "/assets/images/clients/shree-venkateshwara-college.png",
    "/assets/images/clients/madhya-bihar-gramin-bank.png",
    "/assets/images/clients/ministry-of-home-affairs.png",
    "/assets/images/clients/broadridge.png",
    "/assets/images/clients/Bharti-Reality.png",
    "/assets/images/clients/tcl.png",
    "/assets/images/clients/lrn-corporation.png",
    "/assets/images/clients/NIDEC.png",
    "/assets/images/clients/gopaljee-ananda.png",
    "/assets/images/clients/saptrishi-consultancy-services-ltd.png",
    "/assets/images/clients/pace-digitek-infra-private-limited.png",
    "/assets/images/clients/KRBL-limited.png",
    "/assets/images/clients/pramanit-karya-india-pvt-ltd.png",
    "/assets/images/clients/ANYA-gurgaon.png",
    "/assets/images/clients/V-Leader.png",
    "/assets/images/clients/avengers-management-services-pvt-ltd.png",
    "/assets/images/clients/Salwan-Public-School.png",
    "/assets/images/clients/step-by-step-school.png",
    "/assets/images/clients/noida-development-authority.png",
    "/assets/images/clients/university-of-delhi.png",
    "/assets/images/clients/GIS-Consulting.png",
    "/assets/images/clients/Oriental-Bank-Of-Commerce.png",
    "/assets/images/clients/National-Crime-Records-Bureau-Logo.png",
    "/assets/images/clients/NBCC.png",
    "/assets/images/clients/BPSC-Top.png",
    "/assets/images/clients/db-gramin-bank.png"
  ];

  // Duplicate logos for seamless loop
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12 px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-4">
            Trusted Partners
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-slate-900">
            Companies who rely on our expertise
          </h2>
        </div>
      </div>

      {/* Scrolling Logos */}
      <div className="relative w-full overflow-hidden pt-4 md:pt-6">
        {/* Left Gradient Overlay - White */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

        {/* Right Gradient Overlay - White */}
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex w-full">
          <div className="flex items-center gap-12 md:gap-16 animate-marquee-reverse min-w-full shrink-0 px-6 md:px-12">
            {allLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-20 md:max-h-24 lg:max-h-28 w-auto h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Logo failed to load:', logo);
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-12 md:gap-16 animate-marquee-reverse min-w-full shrink-0 px-6 md:px-12" aria-hidden="true">
            {allLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-20 md:max-h-24 lg:max-h-28 w-auto h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Logo failed to load:', logo);
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

