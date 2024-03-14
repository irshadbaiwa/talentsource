import { H2 } from '@/components/ui/typography';
import { FadeIn } from '@/components/transitions';
import {
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  SwatchIcon,
  PresentationChartLineIcon,
  ServerStackIcon,
  ChartPieIcon,
  UserGroupIcon,
  BanknotesIcon,
  TruckIcon,
  ScaleIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

const jobs = [
  { field: 'Engineering', icon: Cog6ToothIcon },
  { field: 'Development', icon: CodeBracketIcon },
  { field: 'Sales', icon: PresentationChartLineIcon },
  { field: 'Devops', icon: ServerStackIcon },
  { field: 'Design', icon: SwatchIcon },
  { field: 'HR', icon: UserGroupIcon },
  { field: 'Management', icon: ClipboardDocumentListIcon },
  { field: 'Finance', icon: CurrencyDollarIcon },
  { field: 'Operations', icon: TruckIcon },
  { field: 'Analytics', icon: ChartPieIcon },
  { field: 'Marketing', icon: BanknotesIcon },
  { field: 'Legal', icon: ScaleIcon },
];

const DiscoverTalents: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 overflow-hidden">
        <div className="screen-gutter max-w-lg mb-10">
          <FadeIn from="left">
            <h2 className="text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
              Skills
            </h2>
            <H2>Discover Talents</H2>
            <p className="mt-6 leading-6 md:text-lg md:leading-8">
              Hire today from our global pool of 300K+ top-ranked candidates.
            </p>
          </FadeIn>
        </div>
        <div className="flex-1 flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* Items */}
          <div className="w-full flex shrink-0 flex-wrap gap-x-2 gap-y-3 md:gap-4 justify-center items-center">
            {jobs.map((item) => (
              <div
                key={item.field}
                className="py-2 md:py-3 px-4 md:px-6 bg-slate-50 rounded-full border hover:border-primary hover:shadow-xl cursor-pointer group transition-all flex items-center justify-center gap-2"
              >
                <item.icon className="h-5 w-5 md:h-6 md:w-6 text-gray-300 group-hover:text-primary" />
                <p className="font-bold text-supporting text-xs md:text-base group-hover:text-primary">
                  {item.field}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverTalents;
