"use client";

import Link from 'next/link';
import Image from 'next/image';
import CURELogo from './images/CURE_logo.svg';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[#2D1E2F] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <div className="flex items-center space-x-2">
              <div>
                <Image src={CURELogo} alt="CURE Logo" className="w-8 h-8" width="24" height="24"/>
              </div>
              <span className="text-2xl font-bold">
                CURIE<span className="text-[#F64071] text-3xl pacifico-font font-normal">osity</span>
              </span>
            </div>
          </a>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`hover:text-pink-300 ${isActive('/') ? 'border-b-2 border-white' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-pink-300 ${isActive('/about') ? 'border-b-2 border-white' : ''}`}>
              About
            </Link>
            <div className="relative group">
              <Link href="/events" className={`flex items-center hover:text-pink-300 ${isActive('/events') ? 'border-b-2 border-white' : ''}`}>
                Events <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#2D1E2F] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/events/naturehacks" className="block px-4 py-2 text-sm hover:bg-pink-500/10">
                    NatureHacks
                  </Link>
                  <Link href="/events/launchlab" className="block px-4 py-2 text-sm hover:bg-pink-500/10">
                    LaunchLab
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/#contact" className="hover:text-pink-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
  );
}