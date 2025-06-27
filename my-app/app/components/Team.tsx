'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';
import { Cabin_Condensed } from 'next/font/google';

const mont = Cabin_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  email?: string;
  dribbble?: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  email?: string;
  bio?: string;
  image: string;
  socialMedia?: SocialMediaLinks;
  expertise?: string[];
};

export type TeamGrid3DProps = {
  title?: string;
  subtitle?: string;
  teamMembers: TeamMember[];
  className?: string;
};

export default function TeamGrid3D({
  title = 'We are Born For Technology',
  subtitle = '• Our awesome team',
  teamMembers,
  className,
}: TeamGrid3DProps) {
  const getSocialIcon = (type: string, url: string) => {
    const sharedClass = 'text-gray-400 transition-colors hover:text-white';
    switch (type) {
      case 'facebook':
        return <Link href={url} className={sharedClass}><Facebook size={18} /></Link>;
      case 'instagram':
        return <Link href={url} className={sharedClass}><Instagram size={18} /></Link>;
      case 'twitter':
        return <Link href={url} className={sharedClass}><Twitter size={18} /></Link>;
      case 'website':
        return <Link href={url} className={sharedClass}><Globe size={18} /></Link>;
      default:
        return null;
    }
  };

  return (
    <section className={cn('w-full py-16 text-white', className)}>
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <p className={cn('mb-2 text-sm font-medium tracking-wider', mont.className)}>
            {subtitle}
          </p>
          <h2 className={cn('mb-6 text-4xl font-bold leading-tight md:text-5xl', mont.className)}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-700">
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              {member.email && (
                <p className="mb-2 text-sm text-green-400">{member.email}</p>
              )}
              {member.bio && (
                <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
              )}
              <div className="mt-2 flex space-x-4">
                {member.socialMedia &&
                  Object.entries(member.socialMedia).map(
                    ([key, value]) => value && <span key={key}>{getSocialIcon(key, value)}</span>
                  )}
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
}
