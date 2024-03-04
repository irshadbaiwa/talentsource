import { H2 } from '@/components/ui/typography';
import { FadeIn } from '@/components/transitions';

const OurTeamSection: React.FC = () => {
  return (
    <section className="screen-gutter py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="max-w-lg mb-10">
          <FadeIn from="left">
            <h2 className="text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
              Our Team
            </h2>
            <H2>Meet our leadership</H2>
            <p className="mt-6 leading-6 md:text-lg md:leading-8">
              The team behind the impact we have made in simplifying job
              matching.
            </p>
          </FadeIn>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array(4)
            .fill('')
            .map((item, index) => (
              <FadeIn>
                <div key={index} className="flex flex-row items-center gap-4">
                  <div className="h-20 w-20 bg-slate-100 rounded-full overflow-hidden">
                    <img
                      src="/avatar.jpg"
                      alt="Firstname Lastname"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      Firstname Lastname
                    </p>
                    <p className="text-sm leading-6 font-medium text-primary">
                      CEO / Position
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
