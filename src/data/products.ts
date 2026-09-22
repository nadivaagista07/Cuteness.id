import { Product, Testimonial, FAQItem } from '../types';

export const WHATSAPP_NUMBER = '085173107087';
export const WHATSAPP_PHONE_INTL = '6285173107087';
export const TELEGRAM_TESTIMONI_URL = 'https://t.me/+IC1rI0OcF6BkYTI1';

export function formatPriceDisplay(price: string): string {
  if (!price) return 'Hubungi Admin';
  const clean = price.trim();
  if (clean.toLowerCase().includes('konsultasi') || clean.toLowerCase().includes('admin')) {
    return clean;
  }
  if (clean.toLowerCase().startsWith('mulai')) {
    const num = clean.replace(/[^0-9]/g, '');
    return num ? `Mulai Rp ${num}.000` : clean;
  }
  // Handles '14K', '32k', etc.
  if (/^[0-9]+[kK]$/.test(clean)) {
    const num = clean.replace(/[^0-9]/g, '');
    return `Rp ${num}.000`;
  }
  if (clean.startsWith('Rp')) {
    return clean;
  }
  // If only digits
  if (/^[0-9]+$/.test(clean)) {
    return `Rp ${clean}`;
  }
  return clean;
}

export function getWhatsAppOrderUrl(productName: string, planName: string, price: string, isService = false): string {
  const formattedPrice = formatPriceDisplay(price);
  const targetApp = planName && planName.trim().length > 0 && planName.toLowerCase() !== productName.toLowerCase()
    ? `${productName} (${planName})`
    : productName;
  const message = `Halo Cuteness.id, saya ingin order apk prem ${targetApp} dengan harga ${formattedPrice} Apakah masih tersedia?`;
  return `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppUrl(): string {
  const message = 'Halo Cuteness.id, Saya ingin bertanya mengenai aplikasi premium yang tersedia.';
  return `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(message)}`;
}

export const PRODUCTS: Product[] = [
  // ==========================================
  // STREAMING & ENTERTAINMENT
  // ==========================================
  {
    id: 'netflix',
    name: 'Netflix',
    category: 'Streaming',
    tagline: 'Streaming film & serial terbaik resolusi 4K UHD',
    description: 'Nonton film box office, drama korea, anime, dan serial original Netflix tanpa jeda iklan. Kualitas video Ultra HD 4K, audio spatial, support subtitle Indonesia.',
    badge: 'Best Seller',
    warrantyInfo: 'Garansi penuh selama masa sewa (replace akun/profil baru jika terjadi reset atau error).',
    perks: ['Kualitas Ultra HD 4K', 'Audio Dolby Atmos', 'Bisa download offline', 'Subtitle Indonesia lengkap'],
    brandColor: '#E50914',
    accentBg: '#FFF1F2',
    iconName: 'netflix',
    plans: [
      { id: 'nf-sh-7d', name: 'Sharing 1U', duration: '7 Hari', price: '14K', rawPrice: 'Rp 14.000', description: '1 Profil untuk 1 Device' },
      { id: 'nf-sh-14d', name: 'Sharing 1U', duration: '14 Hari', price: '24K', rawPrice: 'Rp 24.000', description: '1 Profil untuk 1 Device' },
      { id: 'nf-sh-1m', name: 'Sharing 1U', duration: '1 Bulan', price: '32K', rawPrice: 'Rp 32.000', description: 'Paling hemat, 1 profil privat dengan PIN', isPopular: true },
      { id: 'nf-semi-7d', name: 'Semiprivate', duration: '7 Hari', price: '18K', rawPrice: 'Rp 18.000', description: 'Lebih stabil, kuota pengguna dibatasi' },
      { id: 'nf-semi-14d', name: 'Semiprivate', duration: '14 Hari', price: '28K', rawPrice: 'Rp 28.000', description: 'Lebih leluasa tanpa screen limit' },
      { id: 'nf-semi-1m', name: 'Semiprivate', duration: '1 Bulan', price: '38K', rawPrice: 'Rp 38.000', description: 'Bebas antri screen, lebih nyaman' },
      { id: 'nf-priv-1m', name: 'Private', duration: '1 Bulan', price: '70K', rawPrice: 'Rp 70.000', description: 'Akun full milik Anda, 5 profil bebas pakai' },
    ],
  },
  {
    id: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'Streaming',
    tagline: 'Nonton tanpa iklan, putar latar belakang & YouTube Music',
    description: 'Bebas iklan di semua video YouTube, putar lagu/podcast saat layar mati (background play), dan nikmati akses penuh YouTube Music Premium.',
    badge: 'Best Seller',
    warrantyInfo: 'Garansi aktif 1 bulan penuh via email pembeli atau akun baru siap pakai.',
    perks: ['Bebas semua iklan video', 'Background playback', 'Akses YouTube Music Premium', 'Bisa download video offline'],
    brandColor: '#FF0000',
    accentBg: '#FEF2F2',
    iconName: 'youtube',
    plans: [
      { id: 'yt-priv-1m', name: 'Private', duration: '1 Bulan', price: '26K', rawPrice: 'Rp 26.000', description: 'Bisa akun sendiri (via invite) atau akun baru', isPopular: true },
    ],
  },
  {
    id: 'vidio-platinum',
    name: 'Vidio Platinum',
    category: 'Streaming',
    tagline: 'Nonton BRI Liga 1, Vidio Original Series & Hollywood',
    description: 'Streaming tayangan sepak bola favorit, sinetron, film Hollywood, drama Asia, dan serial orisinal Vidio tanpa gangguan.',
    badge: 'Hemat',
    warrantyInfo: 'Garansi sesuai durasi 1 bulan, login resmi dan anti banned.',
    perks: ['Nonton BRI Liga 1 & Sports', 'Vidio Original Series eksklusif', 'Tayangan kualitas HD', 'Subtitle Indonesia'],
    brandColor: '#ED1C24',
    accentBg: '#FFF1F2',
    iconName: 'vidio',
    plans: [
      { id: 'vidio-hp-1m', name: 'Sharing HP / Tablet', duration: '1 Bulan', price: '28K', rawPrice: 'Rp 28.000', description: 'Khusus smartphone & tablet' },
      { id: 'vidio-tv-1m', name: 'Sharing TV / Laptop', duration: '1 Bulan', price: '38K', rawPrice: 'Rp 38.000', description: 'Bisa nonton di Smart TV & Laptop', isPopular: true },
      { id: 'vidio-all-1m', name: 'All Device', duration: '1 Bulan', price: '56K', rawPrice: 'Rp 56.000', description: 'Bebas login di Smart TV, Laptop, HP, Tablet' },
    ],
  },
  {
    id: 'wetv',
    name: 'WeTV',
    category: 'Streaming',
    tagline: 'Drama China, Serial Indonesia & Anime Terbaru',
    description: 'Nonton drama romantis Asia, donghua (anime cina), dan series orisinal WeTV lebih cepat tanpa harus menunggu jadwal tayang gratis.',
    warrantyInfo: 'Garansi 30 hari penuh dengan proses pergantian cepat bila ada kendala login.',
    perks: ['Fast track episode terbaru', 'Tanpa iklan', 'Resolusi Full HD 1080p', 'Download offline'],
    brandColor: '#0055FF',
    accentBg: '#EFF6FF',
    iconName: 'wetv',
    plans: [
      { id: 'wetv-6u-1m', name: 'Sharing 6U', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Paket super hemat 6 user' },
      { id: 'wetv-3u-1m', name: 'Sharing 3U', duration: '1 Bulan', price: '28K', rawPrice: 'Rp 28.000', description: 'Lebih stabil & minim batas layar', isPopular: true },
      { id: 'wetv-priv-1m', name: 'Private', duration: '1 Bulan', price: '38K', rawPrice: 'Rp 38.000', description: 'Akun privat bebas digunakan sendiri' },
    ],
  },
  {
    id: 'viu-premium',
    name: 'Viu Premium',
    category: 'Streaming',
    tagline: 'Koleksi Drama Korea, Variety Show & Film Asia Terlengkap',
    description: 'Surga para penggemar drakor! Tonton episode terbaru 8 jam setelah tayang di Korea dengan subtitle bahasa Indonesia resmi.',
    warrantyInfo: 'Garansi 1 bulan ganti baru bila akun terkena logout massal.',
    perks: ['Subtitle resmi bahasa Indonesia', 'Tanpa iklan sponsor', 'Simpan video offline', 'Audio jernih kualitas HD'],
    brandColor: '#FFBF00',
    accentBg: '#FFFBEB',
    iconName: 'viu',
    plans: [
      { id: 'viu-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '15K', rawPrice: 'Rp 15.000', description: 'Paket hemat drakor mania', isPopular: true },
      { id: 'viu-priv-1m', name: 'Private', duration: '1 Bulan', price: '30K', rawPrice: 'Rp 30.000', description: 'Akun privat eksklusif untuk Anda' },
    ],
  },
  {
    id: 'disney-plus',
    name: 'Disney+',
    category: 'Streaming',
    tagline: 'Marvel, Star Wars, Pixar, Disney & Star Original',
    description: 'Akses seluruh film bioskop blockbuster Marvel Cinematic Universe, serial Star Wars, animasi Disney/Pixar, dan drama Korea eksklusif.',
    badge: 'Best Seller',
    warrantyInfo: 'Garansi sesuai durasi paket, dipandu login via OTP oleh admin.',
    perks: ['Koleksi lengkap MCU & Star Wars', 'Subtitle & Dubbing Indonesia', 'Kualitas 4K HDR & IMAX Enhanced', 'Download offline'],
    brandColor: '#113CCF',
    accentBg: '#EEF2FF',
    iconName: 'disney',
    plans: [
      { id: 'disney-6u-1m', name: 'Sharing 6U', duration: '1 Bulan', price: '36K', rawPrice: 'Rp 36.000', description: 'Paket sharing 6 user ekonomis' },
      { id: 'disney-3u-1m', name: 'Sharing 3U (Anti Limit)', duration: '1 Bulan', price: '60K', rawPrice: 'Rp 60.000', description: 'Anti limit screen, nonton kapan saja lancar', isPopular: true },
    ],
  },
  {
    id: 'prime-video',
    name: 'Prime Video',
    category: 'Streaming',
    tagline: 'Amazon Originals, Film Box Office & Serial Hits',
    description: 'Nonton The Boys, Rings of Power, Reacher, Fallout, serta film bioskop Hollywood terbaru dengan kualitas visual prima.',
    warrantyInfo: 'Garansi akun 1 bulan dengan perlindungan penggantian akun baru.',
    perks: ['Amazon Original eksklusif', 'Kualitas 4K Ultra HD', 'X-Ray info pemeran film', 'Tanpa iklan'],
    brandColor: '#00A8E1',
    accentBg: '#F0F9FF',
    iconName: 'prime',
    plans: [
      { id: 'prime-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '22K', rawPrice: 'Rp 22.000', description: 'Sharing profil hemat' },
      { id: 'prime-priv-1m', name: 'Private', duration: '1 Bulan', price: '28K', rawPrice: 'Rp 28.000', description: 'Akun privat login leluasa', isPopular: true },
    ],
  },
  {
    id: 'hbo-max',
    name: 'HBO Max',
    category: 'Streaming',
    tagline: 'House of the Dragon, Warner Bros, DC Universe',
    description: 'Tonton konten peraih penghargaan Emmy, film Warner Bros terbaru, HBO Original eksklusif, serta waralaba DC Universe & Harry Potter.',
    warrantyInfo: 'Garansi 30 hari penuh dengan akun resmi legal.',
    perks: ['Film bioskop Warner Bros', 'HBO Originals terpopuler', 'Resolusi 4K UHD & Dolby Vision', 'Bebas iklan'],
    brandColor: '#5822B4',
    accentBg: '#FAF5FF',
    iconName: 'hbo',
    plans: [
      { id: 'hbo-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '32K', rawPrice: 'Rp 32.000', description: 'Paket sharing 1 profil hemat', isPopular: true },
      { id: 'hbo-priv-1m', name: 'Private', duration: '1 Bulan', price: '90K', rawPrice: 'Rp 90.000', description: 'Akun private bebas login multi device' },
    ],
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    category: 'Streaming',
    tagline: 'Anime Terlengkap Simulcast Langsung dari Jepang',
    description: 'Tonton anime favorit seperti Jujutsu Kaisen, Demon Slayer, Solo Leveling 1 jam setelah tayang di Jepang dengan resolusi HD dan tanpa iklan.',
    warrantyInfo: 'Garansi 1 bulan pergantian akun jika terkendala.',
    perks: ['Simulcast 1 jam setelah Jepang', 'Akses offline di aplikasi', 'Bebas iklan sama sekali', 'Katalog manga digital'],
    brandColor: '#F47521',
    accentBg: '#FFF7ED',
    iconName: 'crunchyroll',
    plans: [
      { id: 'cr-mega-1m', name: 'Megafan Sharing', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Megafan tier hemat', isPopular: true },
      { id: 'cr-priv-1m', name: 'Private', duration: '1 Bulan', price: '30K', rawPrice: 'Rp 30.000', description: 'Full akun pribadi bebas nonton' },
    ],
  },
  {
    id: 'loklok',
    name: 'Loklok',
    category: 'Streaming',
    tagline: 'Aplikasi All-in-One Movie & Series Viral',
    description: 'Aplikasi streaming serbaguna yang menyatukan film box office, anime, dan serial drakor terbaru dalam satu aplikasi ringan.',
    warrantyInfo: 'Garansi akun aktif 1 bulan penuh.',
    perks: ['Katalog film sangat lengkap', 'Bebas iklan pop-up', 'Resolusi 1080p HD', 'Support download'],
    brandColor: '#2563EB',
    accentBg: '#EFF6FF',
    iconName: 'loklok',
    plans: [
      { id: 'loklok-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '32K', rawPrice: 'Rp 32.000', description: 'Paket sharing fleksibel', isPopular: true },
      { id: 'loklok-hp-1m', name: 'HP', duration: '1 Bulan', price: '32K', rawPrice: 'Rp 32.000', description: 'Khusus smartphone Android & iOS' },
      { id: 'loklok-tv-1m', name: 'TV', duration: '1 Bulan', price: '36K', rawPrice: 'Rp 36.000', description: 'Khusus Android TV & Smart TV' },
    ],
  },
  {
    id: 'drakor-id',
    name: 'Drakor.ID',
    category: 'Streaming',
    tagline: 'Streaming Drama Korea Subtitle Indonesia Praktis',
    description: 'Aplikasi khusus drakor mania dengan server kencang, kuota hemat, dan koleksi drama Korea on-going maupun lawas.',
    warrantyInfo: 'Garansi sesuai durasi pilihan Anda.',
    perks: ['Update drakor tercepat', 'Subtitle Indonesia rapi', 'Server streaming stabil', 'Bebas jeda iklan'],
    brandColor: '#EC4899',
    accentBg: '#FDF2F8',
    iconName: 'drakor',
    plans: [
      { id: 'drakor-1m', name: 'VIP', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Masa aktif 30 hari', isPopular: true },
      { id: 'drakor-3m', name: 'VIP', duration: '3 Bulan', price: '30K', rawPrice: 'Rp 30.000', description: 'Paket 90 hari lebih hemat' },
    ],
  },
  {
    id: 'bstation',
    name: 'BStation (Bilibili)',
    category: 'Streaming',
    tagline: 'Platform Anime, Pop Culture & Komunitas Kreator',
    description: 'Nonton ribuan judul anime resmi legal dari studio papan atas dengan kualitas gambar hingga 4K dan audio resolusi tinggi.',
    warrantyInfo: 'Garansi akun aktif 1-2 bulan.',
    perks: ['Resolusi hingga 4K UHD', 'Bebas iklan', 'Koleksi anime eksklusif', 'Komentar peluru interaktif'],
    brandColor: '#00A1D6',
    accentBg: '#F0F9FF',
    iconName: 'bstation',
    plans: [
      { id: 'bstation-1m', name: 'Premium Sharing', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Sharing premium 30 hari', isPopular: true },
      { id: 'bstation-2m', name: 'Premium Sharing', duration: '2 Bulan', price: '25K', rawPrice: 'Rp 25.000', description: 'Paket hemat 60 hari' },
    ],
  },
  {
    id: 'dramabox',
    name: 'Dramabox',
    category: 'Streaming',
    tagline: 'Short Drama & Mini Series Vertikal Viral',
    description: 'Nikmati ribuan serial pendek vertikal yang adiktif, cerita seru berdurasi singkat cocok untuk tontonan santai di mana saja.',
    warrantyInfo: 'Garansi 30 hari masa aktif.',
    perks: ['Buka semua episode terkunci', 'Format vertikal full screen', 'Tanpa iklan pengganggu', 'Update episode baru tiap hari'],
    brandColor: '#7C3AED',
    accentBg: '#F5F3FF',
    iconName: 'dramabox',
    plans: [
      { id: 'dramabox-1m', name: 'VIP Access', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Unlock semua short drama', isPopular: true },
    ],
  },
  {
    id: 'vision-plus',
    name: 'Vision+ / RCTI+',
    category: 'Streaming',
    tagline: 'Live TV Nasional Lengkap, Olahraga & Sinetron Hits',
    description: 'Nonton channel TV nasional live tanpa kuota delay, tayangan olahraga eksklusif, serta film & original series lokal Indonesia.',
    warrantyInfo: 'Garansi sesuai durasi paket.',
    perks: ['Live TV Indonesia & Internasional', 'Siaran olahraga live', 'Video on demand lengkap', 'Catch up TV 7 hari'],
    brandColor: '#2563EB',
    accentBg: '#EFF6FF',
    iconName: 'vision',
    plans: [
      { id: 'vision-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '35K', rawPrice: 'Rp 35.000', description: 'Sharing hemat 1 bulan' },
      { id: 'vision-priv-1m', name: 'Private', duration: '1 Bulan', price: '45K', rawPrice: 'Rp 45.000', description: 'Akun privat login leluasa', isPopular: true },
    ],
  },

  // ==========================================
  // MUSIC
  // ==========================================
  {
    id: 'apple-music',
    name: 'Apple Music',
    category: 'Music',
    tagline: 'Audio Lossless Resolusi Tinggi & Spatial Audio Dolby',
    description: 'Dengarkan lebih dari 100 juta lagu dalam kualitas Hi-Res Lossless, Spatial Audio dengan Dolby Atmos, dan lirik bernyanyi real-time.',
    badge: 'Hemat',
    warrantyInfo: 'Garansi sesuai durasi pilihan paket (1 bulan / 1 tahun via Gift Card).',
    perks: ['Kualitas Lossless Audio & Hi-Res', 'Spatial Audio Dolby Atmos', 'Lirik lagu sinkron karaoke', 'Download lagu offline'],
    brandColor: '#FC3C44',
    accentBg: '#FFF1F2',
    iconName: 'applemusic',
    plans: [
      { id: 'am-imess-1m', name: 'IMESS', duration: '1 Bulan', price: '23K', rawPrice: 'Rp 23.000', description: 'Aktivasi via iMessage / Apple ID', isPopular: true },
      { id: 'am-gc-1y', name: 'Gift Card', duration: '1 Tahun', price: '34K', rawPrice: 'Rp 34.000', description: 'Akses 12 bulan super hemat via gift card' },
    ],
  },
  {
    id: 'spotify',
    name: 'Spotify Premium',
    category: 'Music',
    tagline: 'Streaming Musik Tanpa Batas, Bebas Skip & Kualitas Audio 320kbps',
    description: 'Dengarkan jutaan lagu dan podcast tanpa iklan sponsor, bebas pilih lagu tanpa batasan skip, download lagu untuk didengarkan offline.',
    badge: 'Best Seller',
    warrantyInfo: 'Garansi sesuai durasi aktif, anti banned dengan proses cepat.',
    perks: ['Tanpa jeda iklan audio', 'Bebas skip lagu sepuasnya', 'Kualitas audio sangat jernih 320 kbps', 'Download playlist offline'],
    brandColor: '#1DB954',
    accentBg: '#F0FDF4',
    iconName: 'spotify',
    plans: [
      { id: 'spot-sh-1m', name: 'Sharing Plan', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Paket sharing musik hemat' },
      { id: 'spot-priv-1m', name: 'Private Plan', duration: '1 Bulan', price: '26K', rawPrice: 'Rp 26.000', description: 'Akun privat email sendiri atau baru', isPopular: true },
      { id: 'spot-priv-3m', name: 'Private Plan', duration: '3 Bulan', price: '65K', rawPrice: 'Rp 65.000', description: 'Paket 3 bulan tenang mendengarkan musik' },
    ],
  },

  // ==========================================
  // AI & PRODUCTIVITY
  // ==========================================
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI & Productivity',
    tagline: 'Kecerdasan Buatan Terdepan GPT-4o & Canvas Tools',
    description: 'Tingkatkan produktivitas kerja, coding, pembuatan konten, dan riset dengan model tercanggih OpenAI. Akses upload file, DALL-E image gen, dan web browsing.',
    badge: 'Best Seller',
    warrantyInfo: 'Garansi akun aktif 1 bulan penuh, replace akun bila terjadi limit massal.',
    perks: ['Akses model GPT-4o canggih', 'Generate gambar DALL-E 3', 'Analisis data & file dokumen', 'Voice chat natural'],
    brandColor: '#10A37F',
    accentBg: '#F0FDF9',
    iconName: 'chatgpt',
    plans: [
      { id: 'gpt-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '35K', rawPrice: 'Rp 35.000', description: 'Sharing akun hemat dengan riwayat terpisah' },
      { id: 'gpt-priv-1m', name: 'Private', duration: '1 Bulan', price: '65K', rawPrice: 'Rp 65.000', description: 'Akun privat email sendiri, privasi 100% aman', isPopular: true },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'AI & Productivity',
    tagline: 'AI Google dengan Integrasi Workspace & Konteks Raksasa',
    description: 'AI mutakhir dari Google dengan jendela konteks 1 juta token, integrasi langsung ke Google Docs, Gmail, Drive, dan YouTube.',
    badge: 'Hemat',
    warrantyInfo: 'Garansi akun sesuai durasi paket yang dipesan.',
    perks: ['Konteks analisis super panjang', 'Integrasi Google Workspace', 'Akses model Gemini Advanced', 'Analisis gambar & kode cepat'],
    brandColor: '#4285F4',
    accentBg: '#EFF6FF',
    iconName: 'gemini',
    plans: [
      { id: 'gemini-1m', name: 'Advanced Plan', duration: '1 Bulan', price: '25K', rawPrice: 'Rp 25.000', description: 'Akses 1 bulan penuh', isPopular: true },
      { id: 'gemini-2m', name: 'Advanced Plan', duration: '2 Bulan', price: '45K', rawPrice: 'Rp 45.000', description: 'Paket hemat 2 bulan' },
    ],
  },
  {
    id: 'grok-ai',
    name: 'Grok AI',
    category: 'AI & Productivity',
    tagline: 'AI Cerdas xAI dengan Pengetahuan Real-Time dari X',
    description: 'Asisten AI cerdas tanpa sensor kaku yang dikembangkan xAI Elon Musk, mampu menganalisis berita real-time dan tren dunia terkini.',
    badge: 'Hot',
    warrantyInfo: 'Garansi 7 hari masa aktif private.',
    perks: ['Informasi real-time dari X/Twitter', 'Jawaban jujur & humoris', 'Pembuatan gambar Flux AI', 'Model reasoning mutakhir'],
    brandColor: '#000000',
    accentBg: '#F8FAFC',
    iconName: 'grok',
    plans: [
      { id: 'grok-priv-7d', name: 'Private', duration: '7 Hari', price: '28K', rawPrice: 'Rp 28.000', description: 'Akses private full 7 hari', isPopular: true },
    ],
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    category: 'AI & Productivity',
    tagline: 'Asisten Penulisan Bahasa Inggris Profesional & Anti-Plagiat',
    description: 'Cek tata bahasa (grammar), ejaan, gaya bahasa, kejelasan kalimat, nada tulisan, dan deteksi plagiarisme untuk skripsi, jurnal, atau email kerja.',
    warrantyInfo: 'Garansi aktif 1 bulan dengan akun terverifikasi.',
    perks: ['Advanced grammar & spelling checker', 'Deteksi plagiarisme jutaan artikel', 'Penyempurnaan nada (tone detector)', 'Integrasi Word, Browser & HP'],
    brandColor: '#15C39A',
    accentBg: '#F0FDF4',
    iconName: 'grammarly',
    plans: [
      { id: 'gramm-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '25K', rawPrice: 'Rp 25.000', description: 'Sharing login praktis hemat' },
      { id: 'gramm-priv-1m', name: 'Private', duration: '1 Bulan', price: '55K', rawPrice: 'Rp 55.000', description: 'Akun privat, data tulisan terjaga', isPopular: true },
    ],
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'AI & Productivity',
    tagline: 'Word, Excel, PowerPoint Asli & Cloud Storage OneDrive',
    description: 'Paket aplikasi perkantoran resmi dari Microsoft. Gunakan Word, Excel, PowerPoint di PC, Mac, maupun ponsel dengan sinkronisasi cloud.',
    badge: 'Hemat',
    warrantyInfo: 'Garansi 1 bulan penuh, aktivasi legal via invite team.',
    perks: ['Aplikasi Office Word, Excel, PPT resmi', 'Fitur premium lengkap', 'Bisa di PC, Mac, HP & Tablet', 'Instalasi langsung dari website Microsoft'],
    brandColor: '#D83B01',
    accentBg: '#FFF7ED',
    iconName: 'microsoft',
    plans: [
      { id: 'ms365-invite-1m', name: 'Invite Team', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Invite resmi ke akun Microsoft Anda', isPopular: true },
    ],
  },
  {
    id: 'zoom',
    name: 'Zoom Pro',
    category: 'AI & Productivity',
    tagline: 'Meeting Online Tanpa Batas 40 Menit & Hingga 100 Peserta',
    description: 'Hilangkan batasan waktu meeting 40 menit! Cocok untuk presentasi skripsi, webinar bisnis, rapat kantor, dan belajar kelompok.',
    warrantyInfo: 'Garansi sesuai durasi sewa, akun siap pakai berlisensi Pro.',
    perks: ['Meeting hingga 30 jam non-stop', 'Kapasitas sampai 100 peserta', 'Rekam meeting ke cloud / lokal', 'Fitur polling & breakout rooms'],
    brandColor: '#2D8CFF',
    accentBg: '#EFF6FF',
    iconName: 'zoom',
    plans: [
      { id: 'zoom-priv-2w', name: 'Private (100 Peserta)', duration: '2 Minggu', price: '25K', rawPrice: 'Rp 25.000', description: 'Durasi 14 hari meeting bebas limit' },
      { id: 'zoom-priv-1m', name: 'Private (100 Peserta)', duration: '1 Bulan', price: '35K', rawPrice: 'Rp 35.000', description: 'Durasi 30 hari meeting tanpa batas', isPopular: true },
    ],
  },

  // ==========================================
  // DESIGN & CREATIVE
  // ==========================================
  {
    id: 'canva',
    name: 'Canva Pro',
    category: 'Design',
    tagline: 'Desain Apapun Jadi Mudah dengan Jutaan Template Premium',
    description: 'Buka jutaan foto, elemen grafik, font berbayar, fitur hapus background otomatis 1-klik, dan resize format desain ke semua ukuran sosial media.',
    badge: 'Best Seller',
    warrantyInfo: 'Garansi 1 bulan penuh, aktivasi langsung ke email Canva pribadi Anda.',
    perks: ['Buka 100+ juta foto & elemen grafis', 'Magic Eraser & Background Remover', 'Brand Kit & font kustom', 'Resize instan ke IG, TikTok, Banner'],
    brandColor: '#00C4CC',
    accentBg: '#ECFEFF',
    iconName: 'canva',
    plans: [
      { id: 'canva-mem-1m', name: 'Member', duration: '1 Bulan', price: '7K', rawPrice: 'Rp 7.000', description: 'Via invite email sendiri, super murah!', isPopular: true },
      { id: 'canva-des-1m', name: 'Designer', duration: '1 Bulan', price: '8K', rawPrice: 'Rp 8.000', description: 'Role designer dengan akses fitur kolaborasi lebih lengkap' },
    ],
  },
  {
    id: 'capcut',
    name: 'CapCut Pro',
    category: 'Design',
    tagline: 'Edit Video TikTok & Reels Menjadi Sinematik Tanpa Batas',
    description: 'Buka semua efek pro, transisi sinematik, auto-caption otomatis bahasa Indonesia, fitur noise removal, dan export video 4K 60fps tanpa watermark.',
    badge: 'Best Seller',
    warrantyInfo: 'Garansi akun aktif sesuai durasi paket yang dibeli.',
    perks: ['Unlock semua filter & efek Pro', 'Auto-caption teks otomatis', 'Hapus background video 1 klik', 'Export resolusi 4K tanpa watermark'],
    brandColor: '#000000',
    accentBg: '#F8FAFC',
    iconName: 'capcut',
    plans: [
      { id: 'cap-sh-1w', name: 'Sharing', duration: '1 Minggu', price: '15K', rawPrice: 'Rp 15.000', description: 'Cocok untuk edit tugas / event singkat' },
      { id: 'cap-sh-2w', name: 'Sharing', duration: '2 Minggu', price: '25K', rawPrice: 'Rp 25.000', description: 'Durasi 14 hari hemat' },
      { id: 'cap-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '36K', rawPrice: 'Rp 36.000', description: 'Paling diminati konten kreator', isPopular: true },
      { id: 'cap-priv-1w', name: 'Private', duration: '1 Minggu', price: '18K', rawPrice: 'Rp 18.000', description: 'Akun privat login santai' },
      { id: 'cap-priv-2w', name: 'Private', duration: '2 Minggu', price: '28K', rawPrice: 'Rp 28.000', description: 'Akun privat 14 hari' },
      { id: 'cap-priv-1m', name: 'Private', duration: '1 Bulan', price: '45K', rawPrice: 'Rp 45.000', description: 'Private full 30 hari tanpa tabrakan device' },
    ],
  },
  {
    id: 'picsart',
    name: 'PicsArt Gold',
    category: 'Design',
    tagline: 'Editor Foto & Kolase Serbaguna dengan AI Generator',
    description: 'Edit foto estetik, hapus objek yang mengganggu, stiker tak terbatas, dan manipulasi gambar dengan tool profesional di ponsel Anda.',
    warrantyInfo: 'Garansi masa aktif sesuai paket.',
    perks: ['Unlock semua filter Gold', 'Hapus objek otomatis (AI Object Remover)', 'Koleksi stiker & font premium', 'Bebas iklan'],
    brandColor: '#9333EA',
    accentBg: '#FAF5FF',
    iconName: 'picsart',
    plans: [
      { id: 'pics-sh-1w', name: 'Sharing', duration: '1 Minggu', price: '15K', rawPrice: 'Rp 15.000', description: 'Durasi singkat 7 hari' },
      { id: 'pics-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '25K', rawPrice: 'Rp 25.000', description: 'Sharing 1 bulan hemat', isPopular: true },
      { id: 'pics-priv-1m', name: 'Private', duration: '1 Bulan', price: '30K', rawPrice: 'Rp 30.000', description: 'Akun privat bebas edit kapan saja' },
    ],
  },
  {
    id: 'remini',
    name: 'Remini',
    category: 'Design',
    tagline: 'Penjernih Foto AI Terbaik Mengubah Foto Buram Jadi HD',
    description: 'Ubah foto jadul, foto buram, atau foto resolusi rendah menjadi sangat tajam dan jernih berkat teknologi AI Enhancer terbaik.',
    warrantyInfo: 'Garansi 30 hari pergantian akun jika terkendala.',
    perks: ['Enhance foto buram menjadi Ultra HD', 'Tanpa iklan & tanpa antrean', 'Generate foto profil AI estetik', 'Proses super cepat'],
    brandColor: '#DC2626',
    accentBg: '#FEF2F2',
    iconName: 'remini',
    plans: [
      { id: 'remini-1m', name: 'Pro Plan', duration: '1 Bulan', price: '35K', rawPrice: 'Rp 35.000', description: 'Akses penuh penjernih foto 30 hari', isPopular: true },
    ],
  },
  {
    id: 'vsco',
    name: 'VSCO X',
    category: 'Design',
    tagline: 'Preset Filter Sinematik & Pengedit Warna Profesional',
    description: 'Aplikasi andalan fotografer dan selebgram dengan lebih dari 200+ filter preset klasik analog film, HSL color tuning, dan video grading.',
    warrantyInfo: 'Garansi aktif 1 bulan.',
    perks: ['200+ filter analog vintage', 'Editing video dengan preset film', 'Koreksi warna HSL & grain', 'Tanpa batasan ekspor'],
    brandColor: '#18181B',
    accentBg: '#F4F4F5',
    iconName: 'vsco',
    plans: [
      { id: 'vsco-1m', name: 'VSCO-X Membership', duration: '1 Bulan', price: '35K', rawPrice: 'Rp 35.000', description: 'Buka semua 200+ preset film', isPopular: true },
    ],
  },
  {
    id: 'ibis-paint',
    name: 'Ibis Paint X',
    category: 'Design',
    tagline: 'Aplikasi Menggambar & Melukis Digital Manga/Ilustrasi',
    description: 'Sangat cocok untuk ilustrator, pembuat webtoon, dan komikus dengan lebih dari 15.000 kuas realistis, 5.300 bahan tekstur, dan layer tanpa batas.',
    warrantyInfo: 'Garansi sesuai durasi pilihan paket.',
    perks: ['15.000+ kuas & material unlocked', 'Kanvas resolusi tinggi', 'Tanpa iklan banner', 'Font pro untuk teks komik'],
    brandColor: '#0EA5E9',
    accentBg: '#F0F9FF',
    iconName: 'ibispaint',
    plans: [
      { id: 'ibis-sh-7d', name: 'Sharing', duration: '7 Hari', price: '15K', rawPrice: 'Rp 15.000', description: 'Uji coba 7 hari' },
      { id: 'ibis-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '22K', rawPrice: 'Rp 22.000', description: 'Sharing hemat 30 hari' },
      { id: 'ibis-priv-1m', name: 'Private', duration: '1 Bulan', price: '30K', rawPrice: 'Rp 30.000', description: 'Akun privat 30 hari', isPopular: true },
      { id: 'ibis-priv-1y', name: 'Private', duration: '1 Tahun', price: '40K', rawPrice: 'Rp 40.000', description: 'Paket 1 tahun paling untung' },
    ],
  },
  {
    id: 'alight-motion',
    name: 'Alight Motion',
    category: 'Design',
    tagline: 'Grafik Gerak, Animasi Vektor & Efek Visual di Smartphone',
    description: 'Aplikasi motion design profesional pertama untuk ponsel pintar! Buat animasi vektor, keyframe, compositing visual, dan preset transisi kompleks.',
    badge: 'Favorit',
    warrantyInfo: 'Garansi aktif 1 tahun penuh, akun legal terpercaya.',
    perks: ['Keyframe animasi presisi', 'Dukungan vektor & bitmap', 'Export tanpa watermark', 'Import preset XML lancar'],
    brandColor: '#10B981',
    accentBg: '#ECFDF5',
    iconName: 'alightmotion',
    plans: [
      { id: 'alight-priv-1y', name: 'Private', duration: '1 Tahun', price: '32K', rawPrice: 'Rp 32.000', description: 'Masa aktif 1 tahun full akses tanpa watermark', isPopular: true },
    ],
  },

  // ==========================================
  // EDUCATION & OTHER SERVICES
  // ==========================================
  {
    id: 'duolingo',
    name: 'Duolingo Super',
    category: 'Education',
    tagline: 'Belajar Bahasa Asing Lebih Cepat Tanpa Batas Nyawa',
    description: 'Pelajari bahasa Inggris, Jepang, Korea, Jerman, dan lainnya dengan nyawa tak terbatas, review kesalahan yang dipersonalisasi, dan bebas iklan.',
    badge: 'Hemat',
    warrantyInfo: 'Garansi 30 hari aktif via invite classroom/keluarga resmi.',
    perks: ['Nyawa tak terbatas (Unlimited Hearts)', 'Bebas iklan sama sekali', 'Review kesalahan otomatis', 'Tes kenaikan level tanpa batas'],
    brandColor: '#58CC02',
    accentBg: '#F7FEE7',
    iconName: 'duolingo',
    plans: [
      { id: 'duo-1m', name: 'Super Duolingo', duration: '1 Bulan', price: '25K', rawPrice: 'Rp 25.000', description: 'Belajar lancar tanpa iklan & tanpa batas hati', isPopular: true },
    ],
  },
  {
    id: 'wattpad',
    name: 'Wattpad Premium',
    category: 'Education',
    tagline: 'Baca Jutaan Novel & Cerita Menarik Tanpa Gangguan',
    description: 'Baca novel romance, fiksi ilmiah, fantasi, dan fanfiction favorit tanpa gangguan jeda iklan sponsor, dengan koin bonus dan bacaan offline tak terbatas.',
    warrantyInfo: 'Garansi sesuai durasi pilihan paket.',
    perks: ['Bebas semua iklan antar bab', 'Simpan cerita offline tak terbatas', 'Akses koin bonus cerita berbayar', 'Tema kustom pembaca'],
    brandColor: '#FF6122',
    accentBg: '#FFF7ED',
    iconName: 'wattpad',
    plans: [
      { id: 'watt-sh-1m', name: 'Sharing', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Sharing 1 bulan hemat', isPopular: true },
      { id: 'watt-sh-1y', name: 'Sharing', duration: '1 Tahun', price: '45K', rawPrice: 'Rp 45.000', description: 'Paket 1 tahun puas membaca' },
    ],
  },
  {
    id: 'youku',
    name: 'Youku VIP',
    category: 'Streaming',
    tagline: 'Drama China Eksklusif & Variety Show Populer',
    description: 'Tonton drama kolosal wuxia, serial romance modern, dan variety show Mandarin eksklusif dengan resolusi 1080p dan terjemahan Indonesia.',
    warrantyInfo: 'Garansi sesuai paket pembelian.',
    perks: ['Tonton duluan sebelum tayang gratis', 'Kualitas video Full HD', 'Bebas iklan', 'Subtitle Indonesia'],
    brandColor: '#00A0E9',
    accentBg: '#F0F9FF',
    iconName: 'youku',
    plans: [
      { id: 'youku-1m', name: 'VIP', duration: '1 Bulan', price: '22K', rawPrice: 'Rp 22.000', description: 'Paket VIP 30 hari', isPopular: true },
      { id: 'youku-1y', name: 'VIP', duration: '1 Tahun', price: '45K', rawPrice: 'Rp 45.000', description: 'Paket VIP 1 tahun super hemat' },
    ],
  },
  {
    id: 'dazzcam',
    name: 'Dazzcam Pro',
    category: 'Design',
    tagline: 'Kamera Retro 90s & Hasil Foto Analog Otentik di iPhone',
    description: 'Simulasi kamera film klasik vintage seperti CCD, Instax, D Half, dan VHS dengan efek grain, chromatic aberration, dan light leak instan tanpa proses edit rumit.',
    badge: 'Favorit',
    warrantyInfo: 'Garansi akses lifetime (seumur hidup) terpasang di perangkat Anda.',
    perks: ['Unlock semua kamera retro & lensa vintage', 'Efek light leak & analog grain otentik', 'Sekali bayar akses selamanya', 'Dukungan video & foto'],
    brandColor: '#D97706',
    accentBg: '#FFFBEB',
    iconName: 'dazzcam',
    plans: [
      { id: 'dazz-life', name: 'Lifetime Access', duration: 'Lifetime', price: '28K', rawPrice: 'Rp 28.000', description: 'Sekali bayar aktif selamanya', isPopular: true },
    ],
  },
  {
    id: 'meitu',
    name: 'Meitu VIP',
    category: 'Design',
    tagline: 'Aplikasi Edit Wajah, Makeup Digital & Filter Estetik Asia',
    description: 'Sempurnakan foto selfie, body tuning alami, makeup virtual, penghalus kulit cerdas, dan filter estetik khas tren kecantikan Asia.',
    warrantyInfo: 'Garansi selama masa aktif paket.',
    perks: ['Filter VIP & efek makeup komplit', 'Body reshape & skin smoothing AI', 'Bebas watermark', 'Kualitas output ultra HD'],
    brandColor: '#F43F5E',
    accentBg: '#FFF1F2',
    iconName: 'meitu',
    plans: [
      { id: 'meitu-lok-7d', name: 'Account Pembeli Lok', duration: '7 Hari', price: '32K', rawPrice: 'Rp 32.000', description: 'Akun pembeli lokal durasi 7 hari' },
      { id: 'meitu-penj-7d', name: 'Account Penjual', duration: '7 Hari', price: '12K', rawPrice: 'Rp 12.000', description: 'Akun penjual 7 hari super murah' },
      { id: 'meitu-priv-1m', name: 'Private', duration: '1 Bulan', price: '40K', rawPrice: 'Rp 40.000', description: 'Akun privat 30 hari bebas edit', isPopular: true },
    ],
  },
  {
    id: 'get-contact',
    name: 'Get Contact Premium',
    category: 'Others',
    tagline: 'Cek Siapa Penelpon Asing & Lihat Nama Kontakmu di HP Orang Lain',
    description: 'Ketahui identitas nomor penipu, blokir panggilan spam otomatis, dan kepoin tags atau nama kamu yang disimpan di ponsel teman & orang lain.',
    warrantyInfo: 'Garansi 30 hari masa aktif.',
    perks: ['Cek siapa yang melihat tag Anda', 'Statistik pencarian nomor telepon', 'Blokir spam & penipuan otomatis', 'Pencarian nomor tanpa limit harian'],
    brandColor: '#2563EB',
    accentBg: '#EFF6FF',
    iconName: 'getcontact',
    plans: [
      { id: 'getc-1m', name: 'Premium Plan', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Akses penuh fitur premium 30 hari', isPopular: true },
    ],
  },
  {
    id: 'turnitin',
    name: 'Turnitin No Repository',
    category: 'Education',
    tagline: 'Cek Tingkat Plagiasi Skripsi & Jurnal Tanpa Tersimpan di Database',
    description: 'Layanan cek plagiarisme resmi standar kampus dunia dengan fitur No Repository (file Anda aman dan tidak akan tersimpan sehingga tidak terdeteksi plagiat saat dicek ulang oleh dosen).',
    badge: 'Best Seller',
    warrantyInfo: 'Hasil cek akurat dengan laporan PDF resmi persentase similarity & sumber kutipan.',
    perks: ['Garansi No Repository (Aman tidak tersimpan)', 'Laporan PDF lengkap berwarna', 'Cepat 5-15 menit jadi', 'Filter exclude bibliography & quotes'],
    brandColor: '#0284C7',
    accentBg: '#F0F9FF',
    iconName: 'turnitin',
    plans: [
      { id: 'turnitin-1x', name: 'Cek Plagiasi', duration: 'Per Cek', price: '10K', rawPrice: 'Rp 10.000 / cek', description: 'Kirim file Word/PDF, hasil PDF keluar cepat', isPopular: true },
    ],
  },
  {
    id: 'scribd',
    name: 'Scribd Premium',
    category: 'Education',
    tagline: 'Perpustakaan Digital Terbesar: Ebook, Audiobook & Dokumen Riset',
    description: 'Download dokumen skripsi, jurnal ilmiah, modul kuliah, serta baca ribuan buku bestseller dunia dan dengarkan audiobook sepuasnya.',
    warrantyInfo: 'Garansi sesuai durasi pilihan paket 1-2 bulan.',
    perks: ['Download dokumen kuliah & skripsi tanpa limit', 'Akses jutaan ebook & audiobook berbayar', 'Bisa dibaca offline di HP/Tablet', 'Bebas iklan'],
    brandColor: '#1A7BBA',
    accentBg: '#F0F9FF',
    iconName: 'scribd',
    plans: [
      { id: 'scribd-1m', name: 'Premium', duration: '1 Bulan', price: '20K', rawPrice: 'Rp 20.000', description: 'Akses 30 hari baca & download dokumen', isPopular: true },
      { id: 'scribd-2m', name: 'Premium', duration: '2 Bulan', price: '30K', rawPrice: 'Rp 30.000', description: 'Paket hemat 60 hari' },
    ],
  },
];

export const BEST_SELLER_IDS = [
  'netflix',
  'chatgpt',
  'canva',
  'capcut',
  'youtube-premium',
  'spotify',
  'disney-plus',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Nadhira P.',
    role: 'Mahasiswi Universitas Indonesia',
    avatarText: 'NP',
    productBought: 'Canva Pro & Turnitin',
    rating: 5,
    comment: 'Penyelamat banget pas mau sidang skripsi! Canva Pro langsung masuk ke email cuma 3 menit, Turnitin hasilnya cepet banget no repo. Adminnya ramah poll 💕',
    date: '2 hari yang lalu',
  },
  {
    id: 'testi-2',
    name: 'Fikri Aditya',
    role: 'Content Creator TikTok',
    avatarText: 'FA',
    productBought: 'CapCut Pro & ChatGPT Private',
    rating: 5,
    comment: 'Udah langganan CapCut sama ChatGPT di Cuteness.id dari tahun 2023. Harganya paling miring tapi pelayanannya kelas atas. Kalo ada apa-apa langsung diganti sat-set!',
    date: 'Minggu lalu',
  },
  {
    id: 'testi-3',
    name: 'Amanda Zahra',
    role: 'Serial Binge Watcher',
    avatarText: 'AZ',
    productBought: 'Netflix Sharing 1 Bulan',
    rating: 5,
    comment: 'Awalnya ragu sharing, ternyata dikasih profil sendiri ada PIN-nya jadi riwayat tontonan ga kecampur orang. 32K buat sebulan 4K UHD beneran best deal.',
    date: '3 hari yang lalu',
  },
  {
    id: 'testi-4',
    name: 'Bagus Prakoso',
    role: 'Freelance Designer',
    avatarText: 'BP',
    productBought: 'YouTube Premium & Apple Music',
    rating: 5,
    comment: 'Suka banget dengerin musik lossless tanpa jeda iklan pas ngerjain orderan klien. Proses via WA cepet ga pake ribet, transfer QRIS langsung aktif.',
    date: '5 hari yang lalu',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Bagaimana cara order?',
    answer: 'Pilih aplikasi dan paket yang diinginkan di katalog, lalu klik tombol "Order via WhatsApp". Pesan otomatis akan terbuat, cukup kirim ke admin WhatsApp untuk konfirmasi dan proses pembayaran.',
  },
  {
    question: 'Apakah semua produk bergaransi?',
    answer: 'Setiap produk memiliki ketentuan garansi masing-masing sesuai durasi dan jenis paket. Jika terjadi kendala sesuai ketentuan garansi, admin siap membantu hingga tuntas.',
  },
  {
    question: 'Durasi produknya berapa lama?',
    answer: 'Durasi mengikuti ketersediaan seller (misalnya 7 hari, 14 hari, 1 bulan, hingga 1 tahun). Detail paket dan durasi dapat berubah mengikuti stok, silakan konfirmasi ke admin sebelum order.',
  },
  {
    question: 'Apakah tersedia paket private?',
    answer: 'Ya, untuk sebagian besar aplikasi populer tersedia pilihan paket Private untuk penggunaan pribadi, selain paket Sharing yang lebih hemat.',
  },
  {
    question: 'Bagaimana jika akun mengalami kendala?',
    answer: 'Cukup kirimkan screenshot kendala dan bukti pembelian ke WhatsApp admin. Tim kami akan segera mengecek dan memberikan solusi atau penggantian sesuai ketentuan garansi produk.',
  },
  {
    question: 'Apakah bisa bertanya sebelum membeli?',
    answer: 'Bisa banget! Silakan hubungi WhatsApp kami untuk konsultasi gratis mengenai perbedaan paket, cara pakai, atau ketersediaan aplikasi yang kamu cari.',
  },
  {
    question: 'Bagaimana cara mendapatkan informasi produk terbaru?',
    answer: 'Kamu bisa memantau katalog di website ini atau bergabung ke channel resmi Telegram Cuteness.id untuk update stok, promo, dan testimoni terbaru.',
  },
];
