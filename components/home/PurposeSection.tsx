import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function PurposeSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF5EC] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Tag */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block">
              Our Ethos &amp; Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B0B0C] tracking-tight leading-snug font-serif">
              Locating Universal Legal Principles in South Asian Constitutionalism.
            </h2>
            <div className="w-12 h-0.5 bg-[#A88B58] mt-6 mb-6" />
            <p className="text-sm font-light text-neutral-600 leading-relaxed">
              We aim to introduce shades of brown in international human rights, humanitarian law, and criminal law jurisprudence through rigorous constitutional lawyering and policy advocacy.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[#0B0B0C] hover:text-[#94753D] transition-colors"
              >
                <span>Read Full Chambers Manifesto</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 bg-[#FEF9F3] border border-[#E7DFD5] rounded-lg space-y-4 shadow-sm">
              <h3 className="text-lg font-medium text-[#0B0B0C]">
                Feminist Constitutionalism &amp; Social Justice
              </h3>
              <p className="text-sm font-light text-neutral-700 leading-relaxed">
                We are a team of feminist lawyers with staunch faith in constitutionalism. Our practice strives to achieve social justice; therefore, we do not accept briefs that oppose equality and representation of any marginalised or disenfranchised community across the world.
              </p>
            </div>

            <div className="p-8 bg-[#FEF9F3] border border-[#E7DFD5] rounded-lg space-y-4 shadow-sm">
              <h3 className="text-lg font-medium text-[#0B0B0C]">
                Uncompromising Parity of Legal Representation
              </h3>
              <p className="text-sm font-light text-neutral-700 leading-relaxed">
                Our particular commitment is to provide our marginalised, disenfranchised, and displaced clients the exact same standard of rigorous, high-caliber legal representation that is afforded to affluent clients in corporate and commercial arenas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
