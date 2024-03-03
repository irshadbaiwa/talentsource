import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Discover',
};

export default function DiscoverPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24 min-h-screen">Discover</main>
      <Footer />
    </>
  );
}
