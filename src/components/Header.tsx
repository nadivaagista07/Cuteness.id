import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { CutenessLogo } from './CutenessLogo';
import { getGeneralWhatsAppUrl } from '../data/products';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E9C8DF]/50 shadow-[0_2px_12px_rgba(59,40,84,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center group focus:outline-none" aria-label="Cuteness.id Home">
            <CutenessLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="#"
              className="px-3.5 py-1.5 text-sm font-semibold text-[#3B2854]/80 hover:text-[#3B2854] hover:bg-[#FAF8FC] rounded-xl transition-colors"
            >
              Home
            </a>
            <a
              href="#katalog"
              className="px-3.5 py-1.5 text-sm font-semibold text-[#3B2854]/80 hover:text-[#3B2854] hover:bg-[#FAF8FC] rounded-xl transition-colors"
            >
              Produk
            </a>
            <a
              href="#cara-order"
              className="px-3.5 py-1.5 text-sm font-semibold text-[#3B2854]/80 hover:text-[#3B2854] hover:bg-[#FAF8FC] rounded-xl transition-colors"
            >
              Cara Order
            </a>
            <a
              href="#testimoni"
              className="px-3.5 py-1.5 text-sm font-semibold text-[#3B2854]/80 hover:text-[#3B2854] hover:bg-[#FAF8FC] rounded-xl transition-colors"
            >
              Testimoni
            </a>
            <a
              href="#faq"
              className="px-3.5 py-1.5 text-sm font-semibold text-[#3B2854]/80 hover:text-[#3B2854] hover:bg-[#FAF8FC] rounded-xl transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#3B2854] hover:bg-[#FAF8FC] rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Buka menu navigasi"
              id="mobile-nav-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-16 bg-[#292330]/40 backdrop-blur-xs z-30 animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden relative z-40 border-t border-[#E9C8DF]/60 bg-white/98 px-5 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#3B2854] hover:bg-[#FAF8FC] active:bg-[#FAF8FC]"
            >
              <span>Beranda</span>
              <span className="text-xs text-[#A98BD4]">→</span>
            </a>
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#3B2854] hover:bg-[#FAF8FC] active:bg-[#FAF8FC]"
            >
              <span>Katalog Produk</span>
              <span className="text-xs text-[#A98BD4]">→</span>
            </a>
            <a
              href="#cara-order"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#3B2854] hover:bg-[#FAF8FC] active:bg-[#FAF8FC]"
            >
              <span>Cara Order</span>
              <span className="text-xs text-[#A98BD4]">→</span>
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#3B2854] hover:bg-[#FAF8FC] active:bg-[#FAF8FC]"
            >
              <span>Testimoni Pelanggan</span>
              <span className="text-xs text-[#A98BD4]">→</span>
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#3B2854] hover:bg-[#FAF8FC] active:bg-[#FAF8FC]"
            >
              <span>FAQ</span>
              <span className="text-xs text-[#A98BD4]">→</span>
            </a>
            <div className="pt-3 border-t border-[#E9C8DF]/60 mt-2 space-y-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1caa50] text-white font-bold py-3 rounded-2xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat Admin via WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
