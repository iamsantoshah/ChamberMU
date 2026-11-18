'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FEF9F3] text-[#0B0B0C] min-h-screen flex items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md space-y-4">
          <h2 className="text-3xl font-light font-serif">Chambers System Notice</h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            A temporary client error occurred while loading application resources.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#0B0B0C] text-[#FEF9F3] text-xs uppercase tracking-widest font-medium rounded-sm"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
