import type { Metadata } from 'next';
import DonateClient from './DonateClient';

export const metadata: Metadata = {
  title: 'Donate - Support Northern Bulls',
  description: 'Support Isiolo City FC with a donation. Help develop young talent, improve facilities, and strengthen community programs via M-Pesa or card payment.',
  openGraph: {
    title: 'Donate - Support Northern Bulls | Isiolo City FC',
    description: 'Support Isiolo City FC with a donation. Help develop young talent and strengthen the community.',
  },
};

export default function DonatePage() {
  return <DonateClient />;
}
