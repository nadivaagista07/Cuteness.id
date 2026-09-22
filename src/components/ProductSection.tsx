import React, { useState, useMemo } from 'react';
import { Search, X, HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  products: Product[];
  onOpenDetail?: (product: Product, selectedPlanId: string) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ products, onOpenDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTermGuide, setShowTermGuide] = useState(false);

  const categories: ProductCategory[] = [
    'All',
    'Streaming',
    'AI & Productivity',
    'Design',
    'Music',
    'Education',
    'Others',
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: products.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = products.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [products]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      const matchName = product.name.toLowerCase().includes(q);
      const matchTagline = product.tagline.toLowerCase().includes(q);
      const matchCategoryText = product.category.toLowerCase().includes(q);
      const matchPlans = product.plans.some(
        (plan) => plan.name.toLowerCase().includes(q) || plan.price.toLowerCase().includes(q)
      );

      return matchCategory && (matchName || matchTagline || matchCategoryText || matchPlans);
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section id="katalog" className="py-14 sm:py-20 bg-white border-b border-[#E9C8DF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A98BD4] mb-2 block">
            Katalog Produk Cuteness.id
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#3B2854] tracking-tight">
            Pilih Aplikasi Favoritmu
          </h2>
          <p className="text-sm sm:text-base text-[#69587B] mt-2">
            Temukan aplikasi dengan pilihan paket sesuai kebutuhanmu. Order langsung via WhatsApp.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative px-1">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#A98BD4] absolute left-4 pointer-events-none" />
              <input
                type="text"
                inputMode="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari aplikasi (Netflix, Canva, ChatGPT...)"
                className="w-full pl-11 pr-11 py-3 rounded-2xl bg-[#FAF8FC] hover:bg-[#FAF8FC]/80 focus:bg-white border border-[#E9C8DF] focus:border-[#A98BD4] focus:ring-4 focus:ring-[#A98BD4]/15 text-sm font-medium text-[#292330] placeholder:text-[#69587B]/70 outline-none transition-all shadow-[0_2px_8px_rgba(59,40,84,0.03)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 p-2 text-[#69587B] hover:text-[#3B2854] active:scale-95 transition-transform cursor-pointer"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs (Horizontally scrollable with smooth bleed on mobile) */}
          <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                const count = categoryCounts[category] || 0;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'bg-[#3B2854] text-white shadow-xs'
                        : 'bg-[#FAF8FC] hover:bg-[#E9C8DF]/40 text-[#3B2854] border border-[#E9C8DF]/70'
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#E9C8DF]/60 text-[#3B2854]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Educational Package Term Guide Accordion Banner */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#FAF8FC] border border-[#E9C8DF] rounded-2xl p-3 sm:p-4 text-xs transition-all">
              <button
                type="button"
                onClick={() => setShowTermGuide(!showTermGuide)}
                className="w-full flex items-center justify-between text-left font-bold text-[#3B2854] hover:text-[#A98BD4] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#A98BD4]" />
                  <span>Bingung beda Sharing, Private, atau Family? Klik panduan ini</span>
                </span>
                {showTermGuide ? (
                  <ChevronUp className="w-4 h-4 text-[#3B2854]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#3B2854]" />
                )}
              </button>

              {showTermGuide && (
                <div className="mt-3 pt-3 border-t border-[#E9C8DF]/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#292330] leading-relaxed">
                  <div className="p-2 rounded-xl bg-white border border-[#E9C8DF]/40">
                    <strong className="text-[#3B2854] block mb-0.5">SHARING</strong>
                    <span className="text-[#69587B]">Untuk penggunaan bersama sesuai ketentuan akun.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-[#E9C8DF]/40">
                    <strong className="text-[#3B2854] block mb-0.5">PRIVATE</strong>
                    <span className="text-[#69587B]">Untuk penggunaan pribadi tanpa berbagi dengan pengguna lain.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-[#E9C8DF]/40">
                    <strong className="text-[#3B2854] block mb-0.5">FAMILY</strong>
                    <span className="text-[#69587B]">Untuk paket keluarga jika tersedia.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-[#E9C8DF]/40">
                    <strong className="text-[#3B2854] block mb-0.5">MEMBER & LIFETIME</strong>
                    <span className="text-[#69587B]">Akses membership atau lifetime sesuai produk yang bersangkutan.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Note on Duration & Details */}
            <p className="text-[11px] text-[#69587B] text-center mt-2.5 italic">
              Detail paket dan durasi dapat berubah mengikuti ketersediaan. Silakan konfirmasi sebelum order.
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={onOpenDetail}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#FAF8FC] rounded-3xl border border-dashed border-[#E9C8DF] p-8 max-w-md mx-auto">
            <h3 className="font-heading font-bold text-base text-[#3B2854] mb-1">
              Produk Tidak Ditemukan
            </h3>
            <p className="text-xs text-[#69587B] mb-4">
              Tidak ada aplikasi yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Ingin bertanya langsung ke admin?
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#A98BD4] text-white text-xs font-bold rounded-xl hover:bg-[#9776c7] transition-colors"
            >
              Lihat Semua Produk
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
