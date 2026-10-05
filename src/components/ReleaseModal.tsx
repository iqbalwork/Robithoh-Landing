import React, { useState } from 'react';
import { X, Sparkles, Smartphone, Check, Share2, ExternalLink, Globe, ScrollText, Volume2, Palette, Zap } from 'lucide-react';
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

  const shareText = `📢 UPDATE MAJOR RESMI: ROBITHOH APP v2.0.0 SUDAH RILIS! 🎉

Alhamdulillah, pembaruan Major Versi 2.0.0 (dan update stabil v2.1.1) untuk aplikasi amaliyah dan ibadah Robithoh telah hadir di Google Play Store!

✨ Yang Baru di Major Update v2.0.0:
🌍 Direktori Wakil Talqin (Waktal) Dunia lengkap dengan pencarian lokasi dan majlis binaan.
📜 Menu Maklumat & Informasi Resmi Pangersa Abah & Pesantren Sirnarasa.
🔊 Pengaturan Volume Adzan Mandiri terpisah dari media sistem.
🎨 Tampilan & Ikon Baru (Material Icons Extended & 3.dp card elevation).
⚡ Navigasi Cepat & Predictive Back (Navigation 3).

🛠️ Peningkatan & Optimasi Sistem:
• Performa aplikasi jauh lebih responsif, stabil, dan hemat daya.
• Perbaikan tata letak kartu dan keterbacaan teks amaliyah.
• Integrasi pencarian cerdas pada data wakil talqin dan maklumat.

Yuk langsung perbarui aplikasi Robithoh di Google Play Store:
👉 ${PLAY_STORE_URL}

Barokallohu fiikum! 🙏✨`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareText);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white border border-border-hairline rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-on-surface transition-colors z-20 cursor-pointer"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="relative z-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-soft border border-primary/20 text-xs font-bold text-primary mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Pembaruan Major Telah Rilis</span>
            <span className="px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
              v2.0.0
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight leading-tight">
            Robithoh App <span className="text-primary">v2.0.0</span> Resmi Hadir di{' '}
            <span className="text-gold-accent">Google Play Store</span>! 🎉
          </h3>
          <p className="text-text-muted text-sm mt-1">
            Alhamdulillah, rilis Major v2.0.0 membawa fitur Direktori Wakil Talqin Dunia, Maklumat Resmi, pengaturan volume adzan mandiri, serta peningkatan performa modern.
          </p>
        </div>

        {/* Features & Changelog Section */}
        <div className="space-y-5 relative z-10">
          
          {/* New Features Highlights (Grid) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
              <span>Fitur Utama Pembaruan v2.0.0:</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-red-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-on-surface">Direktori Wakil Talqin Dunia</h5>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Direktori Wakil Talqin (Waktal) lengkap dengan pencarian lokasi, riwayat khidmat, serta informasi majlis binaan di seluruh dunia.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ScrollText className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-on-surface">Menu Maklumat &amp; Informasi Resmi</h5>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Pusat maklumat resmi dari Pangersa Abah &amp; Pesantren Sirnarasa yang tersaji secara terstruktur, akurat, dan terverifikasi.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Volume2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-on-surface">Volume Adzan Mandiri</h5>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Pengaturan volume adzan mandiri terpisah dari media sistem, memastikan kumandang adzan tetap terdengar optimal sesuai kebutuhan ibadah.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-gold-light text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Palette className="w-4.5 h-4.5 text-gold-accent" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-on-surface">Tampilan &amp; Ikon Baru</h5>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Pembaruan visual modern dengan Material Icons Extended serta elevasi kartu halus 3.dp yang lebih nyaman di mata.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-xs sm:col-span-2">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-on-surface">Navigasi Cepat &amp; Predictive Back</h5>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Didukung arsitektur Navigation 3 untuk transisi antar halaman instan, gestur predictive back yang mulus, dan performa bebas hambatan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* System Fixes Box */}
          <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline space-y-2 shadow-xs">
            <h5 className="text-xs font-bold text-on-surface flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-gold-accent" />
              <span>Peningkatan Sistem &amp; Pengalaman Pengguna:</span>
            </h5>
            <ul className="text-xs text-text-muted space-y-1 pl-4 list-disc">
              <li>Pembaruan basis kode Kotlin Multiplatform &amp; Jetpack Compose terbaru.</li>
              <li>Performa rendering naskah amaliyah dan jadwal sholat lebih cepat dan hemat daya.</li>
              <li>Optimalisasi ukuran aplikasi dan stabilitas notifikasi pengingat waktu sholat.</li>
              <li>Integrasi antarmuka bersih sesuai standar desain Robithoh Design System (RDS).</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleConfetti}
              className="w-full sm:flex-1 py-3.5 px-5 rounded-2xl bg-primary hover:bg-primary/90 text-white text-sm font-extrabold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Smartphone className="w-4 h-4 text-gold-accent group-hover:scale-110 transition-transform" />
              <span>Perbarui di Google Play Store</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              onClick={handleCopyShare}
              className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-surface-warm hover:bg-slate-100 border border-border-hairline text-on-surface font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
              title="Salin Pesan Rilis untuk Dibagikan ke WhatsApp"
            >
              {copiedShare ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Pesan Disalin!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-primary" />
                  <span>Bagikan Pesan</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-text-muted text-center sm:text-left">
            Bantu bagikan kabar gembira ini ke ikhwan, akhwat, dan grup lainnya. Barokallohu fiikum! 🙏✨
          </p>

        </div>

      </div>
    </div>
  );
};
