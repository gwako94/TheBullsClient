'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'THE BULLS',
      subtitle: "Isiolo's Pride",
      description: 'Experience the passion, power, and glory of Isiolo City FC',
      cta: 'Join The Drive',
      ctaLink: '/coming-soon',
    },
    {
      title: 'MATCH DAY',
      subtitle: 'FREE ENTRY',
      description: 'Witness greatness every game, every goal, every victory - absolutely FREE',
      cta: 'View Fixtures',
      ctaLink: '/matches',
    },
    {
      title: 'YOUTH ACADEMY',
      subtitle: 'BUILD THE FUTURE',
      description: 'Nurturing the next generation of football excellence',
      cta: 'Learn More',
      ctaLink: '/coming-soon',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-red-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-navy-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider backdrop-blur-sm">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>

                <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                  <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent animate-gradient">
                    {slides[currentSlide].title}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={slides[currentSlide].ctaLink}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-red-600 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-600/50"
                >
                  <span className="relative z-10">{slides[currentSlide].cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>

                <Link
                  href="/coming-soon"
                  className="group inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Watch Highlights
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-12 bg-gold-400'
                        : 'w-8 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Club Badge & Stats */}
            <div className="hidden lg:flex flex-col items-center justify-center space-y-8 animate-fade-in-up animation-delay-300">
              {/* Club Badge */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gold-500/20 blur-3xl group-hover:bg-gold-500/40 transition-all duration-500 animate-pulse"></div>
                <div className="relative w-80 h-80 transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                  <Image
                    src="/club-badge.png"
                    alt="Isiolo City FC Badge"
                    width={320}
                    height={320}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                <MiniStat number="2025" label="Est." />
                <MiniStat number="1K+" label="Fans" />
                <MiniStat number="100+" label="Wins" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

const MiniStat = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
      <div className="text-2xl font-bold text-gold-400 mb-1 font-playfair">
        {number}
      </div>
      <div className="text-xs text-gray-300 uppercase tracking-wide">{label}</div>
    </div>
  );
};

export default Hero;
