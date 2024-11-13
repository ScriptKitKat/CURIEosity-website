"use client";

import Link from 'next/link';
import Image from 'next/image';
import CURELogo from './images/CURE_logo.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[#2D1E2F] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div>
              <Image src={CURELogo} alt="CURE Logo" className="w-8 h-8" width="24" height="24"/>
            </div>
            <span className="text-2xl font-bold">
              CURIE<span className="text-pink-500">osity</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`hover:text-pink-300 ${isActive('/') ? 'border-b-2 border-white' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-pink-300 ${isActive('/about') ? 'border-b-2 border-white' : ''}`}>
              About
            </Link>
            <Link href="/events" className={`hover:text-pink-300 ${isActive('/events') ? 'border-b-2 border-white' : ''}`}>
              Events
            </Link>
            <Link href="/#contact" className="hover:text-pink-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
  );
}