import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutPageHeroSection from '@/components/about/hero-section';
import Vision from '@/components/about/vision';
import OurTeamSection from '@/components/about/team';
import NewsletterForm from '@/components/about/newsletter';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24 min-h-screen">
        <AboutPageHeroSection />
        <Vision />
        <OurTeamSection />
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
}
