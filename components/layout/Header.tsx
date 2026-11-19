'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/team', label: 'People' },
  { href: '/media', label: 'Media & Highlights' },
  { href: '/spaces', label: 'Other Spaces' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FEF9F3]/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D5]'
          : 'bg-[#FEF9F3] border-b border-[#EDE4D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded">
              <Image
                src="/logos/chamber-mu.svg"
                alt="Chamber.MU Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl tracking-[0.2em] font-semibold text-[#0B0B0C] uppercase">
                CHAMBER<span className="text-[#A88B58]">.</span>MU
              </span>
              <span className="text-[10px] tracking-[0.25em] text-neutral-500 uppercase font-light">
                Advocates &amp; Legal Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.16em] transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#0B0B0C] font-semibold'
                      : 'text-neutral-600 hover:text-[#0B0B0C] font-normal'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A88B58]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium px-4 py-2 bg-[#0B0B0C] text-[#FEF9F3] hover:bg-neutral-800 transition-colors rounded-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A88B58]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FEF9F3] border-b border-[#E8E0D5] px-6 py-6 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-[0.18em] py-2 transition-colors border-b border-[#EDE4D8] ${
                    isActive
                      ? 'text-[#0B0B0C] font-semibold pl-2 border-l-2 border-l-[#A88B58]'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] font-medium py-3 bg-[#0B0B0C] text-[#FEF9F3] rounded-sm"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#A88B58]" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
