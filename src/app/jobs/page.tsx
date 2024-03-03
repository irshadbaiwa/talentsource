import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Find Job',
};

export default function FindJobsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24 min-h-screen">Fin Jobs</main>
      <Footer />
    </>
  );
}
