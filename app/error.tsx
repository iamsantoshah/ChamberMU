'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-[#FEF9F3]">
      <span className="text-xs font-mono text-[#94753D] tracking-widest block mb-2">ERROR</span>
      <h2 className="text-3xl font-light font-serif text-[#0B0B0C] mb-4">
        An Unexpected Error Occurred
      </h2>
      <p className="text-xs sm:text-sm font-light text-neutral-600 max-w-md mb-6 leading-relaxed">
        We encountered a problem loading this section of the chambers website.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-[#0B0B0C] text-[#FEF9F3] text-xs uppercase tracking-widest font-medium rounded-sm hover:bg-neutral-800 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
