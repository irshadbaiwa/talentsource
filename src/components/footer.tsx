import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Logo from '@/components/ui/logo';

const contactAddress = 'No.1 Address Street, City, State, Country.';
const contactInfo = [
  {
    info: '+234-900-0000-000',
    icon: PhoneIcon,
    link: '#',
  },
  {
    info: 'mail@example.com',
    icon: EnvelopeIcon,
    link: '#',
  },
];
const footerLinks = [
  { name: 'Home', link: '/' },
  { name: 'Find Job', link: '/jobs' },
  { name: 'Hire Talent', link: '/hire' },
  { name: 'About', link: '/about' },
];

const Footer: React.FC = () => {
  return (
    <footer className="screen-gutter bg-slate-50">
      <div className="pt-8 sm:pt-16 pb-4 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] overflow-hidden gap-3">
          {/* Logo */}
          <div className="flex flex-col gap-1 items-start max-w-xs mx-2 my-4 md:mx-4 md:my-6 lg:m-8">
            <Logo />
            <p className="mt-2 text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id
              Molestias facilis fuga illo voluptatibus odit, consequuntur libero
              beatae magnam ex deserunt!
            </p>
          </div>
          {/* endblock */}

          <div className="flex flex-col sm:flex-row flex-wrap overflow-hidden gap-3">
            {/* Contact */}
            <div className="max-w-xs m-2 md:m-4 lg:m-8 flex flex-col items-start gap-2 text-sm lg:text-base">
              <h4 className="font-bold">Contact</h4>
              <p>{contactAddress}</p>
              <ul className="flex flex-col items-start gap-2">
                {contactInfo.map((item) => (
                  <li key={item.info}>
                    <Link
                      href={item.link}
                      className="flex flex-row items-center"
                    >
                      <item.icon className="h-5 w-5 text-supporting mr-1 md:mr-2" />
                      <span>{item.info}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* endblock */}

            {/* Links */}
            <div className="max-w-xs m-2 md:m-4 lg:m-8 text-sm lg:text-base">
              <h4 className="font-bold">Links</h4>
              <ul className="mt-2 flex flex-col items-start gap-2">
                {footerLinks.map((link) => (
                  <li key={link.link}>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* endblock */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
