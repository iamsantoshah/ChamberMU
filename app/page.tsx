import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Hero from '@/components/home/Hero';
import PurposeSection from '@/components/home/PurposeSection';
import PracticeGrid from '@/components/home/PracticeGrid';
import MilestoneTimeline from '@/components/home/MilestoneTimeline';
import PartnersSpotlight from '@/components/home/PartnersSpotlight';
import PressLogos from '@/components/home/PressLogos';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <PurposeSection />
      <PracticeGrid />
      <MilestoneTimeline />
      <PartnersSpotlight />
      <PressLogos />

      {/* Pre-Footer Action Banner */}
      <section className="py-20 bg-[#0B0B0C] text-[#FEF9F3] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A870] font-medium block">
            Engage the Chambers
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif tracking-tight text-white">
            Committed to Rigorous, Strategic Legal Representation.
          </h2>
          <p className="text-sm font-light text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Whether representing marginalized communities in constitutional matters or navigating cross-border dispute resolutions, Chamber.MU brings relentless dedication to every brief.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FEF9F3] text-[#0B0B0C] hover:bg-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
            >
              <span>Contact Chambers</span>
              <ArrowUpRight className="w-4 h-4 text-[#A88B58]" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-neutral-700 text-[#FEF9F3] hover:border-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-colors"
            >
              <span>View Practice Areas</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
