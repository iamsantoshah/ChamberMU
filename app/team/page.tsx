import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, FileText, ExternalLink, Mail, Award, BookOpen, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'People & Chambers Directory | Chamber.MU Advocates',
  description:
    'Directory of partners, associates, legal researchers, and interns at Chamber.MU, practicing before the Supreme Court of India, High Courts, and international forums.',
};

const PARTNERS = [
  {
    id: 'mayurapriyan',
    name: 'Mayurapriyan Thangavel',
    role: 'Partner, Advocate',
    image: '/images/team/mayurapriyan-thangavel.jpg',
    education: 'B.A. LL.B. (Symbiosis International University, 2017)',
    expertise: 'Feminist Constitutional Law, Refugee Defense, Statelessness, CAA Litigation',
    bioPdf: '/docs/mayur-bio.pdf',
    portfolioPdf: '/docs/artist-portfolio-mayurapriyan.pdf',
    bio: [
      'Mayurapriyan Thangavel is an advocate, columnist, artist, and theatre actor based in New Delhi. Specialising in feminist constitutional law and strategic human rights litigation, his practice is dedicated to representing Dalit, Bahujan, tribal, Muslim, and Rohingya refugee communities, with a particular focus on issues of statelessness, indefinite detention, and deportation.',
      'He led the historic constitutional challenge to the Citizenship Amendment Act (CAA), 2019, and its 2024 Rules, on behalf of Member of Parliament P. Sandosh Kumar before the Supreme Court of India, arguing its incompatibility with India’s constitutional guarantees of equality and secularism. Mayurapriyan also represents Rohingya women and children before the Delhi High Court and Supreme Court.',
      'He was nominated as a delegate to the 2025 United Nations Commission on the Status of Women (UN CSW). Alongside his litigation practice, Mayurapriyan is a regular columnist writing on equality, Dravidian politics, constitutionalism, and scientific temper. His paintings have been exhibited across embassies and galleries, and as an actor, he performs in theatre productions and short films in English and Tamil.',
    ],
    highlights: [
      'Supreme Court CAA Constitutional Challenge',
      'UN Commission on the Status of Women 2025 Delegate',
      'Co-Founder, Lingering Shadows Initiative',
      'Practicing before Supreme Court of India & High Courts',
    ],
  },
  {
    id: 'ujjaini',
    name: 'Ujjaini Chatterji',
    role: 'Partner, Advocate',
    image: '/images/team/ujjaini-chatterji.jpg',
    education: 'LL.M. in Human Rights Law (University of Nottingham, UK)',
    expertise: 'Constitutional Law, Refugee Rights, Statelessness, Strategic Feminist Litigation, SGBV',
    bioPdf: '/docs/ujjaini-chatterji-bio.pdf',
    portfolioPdf: '/docs/unveiling-tales-untold-ujjaini.pdf',
    bio: [
      'Ujjaini Chatterji is an advocate practicing in the courts of India, specialising in strategic constitutional litigation, feminist human rights lawyering, and refugee defense. She graduated with an LL.M. in Human Rights Law from the University of Nottingham on the Developing Solutions Masters Scholarship and GREAT Scholarships India (2017), followed by training at the Venice School of Human Rights, European Inter-University Centre.',
      'Ujjaini has led and argued landmark public interest litigations in the Supreme Court of India, including Sabera Khatoon v. Union of India, which established refugees’ fundamental right to healthcare and protection from indefinite detention. She is presently arguing public interest litigations against custodial deaths and indefinite detention of refugees, as well as a habeas corpus petition challenging the custodial disappearance of five Rohingya refugees.',
      'In 2024, Ujjaini was awarded the prestigious Constitution Defenders Fellowship by the Centre for Law and Policy Research (CLPR). In 2026, she received the "Your Nottingham Alumni Award" for her international human rights advocacy. She is a two-time delegate to the UN Commission on the Status of Women, Board Member of DAJI, and Director of Governance & Compliance for the Rohingya Youth Union.',
    ],
    highlights: [
      'Your Nottingham Alumni Award Recipient (2026)',
      'Constitution Defenders Fellow, CLPR (2024–2026)',
      'Counsel in Sabera Khatoon v. Union of India (Supreme Court)',
      'Two-Time Delegate, UN Commission on the Status of Women',
    ],
  },
];

const ASSOCIATES = [
  {
    name: 'Mahvish Fatima',
    role: 'Associate, Advocate',
    image: '/images/team/mahvish-fatima.jpg',
    education: 'B.A. LL.B. (Hons.), Faculty of Law, Aligarh Muslim University (2025)',
    bar: 'Bar Council of Delhi',
    bioPdf: '/docs/mahvish-fatima-bio.pdf',
    bio: 'Registered with the Bar Council of Delhi, Mahvish graduated from Aligarh Muslim University where she served as Joint Editor of the AMU Law Review and Secretary of the Intellectual Property & Innovation Society. Co-founder of the legal academic blog Virtuosity Legal. Practices across courts in India including the Supreme Court, focusing on statelessness, refugee defense, criminal trials, bail issues, and commercial arbitration. Counsel in Rita Manchanda v. UOI (2025) and CAA constitutional petitions.',
  },
  {
    name: 'Izeen Fatima',
    role: 'Associate, Advocate',
    image: '/images/team/izeen-fatima.jpg',
    education: 'B.A. (Hons.) Psychology (Jamia Millia Islamia), LL.B. (Campus Law Centre, University of Delhi), Adv. PG Diploma in IHL (NALSAR)',
    bar: 'Practicing Advocate, New Delhi',
    bioPdf: '/docs/izeen-fatima-bio.pdf',
    bio: 'Advocate, published author ("Snowflakes in Sunshine"), UNESCO Changemaker ’23, UNAI Millennium Fellow ’24, and national-level air pistol shooter. Brings an interdisciplinary approach blending law, psychology, and social justice. Focuses on citizenship, refugee rights, detention justice, commercial litigation, and gender rights. Founder of Pink Legal Club Ibtida for menstrual and cyber safety rights.',
  },
  {
    name: 'Tanzeel Islam Khan',
    role: 'Associate, Advocate',
    image: '/images/team/tanzeel-islam-khan.jpg',
    education: 'B.A. LL.B. (Hons.), Faculty of Law, Aligarh Muslim University (2026)',
    bar: 'Bar Council of Delhi',
    bioPdf: '/docs/tanzeel-khan-bio.pdf',
    bio: 'Registered with the Bar Council of Delhi. Co-founder of Virtuosity Legal, with regular writings published on LiveLaw and Maktoob. Specialises in constitutional law, political thought, and AI regulation. Author of ‘Users First: A Consumer Rights Approach to AI Regulation’ (Voices of Law in Indo-Pacific, 2025). Forthcoming research under publication with Thomson Reuters.',
  },
  {
    name: 'Ms. Bisman Kaur',
    role: 'Legal Intern',
    image: '/images/team/bisman-kaur.jpg',
    education: 'Fourth-year B.A. LL.B. (Hons.), Rajiv Gandhi National University of Law (RGNUL), Punjab',
    bar: 'Specialising in International Law',
    bioPdf: '/docs/bisman-kaur-bio.pdf',
    bio: 'Associated with Chamber.MU and the Lingering Shadows Initiative since October 2025. Focuses on refugee protection, immigration detention, Special Leave Petitions, and comparative constitutional law. Previous experience with the Office of the Hon’ble Chief Justice of India, Trilegal Antitrust team, and Teaching Assistant for Public International Law at RGNUL.',
  },
];

const ENGLAND_RESEARCHERS = [
  { name: 'Lubana', role: 'Legal Researcher', chapter: 'England Chapter' },
  { name: 'Dylan', role: 'Legal Researcher', chapter: 'England Chapter' },
  { name: 'Grace', role: 'Legal Researcher', chapter: 'England Chapter' },
];

export default function TeamPage() {
  return (
    <div className="bg-[#FEF9F3]">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[#E8E0D5] bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              Chambers Directory
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#0B0B0C] tracking-tight font-serif mb-6 leading-tight">
              Advocates, Consultants &amp; Legal Researchers
            </h1>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              A collective of feminist constitutional lawyers and scholars committed to delivering rigorous, strategic legal representation across all judicial and arbitral forums.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="border-b border-[#EDE4D8] pb-4">
            <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-1">LEADERSHIP</span>
            <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">The Partners</h2>
          </div>

          <div className="space-y-20">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                id={partner.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white border border-[#E7DFD5] p-8 sm:p-12 rounded-sm shadow-sm"
              >
                {/* Photo & Fast Facts */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="relative h-96 w-full rounded-sm overflow-hidden bg-neutral-100 shadow">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="space-y-3 pt-2 text-xs text-neutral-700">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#A88B58] shrink-0 mt-0.5" />
                      <span>{partner.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#A88B58] shrink-0 mt-0.5" />
                      <span>{partner.expertise}</span>
                    </div>
                  </div>

                  {/* Documents & Portfolios */}
                  <div className="pt-4 border-t border-[#EDE4D8] flex flex-col gap-2.5">
                    {partner.bioPdf && (
                      <a
                        href={partner.bioPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between px-4 py-2.5 bg-[#FBF5EC] hover:bg-[#F3ECE0] border border-[#E7DFD5] rounded text-xs text-neutral-900 transition-colors font-medium"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-[#A88B58]" />
                          Download Official Bio (PDF)
                        </span>
                        <Download className="w-3.5 h-3.5 text-neutral-500" />
                      </a>
                    )}
                    {partner.portfolioPdf && (
                      <a
                        href={partner.portfolioPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between px-4 py-2.5 bg-[#FBF5EC] hover:bg-[#F3ECE0] border border-[#E7DFD5] rounded text-xs text-neutral-900 transition-colors font-medium"
                      >
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-3.5 h-3.5 text-[#A88B58]" />
                          Creative &amp; Legal Portfolio (PDF)
                        </span>
                        <Download className="w-3.5 h-3.5 text-neutral-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Biography & Cases */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#94753D]">
                      {partner.role}
                    </span>
                    <h3 className="text-3xl font-light font-serif text-[#0B0B0C] mt-1">
                      {partner.name}
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base font-light text-neutral-700 leading-relaxed">
                    {partner.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[#F0E8DD]">
                    <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-neutral-900 mb-3">
                      Selected Highlights &amp; Appointments
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {partner.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-light text-neutral-800 bg-[#FBF5EC] px-3 py-2 rounded border border-[#EDE4D8]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A88B58]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates & India Office Section */}
      <section className="py-20 bg-[#FBF5EC] border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-[#EDE4D8] pb-4">
            <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-1">
              INDIA OFFICE
            </span>
            <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">
              Associates &amp; Legal Interns
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ASSOCIATES.map((assoc, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E7DFD5] p-6 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-neutral-100 border border-[#E7DFD5]">
                      <Image
                        src={assoc.image}
                        alt={assoc.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#0B0B0C]">{assoc.name}</h3>
                      <p className="text-xs uppercase tracking-wider text-[#94753D] font-medium mt-0.5">
                        {assoc.role}
                      </p>
                      <p className="text-[11px] text-neutral-500 font-light mt-1">{assoc.bar}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                    {assoc.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0E8DD] flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">{assoc.education}</span>
                  {assoc.bioPdf && (
                    <a
                      href={assoc.bioPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#94753D] hover:underline font-medium"
                    >
                      <span>Bio PDF</span>
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* England Chapter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#EDE4D8] pb-4">
            <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-1">
              INTERNATIONAL RESEARCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">
              England Chapter — Legal Researchers
            </h2>
            <p className="text-xs sm:text-sm font-light text-neutral-600 mt-2">
              Our England Chapter conducts comparative human rights jurisprudence, international law analysis, and cross-border research supporting our Indian litigation practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ENGLAND_RESEARCHERS.map((res, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-[#E7DFD5] rounded-sm text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FBF5EC] flex items-center justify-center text-[#94753D] font-serif text-lg font-semibold">
                  {res.name[0]}
                </div>
                <h3 className="text-base font-medium text-[#0B0B0C]">{res.name}</h3>
                <p className="text-xs uppercase tracking-wider text-neutral-500">{res.role}</p>
                <span className="inline-block text-[11px] px-2 py-0.5 bg-[#FBF5EC] text-[#94753D] rounded border border-[#EBE3D8]">
                  {res.chapter}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
