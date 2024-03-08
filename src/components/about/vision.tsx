import { FadeIn } from '@/components/transitions';
import { LightBulbIcon, FlagIcon } from '@heroicons/react/24/solid';

const Vision: React.FC = () => {
  return (
    <section className="screen-gutter py-24 sm:py-32">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <FadeIn>
          {/* Vision */}
          <div className="h-full bg-gradient-to-b from-slate-200 to-slate-50 border border-slate-200 rounded-lg md:rounded-2xl py-4 px-4 md:py-6 md:px-8 overflow-hidden text-ellipsis">
            <LightBulbIcon className="h-10 w-10 text-gray-700 mb-2" />
            <h3 className="text-sm md:text-base font-bold leading-4 md:leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
              Our Vision
            </h3>
            <p className="text-base md:text-lg mt-2 md:mt-3">
              A realm where talent and opportunity seamlessly converge..
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          {/* Mission */}
          <div className="h-full bg-gradient-to-b from-blue-800 to-blue-500 rounded-lg md:rounded-2xl py-4 px-4 md:py-6 md:px-8 overflow-hidden text-ellipsis">
            <FlagIcon className="h-10 w-10 text-white mb-2" />
            <h3 className="text-sm md:text-base font-bold leading-4 md:leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-300">
              Our Mission
            </h3>
            <p className="text-base md:text-lg mt-2 md:mt-3 text-gray-100">
              Simplifying the process for employers to discover the perfect
              candidate for any position.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Vision;
