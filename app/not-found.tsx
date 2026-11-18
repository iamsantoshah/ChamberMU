import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FEF9F3] px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono tracking-widest text-[#94753D]">ERROR 404</span>
        <h1 className="text-4xl font-light font-serif text-[#0B0B0C]">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm font-light text-neutral-600 leading-relaxed">
          The chambers page or document you requested does not exist or may have been relocated.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B0B0C] text-[#FEF9F3] text-xs uppercase tracking-widest rounded-sm hover:bg-neutral-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#A88B58]" />
            <span>Return to Chambers Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
