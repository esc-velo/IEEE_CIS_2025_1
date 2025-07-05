'use client';
 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

 
interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}
 
function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className={cn(
        'group rounded-lg border border-border/60',
        'transition-all duration-200 ease-in-out',
        isOpen ? 'bg-card/30 shadow-sm' : 'hover:bg-card/50',
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            'text-left text-base font-medium transition-colors duration-200',
            'text-foreground/80',
            isOpen && 'text-foreground',
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={cn(
            'shrink-0 rounded-full p-0.5',
            'transition-colors duration-200',
            isOpen ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-t border-border/40 px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
 
export default function Faq3() {
  const faqs: Omit<FAQItemProps, 'index'>[] = [
  {
    question: 'What is CIS?',
    answer:
      'CIS stands for the IEEE Computational Intelligence Society. It promotes research and innovation in intelligent systems inspired by nature and the brain.',
  },
  {
    question: 'How can I join CIS?',
    answer:
      'You can join CIS by becoming an IEEE member and selecting CIS as your preferred society. Visit ieee.org/join to start the process.',
  },
  {
    question: 'What is Computational Intelligence (CI)?',
    answer:
      'CI involves nature-inspired computing methods like neural networks, fuzzy logic, and evolutionary algorithms for solving real-world problems.',
  },
  {
    question: 'What are Neural Networks?',
    answer:
      'Neural networks are models inspired by the human brain that learn from data. They power modern AI, including deep learning systems.',
  },
  {
    question: 'What are Fuzzy Systems?',
    answer:
      'Fuzzy systems mimic human reasoning by handling uncertainty and imprecise information in tasks like control and decision-making.',
  },
  {
    question: 'What is Evolutionary Computation?',
    answer:
      'It uses evolution-based techniques like genetic algorithms and swarm intelligence to find optimized solutions to complex problems.',
  },
  {
    question: 'What is CIS’s Mission?',
    answer:
      'To drive progress in computational intelligence and support innovation that benefits humanity and the natural world.',
  },
  {
    question: 'What is CIS’s Vision?',
    answer:
      'To be the leading society for knowledge and collaboration in computational intelligence to solve global challenges.',
  },
  {
    question: 'What is CIS’s Field of Interest?',
    answer:
      'CIS covers neural networks, fuzzy systems, evolutionary algorithms, cognitive systems, and other intelligent computing approaches.',
  },
  {
    question: 'What are CIS’s Core Values?',
    answer:
      'Community, integrity, diversity, service, partnerships, growth, and human well-being guide all CIS efforts and goals.',
  },
];

 
  return (
    <section className="relative w-full overflow-hidden  py-6 mt-30">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full  blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full  blur-3xl" />
 
      <div className="container relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
         
 
          <h2 className=' text-4xl py-6 font-bold leading-tight md:text-5xl'>Frequently Asked Questions </h2>
          
        </motion.div>
 
        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
 
        
      </div>
    </section>
  );
}
 