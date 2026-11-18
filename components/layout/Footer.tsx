'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const triggerDisclaimer = () => {
    window.dispatchEvent(new CustomEvent('open-bci-disclaimer'));
  };

  return (
    <footer className="bg-[#141517] text-[#EDE8E1] border-t border-neutral-800">
      {/* Top Banner / Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded overflow-hidden">
                <Image
                  src="/logos/chamber-mu-transparent.svg"
                  alt="Chamber.MU"
                  fill
                  className="object-contain invert"
                />
              </div>
              <span className="text-xl tracking-[0.25em] font-semibold text-white uppercase">
                CHAMBER<span className="text-[#C6A870]">.</span>MU
              </span>
            </div>
            <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-md">
              A full-service Indian law firm specializing in constitutional law, immigration, international human rights, and humanitarian law. Anchoring strategic feminist constitutional lawyering to deliver equal representation before all Indian courts.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/thechamber.mu?igsi=MXd5djlwajhyMWk4bQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[#C6A870] hover:text-white transition-colors"
              >
                Instagram ↗
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href="https://x.com/thechambermu?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[#C6A870] hover:text-white transition-colors"
              >
                X / Twitter ↗
              </a>
            </div>
          </div>

          {/* Practice & Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-light text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Chambers
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white transition-colors">
                  Practice Areas &amp; ADR
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Advocates &amp; Researchers
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white transition-colors">
                  Media &amp; Landmark Litigations
                </Link>
              </li>
              <li>
                <Link href="/spaces" className="hover:text-white transition-colors">
                  Allied Initiatives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300">
              Chambers &amp; Offices
            </h4>
            <div className="space-y-3 text-xs font-light text-neutral-400 leading-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A870] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-neutral-200">Delhi Chambers:</strong>
                  <br />
                  20/3 Nizamuddin East Market, Nizamuddin East, New Delhi – 110013
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A870] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-neutral-200">Coimbatore Chambers:</strong>
                  <br />
                  Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore – 641017
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A870] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-neutral-200">England Chapter:</strong>
                  <br />
                  International Human Rights Research &amp; Legal Consultancies
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800 space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C6A870]" />
                  <a href="tel:+918860799513" className="hover:text-white transition-colors">
                    +91 88607 99513
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C6A870]" />
                  <a href="mailto:thechamber.mu@gmail.com" className="hover:text-white transition-colors">
                    thechamber.mu@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs font-light text-neutral-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Chamber.MU Advocates &amp; Legal Consultants. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={triggerDisclaimer}
            className="hover:text-neutral-300 underline underline-offset-4 flex items-center gap-1.5 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#C6A870]" />
            Bar Council of India Disclaimer
          </button>
        </div>
      </div>
    </footer>
  );
}
