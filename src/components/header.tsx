'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import TalentSourceLogo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Bars2Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Links = [
  { link: 'Home', href: '/' },
  { link: 'Find Job', href: '/jobs' },
  { link: 'Hire talent', href: '/hire' },
  { link: 'About', href: '/about' },
];
const callToActionLinks = [
  { link: 'Sign Up', href: '/signup' },
  { link: 'Log In', href: '/login' },
];

export default function Header() {
  const pathname = usePathname();

  const search = () => {
    console.log('Searching...');
  };

  // Hide Nav bar on scroll
  const [hideNavBar, setHideNavBar] = useState(false);

  useEffect(() => {
    let prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > prevScrollY && currentScrollY > window.innerHeight) {
        setHideNavBar(true);
      } else if (currentScrollY < prevScrollY) {
        setHideNavBar(false);
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed z-40 w-screen top-0 left-0 right-0 screen-gutter py-4 lg:py-6 bg-background/60 backdrop-blur-lg backdrop-filter',
        'transition-transform ease-in-out duration-300',
        hideNavBar ? 'translate-y-[-100%]' : 'translate-y-0'
      )}
    >
      {/* Navbar (Mobile) */}
      <nav className="lg:hidden w-full flex justify-between items-center">
        {/* Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Bars2Icon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="h-full w-full p-0">
            <div className="h-full w-full screen-gutter py-4 flex flex-col gap-6 overflow-y-auto">
              <div className="w-full flex justify-end">
                {/* Close Button */}
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <XMarkIcon className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex-1 flex flex-col justify-between items-center">
                {/* Logo */}
                <TalentSourceLogo />

                {/* Supporting Links */}
                <div>
                  <div className="flex flex-col items-center m-4 gap-4">
                    {Links.map((link) => (
                      <Button
                        variant="link"
                        asChild
                        key={link.href}
                        className={cn({
                          'text-primary': link.href === pathname,
                        })}
                      >
                        <Link href={link.href}>{link.link}</Link>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="w-full flex flex-col gap-2">
                  {callToActionLinks.map((link, index, arr) => (
                    <Button
                      variant={index === arr.length - 1 ? 'default' : 'outline'}
                      className="w-full"
                      asChild
                      key={link.href}
                    >
                      <Link href={link.href}>{link.link}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <TalentSourceLogo />

        {/* Search Button */}
        <Button variant="outline" size="icon" onClick={search}>
          <MagnifyingGlassIcon className="h-4 w-4" />
        </Button>
      </nav>

      {/* Navbar desktop */}
      <nav className="hidden lg:flex justify-between items-center">
        {/* Logo (Desktop) */}
        <TalentSourceLogo />

        {/* Supporting links (Desktop) */}
        <div className="shrink">
          <div className="flex items-center mx-4 gap-4">
            {Links.map((link) => (
              <Button
                variant="link"
                asChild
                key={link.href}
                className={cn({
                  'text-primary': link.href === pathname,
                })}
              >
                <Link href={link.href}>{link.link}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* CTA (Desktop)*/}
        <div className="flex gap-2">
          {callToActionLinks.map((link, index, arr) => (
            <Button
              variant={index === arr.length - 1 ? 'default' : 'outline'}
              asChild
              key={link.href}
            >
              <Link href={link.href}>{link.link}</Link>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}
