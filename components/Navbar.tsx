'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isBlogsPage = pathname === '/blogs';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
    { href: '/about', label: 'About Us' },
  ];
  
  return (
    <>
    <header 
      className="w-full px-6 pb-0 pt-0 md:px-10 md:pb-0 md:pt-0 flex items-center justify-between sticky top-0 z-50 bg-black backdrop-blur-sm"
    >
      {/* Logo Section */}
        <Link href="/" className="flex items-center">
        <img 
          src="https://forensicservicesindia.com/assets/images/ficslogo.png" 
          alt="FICS Logo" 
          className="h-20 md:h-28 w-auto object-contain"
        />
        </Link>

      {/* Navigation Links - Desktop */}
      <nav className={`hidden md:flex items-center gap-8 text-[15px] font-medium ${
        isBlogsPage ? 'text-gray-300' : 'text-gray-300'
      }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
      </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
        <Link 
          href="/contact" 
            className="px-5 py-2 bg-white/10 border border-white/20 text-white text-[15px] font-medium rounded-lg hover:bg-white/20 transition-colors"
        >
          Contact Us
        </Link>
        <button className="px-5 py-2 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-200 transition-colors">
          Send Enquiry
        </button>
      </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
    </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Sidebar - White Background */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link href="/" onClick={toggleMenu}>
            <img 
              src="https://forensicservicesindia.com/assets/images/ficslogo.png" 
              alt="FICS Logo" 
              className="h-16 w-auto object-contain"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-800 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
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
              className={`py-4 text-lg font-medium text-gray-800 hover:text-black transition-colors border-b border-gray-200 ${
                pathname === link.href ? 'text-black font-semibold' : ''
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons - Mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 space-y-3 bg-white">
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block w-full px-5 py-3 bg-gray-800 text-white text-center font-medium rounded-lg hover:bg-gray-900 transition-colors"
          >
            Contact Us
          </Link>
          <button className="w-full px-5 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Send Enquiry
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;


