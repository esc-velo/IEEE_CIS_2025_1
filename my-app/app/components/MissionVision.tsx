'use client';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Layers, Palette, Zap } from 'lucide-react';
import Link from 'next/link';
 
interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;

  href:string;
}
 
const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  
 href,
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25 } },
  };
 
  return (
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#c8b4a0]  bg-gradient-to-br from-[#1a2233] via-[#101624] to-[#0a0f1a] px-6 pb-10 pt-6 shadow-md transition-all duration-500 hover:border-primary/30',
        className,
      )}
    >
      <div className="absolute -right-1/2 top-0 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#a0c8f05e_1px,transparent_1px),linear-gradient(to_bottom,#a0c8f05e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>


      <div className="absolute bottom-3 right-1 scale-[6] text-primary/5 transition-all duration-700 group-hover:scale-[6.2] group-hover:text-primary/10">
        {icon}
      </div>
 
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10  text-[#e6e1d7] shadow shadow-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-primary/20">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-primary         text-[#e6e1d7] font-semibold tracking-tight">{title}</h3>
          <p className="text-sm font-mono text-[#c8b4a0]">{description}</p>
        </div>
        <div className="mt-4 flex items-center text-sm text-primary">
          {href && (
  <Link href={href} className="mt-4 flex items-center text-sm text-primary group-hover:translate-x-1 transition-all duration-300">
    <span className="mr-1">Learn more</span>
    <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
  </Link>
)}
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
    
    href: '/know-more',
  },
  {
    title: 'Join Now',
    description: 'Become a part of our vibrant community and contribute to exciting projects.',
    icon: <Layers className="size-6" />,
    
    href: '/join',
  },
  {
    title: 'Meet Our Team at MUJ',
    description: 'Get to know the minds behind our initiatives and events.',
    icon: <Layers className="size-6" />,
   
    href: '/team',
  },
  {
    title: 'Events in MUJ',
    description: 'Stay updated on tech fests, workshops, and everything we host.',
    icon: <Palette className="size-6" />,
    
    href: '/events',
  },
  {
    title: 'FAQs',
    description: 'Find answers to common questions and understand how we operate.',
    icon: <Zap className="size-6" />,
   
    href: '/faq',
  },
  {
    title: 'CIS Strategic Plan',
    description: 'Dive into our vision, long-term goals, and the roadmap to the future.',
    icon: <FileText className="size-6" />,
   
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
  <div className="relative ">
    {/* Grid Overlay */}
   <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

{/*Floating Elements*/}

      <div className="floating-element" style={{ top: "25%", left: "15%", animationDelay: "5s" }}></div>
      <div className="floating-element" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}></div>
      <div className="floating-element" style={{ top: "40%", left: "10%", animationDelay: "6s" }}></div>
      <div className="floating-element" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}></div>
    {/* Content */}
    <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 text-[#e6e1d7] font-primary rounded-xl shadow-xl">
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
            className=""
          />
        ))}
      </motion.div>
    </div>
  </div>
);
}