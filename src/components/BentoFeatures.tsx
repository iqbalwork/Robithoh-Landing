import React from 'react';
import {
  LayoutGrid,
  Compass,
  Volume2,
  Database,
  BookOpen,
  Sparkles,
  Music,
  CheckCircle2,
  Cpu,
  Clock,
  Layers,
  Search,
  MapPin,
  Zap,
  Bookmark,
  WifiOff,
  ShieldCheck,
  Check
} from 'lucide-react';

interface BentoFeaturesProps {
  onOpenReleaseModal?: () => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onOpenReleaseModal }) => {
  return (
    <section id="fitur" className="py-20 sm:py-28 bg-surface-warm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Keunggulan Hakiki */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-soft text-primary font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Keunggulan Hakiki</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            Dirancang Khusus untuk Kekhusyukan &amp; Kemudahan Ibadah
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Setiap detail fitur disesuaikan dengan amaliyah thoriqoh yang sahih, memprioritaskan ketenangan qalbu tanpa distraksi digital atau ketergantungan internet.
          </p>
        </div>

        {/* 4-Column Core Pillar Grid (Direct from Stitch) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pillar 1 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-hairline hover:shadow-md transition-all flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <WifiOff className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface">100% Offline-First</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                Dapat diakses lancar di zawiyah terpencil, masjid pelosok, safar pedalaman, maupun penerbangan tanpa butuh jaringan internet sama sekali.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-1.5 text-primary text-xs font-bold">
              <span>Tanpa Kuota Data</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-hairline hover:shadow-md transition-all flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface">Mushaf Standar Kemenag</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                Format 604 halaman mushaf standar Kemenag RI dengan tajwid rapi, rendering tajam, serta kenyamanan navigasi ayat dan juz.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-1.5 text-secondary text-xs font-bold">
              <span>Standar Kemenag RI</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-hairline hover:shadow-md transition-all flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gold-accent flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface">Jadwal &amp; Kompas Kiblat</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                Kalkulasi waktu sholat wajib &amp; sunnah presisi berbasis koordinat satelit GPS serta sensor kompas arah Ka'bah waktu-nyata.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-1.5 text-amber-700 text-xs font-bold">
              <span>Akurasi Sensor Tinggi</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-hairline hover:shadow-md transition-all flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface">Amaliyah Suryalaya</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                Lengkap dengan Dzikir Harian, Khotaman, Manaqib Syaikh Abdul Qodir Al-Jaelani, Tarhim, serta Tanbih Pangersa Abah Sepuh &amp; Abah Anom.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-1.5 text-primary text-xs font-bold">
              <span>Sanad Terverifikasi</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Detailed Feature Showcase (Clean Modern Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tile 1: Mode Baru Al-Qur'an Per Halaman (Wide 2-col) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-border-hairline shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-soft/30 rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <div className="w-12 h-12 rounded-2xl bg-surface-warm border border-border-hairline flex items-center justify-center shadow-sm">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-red-soft text-primary text-xs font-bold tracking-wider uppercase">
                      Baru di v1.2.0
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gold-light text-secondary text-xs font-bold tracking-wider uppercase">
                      Standar Kemenag RI
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-on-surface mb-2">
                  Mode Baru Al-Qur'an Per Halaman (Mushaf Page)
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Rasakan kenyamanan membaca Al-Qur'an otentik layaknya memegang mushaf fisik standar Kementerian Agama RI lengkap 604 halaman. Navigasi lembaran utuh yang mulus, pemetaan ayat interaktif, loncat cepat juz dan surah, serta penanda bacaan terakhir otomatis.
                </p>

                {/* Sub-cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-primary" /> 604 Halaman
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">Offline</span>
                    </div>
                    <p className="text-xs text-text-muted">Mushaf standar Kemenag RI 30 juz siap dibaca tanpa jaringan.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                        <Bookmark className="w-3.5 h-3.5 text-secondary" /> Interaktif
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-light text-secondary font-bold">Taktil</span>
                    </div>
                    <p className="text-xs text-text-muted">Deteksi sentuh ayat di lembaran untuk melihat terjemah dan audio.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-600" /> Dual Mode
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 font-bold">Fleksibel</span>
                    </div>
                    <p className="text-xs text-text-muted">Bebas beralih antara Mode Lembaran Mushaf atau Mode Ayat Tradisional.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-text-muted flex-wrap gap-2">
                <span>Rendering Vektor Tajam &amp; Navigasi Halaman Cepat</span>
                <span className="text-primary font-bold">114 Surah • 30 Juz • 604 Halaman</span>
              </div>
            </div>
          </div>

          {/* Tile 2: Halaman Khusus Doa & Live Search (1-col) */}
          <div className="bg-white rounded-3xl p-8 border border-border-hairline shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-warm border border-border-hairline flex items-center justify-center shadow-sm">
                  <Search className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase">
                  Baru di v1.2.0
                </span>
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">
                Halaman Khusus Doa &amp; Live Search
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Pencarian doa amaliyah tarekat dengan fitur live search seketika untuk menemukan doa harian maupun doa khusus.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-on-surface font-semibold">Live Search Realtime</span>
                  </div>
                  <span className="text-emerald-700 font-bold">Cepat</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-warm border border-border-hairline flex items-center justify-between text-text-muted">
                  <span>Nadzom Shalawat Bani Hasyim</span>
                  <span className="text-on-surface font-semibold">Teks &amp; Terjemah</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-warm border border-border-hairline flex items-center justify-between text-text-muted">
                  <span>Doa Ba'da Sholat Jumat</span>
                  <span className="text-on-surface font-semibold">Sahih</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-warm border border-border-hairline flex items-center justify-between text-text-muted">
                  <span>Wirid Kemalaikatan</span>
                  <span className="text-primary font-semibold">7 Hari Lahir</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-text-muted">
              <span>Amaliyah Harian &amp; Khusus TQN</span>
              <span className="text-emerald-700 font-bold">1-Ketukan</span>
            </div>
          </div>

          {/* Tile 3: 8 Varian Home Screen Widget (Wide 2-col) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-border-hairline shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-light/40 rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <div className="w-12 h-12 rounded-2xl bg-surface-warm border border-border-hairline flex items-center justify-center shadow-sm">
                    <LayoutGrid className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-gold-light text-secondary text-xs font-bold uppercase">
                      Android Native
                    </span>
                    <span className="px-3 py-1 rounded-full bg-red-soft text-primary text-xs font-bold uppercase">
                      8 Varian Widget
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-on-surface mb-2">
                  8 Varian Home Screen Widget Interaktif
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Amalkan wirid dan pantau waktu sholat langsung dari layar utama ponsel Anda tanpa perlu membuka aplikasi. Perhitungan hisab realtime, sinkronisasi seketika, dan ornamen bersih.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" /> Jadwal Sholat (4x2 &amp; 4x1)
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">Realtime</span>
                    </div>
                    <p className="text-xs text-text-muted">Hitung mundur sholat fardhu &amp; waktu tarekat (Imsak, Syuruq, Tahajjud).</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-secondary" /> Tasbih Digital (2x2 &amp; 4x1)
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-light text-secondary font-bold">1-Ketukan</span>
                    </div>
                    <p className="text-xs text-text-muted">Penghitung wirid di layar beranda dengan tombol tambah cepat dan setel ulang target.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-text-muted">
                <span>Didukung Jetpack Glance &amp; WidgetSync Otomatis</span>
                <span className="text-secondary font-bold">Android 8.0 s/d 15+</span>
              </div>
            </div>
          </div>

          {/* Tile 4: Kitab Manqobah 1–56 (3 Bahasa) & Amaliyah Lengkap */}
          <div className="bg-white rounded-3xl p-8 border border-border-hairline shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-warm border border-border-hairline flex items-center justify-center shadow-sm">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <span className="px-3 py-1 rounded-full bg-gold-light text-secondary text-xs font-bold uppercase">
                  3 Bahasa
                </span>
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">
                Kitab Manqobah 1–56
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Naskah lengkap Manqobah Syekh Abdul Qodir Al-Jailani r.a. untuk khidmah 12 bulan, Khotaman, serta Tawassul Silsilah Tarekat.
              </p>

              <div className="space-y-1.5 text-xs">
                <div className="p-2.5 rounded-xl bg-surface-warm border border-border-hairline flex items-center justify-between text-on-surface">
                  <span className="font-medium">Teks Arab Berharokat</span>
                  <span className="text-secondary font-bold">Sahih &amp; Jelas</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-warm border border-border-hairline flex items-center justify-between text-on-surface">
                  <span className="font-medium">Terjemah Bahasa Indonesia</span>
                  <span className="text-secondary font-bold">Lengkap</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-warm border border-border-hairline flex items-center justify-between text-on-surface">
                  <span className="font-medium">Terjemah Basa Sunda</span>
                  <span className="text-secondary font-bold">Halus</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-warm border border-border-hairline flex items-center justify-between text-on-surface">
                  <span className="font-medium">Manqobah 1 s/d 56</span>
                  <span className="text-primary font-bold">12 Bulan Amaliyah</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-text-muted">
              <span>Sanad TQN PP Suryalaya Sirnarasa</span>
              <span className="text-secondary font-bold">100% Offline</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
