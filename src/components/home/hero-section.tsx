import Link from 'next/link';
import { H1 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full screen-gutter bg-background bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="py-12 lg:py-20 flex flex-col gap-6 lg:gap-10 items-center justify-center text-center max-w-full overflow-hidden">
        <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center">
          {/* Pill */}
          <div className="bg-slate-50 rounded-full border shadow-lg p-1 flex flex-row gap-1 items-center justify-center pr-3">
            <div className="h-6 w-6 bg-primary p-1 rounded-full flex items-center justify-center">
              <GlobeAltIcon className="h-4 w-4 text-primary-foreground fill-current" />
            </div>
            <p className="text-xs lg:text-sm">Discover your dream job</p>
          </div>
          {/* Heading Text */}
          <H1 className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600">
            Bridging the gap between{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
              talent
            </span>{' '}
            and{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
              employers
            </span>
          </H1>
        </div>
        {/* Supporting Text */}
        <p className="text-supporting md:text-xl">
          Explore endless oppurtunities for professional growth.
          <br /> Join today and unlock your true potential
        </p>
        {/* CTA */}
        <div className="flex flex-wrap gap-2 lg:gap-4 items-center justify-center mt-6 lg:mt-0">
          <Button size="lg" asChild>
            <Link href="#">Find Job</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#">Hire Talent</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
