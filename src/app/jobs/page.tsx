import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import JobsPageHeroSection from '@/components/jobs/hero-section';
import DiscoverIndustries from '@/components/jobs/discover-industries';

export const metadata: Metadata = {
  title: 'Find Job',
};

export default function FindJobsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24 min-h-screen">
        <JobsPageHeroSection />
        <DiscoverIndustries />
      </main>
      <Footer />
    </>
  );
}
