'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Star, Award, Users, Shield } from 'lucide-react';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  isVisible: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ targetValue, duration = 3000, isVisible }) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      hasAnimated.current = false;
      setCount(0);
      return;
    }

    if (hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, targetValue, duration]);

  return <>{count.toLocaleString()}</>;
};

interface StatCardProps {
  stat: {
    value: number;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  index: number;
  cardImages: string[];
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, cardImages }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasStartedRef.current) {
            hasStartedRef.current = true;
            setTimeout(() => {
              setIsVisible(true);
            }, 200);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            hasStartedRef.current = false;
            setIsVisible(false);
          }
        });
      },
      { threshold: 0 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  const IconComponent = stat.icon;

  return (
    <div
      ref={cardRef}
      className="group relative p-4 md:p-6 rounded-xl border border-slate-200 hover:border-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 overflow-hidden flex-shrink-0 w-[75vw] md:w-auto h-[240px] md:h-auto flex flex-col bg-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cardImages[index]})`,
        }}
      >
      </div>
      <div className="relative z-10 flex flex-col flex-grow justify-center bg-white/85 backdrop-blur-md rounded-xl p-4 shadow-sm border border-white/40 mx-2 my-2">
        <div className="mb-2 md:mb-3 flex justify-center">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center justify-center group-hover:bg-gold/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20">
            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-slate-800" />
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-2 text-center group-hover:text-gold transition-colors duration-300">
          <AnimatedCounter targetValue={stat.value} isVisible={isVisible} />
        </h3>

        <h4 className="text-sm md:text-base font-semibold text-slate-800 mb-2 md:mb-2 text-center">
          {stat.title}
        </h4>

        <p className="text-xs md:text-sm text-slate-600 leading-snug text-center font-medium">
          {stat.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    </div>
  );
};

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: 2531,
      title: 'Happy Clients',
      description: 'Trusted by businesses worldwide for comprehensive forensic investigation and consultancy services.',
      icon: Users,
    },
    {
      value: 320,
      title: 'Awards Won',
      description: 'Recognized excellence in forensic investigations, cyber security, and legal support services.',
      icon: Award,
    },
    {
      value: 500,
      title: 'Reviews',
      description: 'Consistently rated highly by clients for professionalism, accuracy, and timely delivery.',
      icon: Star,
    },
    {
      value: 5003,
      title: 'Virus Protection',
      description: 'Successfully protected and secured digital assets across thousands of cybersecurity investigations.',
      icon: Shield,
    },
  ];

  const cardImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
  ];

  // Calculate exact width needed for 4 cards
  // Each card is 75vw, gap-4 is 1rem (16px), px-6 is 1.5rem (24px) on each side = 3rem total
  // Formula: (75vw * 4) + (1rem * 3 gaps) + 3rem padding = 300vw + 3rem + 3rem = 300vw + 6rem
  const setWidth = 'calc(75vw * 4 + 1rem * 3 + 3rem)';

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-12 md:px-12 lg:px-16 md:py-16 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-4 shadow-sm">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <p className="text-xs md:text-sm text-slate-700 font-medium">
              RATED 4.97/5 FROM 500+ REVIEWS
            </p>
          </div>
          <h2
            className="mb-2"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'normal',
              fontWeight: 400,
              color: '#0F172A',
              fontSize: 'clamp(28px, 5vw, 48px)',
              lineHeight: 'clamp(28px, 5vw, 48px)'
            }}
          >
            Numbers <span className="block md:inline mt-1 md:mt-0">you can build on.</span>
          </h2>
        </div>

        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <Link href="/contact" className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Get started now
          </Link>
        </div>

        <div className="relative">
          {/* Mobile: Horizontal scrolling */}
          <div className="md:hidden relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"></div>

            <div className="flex" style={{ width: '200%' }}>
              {/* First set - all 4 cards */}
              <div
                className="flex items-center gap-4 animate-marquee-stats shrink-0 pl-6"
                style={{ width: setWidth, minWidth: setWidth }}
              >
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} cardImages={cardImages} />
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div
                className="flex items-center gap-4 animate-marquee-stats shrink-0 pr-6"
                style={{ width: setWidth, minWidth: setWidth }}
                aria-hidden="true"
              >
                {stats.map((stat, index) => (
                  <StatCard key={`dup-${index}`} stat={stat} index={index} cardImages={cardImages} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} cardImages={cardImages} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
