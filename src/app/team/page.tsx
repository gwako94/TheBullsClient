import type { Metadata } from 'next';
import TeamClient from './TeamClient';

export const metadata: Metadata = {
  title: 'Our Squad - Players & Coaching Staff',
  description: 'Meet the Isiolo City FC squad. Player profiles, stats, and coaching staff of Northern Bulls. Goalkeepers, defenders, midfielders, and forwards.',
  openGraph: {
    title: 'Our Squad - Players & Coaching Staff | Isiolo City FC',
    description: 'Meet the talented athletes who represent Isiolo City FC with pride and passion.',
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
