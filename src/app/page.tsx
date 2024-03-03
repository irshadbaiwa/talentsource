import Header from '@/components/header';
import FeaturesSection from '@/components/home/features-section';
import HeroSection from '@/components/home/hero-section';
import Stats from '@/components/home/stats';
import Testimonials from '@/components/home/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-20 lg:h-24"></div>
      <HeroSection />
      <Stats />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
