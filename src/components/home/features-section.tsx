import Link from 'next/link';
import { H2 } from '@/components/ui/typography';
import {
  LightBulbIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';

const features = [
  {
    name: 'Tailored Matches',
    description:
      'Find jobs that align perfectly with your skills and aspirations through our advanced matching algorithms, ensuring personalized career opportunities that match your unique profile.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Effortless Networking',
    description:
      'Seamlessly connect with industry professionals, mentors, and potential employers, expanding your professional network effortlessly to enhance your career growth.',
    icon: UserGroupIcon,
  },
  {
    name: 'Resourceful Insights',
    description:
      'Gain valuable insights into market trends, salary benchmarks, and industry demands, empowering you with the knowledge to make informed career decisions and negotiate effectively.',
    icon: LightBulbIcon,
  },
  {
    name: 'Application Tracker',
    description:
      'Keep tabs on your job applications with our intuitive tracker, streamlining the process and providing real-time updates on your application status for a stress-free job search experience.',
    icon: DocumentTextIcon,
  },
];

const FeaturesSection = () => {
  return (
    <>
      {/* Developer Perks */}
      <section className="screen-gutter bg-slate-50">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
                Swift employment
              </h2>
              <H2>Unlock limitless career possibilities</H2>
              <p className="mt-6 leading-6 md:text-lg md:leading-8">
                Everything you need to land your dream job. Connect with
                opportunities, discover your potential, and embark on a
                fulfilling career path effortlessly.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-12 md:pl-16">
                    <dt className="text-base font-semibold leading-5 md:leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary">
                        <feature.icon
                          className="h-6 w-6 text-primary-foreground"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-xs md:text-base leading-5 md:leading-7">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="w-full mt-12 lg:mt-16 flex justify-center gap-4">
            <Button variant="link" asChild>
              <Link
                href="#"
                className="text-primary flex gap-1 justify-center items-center"
              >
                Learn More
                <ChevronRightIcon className="h-5 w-5 text-inherit" />
              </Link>
            </Button>
            <Button asChild>
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hirer Perks */}
      <section className="screen-gutter">
        <div className="mx-auto py-8 sm:py-24">
          <div className="bg-gradient-to-t from-gray-900 to-gray-700 rounded-xl md:rounded-3xl grid grid-cols-5 gap-4 lg:gap-12 p-4 md:p-8 items-center justify-center">
            {/* Image */}
            <div className="col-span-5 lg:col-span-2 w-full h-64 lg:h-96 bg-gray-600 rounded-lg lg:rounded-2xl overflow-hidden">
              <img src="/office.jpg" className="h-full w-full object-cover" />
            </div>
            {/* Text */}
            <div className="col-span-5 lg:col-span-3">
              <h2 className="text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
                For companies
              </h2>
              <H2 className="text-white">Grow your team</H2>
              <p className="mt-6 leading-6 md:text-lg md:leading-8 text-supporting">
                Access a diverse talent pool effortlessly with our advanced
                matching algorithms, ensuring efficient and customized
                connections tailored to your specific hiring needs.{' '}
                <span className="hidden lg:inline">
                  Facilitate seamless communication and collaboration within
                  your hiring team, ensuring a cohesive and efficient process
                  from start to finish.
                </span>
              </p>
              <Button variant="link" className="pl-0 mt-4 lg:mt-8" asChild>
                <Link
                  href="#"
                  className="text-primary flex gap-1 justify-center items-center"
                >
                  Start Hiring
                  <ChevronRightIcon className="h-5 w-5 text-inherit" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
