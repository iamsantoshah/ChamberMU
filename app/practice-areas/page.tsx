import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Scale, Check, Landmark, Shield, FileText } from 'lucide-react';
import { PRACTICE_AREAS } from '@/components/home/PracticeGrid';

export const metadata: Metadata = {
  title: 'Practice Areas | Chamber.MU Advocates',
  description:
    'Comprehensive overview of litigation practice areas and alternate dispute resolution (ADR) handled by Chamber.MU across Indian courts and international tribunals.',
};

const DETAILED_PRACTICES = [
  {
    id: 'constitutional-law',
    num: '01',
    title: 'Constitutional Law',
    summary:
      'Chamber.MU maintains an esteemed practice in constitutional litigation, championing fundamental rights, statutory validity challenges, and writ jurisdiction before the Supreme Court of India and State High Courts.',
    scopes: [
      'Writ Petitions under Article 32 (Supreme Court) and Article 226 (High Courts)',
      'Substantive equality and non-discrimination challenges under Articles 14, 15, and 21',
      'Citizenship and statelessness challenges, including constitutional reviews of the Citizenship Amendment Act (CAA)',
      'Public Interest Litigations (PIL) addressing systemic human rights and detention conditions',
      'Federalism, executive overreach, and statutory interpretation',
    ],
    forums: 'Supreme Court of India, High Court of Delhi, High Court of Bombay, Gauhati High Court',
  },
  {
    id: 'immigration-law',
    num: '02',
    title: 'Immigration & Citizenship Law',
    summary:
      'Pioneering strategic defense on behalf of stateless persons, displaced families, foreign nationals, and migrants facing citizenship revocation or deportation.',
    scopes: [
      'Representation before Foreigners Tribunals across Assam impacting over 1.9 million stateless individuals',
      'Legal interventions against arbitrary deportation orders and custodial detention',
      'Documentation of statelessness and restoration of citizenship rights',
      'Visas, Overseas Citizen of India (OCI) matters, and expatriate residency appeals',
      'Cross-border refugee protection appeals before regional and international bodies',
    ],
    forums: "Foreigners' Tribunals, Delhi High Court, Gauhati High Court, Supreme Court of India",
  },
  {
    id: 'human-rights-law',
    num: '03',
    title: 'International Human Rights Law',
    summary:
      'Synthesizing international treaties and customary international law with domestic Indian jurisprudence to secure tangible accountability and relief.',
    scopes: [
      'Enforcement of ICCPR, ICESCR, and CEDAW provisions before domestic courts',
      'Strategic actions against sexual and gender-based violence (SGBV)',
      'Protection of bonded labourers, manual scavengers, and disenfranchised communities',
      'Submissions to United Nations special procedures and human rights rapporteurs',
      'Strategic feminist constitutional lawyering for community empowerment',
    ],
    forums: 'Supreme Court of India, High Courts, National Human Rights Commission (NHRC)',
  },
  {
    id: 'humanitarian-law',
    num: '04',
    title: 'International Humanitarian Law',
    summary:
      'Advocating for the rights of displaced populations, victims of cross-border conflict, and individuals trapped within jurisdictional vacuums.',
    scopes: [
      'Application of Geneva Conventions and customary international humanitarian law',
      'Enforcement of the international customary principle of Non-Refoulement',
      'Protection of children and civilian populations affected by armed conflict and internal strife',
      'Humanitarian relief advocacy for migrant workers and conflict-displaced groups',
    ],
    forums: 'Supreme Court of India, High Courts, Diplomatic & Inter-Governmental Consultancies',
  },
  {
    id: 'refugee-law',
    num: '05',
    title: 'Asylum & Refugee Law',
    summary:
      'Landmark habeas corpus filings, dignity protections, and litigating against the indefinite detention of refugees in Indian holding centres.',
    scopes: [
      'Litigation for refugee access to healthcare, maternal care, and basic human dignity (Sabera Khatoon v. Union of India)',
      'Habeas corpus petitions challenging custodial disappearances and detention without trial',
      'Ensuring educational access for displaced and refugee children in state schools',
      'Liaison with UNHCR New Delhi and regional refugee rights networks',
    ],
    forums: 'Supreme Court of India, Delhi High Court, Jammu & Kashmir High Court',
  },
  {
    id: 'international-criminal-law',
    num: '06',
    title: 'International Criminal Law',
    summary:
      'Engaging with international criminal jurisprudence to address systemic violence, state accountability, and extraterritorial offenses.',
    scopes: [
      'Legal advisory on crimes against humanity and universal jurisdiction',
      'Custodial violence, torture, and enforced disappearance claims under international benchmarks',
      'Cross-border evidentiary procedures, mutual legal assistance treaties (MLAT), and extradition law',
    ],
    forums: 'Special Courts, High Courts, International Advisory Bodies',
  },
  {
    id: 'criminal-law',
    num: '07',
    title: 'Criminal Law & Trial Defense',
    summary:
      'Client-centric criminal defense across trial courts and appellate benches, safeguarding liberty and due process from the moment of arrest.',
    scopes: [
      'Anticipatory bail, regular bail, and statutory bail applications',
      'Trial defense in Sessions Courts and Special Courts (including SC/ST Atrocities cases)',
      'Quashing of FIRs and malicious prosecutions under Section 482 CrPC / Bharatiya Nagarik Suraksha Sanhita',
      'Appellate defense before High Courts and the Supreme Court against wrongful convictions',
    ],
    forums: 'Magistrate & Sessions Courts, Trial Courts across Delhi NCR, Bombay, High Courts',
  },
  {
    id: 'civil-law',
    num: '08',
    title: 'Civil & Commercial Litigation',
    summary:
      'Comprehensive representation in civil, commercial, and property disputes, providing pragmatic, rigorous counsel for individuals and enterprises.',
    scopes: [
      'Breach of contract, specific performance, and injunction suits',
      'Property, real estate, and tenancy disputes',
      'Consumer protection matters before District, State, and National Commissions',
      'Corporate governance, partnership disputes, and insolvency-related proceedings',
    ],
    forums: 'District Civil Courts, Commercial Courts, NCLT, NCDRC, High Courts',
  },
  {
    id: 'labour-law',
    num: '09',
    title: 'Labour & Employment Law',
    summary:
      'Defending the rights of working-class clients, informal labourers, and professionals in domestic employment and wage compliance matters.',
    scopes: [
      'Fair wages, minimum wage compliance, and prevention of unlawful wage deductions',
      'Prevention of Sexual Harassment at the Workplace (POSH) compliance and inquiries',
      'Representation of unorganised and migrant labourers against unlawful terminations',
      'Expatriate employment contracts and cross-border labour mobility rights',
    ],
    forums: 'Labour Courts, Industrial Tribunals, High Courts',
  },
  {
    id: 'adr',
    num: '10',
    title: 'Alternate Dispute Resolution (ADR)',
    summary:
      'Arbitration, mediation, and conciliation services tailored to deliver expedient, binding, and cost-effective resolution outside traditional courtrooms.',
    scopes: [
      'Domestic and International Commercial Arbitrations under the Arbitration & Conciliation Act',
      'Contractual arbitrations involving international law and equity principles',
      'Commercial and family dispute mediation',
      'Enforcement of foreign arbitral awards and challenge proceedings under Section 34',
    ],
    forums: 'Institutional Arbitration Centres (MCIA, DIAC), Ad-hoc Arbitral Tribunals',
  },
];

export default function PracticeAreasPage() {
  return (
    <div className="bg-[#FEF9F3]">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[#E8E0D5] bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              Chambers Practice
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#0B0B0C] tracking-tight font-serif mb-6 leading-tight">
              Litigation Practice &amp; Alternate Dispute Resolution
            </h1>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              We offer comprehensive representation across all judicial forums in India. From constitutional benches at the Supreme Court to commercial arbitrations, our practice is anchored in legal rigor and client-centric advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Details List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {DETAILED_PRACTICES.map((practice) => (
            <div
              key={practice.id}
              id={practice.id}
              className="p-8 sm:p-12 bg-white border border-[#E7DFD5] rounded-sm shadow-sm space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#F0E8DD] pb-6 gap-4">
                <div>
                  <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-2">
                    AREA {practice.num}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#0B0B0C]">
                    {practice.title}
                  </h2>
                </div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Chamber.MU Litigation &amp; Advisory
                </div>
              </div>

              <p className="text-sm sm:text-base font-light text-neutral-800 leading-relaxed max-w-4xl">
                {practice.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                <div className="md:col-span-8 space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-900">
                    Scope of Legal Representation
                  </h3>
                  <ul className="space-y-2.5">
                    {practice.scopes.map((scope, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-neutral-700">
                        <Check className="w-4 h-4 text-[#A88B58] shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 p-6 bg-[#FBF5EC] border border-[#EBE3D8] rounded-sm space-y-3 self-start">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-neutral-900">
                    <Landmark className="w-4 h-4 text-[#A88B58]" />
                    <span>Primary Forums</span>
                  </div>
                  <p className="text-xs font-light text-neutral-700 leading-relaxed">
                    {practice.forums}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="py-16 bg-[#0B0B0C] text-[#FEF9F3] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light font-serif text-white">
            Require Legal Counsel or Dispute Representation?
          </h2>
          <p className="text-xs sm:text-sm font-light text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Reach out to our chambers in New Delhi or Coimbatore to consult on ongoing matters or representation before the courts.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FEF9F3] text-[#0B0B0C] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-white transition-colors"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#A88B58]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
