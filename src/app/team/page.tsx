'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_PLAYERS } from '@/graphql/queries/players';

const positions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

export default function TeamPage() {
  const [selectedPosition, setSelectedPosition] = useState('All');

  const { data, loading, error } = useQuery(GET_PLAYERS, {
    variables: {
      position: selectedPosition === 'All' ? undefined : selectedPosition.toUpperCase(),
      status: 'ACTIVE'
    }
  });

  // Fallback mock data if backend is not available
  // const mockPlayers = [
  //   { id: '1', displayName: 'Kevin Otieno', position: 'GOALKEEPER', jerseyNumber: 1, dateOfBirth: '1995-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '2', displayName: 'Samuel Mwangi', position: 'GOALKEEPER', jerseyNumber: 22, dateOfBirth: '1999-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '3', displayName: 'David Wanjala', position: 'DEFENDER', jerseyNumber: 5, dateOfBirth: '1997-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '4', displayName: 'Joseph Kimani', position: 'DEFENDER', jerseyNumber: 4, dateOfBirth: '1998-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '5', displayName: 'Peter Omondi', position: 'DEFENDER', jerseyNumber: 3, dateOfBirth: '1996-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '6', displayName: 'Brian Njoroge', position: 'DEFENDER', jerseyNumber: 2, dateOfBirth: '2000-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '7', displayName: 'Michael Ochieng', position: 'MIDFIELDER', jerseyNumber: 8, dateOfBirth: '1999-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '8', displayName: 'Patrick Kamau', position: 'MIDFIELDER', jerseyNumber: 6, dateOfBirth: '1997-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '9', displayName: 'Dennis Mutua', position: 'MIDFIELDER', jerseyNumber: 7, dateOfBirth: '1998-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '10', displayName: 'Eric Wafula', position: 'MIDFIELDER', jerseyNumber: 11, dateOfBirth: '2001-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '11', displayName: 'James Kariuki', position: 'FORWARD', jerseyNumber: 10, dateOfBirth: '1996-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '12', displayName: 'Daniel Onyango', position: 'FORWARD', jerseyNumber: 9, dateOfBirth: '1998-01-01', nationality: 'Kenya', photos: [] },
  //   { id: '13', displayName: 'John Ouma', position: 'FORWARD', jerseyNumber: 14, dateOfBirth: '2000-01-01', nationality: 'Kenya', photos: [] },
  // ];

  const allPlayers = (data as any)?.players;
  const filteredPlayers = selectedPosition === 'All'
    ? allPlayers
    : allPlayers.filter((p: any) => p.position === selectedPosition.toUpperCase());

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const formatPosition = (position: string) => {
    return position.charAt(0).toUpperCase() + position.slice(1).toLowerCase();
  };

  const getPositionEmoji = (position: string) => {
    const emojis: { [key: string]: string } = {
      GOALKEEPER: '🧤',
      DEFENDER: '🛡️',
      MIDFIELDER: '⚙️',
      FORWARD: '⚽'
    };
    return emojis[position] || '⚽';
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">
            Our Squad
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the talented athletes who represent Isiolo City FC with pride and passion
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {positions.map((position) => (
              <button
                key={position}
                onClick={() => setSelectedPosition(position)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedPosition === position
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {position}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200 rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
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

          {/* Players Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPlayers.map((player: any) => (
                <Link
                  key={player.id}
                  href={`/team/${player.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group block"
                >
                  {/* Player Image */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-navy-700 to-navy-800 relative">
                    {player.photoUrls && player.photoUrls.length > 0 && player.photoUrls[0] ? (
                      <img
                        src={player.photoUrls[0]}
                        alt={player.displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-8xl">
                        {getPositionEmoji(player.position)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>

                    {/* Jersey Number */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">{player.jerseyNumber}</span>
                    </div>

                    {/* Position Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gold-500 text-navy-950 px-3 py-1 rounded-full text-sm font-bold">
                        {formatPosition(player.position)}
                      </span>
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-950 mb-2 group-hover:text-red-600 transition-colors">
                      {player.displayName}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="w-20 font-semibold">Age:</span>
                        <span>{calculateAge(player.dateOfBirth)}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-20 font-semibold">Nation:</span>
                        <span>{player.nationality}</span>
                      </div>
                    </div>

                    <span className="mt-4 w-full bg-navy-950 text-white py-2 rounded-lg group-hover:bg-red-600 transition-colors font-semibold inline-flex items-center justify-center">
                      View Profile
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Coaching Staff Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-950 font-playfair mb-4">
              Coaching Staff
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Abubakar Daud', role: 'Head Coach', image: '👨‍💼' },
              { name: 'Muhsin Ibrahim', role: 'Assistant Coach', image: '👨‍💼' },
              { name: 'Dr Mohammed', role: 'Fitness Coach', image: '👨‍💼' },
            ].map((staff, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-6xl">
                  {staff.image}
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-1">{staff.name}</h3>
                <p className="text-gray-600">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
