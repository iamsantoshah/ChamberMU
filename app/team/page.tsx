import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, FileText, Award, BookOpen, GraduationCap, ShieldCheck, Scale, Globe } from 'lucide-react';

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
    education: 'B.A. LL.B., Symbiosis International University (2017)',
    expertise: 'Feminist Constitutional Law, Refugee Defense, Statelessness, CAA Litigation',
    bioPdf: '/docs/mayur-bio.pdf',
    portfolioPdf: '/docs/artist-portfolio-mayurapriyan.pdf',
    bio: [
      'Mayurapriyan Thangavel is an advocate, columnist, artist, and theatre actor based in New Delhi. Specialising in feminist constitutional law and strategic human rights litigation, his practice focuses on representing Dalit, Bahujan, tribal, Muslim, and Rohingya refugee communities, with an emphasis on issues of statelessness, indefinite detention, and deportation.',
      'He led the landmark constitutional challenge to the Citizenship Amendment Act (CAA), 2019, and its 2024 Rules before the Supreme Court of India on behalf of Member of Parliament P. Sandosh Kumar, arguing its incompatibility with India’s constitutional guarantees of equality and non-discrimination. Mayurapriyan also represents Rohingya women and children before the Delhi High Court and Supreme Court.',
      'Nominated as a delegate to the 2025 United Nations Commission on the Status of Women (UN CSW). Alongside his litigation practice, Mayurapriyan is a regular columnist writing on equality, Dravidian politics, constitutionalism, and scientific temper. His paintings have been exhibited across embassies and galleries, and as an actor, he performs in theatre productions and short films in English and Tamil.',
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
    education: 'LL.M. in Human Rights Law, University of Nottingham (UK)',
    expertise: 'Constitutional Litigation, Refugee Rights, Statelessness, Strategic Feminist Lawyering, SGBV',
    bioPdf: '/docs/ujjaini-chatterji-bio.pdf',
    portfolioPdf: '/docs/unveiling-tales-untold-ujjaini.pdf',
    bio: [
      'Ujjaini Chatterji is an advocate practicing across the courts of India, specialising in strategic constitutional litigation, feminist human rights lawyering, and refugee defense. She graduated with an LL.M. in Human Rights Law from the University of Nottingham on the Developing Solutions Masters Scholarship and GREAT Scholarships India (2017), followed by training at the Venice School of Human Rights, European Inter-University Centre.',
      'Ujjaini has argued landmark public interest litigations in the Supreme Court of India, including Sabera Khatoon v. Union of India, which established refugees’ fundamental right to healthcare and protection from indefinite detention. She is presently arguing public interest litigations against custodial deaths and indefinite detention of refugees, as well as a habeas corpus petition challenging the custodial disappearance of five Rohingya refugees.',
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
    image: '/images/team/mahvish-fatima-portrait.jpg',
    education: 'B.A. LL.B. (Hons.), Faculty of Law, Aligarh Muslim University (2025)',
    bar: 'Bar Council of Delhi',
    bioPdf: '/docs/mahvish-fatima-bio.pdf',
    specialties: ['Statelessness & Citizenship', 'Habeas Corpus Litigations', 'Commercial Arbitration', 'AI & Technology Law'],
    bio: [
      'Mahvish Fatima, an Advocate registered with the Bar Council of Delhi, is a 2025 B.A. LL.B. (Hons.) graduate from the Faculty of Law, Aligarh Muslim University. As an alumnus of AMU, she co-founded the legal academic blog Virtuosity Legal. During her time at AMU, Mahvish served as Joint Editor of the AMU Law Review (2022–2023) and Secretary of the Intellectual Property and Innovation Society (2023–2024).',
      'Mahvish currently works alongside Ujjaini Chatterji and T. Mayurapriyan, practicing across courts in India, including the Supreme Court of India, with a focus on statelessness, refugees, asylum, citizenship, and human rights. Prominent cases represented include Rita Manchanda v. Union of India (2025)—a habeas corpus petition challenging the disappearance of five Rohingya refugees from New Delhi—and the batch Writ Petitions challenging the Citizenship (Amendment) Act, 2019.',
      'Additionally, she represents clients in criminal trials, bail matters, commercial arbitrations, and immigration appeals. In 2026, she represented the Muslim Youth and AMU at the International Conclave on Youth from Communities Discriminated on Work and Descent (CDWD). She has also co-authored chapters on AI consumer rights regulation in Voices of Law in Indo-Pacific (2025).',
    ],
  },
  {
    name: 'Izeen Fatima',
    role: 'Associate, Advocate',
    image: '/images/team/izeen-fatima-portrait.jpg',
    education: 'B.A. (Hons.) Psychology (Jamia Millia Islamia), LL.B. (Campus Law Centre, University of Delhi), Adv. PG Diploma in IHL (NALSAR)',
    bar: 'Practicing Advocate, New Delhi',
    bioPdf: '/docs/izeen-fatima-bio.pdf',
    specialties: ['Gender Rights & SGBV', 'Detention Justice', 'Refugee Rights', 'POCSO & Child Protection'],
    bio: [
      'Izeen Fatima is a practicing advocate based in New Delhi, a published author, POCSO TTT-trained expert, UNESCO Changemaker ’23, UNAI Millennium Fellow ’24, YLAC Policy in Action Fellow 2025, and national-level air pistol shooter. She brings an unusual interdisciplinary mix of legal rigour, psychology, and social consciousness to her work.',
      'A law graduate from Campus Law Centre, University of Delhi, Izeen also holds a Bachelor’s in Psychology (Honours) from Jamia Millia Islamia and an Advanced Postgraduate Diploma in International Humanitarian Law from NALSAR. Her wider practice encompasses human rights, citizenship, refugee rights, detention justice, and civil-commercial disputes.',
      'She founded Pink Legal Club Ibtida in December 2023 to advance menstrual health, child protection, cyber safety, and gender rights. As a YLAC Fellow 2025, she contributed to policy briefs on women in the informal economy for Maharashtra state legislators. She is also the author of the published book "Snowflakes in Sunshine" and was recognized as a LinkedIn Top Voice for Social Work.',
    ],
  },
  {
    name: 'Tanzeel Islam Khan',
    role: 'Associate, Advocate',
    image: '/images/team/tanzeel-islam-khan.jpg',
    education: 'B.A. LL.B. (Hons.), Faculty of Law, Aligarh Muslim University (2026)',
    bar: 'Bar Council of Delhi',
    bioPdf: '/docs/tanzeel-khan-bio.pdf',
    specialties: ['Constitutional Law', 'Technology & AI Law', 'Political Thought', 'Legal Commentary'],
    bio: [
      'Tanzeel Islam Khan is an Advocate registered with the Bar Council of Delhi and a graduate of the Faculty of Law, Aligarh Muslim University (2026). He is the Co-Founder of Virtuosity Legal, a peer-reviewed legal academic blog, and a regular columnist for LiveLaw, Maktoob, and WritingLaw.',
      'His legal research and litigation interests span across Constitutional Law, Technology Governance, and Political Thought. He has co-authored multiple papers examining the intersection of technology and law, including "Users First: A Consumer Rights Approach to AI Regulation" in Voices of Law in Indo-Pacific (2025), with forthcoming work under publication with Thomson Reuters.',
      'Tanzeel blends classical legal thought with contemporary litigation, with a focus on procedural rights, trial court litigation, and state accountability.',
    ],
  },
  {
    name: 'Ms. Bisman Kaur',
    role: 'Legal Intern',
    image: '/images/team/bisman-kaur.jpg',
    education: 'Fourth-year B.A. LL.B. (Hons.), Rajiv Gandhi National University of Law (RGNUL), Punjab',
    bar: 'Specialising in Public International Law',
    bioPdf: '/docs/bisman-kaur-bio.pdf',
    specialties: ['Refugee & Migration Law', 'International Humanitarian Law', 'Special Leave Petitions', 'Statelessness Research'],
    bio: [
      'Bisman Kaur is a fourth-year law student at RGNUL Punjab specialising in International Law, Refugee & Migration Law, International Humanitarian Law, and Transitional Justice. She has been associated with Chamber.MU and Adv. Ujjaini Chatterji since October 2025.',
      'Her work centres on refugee protection, immigration detention, and comparative research on statelessness across domestic and international legal frameworks. She has assisted in legal research and drafting for Special Leave Petitions, Writ Petitions, legal notices, and constitutional submissions before High Courts and the Supreme Court.',
      'Her background includes clinical internships with the Office of the Hon’ble Chief Justice of India, Trilegal’s Competition & Antitrust practice, and serving as Teaching Assistant for Public International Law at RGNUL and Legal Intern with the Asian-African Legal Consultative Organization (AALCO).',
    ],
  },
];

const ENGLAND_RESEARCHERS = [
  { name: 'Lubana', role: 'Legal Researcher', chapter: 'England Chapter', focus: 'Comparative Human Rights Jurisprudence' },
  { name: 'Dylan', role: 'Legal Researcher', chapter: 'England Chapter', focus: 'International Humanitarian Law & Asylum' },
  { name: 'Grace', role: 'Legal Researcher', chapter: 'England Chapter', focus: 'Transnational Advocacy & Public Policy' },
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
                      sizes="(max-width: 1024px) 100vw, 350px"
                      className="object-cover object-top"
                      priority
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
            <p className="text-xs sm:text-sm font-light text-neutral-600 mt-2">
              Our New Delhi team handles trial court defense, appellate drafting, research, and community-led legal interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ASSOCIATES.map((assoc, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E7DFD5] rounded-sm shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner with Profile Image */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-6 sm:p-8 border-b border-[#F0E8DD] bg-[#FAF4EB]">
                    <div className="sm:col-span-5">
                      <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-neutral-200 border border-[#E2D8CA] shadow-sm">
                        <Image
                          src={assoc.image}
                          alt={assoc.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 250px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-7 flex flex-col justify-center space-y-2">
                      <span className="inline-block px-2.5 py-0.5 bg-[#0B0B0C] text-[#FEF9F3] text-[10px] uppercase tracking-widest font-medium rounded-sm self-start">
                        {assoc.role}
                      </span>
                      <h3 className="text-2xl font-light font-serif text-[#0B0B0C]">
                        {assoc.name}
                      </h3>
                      <p className="text-xs text-neutral-600 font-medium">
                        {assoc.bar}
                      </p>
                      <div className="pt-2 text-xs font-light text-neutral-500 leading-snug">
                        {assoc.education}
                      </div>

                      <div className="pt-3 flex flex-wrap gap-1.5">
                        {assoc.specialties.map((spec, sidx) => (
                          <span
                            key={sidx}
                            className="px-2 py-0.5 bg-white text-[#94753D] text-[10px] font-medium rounded border border-[#E7DFD5]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Biography text */}
                  <div className="p-6 sm:p-8 space-y-3 text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                    {assoc.bio.map((para, pidx) => (
                      <p key={pidx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Footer Download Link */}
                <div className="px-6 sm:px-8 py-4 bg-[#FBF5EC] border-t border-[#F0E8DD] flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">Chamber.MU India Office</span>
                  {assoc.bioPdf && (
                    <a
                      href={assoc.bioPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#94753D] hover:underline font-medium"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Download Full Bio (PDF)</span>
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
                className="p-8 bg-white border border-[#E7DFD5] rounded-sm text-center space-y-3 shadow-sm hover:border-neutral-900 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#FBF5EC] border border-[#E7DFD5] flex items-center justify-center text-[#94753D] font-serif text-xl font-semibold">
                  {res.name[0]}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0B0B0C]">{res.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-[#94753D] font-medium mt-0.5">{res.role}</p>
                </div>
                <p className="text-xs font-light text-neutral-600">{res.focus}</p>
                <span className="inline-block text-[11px] px-2.5 py-1 bg-[#FBF5EC] text-neutral-700 rounded border border-[#EBE3D8]">
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
