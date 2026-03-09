export default function ProgramsPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Foundation Programs</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Empowering communities through football</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '⚽', title: 'Youth Development', description: 'Comprehensive training programs for young players to develop their skills and character.' },
              { icon: '🎓', title: 'Education Support', description: 'Scholarships and mentorship programs for student-athletes to excel academically.' },
              { icon: '🏥', title: 'Health & Wellness', description: 'Free medical screenings and health education for youth in our community.' },
              { icon: '🤝', title: 'Community Outreach', description: 'Regular charity events and initiatives to give back to the community.' },
            ].map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-navy-950 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <button className="text-red-600 hover:text-red-700 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
