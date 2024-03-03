import { InfiniteMovingLogoCloud } from '@/components/ui/moving-logo-cloud';
import { H2 } from '@/components/ui/typography';

const companies = [
  { name: 'Company 1', imgSrc: '/company1.svg' },
  { name: 'Company 5', imgSrc: '/company5.svg' },
  { name: 'Company 2', imgSrc: '/company2.svg' },
  { name: 'Company 4', imgSrc: '/company4.svg' },
  { name: 'Company 3', imgSrc: '/company3.svg' },
  { name: 'Company 6', imgSrc: '/company6.svg' },
];

const Stats: React.FC = () => {
  return (
    <section className="screen-gutter py-16 sm:py-20">
      {/** Logo Cloud */}
      <div>
        <h2 className="text-center text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
          Trusted by 4,000+ companies
        </h2>

        {/* Moving Logos */}
        <div className="my-4 md:my-8">
          <InfiniteMovingLogoCloud items={companies} speed="slow" />
        </div>
      </div>

      {/** Stats */}
      <StatDetails />
    </section>
  );
};

const StatDetails = () => {
  return (
    <div className="overflow-hidden pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 md:gap-6 lg:max-w-3xl">
          {/* Stats */}
          <div className="bg-gradient-to-t from-gray-900 to-gray-700 rounded-lg md:rounded-2xl py-4 px-4 md:py-6 md:px-8 overflow-hidden text-ellipsis">
            <H2 className="text-white">1M+</H2>
            <h3 className="text-sm md:text-base font-bold leading-3 md:leading-5 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
              Matches Made
            </h3>
            <p className="text-xs md:text-base mt-2 md:mt-3 text-supporting">
              Talentsource has been relied upon by the world's top companies to
              discover and recruit the individuals crucial to their success.{' '}
              <span className="hidden sm:inline">
                Since our inception, we've facilitated over 2 million successful
                matches.
              </span>
            </p>
          </div>
          <div className="flex gap-3 md:gap-6">
            <div className="flex-1 h-full bg-gradient-to-b from-slate-200 to-slate-50 rounded-lg md:rounded-2xl py-4 px-4 md:py-6 md:px-8 overflow-hidden text-ellipsis">
              <H2>200K+</H2>
              <h3 className="text-sm md:text-base font-bold leading-4 md:leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
                Jobs
              </h3>
            </div>
            <div className="flex-1 h-full bg-gradient-to-b from-blue-800 to-blue-500 rounded-lg md:rounded-2xl py-4 px-4 md:py-6 md:px-8 overflow-hidden text-ellipsis">
              <H2 className="text-white">300K+</H2>
              <h3 className="text-sm md:text-base font-bold leading-4 md:leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-300">
                Candidates
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
