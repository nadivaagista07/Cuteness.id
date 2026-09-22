import React from 'react';
import { Smartphone, CheckSquare, MessageCircle, CreditCard, Send, ArrowRight } from 'lucide-react';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Pilih Aplikasi',
      desc: 'Cari aplikasi premium yang kamu butuhkan di katalog kami.',
      icon: Smartphone,
    },
    {
      number: '02',
      title: 'Pilih Paket',
      desc: 'Tentukan pilihan paket (Sharing, Private, Family, dll).',
      icon: CheckSquare,
    },
    {
      number: '03',
      title: 'Klik Order via WhatsApp',
      desc: 'Pesan otomatis sudah tersusun rapi untuk dikirimkan ke admin.',
      icon: MessageCircle,
    },
    {
      number: '04',
      title: 'Konfirmasi & Selesaikan Pembayaran',
      desc: 'Lakukan pembayaran melalui QRIS, E-Wallet, atau Transfer Bank.',
      icon: CreditCard,
    },
    {
      number: '05',
      title: 'Produk Dikirim',
      desc: 'Akun atau akses langsung dikirim dan siap dipakai.',
      icon: Send,
    },
  ];

  return (
    <section id="cara-order" className="py-14 sm:py-20 bg-[#FAF8FC] border-b border-[#E9C8DF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A98BD4] mb-2 block">
            Alur Pemesanan Mudah
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#3B2854] tracking-tight">
            Cara Order di Cuteness.id
          </h2>
          <p className="text-sm sm:text-base text-[#69587B] mt-2">
            Hanya 5 langkah sederhana, tanpa perlu registrasi akun berbelit-belit.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white p-5 rounded-2xl border border-[#E9C8DF]/80 shadow-[0_2px_10px_rgba(59,40,84,0.03)] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-2xl text-[#A98BD4]/60">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8FC] text-[#3B2854] border border-[#E9C8DF]/60 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#3B2854] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#69587B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E9C8DF]/40 flex items-center gap-1 text-[11px] font-semibold text-[#A98BD4]">
                  <span>Langkah {idx + 1}</span>
                  {idx < 4 && <ArrowRight className="w-3 h-3 text-[#A98BD4]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Note on delivery & duration */}
        <div className="mt-8 text-center bg-white border border-[#E9C8DF] rounded-2xl p-4 max-w-xl mx-auto">
          <p className="text-xs text-[#69587B] font-medium">
            💡 <strong>Catatan:</strong> Detail pengiriman dan durasi mengikuti ketentuan seller.
          </p>
        </div>
      </div>
    </section>
  );
};
