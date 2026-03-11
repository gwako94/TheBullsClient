import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import FeaturedPlayers from '@/components/FeaturedPlayers';
import UpcomingMatches from '@/components/UpcomingMatches';
import Sponsors from '@/components/Sponsors';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Isiolo City FC - Northern Bulls | Official Website',
  description: 'Official website of Isiolo City Football Club - Northern Bulls. Latest news, match fixtures, player profiles, and community programs from Isiolo, Kenya.',
  openGraph: {
    title: 'Isiolo City FC - Northern Bulls | Official Website',
    description: 'Official website of Isiolo City Football Club - Northern Bulls. Follow our journey in Kenyan football.',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LatestNews />
      <FeaturedPlayers />
      <UpcomingMatches />
      <Sponsors />
      <CTASection />
    </main>
  );
}
