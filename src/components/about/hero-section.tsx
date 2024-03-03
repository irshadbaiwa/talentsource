import { H1 } from '@/components/ui/typography';

const AboutPageHeroSection: React.FC = () => {
  return (
    <section className="section-gutter">
      <div className="w-full h-auto md:h-[420px] lg:h-[500px] overflow-hidden md:flex md:flex-row items-center">
        {/* Text */}
        <div className="w-full md:w-1/2 px-3 md:px-8 py-6 md:py-14 text-center md:text-left">
          <H1>We are making hiring easy.</H1>
          <p className="my-4 md:my-6 md:text-xl text-supporting">
            Lorem ipsum dolor sit amet consectur, lorem ipsum dolor sit amet
            consectur lorem ipsum. Lorem ipsum dolor sit amet consectur, lorem
            ipsum dolor sit amet consectur lorem ipsum.
          </p>
        </div>
        {/* Hero Image */}
        <div className="relative p-5 w-full md:w-1/2 md:h-full flex justify-center items-center mb-8 md:mb-0">
          <div className="-z-10 absolute -top-1/4 right-1/4 translate-y-1/4 translate-x-1/4 bg-background bg-dot-black/[0.5] h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96"></div>
          <div className="-z-10 absolute top-1/4 left-1/4 translate-y-1/4 -translate-x-1/4 bg-background bg-dot-black/[0.5] h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96"></div>
          <div className="bg-slate-100 h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-xl lg:rounded-3xl overflow-hidden">
            <img
              src="/about-us.jpg"
              alt="3 people working together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHeroSection;
