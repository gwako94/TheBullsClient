import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'Exciting new features are on the way for Isiolo City FC. Stay connected and be the first to know when we launch.',
  robots: { index: false, follow: true },
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Coming Soon</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">We&apos;re working hard to bring you something amazing</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="text-8xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Exciting Things Are On The Way!</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is working tirelessly to bring you an enhanced experience. This feature will be available soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">⚽</div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">Stay Connected</h3>
              <p className="text-gray-600">Follow us on social media for the latest updates</p>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">Get Notified</h3>
              <p className="text-gray-600">Be the first to know when we launch</p>
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">Support Us</h3>
              <p className="text-gray-600">Your support helps us build better</p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
