import React, { useState, useEffect } from 'react';
import { Download, X, Check, Copy, ExternalLink, ShieldCheck, Smartphone, AlertCircle, Sparkles } from 'lucide-react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';

interface DownloadCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh';

export const DownloadCenterModal: React.FC<DownloadCenterModalProps> = ({ isOpen, onClose }) => {
  const [downloadUrl] = useState(PLAY_STORE_URL);
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    QRCode.toDataURL(downloadUrl, {
      width: 260,
      margin: 2,
      color: {
        dark: '#111113',
        light: '#FFFFFF'
      }
    }).then((url) => {
      setQrDataUrl(url);
    }).catch(console.error);
  }, [downloadUrl]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(downloadUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#CE1126', '#D4AF37', '#FFFFFF']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl lg:max-w-4xl bg-white border border-border-hairline rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-on-surface transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6 relative z-10 pr-10">
          <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md shrink-0">
            <Sparkles className="w-5 h-5 text-gold-accent" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-on-surface tracking-tight">Download Center Robithoh</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                v1.2.0 Pembaruan Baru
              </span>
            </div>
            <p className="text-xs text-text-muted mt-0.5">
              Instalasi untuk Android (Google Play Store) &amp; iOS (Coming Soon)
            </p>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 items-start">
          
          {/* Left Column: Play Store & Direct APK (7 Cols) */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Primary Google Play Store Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-warm border border-border-hairline space-y-3.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold tracking-wider text-primary">
                  Google Play Store
                </span>
                <span className="text-[10px] font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-emerald-700">
                  Versi 1.2.0
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Aplikasi Robithoh v1.2.0 kini tersedia di Google Play Store dengan fitur Mode Mushaf Standar Kemenag RI, Menu Doa, serta Kitab Manqobah 1–56.
              </p>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleConfetti}
                className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-gold-accent shrink-0" />
                <span className="whitespace-nowrap">Perbarui di Google Play</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
              </a>

              {/* Highlight Box with Clean 1-Line Bullets */}
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1.5 text-[11px] text-slate-700">
                <span className="font-bold text-primary block text-[10px] uppercase tracking-wider mb-1">Highlight v1.2.0:</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="truncate">Mode Mushaf Kemenag RI 604 Halaman</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="truncate">Halaman Khusus Doa &amp; Live Search</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="truncate">Wirid Kemalaikatan di Menu Doa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="truncate">Kitab Manqobah 1–56 (3 Bahasa)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="truncate">Notifikasi Sholat Nama Kota Bersih</span>
                </div>
              </div>

              {/* Package ID & Play Protect with zero overlap */}
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2 text-[11px]">
                <span className="text-[10px] text-slate-500 font-mono">ID: com.iqbalwork.robithoh</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1 text-[11px] shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Play Protect</span>
                </span>
              </div>
            </div>

            {/* iOS App Store Option */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-text-muted block uppercase tracking-wider">
                Platform Lainnya
              </span>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Versi iOS sedang dalam tahap finalisasi dan akan segera hadir (Coming Soon) di Apple App Store!');
                }}
                className="p-3 rounded-xl bg-surface-warm hover:bg-slate-100 border border-border-hairline flex items-center justify-between text-xs transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-on-surface">Apple App Store (iOS)</p>
                      <span className="px-1.5 py-0.2 rounded bg-gold-light text-amber-900 text-[9px] font-bold border border-gold-accent/30">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-[10px] text-text-muted">Tahap Pengembangan &amp; Distribusi</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-on-surface" />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic QR Code Scanner Box (5 Cols) */}
          <div className="md:col-span-5 p-5 sm:p-6 rounded-2xl bg-surface-warm border border-border-hairline flex flex-col items-center justify-between text-center space-y-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-primary block mb-1">
                Pindai di Smartphone
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                Arahkan kamera smartphone Anda ke QR code ini untuk langsung membuka Google Play Store.
              </p>
            </div>

            {/* QR Code Canvas Frame */}
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-border-hairline">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="QR Code Google Play Store Robithoh"
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-lg"
                />
              ) : (
                <div className="w-40 h-40 sm:w-44 sm:h-44 bg-slate-100 animate-pulse rounded-lg flex items-center justify-center text-text-muted text-xs font-mono">
                  Membuat QR...
                </div>
              )}
            </div>

            {/* Link Copy Box */}
            <div className="w-full space-y-2">
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-border-hairline text-xs">
                <input
                  type="text"
                  readOnly
                  value={downloadUrl}
                  className="bg-transparent text-slate-700 font-mono text-[10px] flex-1 outline-none truncate px-1"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-2.5 py-1 rounded-lg bg-red-soft hover:bg-red-100 text-primary font-bold text-[10px] flex items-center gap-1 transition-colors flex-shrink-0 cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-text-muted">
                <AlertCircle className="w-3 h-3 text-gold-accent" />
                <span>Bebas iklan &amp; gratis selamanya</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
