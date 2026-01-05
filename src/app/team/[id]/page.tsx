'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_PLAYER } from '@/graphql/queries/players';

// Mock player data - fallback if API fails
const players = {
  '1': {
    id: 1,
    name: 'James Mwangi',
    number: 10,
    position: 'Midfielder',
    nationality: 'Kenyan',
    age: 24,
    height: '1.78m',
    weight: '72kg',
    joined: 'January 2025',
    contract: 'June 2027',
    bio: 'Dynamic midfielder with exceptional vision and passing ability. Known for his work rate and ability to control the tempo of the game. A product of our youth academy who has become a key player in the first team.',
    stats: {
      appearances: 45,
      goals: 12,
      assists: 18,
      yellowCards: 3,
      redCards: 0,
    },
    achievements: [
      'Player of the Month - November 2024',
      'Top Assist Provider 2024',
      'Youth Academy Graduate of the Year 2023',
    ],
  },
  '2': {
    id: 2,
    name: 'David Omondi',
    number: 9,
    position: 'Forward',
    nationality: 'Kenyan',
    age: 26,
    height: '1.82m',
    weight: '75kg',
    joined: 'March 2024',
    contract: 'December 2026',
    bio: 'Clinical striker with a natural instinct for goal. His pace and positioning make him a constant threat to opposition defenses. Top scorer for two consecutive seasons.',
    stats: {
      appearances: 52,
      goals: 38,
      assists: 9,
      yellowCards: 5,
      redCards: 0,
    },
    achievements: [
      'Top Scorer 2024',
      'Hat-trick vs. Rivals - September 2024',
      'Goal of the Season 2024',
    ],
  },
};

export default function PlayerProfilePage() {
  const params = useParams();
  const playerId = params.id as string;

  // Fetch player from GraphQL
  const { data, loading, error } = useQuery(GET_PLAYER, {
    variables: { id: playerId },
  });

  // Use GraphQL data or fallback to mock data
  const player = (data as any)?.player || players[playerId as keyof typeof players];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="md:col-span-2 space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!player) {
    return (
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy-950 mb-4">Player Not Found</h1>
            <p className="text-gray-600 mb-4">{error?.message || 'The player you are looking for does not exist.'}</p>
            <Link href="/team" className="text-red-600 hover:text-red-700 font-semibold">
              ← Back to Team
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/team" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Player Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl overflow-hidden border-4 border-gold-500/30 shadow-2xl">
                {player.photoUrls && player.photoUrls.length > 0 ? (
                  <img
                    src={player.photoUrls[0]}
                    alt={player.displayName || player.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    ⚽
                  </div>
                )}
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-3xl flex items-center justify-center shadow-xl">
                <span className="text-6xl font-bold text-white">{player.jerseyNumber || player.number}</span>
              </div>
            </div>

            {/* Player Info */}
            <div className="text-white">
              <div className="inline-block bg-gold-500/20 border border-gold-400 text-gold-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                {player.position}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair">{player.displayName || player.name}</h1>
              <p className="text-xl text-gray-300 mb-8">{player.bio}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-gray-400 mb-1">Nationality</div>
                  <div className="text-lg font-semibold">{player.nationality}</div>
                </div>
                {player.age && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-sm text-gray-400 mb-1">Age</div>
                    <div className="text-lg font-semibold">{player.age} years</div>
                  </div>
                )}
                {player.height && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-sm text-gray-400 mb-1">Height</div>
                    <div className="text-lg font-semibold">{typeof player.height === 'number' ? `${player.height} cm` : player.height}</div>
                  </div>
                )}
                {player.weight && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-sm text-gray-400 mb-1">Weight</div>
                    <div className="text-lg font-semibold">{typeof player.weight === 'number' ? `${player.weight} kg` : player.weight}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-950 mb-8 font-playfair">Season Statistics</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-6 text-center border border-navy-100">
              <div className="text-4xl font-bold text-navy-950 mb-2 font-playfair">{player.stats?.appearances || 0}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Appearances</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 text-center border border-red-100">
              <div className="text-4xl font-bold text-red-600 mb-2 font-playfair">{player.stats?.goals || 0}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Goals</div>
            </div>
            <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-6 text-center border border-gold-100">
              <div className="text-4xl font-bold text-gold-600 mb-2 font-playfair">{player.stats?.assists || 0}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Assists</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 text-center border border-yellow-100">
              <div className="text-4xl font-bold text-yellow-600 mb-2 font-playfair">{player.stats?.yellowCards || 0}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Yellow Cards</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-100">
              <div className="text-4xl font-bold text-gray-600 mb-2 font-playfair">{player.stats?.redCards || 0}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Red Cards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contract Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy-950 mb-6 font-playfair">Contract Information</h2>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Joined Club</span>
                    <span className="font-semibold text-navy-950">{player.joined}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Contract Until</span>
                    <span className="font-semibold text-navy-950">{player.contract}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Squad Number</span>
                    <span className="text-2xl font-bold text-red-600">#{player.number}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold text-navy-950 mb-6 font-playfair">Achievements</h2>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <ul className="space-y-4">
                  {player.achievements && player.achievements.length > 0 ? (
                    player.achievements.map((achievement: any, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold-500 text-2xl mr-3">🏆</span>
                        <span className="text-gray-700 pt-1">
                          {typeof achievement === 'string' ? achievement : achievement.title}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 italic">No achievements recorded yet</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-navy-950 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">
            Support Northern Bulls
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Come watch {player.displayName || player.name} and the rest of the team in action. All matches are FREE!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/matches"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              View Fixtures
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-navy-950 transition-all duration-300"
            >
              View Full Squad
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
