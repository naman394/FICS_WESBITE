'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isBlogsPage = pathname === '/blogs';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/podcasts', label: 'Podcasts' },
    { href: '/about', label: 'About Us' },
  ];

  const handleEnquiryClick = () => {
    window.open('https://wa.me/917292079270', '_blank');
  };

  const isHomePage = pathname === '/';
  // Transparent only if on home page AND not scrolled
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${isHomePage ? 'fixed top-0 left-0 right-0' : 'sticky top-0 bg-white border-b border-slate-100'} ${isTransparent
          ? 'bg-transparent py-4 md:py-6'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-2 shadow-sm'
          }`}
      >
        <div className="px-6 md:px-10 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <img
              src="/assets/images/logos/ficslogo.png"
              alt="FICS Logo"
              className="h-20 md:h-28 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className={`hidden md:flex items-center gap-8 text-[15px] font-medium transition-colors duration-300 ${isTransparent ? 'text-white/90' : 'text-slate-600'
            }`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 hover:text-gold ${isActive
                    ? 'text-gold border-b-2 border-gold'
                    : ''
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className={`px-5 py-2 border text-[15px] font-medium rounded-lg transition-all duration-300 ${isTransparent
                ? 'bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
            >
              Contact Us
            </Link>
            <button
              onClick={handleEnquiryClick}
              className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transition-all duration-300 transform hover:scale-110 animate-pulse-fast"
              aria-label="Contact on WhatsApp"
            >
              <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20 group-hover:opacity-40"></span>
              <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9 fill-white relative z-10" />
              <div className="absolute -inset-1 rounded-full border border-[#25D366] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            </button>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 transition-colors ${isTransparent ? 'text-white hover:text-white/80' : 'text-slate-900 hover:text-slate-600'
              }`}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Sidebar - White Background */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link href="/" onClick={toggleMenu}>
            <img
              src="/assets/images/logos/ficslogo.png"
              alt="FICS Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`py-4 text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors border-b border-gray-100 ${pathname === link.href ? 'text-slate-900 font-semibold' : ''
                }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons - Mobile Menu */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 space-y-3 bg-white">
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block w-full px-5 py-3 bg-white border border-slate-200 text-slate-700 text-center font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Floating WhatsApp Button - Custom for Mobile View */}
      <button
        onClick={handleEnquiryClick}
        className="fixed bottom-6 right-6 z-50 md:hidden group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.6)] transition-all duration-300 active:scale-95 animate-pulse-fast"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></span>
        <WhatsAppIcon className="w-8 h-8 fill-white relative z-10" />
      </button>
    </>
  );
};

export default Navbar;
