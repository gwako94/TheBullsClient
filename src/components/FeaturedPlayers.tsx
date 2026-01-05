'use client';

import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_PLAYERS } from '@/graphql/queries/players';

const FeaturedPlayers = () => {
  const { data, loading, error } = useQuery(GET_PLAYERS, {
    variables: { status: 'ACTIVE' }
  });

  // Fallback mock data if backend is not available
  const mockPlayers = [
    {
      id: '1',
      firstName: 'James',
      lastName: 'Kariuki',
      displayName: 'James Kariuki',
      position: 'FORWARD',
      jerseyNumber: 10,
      photos: [],
      stats: { goals: 15, assists: 8 }
    },
    {
      id: '2',
      firstName: 'Michael',
      lastName: 'Ochieng',
      displayName: 'Michael Ochieng',
      position: 'MIDFIELDER',
      jerseyNumber: 8,
      photos: [],
      stats: { goals: 7, assists: 12 }
    },
    {
      id: '3',
      firstName: 'David',
      lastName: 'Wanjala',
      displayName: 'David Wanjala',
      position: 'DEFENDER',
      jerseyNumber: 5,
      photos: [],
      stats: { goals: 2, assists: 3 }
    },
    {
      id: '4',
      firstName: 'Kevin',
      lastName: 'Otieno',
      displayName: 'Kevin Otieno',
      position: 'GOALKEEPER',
      jerseyNumber: 1,
      photos: [],
      stats: { goals: 0, assists: 0 }
    },
  ];

  const allPlayers = (data as any)?.players || mockPlayers;
  const featuredPlayers = allPlayers.slice(0, 4);

  const formatPosition = (position: string) => {
    return position.charAt(0).toUpperCase() + position.slice(1).toLowerCase();
  };
  return (
    <section className="py-20 bg-gradient-to-br from-navy-950 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4">
            Our Stars
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the talented athletes who make Northern Bulls unstoppable
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-4"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-white/10 rounded-2xl mb-4"></div>
                <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-10">
            <p className="text-gray-300">Using cached content. {error.message}</p>
          </div>
        )}

        {/* Players Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredPlayers.map((player: any, index: number) => (
              <Link
                key={player.id}
                href={`/team/${player.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Player Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-navy-700 to-navy-800 relative overflow-hidden">
                  {player.photoUrls && player.photoUrls.length > 0 && player.photoUrls[0] ? (
                    <img
                      src={player.photoUrls[0]}
                      alt={player.displayName}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
                  {/* Jersey Number */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-red-600/80 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {player.jerseyNumber}
                    </span>
                  </div>
                </div>

                {/* Player Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                    {player.displayName}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{formatPosition(player.position)}</p>

                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-gold-400 font-semibold">
                        {player.stats?.goals || 0}
                      </div>
                      <div className="text-gray-500 text-xs">Goals</div>
                    </div>
                    <div>
                      <div className="text-gold-400 font-semibold">
                        {player.stats?.assists || 0}
                      </div>
                      <div className="text-gray-500 text-xs">Assists</div>
                    </div>
                    <div>
                      <span className="text-white group-hover:text-gold-400 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* View Full Squad Button */}
        <div className="text-center">
          <Link
            href="/team"
            className="inline-flex items-center px-8 py-4 bg-white text-navy-950 font-bold rounded-full hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            View Full Squad
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayers;
