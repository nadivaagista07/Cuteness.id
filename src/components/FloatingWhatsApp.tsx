import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralWhatsAppUrl, WHATSAPP_NUMBER } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end">
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="mb-2 relative bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-[#E9C8DF] flex items-center gap-2 max-w-xs">
          <div className="text-left">
            <p className="text-xs font-bold text-[#3B2854]">Butuh bantuan order?</p>
            <p className="text-[11px] text-[#69587B]">Admin siap respon ramah & cepat</p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#69587B] hover:text-[#3B2854] p-0.5 cursor-pointer ml-1"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-[#E9C8DF] transform rotate-45" />
        </div>
      )}

      {/* WhatsApp Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Hubungi Cuteness.id di WhatsApp ${WHATSAPP_NUMBER}`}
        id="floating-wa-btn"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa50] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-lg shadow-emerald-600/25 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        <span className="font-bold text-xs sm:text-sm tracking-wide hidden sm:inline">
          Order via WhatsApp
        </span>
        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border-2 border-white" />
        </span>
      </a>
    </div>
  );
};
