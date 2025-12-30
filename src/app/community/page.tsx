export default function CommunityPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Community</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">More than a club - we're a family</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-navy-950 mb-4">Join Our Community</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Connect with thousands of passionate Bulls fans. Share your love for the team, discuss matches, and be part of our growing family.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Join Facebook Group
                </button>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Follow on Twitter
                </button>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Instagram Community
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy-950 mb-4">Fan Testimonials</h3>
              <div className="space-y-6">
                {[
                  { name: 'John M.', quote: 'Being a Bulls fan has been the best decision! The community is amazing.' },
                  { name: 'Sarah K.', quote: 'Match days at Isiolo Stadium are unforgettable experiences!' },
                  { name: 'David O.', quote: 'Proud to support our local team. The Bulls represent us with pride!' },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
                    <p className="text-sm font-semibold text-navy-950">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
