import Link from 'next/link';
import { Input } from '@/components/ui/input';
import TicgetLogo from '@/components/ui/logo';
import { H2 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account',
};

export default function SignUp() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Side Image (Desktop) */}
      <div className="hidden lg:block bg-slate-100">
        <img src="/signup.jpg" className="h-screen w-full object-cover" />
      </div>
      {/* Main */}
      <main className="bg-background overflow-y-scroll">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {/* Heading */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* Logo */}
            <TicgetLogo />
            <H2 className="mt-10 text-center">Create account</H2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* Sign up form */}
            <form className="space-y-6" action="#" method="POST">
              <div>
                {/* Full Name */}
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <Input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

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
                {/* Password */}
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
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
                {/* Confirm Password */}
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <Input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              <div>
                {/* Agree to T&C */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Agree{' '}
                    <Link href="#" className="text-primary">
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </div>

              <div>
                {/* Sign up */}
                <Button type="submit" className="w-full">
                  Create account
                </Button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-supporting">
              Already have an account? {/* Login link */}
              <Link href="/login" className="font-semibold text-primary">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
