'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_UPCOMING_MATCHES } from '@/graphql/queries/matches';

const OWN_TEAM_NAME = 'Isiolo City FC';

function TeamBadge({ name, badgeUrl }: { name: string; badgeUrl?: string | null }) {
  const isOwn = name === OWN_TEAM_NAME;
  if (badgeUrl) {
    return (
      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center border border-gray-100">
        <Image src={badgeUrl} alt={`${name} badge`} width={80} height={80} className="object-contain p-1" />
      </div>
    );
  }
  return (
    <div
      className={`w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center shadow-lg ${
        isOwn ? 'bg-gradient-to-br from-red-600 to-red-800' : 'bg-gradient-to-br from-navy-200 to-navy-300'
      }`}
    >
      <span className="text-3xl">{isOwn ? '🐂' : '⚽'}</span>
    </div>
  );
}

const UpcomingMatches = () => {
  const { data, loading, error } = useQuery(GET_UPCOMING_MATCHES, {
    variables: { limit: 2 },
  });

  const matches: any[] = (data as any)?.upcomingMatches ?? [];

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Nairobi',
      timeZoneName: 'short',
    });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-red-600 tracking-widest uppercase mb-3">Match Day</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 font-playfair">
            Upcoming Fixtures
          </h2>
        </div>

        {/* Loading */}
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

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-10">
            <p className="text-gray-600">Could not load upcoming matches.</p>
          </div>
        )}

        {/* No matches */}
        {!loading && !error && matches.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No upcoming matches scheduled.</p>
          </div>
        )}

        {/* Matches grid */}
        {!loading && matches.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {matches.map((match: any, index: number) => {
              const isHome = match.homeTeam.name === OWN_TEAM_NAME;
              const isLive = match.status === 'LIVE' || match.status === 'HALFTIME';

              return (
                <div
                  key={match.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-navy-950 to-navy-900 px-6 py-3.5">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-sm font-medium text-gray-300">{match.competition}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isLive ? 'bg-red-600 animate-pulse' : isHome ? 'bg-green-600/80' : 'bg-navy-700'
                      }`}>
                        {isLive ? 'LIVE' : isHome ? 'HOME' : 'AWAY'}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex-1 text-center">
                        <TeamBadge name={match.homeTeam.name} badgeUrl={match.homeTeam.badgeUrl} />
                        <h3 className="font-bold text-navy-950">{match.homeTeam.name}</h3>
                      </div>
                      <div className="px-4 text-center">
                        <div className="text-2xl font-bold text-gray-400">VS</div>
                        <div className="text-xs text-gray-500 mt-1">{formatTime(match.kickoffTime)}</div>
                      </div>
                      <div className="flex-1 text-center">
                        <TeamBadge name={match.awayTeam.name} badgeUrl={match.awayTeam.badgeUrl} />
                        <h3 className="font-bold text-navy-950">{match.awayTeam.name}</h3>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="space-y-2 text-center border-t pt-4">
                      <div className="flex items-center justify-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-semibold">{formatDate(match.kickoffTime)}</span>
                      </div>
                      <div className="flex items-center justify-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{match.venue}</span>
                      </div>
                    </div>

                    {isHome && (
                      <div className="w-full mt-6 bg-green-50 border border-green-200 text-green-700 font-semibold py-2.5 rounded-xl text-center text-sm">
                        FREE ENTRY
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/matches"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            View All Fixtures
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
