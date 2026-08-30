import React from 'react';
import { Download, Sparkles, QrCode, ShieldCheck, Zap, HardDrive, Smartphone, Clock } from 'lucide-react';
import { SmartphoneMockup } from './SmartphoneMockup';

interface HeroSectionProps {
  onOpenDownload: () => void;
  onOpenQrModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownload, onOpenQrModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-islamic-pattern">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-merah-600/20 via-emas-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-merah-700/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emas-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-merah-950/60 border border-emas-500/40 text-xs font-bold text-emas-300 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-emas-400 animate-spin-slow" />
              <span>Tersedia di Google Play Store (Akses Awal / Alpha)</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Aplikasi Ibadah &amp; Amaliyah{' '}
                <span className="crimson-gradient-text">TQN</span> Modern{' '}
                <span className="gold-gradient-text">Multiplatform</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Satu genggaman khidmat untuk mengamalkan Dzikir Jahr &amp; Khofi, Kitab Manqobah Syeikh Abdul Qodir Al-Jailani 1–56 dalam 3 bahasa, Tasbih Haptik, Al-Qur'an 114 Surah, dan Audio Player dengan arsitektur <strong className="text-emas-400 font-semibold">100% Offline-First</strong>.
              </p>
            </div>

            {/* Download CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-merah-600 via-merah-500 to-merah-700 hover:from-merah-500 hover:to-merah-600 text-white font-extrabold text-base shadow-xl shadow-merah-600/40 hover:shadow-merah-600/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 border border-merah-400/40 group"
              >
                <Smartphone className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-[11px] font-medium text-merah-100 uppercase tracking-wider">Unduh Resmi</span>
                  <span className="text-base font-bold">Google Play Store</span>
                </div>
              </a>

              {/* QR Code / App Store Modal Trigger */}
              <button
                onClick={onOpenQrModal}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-canvas-card hover:bg-canvas-surface text-slate-200 hover:text-white font-bold text-sm border border-emas-500/30 hover:border-emas-400 shadow-md hover:shadow-gold-glow transition-all flex items-center justify-center gap-3"
              >
                <QrCode className="w-5 h-5 text-emas-400" />
                <div className="text-left">
                  <span className="block text-[11px] font-medium text-slate-400">Pindai di Ponsel</span>
                  <span className="text-sm font-bold text-emas-400">Scan QR Code</span>
                </div>
              </button>
            </div>

            {/* Store Badges Row */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-slate-400 font-medium">Tersedia untuk:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Android (Google Play)
                </a>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" /> iOS (Coming Soon)
                </span>
              </div>
            </div>

            {/* Key Stat Badges Grid */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-xl bg-canvas-card/60 border border-white/5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-emas-400 font-extrabold text-xl">
                  <HardDrive className="w-4 h-4" /> 95%
                </div>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Offline-First DB</p>
              </div>

              <div className="p-3 rounded-xl bg-canvas-card/60 border border-white/5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-merah-400 font-extrabold text-xl">
                  <ShieldCheck className="w-4 h-4" /> 38
                </div>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Sanad Silsilah TQN</p>
              </div>

              <div className="p-3 rounded-xl bg-canvas-card/60 border border-white/5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-emas-400 font-extrabold text-xl">
                  <Zap className="w-4 h-4" /> 56 Bab
                </div>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Manqobah 3 Bahasa</p>
              </div>

              <div className="p-3 rounded-xl bg-canvas-card/60 border border-white/5 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-emerald-400 font-extrabold text-xl">
                  <Sparkles className="w-4 h-4" /> 100%
                </div>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Bebas Iklan</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <SmartphoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
