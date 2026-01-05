export default function TicketsPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Match Day Entry</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">All our matches are FREE to attend!</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-12 shadow-xl text-center border-2 border-green-200">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold text-navy-950 mb-4">Free Entry For All Fans!</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We believe football is for everyone. All Isiolo City FC home matches are completely FREE to attend. Just show up and support Northern Bulls!
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-navy-950 mb-4">Next Home Match</h3>
              <div className="text-xl text-gray-700 mb-2 font-semibold">Isiolo City FC vs Nairobi Stars FC</div>
              <div className="text-gray-600 mb-6">
                <div>📅 December 20, 2024 • 15:00 EAT</div>
                <div>📍 Isiolo Stadium</div>
                <div>🏆 Premier League</div>
              </div>

              <div className="inline-block bg-green-100 border-2 border-green-600 text-green-700 px-8 py-3 rounded-full font-bold text-lg">
                ✓ FREE ENTRY - NO TICKET NEEDED
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '🚪', title: 'Walk Right In', description: 'No tickets, no queues - just come and enjoy!' },
                { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', description: 'Bring the whole family for a great day out' },
                { icon: '⚽', title: 'Amazing Atmosphere', description: 'Join thousands of passionate Bulls fans' },
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-navy-950 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-navy-950 text-white rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Match Day Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-gold-400">Gates Open</h4>
                  <p>2 hours before kick-off</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gold-400">Parking</h4>
                  <p>Free parking available nearby</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gold-400">Refreshments</h4>
                  <p>Food and drinks available at the stadium</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gold-400">Accessibility</h4>
                  <p>Wheelchair accessible seating available</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/matches"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors shadow-lg inline-block"
              >
                View All Fixtures
              </a>
              <a
                href="/coming-soon"
                className="px-8 py-3 bg-white border-2 border-navy-950 text-navy-950 font-bold rounded-full hover:bg-navy-950 hover:text-white transition-colors inline-block"
              >
                Become a Member
              </a>
            </div>
          </div>

          {/* VIP Section - Optional */}
          <div className="mt-12 bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 shadow-lg border border-gold-200">
            <h3 className="text-2xl font-bold text-navy-950 mb-4 text-center">Want a Premium Experience?</h3>
            <p className="text-center text-gray-600 mb-6">
              While entry is free for all, we offer VIP packages for those seeking an enhanced match day experience
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-navy-950 mb-3">VIP Lounge Access</h4>
                <p className="text-gray-600 mb-4">Enjoy premium seating, refreshments, and exclusive amenities</p>
                <div className="text-2xl font-bold text-gold-600 mb-4">KES 2,000</div>
                <button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Book VIP Experience
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-navy-950 mb-3">Season VIP Pass</h4>
                <p className="text-gray-600 mb-4">VIP access to all home matches for the entire season</p>
                <div className="text-2xl font-bold text-gold-600 mb-4">KES 25,000</div>
                <button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Get Season Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
