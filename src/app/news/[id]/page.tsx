import type { Metadata } from 'next';
import ArticleClient from './ArticleClient';

export const metadata: Metadata = {
  title: 'News Article',
  description: 'Read the latest news and updates from Isiolo City FC - Northern Bulls. Match reports, club announcements, and community stories.',
  openGraph: {
    title: 'News Article | Isiolo City FC',
    description: 'Read the latest news and updates from Isiolo City FC - Northern Bulls.',
  },
};

export default function NewsArticlePage() {
  return <ArticleClient />;
}
