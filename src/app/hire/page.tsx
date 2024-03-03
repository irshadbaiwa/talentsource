import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Hire Talent',
};

export default function HireTalentPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24 min-h-screen">Hire Talent</main>
      <Footer />
    </>
  );
}
