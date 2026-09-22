import React, { useState } from 'react';
import { MessageCircle, HelpCircle, Info } from 'lucide-react';
import { Product } from '../types';
import { AppBrandIcon } from './AppBrandIcon';
import { getWhatsAppOrderUrl, formatPriceDisplay } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product, selectedPlanId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetail }) => {
  // Default to popular plan or first plan
  const defaultPlanIndex = Math.max(0, product.plans.findIndex((p) => p.isPopular));
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(defaultPlanIndex);

  const currentPlan = product.plans[selectedPlanIndex] || product.plans[0];

  // Format price display
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
    <div
      id={`product-${product.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
      className="group relative bg-white rounded-2xl border border-[#E9C8DF]/70 hover:border-[#A98BD4] shadow-[0_2px_12px_rgba(59,40,84,0.03)] hover:shadow-[0_8px_24px_rgba(169,139,212,0.12)] transition-all duration-200 flex flex-col justify-between p-4 sm:p-5"
    >
      <div>
        {/* Top: Logo & Title */}
        <div className="flex items-start justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-3">
            <AppBrandIcon iconName={product.iconName} name={product.name} className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0" />
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#3B2854] group-hover:text-[#A98BD4] transition-colors leading-tight">
                {product.name}
              </h3>
              <span className="text-[11px] font-medium text-[#69587B]">
                {product.category}
              </span>
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF8FC] text-[#3B2854] border border-[#E9C8DF]">
              {product.badge}
            </span>
          )}
        </div>

        {/* Short Tagline */}
        <p className="text-xs text-[#69587B] line-clamp-2 min-h-[32px] mb-3.5 leading-relaxed">
          {product.tagline}
        </p>

        {/* Package Selector (Simple Buttons/Chips or Select) */}
        <div className="mb-4">
          <label className="block text-[11px] font-bold text-[#3B2854]/80 uppercase tracking-wider mb-2">
            Pilihan Paket:
          </label>

          {product.plans.length > 1 ? (
            <div className="flex flex-wrap gap-1.5">
              {product.plans.map((plan, idx) => {
                const isSelected = selectedPlanIndex === idx;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanIndex(idx)}
                    className={`min-h-[36px] px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'bg-[#3B2854] text-white shadow-xs'
                        : 'bg-[#FAF8FC] text-[#3B2854] hover:bg-[#E9C8DF]/40 border border-[#E9C8DF]/80'
                    }`}
                  >
                    <span>{plan.name}</span>
                    {plan.duration && !plan.name.includes(plan.duration) && (
                      <span className={`text-[10px] ml-1 opacity-80 ${isSelected ? 'text-purple-200' : 'text-[#69587B]'}`}>
                        ({plan.duration})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="bg-[#FAF8FC] border border-[#E9C8DF]/80 rounded-xl px-3 py-2 text-xs font-semibold text-[#3B2854] flex items-center justify-between min-h-[36px]">
              <span>{currentPlan.name}</span>
              {currentPlan.duration && (
                <span className="text-[#69587B] text-[11px] font-normal">({currentPlan.duration})</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Pricing & Order via WhatsApp */}
      <div className="pt-3 border-t border-[#E9C8DF]/50 mt-auto">
        {/* Price */}
        <div className="mb-2">
          <span className="text-[11px] text-[#69587B] block font-medium">Harga:</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-extrabold text-[#3B2854] font-heading">
              {priceDisplay}
            </span>
          </div>
        </div>

        {/* Required Duration Note */}
        <div className="mb-3 bg-[#FAF8FC] p-2 rounded-xl border border-[#E9C8DF]/50">
          <p className="text-[11px] text-[#69587B] leading-tight flex items-center gap-1.5">
            <Info className="w-3 h-3 text-[#A98BD4] shrink-0" />
            <span>Durasi mengikuti ketersediaan seller.</span>
          </p>
        </div>

        {/* Direct Order Button */}
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa50] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-xl shadow-xs hover:shadow-md active:scale-95 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Order via WhatsApp</span>
        </a>

        {/* Optional detail link */}
        {onOpenDetail && (
          <div className="mt-2 text-center">
            <button
              type="button"
              onClick={() => onOpenDetail(product, currentPlan.id)}
              className="py-1 px-2 text-[11px] font-semibold text-[#69587B] hover:text-[#3B2854] active:underline cursor-pointer"
            >
              Lihat deskripsi & fitur lengkap
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
