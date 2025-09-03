import Image from 'next/image';
import { Github, Instagram, Linkedin,} from 'lucide-react';
import Link from 'next/link';
import { FaMedium } from "react-icons/fa";


const socialLinks = [
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/ieee.cismuj/' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/ieee-cis-muj' },
  { icon: Github, label: 'GitHub', url: 'https://github.com/IEEECISMUJ' },
  { icon: FaMedium, label: 'Medium', url: 'https://medium.com/@IEEE_CIS_MUJ' },
];

  const quickLinks = [
  { text: 'IEEE Official Website', href: 'http://www.ieee.org/' },
  { text: 'IEEE CIS Official Website', href: 'https://cis.ieee.org/' },
  { text: 'IEEE Xplore', href: 'http://ieeexplore.ieee.org/' },
  { text: 'IEEE Spectrum', href: 'http://spectrum.ieee.org/' },
];

const otherSocieties = [
  { text: 'IEEE SB MUJ', href: 'https://ieeemuj.com/' },
  { text: 'IEEE CS MUJ', href: 'https://cs.ieeemuj.com/' },
  { text: 'IEEE WIE MUJ', href: 'https://wie.ieeemuj.com/' },
  { text: 'Genesis', href: 'https://genesis.ieeemuj.com/' },
];

const contactInfo = [
  { text: 'Anshika Katare (Chairperson)' },
  { text: '7982553998' },
  { text: 'Yash Ramnani (Vice-Chairperson)' },
  { text: '6260716724' },
];

export default function Footer4Col() {
  return (
    <footer className="w-full place-self-end bg-gradient-to-br from-[#0a0f1a] via-[#101624] to-[#1a2233]">
      <div className="mx-auto max-w-screen-xl px-0 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* Left Column */}
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <Image
                src="/assets/ieeecislogo.png"
                alt="logo"
                width={100}
                  height={100}
              />
              <span className="text-white text-2xl font-semibold">IEEE CIS MUJ</span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-white/70 sm:max-w-xs sm:text-left">
              IEEE Computational Intelligence Society (CIS) MUJ is a student chapter of IEEE at Manipal University Jaipur.
            </p>

            {/* Social Links */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <li key={label}>
                  <Link
                    href={url}
                    className="text-white transition hover:text-[#64cdfa]"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {quickLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-white hover:text-[#1fb1ee] transition" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Other Societies</p>
              <ul className="mt-8 space-y-4 text-sm">
                {otherSocieties.map(({ text, href }) => (
                  <li key={text}>
                    <a className="text-white hover:text-[#1fb1ee] transition" href={href}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ text }) => (
                  <li key={text}>
                    <span className="flex-1 text-white/70">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white">All rights reserved.</p>
            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              &copy; 2025 IEEE CIS MUJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
