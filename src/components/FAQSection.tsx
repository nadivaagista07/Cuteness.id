import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, getGeneralWhatsAppUrl } from '../data/products';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-[#E9C8DF]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A98BD4] mb-2 block">
            Pertanyaan Umum
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#3B2854] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#69587B] mt-2">
            Jawaban singkat dan jelas seputar layanan dan pemesanan di Cuteness.id.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#A98BD4] bg-[#FAF8FC] shadow-xs'
                    : 'border-[#E9C8DF]/80 hover:border-[#A98BD4]/60 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#3B2854]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#3B2854] text-white'
                        : 'bg-[#FAF8FC] text-[#69587B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-[#69587B] leading-relaxed border-t border-[#E9C8DF]/50">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 text-center bg-[#FAF8FC] border border-[#E9C8DF] rounded-2xl p-5 sm:p-6">
          <p className="text-xs sm:text-sm text-[#3B2854] font-semibold mb-2">
            Punya pertanyaan lain yang belum terjawab di sini?
          </p>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A98BD4] hover:text-[#9776c7]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat langsung dengan admin kami via WhatsApp &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
