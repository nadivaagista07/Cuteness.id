import React from 'react';
import { Sparkles, Shield, Zap, MessageCircle } from 'lucide-react';

export const TrustBenefits: React.FC = () => {
  const benefits = [
    {
      id: 'benefit-harga-hemat',
      title: '💜 Harga Hemat',
      desc: 'Premium tanpa harus bayar mahal.',
      icon: Sparkles,
      iconColor: 'text-[#A98BD4]',
      iconBg: 'bg-[#FAF8FC] border-[#E9C8DF]',
    },
    {
      id: 'benefit-bergaransi',
      title: '🛡️ Bergaransi',
      desc: 'Garansi mengikuti ketentuan masing-masing produk.',
      icon: Shield,
      iconColor: 'text-[#A98BD4]',
      iconBg: 'bg-[#FAF8FC] border-[#E9C8DF]',
    },
    {
      id: 'benefit-proses-mudah',
      title: '⚡ Proses Mudah',
      desc: 'Order langsung melalui WhatsApp.',
      icon: Zap,
      iconColor: 'text-[#A98BD4]',
      iconBg: 'bg-[#FAF8FC] border-[#E9C8DF]',
    },
    {
      id: 'benefit-customer-support',
      title: '💬 Customer Support',
      desc: 'Admin siap membantu jika ada kendala.',
      icon: MessageCircle,
      iconColor: 'text-[#A98BD4]',
      iconBg: 'bg-[#FAF8FC] border-[#E9C8DF]',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E9C8DF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#FAF8FC] border border-[#E9C8DF]/70 hover:border-[#A98BD4] shadow-[0_2px_12px_rgba(59,40,84,0.03)] hover:shadow-md transition-all duration-200"
            >
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#3B2854] mb-2 flex items-center gap-1.5">
                {item.title}
              </h3>

              <p className="text-sm text-[#69587B] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
