import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, ShieldCheck, HeartHandshake, Globe2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Chamber.MU Advocates',
  description:
    'Overview, purpose, and feminist constitutionalism values of Chamber.MU, an Indian law firm practicing across trial courts, High Courts, and the Supreme Court of India.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#FEF9F3]">
      {/* Page Header */}
      <section className="py-20 lg:py-24 border-b border-[#E8E0D5] bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              About Chamber.MU
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#0B0B0C] tracking-tight font-serif mb-6 leading-tight">
              A Full-Service Indian Law Firm Grounded in Constitutionalism.
            </h1>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              Practicing before all civil and criminal courts across India, including the Supreme Court of India, with a commitment to strategic feminist lawyering, social justice, and equality before the law.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section (2.1) */}
      <section className="py-20 border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-2">01 / OVERVIEW</span>
              <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">
                Chambers Profile &amp; National Jurisdiction
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
              <p>
                Chamber.MU is an Indian law firm with a unique practice in constitutional law, immigration law, international human rights and humanitarian law, international criminal law, and alternate dispute resolution mechanisms, including arbitration and mediation.
              </p>
              <p>
                As a full-service law firm, we handle civil and criminal litigations across all forums in India—from district courts and tribunals to the High Courts and the Supreme Court of India. Our advocates regularly appear in complex public interest litigations, appellate reviews, and cross-border commercial disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section (2.2) */}
      <section className="py-20 bg-[#FBF5EC] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-2">02 / OUR PURPOSE</span>
              <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">
                Synthesizing Domestic &amp; International Jurisprudence
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
              <p>
                Our work particularly focuses on understanding the blend of International law jurisprudence within the domestic constitutional law practice of India.
              </p>
              <div className="p-8 bg-[#FEF9F3] border-l-4 border-[#A88B58] border border-[#E7DFD5] rounded-r-md italic font-serif text-base sm:text-lg text-neutral-900 leading-relaxed">
                &ldquo;We aim to introduce some shades of brown in the international human rights, humanitarian law, and criminal law jurisprudence through locating these universal legal principles within the comparative constitutional law practice and policy advocacy within South Asia.&rdquo;
              </div>
              <p>
                By positioning universal principles of dignity, non-refoulement, and substantive equality into domestic litigation, we ensure that global human rights standards actively serve communities navigating local legal institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section (2.3) */}
      <section className="py-20 border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-2">03 / OUR VALUES</span>
              <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">
                Feminist Lawyering &amp; Representation Parity
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4 text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
                <p>
                  We are a team of feminist lawyers with staunch faith in constitutionalism. Our practice strives to achieve social justice and therefore <strong>we do not accept briefs that oppose equality and representation of any marginalised or disenfranchised community across the world.</strong>
                </p>
                <p>
                  We specialise in strategic feminist constitutional lawyering and provide the best available representation to each client irrespective of their social or economic status.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-white border border-[#E7DFD5] rounded-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#94753D]">
                    <HeartHandshake className="w-5 h-5" />
                    <h3 className="text-sm font-semibold text-[#0B0B0C] uppercase tracking-wider">
                      Equal Standards
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                    Our particular aim is to provide our marginalised and disenfranchised clients the same standard of legal representation that is afforded to affluent clients.
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#E7DFD5] rounded-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#94753D]">
                    <ShieldCheck className="w-5 h-5" />
                    <h3 className="text-sm font-semibold text-[#0B0B0C] uppercase tracking-wider">
                      Strategic Litigation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                    Selecting and advancing cases that build structural judicial precedent on liberty, habeas corpus, and anti-discrimination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5ECE0] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">
            Explore Chambers Expertise &amp; Team
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B0B0C] text-[#FEF9F3] text-xs uppercase tracking-widest rounded-sm hover:bg-neutral-800 transition-colors"
            >
              <span>Practice Areas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A88B58]" />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest rounded-sm hover:bg-[#FEF9F3] transition-colors"
            >
              <span>Chambers Members</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
