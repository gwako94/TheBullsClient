'use client';

import { useState } from 'react';

const matchTabs = ['Upcoming', 'Results', 'All'];

const upcomingMatches = [
  {
    id: 1,
    date: 'Dec 20, 2024',
    time: '15:00 EAT',
    competition: 'Premier League',
    homeTeam: 'Isiolo City FC',
    awayTeam: 'Nairobi Stars FC',
    venue: 'Isiolo Stadium',
    isHome: true,
  },
  {
    id: 2,
    date: 'Dec 27, 2024',
    time: '18:00 EAT',
    competition: 'Premier League',
    homeTeam: 'Mombasa United',
    awayTeam: 'Isiolo City FC',
    venue: 'Coastal Arena',
    isHome: false,
  },
];

const results = [
  {
    id: 3,
    date: 'Dec 10, 2024',
    competition: 'Premier League',
    homeTeam: 'Isiolo City FC',
    homeScore: 3,
    awayTeam: 'Kisumu FC',
    awayScore: 0,
    venue: 'Isiolo Stadium',
  },
  {
    id: 4,
    date: 'Dec 5, 2024',
    competition: 'Premier League',
    homeTeam: 'Eldoret Warriors',
    homeScore: 1,
    awayTeam: 'Isiolo City FC',
    awayScore: 2,
    venue: 'Eldoret Stadium',
  },
];

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">
            Fixtures & Results
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow our journey match by match, home and away
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {matchTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'Upcoming' && (
            <div className="space-y-6">
              {upcomingMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-navy-950 to-navy-900 px-6 py-4">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-sm font-semibold">{match.competition}</span>
                      <span className="text-sm bg-red-600 px-3 py-1 rounded-full">
                        {match.isHome ? 'HOME' : 'AWAY'}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex-1 text-center">
                        <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-3xl">🐂</span>
                        </div>
                        <h3 className="font-bold text-navy-950">{match.homeTeam}</h3>
                      </div>

                      <div className="px-8">
                        <div className="text-3xl font-bold text-gray-400">VS</div>
                        <div className="text-sm text-gray-500 mt-2">{match.time}</div>
                      </div>

                      <div className="flex-1 text-center">
                        <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-3xl">⭐</span>
                        </div>
                        <h3 className="font-bold text-navy-950">{match.awayTeam}</h3>
                      </div>
                    </div>

                    <div className="space-y-2 text-center border-t pt-6">
                      <div className="flex items-center justify-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-semibold">{match.date}</span>
                      </div>
                      <div className="flex items-center justify-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{match.venue}</span>
                      </div>
                    </div>

                    <div className="mt-6 bg-green-50 border-2 border-green-200 text-green-700 font-semibold py-3 rounded-full text-center">
                      ✓ Free Entry - No Ticket Required
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Results' && (
            <div className="space-y-6">
              {results.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-600">{match.competition}</span>
                    <span className="text-sm text-gray-500">{match.date}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🐂</span>
                      </div>
                      <h3 className="font-bold text-navy-950 text-sm">{match.homeTeam}</h3>
                    </div>

                    <div className="px-8 text-center">
                      <div className="text-4xl font-bold text-navy-950">
                        {match.homeScore} - {match.awayScore}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">FULL TIME</div>
                    </div>

                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⭐</span>
                      </div>
                      <h3 className="font-bold text-navy-950 text-sm">{match.awayTeam}</h3>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-red-600 hover:text-red-700 font-semibold text-sm">
                      View Match Report →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'All' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-950 mb-4">Upcoming Matches</h2>
                <div className="space-y-4">
                  {upcomingMatches.map((match) => (
                    <div key={match.id} className="bg-white rounded-xl p-6 shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold text-navy-950">{match.homeTeam} vs {match.awayTeam}</div>
                          <div className="text-sm text-gray-600">{match.date} • {match.time}</div>
                        </div>
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                          Upcoming
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-950 mb-4">Recent Results</h2>
                <div className="space-y-4">
                  {results.map((match) => (
                    <div key={match.id} className="bg-white rounded-xl p-6 shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold text-navy-950">
                            {match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}
                          </div>
                          <div className="text-sm text-gray-600">{match.date}</div>
                        </div>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                          Finished
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
