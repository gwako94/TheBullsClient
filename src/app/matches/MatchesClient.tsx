'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client/react';
import { GET_MATCHES } from '@/graphql/queries/matches';

const matchTabs = ['Upcoming', 'Results', 'All', 'Standings'];
const OWN_TEAM_NAME = 'Isiolo City FC';

function TeamBadge({ name, badgeUrl, size = 'lg' }: { name: string; badgeUrl?: string | null; size?: 'sm' | 'lg' }) {
  const dim = size === 'lg' ? 80 : 64;
  const isOwn = name === OWN_TEAM_NAME;

  if (badgeUrl) {
    return (
      <div
        className="mx-auto mb-3 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center border border-gray-100"
        style={{ width: dim, height: dim }}
      >
        <Image src={badgeUrl} alt={`${name} badge`} width={dim} height={dim} className="object-contain p-1" />
      </div>
    );
  }

  return (
    <div
      className={`mx-auto mb-3 rounded-full flex items-center justify-center shadow-lg ${
        isOwn ? 'bg-gradient-to-br from-red-600 to-red-800' : 'bg-gradient-to-br from-navy-200 to-navy-300'
      }`}
      style={{ width: dim, height: dim }}
    >
      <span style={{ fontSize: size === 'lg' ? '2rem' : '1.5rem' }}>{isOwn ? '🐂' : '⚽'}</span>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Africa/Nairobi',
    timeZoneName: 'short',
  });
}

export default function MatchesClient() {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const { data, loading, error } = useQuery(GET_MATCHES, {
    variables: { limit: 50 },
  });

  const allMatches: any[] = (data as any)?.matches ?? [];
  const upcoming = allMatches.filter((m) => ['SCHEDULED', 'LIVE', 'HALFTIME'].includes(m.status));
  // Results shown most recent first (backend returns asc, so reverse)
  const results = allMatches
    .filter((m) => ['FULLTIME', 'POSTPONED', 'CANCELLED'].includes(m.status))
    .slice()
    .reverse();

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
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
      <section className="bg-white border-b sticky top-16 z-40">
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

          {/* Loading skeleton */}
          {loading && (
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl shadow-lg p-8">
                  <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                    <div className="px-8"><div className="h-8 bg-gray-200 rounded w-12"></div></div>
                    <div className="flex-1 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="text-center py-16">
              <p className="text-gray-500">Could not load fixtures. Please try again later.</p>
            </div>
          )}

          {/* Upcoming */}
          {!loading && activeTab === 'Upcoming' && (
            <div className="space-y-6">
              {upcoming.length === 0 ? (
                <p className="text-center text-gray-500 py-16">No upcoming fixtures scheduled.</p>
              ) : (
                upcoming.map((match) => {
                  const isHome = match.homeTeam.name === OWN_TEAM_NAME;
                  const isLive = match.status === 'LIVE' || match.status === 'HALFTIME';
                  return (
                    <div key={match.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300">
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

                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex-1 text-center">
                            <TeamBadge name={match.homeTeam.name} badgeUrl={match.homeTeam.badgeUrl} size="lg" />
                            <h3 className="font-bold text-navy-950">{match.homeTeam.name}</h3>
                          </div>
                          <div className="px-8 text-center">
                            <div className="text-2xl font-bold text-gray-400">VS</div>
                            <div className="text-xs text-gray-500 mt-1">{formatTime(match.kickoffTime)}</div>
                          </div>
                          <div className="flex-1 text-center">
                            <TeamBadge name={match.awayTeam.name} badgeUrl={match.awayTeam.badgeUrl} size="lg" />
                            <h3 className="font-bold text-navy-950">{match.awayTeam.name}</h3>
                          </div>
                        </div>

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
                })
              )}
            </div>
          )}

          {/* Results */}
          {!loading && activeTab === 'Results' && (
            <div className="space-y-6">
              {results.length === 0 ? (
                <p className="text-center text-gray-500 py-16">No results yet.</p>
              ) : (
                results.map((match) => (
                  <div key={match.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-600">{match.competition}</span>
                      <span className="text-sm text-gray-500">{formatDate(match.kickoffTime)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 text-center">
                        <TeamBadge name={match.homeTeam.name} badgeUrl={match.homeTeam.badgeUrl} size="sm" />
                        <h3 className="font-bold text-navy-950 text-sm">{match.homeTeam.name}</h3>
                      </div>
                      <div className="px-8 text-center">
                        {match.status === 'POSTPONED' || match.status === 'CANCELLED' ? (
                          <div className="text-lg font-bold text-gray-400 uppercase">{match.status}</div>
                        ) : (
                          <>
                            <div className="text-4xl font-bold text-navy-950">
                              {match.homeScore ?? 0} - {match.awayScore ?? 0}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">FULL TIME</div>
                          </>
                        )}
                      </div>
                      <div className="flex-1 text-center">
                        <TeamBadge name={match.awayTeam.name} badgeUrl={match.awayTeam.badgeUrl} size="sm" />
                        <h3 className="font-bold text-navy-950 text-sm">{match.awayTeam.name}</h3>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Standings */}
          {activeTab === 'Standings' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-navy-950 to-navy-900 px-8 py-10 text-center">
                <div className="w-16 h-16 mx-auto mb-5 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white font-playfair mb-2">League Standings</h2>
                <p className="text-gray-300 mb-2">Eastern Conference League 2025/2026 — Pool C</p>
                <p className="text-sm text-gray-400 mb-8">View the full league table, recent form, and team statistics on FKF Leagues</p>
                <a
                  href="https://www.fkfleagues.co.ke/standings/east-conf2526c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-navy-950 font-bold rounded-full hover:bg-gold-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  View Full Standings
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {/* All */}
          {!loading && activeTab === 'All' && (
            <div className="space-y-4">
              {allMatches.length === 0 ? (
                <p className="text-center text-gray-500 py-16">No fixtures found.</p>
              ) : (
                allMatches.map((match) => {
                  const isFinished = ['FULLTIME', 'POSTPONED', 'CANCELLED'].includes(match.status);
                  const statusLabel =
                    match.status === 'FULLTIME' ? 'Finished' :
                    match.status === 'LIVE' ? '🔴 Live' :
                    match.status === 'HALFTIME' ? '⏸ Half Time' :
                    match.status.charAt(0) + match.status.slice(1).toLowerCase();
                  const statusClass =
                    match.status === 'FULLTIME' ? 'bg-green-100 text-green-600' :
                    match.status === 'LIVE' || match.status === 'HALFTIME' ? 'bg-red-100 text-red-600' :
                    match.status === 'POSTPONED' || match.status === 'CANCELLED' ? 'bg-gray-100 text-gray-600' :
                    'bg-blue-100 text-blue-600';

                  return (
                    <div key={match.id} className="bg-white rounded-xl p-6 shadow flex justify-between items-center gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="flex items-center gap-2 shrink-0">
                          <TeamBadge name={match.homeTeam.name} badgeUrl={match.homeTeam.badgeUrl} size="sm" />
                          <TeamBadge name={match.awayTeam.name} badgeUrl={match.awayTeam.badgeUrl} size="sm" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-navy-950 truncate">
                            {isFinished
                              ? `${match.homeTeam.name} ${match.homeScore ?? 0} - ${match.awayScore ?? 0} ${match.awayTeam.name}`
                              : `${match.homeTeam.name} vs ${match.awayTeam.name}`}
                          </div>
                          <div className="text-sm text-gray-600">{formatDate(match.kickoffTime)} · {match.competition}</div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold shrink-0 ${statusClass}`}>
                        {statusLabel}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
