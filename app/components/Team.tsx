'use client';
import {  Instagram, Twitter, Globe, Linkedin, Github
} from 'lucide-react';

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
  
}: TeamGrid3DProps) {
  const getSocialIcon = (type: string, url: string) => {
    const sharedClass = 'text-gray-400 transition-colors cursor-pointer hover:text-white';
    console.log(url);
    switch (type) {
  
    case "instagram":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={sharedClass}>
          <Instagram  size={18} />
        </a>
  
      );
    case "twitter":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={sharedClass}>
          <Twitter size={18} />
        </a>
      );
    case "website":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={sharedClass}>
          <Globe size={18} />
        </a>
      );
    case "linkedin":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={sharedClass}>
          <Linkedin size={18} />
        </a>
      );
    case "github":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={sharedClass}>
          <Github size={18} />
        </a>
      );
    default:
      return null;
    }
  };

  return (
    <section className='w-full py-6  text-white'>
      <div className="container mx-auto max-w-5xl px-4 text-center ">
     
        <div className="mb-12">

          <p className='mb-2 text-sm font-medium tracking-wider'>
            {subtitle}
          </p>
          <div className='mb-6 text-2xl font-bold leading-tight md:text-3xl'>
            {title}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-700">
                {/* eslint-disable @next/next/no-img-element */}
                 <img
                  src={member.image || 'placeholder.svg'}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              
              {member.role && (
                <p className="mb-4 text-sm text-gray-400">{member.role}</p>
              )}
              <div className="mt-2 flex justify-center space-x-4">
                {member.socialMedia &&
                  Object.entries(member.socialMedia).map(
                    ([key, value]) => value && <span key={key}>{getSocialIcon(key, value)
                   }
                    </span>
                    
                  )}
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
}
