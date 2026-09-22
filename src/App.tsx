import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBenefits } from './components/TrustBenefits';
import { BestSellers } from './components/BestSellers';
import { ProductSection } from './components/ProductSection';
import { HowToOrder } from './components/HowToOrder';
import { WarrantySection } from './components/WarrantySection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PRODUCTS } from './data/products';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);

  const handleOpenDetail = (product: Product, planId: string) => {
    setSelectedProduct(product);
    setSelectedPlanId(planId);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
    setSelectedPlanId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9fc] text-slate-800 selection:bg-purple-200 selection:text-purple-900">
      {/* Top Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust / Benefits */}
        <TrustBenefits />

        {/* 3. Best Seller Highlights */}
        <BestSellers products={PRODUCTS} onOpenDetail={handleOpenDetail} />

        {/* 4. Full Catalog with Filters & Search */}
        <ProductSection products={PRODUCTS} onOpenDetail={handleOpenDetail} />

        {/* 5. 4-Steps How to Order */}
        <HowToOrder />

        {/* 6. Warranty & Protection Policies */}
        <WarrantySection />

        {/* 7. Clean Customer Testimonials */}
        <Testimonials />

        {/* 8. FAQ Accordion */}
        <FAQSection />

        {/* 9. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Dedicated App Navigation Dock */}
      <MobileBottomNav />

      {/* Interactive Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          initialPlanId={selectedPlanId}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}
