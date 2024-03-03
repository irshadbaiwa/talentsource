import Link from 'next/link';
import { Input } from '@/components/ui/input';
import TicgetLogo from '@/components/ui/logo';
import { H2 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log In',
};

export default function LogIn() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Side Image (Desktop) */}
      <div className="hidden lg:block bg-slate-100">
        <img src="/office.jpg" className="h-full w-full object-cover" />
      </div>
      {/* Main */}
      <main className="bg-background">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {/* Heading */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* Logo */}
            <TicgetLogo />
            <H2 className="mt-10 text-center">Log in to your account</H2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* Log in form */}
            <form className="space-y-6" action="#" method="POST">
              <div>
                {/* Email */}
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  {/* Password */}
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link href="#" className="font-semibold text-primary">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              <div>
                {/* Log In */}
                <Button type="submit" className="w-full">
                  Log In
                </Button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-supporting">
              Don't have an account? {/* Signup link */}
              <Link href="/signup" className="font-semibold text-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
