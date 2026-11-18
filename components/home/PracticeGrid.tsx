import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const PRACTICE_AREAS = [
  {
    number: '01',
    title: 'Constitutional Law',
    desc: 'High-stakes constitutional challenges, writ petitions (Article 32 & 226), fundamental rights protections, and citizenship litigation before the Supreme Court and High Courts.',
    slug: 'constitutional-law',
  },
  {
    number: '02',
    title: 'Immigration Law',
    desc: 'Strategic defense before Foreigners Tribunals, deportation defense, statelessness documentation, passport & visa disputes, and foreign national rights advocacy.',
    slug: 'immigration-law',
  },
  {
    number: '03',
    title: 'International Human Rights Law',
    desc: 'Transnational human rights litigation, defense of marginalized communities, universal jurisdiction applications, and coordination with global human rights bodies.',
    slug: 'human-rights-law',
  },
  {
    number: '04',
    title: 'International Humanitarian Law',
    desc: 'Application of Geneva Conventions, protection of displaced populations, non-refoulement principles, and armed conflict legal frameworks.',
    slug: 'humanitarian-law',
  },
  {
    number: '05',
    title: 'Asylum & Refugee Law',
    desc: 'Landmark habeas corpus filings, protection from unlawful detention, access to healthcare and education for refugees, and representation of displaced families.',
    slug: 'refugee-law',
  },
  {
    number: '06',
    title: 'International Criminal Law',
    desc: 'Crimes against humanity jurisprudence, accountability mechanisms, custodial violence prosecutions, and state compliance with customary international law.',
    slug: 'international-criminal-law',
  },
  {
    number: '07',
    title: 'Criminal Law & Defense',
    desc: 'Trial court representations, bail hearings, appeals, defense against state overreach, and legal aid in custodial and unlawful detention proceedings.',
    slug: 'criminal-law',
  },
  {
    number: '08',
    title: 'Civil & Commercial Law',
    desc: 'Full-service civil litigation, property disputes, contract enforcement, and commercial matters across district courts and appellate benches.',
    slug: 'civil-law',
  },
  {
    number: '09',
    title: 'Labour & Employment Law',
    desc: 'Advocating for fair wages, protection of unorganized & informal workers, workplace discrimination claims, and employment disputes.',
    slug: 'labour-law',
  },
  {
    number: '10',
    title: 'Alternate Dispute Resolution (ADR)',
    desc: 'Domestic and international commercial arbitration, institutional mediation, and conciliation incorporating human rights and contract principles.',
    slug: 'adr',
  },
];

export default function PracticeGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#FEF9F3] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              Areas of Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B0B0C] tracking-tight font-serif">
              Our Practice Areas &amp; Jurisdictions
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-neutral-800 hover:text-black transition-colors"
          >
            <span>Explore All Practice Details</span>
            <ArrowUpRight className="w-4 h-4 text-[#A88B58]" />
          </Link>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((item) => (
            <div
              key={item.number}
              className="p-8 bg-white border border-[#E7DFD5] hover:border-neutral-900 transition-all duration-300 rounded-sm group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-4">
                  {item.number}
                </span>
                <h3 className="text-lg font-medium text-[#0B0B0C] group-hover:text-[#94753D] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2ECE3] flex items-center justify-between text-xs font-medium text-neutral-500 group-hover:text-black">
                <span className="uppercase tracking-wider text-[11px]">View Area</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
