import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink, ArrowUpRight, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Chambers Directory | Chamber.MU Advocates',
  description:
    'Contact information, office locations in New Delhi and Coimbatore, telephone lines, email desks, and consultation protocols for Chamber.MU Advocates.',
};

export default function ContactPage() {
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
              Connect with Chamber.MU
            </h1>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              For professional legal consultations, trial court or appellate litigation, alternate dispute resolution, or research inquiries, please reach out to our primary chambers in New Delhi or Coimbatore.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Communication Channels */}
      <section className="py-16 border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone & WhatsApp Card */}
            <div className="bg-white border border-[#E7DFD5] p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#FBF5EC] rounded-md text-[#94753D] w-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                    Telephone &amp; WhatsApp
                  </span>
                  <h2 className="text-2xl font-light font-serif text-[#0B0B0C]">
                    +91 88607 99513
                  </h2>
                </div>
                <p className="text-xs font-light text-neutral-600 leading-relaxed">
                  Direct chambers line for briefing inquiries, urgent mentions, bail listings, and consultation scheduling.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                  <Clock className="w-3.5 h-3.5 text-[#94753D]" />
                  <span>Mon–Sat: 10:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                <a
                  href="tel:+918860799513"
                  className="text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-[#94753D] transition-colors"
                >
                  Call Chambers
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="https://wa.me/918860799513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-[#94753D] hover:underline"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-[#E7DFD5] p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#FBF5EC] rounded-md text-[#94753D] w-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                    Chambers Registry
                  </span>
                  <h2 className="text-xl sm:text-2xl font-light font-serif text-[#0B0B0C] break-all">
                    thechamber.mu@gmail.com
                  </h2>
                </div>
                <p className="text-xs font-light text-neutral-600 leading-relaxed">
                  Dedicated desk for case documents, appellate files, commercial arbitrations, academic collaborations, and internships.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#94753D]" />
                  <span>Confidential &amp; Secure Repository</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3]">
                <a
                  href="mailto:thechamber.mu@gmail.com?subject=Legal%20Consultation%20Inquiry%20-%20Chamber.MU"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-[#94753D] transition-colors"
                >
                  <span>Draft Email Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A88B58]" />
                </a>
              </div>
            </div>

            {/* Social & Digital Dispatches */}
            <div className="bg-white border border-[#E7DFD5] p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-[#FBF5EC] rounded-md text-[#94753D] w-fit">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                    Public Dispatches &amp; Media
                  </span>
                  <h2 className="text-2xl font-light font-serif text-[#0B0B0C]">
                    Digital Channels
                  </h2>
                </div>
                <p className="text-xs font-light text-neutral-600 leading-relaxed">
                  Follow official courtroom proceedings, public litigation alerts, publications, and grassroots legal reports.
                </p>
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 font-light">Instagram:</span>
                    <a
                      href="https://www.instagram.com/thechamber.mu?igsi=MXd5djlwajhyMWk4bQ%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94753D] hover:underline font-medium"
                    >
                      @thechamber.mu
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 font-light">X / Twitter:</span>
                    <a
                      href="https://x.com/thechambermu?s=11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94753D] hover:underline font-medium"
                    >
                      @thechambermu
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3]">
                <a
                  href="/media"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-[#94753D] transition-colors"
                >
                  <span>View Media &amp; Press Archive</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A88B58]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chambers Locations Grid */}
      <section className="py-20 border-b border-[#E8E0D5] bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-1">
              PHYSICAL SEATS
            </span>
            <h2 className="text-3xl font-light font-serif text-[#0B0B0C]">
              Chambers Offices &amp; Jurisdictions
            </h2>
            <p className="text-xs sm:text-sm font-light text-neutral-600 mt-2">
              Our advocates maintain active presence across national courts, regional benches, and international consultancies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* New Delhi */}
            <div className="bg-white border border-[#E7DFD5] p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#0B0B0C] text-[#FEF9F3] text-[10px] uppercase tracking-widest font-medium rounded-sm">
                    Primary Seat
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">01</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                    <MapPin className="w-4 h-4 text-[#A88B58] shrink-0" />
                    <span>New Delhi Chambers</span>
                  </div>
                  <h3 className="text-xl font-light font-serif text-[#0B0B0C] pt-1">
                    Nizamuddin East
                  </h3>
                </div>

                <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                  20/3 Nizamuddin East Market, Nizamuddin East, New Delhi – 110013
                </p>

                <div className="pt-3 border-t border-[#F2ECE3] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#94753D] font-semibold block">
                    Active Courts &amp; Benches
                  </span>
                  <p className="text-xs font-light text-neutral-600 leading-snug">
                    Supreme Court of India, High Court of Delhi, Trial Courts, and Foreigners Tribunals.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3]">
                <a
                  href="https://maps.google.com/?q=20/3+Nizamuddin+East+Market+New+Delhi+110013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-[#94753D] transition-colors"
                >
                  <span>Open Directions in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A88B58]" />
                </a>
              </div>
            </div>

            {/* Coimbatore */}
            <div className="bg-white border border-[#E7DFD5] p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#FBF5EC] text-[#94753D] text-[10px] uppercase tracking-widest font-medium rounded-sm border border-[#E7DFD5]">
                    South India Operations
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">02</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                    <MapPin className="w-4 h-4 text-[#A88B58] shrink-0" />
                    <span>Coimbatore Chambers</span>
                  </div>
                  <h3 className="text-xl font-light font-serif text-[#0B0B0C] pt-1">
                    Narasimhanaickenpalayam
                  </h3>
                </div>

                <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                  Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore – 641017
                </p>

                <div className="pt-3 border-t border-[#F2ECE3] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#94753D] font-semibold block">
                    Active Courts &amp; Benches
                  </span>
                  <p className="text-xs font-light text-neutral-600 leading-snug">
                    Madras High Court, District Courts, Commercial Arbitration, and Regional Tribunals.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3]">
                <a
                  href="https://maps.google.com/?q=Narasimhanaickenpalayam+Coimbatore+641017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-[#94753D] transition-colors"
                >
                  <span>Open Directions in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A88B58]" />
                </a>
              </div>
            </div>

            {/* England Chapter */}
            <div className="bg-white border border-[#E7DFD5] p-8 rounded-sm shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#FBF5EC] text-neutral-700 text-[10px] uppercase tracking-widest font-medium rounded-sm border border-[#E7DFD5]">
                    International Chapter
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">03</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                    <MapPin className="w-4 h-4 text-[#A88B58] shrink-0" />
                    <span>England Chapter</span>
                  </div>
                  <h3 className="text-xl font-light font-serif text-[#0B0B0C] pt-1">
                    United Kingdom
                  </h3>
                </div>

                <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                  International Human Rights Law Research, Cross-Border Consultancies &amp; Comparative Jurisprudence
                </p>

                <div className="pt-3 border-t border-[#F2ECE3] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#94753D] font-semibold block">
                    Advisory Focus
                  </span>
                  <p className="text-xs font-light text-neutral-600 leading-snug">
                    Transnational human rights reporting, international asylum frameworks, and academic partnerships.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3]">
                <a
                  href="/team#england-chapter"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-[#94753D] transition-colors"
                >
                  <span>Meet England Researchers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A88B58]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Protocol & Compliance Guidance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 bg-white border border-[#E7DFD5] rounded-sm space-y-4">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                <Clock className="w-4 h-4 text-[#A88B58]" />
                <span>Consultation Scheduling &amp; Appointments</span>
              </div>
              <h3 className="text-xl font-light font-serif text-[#0B0B0C]">
                Consultations by Prior Appointment
              </h3>
              <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                In strict adherence to courtroom hearing calendars and chamber schedules, in-person consultations at both New Delhi and Coimbatore are arranged by prior confirmed appointment. Secure video conference consultations are available for outstation, international, or detained individuals&apos; family members.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-white border border-[#E7DFD5] rounded-sm space-y-4">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                <ShieldCheck className="w-4 h-4 text-[#A88B58]" />
                <span>Advocate-Client Privilege &amp; BCI Compliance</span>
              </div>
              <h3 className="text-xl font-light font-serif text-[#0B0B0C]">
                Regulatory Declaration &amp; Confidentiality
              </h3>
              <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                All communications, records, and consultations are protected under advocate-client confidentiality and handled in compliance with the Bar Council of India rules. Chamber.MU does not advertise or solicit work; information is provided exclusively upon voluntary request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
