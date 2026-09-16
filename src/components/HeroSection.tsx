import React, { useState } from 'react';
import { Smartphone, Sparkles, QrCode, BookOpen, WifiOff, ShieldCheck, Compass, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface HeroSectionProps {
  onOpenDownload: () => void;
  onOpenQrModal: () => void;
  onOpenReleaseModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownload, onOpenQrModal, onOpenReleaseModal }) => {
  const [activePreview, setActivePreview] = useState<'home' | 'sholat'>('home');

  return (
    <section className="relative w-full overflow-hidden bg-surface-pure pt-32 pb-16 lg:pt-36 lg:pb-24" id="ikhtisar">
      {/* Ambient Red & Gold Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-[550px] h-[550px] bg-red-soft/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-32 left-1/3 -z-10 w-[420px] h-[420px] bg-gold-light/70 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & CTAs Left (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Release Badge */}
            {onOpenReleaseModal ? (
              <button
                type="button"
                onClick={onOpenReleaseModal}
                className="inline-flex items-center gap-2 bg-gold-light/90 hover:bg-gold-light px-3.5 py-1.5 rounded-full shadow-sm border border-gold-accent/30 text-left transition-transform hover:scale-[1.01] cursor-pointer"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                  v1.2.0 • Tersedia di Google Play Store
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white text-primary font-bold ml-1">
                  Lihat Detail →
                </span>
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 bg-gold-light/90 px-3.5 py-1.5 rounded-full shadow-sm border border-gold-accent/30">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                  v1.2.0 • Tersedia di Google Play Store
                </span>
              </div>
            )}

            {/* Main Value Prop Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.12]">
              Aplikasi Ibadah &amp; Amaliyah{' '}
              <span className="text-primary underline decoration-gold-accent decoration-wavy decoration-2 underline-offset-8">
                MTQN Modern
              </span>{' '}
              Multiplatform
            </h1>

            {/* Crisp Subhead */}
            <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
              Satu genggaman khidmat dengan <strong className="text-on-surface font-semibold">Mode Mushaf Al-Qur'an Standar Kemenag RI (604 Halaman)</strong>, Jadwal Sholat Presisi, Kompas Kiblat Akurat, dan Amaliyah Harian TQN PP Suryalaya Sirnarasa. Didesain <strong className="text-primary font-semibold">100% Offline-First</strong> tanpa gangguan iklan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-container text-white px-6 py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Smartphone className="w-6 h-6 text-white" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] uppercase tracking-wider text-white/80 font-medium">Tersedia Sekarang</span>
                  <span className="text-base font-bold mt-1">Unduh di Google Play</span>
                </div>
              </a>

              <button
                type="button"
                onClick={() => alert('Versi iOS sedang dalam tahap pengembangan dan akan segera hadir (Coming Soon) di Apple App Store!')}
                className="inline-flex items-center gap-2.5 bg-surface-warm hover:bg-slate-100 text-on-surface px-4 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm border border-border-hairline cursor-pointer group"
              >
                <svg className="w-5 h-5 fill-current text-slate-800 group-hover:text-primary transition-colors shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.95 2.77.99.08 2.03-.5 2.68-1.27z"/>
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-on-surface">App Store (iOS)</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold-light text-amber-900 font-extrabold border border-gold-accent/30 uppercase tracking-tight">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-[10px] text-text-muted mt-1 font-normal">Tahap Pengembangan</span>
                </div>
              </button>

              <button
                type="button"
                onClick={onOpenQrModal}
                className="inline-flex items-center gap-2.5 bg-surface-warm hover:bg-slate-100 text-on-surface px-4 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm border border-border-hairline cursor-pointer"
              >
                <QrCode className="w-5 h-5 text-primary" />
                <span>Pindai QR</span>
              </button>

              <a
                href="#tampilan"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-primary px-3 py-2 text-sm font-semibold transition-colors"
              >
                <span>Lihat Layar</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Bar with Clean, Elegant Cards */}
            <div className="w-full mt-4 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-3.5 border-t border-slate-200/80">
              <div className="flex flex-col gap-2.5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xs border border-slate-200/80 hover:border-primary/40 hover:shadow-sm transition-all">
                <div className="w-9 h-9 rounded-xl bg-red-soft flex items-center justify-center text-primary shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Mushaf Kemenag</span>
                  <span className="text-sm sm:text-base font-extrabold text-on-surface mt-0.5">604 Halaman</span>
                  <span className="text-[10px] text-slate-600 font-medium mt-0.5">Standar Mushaf RI</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xs border border-slate-200/80 hover:border-gold-accent/40 hover:shadow-sm transition-all">
                <div className="w-9 h-9 rounded-xl bg-gold-light flex items-center justify-center text-secondary shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Surah &amp; Dzikir</span>
                  <span className="text-sm sm:text-base font-extrabold text-on-surface mt-0.5">38 Bab Amaliyah</span>
                  <span className="text-[10px] text-slate-600 font-medium mt-0.5">Lengkap &amp; Sanad Sahih</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xs border border-slate-200/80 hover:border-primary/40 hover:shadow-sm transition-all">
                <div className="w-9 h-9 rounded-xl bg-red-soft flex items-center justify-center text-primary shrink-0">
                  <WifiOff className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Akses Luring</span>
                  <span className="text-sm sm:text-base font-extrabold text-on-surface mt-0.5">100% Offline</span>
                  <span className="text-[10px] text-slate-600 font-medium mt-0.5">Bebas Kuota Data</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xs border border-slate-200/80 hover:border-emerald-300 hover:shadow-sm transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Kenyamanan</span>
                  <span className="text-sm sm:text-base font-extrabold text-emerald-700 mt-0.5">0% Iklan</span>
                  <span className="text-[10px] text-slate-600 font-medium mt-0.5">Khidmat &amp; Tenang</span>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Mockup Composition Right (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex justify-center items-center pt-8 lg:pt-0">
            {/* Ambient Glow Circle behind Mockups */}
            <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10" />

            {/* Dual Staggered Realistic Phones */}
            <div className="relative w-full max-w-[360px] md:max-w-[420px] flex items-center justify-center py-6">
              
              {/* Background Phone: Jadwal Sholat */}
              <div
                onClick={() => setActivePreview(activePreview === 'home' ? 'sholat' : 'home')}
                className={`absolute -left-4 sm:-left-6 top-8 w-[200px] sm:w-[225px] rounded-[36px] p-2 bg-slate-900 shadow-2xl shadow-slate-900/20 transition-all duration-300 cursor-pointer ${
                  activePreview === 'sholat'
                    ? 'z-20 scale-105 rotate-0'
                    : 'rotate-[-6deg] hover:rotate-0 hover:z-20 opacity-90'
                }`}
                title="Klik untuk menukar tampilan depan"
              >
                <div className="rounded-[28px] overflow-hidden bg-black aspect-[1008/2244] shadow-inner">
                  <img
                    alt="Tampilan Jadwal Sholat Robithoh"
                    className="w-full h-full object-cover"
                    src="./assets/screenshots/sholat.png"
                  />
                </div>
              </div>

              {/* Foreground Phone: Beranda & Sholat Berikutnya */}
              <div
                onClick={() => setActivePreview(activePreview === 'sholat' ? 'home' : 'sholat')}
                className={`relative w-[230px] sm:w-[255px] rounded-[40px] p-2.5 bg-slate-950 shadow-2xl shadow-primary/25 transition-all duration-300 cursor-pointer ${
                  activePreview === 'home'
                    ? 'z-10 translate-x-8 sm:translate-x-12 translate-y-2'
                    : 'z-0 translate-x-4 sm:translate-x-6 translate-y-6 opacity-90'
                }`}
                title="Klik untuk menukar tampilan depan"
              >
                {/* Notch speaker & camera pill */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20" />
                <div className="rounded-[30px] overflow-hidden bg-black aspect-[1008/2244] shadow-inner">
                  <img
                    alt="Tampilan Beranda Utama Robithoh"
                    className="w-full h-full object-cover"
                    src="./assets/screenshots/home.png"
                  />
                </div>

                {/* Floating Live Indicator Badge */}
                <div className="absolute -bottom-3 -left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2 z-30">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-accent animate-ping" />
                  <span className="text-xs font-bold text-on-surface">Waktu Sholat Presisi</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
