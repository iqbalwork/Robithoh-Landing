import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenReleaseModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownload,
  onOpenReleaseModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ikhtisar Aplikasi', href: '#ikhtisar' },
    { label: 'Fitur Unggulan', href: '#fitur' },
    { label: 'Tampilan Layar', href: '#tampilan' },
    { label: 'Tentang', href: '#tentang' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3.5'
      }`}
    >
      {/* Top Announcement Bar for v1.2.0 Release */}
      {showAnnouncement && (
        <div className="mb-2 px-4">
          <div className="max-w-7xl mx-auto py-1 px-3 sm:px-4 rounded-full bg-gold-light/80 border border-gold-accent/30 flex items-center justify-between gap-2 text-xs shadow-sm">
            <div className="flex-1 flex items-center justify-center gap-2 flex-wrap text-center">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-white font-bold text-[10px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                v1.2.0 Telah Hadir
              </span>
              <span className="text-on-surface font-medium text-[11px] sm:text-xs">
                Mode Mushaf Al-Qur'an Standar Kemenag RI, Doa &amp; Wirid Kemalaikatan kini tersedia di Google Play!
              </span>
              {onOpenReleaseModal && (
                <button
                  onClick={onOpenReleaseModal}
                  className="text-[11px] sm:text-xs font-bold text-primary hover:text-primary-container underline underline-offset-2 flex items-center gap-0.5 transition-colors cursor-pointer"
                >
                  <span>Detail Rilis</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowAnnouncement(false)}
              className="p-1 rounded-full text-slate-400 hover:text-on-surface transition-colors"
              aria-label="Tutup Pengumuman"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="./assets/icons/icon.png"
              alt="Robithoh Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-primary font-sans">
                Robithoh
              </span>
              <span className="bg-gold-light text-secondary font-bold text-[11px] px-2 py-0.5 rounded-full border border-gold-accent/30 uppercase tracking-wide">
                v1.2.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-text-muted hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenReleaseModal && (
              <button
                onClick={onOpenReleaseModal}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-warm hover:bg-slate-100 border border-border-hairline text-on-surface text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
                <span>Rilis v1.2.0</span>
              </button>
            )}

            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white px-4 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(151,0,18,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-xs sm:text-sm font-bold"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Unduh Aplikasi</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={onOpenDownload}
              className="p-2 rounded-xl bg-primary text-white shadow-sm"
              aria-label="Unduh Aplikasi"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-surface-warm text-on-surface border border-border-hairline"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-3 border-t border-slate-200 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-slate-200">
            <div className="flex flex-col gap-2">
              {onOpenReleaseModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReleaseModal();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-gold-light/80 border border-gold-accent/30 text-secondary font-bold text-xs flex items-center justify-center gap-2 mb-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Pembaruan v1.2.0 • Detail Rilis</span>
                </button>
              )}

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-warm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 mt-1 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDownload();
                  }}
                  className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh di Google Play</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
