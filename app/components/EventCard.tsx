// File: components/EventCard.tsx
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export type EventCardType = {
  title: string;
  description: string;
  src: string;
  
  
};

type Props = {
  events: EventCardType[];
};

export default function EventCard({ events }: Props) {
  const [active, setActive] = useState<EventCardType | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 grid place-items-center">
            <motion.div
              ref={ref}
              layoutId={`card-${active.title}-${id}`}
              className="w-full max-w-xl bg-white dark:bg-neutral-900 rounded-xl overflow-auto max-h-[90vh]"
            >
              <img
                src={active.src}
                alt={active.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-white">
                  {active.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {active.description}
                </p>
               
                
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <motion.div
            layoutId={`card-${event.title}-${id}`}
            key={event.title}
            onClick={() => setActive(event)}
            className="cursor-pointer bg-white/20  rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={event.src}
              alt={event.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {event.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
