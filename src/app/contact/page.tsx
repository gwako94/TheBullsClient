import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Isiolo City FC. Sponsorship inquiries, partnership opportunities, media requests, and general contact information for Northern Bulls.',
  openGraph: {
    title: 'Contact Us | Isiolo City FC',
    description: 'Get in touch with Isiolo City FC for sponsorship, partnership, and media inquiries.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
