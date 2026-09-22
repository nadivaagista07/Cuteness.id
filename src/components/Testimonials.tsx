import React from 'react';
import { Send, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { TELEGRAM_TESTIMONI_URL, TESTIMONIALS } from '../data/products';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials = TESTIMONIALS }) => {
  return (
    <section id="testimoni" className="py-14 sm:py-20 bg-white border-b border-[#E9C8DF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A98BD4] mb-2 block">
            Pengalaman Pelanggan
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#3B2854] tracking-tight">
            Real Stories from Cuteness.id Users 💜
          </h2>
          <p className="text-sm sm:text-base text-[#69587B] mt-2">
            Lihat pengalaman customer lainnya sebelum kamu order.
          </p>

          {/* Primary Action Button to Telegram Channel */}
          <div className="mt-6 px-2">
            <a
              href={TELEGRAM_TESTIMONI_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="view-all-testimonials-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2AABEE] hover:bg-[#2297d4] active:bg-[#1d82b8] text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
            >
              <Send className="w-4 h-4 fill-white shrink-0" />
              <span>Lihat Semua Testimoni</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
            </a>
            <p className="text-[11px] text-[#69587B] mt-2">
              (Link resmi channel testimoni Telegram Cuteness.id)
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8FC] p-5 sm:p-6 rounded-2xl border border-[#E9C8DF]/70 hover:border-[#A98BD4] shadow-[0_2px_10px_rgba(59,40,84,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Terverifikasi</span>
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#292330] leading-relaxed mb-4">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-3 border-t border-[#E9C8DF]/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#3B2854] text-white flex items-center justify-center font-bold text-xs">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3B2854]">{item.name}</h4>
                    <p className="text-[11px] text-[#69587B]">{item.productBought}</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#69587B]">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
