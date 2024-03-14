import { H2 } from '@/components/ui/typography';
import { FadeIn } from '@/components/transitions';
import {
  CheckBadgeIcon,
  CursorArrowRippleIcon,
  ClockIcon,
  LightBulbIcon,
  UsersIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    benefit: 'Efficient Talent Pool',
    desc: 'Access a diverse and highly qualified pool of candidates, streamlining your hiring process and ensuring you find the right fit faster.',
    icon: CheckBadgeIcon,
  },
  {
    benefit: 'Customized Matching',
    desc: 'Benefit from advanced algorithms that tailor matches based on your specific hiring needs, saving time and resources while maximizing the chances of successful placements.',
    icon: CursorArrowRippleIcon,
  },
  {
    benefit: 'Time-saving Automation',
    desc: 'Leverage automated features for tasks like initial screenings and interview scheduling, allowing your team to focus on strategic decisions and fostering a more efficient recruitment workflow.',
    icon: ClockIcon,
  },
  {
    benefit: 'Comprehensive Insights',
    desc: 'Gain valuable data-driven insights into market trends, candidate expectations, and competitive salary benchmarks, empowering you to make informed hiring decisions.',
    icon: LightBulbIcon,
  },
  {
    benefit: 'Seamless Collaboration',
    desc: 'Facilitate smooth communication and collaboration among your hiring team, ensuring everyone is on the same page throughout the recruitment process for enhanced teamwork.',
    icon: UsersIcon,
  },
  {
    benefit: 'Post-Hire Support',
    desc: 'Enjoy ongoing support beyond the hiring phase with tools and resources to facilitate employee onboarding, integration, and long-term success within your organization.',
    icon: CircleStackIcon,
  },
];

const HiringBenefits: React.FC = () => {
  return (
    <section className="screen-gutter py-16 sm:py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
            Hiring
          </h2>
          <H2>Save time and effort</H2>
          <p className="mt-6 leading-6 md:text-lg md:leading-8">
            Manage your entire process, from sourcing to employee onboarding and
            management
          </p>
        </div>
        {/* Hiring benefits */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((item) => (
              <FadeIn key={item.benefit}>
                <div className="relative pl-12 md:pl-16">
                  <dt className="text-base font-semibold leading-5 md:leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary">
                      <item.icon
                        className="h-6 w-6 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    {item.benefit}
                  </dt>
                  <dd className="mt-2 text-xs md:text-base leading-5 md:leading-7">
                    {item.desc}
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HiringBenefits;
