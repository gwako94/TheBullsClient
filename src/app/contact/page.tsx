'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'sponsorship',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in partnering with Isiolo City FC? We'd love to hear from you. Let's build something great together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="text-center p-8 bg-gradient-to-br from-navy-50 to-white rounded-2xl border border-navy-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Email Us</h3>
              <a href="mailto:partnerships@isiolocityfc.com" className="text-red-600 hover:text-red-700 font-semibold">
                partnerships@isiolocityfc.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-gradient-to-br from-gold-50 to-white rounded-2xl border border-gold-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Call Us</h3>
              <a href="tel:+254700000000" className="text-gold-600 hover:text-gold-700 font-semibold">
                +254 700 000 000
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-gradient-to-br from-navy-50 to-white rounded-2xl border border-navy-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-navy-950 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Isiolo Stadium<br />
                Isiolo, Kenya
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-950 mb-6 font-playfair">Send Us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 text-green-700 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! We'll get back to you soon.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  >
                    <option value="sponsorship">Sponsorship Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="media">Media & Press</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your interest in partnering with Isiolo City FC..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Partnership Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-950 mb-6 font-playfair">Partnership Opportunities</h2>
                <p className="text-gray-700 mb-6">
                  Join the Isiolo City FC family and be part of something special. Our partnerships go beyond logos and signage - we create meaningful collaborations that benefit both parties and our community.
                </p>
              </div>

              {/* Current Main Sponsor */}
              <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 border border-gold-100">
                <h3 className="text-xl font-bold text-navy-950 mb-4">Our Main Sponsor</h3>
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-3 shadow-lg">
                    <Image
                      src="/java-events-logo.jpeg"
                      alt="Java Events"
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-navy-950">Java Events</h4>
                    <p className="text-gray-600">Main Sponsor & Official Events Partner</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gold-200">
                  <p className="text-sm text-gray-600 mb-2">Contact for partnership inquiries:</p>
                  <a href="tel:0700724708" className="text-lg font-bold text-gold-600 hover:text-gold-700">
                    0700724708
                  </a>
                </div>
              </div>

              {/* Partnership Benefits */}
              <div className="bg-navy-950 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Partnership Benefits</h3>
                <ul className="space-y-3">
                  {[
                    'Brand visibility at all home matches',
                    'Logo placement on team jerseys',
                    'Digital marketing exposure',
                    'VIP hospitality packages',
                    'Community engagement opportunities',
                    'Social media promotion',
                    'Exclusive networking events',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-gold-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-950 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/sponsors" className="flex items-center text-red-600 hover:text-red-700 font-semibold group">
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    View All Sponsors
                  </Link>
                  <Link href="/team" className="flex items-center text-red-600 hover:text-red-700 font-semibold group">
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Meet Our Team
                  </Link>
                  <Link href="/matches" className="flex items-center text-red-600 hover:text-red-700 font-semibold group">
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    View Match Schedule
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="h-96 bg-gray-100 flex items-center justify-center border-t border-gray-200">
        <div className="text-center">
          <div className="text-6xl mb-4">📍</div>
          <p className="text-gray-600 font-semibold">Isiolo Stadium, Isiolo, Kenya</p>
          <p className="text-sm text-gray-500 mt-2">Map integration coming soon</p>
        </div>
      </section>
    </main>
  );
}
