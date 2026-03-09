'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client/react';
import { GET_PLAYERS } from '@/graphql/queries/players';

const FeaturedPlayers = () => {
  const { data, loading, error } = useQuery(GET_PLAYERS, {
    variables: { status: 'ACTIVE' }
  });

  const allPlayers = (data as any)?.players || [];
  const featuredPlayers = (() => {
    const positions = ['GOALKEEPER', 'DEFENDER', 'MIDFIELDER', 'FORWARD'];
    const picked: any[] = [];
    for (const pos of positions) {
      const player = allPlayers.find((p: any) => p.position === pos);
      if (player) picked.push(player);
    }
    return picked;
  })();

  const formatPosition = (position: string) => {
    return position.charAt(0).toUpperCase() + position.slice(1).toLowerCase();
  };
  return (
    <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gold-400 tracking-widest uppercase mb-3">The Squad</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
            Our Stars
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Meet the talented athletes who make Northern Bulls unstoppable
          </p>
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

        {/* Empty State */}
        {!loading && !error && featuredPlayers.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['GK', 'DEF', 'MID', 'FWD'].map((pos, index) => (
              <div
                key={pos}
                className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-navy-800/50 to-navy-900/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-white/30 text-sm font-medium">{pos}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-4 bg-white/5 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-white/5 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Players Grid */}
        {!loading && featuredPlayers.length > 0 && (
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
                    <Image
                      src={player.photoUrls[0]}
                      alt={player.displayName}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover object-top"
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
                        {player.stats?.[0]?.goals ?? 0}
                      </div>
                      <div className="text-gray-500 text-xs">Goals</div>
                    </div>
                    <div>
                      <div className="text-gold-400 font-semibold">
                        {player.stats?.[0]?.assists ?? 0}
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
