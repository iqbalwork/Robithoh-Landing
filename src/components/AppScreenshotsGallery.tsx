import React, { useState } from 'react';
import {
  Smartphone,
  Sparkles,
  Compass,
  Clock,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';

interface ScreenshotItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  imageSrc: string;
  features: string[];
  color: string;
  badgeBg: string;
}

const screenshots: ScreenshotItem[] = [
  {
    id: 'home',
    title: 'Beranda & Amaliyah Harian',
    category: 'Dashboard Utama',
    tagline: 'Akses Cepat Seluruh Amaliyah & Countdown Sholat',
    description:
      'Tampilan beranda yang intuitif menyajikan hitung mundur waktu sholat berikutnya, 12 menu amaliyah lengkap (Dzikir, Tasbih, Khotaman, Manaqib, Sholat, Kiblat, Langgam, Tarhim, Sholawat, Doa, Silsilah, Tahlil & Ziyaroh), serta mutiara wasiat Tanbih harian.',
    imageSrc: './assets/screenshots/home.png',
    features: [
      'Countdown Sholat Presisi per Kota',
      '12 Menu Amaliyah Cepat & Terstruktur',
      'Wasiat Tanbih & Kutipan Harian',
      'Floating Pill Navigation Bar'
    ],
    color: '#CE1126',
    badgeBg: 'bg-merah-500/10 text-merah-400 border-merah-500/30'
  },
  {
    id: 'sholat',
    title: 'Jadwal Sholat & Notifikasi Adzan',
    category: 'Waktu Sholat Kemenag',
    tagline: 'Kalkulasi Astronomis GPS & Notifikasi Tepat Waktu',
    description:
      'Perhitungan waktu sholat 5 waktu, Imsak, dan Syuruq dengan hisab astronomis akurat berbasis koordinat GPS perangkat. Dilengkapi penanda waktu yang sedang berlangsung, status waktu sholat, dan tombol cepat pembuka kompas kiblat.',
    imageSrc: './assets/screenshots/sholat.png',
    features: [
      'Standar Hisab Kemenag RI & Internasional',
      'Indikator Sholat yang Sedang Berlangsung',
      'Pengingat 10 Menit Pra-Sholat & Adzan',
      'Koreksi Menit Manual (Ihtiyat)'
    ],
    color: '#D4AF37',
    badgeBg: 'bg-emas-500/10 text-emas-400 border-emas-500/30'
  },
  {
    id: 'kiblat',
    title: 'Kompas Arah Kiblat Presisi',
    category: 'Arah Ka\'bah Akurat',
    tagline: 'Kalibrasi Sensor Kompas & Derajat Azimuth',
    description:
      'Penunjuk arah Ka\'bah Al-Mukarromah berbasis sensor magnetik perangkat dengan perhitungan derajat azimuth (misal: 295.17° WNW), informasi jarak kilometer langsung ke Ka\'bah, dan panduan putar arah yang interaktif.',
    imageSrc: './assets/screenshots/kiblat.png',
    features: [
      'Derajat Azimuth & Arah Kompas Realtime',
      'Jarak Presisi ke Ka\'bah (km)',
      'Deteksi Status Akurasi Sensor GPS',
      'Petunjuk Kalibrasi Putar Derajat'
    ],
    color: '#10B981',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'quran',
    title: 'Al-Qur\'an Digital 114 Surah',
    category: 'Mushaf 30 Juz',
    tagline: 'Mushaf Standar Jernih & Bookmark Otomatis',
    description:
      'Daftar lengkap 114 Surah Makkiyah & Madaniyah dengan penulisan Arab berharakat tajam, terjemahan resmi Bahasa Indonesia, banner pembacaan terakhir (Last Read), serta fitur pencarian surah yang cepat.',
    imageSrc: './assets/screenshots/quran.png',
    features: [
      '114 Surah Lengkap 30 Juz Offline',
      'Banner Lanjut Baca Ayat Terakhir',
      'Pencarian Cepat Nomor & Nama Surah',
      'Pewarnaan Klasifikasi Makkiyah/Madaniyah'
    ],
    color: '#0284C7',
    badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30'
  },
  {
    id: 'tasbih',
    title: 'Tasbih Digital Interaktif Haptik',
    category: 'Dzikir Taktil Berirama',
    tagline: 'Getaran Milestone & Preset Dzikir TQN 165x',
    description:
      'Penghitung dzikir berlayar penuh dengan lingkaran progres dinamis, pilihan preset amaliyah (Dzikir Jahr 165x, 33x, 100x, atau target kustom), statistik putaran selesai, serta respon getaran taktil haptic feedback pada tiap ketukan.',
    imageSrc: './assets/screenshots/tasbih.png',
    features: [
      'Preset Khusus Dzikir Jahr 165x & 33x',
      'Haptic Feedback pada Setiap Hitungan',
      'Statistik Putaran & Kemajuan Sesi',
      'Tombol Koreksi (-1) & Reset Aman'
    ],
    color: '#E11D48',
    badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
  }
];

export const AppScreenshotsGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = screenshots[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="py-24 bg-canvas-dark relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-merah-900/20 via-emas-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-merah-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-xs font-bold text-emas-400">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Tampilan Nyata Aplikasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Antarmuka Modern, Bersih &amp;{' '}
            <span className="crimson-gradient-text">Ramah Pengguna</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Didesain dengan tipografi mushaf berharakat tajam, kontras warna hangat yang ramah mata, dan kemudahan akses satu jempol untuk seluruh kebutuhan ibadah Anda.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {screenshots.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gradient-to-r from-merah-600 to-merah-700 text-white border-merah-400 shadow-lg shadow-merah-600/30 scale-105'
                    : 'bg-canvas-card hover:bg-canvas-surface text-slate-300 hover:text-white border-white/10 hover:border-emas-500/30'
                }`}
              >
                <span>{item.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Phone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[320px] rounded-[42px] p-3 bg-gradient-to-b from-[#383D45] via-[#1E2126] to-[#121417] shadow-2xl shadow-black/90 border border-slate-700/50 group">
              
              {/* Screen Bezel (exact 460/1024 aspect ratio) */}
              <div className="relative rounded-[32px] overflow-hidden bg-black border border-slate-800 shadow-inner w-full aspect-[460/1024]">
                
                {/* Active Screenshot Image */}
                <img
                  key={activeItem.id}
                  src={activeItem.imageSrc}
                  alt={activeItem.title}
                  className="w-full h-full object-cover animate-fadeIn transition-opacity duration-300"
                />

                {/* Subtle Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Navigation Arrows for Mobile */}
              <button
                onClick={handlePrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-canvas-card/90 hover:bg-merah-600 text-slate-200 hover:text-white border border-white/15 shadow-xl transition-all"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-canvas-card/90 hover:bg-merah-600 text-slate-200 hover:text-white border border-white/15 shadow-xl transition-all"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Column: Feature Details & Explanation */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${activeItem.badgeBg}`}>
                  {activeItem.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Layar {activeIndex + 1} dari {screenshots.length}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {activeItem.title}
              </h3>
              <p className="text-emas-400 font-semibold text-sm sm:text-base">
                {activeItem.tagline}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeItem.description}
            </p>

            {/* Feature Bullet Points */}
            <div className="p-5 rounded-2xl bg-canvas-card border border-white/10 space-y-3 shadow-lg">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emas-400" />
                <span>Fitur Utama Layar Ini:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {activeItem.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Screen Switcher Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                {screenshots.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIdx === activeIndex ? 'w-8 bg-merah-500' : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Sebelumnya</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
