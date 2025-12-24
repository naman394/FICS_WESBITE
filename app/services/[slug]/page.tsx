'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';

interface PageProps {
  params: {
    slug: string;
  };
}

const ServiceDetailPage: React.FC<PageProps> = ({ params }) => {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gold" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </section>

        <div className="relative z-20 w-full px-6 py-24 md:py-32 bg-[#FFFAF3] rounded-t-3xl md:rounded-t-[4rem] -mt-20 text-slate-900 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
          <div className="max-w-6xl mx-auto">
            {/* Back Link */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-slate-500 hover:text-gold transition-colors mb-16 font-medium tracking-wide uppercase text-xs md:text-sm"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-gold transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to Services
            </Link>

            <div className="space-y-32">

              {/* Overview */}
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-gold/10 rounded-full blur-2xl"></div>
                <h2 className="relative text-xs font-bold tracking-[0.2em] uppercase text-gold mb-4 pl-1">
                  SERVICE OVERVIEW
                </h2>
                <p className="relative text-slate-800 leading-relaxed text-2xl md:text-3xl lg:text-4xl font-display font-light">
                  {service.fullDescription}
                </p>
              </div>

              {/* Key Services / Features */}
              <div>
                <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-6">
                  <h3 className="text-3xl md:text-4xl font-display text-slate-900">
                    Key Capabilities
                  </h3>
                  <div className="hidden md:block text-slate-400 text-sm font-medium">
                    Comprehensive Analysis
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {service.keyComponents ? (
                    service.keyComponents.map((component, idx) => (
                      <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-gold/10 transition-colors"></div>
                        <h4 className="relative text-xl font-display font-semibold text-slate-900 mb-6 group-hover:text-gold transition-colors">
                          {component.title}
                        </h4>
                        <ul className="relative space-y-4">
                          {component.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 group-hover:text-slate-700 transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
                              <span className="text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    service.features && (
                      <div className="col-span-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-inner">
                                <CheckCircle2 className="w-6 h-6" />
                              </div>
                              <span className="text-slate-700 font-medium text-lg pt-1 group-hover:text-slate-900 transition-colors">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Methodology */}
              {service.methodology && (
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-display mb-16 text-center">
                      Our <span className="text-gold italic">Scientific</span> Approach
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                      {service.methodology.map((step, idx) => (
                        <div key={idx} className="relative group col-span-1 flex-1 min-w-[220px] max-w-[280px]">
                          {/* Connecting Line (Desktop) */}
                          {idx < service.methodology!.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-1/2 w-[calc(100%+3rem)] h-0.5 bg-gradient-to-r from-gold/50 to-transparent z-0"></div>
                          )}

                          <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                              <span className="text-2xl font-display font-medium text-gold">{idx + 1}</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-3">{step.step}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.benefits && (
                <div>
                  <div className="text-center mb-16">
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">
                      VALUE PROPOSITION
                    </h3>
                    <h3 className="text-3xl md:text-5xl font-display text-slate-900">
                      Why Choose FICS?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start p-6 rounded-2xl bg-white border border-slate-100 hover:border-gold/50 transition-colors duration-300">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mr-4">
                          <CheckCircle2 className="w-5 h-5 text-gold" />
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed pt-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Audience */}
              {service.targetAudience && (
                <div className="py-12 border-y border-slate-200">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 shrink-0">
                      WHO NEEDS THIS?
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-end gap-3 flex-grow">
                      {service.targetAudience.map((audience, idx) => (
                        <span key={idx} className="px-5 py-2.5 rounded-full bg-white text-slate-600 font-medium border border-slate-200 hover:border-gold hover:text-gold hover:shadow-md transition-all duration-300 cursor-default text-sm">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA Box */}
              <div className="relative rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

                <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">
                      Ready to secure your <br />
                      <span className="text-gold italic">digital frontier?</span>
                    </h3>
                    <p className="text-slate-300 text-lg md:text-xl font-light">
                      Our forensic experts are standing by to provide a confidential consultation tailored to your specific situation.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-xl hover:bg-gold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                  >
                    Book Consultation
                  </Link>
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

export default ServiceDetailPage;
