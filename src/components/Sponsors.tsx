'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_SPONSORS } from '@/graphql/queries/sponsors';

const Sponsors = () => {
  const { data, loading, error } = useQuery(GET_SPONSORS, {
    variables: { isActive: true }
  });

  // Fallback mock data if backend is not available
  const mockSponsors = [
    {
      id: '1',
      name: 'Java Events',
      tier: 'TITLE',
      logo: '/java-events-logo.jpeg',
      website: null,
      contactInfo: '0700724708',
      description: 'Main Sponsor & Official Events Partner',
      isActive: true
    }
  ];

  const sponsors = (data as any)?.sponsors || mockSponsors;
  const mainSponsor = sponsors.find((s: any) => s.tier === 'TITLE');
  const otherSponsors = sponsors.filter((s: any) => s.tier !== 'TITLE');

  const getTierLabel = (tier: string) => {
    const labels: { [key: string]: string } = {
      TITLE: 'Main Sponsor & Official Events Partner',
      PLATINUM: 'Platinum Partner',
      GOLD: 'Gold Partner',
      SILVER: 'Silver Partner',
      COMMUNITY: 'Community Partner',
      MEDIA: 'Media Partner'
    };
    return labels[tier] || 'Partner';
  };
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-950 font-playfair mb-3">
            Our Main Sponsor
          </h3>
          <p className="text-gray-600 text-lg">
            Powering excellence together
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="animate-pulse bg-white rounded-3xl shadow-xl p-12">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-48 h-48 bg-gray-200 rounded-lg"></div>
                <div className="h-6 bg-gray-200 rounded w-48"></div>
                <div className="h-4 bg-gray-200 rounded w-64"></div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-10">
            <p className="text-gray-600">Using cached content. {error.message}</p>
          </div>
        )}

        {/* Main Sponsor */}
        {!loading && mainSponsor && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-6">
                {mainSponsor.logo && (
                  <div className="w-48 h-48 relative">
                    <Image
                      src={mainSponsor.logo}
                      alt={`${mainSponsor.name} - Main Sponsor`}
                      width={192}
                      height={192}
                      className="object-contain rounded-lg"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-2xl font-bold text-navy-950 mb-2">{mainSponsor.name}</h4>
                  <p className="text-gray-600 mb-4">{getTierLabel(mainSponsor.tier)}</p>
                  {mainSponsor.contactInfo && (
                    <p className="text-gold-600 font-semibold">Contact: {mainSponsor.contactInfo}</p>
                  )}
                </div>
                <Link
                  href="/sponsors"
                  className="inline-flex items-center px-6 py-3 bg-navy-950 text-white font-semibold rounded-full hover:bg-navy-900 transition-all duration-300 group-hover:scale-105"
                >
                  Learn About Partnership
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Additional Partners */}
        {!loading && otherSponsors.length > 0 && (
          <div className="text-center">
            <p className="text-gray-500 mb-6">Supporting Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {otherSponsors.map((sponsor: any) => (
                <div
                  key={sponsor.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gold-400 transition-all duration-300"
                >
                  {sponsor.logo ? (
                    <div className="w-16 h-16 mx-auto mb-2 relative">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center">
                      <span className="text-xl">🤝</span>
                    </div>
                  )}
                  <p className="text-sm font-semibold text-gray-700">{sponsor.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{getTierLabel(sponsor.tier)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback if no other sponsors */}
        {!loading && otherSponsors.length === 0 && (
          <div className="text-center">
            <p className="text-gray-500 mb-6">Supporting Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Community Partner', 'Media Partner', 'Training Partner', 'Youth Partner'].map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gold-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">🤝</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sponsors;
