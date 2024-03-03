import Image from 'next/image';
import Link from 'next/link';

export default function TicgetLogo() {
  return (
    <Link href="/" className="flex justify-center items-center overflow-hidden">
      {/* Logo Desktop */}
      <Image
        src="/logo.svg"
        width={50}
        height={50}
        className="hidden md:block object-contain"
        alt="Ticget Logo"
      />
      {/* Logo Mobile */}
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        className="block md:hidden object-contain"
        alt="Ticget Logo"
      />
    </Link>
  );
}
