import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../data/products';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8FC] border-b border-[#E9C8DF]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E9C8DF] shadow-[0_4px_24px_rgba(59,40,84,0.04)] relative overflow-hidden">
          {/* Subtle background gradient circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-[#A98BD4]/10 to-[#E9C8DF]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#3B2854] tracking-tight mb-3 relative z-10">
            Ready to Go Premium? ✨
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#69587B] max-w-xl mx-auto mb-8 relative z-10">
            Temukan aplikasi favoritmu dengan harga yang lebih hemat.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 relative z-10">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="final-order-wa-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa50] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Order via WhatsApp</span>
            </a>

            <a
              href="#katalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8FC] hover:bg-white text-[#3B2854] border border-[#E9C8DF] font-bold text-sm sm:text-base px-7 py-3.5 rounded-2xl transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#A98BD4]" />
              <span>Lihat Katalog Produk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
