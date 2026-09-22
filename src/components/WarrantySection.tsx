import React from 'react';
import { ShieldCheck, MessageCircle, HelpCircle, CheckCircle2 } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../data/products';

export const WarrantySection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8FC] border-b border-[#E9C8DF]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E9C8DF] shadow-[0_4px_24px_rgba(59,40,84,0.04)] text-center relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A98BD4]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FAF8FC] border border-[#E9C8DF] flex items-center justify-center text-[#A98BD4] shadow-xs mb-4">
            <ShieldCheck className="w-7 h-7 text-[#A98BD4]" />
          </div>

          {/* Title */}
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#3B2854] tracking-tight mb-3">
            Belanja Lebih Tenang 🛡️
          </h2>

          {/* Core Explanation */}
          <p className="text-sm sm:text-base text-[#69587B] leading-relaxed max-w-2xl mx-auto mb-6">
            Setiap produk memiliki ketentuan garansi masing-masing. Jika terjadi kendala sesuai ketentuan garansi, customer dapat langsung menghubungi admin untuk mendapatkan bantuan hingga tuntas.
          </p>

          {/* Transparent Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-left">
            <div className="p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#E9C8DF]/70 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#A98BD4] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#3B2854] block mb-0.5">Sesuai Ketentuan</strong>
                <span className="text-[11px] text-[#69587B]">Transparan mengikuti deskripsi masing-masing paket produk.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#E9C8DF]/70 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#A98BD4] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#3B2854] block mb-0.5">Bantuan Cepat</strong>
                <span className="text-[11px] text-[#69587B]">Respon sigap via WhatsApp jika ada masalah login atau akses.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8FC] border border-[#E9C8DF]/70 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#A98BD4] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-[#3B2854] block mb-0.5">Solusi & Penggantian</strong>
                <span className="text-[11px] text-[#69587B]">Perbaikan akun atau unit pengganti sesuai batas waktu aktif.</span>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A98BD4] hover:bg-[#9776c7] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Tanya Ketentuan Garansi ke Admin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
