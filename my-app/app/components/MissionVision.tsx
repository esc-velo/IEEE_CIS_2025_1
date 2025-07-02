'use client';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Layers, Palette, Zap } from 'lucide-react';
 
interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}
 
const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25 } },
  };
 
  return (
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-primary/10 bg-background px-6 pb-10 pt-6 shadow-md transition-all duration-500 hover:border-primary/30',
        className,
      )}
    >
      <div className="absolute -right-1/2 top-0 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
 
      <div className="absolute bottom-3 right-1 scale-[6] text-primary/5 transition-all duration-700 group-hover:scale-[6.2] group-hover:text-primary/10">
        {icon}
      </div>
 
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow shadow-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-primary/20">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="mt-4 flex items-center text-sm text-primary">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/30 blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};
 
const items = [
  {
    title: 'Know More About Us',
    description: 'Explore who we are, our mission, and how we thrive within MUJ.',
    icon: <Code className="size-6" />,
    size: 'large' as const,
    href: '/know-more',
  },
  {
    title: 'Join Now',
    description: 'Become a part of our vibrant community and contribute to exciting projects.',
    icon: <Layers className="size-6" />,
    size: 'small' as const,
    href: '/join',
  },
  {
    title: 'Meet Our Team at MUJ',
    description: 'Get to know the minds behind our initiatives and events.',
    icon: <Layers className="size-6" />,
   size: 'medium' as const,
    href: '/team',
  },
  {
    title: 'Events in MUJ',
    description: 'Stay updated on tech fests, workshops, and everything we host.',
    icon: <Palette className="size-6" />,
    size: 'medium' as const,
    href: '/events',
  },
  {
    title: 'FAQs',
    description: 'Find answers to common questions and understand how we operate.',
    icon: <Zap className="size-6" />,
   size: 'small' as const,
    href: '/faq',
  },
  {
    title: 'CIS Strategic Plan',
    description: 'Dive into our vision, long-term goals, and the roadmap to the future.',
    icon: <FileText className="size-6" />,
   size: 'large' as const,
    href: '/strategic-plan',
  },
];

export default function BentoGrid1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
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
            size={item.size}
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
 
 
