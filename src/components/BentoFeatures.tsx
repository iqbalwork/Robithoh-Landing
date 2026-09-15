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
  Bookmark
} from 'lucide-react';

interface BentoFeaturesProps {
  onOpenTechSpec: () => void;
  onOpenReleaseModal?: () => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onOpenTechSpec, onOpenReleaseModal }) => {
  return (
    <section id="fitur" className="py-24 bg-canvas-dark relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-merah-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 right-10 w-96 h-96 bg-emas-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-xs font-bold text-emas-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Pembaruan Resmi v1.2.0 &amp; Arsitektur Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Dirancang Khusus untuk{' '}
            <span className="gold-gradient-text">Kekhusyukan &amp; Kemudahan</span> Ibadah
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Hadir dengan inovasi <strong className="text-emas-400 font-semibold">Mode Mushaf Al-Qur'an Standar Kemenag RI</strong>, <strong className="text-emas-400 font-semibold">Halaman Khusus Doa &amp; Live Search</strong>, <strong className="text-emas-400 font-semibold">Wirid Kemalaikatan</strong>, naskah Manqobah 12 bulan yang disempurnakan, serta <strong className="text-emas-400 font-semibold">8 Home Screen Widget</strong>.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tile 1: Mode Baru Al-Qur'an Per Halaman Kemenag RI (Wide 2-col) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emas-500/15 via-merah-600/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-emas-500/40 flex items-center justify-center shadow-md">
                    <BookOpen className="w-6 h-6 text-emas-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                      Baru di v1.2.0
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-bold tracking-wider uppercase">
                      Standar Kemenag RI
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  Mode Baru Al-Qur'an Per Halaman (Mushaf Page)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Rasakan kenyamanan membaca Al-Qur'an otentik layaknya memegang mushaf fisik standar Kementerian Agama RI lengkap 604 halaman. Navigasi lembaran utuh yang mulus, pemetaan ayat interaktif, loncat cepat juz dan surah, serta penanda bacaan terakhir otomatis.
                </p>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-emas-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emas-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> 604 Halaman Utuh
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">Offline</span>
                    </div>
                    <p className="text-xs text-slate-300">Tampilan mushaf resmi Kemenag RI 30 juz siap dibaca kapan saja tanpa internet.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-emas-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-merah-400 flex items-center gap-1.5">
                        <Bookmark className="w-3.5 h-3.5" /> Pemetaan Interaktif
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emas-500/20 text-emas-300 font-semibold">Taktil</span>
                    </div>
                    <p className="text-xs text-slate-300">Deteksi sentuh ayat di lembaran mushaf untuk melihat detail terjemahan &amp; audio.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-emas-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> Dual Mode Reader
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-semibold">Fleksibel</span>
                    </div>
                    <p className="text-xs text-slate-300">Bebas beralih antara Mode Lembaran Mushaf Kemenag atau Mode Ayat Tradisional.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
                <span>Rendering Vektor Tajam &amp; Navigasi Halaman Cepat</span>
                <span className="text-emas-400 font-bold">114 Surah • 30 Juz • 604 Halaman</span>
              </div>
            </div>
          </div>

          {/* Tile 2: Halaman Khusus Doa & Live Search (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-emerald-500/40 flex items-center justify-center shadow-md">
                  <Search className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                  Baru di v1.2.0
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Halaman Khusus Doa &amp; Live Search
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Tampilan baru yang lebih luas untuk mencari kumpulan doa amaliyah tarekat dengan bilah pencarian cerdas seketika.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-semibold">Live Search Realtime</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Cepat &amp; Akurat</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Nadzom Shalawat Bani Hasyim</span>
                  <span className="text-emas-400 font-semibold">Teks &amp; Terjemah</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Doa Ba'da Sholat Jumat</span>
                  <span className="text-emas-400 font-semibold">Lengkap &amp; Sahih</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Kaifiyat Wirid Kemalaikatan</span>
                  <span className="text-sky-400 font-semibold">7 Hari Lahir</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Amaliyah Harian &amp; Khusus MTQN</span>
              <span className="text-emerald-400 font-bold">Pencarian 1-Ketukan</span>
            </div>
          </div>

          {/* Tile 3: Penyempurnaan Naskah Manqobah 12 Bulan (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-merah-600/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                  <Layers className="w-6 h-6 text-merah-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-merah-400 text-xs font-bold tracking-wider uppercase">
                  Penyempurnaan v1.2.0
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Naskah Manqobah 12 Bulan
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Naskah Manqobah Karomah Syeikh Abdul Qodir Al-Jailani r.a. untuk 12 bulan hijriyah (Muharrom s.d. Dzulhijjah) dan teks dzikir ditata lebih rapi dan presisi.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>12 Bulan Hijriyah Lengkap</span>
                  <span className="text-emas-400 font-bold">Muharrom–Dzulhijjah</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Pilihan Dwi-Bahasa Terjemahan</span>
                  <span className="text-white font-semibold">Indonesia &amp; Basa Sunda</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Mode Presentasi Majlis</span>
                  <span className="text-emerald-400 font-bold">Wake Lock Layar ON</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Teks Arab Berharakat Jernih</span>
              <span className="text-merah-400 font-bold">56 Bab Karomah</span>
            </div>
          </div>

          {/* Tile 4: 8 Home Screen Widget (Wide 2-col) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emas-500/15 via-merah-600/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-emas-500/40 flex items-center justify-center shadow-md">
                    <LayoutGrid className="w-6 h-6 text-emas-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-bold tracking-wider uppercase">
                      Android Native
                    </span>
                    <span className="px-3 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-merah-400 text-xs font-bold tracking-wider uppercase">
                      8 Varian Widget
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  8 Varian Home Screen Widget Interaktif
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Amalkan wirid dan pantau waktu sholat langsung dari layar utama ponsel Anda tanpa perlu membuka aplikasi. Perhitungan hisab realtime, sinkronisasi seketika, dan ornamen Emas Khidmat.
                </p>

                {/* Simulated Widget Mini Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-emas-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emas-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> Jadwal Sholat (4x2 &amp; 4x1)
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">Realtime</span>
                    </div>
                    <p className="text-xs text-slate-300">Hitung mundur sholat berikutnya, 5 waktu fardhu &amp; waktu tarekat (Imsak, Syuruq, Tahajjud).</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-emas-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-merah-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Tasbih Digital (2x2 &amp; 4x1)
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emas-500/20 text-emas-300 font-semibold">1-Ketukan</span>
                    </div>
                    <p className="text-xs text-slate-300">Penghitung wirid di layar beranda dengan tombol tambah cepat dan setel ulang target.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-xs font-bold text-slate-200">Mutiara Tanbih &amp; Manqobah (4x2)</span>
                    <p className="text-xs text-slate-400">Petuah hikmah Abah Sepuh, Abah Anom, dan Abah Aos yang berganti berkala.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-xs font-bold text-slate-200">Terakhir Tilawah &amp; Akses Cepat (4x1)</span>
                    <p className="text-xs text-slate-400">Lanjut baca Al-Qur'an 1 ketuk &amp; tombol pintas 4 menu amaliyah utama.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Didukung Jetpack Glance &amp; WidgetSync Otomatis</span>
                <span className="text-emas-400 font-bold">Android 8.0 s/d 15+</span>
              </div>
            </div>
          </div>

          {/* Tile 5: Tasbih Digital & Wirid Kemalaikatan (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-emas-500/40 flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6 text-emas-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-bold tracking-wider uppercase">
                  Wirid Kemalaikatan
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Tasbih &amp; Wirid Kemalaikatan
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Kini dilengkapi preset pilihan Wirid Kemalaikatan harian sesuai hari lahir dan Malaikat penjaga, disamping Dzikir Jahr 165x.
              </p>

              <div className="space-y-1.5 text-xs">
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Ahad: Hayyun Qoyyuum</span>
                  <span className="text-emas-400 font-mono font-bold">222x</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Senin: Rohmaanur Rohiim</span>
                  <span className="text-emas-400 font-mono font-bold">333x</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Jum'at: Syadiidun Dzuuquwwatin</span>
                  <span className="text-emas-400 font-mono font-bold">777x</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Dzikir Jahr Ba'da Sholat</span>
                  <span className="text-merah-400 font-mono font-bold">165x / 33x</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Haptic Feedback Taktil</span>
              <span className="text-emas-400 font-bold">Getaran Milestone</span>
            </div>
          </div>

          {/* Tile 6: Perbaikan Sistem v1.2.0 (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sky-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-sky-500/30 flex items-center justify-center shadow-md">
                  <Zap className="w-6 h-6 text-sky-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wider uppercase">
                  Perbaikan Sistem
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Notifikasi Sholat &amp; Performa
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Peningkatan kualitas kenyamanan penggunaan harian berdasarkan masukan para ikhwan dan jama'ah.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">Nama Kota Notifikasi Bersih</span>
                    <span className="text-slate-400 text-[11px]">Bukan lagi koordinat GPS mentah.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2">
                  <Zap className="w-4 h-4 text-emas-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">Buka Aplikasi Instan</span>
                    <span className="text-slate-400 text-[11px]">Splash screen fix tanpa jeda / freeze.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">Ukuran Aplikasi Lebih Ringan</span>
                    <span className="text-slate-400 text-[11px]">Pembaruan Google Play lebih lancar.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Teruji di Berbagai Merek HP</span>
              <span className="text-emerald-400 font-bold">Stabil &amp; Cepat</span>
            </div>
          </div>

          {/* Tile 7: 100% Offline-First Architecture (Wide 2-col) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-merah-600/15 via-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                    <Database className="w-6 h-6 text-emas-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                    SQLDelight 2.3.2 • 100% Luring
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  100% Arsitektur Offline-First
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Tidak ada kekhawatiran kehilangan sinyal saat berada di ruang bawah tanah masjid, pegunungan, atau majlis zikir. Seluruh teks doa amaliyah, wirid kemalaikatan, mushaf 114 surah 604 halaman, silsilah 1-38, dan kitab manqobah tersimpan luring langsung di memori perangkat SQLite type-safe.
                </p>

                {/* Micro tech pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Zero Cloud Latency</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Cold Startup &lt; 850ms</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Memory &lt; 70MB</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-slate-400 font-medium">
                  AndroidSqliteDriver &amp; NativeSqliteDriver
                </span>
                <button
                  onClick={onOpenTechSpec}
                  className="text-xs font-bold text-emas-400 hover:text-emas-300 underline underline-offset-4 flex items-center gap-1"
                >
                  <span>Lihat Spesifikasi Arsitektur</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tile 8: Background Audio Player (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-merah-600/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                  <Music className="w-6 h-6 text-merah-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-merah-400 text-xs font-bold tracking-wider uppercase">
                  Background Audio
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Audio Player di Latar Belakang
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Lantunan Dzikir Jahr berirama, Shalawat Bani Hasyim, dan audio amaliyah tetap mengalun saat layar mati atau saat membuka aplikasi lain.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Media3 ExoPlayer</span>
                  <span className="text-emerald-400 font-semibold">Android Native</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>AVPlayer MPNowPlaying</span>
                  <span className="text-sky-400 font-semibold">iOS Lockscreen</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Mini Floating Bar</span>
                  <span className="text-emas-400 font-semibold">Semua Layar</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Langgam HQ Asli Suryalaya</span>
              <a
                href="#audio-demo"
                className="text-xs font-bold text-emas-400 hover:text-emas-300 underline underline-offset-4"
              >
                Coba Demo Audio →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
