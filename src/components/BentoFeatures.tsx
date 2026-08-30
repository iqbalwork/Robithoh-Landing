import React from 'react';
import {
  Database,
  BookOpen,
  Sparkles,
  Music,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Cpu
} from 'lucide-react';

interface BentoFeaturesProps {
  onOpenTechSpec: () => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onOpenTechSpec }) => {
  return (
    <section id="fitur" className="py-24 bg-canvas-dark relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-merah-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emas-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-xs font-bold text-emas-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Arsitektur &amp; Fitur Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dirancang Khusus untuk{' '}
            <span className="gold-gradient-text">Kekhusyukan Ibadah</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Perpaduan teknologi modern Kotlin Multiplatform, kehandalan luring SQLDelight, dan nilai-nilai tasawuf Thoriqoh Qodiriyyah Naqsyabandiyyah.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tile 1: 95% Offline-First (Wide 2-col) */}
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
                  95% Offline-First Architecture
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

          {/* Tile 2: Manqobah 3 Bahasa (1-col) */}
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

          {/* Tile 3: Interactive Haptic Tasbih (1-col) */}
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
                Sentuhan fullscreen responsif dengan animasi pegas (spring dynamic), getaran milestone pada target 33x, 100x, dan 165x sesuai amaliyah TQN.
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

          {/* Tile 4: Integrated Background Audio Player (Wide 2-col) */}
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
                  Lantunan Asli Khidmat Pesantren Sirnarasa
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

          {/* Tile 5: Al-Qur'an 114 Surah (1-col) */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                  <Layers className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                  114 Surah
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                Al-Qur'an Digital &amp; Tajwid
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Mushaf 30 Juz 114 Surah standar Kemenag RI dengan tajwid berwarna yang jernih, terjemahan Bahasa Indonesia, dan bookmark otomatis ayat terakhir dibaca.
              </p>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs text-slate-300">
                <span>Last Read Bookmark</span>
                <span className="text-emerald-400 font-bold">Auto-Saved</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Mushaf Tajwid Lengkap</span>
              <span className="text-emerald-400 font-bold">114 Surah</span>
            </div>
          </div>

          {/* Tile 6: Susunan MC & Silsilah 1-38 (Wide 2-col) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-emas-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col h-full justify-between relative z-10 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-950 to-canvas-card border border-merah-500/30 flex items-center justify-center shadow-md">
                    <ShieldCheck className="w-6 h-6 text-emas-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-bold tracking-wider uppercase">
                    Sanad Silsilah 38
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emas-300 transition-colors">
                  Susunan MC Manaqib, Tanbih &amp; Silsilah 1–38
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Menyajikan susunan baku pembacaan MC Manaqib dalam Bahasa Indonesia dan Basa Sunda, Wasiat Tanbih Pangersa Abah Anom &amp; Syeikh Ahmad Shohibulwafa Tajul Arifin, serta sanad Tawassul Silsilah 1 s/d 38 hingga Pangersa Abah Aos Ra. Qs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emas-400 flex-shrink-0" />
                    <span>Naskah MC Manaqib Dwibahasa (Indo / Sunda)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emas-400 flex-shrink-0" />
                    <span>Silsilah Mutashil 1 s/d 38 Sirnarasa</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Rujukan Resmi Thoriqoh Qodiriyyah Naqsyabandiyyah</span>
                <span className="text-emas-400 font-bold">Pangersa Abah Aos Ra. Qs.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
