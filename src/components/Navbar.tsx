import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Menu, X, Volume2, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  isPlayingAudio?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, isPlayingAudio = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fitur Utama', href: '#fitur' },
    { label: 'Tampilan Layar', href: '#screenshots' },
    { label: 'Tasbih Digital', href: '#tasbih' },
    { label: 'Audio & Liturgi', href: '#audio-demo' },
    { label: 'Kebijakan Privasi', href: './privacy.html' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas-dark/90 backdrop-blur-md border-b border-emas-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-merah-500 via-merah-700 to-black p-0.5 shadow-md shadow-merah-700/50 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/icons/icon.png"
                  alt="Robithoh Logo"
                  className="w-full h-full object-cover rounded-[10px]"
                  onError={(e) => {
                    // Fallback to stylized letter R if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emas-500 border-2 border-canvas-dark flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-black" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-wider text-white group-hover:text-emas-400 transition-colors">
                  ROBITHOH
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-merah-500/20 text-merah-300 border border-merah-500/30">
                  TQN
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Panduan Ibadah &amp; Amaliyah</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-emas-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {isPlayingAudio && (
              <a
                href="#audio-demo"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-emas-400 text-xs font-semibold animate-pulse"
              >
                <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                <span>Audio Sedang Diputar</span>
              </a>
            )}
            <button
              onClick={onOpenDownload}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-merah-600 via-merah-500 to-merah-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-merah-600/30 hover:shadow-merah-600/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-merah-400/30 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-emas-300" />
              <span>Unduh di Play Store</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={onOpenDownload}
              className="p-2 rounded-lg bg-merah-600 text-white"
              aria-label="Unduh di Play Store"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-canvas-surface text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 pb-3 border-t border-slate-800 bg-canvas-surface/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-emas-500/20">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-emas-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDownload();
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-merah-600 to-merah-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Aplikasi Mobile (APK & Stores)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
