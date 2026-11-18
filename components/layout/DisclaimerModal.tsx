'use client';

import React, { useEffect, useState } from 'react';
import { ShieldAlert, Check } from 'lucide-react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the BCI disclaimer
    const acknowledged = localStorage.getItem('chambermu_disclaimer_accepted');
    if (!acknowledged) {
      setIsOpen(true);
    }

    // Allow opening via custom event (e.g. from footer link)
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-bci-disclaimer', handleOpen);
    return () => window.removeEventListener('open-bci-disclaimer', handleOpen);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('chambermu_disclaimer_accepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="disclaimer-title" 
        className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#FEF9F3] border border-[#E2D9CC] rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E0D5] bg-[#F7F0E5] flex items-center gap-3">
          <div className="p-2 bg-amber-100/80 rounded-lg text-amber-900">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 id="disclaimer-title" className="text-sm font-semibold tracking-wider text-neutral-900 uppercase">
              Regulatory Compliance & Disclaimer
            </h2>
            <p className="text-xs text-neutral-600">Bar Council of India Compliance Notice</p>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="px-6 py-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
          <p className="font-normal text-neutral-900">
            The Bar Council of India rules prohibit Advocates from advertising or soliciting work in any form or manner. By accessing the Chamber.MU website (www.chambermu.in), the user acknowledges and agrees to the following:
          </p>

          <ul className="space-y-3 list-disc pl-5">
            <li>
              <strong>Informational Purpose:</strong> This website and its contents are for informational purposes only and are not in the nature of solicitation, advertisement, or inducement by Chamber.MU or its members. Any information provided here does not constitute legal advice and should not be relied upon as such.
            </li>
            <li>
              <strong>No Attorney-Client Relationship:</strong> Accessing this website does not create an attorney-client relationship between the user and Chamber.MU.
            </li>
            <li>
              <strong>Voluntary Access:</strong> The user confirms that they have voluntarily sought information about Chamber.MU for their own use and acknowledges that there has been no solicitation, advertisement, or inducement from Chamber.MU, its partners, or its members.
            </li>
            <li>
              <strong>Data Privacy:</strong> This website may collect personal information (e.g., names, contact details, academic qualifications, and professional details) for assessing inquiries, providing information regarding the firm&apos;s services, and client engagement in compliance with applicable data protection laws.
            </li>
            <li>
              <strong>Anti-Fraud Warning:</strong> Chamber.MU does not request payments from candidates for recruitment or internship opportunities. Any solicitation of this nature is fraudulent.
            </li>
            <li>
              <strong>Intellectual Property:</strong> All information and content on this website are the intellectual property of Chamber.MU. Unauthorized use or reproduction is strictly prohibited.
            </li>
          </ul>

          <p className="text-xs text-neutral-500 pt-2 border-t border-[#E8E0D5]">
            By clicking &quot;I Understand &amp; Accept&quot; below, you confirm your voluntary intent to view the contents of this website.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 bg-[#F7F0E5] border-t border-[#E8E0D5] flex items-center justify-end">
          <button
            onClick={handleAccept}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B0B0C] hover:bg-neutral-800 text-[#FEF9F3] text-xs sm:text-sm font-medium tracking-wide uppercase rounded-md transition-colors shadow-sm"
          >
            <Check className="w-4 h-4 text-amber-300" />
            I Understand &amp; Accept
          </button>
        </div>
      </div>
    </div>
  );
}
