import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: { template: '%s | Talentsource', default: 'Talentsource' },
  description:
    'Bridging the gap between talent and employers. Explore endless oppurtunities for professional growth. Join today and unlock your true potential',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased text-gray-600 text-sm lg:text-base',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
