import type { Metadata } from 'next';
import MatchesClient from './MatchesClient';

export const metadata: Metadata = {
  title: 'Fixtures & Results',
  description: 'View Isiolo City FC match fixtures, results, and league standings. Follow Northern Bulls home and away games in the Eastern Conference League.',
  openGraph: {
    title: 'Fixtures & Results | Isiolo City FC',
    description: 'View Isiolo City FC match fixtures, results, and league standings.',
  },
};

export default function MatchesPage() {
  return <MatchesClient />;
}
