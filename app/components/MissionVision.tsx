'use client';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, FileText, Layers, Palette, Zap } from 'lucide-react';
 
interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}
 
const BentoGridItem = ({
  title,
  description,
  icon,
  href,
  className,
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 25 } },
  };
 
  return (
    <motion.div
      variants={variants}
      className={cn(
        // fixed border + bg + shadow
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#1fb1ee33] bg-[#060607] px-6 pb-10 pt-6 shadow-md shadow-[#1fb1ee33] transition-all duration-500 hover:border-[#1fb1ee80]',
        className,
      )}
    >
      {/* background grid pattern (fixed) */}
      <div className="absolute -right-1/2 top-0 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#c8b4a0_1px,transparent_1px),linear-gradient(to_bottom,#c8b4a0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
 
      {/* background faded icon */}
      <div className="absolute bottom-3 right-1 scale-[6] text-[#1fb1ee0d] transition-all duration-700 group-hover:scale-[6.2] group-hover:text-[#1fb1ee1a]">
        {icon}
      </div>
 
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {/* top icon bubble */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1fb1ee1a] text-[#1fb1ee] shadow shadow-[#1fb1ee1a] transition-all duration-500 group-hover:bg-[#1fb1ee33] group-hover:shadow-[#1fb1ee33]">
            {icon}
          </div>

          {/* title + description locked to white */}
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-sm text-white">{description}</p>
        </div>

        {/* link locked to accent color */}
        <Link href={href} className="group mt-4 inline-flex items-center text-sm text-[#1fb1ee] hover:text-[#63cfff]">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </Link>
      </div>

      {/* bottom glowing gradient line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#1fb1ee] to-[#1fb1ee4d] blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};
 
const items = [
  {
    title: 'Know More About Us',
    description: 'Explore who we are, our mission, and how we thrive within MUJ.',
    icon: <Code className="size-6 text-[#1fb1ee]" />,
    size: 'large' as const,
    href: '/knowmore',
  },
  {
    title: 'Join Now',
    description: 'Become a part of our vibrant community and contribute to exciting projects.',
    icon: <Layers className="size-6 text-[#1fb1ee]" />,
    size: 'small' as const,
    href: 'https://cis.ieee.org/activities/membership-activities/join-renew',
  },
  {
    title: 'Meet Our Team at MUJ',
    description: 'Get to know the minds behind our initiatives and events.',
    icon: <Layers className="size-6 text-[#1fb1ee]" />,
    size: 'medium' as const,
    href: '/team',
  },
  {
    title: 'Events in MUJ',
    description: 'Stay updated on tech fests, workshops, and everything we host.',
    icon: <Palette className="size-6 text-[#1fb1ee]" />,
    size: 'medium' as const,
    href: '/events',
  },
  {
    title: 'FAQs',
    description: 'Find answers to common questions and understand how we operate.',
    icon: <Zap className="size-6 text-[#1fb1ee]" />,
    size: 'small' as const,
    href: '/faq',
  },
  {
    title: 'CIS Strategic Plan',
    description: 'Dive into our vision, long-term goals, and the roadmap to the future.',
    icon: <FileText className="size-6 text-[#1fb1ee]" />,
    
   size: 'large' as const,
    href: 'https://cis.ieee.org/images/files/Documents/IEEE_CIS_Strategic_Plan_2023-2025.pdf',
  },
];
 
export default function BentoGrid1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
 
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
            className={cn(
              item.size === 'large'
                ? 'col-span-4'
                : item.size === 'medium'
                ? 'col-span-3'
                : 'col-span-2',
              'h-full',
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}

 
