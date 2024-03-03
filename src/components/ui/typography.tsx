import { cn } from '@/lib/utils';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const H1: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight md:text-4xl lg:text-6xl text-gray-800',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-gray-800',
        className
      )}
    >
      {children}
    </h2>
  );
};
