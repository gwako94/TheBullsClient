import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Free Matches */}
          <div>
            <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              Free Entry
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4 leading-tight">
              Experience Live Football
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              All home matches are FREE. Join thousands of fans at Isiolo Stadium and witness Northern Bulls in action.
            </p>
            <Link
              href="/matches"
              className="inline-flex items-center px-7 py-3.5 bg-white text-navy-950 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-sm"
            >
              View Match Fixtures
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: Support */}
          <div>
            <div className="inline-block bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              Support Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4 leading-tight">
              Power Our Dream
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Help us build world-class facilities, support youth development, and bring glory to Isiolo County.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/coming-soon"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 text-sm"
              >
                Donate Now
              </Link>
              <Link
                href="/coming-soon"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white/90 font-semibold rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm"
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
