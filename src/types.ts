export type ProductCategory =
  | 'All'
  | 'Streaming'
  | 'AI & Productivity'
  | 'Design'
  | 'Music'
  | 'Education'
  | 'Others';

export interface ProductPlan {
  id: string;
  name: string; // e.g. "Sharing 1U", "Private", "Member", "Designer"
  duration: string; // e.g. "7 Hari", "1 Bulan", "1 Tahun"
  price: string; // e.g. "14K", "32K", "70K"
  rawPrice?: string; // e.g. "Rp 14.000"
  description?: string;
  isPopular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  badge?: 'Best Seller' | 'Hemat' | 'Private' | 'Favorit' | 'Hot' | 'Terlaris';
  warrantyInfo: string;
  perks: string[];
  plans: ProductPlan[];
  isService?: boolean;
  brandColor: string; // hex or tailwind color class
  accentBg: string;
  iconName: string; // e.g., 'netflix', 'youtube', 'canva', etc.
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarText: string;
  productBought: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
