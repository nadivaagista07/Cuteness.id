import React from 'react';
import { ShoppingBag, MessageCircle, Star, ShieldCheck, Zap, CreditCard, Lock } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../data/products';

export const Hero: React.FC = () => {
  // Feature highlight ornaments replacing the old app logo row
  const featureHighlights = [
    {
      title: 'Full Garansi',
      desc: 'Penggantian akun jika bermasalah',
      icon: ShieldCheck,
      color: 'text-[#A98BD4] bg-[#A98BD4]/15',
    },
    {
      title: 'Proses Kilat',
      desc: 'Admin ramah, aktif & fast respon',
      icon: Zap,
      color: 'text-amber-500 bg-amber-500/15',
    },
    {
      title: 'QRIS & Semua Bank',
      desc: 'BCA, BRI, Mandiri, Dana, Gopay',
      icon: CreditCard,
      color: 'text-indigo-500 bg-indigo-500/15',
    },
    {
      title: 'Aman & Legal',
      desc: 'Terpercaya sejak 2023',
      icon: Lock,
      color: 'text-emerald-600 bg-emerald-500/15',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20 bg-[#FAF8FC] border-b border-[#E9C8DF]/50">
      {/* Background Decorative Layer: Multi-color soft ambient gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A98BD4]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#E9C8DF]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/3 w-96 h-72 bg-[#FDA4AF]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Decorative 4-Point Sparkle Stars (Hiasan Latar) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Sparkle Star 1 - Top Left */}
        <svg
          className="absolute top-10 left-[8%] w-6 h-6 text-[#A98BD4]/40 animate-subtle-float"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Sparkle Star 2 - Top Right */}
        <svg
          className="absolute top-16 right-[10%] w-5 h-5 text-[#E9C8DF] animate-subtle-float"
          style={{ animationDelay: '1.2s' }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Sparkle Star 3 - Mid Left */}
        <svg
          className="absolute top-1/2 left-[4%] w-4 h-4 text-[#FDA4AF]/60 animate-subtle-float"
          style={{ animationDelay: '2s' }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Sparkle Star 4 - Mid Right */}
        <svg
          className="absolute top-1/2 right-[5%] w-7 h-7 text-[#A98BD4]/30 animate-subtle-float"
          style={{ animationDelay: '0.6s' }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Sparkle Star 5 - Bottom Right */}
        <svg
          className="absolute bottom-16 right-[15%] w-5 h-5 text-[#E9C8DF]/80 animate-subtle-float"
          style={{ animationDelay: '1.8s' }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Decorative subtle ring */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] border border-[#E9C8DF]/35 rounded-[100%] pointer-events-none" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[900px] h-[450px] border border-[#A98BD4]/15 rounded-[100%] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Brand Visual Anchor: Clean badge without round pulsing dots */}
          <div className="inline-flex justify-center mb-5 sm:mb-6">
            <div className="py-1 px-3.5 sm:px-4 rounded-xl bg-white border border-[#E9C8DF] shadow-[0_2px_10px_rgba(169,139,212,0.12)] flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              <span className="font-extrabold text-[#3B2854] tracking-wide">
                Cuteness.id
              </span>
              <span className="text-[#E9C8DF]">|</span>
              <span className="font-medium text-[#69587B]">
                Trusted App Store
              </span>
              <span className="text-[#E9C8DF] hidden xs:inline">|</span>
              <span className="font-semibold text-[#69587B] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span>4.9/5 Rating</span>
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-[#3B2854] tracking-tight leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-5">
            Premium Apps, <br />
            <span className="text-[#A98BD4]">
              Better Price. ✨
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg text-[#69587B] font-normal leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-10 px-2 sm:px-0">
            Berbagai aplikasi premium dengan harga lebih hemat, proses mudah, dan layanan yang siap membantu.
          </p>

          {/* Call to Actions (No duplicate icons - clean Lucide icons without duplicate emojis) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full max-w-md mx-auto sm:max-w-none">
            <a
              href="#katalog"
              id="hero-catalog-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#A98BD4] hover:bg-[#9776c7] active:bg-[#8663b6] text-white font-bold text-sm sm:text-base px-6 py-3.5 sm:px-7 rounded-2xl shadow-[0_4px_16px_rgba(169,139,212,0.35)] active:scale-95 transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Lihat Produk</span>
            </a>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-wa-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF8FC] text-[#3B2854] border border-[#E9C8DF] font-bold text-sm sm:text-base px-6 py-3.5 sm:px-7 rounded-2xl shadow-xs hover:border-[#A98BD4] active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          {/* Decorative Trust & Service Highlights (Replaces the raw app logo list with aesthetic ornaments) */}
          <div className="pt-6 sm:pt-7 border-t border-[#E9C8DF]/60 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-left">
              {featureHighlights.map((feat) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-3 sm:p-3.5 bg-white/90 rounded-2xl border border-[#E9C8DF]/80 shadow-[0_2px_8px_rgba(59,40,84,0.03)] hover:border-[#A98BD4] transition-all"
                  >
                    <div className={`w-7 h-7 rounded-xl ${feat.color} flex items-center justify-center mb-2`}>
                      <FeatIcon className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold text-[#3B2854] leading-tight mb-0.5">
                      {feat.title}
                    </p>
                    <p className="text-[11px] text-[#69587B] leading-tight">
                      {feat.desc}
                    </p>
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

