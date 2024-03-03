'use client';

import { useEffect } from 'react';
import { motion, useAnimation, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeProps {
  from?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  offset?: number;
  animateOnce?: boolean;
}
type Props = FadeProps & MotionProps;

export const FadeIn: React.FC<Props> = ({
  from = 'bottom',
  delay = 0.2,
  offset = 20,
  animateOnce = true,
  children,
}) => {
  const POSITION = {
    top: { x: 0, y: -offset },
    bottom: { x: 0, y: offset },
    left: { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
  };

  const [ref, inView] = useInView();
  const control = useAnimation();
  const variant = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, ...POSITION[from] },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      if (!animateOnce) {
        control.start('hidden');
      }
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
