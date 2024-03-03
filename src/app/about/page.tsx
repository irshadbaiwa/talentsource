import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutPageHeroSection from '@/components/about/hero-section';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24 min-h-screen">
        <AboutPageHeroSection />
      </main>
      <Footer />
    </>
  );
}
