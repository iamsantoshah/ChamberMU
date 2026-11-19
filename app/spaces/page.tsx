import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, GraduationCap, Users2, BookOpen, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Other Spaces & Initiatives | Chamber.MU Advocates',
  description:
    'Ecosystem initiatives affiliated with Chamber.MU, including The Lingering Shadows Initiative, The Young Lawyers Network, The Young Lawyers Diary, Rising Peacock, and Virtuosity Legal.',
};

interface SpaceItem {
  title: string;
  tag: string;
  logo?: string;
  logoAlt?: string;
  icon?: React.ComponentType<{ className?: string }>;
  desc: string;
  highlights: string[];
  link?: string;
  actionText?: string;
}

const SPACES: SpaceItem[] = [
  {
    title: 'The Lingering Shadows Initiative',
    tag: 'Flagship Community Initiative',
    icon: Globe2,
    desc: 'A program to amplify the voices of disenfranchised and marginalised social groups through litigation within courtrooms and through reporting, advocacy, art, storytelling, theatre, and films outside the courtrooms.',
    highlights: [
      'Pro-bono litigation & paralegal clinics impacting 1,500+ families',
      'Ground reporting & storytelling on statelessness and displacement',
      'Art exhibitions, theatre productions & cultural explorations',
    ],
    link: 'https://www.linkedin.com/company/the-lingering-shadows-initiative/',
    actionText: 'Explore LSI Initiative',
  },
  {
    title: 'The Young Lawyers Network',
    tag: 'Professional Legal Network',
    icon: Users2,
    desc: 'A dynamic network of inventive, skilled, articulate, accountable, and professional human rights lawyers with exposure in the legal field and immense ambition to develop and expand human rights lawyering as a practice.',
    highlights: [
      'Peer mentorship & collaborative litigation support',
      'Advanced workshops on strategic constitutional drafting',
      'Bridging young advocates with international human rights networks',
    ],
    link: '/contact',
    actionText: 'Connect with Network',
  },
  {
    title: 'The Young Lawyers Diary',
    tag: 'Reflections & Lived Experiences',
    icon: BookOpen,
    desc: 'A dedicated platform and blog for young advocates to share their lived experiences from courtrooms, detention centres, rural legal aid clinics, and community visits. Bringing honest perspectives on the psychological and moral reality of human rights lawyering.',
    highlights: [
      'First-person reflections on courtroom realities',
      'Dispatches from ground fact-findings across India',
      'Picture galleries and field storytelling',
    ],
  },
  {
    title: 'Rising Peacock',
    tag: 'Educational Wing',
    logo: '/logos/rising-peacock.svg',
    logoAlt: 'Rising Peacock Official Logo',
    icon: GraduationCap,
    desc: 'The educational wing of Chamber.MU that actively works towards transforming education through globally aligned learning, educator excellence, and future-ready student development. Equipping students with critical thinking, ethical leadership, and global civic awareness.',
    highlights: [
      'Globally aligned academic frameworks & competitions',
      'Educator upskilling & pedagogy development',
      'Youth career challenges and empowerment programs',
    ],
    link: 'https://risingpeacock.in',
    actionText: 'Visit Rising Peacock',
  },
  {
    title: 'Virtuosity Legal',
    tag: 'Knowledge Partner',
    logo: '/logos/virtuosity-legal.png',
    logoAlt: 'Virtuosity Legal Official Logo',
    icon: Sparkles,
    desc: 'Knowledge partner to Chamber.MU. An independent, student-driven initiative with a clear vision: to bring clarity, authenticity, and depth to the study and practice of law. Regularly publishing academic commentaries on technology regulation, constitutional theory, and contemporary legal thought.',
    highlights: [
      'Student-led peer-reviewed academic blog',
      'Special focus on AI governance and consumer rights',
      'Bridging legal academia with litigation practice',
    ],
    link: 'https://virtuositylegal.com',
    actionText: 'Visit Virtuosity Legal',
  },
];

export default function SpacesPage() {
  return (
    <div className="bg-[#FEF9F3]">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[#E8E0D5] bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              Allied Initiatives &amp; Communities
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#0B0B0C] tracking-tight font-serif mb-6 leading-tight">
              Our Wider Ecosystem of Law, Education &amp; Storytelling
            </h1>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              Beyond traditional courtroom litigation, Chamber.MU nurtures youth mentorship, legal scholarship, future-ready education, and storytelling through allied community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SPACES.map((space, idx) => {
              const Icon = space.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E7DFD5] p-8 sm:p-10 rounded-sm shadow-sm flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {space.logo ? (
                        <div className="relative h-12 w-36 bg-[#FBF5EC] border border-[#E7DFD5] rounded-sm p-1.5 flex items-center justify-center overflow-hidden">
                          <Image
                            src={space.logo}
                            alt={space.logoAlt || space.title}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      ) : (
                        Icon && (
                          <div className="p-3 bg-[#FBF5EC] rounded-md text-[#94753D]">
                            <Icon className="w-6 h-6" />
                          </div>
                        )
                      )}
                      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 bg-[#FEF9F3] px-2.5 py-1 rounded border border-[#E7DFD5]">
                        {space.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl font-light font-serif text-[#0B0B0C] pt-2">
                      {space.title}
                    </h2>

                    <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                      {space.desc}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-[11px] uppercase tracking-wider font-semibold text-neutral-900 mb-2">
                        Key Pillars:
                      </h4>
                      <ul className="space-y-1.5 text-xs font-light text-neutral-600">
                        {space.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A88B58]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F2ECE3]">
                    {space.link ? (
                      <a
                        href={space.link}
                        target={space.link.startsWith('http') ? '_blank' : undefined}
                        rel={space.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-[#94753D] transition-colors"
                      >
                        <span>{space.actionText || 'Learn More'}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#A88B58]" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        Chamber.MU Ecosystem
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
