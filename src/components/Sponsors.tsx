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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-gold-600 tracking-widest uppercase mb-3">Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 font-playfair">
            Our Sponsors
          </h2>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="animate-pulse bg-gray-50 rounded-3xl p-12">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-32 h-32 bg-gray-200 rounded-2xl"></div>
                <div className="h-5 bg-gray-200 rounded w-40"></div>
                <div className="h-4 bg-gray-200 rounded w-56"></div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-sm">Using cached content.</p>
          </div>
        )}

        {/* Main Sponsor */}
        {!loading && mainSponsor && (
          <div className="max-w-lg mx-auto mb-16">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-gray-200 transition-all duration-300 group text-center">
              {mainSponsor.logo && (
                <div className="w-36 h-36 mx-auto mb-6 relative">
                  <Image
                    src={mainSponsor.logo}
                    alt={`${mainSponsor.name} - Main Sponsor`}
                    width={144}
                    height={144}
                    className="object-contain rounded-xl"
                  />
                </div>
              )}
              <h4 className="text-xl font-bold text-navy-950 mb-1">{mainSponsor.name}</h4>
              <p className="text-gray-500 text-sm mb-6">{getTierLabel(mainSponsor.tier)}</p>
              <Link
                href="/sponsors"
                className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                Learn About Partnership
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Additional Partners */}
        {!loading && otherSponsors.length > 0 && (
          <div>
            <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">Supporting Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherSponsors.map((sponsor: any) => (
                <div
                  key={sponsor.id}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 text-center"
                >
                  {sponsor.logo ? (
                    <div className="w-14 h-14 mx-auto mb-3 relative">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 mx-auto mb-3 bg-navy-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-navy-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  )}
                  <p className="text-sm font-semibold text-navy-950">{sponsor.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{getTierLabel(sponsor.tier)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback if no other sponsors */}
        {!loading && otherSponsors.length === 0 && (
          <div>
            <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">Partnership Opportunities</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Community Partner', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { name: 'Media Partner', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
                { name: 'Training Partner', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { name: 'Youth Partner', icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342' },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-dashed border-gray-200 hover:border-gray-300 transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className="w-14 h-14 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-gold-200 transition-colors">
                    <svg className="w-6 h-6 text-gray-300 group-hover:text-gold-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={partner.icon} />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-500">{partner.name}</p>
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
