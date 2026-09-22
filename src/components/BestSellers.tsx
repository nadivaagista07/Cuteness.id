import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { BEST_SELLER_IDS } from '../data/products';
import { ProductCard } from './ProductCard';

interface BestSellersProps {
  products: Product[];
  onOpenDetail?: (product: Product, selectedPlanId: string) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ products, onOpenDetail }) => {
  const bestSellerProducts = products.filter((p) => BEST_SELLER_IDS.includes(p.id));

  return (
    <section id="best-seller" className="py-14 sm:py-18 bg-[#FAF8FC] border-b border-[#E9C8DF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9C8DF] text-[#3B2854] text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#A98BD4]" />
              Paling Sering Dipesan
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#3B2854] tracking-tight">
              Best Seller Cuteness.id
            </h2>
            <p className="text-sm text-[#69587B] mt-1 max-w-xl">
              Pilihan aplikasi premium terfavorit untuk hiburan streaming, produktivitas tugas, dan edit konten kreator.
            </p>
          </div>

          <a
            href="#katalog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A98BD4] hover:text-[#3B2854] group shrink-0"
          >
            <span>Lihat Semua Katalog ({products.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid of Best Seller products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {bestSellerProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
