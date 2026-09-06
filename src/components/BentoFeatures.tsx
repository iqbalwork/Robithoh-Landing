import React from 'react';
import {
  LayoutGrid,
  Compass,
  Volume2,
  Eye,
  Database,
  BookOpen,
  Sparkles,
  Music,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Clock,
  Layers,
  Smartphone
} from 'lucide-react';

interface BentoFeaturesProps {
  onOpenTechSpec: () => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onOpenTechSpec }) => {
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
            <span>Pembaruan v1.1.0 &amp; Arsitektur Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Dirancang Khusus untuk{' '}
            <span className="gold-gradient-text">Kekhusyukan &amp; Kemudahan</span> Ibadah
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Hadir dengan inovasi <strong className="text-emas-400 font-semibold">Home Screen Widget</strong>, panduan interaktif <strong className="text-emas-400 font-semibold">Spotlight</strong>, kendali volume suara adzan, dan kenyamanan membaca naskah amaliyah ramah semua usia.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tile 1: 8 Home Screen Widget (Wide 2-col) */}
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
                      Baru di v1.1.0
                    </span>
                    <span className="px-3 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-merah-400 text-xs font-bold tracking-wider uppercase">
                      8 Varian Android
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  8 Varian Home Screen Widget Interaktif
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Amalkan wirid dan pantau sholat langsung dari layar utama ponsel Anda tanpa perlu membuka aplikasi terlebih dahulu. Dilengkapi perhitungan hisab realtime, sinkronisasi data seketika, dan ornamen Emas Khidmat.
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
                    <p className="text-xs text-slate-300">Hitung mundur sholat berikutnya, 5 waktu fardhu &amp; waktu amaliyah tarekat (Imsak, Syuruq, Tahajjud).</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-emas-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-merah-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Tasbih Digital (2x2 &amp; 4x1)
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emas-500/20 text-emas-300 font-semibold">1-Ketukan</span>
                    </div>
                    <p className="text-xs text-slate-300">Penghitung wirid interaktif di layar beranda dengan tombol tambah cepat dan setel ulang target.</p>
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

          {/* Tile 2: Onboarding & Spotlight (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-emas-500/30 flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6 text-emas-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-bold tracking-wider uppercase">
                  Panduan Visual
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Onboarding &amp; Spotlight Guideline
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Tidak ada lagi rasa bingung bagi pemula maupun sesepuh. Aplikasi memandu fitur kunci secara visual melalui sorotan animasi interaktif.
              </p>

              {/* Spotlight Simulation Card */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-black/50 border border-emas-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emas-400 animate-ping" />
                    <span className="text-slate-200 font-semibold">Spotlight di Reader</span>
                  </div>
                  <span className="text-emas-400 font-bold">Zoom &amp; Tema Kertas</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Spotlight di Jadwal Sholat</span>
                  <span className="text-slate-400">Volume &amp; Ihtiyat</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Reset Panduan di Profil</span>
                  <span className="text-emerald-400 font-bold">Ulang Kapan Saja</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Alur Selamat Datang 5 Slide</span>
              <span className="text-emas-400 font-bold">Ramah Pemula &amp; Lansia</span>
            </div>
          </div>

          {/* Tile 3: Volume Adzan Mandiri (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-merah-600/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                  <Volume2 className="w-6 h-6 text-merah-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-merah-400 text-xs font-bold tracking-wider uppercase">
                  Slider 0%–100%
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Atur Volume Adzan Mandiri
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Kendali penuh tingkat kekerasan suara kumandang adzan tanpa terikat volume dering telepon ponsel Anda.
              </p>

              {/* Slider simulation */}
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium">Volume Suara Adzan</span>
                  <span className="text-merah-400 font-bold">85% Khidmat</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5">
                  <div className="bg-gradient-to-r from-merah-600 to-emas-400 h-full rounded-full w-[85%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>0% Senyap / Mute</span>
                  <span>100% Maksimal</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Mode Senyap Fleksibel</span>
              <span className="text-merah-400 font-bold">Notifikasi Tetap Muncul</span>
            </div>
          </div>

          {/* Tile 4: Bacaan Ramah Semua Usia & Lansia (Wide 2-col) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emas-500/15 via-merah-600/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-emas-500/30 flex items-center justify-center shadow-md">
                    <Eye className="w-6 h-6 text-emas-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-bold tracking-wider uppercase">
                      Font Zoom 85%–165%
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                      Ramah Semua Usia
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  Kenyamanan Membaca Ramah Semua Usia
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Membaca amaliyah, Dzikir Jahr, Khotaman, dan Manqobah menjadi sangat menyejukkan mata. Pengaturan ukuran teks instan, spasi baris renggang, dan 3 pilihan warna latar kertas klasik.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#FBF8F3] text-slate-900 shadow-sm border border-emas-500/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-merah-900">Tema Krem Khidmat</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-merah-700" />
                    </div>
                    <p className="text-[11px] text-slate-700 leading-snug">Nuansa kertas kitab klasik yang lembut dan anti-silau di mata jama'ah.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white text-slate-900 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">Tema Putih Bersih</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">Kontras terang tajam untuk membaca di luar ruangan atau siang hari.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/60 text-slate-200 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emas-400">Gelap Kontras Tinggi</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">Sangat nyaman untuk majlis zikir malam hari tanpa mengganggu sekitar.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Tipografi Arab Scheherazade New &amp; Amiri Quran Berharakat Renggang</span>
                <span className="text-emas-400 font-bold">Terjemahan 3 Bahasa</span>
              </div>
            </div>
          </div>

          {/* Tile 5: 100% Offline-First (Wide 2-col) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-merah-600/15 via-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                    <Database className="w-6 h-6 text-emas-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                    SQLDelight 2.3.2
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  100% Offline-First Architecture
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Tidak ada kekhawatiran kehilangan sinyal saat berada di masjid bawah tanah, pedalaman, atau majlis zikir. Seluruh teks doa, wirid, mushaf 114 surah, silsilah 1-38, dan kitab manqobah tersimpan luring langsung di memori perangkat SQLite type-safe.
                </p>

                {/* Micro tech pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Zero Cloud Latency</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Cold Startup &lt; 1s</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Memory &lt; 80MB</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  AndroidSqliteDriver &amp; NativeSqliteDriver
                </span>
                <button
                  onClick={onOpenTechSpec}
                  className="text-xs font-bold text-emas-400 hover:text-emas-300 underline underline-offset-4 flex items-center gap-1"
                >
                  <span>Lihat Spesifikasi Teknis</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tile 6: Kitab Manqobah 1-56 (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6 text-merah-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-merah-400 text-xs font-bold tracking-wider uppercase">
                  3 Bahasa
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Kitab Manqobah 1–56
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                56 bab manqobah karomah Syeikh Abdul Qodir Al-Jailani r.a. dengan teks Arab berharakat, terjemahan Bahasa Indonesia, dan Basa Sunda.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Mode Presentasi Majlis</span>
                  <span className="text-emas-400 font-bold">Wake Lock ON</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-slate-300">
                  <span>Font Scaling Pembaca</span>
                  <span className="text-emas-400 font-bold">Ramah Lansia</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Bahasa Arab, Indo, Sunda</span>
              <span className="text-merah-400 font-bold">56 Bab Lengkap</span>
            </div>
          </div>

          {/* Tile 7: Tasbih Digital Haptik (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6 text-emas-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-bold tracking-wider uppercase">
                  Haptic Feedback
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Interactive Tasbih Engine
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Sentuhan fullscreen responsif dengan animasi pegas (spring dynamic), getaran milestone pada target 33x, 100x, dan 165x sesuai amaliyah Dzikir Jahr 165x.
              </p>

              <div className="flex gap-2">
                <span className="flex-1 py-1.5 rounded-lg bg-white/5 border border-white/5 text-center text-xs font-bold text-emas-400">
                  33x
                </span>
                <span className="flex-1 py-1.5 rounded-lg bg-white/5 border border-white/5 text-center text-xs font-bold text-white">
                  100x
                </span>
                <span className="flex-1 py-1.5 rounded-lg bg-white/5 border border-white/5 text-center text-xs font-bold text-merah-400">
                  165x
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Tactile Vibration Engine</span>
              <span className="text-emas-400 font-bold">KmpHapticFeedback</span>
            </div>
          </div>

          {/* Tile 8: Background Audio Player (Wide 2-col) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-merah-600/15 via-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                    <Music className="w-6 h-6 text-merah-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-merah-400 text-xs font-bold tracking-wider uppercase">
                    Background Playback
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  Integrated Background Audio Player
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Dengarkan lantunan Dzikir Jahr berirama, Shalawat Bani Hasyim, Sholat Jumat, dan Tarawih tanpa terputus saat layar ponsel mati atau saat membuka aplikasi lain. Dilengkapi kontrol lockscreen dan floating player bar interaktif.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <p className="font-bold text-white mb-1">Android ExoPlayer</p>
                    <p className="text-slate-400 text-[11px]">Media3 Service &amp; MediaSession</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <p className="font-bold text-white mb-1">iOS AVPlayer</p>
                    <p className="text-slate-400 text-[11px]">MPNowPlayingInfoCenter Bridge</p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                    <p className="font-bold text-white mb-1">Mini Floating Bar</p>
                    <p className="text-slate-400 text-[11px]">Persistent Playback Across Screens</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Lantunan Asli Khidmat Dzikir &amp; Shalawat MTQN Suryalaya Sirnarasa PPKN III
                </span>
                <a
                  href="#audio-demo"
                  className="text-xs font-bold text-emas-400 hover:text-emas-300 underline underline-offset-4"
                >
                  Coba Demo Pemutar Audio →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
