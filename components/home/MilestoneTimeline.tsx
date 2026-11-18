import React from 'react';
import Link from 'next/link';
import { ExternalLink, Milestone, CheckCircle2 } from 'lucide-react';

export const MILESTONES = [
  {
    year: '2026',
    title: 'University of Nottingham Alumni Award',
    desc: 'Ujjaini Chatterji honored with the "Your Nottingham Alumni Award" for her landmark contributions as an advocate and international human rights lawyer supporting displaced and refugee communities.',
    tag: 'International Recognition',
    link: 'https://clpr.org.in/blog/meet-our-new-constitution-defender-fellows/',
  },
  {
    year: '2024 – 2026',
    title: 'Constitution Defenders Fellowship (CLPR)',
    desc: 'Awarded the prestigious Constitution Defenders Fellowship by the Centre for Law and Policy Research (CLPR), actively pursuing strategic constitutional litigation for bonded labourers, stateless persons, and asylum seekers.',
    tag: 'Fellowship & Research',
    link: 'https://clpr.org.in/blog/meet-our-new-constitution-defender-fellows/',
  },
  {
    year: '2023 – 2025',
    title: 'Landmark Supreme Court & High Court Litigations',
    desc: 'Direct representation before Foreigners Tribunals in Assam impacting 1.9 million stateless individuals. Argued landmark petitions in Delhi High Court and Supreme Court of India on unlawful detention, custodial disappearance, and fundamental right to healthcare (Sabera Khatoon v. Union of India).',
    tag: 'Supreme Court & High Courts',
    link: 'https://theprint.in/india/delhi-hc-directs-joint-inspection-of-rohingya-detention-centre-over-alleged-lack-of-facilities/1366548/?amp',
  },
  {
    year: '2022',
    title: 'Founding of Chamber.MU & International Consultancies',
    desc: 'Established Chamber.MU as a premier feminist constitutional law firm. Independent consultancy on human rights research for international organizations across England, Bangladesh, and South Asia.',
    tag: 'Chambers Heritage',
  },
  {
    year: '2019',
    title: 'Trial Courts & Bombay High Court Advocacy',
    desc: 'Trial court and High Court defense securing the release of over 200 peaceful environmental protesters from police custody during demonstrations against deforestation in Aarey Colony, Mumbai.',
    tag: 'Trial & High Court',
    link: 'https://www.hindustantimes.com/mumbai-news/overnight-drama-at-aarey-colony-in-mumbai-ends-in-arrests/story-YiADOgfDv6unKcMlouEaDP.html',
  },
];

export default function MilestoneTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF5EC] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
            Track Record &amp; Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#0B0B0C] tracking-tight font-serif mb-4">
            A Chronology of Landmark Litigation &amp; Precedents
          </h2>
          <p className="text-sm font-light text-neutral-600 leading-relaxed">
            From grassroots human rights advocacy in trial courts to precedent-setting constitutional challenges before the Supreme Court of India.
          </p>
        </div>

        <div className="relative border-l border-[#DED3C4] ml-4 md:ml-6 space-y-12">
          {MILESTONES.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#FEF9F3] border-2 border-[#A88B58] group-hover:bg-[#A88B58] transition-colors" />

              <div className="p-6 md:p-8 bg-white border border-[#E7DFD5] rounded-sm shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 text-xs font-mono font-semibold bg-[#F4EDE2] text-[#94753D] rounded">
                      {item.year}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                      {item.tag}
                    </span>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#94753D] hover:underline"
                    >
                      <span>Media Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-medium text-[#0B0B0C]">
                  {item.title}
                </h3>

                <p className="text-sm font-light text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
