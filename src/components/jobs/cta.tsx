import React from 'react';
import Link from 'next/link';
import { H2 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const GetStarted: React.FC = () => {
  return (
    <section className="screen-gutter py-16 sm:py-20">
      <div className="mx-auto max-w-5xl rounded-xl md:rounded-3xl py-12 md:py-16 px-4 md:px-10 bg-slate-50 border flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <div className="text-center md:text-left">
          <H2>Ready to dive in?</H2>
          <H2>Create your profile today.</H2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button asChild>
            <Link href="/signup">Get started</Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              href="/about"
              className="text-primary flex gap-1 justify-center items-center"
            >
              Learn More
              <ChevronRightIcon className="h-5 w-5 text-inherit" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
