import React from 'react';
import { MessageCircle, Send, Heart, ArrowUp } from 'lucide-react';
import { CutenessLogo } from './CutenessLogo';
import { WHATSAPP_NUMBER, TELEGRAM_TESTIMONI_URL, getGeneralWhatsAppUrl } from '../data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E9C8DF] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <CutenessLogo size="md" />
            <p className="text-xs sm:text-sm text-[#69587B] italic">
              &ldquo;Premium apps, better price.&rdquo;
            </p>
            <p className="text-xs text-[#69587B] leading-relaxed max-w-md">
              Toko digital terpercaya penyedia aplikasi premium pilihan dengan harga lebih hemat, bergaransi, dan proses mudah langsung via WhatsApp.
            </p>
          </div>

          {/* Col 2: Hubungi Kami */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B2854] mb-3">
              Kontak Kami
            </h4>
            <div className="space-y-2 text-xs text-[#69587B]">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <div>
                  <span className="font-semibold block text-[#3B2854]">WhatsApp:</span>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A98BD4] transition-colors"
                  >
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Testimoni & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B2854] mb-3">
              Testimoni Resmi
            </h4>
            <div className="space-y-2 text-xs text-[#69587B]">
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-[#2AABEE]" />
                <div>
                  <span className="font-semibold block text-[#3B2854]">Telegram:</span>
                  <a
                    href={TELEGRAM_TESTIMONI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2AABEE] transition-colors"
                  >
                    Telegram Cuteness.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-[#E9C8DF]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#69587B]">
          <p>
            © {new Date().getFullYear()} Cuteness.id. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2854] hover:text-[#A98BD4] transition-colors cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
