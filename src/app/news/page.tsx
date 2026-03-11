import type { Metadata } from 'next';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: 'Latest News',
  description: 'Stay updated with the latest news from Isiolo City FC. Match reports, transfer updates, club announcements, and more from Northern Bulls.',
  openGraph: {
    title: 'Latest News | Isiolo City FC',
    description: 'Stay updated with the latest news from Isiolo City FC - Northern Bulls.',
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
