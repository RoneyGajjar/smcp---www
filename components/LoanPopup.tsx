"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { X, Home, Timer, Building2 } from 'lucide-react';

interface LoanSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoanSelectionModal({ isOpen, onClose }: LoanSelectionModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  // New handler takes a specific URL path
  const handleSelection = (route: string) => {
    router.push(route);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl relative overflow-hidden animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6 md:p-8 flex justify-between items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            What kind of loan are you looking for?
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 transition-colors p-1"
            aria-label="Close modal"
          >
            <X size={28} strokeWidth={2} />
          </button>
        </div>

        <div className="px-6 md:px-8 pb-8 space-y-4">

          {/* BUSINESS LOAN - Routes to a dedicated /business-loan page */}
          <button
            onClick={() => handleSelection('/business-loan')}
            className="w-full flex items-center gap-4 bg-[#0a251e] hover:bg-[#123d32] text-white p-5 rounded-md transition-all shadow-md group"
          >
            <Home size={28} strokeWidth={1.5} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg md:text-xl font-semibold text-left">
              Business Loan
            </span>
          </button>

          {/* COMMERCIAL PROPERTY */}
          <button
            onClick={() => handleSelection('/userjourney')}
            className="w-full flex items-center gap-4 bg-[#0a251e] hover:bg-[#123d32] text-white p-5 rounded-md transition-all shadow-md group"
          >
            <Home size={28} strokeWidth={1.5} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg md:text-xl font-semibold text-left">
              Commercial Property
            </span>
          </button>

          {/* INVESTMENT PROPERTY */}
          <button
            onClick={() => handleSelection('/userjourney')}
            className="w-full flex items-center gap-4 bg-[#0a251e] hover:bg-[#123d32] text-white p-5 rounded-md transition-all shadow-md group"
          >
            <Timer size={28} strokeWidth={1.5} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg md:text-xl font-semibold text-left">
              Investment Property
            </span>
          </button>

          {/* CONSTRUCTION PROPERTY */}
          <button
            onClick={() => handleSelection('/userjourney')}
            className="w-full flex items-center gap-4 bg-[#0a251e] hover:bg-[#123d32] text-white p-5 rounded-md transition-all shadow-md group"
          >
            <Building2 size={28} strokeWidth={1.5} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg md:text-xl font-semibold text-left">
              Construction Property
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}