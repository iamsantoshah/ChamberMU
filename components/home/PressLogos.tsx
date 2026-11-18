import React from 'react';
import { ExternalLink } from 'lucide-react';

export const MEDIA_SOURCES = [
  { name: 'The Guardian', link: 'https://www.theguardian.com/global-development/2024/nov/26/education-rohingya-refugee-children-india-schools' },
  { name: 'The Telegraph (UK)', link: 'https://www.telegraph.co.uk/authors/s/sa-se/sarah-aziz/' },
  { name: 'Oxford Human Rights Hub', link: 'https://ohrh.law.ox.ac.uk/the-offence-of-sedition-in-india-and-its-future/' },
  { name: 'Article 14', link: 'https://article-14.com/post/inside-the-legal-battle-to-ensure-health-freedom-of-a-rohingya-woman-in-illegal-detention--653b27dfd0f07' },
  { name: 'The Leaflet', link: 'https://theleaflet.in/author/ujjaini-chatterji' },
  { name: 'The Scroll', link: 'https://scroll.in/article/1089947/assams-nowhere-people-given-24-hours-to-leave-india-tossed-back-and-forth-across-bangladesh-order' },
  { name: 'VOA News', link: 'https://www.voanews.com/a/rohingya-detainees-protest-abominable-conditions-in-indian-camp/7784341.html' },
  { name: 'The Daily Star', link: 'https://www.thedailystar.net/explainer-0/news/will-india-hand-over-hasina-4156871' },
  { name: 'Pulitzer Center', link: 'https://pulitzercenter.org/stories/false-promises-lost-lives-rohingya-womens-journeys-refugees' },
  { name: 'Newslaundry', link: 'https://www.newslaundry.com/2020/08/17/gn-saibaba-isnt-being-let-out-of-prison-even-in-a-pandemic-its-a-disgrace' },
];

export default function PressLogos() {
  return (
    <section className="py-16 bg-[#FEF9F3] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-medium block mb-2">
            Global Recognition &amp; Commentary
          </span>
          <h3 className="text-sm sm:text-base font-light text-neutral-800">
            Our advocates&apos; litigations and writings are regularly featured and quoted across leading national and international publications.
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {MEDIA_SOURCES.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-[#EBE3D8] hover:border-neutral-900 rounded-sm flex items-center justify-between text-xs font-serif font-medium text-neutral-800 hover:text-black transition-all group"
            >
              <span>{item.name}</span>
              <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-neutral-900" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
