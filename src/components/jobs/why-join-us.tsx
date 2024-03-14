import {
  BriefcaseIcon,
  ArrowTrendingUpIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/solid';
import FeatureCard from './feature-card';

const features = [
  {
    feature: 'Elite Jobs',
    imgSrc: '/handshake.jpg',
    desc: 'Embark on a journey to secure coveted positions at prestigious organizations. Our platform curates elite job listings, offering unparalleled opportunities for career advancement and professional fulfillment. Elevate your trajectory and unlock access to exclusive roles that match your ambition and expertise.',
    Icon: BriefcaseIcon,
  },
  {
    feature: 'Career Growth',
    imgSrc: '/growth.jpg',
    desc: 'Fuel your career evolution with personalized growth strategies tailored to your aspirations. Our platform provides invaluable resources, mentorship opportunities, and skill development initiatives to propel you towards your professional goals. Navigate your path with confidence, embracing continuous learning and advancement for sustained career growth and success.',
    Icon: ArrowTrendingUpIcon,
  },
  {
    feature: 'Holistic Career Empowerment',
    imgSrc: '/career-empowerment.jpg',
    desc: 'Elevate your career journey with comprehensive support that goes beyond placement. From skill development initiatives to personalized growth plans, our platform is your partner in achieving sustained success, empowering you to continuously thrive in your professional endeavors.',
    Icon: Square3Stack3DIcon,
  },
];

const WhyJoinUs: React.FC = () => {
  return (
    <>
      {/* Proto */}
      <section className="screen-gutter py-16 sm:py-20 flex flex-col gap-24 lg:gap-40">
        {features.map((item, index) => (
          <FeatureCard
            key={item.feature}
            {...item}
            reversed={(index + 1) % 2 === 0}
          />
        ))}
      </section>
    </>
  );
};

export default WhyJoinUs;
