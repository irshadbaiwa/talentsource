import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { H1 } from '@/components/ui/typography';
import { FadeIn } from '@/components/transitions';

const HirePageHeroSection: React.FC = () => {
  return (
    <section className="section-gutter py-4 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Text */}
        <div className="w-full h-full flex items-center justify-center lg:justify-start">
          <div className="w-full px-3 md:px-8 py-6 md:py-14 text-center lg:text-left">
            <H1>Find the right person for every job.</H1>
            <p className="max-w-2xl mx-auto my-6 md:my-10 md:text-xl text-supporting">
              Join the 100K+ startups building their teams with us.
              <br />
              Startup-ready candidates, uniquely specific filters for finding
              niche talent, and all the tools you need to hire.
            </p>
            <FadeIn>
              <div className="mt-10 mb-4 flex items-center justify-center lg:justify-start gap-2 lg-gap-4">
                <Button asChild>
                  <Link href="/signup">Start hiring</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
        {/* Images */}
        <div className="self-center w-full grid grid-cols-2 gap-2 lg:gap-4 px-4 md:px-8">
          <div className="relative self-center w-full h-44 md:h-64 lg:h-80 rounded-xl lg:rounded-3xl overflow-hidden bg-slate-50">
            <Image
              fill
              src="/hire1.jpg"
              alt="Team meeting"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <div className="relative w-3/4 h-24 md:h-36 lg:h-48 rounded-xl lg:rounded-3xl overflow-hidden bg-slate-50">
              <Image
                fill
                src="/hire2.jpg"
                alt="Team meeting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative w-full h-28 md:h-40 lg:h-56 rounded-xl lg:rounded-3xl overflow-hidden bg-slate-50">
              <Image
                fill
                src="/hire3.jpg"
                alt="Office space"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HirePageHeroSection;
