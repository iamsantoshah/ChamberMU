import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Scale, Award, Globe, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FEF9F3] pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#E8E0D5]">
      {/* Subtle background ornament */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 opacity-5 pointer-events-none">
        <Image
          src="/logos/chamber-mu-emblem.svg"
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-800 bg-[#F3ECE0] border border-[#E2D6C2] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A88B58]" />
            New Delhi • Coimbatore • England
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0B0B0C] tracking-tight leading-[1.15] mb-8 font-serif">
            Strategic client-centric legal services.{' '}
            <span className="font-sans font-light text-neutral-600 block text-2xl sm:text-3xl lg:text-4xl mt-3">
              Where we prioritise your voice and concerns being heard and seen before everything else.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed max-w-3xl mb-10">
            Chamber.MU is an Indian law firm with an exceptional practice in constitutional litigation, immigration law, international human rights and humanitarian law, international criminal law, and alternate dispute resolution. We represent clients across all trial courts, High Courts, and the Supreme Court of India.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B0B0C] text-[#FEF9F3] hover:bg-neutral-800 transition-colors text-xs uppercase tracking-[0.16em] font-medium rounded-sm shadow-sm"
            >
              <span>Our Practice Areas</span>
              <ArrowRight className="w-4 h-4 text-[#A88B58]" />
            </Link>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#0B0B0C] text-[#0B0B0C] hover:bg-[#F3EBE0] transition-colors text-xs uppercase tracking-[0.16em] font-medium rounded-sm"
            >
              <span>Meet the Advocates</span>
            </Link>
          </div>
        </div>

        {/* Pillars Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[#E8E0D5]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 font-medium">
              <Scale className="w-4 h-4 text-[#A88B58]" />
              <span>Jurisdiction</span>
            </div>
            <p className="text-sm font-normal text-neutral-900">
              Supreme Court of India &amp; High Courts
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 font-medium">
              <Shield className="w-4 h-4 text-[#A88B58]" />
              <span>Core Ethos</span>
            </div>
            <p className="text-sm font-normal text-neutral-900">
              Feminist Constitutional Lawyering
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 font-medium">
              <Globe className="w-4 h-4 text-[#A88B58]" />
              <span>Perspective</span>
            </div>
            <p className="text-sm font-normal text-neutral-900">
              South Asian &amp; International Jurisprudence
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500 font-medium">
              <Award className="w-4 h-4 text-[#A88B58]" />
              <span>Recognition</span>
            </div>
            <p className="text-sm font-normal text-neutral-900">
              Nottingham Alumni Award &amp; CLPR Fellows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
