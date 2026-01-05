import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Free Matches */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-green-500/20 border-2 border-green-400 text-green-100 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✓ FREE ENTRY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
              Experience Live Football
            </h2>
            <p className="text-lg text-white/90 mb-6">
              All home matches are FREE! Join thousands of fans at Isiolo Stadium and witness Northern Bulls in action.
            </p>
            <Link
              href="/matches"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              View Match Fixtures
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: Support */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-gold-500/20 border-2 border-gold-400 text-gold-100 px-4 py-2 rounded-full text-sm font-bold mb-4">
              ❤️ SUPPORT Northern Bulls
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
              Power Our Dream
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Help us build world-class facilities, support youth development, and bring glory to Isiolo County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/coming-soon"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-950 font-bold rounded-full hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Donate Now
              </Link>
              <Link
                href="/coming-soon"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Join as Member
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
