import React, { useState } from 'react';
import { X, Sparkles, Smartphone, Check, Share2, ExternalLink, BookOpen, Compass, Layers, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReleaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh';

export const ReleaseModal: React.FC<ReleaseModalProps> = ({ isOpen, onClose }) => {
  const [copiedShare, setCopiedShare] = useState(false);

  if (!isOpen) return null;

  const handleConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#CE1126', '#D4AF37', '#10B981', '#FFFFFF']
    });
  };

  const shareText = `📢 UPDATE RESMI: ROBITHOH APP v1.2.0 SUDAH RILIS! 🎉

Alhamdulillah, pembaruan versi 1.2.0 untuk aplikasi amaliyah dan ibadah Robithoh telah hadir di Google Play Store!

✨ Yang Baru di v1.2.0:
📖 Mode Baru Al-Qur'an Per Halaman (Mushaf Page): Tampilan lembaran mushaf utuh standar Kemenag RI, pemetaan ayat interaktif, dan 100% offline.
🤲 Halaman Khusus Doa & Live Search: Tampilan luas mencari doa amaliyah (Nadzom Bani Hasyim, Doa Ba'da Jumat, Wirid Kemalaikatan, dll).
🌿 Penyempurnaan Naskah Manqobah: Naskah 12 bulan (Bahasa Indonesia & Sunda) dan teks dzikir lebih rapi & presisi.
📿 Wirid Kemalaikatan: Pilihan wirid kemalaikatan pada fitur Tasbih Digital.

🛠️ Perbaikan Sistem:
• Notifikasi jadwal sholat kini menampilkan nama kota yang bersih.
• Buka aplikasi lebih cepat tanpa jeda/freeze (splash screen fix).
• Perbaikan update Google Play & ukuran aplikasi lebih ringan.

Yuk langsung perbarui aplikasi Robithoh di Google Play Store:
👉 ${PLAY_STORE_URL}

Barokallohu fiikum! 🙏✨`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareText);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-canvas-card border border-emas-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-merah-600/20 via-emas-500/15 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emas-500/10 rounded-tr-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors z-20"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="relative z-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-merah-950/80 border border-emas-500/40 text-xs font-bold text-emas-300 mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-emas-400 animate-pulse" />
            <span>Pembaruan Resmi Telah Rilis</span>
            <span className="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">
              v1.2.0
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Robithoh App <span className="crimson-gradient-text">v1.2.0</span> Sudah Hadir di{' '}
            <span className="gold-gradient-text">Google Play Store</span>! 🎉
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            Alhamdulillah, pembaruan versi terbaru membawa fitur besar yang dinantikan para ikhwan &amp; akhwat pengamal dzikir.
          </p>
        </div>

        {/* Main Content Grid: Poster & Feature Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-start">
          
          {/* Left Column: Official Poster Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emas-500/40 shadow-2xl bg-black group max-w-[320px] w-full">
              <img
                src="./assets/images/Poster_Rilis_v1.2.0.png"
                alt="Poster Resmi Rilis Robithoh App v1.2.0"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-bold text-emas-300">Poster Resmi Rilis v1.2.0</span>
              </div>
            </div>
          </div>

          {/* Right Column: Changelog & Action CTAs */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* New Features Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-emas-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Yang Baru di Versi 1.2.0:</span>
              </h4>

              <div className="space-y-2.5">
                <div className="p-3 rounded-2xl bg-canvas-surface border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-merah-950/80 border border-merah-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4 text-emas-400" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">Mode Al-Qur'an Per Halaman (Mushaf Page)</h5>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Tampilan lembaran mushaf utuh standar resmi Kemenag RI lengkap 604 halaman, pemetaan ayat interaktif, dan dukungan 100% offline tanpa kuota.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-canvas-surface border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-merah-950/80 border border-merah-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">Halaman Khusus Doa &amp; Live Search</h5>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Tampilan pencarian baru yang luas untuk mencari doa amaliyah: Nadzom Bani Hasyim, Doa Ba'da Sholat Jumat, Kaifiyat Wirid Kemalaikatan, dll.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-canvas-surface border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-merah-950/80 border border-merah-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Layers className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">Penyempurnaan Naskah Manqobah 12 Bulan</h5>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Naskah 12 bulan hijriyah (Bahasa Indonesia &amp; Basa Sunda halus) serta teks dzikir ditata ulang lebih rapi, presisi, dan nyaman dibaca saat majlis.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-canvas-surface border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-merah-950/80 border border-merah-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">Preset Wirid Kemalaikatan di Tasbih Digital</h5>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Pilihan wirid kemalaikatan harian (Ahad s.d. Jum'at: 222x s.d. 777x sesuai Malaikat penjaga) dengan respon getaran haptic berirama.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Fixes Box */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
              <h5 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emas-400" />
                <span>Perbaikan Sistem &amp; Peningkatan Kinerja:</span>
              </h5>
              <ul className="text-xs text-slate-400 space-y-1 pl-4 list-disc">
                <li>Notifikasi jadwal sholat kini menampilkan <strong className="text-slate-200">nama kota yang bersih</strong> (bukan koordinat GPS mentah).</li>
                <li>Buka aplikasi lebih cepat tanpa jeda/freeze (<strong className="text-slate-200">splash screen fix</strong>).</li>
                <li>Pembaruan Google Play lebih lancar &amp; ukuran aplikasi lebih ringan.</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleConfetti}
                className="w-full sm:flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-merah-600 via-merah-500 to-merah-700 hover:from-merah-500 hover:to-merah-600 text-white text-sm font-extrabold shadow-xl shadow-merah-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 border border-merah-400/40 group"
              >
                <Smartphone className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>Perbarui di Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                onClick={handleCopyShare}
                className="w-full sm:w-auto py-3.5 px-4 rounded-2xl bg-canvas-surface hover:bg-white/10 border border-white/10 hover:border-emas-500/40 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                title="Salin Pesan Rilis untuk Dibagikan ke WhatsApp"
              >
                {copiedShare ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Pesan Disalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-emas-400" />
                    <span>Bagikan Pesan</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center sm:text-left">
              Bantu bagikan kabar gembira ini ke ikhwan, akhwat, dan grup lainnya. Barokallohu fiikum! 🙏✨
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};
