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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-canvas-card border border-emas-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-merah-600/20 via-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-600 to-merah-900 flex items-center justify-center text-white shadow-lg">
            <Sparkles className="w-6 h-6 text-emas-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">Download Center Robithoh</h3>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                Tersedia di Play Store
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Instalasi Resmi untuk Android (Google Play) &amp; iOS (Coming Soon)
            </p>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          
          {/* Left Column: Play Store & Direct APK */}
          <div className="space-y-4">
            
            {/* Primary Google Play Store Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-merah-950/80 to-canvas-card border border-emas-500/40 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-emas-300">
                  Google Play Store (Resmi)
                </span>
                <span className="text-[10px] font-bold bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-300">
                  Akses Awal (Alpha)
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Aplikasi Robithoh telah resmi tersedia di Google Play Store. Dapatkan pembaruan otomatis, keamanan terverifikasi Google Play Protect, dan instalasi 1-klik.
              </p>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleConfetti}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-merah-600 via-merah-500 to-merah-700 hover:from-merah-500 hover:to-merah-600 text-white text-sm font-bold shadow-lg shadow-merah-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-merah-400/40"
              >
                <Smartphone className="w-4 h-4 text-emerald-300" />
                <span>Buka di Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-white/5">
                <span>ID: com.iqbalwork.robithoh</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Play Protect
                </span>
              </div>
            </div>

            {/* iOS App Store Option */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                Platform Lainnya
              </span>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Versi iOS sedang dalam tahap finalisasi dan akan segera hadir (Coming Soon) di Apple App Store!');
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-xs transition-colors group opacity-90"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-sky-400" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-white">Apple App Store (iOS)</p>
                      <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold border border-amber-500/30">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400">Tahap Pengembangan &amp; Distribusi</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic QR Code Scanner Box */}
          <div className="p-5 rounded-2xl bg-canvas-surface border border-white/10 flex flex-col items-center justify-between text-center space-y-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emas-400 block mb-1">
                Pindai di Smartphone
              </span>
              <p className="text-xs text-slate-300">
                Arahkan kamera smartphone Anda ke QR code ini untuk langsung membuka Google Play Store.
              </p>
            </div>

            {/* QR Code Canvas Frame */}
            <div className="p-3 bg-white rounded-2xl shadow-xl border-2 border-emas-500/40">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="QR Code Google Play Store Robithoh"
                  className="w-44 h-44 object-contain rounded-lg"
                />
              ) : (
                <div className="w-44 h-44 bg-slate-100 animate-pulse rounded-lg flex items-center justify-center text-slate-400 text-xs font-mono">
                  Membuat QR...
                </div>
              )}
            </div>

            {/* Link Copy Box */}
            <div className="w-full space-y-2">
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/10 text-xs">
                <input
                  type="text"
                  readOnly
                  value={downloadUrl}
                  className="bg-transparent text-slate-300 font-mono text-[10px] flex-1 outline-none truncate px-1"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-2.5 py-1 rounded-lg bg-emas-500/20 hover:bg-emas-500/30 text-emas-300 font-semibold text-[10px] flex items-center gap-1 transition-colors flex-shrink-0"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
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

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <AlertCircle className="w-3 h-3 text-emas-400" />
                <span>Bebas iklan &amp; gratis selamanya</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
