import React, { useState } from 'react';
import {
  Smartphone,
  Sparkles,
  Compass,
  Clock,
  BookOpen,
  CheckCircle2,
  Eye,
  X,
  Volume2,
  Layers,
  Settings,
  ShieldCheck
} from 'lucide-react';

interface ShowcaseScreen {
  id: string;
  badge: string;
  badgeType: 'primary' | 'secondary' | 'gold' | 'emerald';
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  features: string[];
}

const showcaseScreens: ShowcaseScreen[] = [
  {
    id: 'home',
    badge: 'Layar 01 • Beranda',
    badgeType: 'primary',
    title: 'Beranda & Hitung Sholat',
    subtitle: 'Dashboard Amaliyah Terpadu',
    description: 'Countdown sholat presisi, quote mutiara hikmah harian, dan akses langsung ke menu amaliyah utama.',
    imageSrc: './assets/screenshots/home.png',
    features: [
      'Countdown Sholat Presisi per Kota',
      '12 Menu Amaliyah Cepat & Terstruktur',
      'Wasiat Tanbih & Mutiara Hikmah',
      'Floating Pill Navigation Bar'
    ]
  },
  {
    id: 'sholat',
    badge: 'Layar 02 • Ibadah',
    badgeType: 'secondary',
    title: 'Jadwal Sholat 5 Waktu',
    subtitle: 'Hisab Astronomis GPS',
    description: 'Tabel jadwal imsakiyah, sholat fardhu, dhuha, dan terbit matahari berdasarkan garis lintang lokasi Anda.',
    imageSrc: './assets/screenshots/sholat.png',
    features: [
      'Notifikasi Nama Kota Bersih (Bukan GPS)',
      'Standar Hisab Kemenag RI & Internasional',
      'Pengingat 10 Menit Pra-Sholat & Adzan',
      'Koreksi Menit Manual (Ihtiyat)'
    ]
  },
  {
    id: 'quran',
    badge: 'Layar 03 • Tilawah',
    badgeType: 'primary',
    title: 'Mushaf Digital Kemenag',
    subtitle: '604 Halaman Standar Kemenag RI',
    description: 'Tampilan 604 halaman mushaf standar dengan navigasi nomor halaman dan indeks surah cepat.',
    imageSrc: './assets/screenshots/quran.png',
    features: [
      'Mode Mushaf 604 Halaman Kemenag RI',
      'Pemetaan Ayat Interaktif & Terjemah',
      '114 Surah Lengkap 30 Juz 100% Offline',
      'Banner Lanjut Baca Ayat Terakhir'
    ]
  },
  {
    id: 'tasbih',
    badge: 'Layar 04 • Tasbih',
    badgeType: 'primary',
    title: 'Tasbih Digital Haptik',
    subtitle: 'Penghitung Dzikir Interaktif',
    description: 'Penghitung wirid dan dzikir jahr 165x atau target kustom dengan getaran haptik taktil.',
    imageSrc: './assets/screenshots/tasbih.png',
    features: [
      'Preset Dzikir Jahr 165x & Target Kustom',
      'Respon Getaran Haptik Taktil & Suara',
      'Indikator Putaran Selesai & Persentase',
      'Tombol Hitung Luas 1-Ketukan Nyaman'
    ]
  },
  {
    id: 'dzikir',
    badge: 'Layar 05 • Dzikir',
    badgeType: 'primary',
    title: 'Dzikir Harian TQN Suryalaya',
    subtitle: 'Amaliyah Dzikir & Khotaman',
    description: 'Panduan bacaan tasbih, lafadz tahlil, shalawat bani hasyim, dan urutan khotaman lengkap dengan transliterasi serta terjemah.',
    imageSrc: './assets/screenshots/dzikir_harian.png',
    features: [
      'Dzikir Jahr 165x & Dzikir Khofi',
      'Khotaman & Tawassul Silsilah',
      'Transliterasi Latin & Terjemah',
      'Navigasi Ayat Amaliyah Halus'
    ]
  },
  {
    id: 'kiblat',
    badge: 'Layar 06 • Kompas',
    badgeType: 'gold',
    title: 'Penunjuk Arah Kiblat',
    subtitle: 'Sensor Magnetik & Derajat Azimuth',
    description: 'Kompas visual sensor magnetik real-time yang menunjukkan derajat ke Ka\'bah secara tepat.',
    imageSrc: './assets/screenshots/kiblat.png',
    features: [
      'Derajat Azimuth & Arah Kompas Realtime',
      'Jarak Presisi ke Ka\'bah (km)',
      'Deteksi Status Akurasi Sensor GPS',
      'Petunjuk Kalibrasi Putar Derajat'
    ]
  },
  {
    id: 'pengaturan',
    badge: 'Layar 07 • Pengaturan',
    badgeType: 'secondary',
    title: 'Pengaturan & Notifikasi Adzan',
    subtitle: 'Kustomisasi Pribadi & Volume',
    description: 'Atur suara notifikasi adzan mandiri, koreksi manual waktu sholat, dan preferensi widget home screen.',
    imageSrc: './assets/screenshots/pengaturan.png',
    features: [
      'Slider Volume Adzan Mandiri 0%–100%',
      'Mode Senyap Praktis Saat Ibadah',
      'Informasi Pembaruan v1.2.0',
      'Akses Ulang Panduan Spotlight'
    ]
  }
];

export const AppScreenshotsGallery: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<ShowcaseScreen | null>(null);

  const getBadgeStyle = (type: ShowcaseScreen['badgeType']) => {
    switch (type) {
      case 'primary':
        return 'bg-red-soft text-primary';
      case 'secondary':
        return 'bg-amber-100 text-secondary';
      case 'gold':
        return 'bg-gold-light text-amber-800';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700';
    }
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-surface-pure relative overflow-hidden" id="tampilan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-gold-light px-3 py-1 rounded-full mb-3 border border-gold-accent/30">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                Tangkap Layar Aplikasi Nyata
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
              Eksplorasi Antarmuka Elegan Robithoh
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mt-2 leading-relaxed">
              Desain visual bernuansa putih bersih, aksen merah bersahaja, dan tipografi Al-Qur'an berskala tinggi yang nyaman dipandang.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2.5 rounded-xl text-on-surface text-xs font-bold shrink-0 self-start md:self-end">
            <Smartphone className="w-4 h-4 text-primary" />
            <span>Pratinjau Layar v1.2.0</span>
          </div>
        </div>

        {/* 4 Main Screen Cards Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseScreens.slice(0, 4).map((screen) => (
            <div
              key={screen.id}
              onClick={() => setSelectedScreen(screen)}
              className="bg-surface-warm rounded-3xl p-4 flex flex-col gap-3.5 shadow-sm hover:shadow-md border border-border-hairline transition-all cursor-pointer group hover:-translate-y-1"
            >
              {/* Device Frame */}
              <div className="w-full rounded-2xl overflow-hidden bg-slate-900 p-1.5 shadow-inner">
                <div className="rounded-xl overflow-hidden aspect-[1008/2244] bg-surface relative">
                  <img
                    alt={screen.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={screen.imageSrc}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-on-surface px-3 py-1.5 rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-primary" /> Perbesar
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex flex-col px-1 pt-1">
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md self-start ${getBadgeStyle(screen.badgeType)}`}>
                  {screen.badge}
                </span>
                <h4 className="text-base font-bold text-on-surface mt-2 group-hover:text-primary transition-colors">
                  {screen.title}
                </h4>
                <p className="text-xs text-text-muted mt-1 leading-snug">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Screen Preview Row: Dzikir, Kiblat & Pengaturan */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseScreens.slice(4).map((screen) => (
            <div
              key={screen.id}
              onClick={() => setSelectedScreen(screen)}
              className="bg-surface-warm p-5 sm:p-6 rounded-3xl flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md border border-border-hairline transition-all cursor-pointer group hover:-translate-y-0.5"
            >
              <div className="w-18 sm:w-20 rounded-2xl overflow-hidden bg-slate-900 p-1 shrink-0 shadow-inner">
                <img
                  alt={screen.title}
                  className="w-full aspect-[1008/2244] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  src={screen.imageSrc}
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md self-start ${getBadgeStyle(screen.badgeType)}`}>
                  {screen.badge}
                </span>
                <h4 className="text-base font-bold text-on-surface mt-1.5 group-hover:text-primary transition-colors">
                  {screen.title}
                </h4>
                <p className="text-xs text-text-muted mt-1 leading-snug">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Detail Modal */}
      {selectedScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedScreen(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border border-border-hairline rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedScreen(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-surface-warm hover:bg-slate-200 text-slate-500 hover:text-on-surface transition-colors cursor-pointer z-20"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 flex justify-center">
                <div className="w-[200px] sm:w-[220px] rounded-[36px] p-2 bg-slate-900 shadow-xl">
                  <div className="rounded-[28px] overflow-hidden bg-black aspect-[1008/2244]">
                    <img
                      src={selectedScreen.imageSrc}
                      alt={selectedScreen.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-7 space-y-4">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block ${getBadgeStyle(selectedScreen.badgeType)}`}>
                  {selectedScreen.badge}
                </span>

                <h3 className="text-2xl font-extrabold text-on-surface">
                  {selectedScreen.title}
                </h3>

                <p className="text-sm font-semibold text-secondary">
                  {selectedScreen.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {selectedScreen.description}
                </p>

                <div className="pt-2 space-y-2">
                  <h5 className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Keunggulan Fitur:
                  </h5>
                  <div className="space-y-1.5">
                    {selectedScreen.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-on-surface">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:bg-primary-container transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Coba di Aplikasi Robithoh</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

