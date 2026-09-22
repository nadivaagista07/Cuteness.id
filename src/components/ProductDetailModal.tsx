import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ShieldCheck, Check, Clock } from 'lucide-react';
import { Product } from '../types';
import { AppBrandIcon } from './AppBrandIcon';
import { getWhatsAppOrderUrl, formatPriceDisplay } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  initialPlanId?: string;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  initialPlanId,
  onClose,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');

  useEffect(() => {
    if (product) {
      if (initialPlanId && product.plans.some((p) => p.id === initialPlanId)) {
        setSelectedPlanId(initialPlanId);
      } else {
        const popular = product.plans.find((p) => p.isPopular);
        setSelectedPlanId(popular ? popular.id : product.plans[0].id);
      }
    }
  }, [product, initialPlanId]);

  if (!product) return null;

  const currentPlan = product.plans.find((p) => p.id === selectedPlanId) || product.plans[0];

  const priceDisplay = formatPriceDisplay(currentPlan.price);

  const planLabel = currentPlan.duration && !currentPlan.name.toLowerCase().includes(currentPlan.duration.toLowerCase())
    ? `${currentPlan.name} ${currentPlan.duration}`
    : currentPlan.name;

  const orderUrl = getWhatsAppOrderUrl(
    product.name,
    planLabel,
    priceDisplay,
    product.isService
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#292330]/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card (Bottom-sheet on mobile, centered modal on desktop) */}
      <div className="relative bg-white rounded-t-[28px] sm:rounded-3xl max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] shadow-2xl border border-[#E9C8DF] flex flex-col z-10 animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
        {/* Mobile Pull Indicator */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-2.5 -mb-1 sm:hidden shrink-0" />

        {/* Header */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-[#E9C8DF]/60 flex items-start justify-between gap-3 bg-[#FAF8FC] rounded-t-[28px] sm:rounded-t-3xl shrink-0">
          <div className="flex items-center gap-3">
            <AppBrandIcon iconName={product.iconName} name={product.name} className="w-12 h-12 rounded-2xl shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#3B2854]">
                  {product.name}
                </h3>
                {product.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-[#3B2854] border border-[#E9C8DF]">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#69587B] font-medium">{product.category}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#69587B] hover:text-[#3B2854] hover:bg-white rounded-full transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 flex-1 overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#3B2854]/80 uppercase tracking-wider mb-1.5">
              Deskripsi & Keterangan
            </h4>
            <p className="text-sm text-[#292330] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Select Package / Plan Options */}
          <div>
            <label className="block text-xs font-bold text-[#3B2854]/80 uppercase tracking-wider mb-2">
              Pilih Paket & Durasi
            </label>
            <div className="space-y-2">
              {product.plans.map((plan) => {
                const isSelected = plan.id === currentPlan.id;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-[#3B2854] bg-[#FAF8FC] shadow-xs'
                        : 'border-[#E9C8DF]/80 hover:border-[#A98BD4] bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-[#3B2854] bg-[#3B2854] text-white'
                            : 'border-[#E9C8DF]'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-[#3B2854]">
                            {plan.name}
                          </span>
                          <span className="text-[11px] font-medium text-[#69587B]">
                            • {plan.duration}
                          </span>
                        </div>
                        {plan.description && (
                          <p className="text-[11px] text-[#69587B] mt-0.5">{plan.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-sm sm:text-base font-extrabold text-[#3B2854] font-heading">
                        {formatPriceDisplay(plan.price)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Perks list */}
          {product.perks && product.perks.length > 0 && (
            <div className="bg-[#FAF8FC] rounded-2xl p-4 border border-[#E9C8DF]/80">
              <h4 className="text-xs font-bold text-[#3B2854] uppercase tracking-wider mb-2.5">
                Fitur & Keuntungan Akun
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-[#292330]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Notice on Duration */}
          <div className="bg-[#FAF8FC] border border-[#E9C8DF] rounded-2xl p-3 text-xs text-[#69587B]">
            <span className="font-bold text-[#3B2854] block mb-0.5">• Durasi:</span>
            <span>Durasi mengikuti ketersediaan seller. Detail paket dan durasi dapat berubah mengikuti ketersediaan. Silakan konfirmasi sebelum order.</span>
          </div>

          {/* Warranty Terms */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3.5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-950">
              <span className="font-bold block mb-0.5">Ketentuan Garansi:</span>
              <p className="leading-relaxed text-emerald-900">{product.warrantyInfo}</p>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-2 text-[11px] text-[#69587B]">
            <Clock className="w-3.5 h-3.5 text-[#A98BD4] shrink-0" />
            <span>Order diproses cepat melalui WhatsApp resmi 085173107087</span>
          </div>
        </div>

        {/* Modal Footer: Sticky Action */}
        <div className="p-4 sm:p-5 bg-[#FAF8FC] border-t border-[#E9C8DF]/60 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="w-full sm:w-auto text-left">
            <span className="text-[11px] text-[#69587B] block">Harga:</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#3B2854] font-heading">
                {priceDisplay}
              </span>
              <span className="text-xs text-[#69587B] ml-1">({currentPlan.duration})</span>
            </div>
          </div>

          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa50] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Order via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
