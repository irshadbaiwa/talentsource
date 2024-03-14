import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HirePageHeroSection from '@/components/hire/hero-section';
import DiscoverTalents from '@/components/hire/discover-talents';
import HiringBenefits from '@/components/hire/hiring-benefits';
import GetStarted from '@/components/hire/cta';
import Stats from '@/components/stats';

export const metadata: Metadata = {
  title: 'Hire Talent',
};

export default function HireTalentPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24">
        <HirePageHeroSection />
        <DiscoverTalents />
        <Stats />
        <HiringBenefits />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
