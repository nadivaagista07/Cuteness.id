import React, { useState, useEffect } from 'react';
import { Home, ShoppingBag, HelpCircle, Star, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../data/products';

export const MobileBottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const catalogEl = document.getElementById('katalog');
      const howToOrderEl = document.getElementById('cara-order');
      const testimoniEl = document.getElementById('testimoni');
      const faqEl = document.getElementById('faq');

      if (faqEl && scrollY >= faqEl.offsetTop - 300) {
        setActiveSection('faq');
      } else if (testimoniEl && scrollY >= testimoniEl.offsetTop - 300) {
        setActiveSection('testimoni');
      } else if (howToOrderEl && scrollY >= howToOrderEl.offsetTop - 300) {
        setActiveSection('cara-order');
      } else if (catalogEl && scrollY >= catalogEl.offsetTop - 300) {
        setActiveSection('katalog');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navigasi Menu Mobile"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E9C8DF] shadow-[0_-4px_20px_rgba(59,40,84,0.08)] px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* 1. Home */}
        <a
          href="#"
          onClick={() => setActiveSection('home')}
          className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl transition-colors ${
            activeSection === 'home'
              ? 'text-[#A98BD4] font-bold'
              : 'text-[#69587B] hover:text-[#3B2854] font-medium'
          }`}
        >
          <Home className={`w-5 h-5 mb-0.5 ${activeSection === 'home' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] tracking-tight">Beranda</span>
        </a>

        {/* 2. Katalog */}
        <a
          href="#katalog"
          onClick={() => setActiveSection('katalog')}
          className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl transition-colors ${
            activeSection === 'katalog'
              ? 'text-[#A98BD4] font-bold'
              : 'text-[#69587B] hover:text-[#3B2854] font-medium'
          }`}
        >
          <ShoppingBag className={`w-5 h-5 mb-0.5 ${activeSection === 'katalog' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] tracking-tight">Katalog</span>
        </a>

        {/* 3. Center Highlight: Order via WhatsApp */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative -top-2 flex flex-col items-center justify-center p-1.5"
          aria-label="Order langsung via WhatsApp"
        >
          <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-emerald-500/30 active:scale-95 transition-transform border-2 border-white">
            <MessageCircle className="w-6 h-6 fill-white" />
          </div>
          <span className="text-[10px] font-bold text-[#1caa50] tracking-tight mt-0.5">
            Chat WA
          </span>
        </a>

        {/* 4. Cara Order */}
        <a
          href="#cara-order"
          onClick={() => setActiveSection('cara-order')}
          className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl transition-colors ${
            activeSection === 'cara-order'
              ? 'text-[#A98BD4] font-bold'
              : 'text-[#69587B] hover:text-[#3B2854] font-medium'
          }`}
        >
          <HelpCircle className={`w-5 h-5 mb-0.5 ${activeSection === 'cara-order' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] tracking-tight">Cara Order</span>
        </a>

        {/* 5. Testimoni */}
        <a
          href="#testimoni"
          onClick={() => setActiveSection('testimoni')}
          className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl transition-colors ${
            activeSection === 'testimoni'
              ? 'text-[#A98BD4] font-bold'
              : 'text-[#69587B] hover:text-[#3B2854] font-medium'
          }`}
        >
          <Star className={`w-5 h-5 mb-0.5 ${activeSection === 'testimoni' ? 'stroke-[2.5] fill-[#A98BD4]' : 'stroke-2'}`} />
          <span className="text-[10px] tracking-tight">Testimoni</span>
        </a>
      </div>
    </nav>
  );
};
