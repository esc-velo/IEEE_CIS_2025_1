"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-white text-xl font-bold">
  <Link href="/">
    <Image
      src="/assets/ieeecis1.png"
      alt="Logo"
      width={165}
      height={120}
    />
  </Link>
</div>

      {/* Hamburger + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-5 text-white "
        >
          <span className="block h-0.5 bg-white" />
          <span className="block h-0.5 bg-white" />
          <span className="block h-0.5 bg-white" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute right-0 mt-3 w-56 bg-gradient-to-br from-[#1a1a2e]/50 via-[#2c2b4b]/30 to-[#3c3c5c]/20 backdrop-blur-xl



 rounded-xl shadow-lg text-white text-md overflow-hidden animate-fade-in"
          >
            {/* Close button */}
            <div className="flex justify-end px-4 pt-3">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col pb-2">
              <Link href="/" className="px-4 py-3 hover:bg-white/10">
                Home
              </Link>
              
              <Link href="https://cis.ieee.org/activities/membership-activities/join-renew" className="px-4 py-3 hover:bg-white/10">
                Join Now
              </Link>
              <Link href="/knowmore" className="px-4 py-3 hover:bg-white/10">
                Know More 
              </Link>
              <Link href="/team" className="px-4 py-3 hover:bg-white/10">
                Team
              </Link>
              <Link href="/events" className="px-4 py-3 hover:bg-white/10">
                Events
              </Link>
              <Link href="/blogs" className="px-4 py-3 hover:bg-white/10">
                Blogs
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
