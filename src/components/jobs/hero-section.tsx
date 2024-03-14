import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { H1 } from '@/components/ui/typography';
import { FadeIn } from '@/components/transitions';

const JobsPageHeroSection: React.FC = () => {
  return (
    <section className="section-gutter">
      <div className="w-full h-auto flex items-center justify-center">
        {/* Text */}
        <div className="w-full px-3 md:px-8 py-6 md:py-14 text-center">
          <H1>Find the job that's right for you.</H1>
          <p className="max-w-2xl mx-auto my-6 md:my-10 md:text-xl text-supporting">
            We make it easy to find your next job.
            <br />
            Browse over 10,000 jobs from top companies to fast-growing startups
          </p>
          <FadeIn>
            <div className="my-10 flex items-center justify-center gap-2 lg-gap-4">
              <Button asChild>
                <Link href="/signup">Create your profile</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default JobsPageHeroSection;
