import React, { useState, useEffect } from 'react';
import { Download, X, Check, Copy, ExternalLink, ShieldCheck, Smartphone, AlertCircle } from 'lucide-react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';

interface DownloadCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadCenterModal: React.FC<DownloadCenterModalProps> = ({ isOpen, onClose }) => {
  const [downloadUrl] = useState('https://github.com/iqbalwork/Robithoh-App/releases/latest');
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

  const handleTriggerDownload = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#CE1126', '#D4AF37', '#FFFFFF']
    });

    alert('Mendownload Robithoh v1.0.0 APK... Terima kasih telah mengunduh aplikasi Robithoh!');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(downloadUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
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
            <Download className="w-6 h-6 text-emas-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">Download Center Robithoh</h3>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                v1.0.0 Stable
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Instalasi Resmi untuk Android &amp; iOS (Multiplatform)
            </p>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          
          {/* Left Column: Direct APK & Stores */}
          <div className="space-y-4">
            
            {/* Primary Direct APK Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-merah-950/80 to-canvas-card border border-merah-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-merah-300">
                  Android Direct APK
                </span>
                <span className="text-[10px] font-mono bg-black/40 px-2 py-0.5 rounded text-slate-300">
                  24.8 MB
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Unduh langsung berkas installer APK tanpa perlu akun Google Play Store. Kompatibel dengan Android 8.0 ke atas.
              </p>

              <button
                onClick={handleTriggerDownload}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-merah-600 via-merah-500 to-merah-700 hover:from-merah-500 hover:to-merah-600 text-white text-sm font-bold shadow-lg shadow-merah-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-merah-400/40"
              >
                <Download className="w-4 h-4" />
                <span>Unduh File APK Langsung</span>
              </button>

              <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-white/5">
                <span>SHA256: 8f4a...111d</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Terverifikasi
                </span>
              </div>
            </div>

            {/* Google Play & App Store Links */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                Toko Aplikasi Resmi
              </span>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Versi Google Play Store sedang dalam proses peninjauan (Review). Silakan gunakan tombol Direct APK untuk langsung menginstal.');
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-xs transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="font-bold text-white">Google Play Store</p>
                    <p className="text-[10px] text-slate-400">Android Instant Update</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Versi iOS TestFlight / App Store sedang dalam proses distribusi pra-rilis.');
                }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-xs transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-sky-400" />
                  <div>
                    <p className="font-bold text-white">Apple App Store (iOS)</p>
                    <p className="text-[10px] text-slate-400">Compose Multiplatform for iOS</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic QR Code Scanner Box */}
          <div className="p-6 rounded-2xl bg-black/40 border border-emas-500/20 text-center flex flex-col items-center justify-between">
            <div className="w-full">
              <span className="text-xs font-bold text-emas-400 uppercase tracking-wider block mb-1">
                Pindai di Smartphone Anda
              </span>
              <p className="text-[11px] text-slate-400 mb-4">
                Buka kamera ponsel atau aplikasi pemindai QR untuk mengunduh instan
              </p>

              {/* QR Image Box */}
              <div className="p-3 bg-white rounded-2xl shadow-xl inline-block border-2 border-emas-500/40">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="QR Code Unduh APK"
                    className="w-44 h-44 object-contain rounded-lg"
                  />
                ) : (
                  <div className="w-44 h-44 bg-slate-200 animate-pulse rounded-lg" />
                )}
              </div>
            </div>

            {/* Copy Link Button */}
            <div className="w-full mt-4">
              <button
                onClick={handleCopyLink}
                className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Link Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-emas-400" />
                    <span>Salin URL Unduh</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Installation Instructions Footnote */}
        <div className="mt-6 p-4 rounded-xl bg-canvas-surface border border-white/5 text-[11px] text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-200">
            <AlertCircle className="w-3.5 h-3.5 text-emas-400" />
            <span>Panduan Instalasi APK Android:</span>
          </div>
          <p>
            1. Buka file APK yang telah diunduh di smartphone Anda.
          </p>
          <p>
            2. Jika muncul peringatan keamanan, pilih <em>"Izinkan dari sumber ini"</em> (Allow from this source).
          </p>
          <p>
            3. Aplikasi Robithoh 100% aman, bebas iklan, dan bebas malware.
          </p>
        </div>

      </div>
    </div>
  );
};
