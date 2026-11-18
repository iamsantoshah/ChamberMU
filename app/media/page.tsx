'use client';

import React, { useState } from 'react';
import { ExternalLink, Calendar, Newspaper, BookOpen, Scale, ArrowUpRight } from 'lucide-react';

const MEDIA_ITEMS = [
  {
    category: 'litigation',
    year: '2026',
    title: 'University of Nottingham Alumni Award 2026',
    outlet: 'University of Nottingham',
    description:
      'Ujjaini Chatterji awarded the "Your Nottingham Alumni Award" for her contribution as an advocate and international human rights lawyer supporting displaced, refugee, and stateless communities.',
    url: 'https://clpr.org.in/blog/meet-our-new-constitution-defender-fellows/',
    tag: 'Award & Recognition',
  },
  {
    category: 'press',
    year: '2024',
    title: 'Education for Rohingya Refugee Children in Indian Schools',
    outlet: 'The Guardian',
    description:
      'Chambers advocates quoted on the legal struggle and constitutional guarantees securing schooling and education for displaced Rohingya children in India.',
    url: 'https://www.theguardian.com/global-development/2024/nov/26/education-rohingya-refugee-children-india-schools',
    tag: 'Global Press',
  },
  {
    category: 'litigation',
    year: '2024 – 2026',
    title: 'Constitution Defenders Fellowship — CLPR',
    outlet: 'Centre for Law and Policy Research (CLPR)',
    description:
      'Fellowship focus on litigating strategic constitutional challenges concerning rights of stateless persons, asylum seekers, and bonded labourers across India.',
    url: 'https://clpr.org.in/blog/meet-our-new-constitution-defender-fellows/',
    tag: 'Fellowship',
  },
  {
    category: 'articles',
    year: '2024',
    title: 'The Offence of Sedition in India and Its Future',
    outlet: 'Oxford Human Rights Hub (OxHRH)',
    description:
      'Academic and constitutional analysis on colonial-era sedition statutes, free speech jurisprudence, and procedural overreach in India.',
    url: 'https://ohrh.law.ox.ac.uk/the-offence-of-sedition-in-india-and-its-future/',
    tag: 'Academic Analysis',
  },
  {
    category: 'press',
    year: '2024',
    title: 'Rohingya Detainees Protest Abominable Conditions in Indian Detention Camp',
    outlet: 'Voice of America (VOA News)',
    description:
      'Legal commentary and reporting on prolonged holding and human rights violations inside administrative detention facilities.',
    url: 'https://www.voanews.com/a/rohingya-detainees-protest-abominable-conditions-in-indian-camp/7784341.html',
    tag: 'Human Rights Report',
  },
  {
    category: 'litigation',
    year: '2023 – 2025',
    title: 'Delhi High Court Directs Joint Inspection of Detention Facilities',
    outlet: 'ThePrint',
    description:
      'Delhi High Court orders high-level joint inspection of detention facilities over lack of medical care and basic human amenities following Chambers petitions.',
    url: 'https://theprint.in/india/delhi-hc-directs-joint-inspection-of-rohingya-detention-centre-over-alleged-lack-of-facilities/1366548/?amp',
    tag: 'Judicial Order',
  },
  {
    category: 'articles',
    year: '2023',
    title: 'Inside the Legal Battle to Ensure Health & Freedom of Detainees',
    outlet: 'Article 14',
    description:
      'Detailed legal investigative report covering the litigation of Sabera Khatoon in the Supreme Court, establishing healthcare rights in detention.',
    url: 'https://article-14.com/post/inside-the-legal-battle-to-ensure-health-freedom-of-a-rohingya-woman-in-illegal-detention--653b27dfd0f07',
    tag: 'Investigative Legal',
  },
  {
    category: 'litigation',
    year: '2024',
    title: 'Constitutional Challenge to the Citizenship Amendment Act (CAA)',
    outlet: 'Supreme Court Observer & CLPR',
    description:
      'Mayurapriyan Thangavel representing Member of Parliament P. Sandosh Kumar challenging the constitutional validity and secular guarantees against CAA 2019 and 2024 Rules.',
    url: 'https://clpr.org.in/litigation/p-sandosh-kumar-ors-v-union-of-india/',
    tag: 'Supreme Court Litigation',
  },
  {
    category: 'press',
    year: '2024',
    title: 'Assam’s Nowhere People: The Legal Maze of Foreigners Tribunals',
    outlet: 'The Scroll',
    description:
      'Quoting Chambers practitioners on the devastating procedural traps affecting over 1.9 million people facing statelessness in Assam.',
    url: 'https://scroll.in/article/1089947/assams-nowhere-people-given-24-hours-to-leave-india-tossed-back-and-forth-across-bangladesh-order',
    tag: 'Statelessness & Tribunals',
  },
  {
    category: 'articles',
    year: '2023',
    title: 'Columns & Commentary by T. Mayura Priyan & Ujjaini Chatterji',
    outlet: 'The Leaflet',
    description:
      'Regular legal commentary on feminist jurisprudence, civil liberties, prisoner rights, and institutional accountability before the courts.',
    url: 'https://theleaflet.in/author/ujjaini-chatterji',
    tag: 'Regular Column',
  },
  {
    category: 'press',
    year: '2023',
    title: 'False Promises, Lost Lives: Rohingya Women’s Journeys',
    outlet: 'Pulitzer Center',
    description:
      'Reporting on gender-based vulnerabilities, human trafficking, and the legal battle to protect refugee women from custodial disappearances.',
    url: 'https://pulitzercenter.org/stories/false-promises-lost-lives-rohingya-womens-journeys-refugees',
    tag: 'Investigative Grant',
  },
  {
    category: 'litigation',
    year: '2019',
    title: 'Aarey Forest Protesters Bail & Discharge Litigations',
    outlet: 'Hindustan Times',
    description:
      'Emergency trial court and Bombay High Court representation securing the prompt release of over 200 peaceful environmental demonstrators in Mumbai.',
    url: 'https://www.hindustantimes.com/mumbai-news/overnight-drama-at-aarey-colony-in-mumbai-ends-in-arrests/story-YiADOgfDv6unKcMlouEaDP.html',
    tag: 'Environmental & Liberty',
  },
];

export default function MediaPage() {
  const [filter, setFilter] = useState<'all' | 'litigation' | 'articles' | 'press'>('all');

  const filteredItems = filter === 'all' ? MEDIA_ITEMS : MEDIA_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#FEF9F3]">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[#E8E0D5] bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              Media, Litigations &amp; Publications
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#0B0B0C] tracking-tight font-serif mb-6 leading-tight">
              Precedents, Columns &amp; International Coverage
            </h1>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              Explore our landmark litigations, academic publications in leading law journals, and media commentary across global news platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#E8E0D5] pb-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded transition-colors ${
                filter === 'all'
                  ? 'bg-[#0B0B0C] text-[#FEF9F3]'
                  : 'text-neutral-600 hover:text-black hover:bg-[#F3EBE0]'
              }`}
            >
              All Items ({MEDIA_ITEMS.length})
            </button>
            <button
              onClick={() => setFilter('litigation')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded transition-colors ${
                filter === 'litigation'
                  ? 'bg-[#0B0B0C] text-[#FEF9F3]'
                  : 'text-neutral-600 hover:text-black hover:bg-[#F3EBE0]'
              }`}
            >
              Landmark Litigations
            </button>
            <button
              onClick={() => setFilter('articles')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded transition-colors ${
                filter === 'articles'
                  ? 'bg-[#0B0B0C] text-[#FEF9F3]'
                  : 'text-neutral-600 hover:text-black hover:bg-[#F3EBE0]'
              }`}
            >
              Partner Publications
            </button>
            <button
              onClick={() => setFilter('press')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded transition-colors ${
                filter === 'press'
                  ? 'bg-[#0B0B0C] text-[#FEF9F3]'
                  : 'text-neutral-600 hover:text-black hover:bg-[#F3EBE0]'
              }`}
            >
              Global Press Quotes
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-white border border-[#E7DFD5] hover:border-neutral-900 rounded-sm flex flex-col justify-between group shadow-sm transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-medium text-[#94753D] bg-[#FBF5EC] px-2 py-0.5 rounded border border-[#EDE4D8]">
                      {item.year}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      {item.outlet}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-[#0B0B0C] group-hover:text-[#94753D] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE3] flex items-center justify-between text-xs font-medium text-neutral-500 group-hover:text-black">
                  <span className="text-[11px] uppercase tracking-wider text-[#A88B58]">{item.tag}</span>
                  <div className="flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
