import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';

export default function PartnersSpotlight() {
  return (
    <section className="py-20 lg:py-28 bg-[#FEF9F3] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              Chambers Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B0B0C] tracking-tight font-serif">
              The Partners
            </h2>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-neutral-800 hover:text-black transition-colors"
          >
            <span>View All Chambers Members</span>
            <ArrowRight className="w-4 h-4 text-[#A88B58]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Partner 1: Mayurapriyan Thangavel */}
          <div className="bg-white border border-[#E7DFD5] rounded-sm overflow-hidden flex flex-col justify-between group shadow-sm">
            <div>
              <div className="relative h-80 w-full bg-neutral-100 overflow-hidden">
                <Image
                  src="/images/team/mayurapriyan-thangavel.jpg"
                  alt="Mayurapriyan Thangavel"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0B0B0C]/85 text-[#FEF9F3] text-[11px] uppercase tracking-widest font-medium rounded-sm">
                    Partner
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-[#0B0B0C]">
                    Mayurapriyan Thangavel, Advocate
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#94753D] font-medium mt-1">
                    Feminist Constitutional Law &amp; Strategic Litigation
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                  Specializes in representing marginalized, Dalit, Bahujan, tribal, and refugee communities. Led constitutional challenges to the Citizenship Amendment Act (CAA) before the Supreme Court of India. Nominated UN CSW delegate, legal columnist, artist, and theatre actor.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-600">
                  <span className="px-2.5 py-1 bg-[#FBF5EC] rounded border border-[#EBE3D8]">
                    Supreme Court of India
                  </span>
                  <span className="px-2.5 py-1 bg-[#FBF5EC] rounded border border-[#EBE3D8]">
                    Symbiosis Law (2017)
                  </span>
                  <span className="px-2.5 py-1 bg-[#FBF5EC] rounded border border-[#EBE3D8]">
                    UN CSW 2025 Delegate
                  </span>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2">
              <Link
                href="/team#mayurapriyan"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#0B0B0C] group-hover:text-[#94753D] transition-colors"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Partner 2: Ujjaini Chatterji */}
          <div className="bg-white border border-[#E7DFD5] rounded-sm overflow-hidden flex flex-col justify-between group shadow-sm">
            <div>
              <div className="relative h-80 w-full bg-neutral-100 overflow-hidden">
                <Image
                  src="/images/team/ujjaini-chatterji.jpg"
                  alt="Ujjaini Chatterji"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0B0B0C]/85 text-[#FEF9F3] text-[11px] uppercase tracking-widest font-medium rounded-sm">
                    Partner
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-[#0B0B0C]">
                    Ujjaini Chatterji, Advocate
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#94753D] font-medium mt-1">
                    Human Rights, Refugee Law &amp; Constitutional Defense
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                  Specializes in refugee rights, statelessness, and feminist lawyering. Argued landmark cases including <em>Sabera Khatoon v. Union of India</em> affirming refugee healthcare and protection against indefinite detention. CLPR Constitution Defender Fellow and recipient of the 2026 Nottingham Alumni Award.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-600">
                  <span className="px-2.5 py-1 bg-[#FBF5EC] rounded border border-[#EBE3D8]">
                    LL.M. Univ of Nottingham
                  </span>
                  <span className="px-2.5 py-1 bg-[#FBF5EC] rounded border border-[#EBE3D8]">
                    CLPR Fellow (2024-2026)
                  </span>
                  <span className="px-2.5 py-1 bg-[#FBF5EC] rounded border border-[#EBE3D8]">
                    Nottingham Alumni Award 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2">
              <Link
                href="/team#ujjaini"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#0B0B0C] group-hover:text-[#94753D] transition-colors"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
