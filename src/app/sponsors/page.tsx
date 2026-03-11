import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Partners & Sponsors',
  description: 'Meet the partners and sponsors supporting Isiolo City FC. Learn about sponsorship opportunities and partnership packages with Northern Bulls.',
  openGraph: {
    title: 'Our Partners & Sponsors | Isiolo City FC',
    description: 'Meet the partners and sponsors supporting Isiolo City FC. Explore sponsorship opportunities.',
  },
};

export default function SponsorsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proudly supported by industry leaders who believe in our vision
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Main Sponsor */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-950 font-playfair">
              Official Main Sponsor
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Sponsor Logo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 border-4 border-gold-200 overflow-hidden">
                  <Image
                    src="/java-events-logo.jpeg"
                    alt="Java Events Logo"
                    width={192}
                    height={192}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Sponsor Info */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-navy-950 mb-4">
                  Java Events
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Java Events is our proud main sponsor, supporting Isiolo City FC with their commitment to excellence and community development. Their partnership enables us to provide world-class training facilities and opportunities for our players.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Corporate Events</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Birthday Parties</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Weddings</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Graduation Parties</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Team Building</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:0700724708"
                    className="inline-flex items-center px-6 py-3 bg-navy-950 text-white rounded-full font-semibold hover:bg-navy-900 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call: 0700724708
                  </a>
                  <button className="inline-flex items-center px-6 py-3 bg-white border-2 border-navy-950 text-navy-950 rounded-full font-semibold hover:bg-navy-950 hover:text-white transition-colors">
                    <a href="https://javaevents.co.ke">Visit Website</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-950 font-playfair mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in building excellence and reach thousands of passionate football fans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Visibility',
                description: 'Logo placement on jerseys, stadium boards, and digital platforms',
                icon: '👁️',
              },
              {
                title: 'Community Impact',
                description: 'Support youth development and community programs',
                icon: '🤝',
              },
              {
                title: 'Engagement Opportunities',
                description: 'Exclusive access to events, matches, and fan engagement',
                icon: '🎯',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-xl text-lg">
              Become a Sponsor
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-950 font-playfair mb-4">
              Partnership Packages
            </h2>
            <p className="text-gray-600">Choose a sponsorship level that fits your goals</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { tier: 'Partner', color: 'from-gray-400 to-gray-600', price: 'From KES 50K' },
              { tier: 'Bronze', color: 'from-amber-700 to-amber-900', price: 'From KES 150K' },
              { tier: 'Silver', color: 'from-gray-300 to-gray-500', price: 'From KES 300K' },
              { tier: 'Gold', color: 'from-gold-400 to-gold-600', price: 'Custom' },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-red-600 transition-all hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${pkg.color} text-white p-6 text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.tier}</h3>
                  <div className="text-lg font-semibold">{pkg.price}</div>
                </div>
                <div className="p-6 text-center">
                  <button className="w-full bg-navy-950 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
