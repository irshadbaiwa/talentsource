'use client';

import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { H2 } from '@/components/ui/typography';

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-2xl screen-gutter mb-10">
        <h2 className="text-base font-bold leading-7 bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-primary">
          Quotes
        </h2>
        <H2>From our users</H2>
        <p className="mt-6 leading-6 md:text-lg md:leading-8">
          Discover firsthand experiences and success stories. Hear from our past
          users and envision the possibilities that await you.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      'I found my dream job within weeks of joining! The tailored matches were spot-on, and the support throughout the process was exceptional. Highly recommend!',
    name: 'Kamaye Danjuma',
    title: 'Software Developer',
  },
  {
    quote:
      'This platform exceeded my expectations. The insights on market trends were invaluable, and the seamless collaboration with the hiring team made the entire experience enjoyable. Thrilled with my new role!',
    name: 'Habu Tanimu',
    title: 'Marketing Specialist',
  },
  {
    quote:
      'Our recruitment process transformed with this platform. The automated workflows saved us time, and the post-hire support ensured a smooth integration for our new hires. A game-changer for any HR team.',
    name: 'Larai Dan Asabe',
    title: 'HR Manager',
  },
  {
    quote:
      "The platform's efficiency and the personalized matches helped me land a role that perfectly fits my skills and aspirations. Couldn't be happier.",
    name: 'Danliti Isuhu',
    title: 'Graphic Designer',
  },
  {
    quote:
      'As a seasoned professional, I appreciate the data-driven insights. It gave me a clear understanding of market demands and salary expectations, making negotiations more informed and successful.',
    name: 'Tasalla Barau',
    title: 'Sales Executive',
  },
];

export default Testimonials;
