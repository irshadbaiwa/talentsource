import { H2 } from '@/components/ui/typography';
import { FadeIn } from '@/components/transitions';
import {
  ShoppingCartIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  LockClosedIcon,
  BanknotesIcon,
  CpuChipIcon,
  TruckIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

const industries = [
  { industry: 'SaaS', icon: ComputerDesktopIcon },
  { industry: 'E-commerce', icon: ShoppingCartIcon },
  { industry: 'Edtech', icon: BookOpenIcon },
  { industry: 'Healthcare', icon: BuildingOfficeIcon },
  { industry: 'Cyber Security', icon: LockClosedIcon },
  { industry: 'Fintech', icon: BanknotesIcon },
  { industry: 'IoT', icon: CpuChipIcon },
  { industry: 'Real Estate', icon: BuildingOffice2Icon },
  { industry: 'Logistics', icon: TruckIcon },
  { industry: 'Web3/Crypto', icon: CurrencyDollarIcon },
];

const DiscoverIndustries: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 overflow-hidden">
        <div className="screen-gutter max-w-lg mb-10">
          <FadeIn from="left">
            <h2 className="text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
              Companies
            </h2>
            <H2>Discover Industries</H2>
            <p className="mt-6 leading-6 md:text-lg md:leading-8">
              There are over 1,000 companies hiring using our platform. Match
              with companies from your preferred sector.
            </p>
          </FadeIn>
        </div>
        <div className="flex-1 flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* Items */}
          <div className="w-full flex shrink-0 flex-wrap gap-x-2 gap-y-3 md:gap-4 justify-center items-center">
            {industries.map((item) => (
              <div
                key={item.industry}
                className="py-2 md:py-3 px-4 md:px-6 bg-slate-50 rounded-full border hover:border-primary hover:shadow-xl cursor-pointer group transition-all flex items-center justify-center gap-2"
              >
                <item.icon className="h-5 w-5 md:h-6 md:w-6 text-gray-300 group-hover:text-primary" />
                <p className="font-bold text-supporting text-xs md:text-base group-hover:text-primary">
                  {item.industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverIndustries;
