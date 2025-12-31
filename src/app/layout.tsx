import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApolloProvider } from "@/components/ApolloProvider";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://isiolocityfc.com'),
  title: {
    default: "Isiolo City FC - The Bulls | Official Website",
    template: "%s | Isiolo City FC"
  },
  description: "Official website of Isiolo City Football Club - The Bulls. Follow our journey in Kenyan football. Latest news, match fixtures, player profiles, tickets, and community programs.",
  keywords: [
    "Isiolo City FC",
    "The Bulls",
    "Kenya Football",
    "Kenyan Football Club",
    "Isiolo Football",
    "FKF Division One",
    "Kenya Soccer",
    "Football Club Kenya",
    "Isiolo Sports",
    "Community Football"
  ],
  authors: [{ name: "Isiolo City FC" }],
  creator: "Isiolo City FC",
  publisher: "Isiolo City FC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://isiolocityfc.com',
    siteName: 'Isiolo City FC',
    title: 'Isiolo City FC - The Bulls | Official Website',
    description: 'Official website of Isiolo City Football Club - The Bulls. Follow our journey in Kenyan football.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Isiolo City FC - The Bulls',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isiolo City FC - The Bulls',
    description: 'Official website of Isiolo City Football Club - The Bulls. Follow our journey in Kenyan football.',
    images: ['/og-image.jpg'],
    creator: '@isiolocityfc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'NoNbkxIJ3q3zSIxV2zSyJ5gEJ9olVvM3taWjgwM3Z5Q',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <ApolloProvider>
          <Navbar />
          {children}
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
