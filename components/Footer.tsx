'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 py-6 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 mb-4 md:mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 space-y-2 md:space-y-4">
            <div className="flex items-center mb-2 md:mb-4">
              <img
                src="https://forensicservicesindia.com/assets/images/ficslogo.png"
                alt="FICS Logo"
                className="h-8 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-xs md:text-base text-slate-600 leading-relaxed">
              FICS Pvt. Ltd. has pioneered in forensic investigations, offering comprehensive range of customized services to meet diverse client requirements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-semibold text-xs md:text-lg mb-2 md:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-1.5 md:space-y-3">
              {['Home', 'Services', 'Gallery', 'Blogs', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 text-xs md:text-base transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-semibold text-xs md:text-lg mb-2 md:mb-6">
              Our Services
            </h3>
            <ul className="space-y-1.5 md:space-y-3">
              {['Document Verification', 'Cyber Forensics', 'Background Verification', 'Forensic Audit', 'Fire Investigations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 text-xs md:text-base transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-slate-900 font-semibold text-xs md:text-lg mb-2 md:mb-6">
              Contact Us
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-xs md:text-base leading-relaxed">
                  New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-slate-500 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-slate-600 hover:text-slate-900 text-xs md:text-base transition-colors duration-300">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-slate-500 flex-shrink-0" />
                <a href="mailto:info@forensicservicesindia.com" className="text-slate-600 hover:text-slate-900 text-xs md:text-base transition-colors duration-300 break-all">
                  info@forensicservicesindia.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4 md:mt-8">
              <h4 className="text-slate-900 font-semibold text-xs md:text-base mb-2 md:mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-2 md:gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 flex items-center justify-center transition-colors duration-300 group"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
            <p className="text-slate-500 text-[10px] md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Forensic Services India. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-slate-500 hover:text-slate-900 text-[10px] md:text-sm transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
