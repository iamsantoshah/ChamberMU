import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DisclaimerModal from '@/components/layout/DisclaimerModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://chambermu.in'),
  title: {
    default: 'Chamber.MU | Advocates & Legal Consultants',
    template: '%s | Chamber.MU',
  },
  description:
    'Strategic client-centric legal services, feminist constitutional lawyering, immigration law, international human rights, and dispute resolution across all courts of India and the Supreme Court.',
  keywords: [
    'Chamber.MU',
    'Advocates New Delhi',
    'Supreme Court of India',
    'Constitutional Law India',
    'Immigration Law India',
    'Refugee Law',
    'Human Rights Lawyers',
    'Feminist Constitutionalism',
    'Arbitration and Mediation',
    'Ujjaini Chatterji',
    'Mayurapriyan Thangavel',
  ],
  icons: {
    icon: '/logos/chamber-mu-emblem.svg',
    shortcut: '/logos/chamber-mu-emblem.svg',
    apple: '/logos/chamber-mu-emblem.svg',
  },
  openGraph: {
    title: 'Chamber.MU | Advocates & Legal Consultants',
    description:
      'Strategic client-centric legal services, feminist constitutional lawyering, immigration, and human rights before all Indian courts.',
    url: 'https://chambermu.in',
    siteName: 'Chamber.MU',
    images: [
      {
        url: '/logos/chamber-mu.svg',
        width: 800,
        height: 800,
        alt: 'Chamber.MU Emblem',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#FEF9F3] text-[#0B0B0C] min-h-screen flex flex-col selection:bg-neutral-900 selection:text-[#FEF9F3]">
        <DisclaimerModal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
