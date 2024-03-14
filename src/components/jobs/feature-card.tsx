import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { H2 } from '@/components/ui/typography';
import { FadeIn } from '@/components/transitions';
import { cn } from '@/lib/utils';

interface Props {
  feature: string;
  desc: string;
  imgSrc: string;
  Icon: any;
  reversed?: boolean;
}

const FeatureCard: React.FC<Props> = ({
  feature,
  desc,
  imgSrc,
  Icon,
  reversed = false,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4">
      {/* Image */}
      <div
        className={cn(
          'relative p-5 w-full lg:h-full flex justify-center items-center',
          { 'lg:order-1': reversed }
        )}
      >
        <div className="-z-10 absolute -top-1/4 right-1/4 translate-y-1/4 translate-x-1/4 bg-background bg-dot-black/[0.5] h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96"></div>
        <div className="-z-10 absolute -top-1/4 left-1/4 translate-y-2/4 -translate-x-1/4 bg-background bg-dot-black/[0.5] h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96"></div>
        <FadeIn from={reversed ? 'right' : 'left'}>
          <div className="bg-slate-100 h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-xl lg:rounded-3xl overflow-hidden">
            <img
              src={imgSrc}
              alt={feature}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
      {/* Content */}
      <FadeIn>
        <div
          className={cn(
            'self-center h-full flex flex-col items-center lg:items-start lg:justify-center text-center lg:text-left',
            reversed ? 'lg:pl-16' : 'lg:pr-16'
          )}
        >
          <Icon className="h-10 w-10 text-primary mb-2" />
          <H2>{feature}</H2>
          <p className="mt-6 leading-6 md:text-lg md:leading-8">{desc}</p>
          {/* <Button className="mt-8" asChild>
            <Link
              href="/signup"
              className="text-primary flex gap-1 justify-center items-center"
            >
              Get Started
            </Link>
          </Button> */}
        </div>
      </FadeIn>
    </div>
  );
};

export default FeatureCard;
