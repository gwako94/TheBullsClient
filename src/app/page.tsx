import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import FeaturedPlayers from '@/components/FeaturedPlayers';
import UpcomingMatches from '@/components/UpcomingMatches';
import Sponsors from '@/components/Sponsors';
import CTASection from '@/components/CTASection';

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
