import React from 'react';
import { Send, ExternalLink, ShieldCheck, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { TELEGRAM_TESTIMONI_URL } from '../data/products';

export const Testimonials: React.FC = () => {
  const trustPoints = [
    {
      icon: MessageSquare,
      title: 'Chat Kepuasan Asli',
      desc: 'Screenshot percakapan langsung dari customer tanpa edit atau rekayasa.',
    },
    {
      icon: CheckCircle2,
      title: 'Bukti Transfer & Aktivasi',
      desc: 'Riwayat transaksi berhasil dan aktivasi akun premium setiap harinya.',
    },
    {
      icon: ShieldCheck,
      title: 'Garansi Transparan',
      desc: 'Bukti nyata proses klaim dan penggantian akun jika terjadi kendala.',
    },
  ];

  return (
    <section id="testimoni" className="py-14 sm:py-20 bg-white border-b border-[#E9C8DF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Showcase Card */}
        <div className="bg-gradient-to-br from-[#FAF8FC] via-white to-[#F5EFFB] rounded-3xl border border-[#E9C8DF] p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(59,40,84,0.04)] relative overflow-hidden">
          {/* Subtle decorative background blur circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A98BD4]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#E9C8DF]/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E9C8DF] text-[11px] font-bold text-[#3B2854] mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#A98BD4]" />
              <span>100% Real Transaksi & Testimoni</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-[#3B2854] tracking-tight">
              Bukti & Testimoni Asli Cuteness.id 💜
            </h2>

            <p className="text-sm sm:text-base text-[#69587B] mt-3 leading-relaxed max-w-2xl mx-auto">
              Kami tidak menampilkan ulasan buatan di website. Seluruh bukti transaksi nyata, testimoni kepuasan pelanggan, dan update garansi dapat kamu lihat secara terbuka dan transparan di channel resmi Telegram kami.
            </p>

            {/* Telegram Action Button */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={TELEGRAM_TESTIMONI_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="view-all-testimonials-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2AABEE] hover:bg-[#2297d4] active:bg-[#1d82b8] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-md shadow-[#2AABEE]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Send className="w-4 h-4 fill-white shrink-0" />
                <span>Buka Channel Testimoni Telegram</span>
                <ExternalLink className="w-4 h-4 opacity-80 shrink-0" />
              </a>
            </div>

            <p className="text-[11px] text-[#69587B] mt-2.5">
              Link resmi: <span className="font-semibold text-[#3B2854]">{TELEGRAM_TESTIMONI_URL}</span>
            </p>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-10 text-left">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-[#E9C8DF]/80 shadow-2xs flex flex-col gap-2"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#A98BD4]/15 text-[#3B2854] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#3B2854]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#3B2854]">
                        {point.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#69587B] mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

