import Header from '@/components/header';
import FeaturesSection from '@/components/home/features-section';
import HeroSection from '@/components/home/hero-section';
import Stats from '@/components/home/stats';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24">
        <HeroSection />
        <Stats />
        <FeaturesSection />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
