export default function HighlightsPage() {
  const videos = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Match Highlights ${i + 1}`,
    duration: '5:32',
    views: `${20 + (i * 5)}K`,
    date: 'Dec 2024',
  }));

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Match Highlights</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Relive the best moments from our matches</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative aspect-video bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy-950 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
