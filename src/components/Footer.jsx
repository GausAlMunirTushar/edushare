import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 px-4 sm:px-0">
        <div className="col-span-4">
          <Image src="/logo.svg" alt="logo" width={140} height={40} />
          <p className="text-primary mt-3">
            Our motto to fulfill customer demand by making them satisfied with
            growing their business.
          </p>
        </div>
        <div className="col-span-3">
          <h2 className="text-secondary text-2xl mb-4">About</h2>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3 justify-end">
          <h2 className="text-secondary text-2xl mb-4">Support</h2>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="text-secondary text-2xl mb-4">Get our app</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
