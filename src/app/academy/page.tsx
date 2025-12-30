export default function AcademyPage() {
  const programs = [
    { title: 'Youth Academy U-13', description: 'Development program for players aged 10-13', slots: 'Limited slots available' },
    { title: 'Youth Academy U-17', description: 'Advanced training for players aged 14-17', slots: 'Open enrollment' },
    { title: 'Training Camps', description: 'Intensive weekend and holiday training sessions', slots: 'Open to all' },
    { title: 'Coaching Courses', description: 'Certification programs for aspiring coaches', slots: 'Next session: Jan 2025' },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Youth Academy</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Building the next generation of football excellence</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-navy-950 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gold-600 font-semibold">{program.slots}</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                    Apply Now
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
