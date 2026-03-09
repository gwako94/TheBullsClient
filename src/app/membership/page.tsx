import Link from 'next/link';

export default function MembershipPage() {
  const tiers = [
    {
      name: 'Bronze',
      price: 'KES 1,000/year',
      color: 'from-amber-700 to-amber-900',
      features: ['Official membership card', 'Newsletter subscription', 'Exclusive content access', '10% shop discount'],
    },
    {
      name: 'Silver',
      price: 'KES 3,000/year',
      color: 'from-gray-400 to-gray-600',
      features: ['All Bronze benefits', 'Priority ticket booking', 'Member events access', '15% shop discount', 'Quarterly meet & greet'],
    },
    {
      name: 'Gold',
      price: 'KES 7,000/year',
      color: 'from-gold-400 to-gold-600',
      features: ['All Silver benefits', 'VIP lounge access', 'Free home match tickets (2 per season)', '20% shop discount', 'Player autograph sessions'],
    },
    {
      name: 'Platinum',
      price: 'KES 15,000/year',
      color: 'from-navy-600 to-navy-900',
      features: ['All Gold benefits', 'Behind-the-scenes tours', 'Training ground access', '25% shop discount', 'Premium parking', 'Season pass holder'],
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Membership</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Join The Drive and enjoy exclusive benefits</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div key={tier.name} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className={`bg-gradient-to-br ${tier.color} text-white p-6 text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold">{tier.price}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={`${tier.name}-feature-${i}`} className="flex items-start text-sm">
                        <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/coming-soon"
                    className="block w-full bg-navy-950 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
