import {
  
  
 
  Github,
  Instagram,
  
  Linkedin,
 
} from 'lucide-react';
import Link from 'next/link';
 
const socialLinks = [

  
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
 
  { icon: Github, label: 'GitHub' },
  
];
 
const quickLinks = [
  
  { text: 'IEEE Official Website', href: 'http://www.ieee.org/' },
  { text: 'IEEE CIS Official Website', href: 'https://cis.ieee.org/' },
  { text: 'IEEE Xplore', href: 'http://ieeexplore.ieee.org/' },
   { text: 'IEEE Spectrum', href: 'http://spectrum.ieee.org/' },
];
 
const otherSocities = [
  { text: 'IEEE SB MUJ ', href: '#' },
  { text: 'IEEE CS MUJ ', href: '#' },
  { text: 'IEEE WIE MUJ', href: '#' },
  { text: 'Genesis', href: '#' },
];
 

 
const contactInfo = [
  {  text: 'Anshika Katare (Chairperson) ' },
  
  { text: '8171653743 ' },
   { text: 'Yash Ramnani (Vice-Chairperson) ' },
  
  {  text: '8171653743' },
];
 
export default function Footer4Col() {
  return (
    <footer className=" w-full place-self-end rounded-t-xl bg-gradient-to-br from-[#0a0f1a] via-[#101624] to-[#1a2233]">
         
      <div className="mx-auto max-w-screen-xl px-0 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-2 text-primary sm:justify-start">
              <img
                src="/assets/ieeecislogo.png"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-primary from-foreground via-rose-200 to-primary bg-clip-text text-2xl font-semibold text-transparent dark:bg-gradient-to-b">
                IEEE CIS MUJ
              </span>
            </div>
 
            <p className="mt-6 max-w-md text-center leading-relaxed text-foreground/50 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
 
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-primary transition hover:text-primary/80"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>
 
              <ul className="mt-8 space-y-4 text-sm">
                {quickLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
 
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Other Socities</p>
 
              <ul className="mt-8 space-y-4 text-sm">
                {otherSocities.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
 
            
 
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
 
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ text }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      
                        <span className="flex-1 text-secondary-foreground/70 transition">
                          {text}
                        </span>
                      
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
 
        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>
 
            <p className="text-secondary-foreground/70-foreground mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 IEEE CIS MUJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
 