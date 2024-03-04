import { H2 } from '@/components/ui/typography';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const NewsletterForm: React.FC = () => {
  return (
    <section className="screen-gutter py-16 sm:py-20">
      <div className="mx-auto max-w-7xl rounded-xl md:rounded-3xl py-12 md:py-16 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-gray-700">
        <div className="text-center">
          <H2 className="text-white">Subscribe to our newsletter</H2>
          <p className="text-supporting mt-2 leading-6 md:text-lg md:leading-8">
            Receive news and updates regarding our platform.
          </p>
        </div>
        <form
          className="mt-4 md:mt-8 mx-auto max-w-2xl flex items-center justify-center gap-2"
          method="POST"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-gray-600"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;
