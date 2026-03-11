import type { Metadata } from 'next';
import PlayerClient from './PlayerClient';

export const metadata: Metadata = {
  title: 'Player Profile',
  description: 'View player profile, stats, and career information for Isiolo City FC - Northern Bulls squad members.',
  openGraph: {
    title: 'Player Profile | Isiolo City FC',
    description: 'View player profile, stats, and career information for Northern Bulls.',
  },
};

export default function PlayerProfilePage() {
  return <PlayerClient />;
}
