'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Northern Bulls',
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
    <section className="relative min-h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-red-950">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1zM0 0h40v1H0zM0 39h40v1H0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-navy-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-white/10 border border-white/20 text-gold-300 px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase backdrop-blur-sm">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>

                <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
                  <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent animate-gradient">
                    {slides[currentSlide].title}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300/90 max-w-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={slides[currentSlide].ctaLink}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-red-600 rounded-full overflow-hidden shadow-2xl shadow-red-600/20 transition-all duration-300 hover:scale-105 hover:shadow-red-600/40"
                >
                  <span className="relative z-10">{slides[currentSlide].cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>

                <Link
                  href="/coming-soon"
                  className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white/90 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Watch Highlights
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3 pt-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? 'w-12 bg-gold-400'
                        : 'w-6 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Club Badge & Stats */}
            <div className="hidden lg:flex flex-col items-center justify-center space-y-10 animate-fade-in-up animation-delay-300">
              {/* Club Badge */}
              <div className="relative group">
                <div className="absolute -inset-8 bg-gold-500/10 blur-3xl rounded-full group-hover:bg-gold-500/20 transition-all duration-700"></div>
                <div className="relative w-72 h-72 transform group-hover:scale-105 transition-all duration-700">
                  <Image
                    src="/club-badge.png"
                    alt="Isiolo City FC Badge"
                    width={288}
                    height={288}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-5 w-full max-w-sm">
                <MiniStat number="2025" label="Est." />
                <MiniStat number="1K+" label="Fans" />
                <MiniStat number="100+" label="Wins" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-navy-800/30"></div>
    </section>
  );
};

const MiniStat = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500">
      <div className="text-2xl font-bold text-gold-400 mb-1 font-playfair">
        {number}
      </div>
      <div className="text-[11px] text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default Hero;
