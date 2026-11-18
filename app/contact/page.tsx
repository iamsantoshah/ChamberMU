'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: 'Constitutional Law',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FEF9F3]">
      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[#E8E0D5] bg-[#FBF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#94753D] font-semibold block mb-3">
              Contact &amp; Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-light text-[#0B0B0C] tracking-tight font-serif mb-6 leading-tight">
              Connect with Chamber.MU
            </h1>
            <p className="text-base sm:text-lg font-light text-neutral-700 leading-relaxed">
              For professional legal consultations, trial court or appellate litigation, alternate dispute resolution, or research inquiries, please reach out to our chambers in New Delhi or Coimbatore.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Chambers Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-light font-serif text-[#0B0B0C]">
                  Chambers Locations
                </h2>
                <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
                  We welcome consultations by prior appointment at our primary offices.
                </p>
              </div>

              {/* Addresses */}
              <div className="space-y-6">
                <div className="p-6 bg-white border border-[#E7DFD5] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                    <MapPin className="w-4 h-4 text-[#A88B58]" />
                    <span>New Delhi Chambers</span>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                    20/3 Nizamuddin East Market, Nizamuddin East, New Delhi – 110013
                  </p>
                  <span className="inline-block text-[11px] text-neutral-500 font-mono">
                    Jurisdiction: Supreme Court &amp; Delhi High Court
                  </span>
                </div>

                <div className="p-6 bg-white border border-[#E7DFD5] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                    <MapPin className="w-4 h-4 text-[#A88B58]" />
                    <span>Coimbatore Chambers</span>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                    Door No. 24, ST-6 (Chitra Nagar), Narasimhanaickenpalayam, Coimbatore – 641017
                  </p>
                  <span className="inline-block text-[11px] text-neutral-500 font-mono">
                    South India Operations
                  </span>
                </div>

                <div className="p-6 bg-white border border-[#E7DFD5] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0C]">
                    <MapPin className="w-4 h-4 text-[#A88B58]" />
                    <span>England Chapter</span>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-neutral-700 leading-relaxed">
                    International Human Rights Law Research &amp; Advisory Consultancies
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="p-6 bg-[#FBF5EC] border border-[#E7DFD5] rounded-sm space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-900">
                  Direct Inquiries &amp; Channels
                </h3>
                <div className="space-y-3 text-sm font-light text-neutral-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#A88B58]" />
                    <a href="tel:+918860799513" className="hover:text-black hover:underline">
                      +91 88607 99513
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#A88B58]" />
                    <a href="mailto:thechamber.mu@gmail.com" className="hover:text-black hover:underline">
                      thechamber.mu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E8E0D5] flex items-center gap-4 text-xs">
                  <a
                    href="https://www.instagram.com/thechamber.mu?igsi=MXd5djlwajhyMWk4bQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#94753D] hover:underline"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-neutral-400">•</span>
                  <a
                    href="https://x.com/thechambermu?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#94753D] hover:underline"
                  >
                    <span>X / Twitter</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-neutral-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Chambers Hours: Mon–Sat, 10:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E7DFD5] p-8 sm:p-12 rounded-sm shadow-sm">
                <div className="border-b border-[#F0E8DD] pb-6 mb-8">
                  <h2 className="text-2xl font-light font-serif text-[#0B0B0C]">
                    Submit an Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm font-light text-neutral-600 mt-1">
                    Please provide an overview of your inquiry. All communications are maintained in accordance with advocate confidentiality standards.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-[#FBF5EC] border border-[#E7DFD5] rounded-sm text-center space-y-4 animate-fade-in">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-light text-[#0B0B0C]">
                      Inquiry Received
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-neutral-700 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Chamber.MU. Our administrative desk will review your details and respond promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', area: 'Constitutional Law', message: '' });
                      }}
                      className="mt-4 px-6 py-2.5 bg-[#0B0B0C] text-[#FEF9F3] text-xs uppercase tracking-widest font-medium rounded-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-medium text-neutral-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Adv. Rajesh Sharma"
                          className="w-full px-4 py-3 bg-[#FEF9F3] border border-[#E2D9CC] rounded-sm text-sm focus:outline-none focus:border-neutral-900"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-medium text-neutral-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-3 bg-[#FEF9F3] border border-[#E2D9CC] rounded-sm text-sm focus:outline-none focus:border-neutral-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-medium text-neutral-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-[#FEF9F3] border border-[#E2D9CC] rounded-sm text-sm focus:outline-none focus:border-neutral-900"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider font-medium text-neutral-700">
                          Practice Area of Inquiry
                        </label>
                        <select
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FEF9F3] border border-[#E2D9CC] rounded-sm text-sm focus:outline-none focus:border-neutral-900"
                        >
                          <option>Constitutional Law</option>
                          <option>Immigration &amp; Citizenship Law</option>
                          <option>Asylum &amp; Refugee Rights</option>
                          <option>International Human Rights</option>
                          <option>Criminal Defense &amp; Bail</option>
                          <option>Civil &amp; Commercial Litigation</option>
                          <option>Labour &amp; Employment</option>
                          <option>Alternate Dispute Resolution (ADR)</option>
                          <option>Internship / Research Opportunities</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider font-medium text-neutral-700">
                        Summary of Matter / Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe the context, jurisdiction, or nature of assistance required..."
                        className="w-full px-4 py-3 bg-[#FEF9F3] border border-[#E2D9CC] rounded-sm text-sm focus:outline-none focus:border-neutral-900"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#A88B58]" />
                        <span>Confidential &amp; Subject to BCI Regulations</span>
                      </span>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B0B0C] hover:bg-neutral-800 text-[#FEF9F3] text-xs uppercase tracking-[0.18em] font-medium rounded-sm transition-colors shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5 text-[#A88B58]" />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
