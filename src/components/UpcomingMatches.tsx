'use client';

import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_UPCOMING_MATCHES } from '@/graphql/queries/matches';

const UpcomingMatches = () => {
  const { data, loading, error } = useQuery(GET_UPCOMING_MATCHES, {
    variables: { limit: 2 }
  });

  // Fallback mock data if backend is not available
  const mockMatches = [
    {
      id: 1,
      homeTeam: { id: '1', name: 'Isiolo City FC', logo: null },
      awayTeam: { id: '2', name: 'Nairobi Stars FC', logo: null },
      kickoffTime: '2024-12-20T12:00:00Z',
      venue: { id: '1', name: 'Isiolo Stadium' },
      competition: { id: '1', name: 'Premier League' },
      status: 'SCHEDULED',
    },
    {
      id: 2,
      homeTeam: { id: '3', name: 'Mombasa United', logo: null },
      awayTeam: { id: '1', name: 'Isiolo City FC', logo: null },
      kickoffTime: '2024-12-27T15:00:00Z',
      venue: { id: '2', name: 'Coastal Arena' },
      competition: { id: '1', name: 'Premier League' },
      status: 'SCHEDULED',
    },
  ];

  const matches = (data as any)?.upcomingMatches || mockMatches;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Nairobi',
      timeZoneName: 'short'
    });
  };

  const getOpponentInfo = (match: any) => {
    const isHome = match.homeTeam.name === 'Isiolo City FC';
    const opponent = isHome ? match.awayTeam : match.homeTeam;
    return {
      isHome,
      opponentName: opponent.name,
      opponentLogo: opponent.logo || '⚽'
    };
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 font-playfair mb-4">
            Upcoming Matches
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse bg-white rounded-2xl shadow-lg p-6">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-10">
            <p className="text-gray-600">Using cached content. {error.message}</p>
          </div>
        )}

        {/* Matches Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 gap-6">
            {matches.map((match: any, index: number) => {
              const { isHome, opponentName, opponentLogo } = getOpponentInfo(match);

              return (
              <div
                key={match.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Match Header */}
                <div className="bg-gradient-to-r from-navy-950 to-navy-900 px-6 py-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="text-sm font-semibold">
                      {match.competition?.name || 'Premier League'}
                    </span>
                    <span className="text-sm bg-red-600 px-3 py-1 rounded-full">
                      {isHome ? 'HOME' : 'AWAY'}
                    </span>
                  </div>
                </div>

                {/* Match Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    {/* Home Team */}
                    <div className="flex-1 text-center">
                      <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl">🐂</span>
                      </div>
                      <h3 className="font-bold text-navy-950">
                        {isHome ? 'Isiolo City FC' : opponentName}
                      </h3>
                    </div>

                    {/* VS */}
                    <div className="px-4">
                      <div className="text-2xl font-bold text-gray-400">VS</div>
                    </div>

                    {/* Away Team */}
                    <div className="flex-1 text-center">
                      <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl">{opponentLogo}</span>
                      </div>
                      <h3 className="font-bold text-navy-950">
                        {isHome ? opponentName : 'Isiolo City FC'}
                      </h3>
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="space-y-2 text-center border-t pt-4">
                    <div className="flex items-center justify-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-semibold">
                        {formatDate(match.kickoffTime)} • {formatTime(match.kickoffTime)}
                      </span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{match.venue?.name || 'TBA'}</span>
                    </div>
                  </div>

                  {/* Free Entry Badge */}
                  {isHome && (
                    <div className="w-full mt-6 bg-green-50 border-2 border-green-500 text-green-700 font-bold py-3 rounded-full text-center">
                      ✓ FREE ENTRY - No Ticket Required
                    </div>
                  )}
                </div>
              </div>
            );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingMatches;
