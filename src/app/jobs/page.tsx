import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import JobsPageHeroSection from '@/components/jobs/hero-section';
import DiscoverIndustries from '@/components/jobs/discover-industries';
import NewsletterForm from '@/components/newsletter';
import Testimonials from '@/components/testimonials';
import WhyJoinUs from '@/components/jobs/why-join-us';
import GetStarted from '@/components/jobs/cta';

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
        <WhyJoinUs />
        <GetStarted />
        <Testimonials />
        <NewsletterForm desc="Join our weekly newsletter to stay up to date with the startup world." />
      </main>
      <Footer />
    </>
  );
}
