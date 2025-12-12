'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      terms: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="w-full bg-[#2C2520] min-h-screen py-12 md:py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left Column - Contact Information */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-white mb-6 md:mb-8">
                Get in touch with us.
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Whether you&apos;re curious about features, pricing, or what FICS could unlock for your team, we&apos;re here to help. Tell us what you&apos;re working on—we&apos;ll take it from there.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                    Email us
                  </h3>
                  <a
                    href="mailto:support@forensicservicesindia.com"
                    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors break-all block"
                  >
                    support@forensicservicesindia.com
                  </a>
                </div>
              </div>

              {/* Phone Numbers - Same Line */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                    Phone us
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <a
                      href="tel:+917292079270"
                      className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    >
                      +91-7292079270
                    </a>
                    <span className="hidden sm:inline text-gray-500">|</span>
                    <span className="text-xs text-gray-400 sm:hidden">(Greater Noida Office)</span>
                    <a
                      href="tel:+919257106021"
                      className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                    >
                      +91-9257106021
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4 mt-1">
                    <span className="text-xs text-gray-400 hidden sm:inline">(Greater Noida Office)</span>
                    <span className="text-xs text-gray-400">(Jaipur Office)</span>
                  </div>
                </div>
              </div>

              {/* Addresses - Same Line */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                    Address
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      TS- 933, 9th floor, Hope Tower, Galaxy Blue Sapphire Plaza, Greater Noida - 201305
                    </p>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      54/90, Rajat Path, Mansarovar, Jaipur (Rajasthan) - 302020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Got a question? Looking for a tailored demo? Fill out the form and we&apos;ll be in touch shortly—usually within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-white border-white/30 rounded focus:ring-2 focus:ring-white bg-white/10"
                />
                <label htmlFor="terms" className="text-sm md:text-base text-gray-300 cursor-pointer">
                  I have read and agree to the Terms & Conditions
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                Send Form
              </button>

              {/* Privacy Statement */}
              <p className="text-xs md:text-sm text-gray-400 text-center">
                We never share your data with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps - Full Width */}
      <div className="mt-12 md:mt-16 mx-6 md:mx-12 lg:mx-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-normal text-white mb-4 md:mb-6 text-center">
          Find us on map
        </h2>
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border-2 border-black">
          <iframe
            src="https://www.google.com/maps?q=11th+Avenue+Gaur+City+2,+Noida+Extension,+Gaur+City+2,+Chipyana+Khurd+Urf+Tigri,+Ghaziabad,+Uttar+Pradesh+201009&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FICS Office Location - Greater Noida"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

