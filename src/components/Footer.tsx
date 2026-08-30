import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  return (
    <footer className="bg-canvas-dark border-t border-emas-500/20 text-slate-400 text-xs relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emas-500 to-merah-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Secretariat */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-merah-600 to-merah-900 p-0.5 shadow-md flex items-center justify-center">
                <img
                  src="/assets/icons/icon.png"
                  alt="Logo Robithoh"
                  className="w-full h-full object-cover rounded-[10px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white">ROBITHOH</span>
                <p className="text-[10px] text-emas-400 font-semibold">TQN 38 Pondok Pesantren Sirnarasa</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              Aplikasi ibadah &amp; amaliyah resmi bagi ikhwan/akhwat Thoriqoh Qodiriyyah Naqsyabandiyyah Silsilah 38 dan masyarakat muslim umum. Memadukan teknologi modern, kehandalan 95% luring, dan kemuliaan bimbingan Guru Mursyid Pangersa Abah Aos Ra. Qs.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-merah-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Sirnarasa No. 1, Dusun Ciceuri, Desa Ciakar, Kec. Panjalu, Kabupaten Ciamis, Jawa Barat 46264</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emas-400 flex-shrink-0" />
                <span>+62 811-111-7890 (Sekretariat Pusat)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>sekretariat@sirnarasa.id</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Navigasi Portal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#fitur" className="hover:text-emas-400 transition-colors">Fitur Unggulan</a>
              </li>
              <li>
                <a href="#tasbih" className="hover:text-emas-400 transition-colors">Tasbih Haptik</a>
              </li>
              <li>
                <a href="#audio-demo" className="hover:text-emas-400 transition-colors">Audio &amp; Liturgi 3 Bahasa</a>
              </li>
              <li>
                <a href="#sirnarasa" className="hover:text-emas-400 transition-colors">Profil Pesantren Sirnarasa</a>
              </li>
              <li>
                <a href="#infaq" className="hover:text-emas-400 transition-colors">Kanal Infaq &amp; Wakaf</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Fitur Utama Aplikasi */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Fitur Aplikasi</h4>
            <ul className="space-y-2">
              <li>• Dzikir Jahr &amp; Khofi Harian</li>
              <li>• Kitab Manqobah 1–56 (3 Bahasa)</li>
              <li>• Naskah MC Manaqib (Indo/Sunda)</li>
              <li>• Tanbih &amp; Silsilah TQN 1–38</li>
              <li>• Al-Qur'an Digital 114 Surah</li>
              <li>• Background Audio Player</li>
              <li>• 95% Offline-First SQLDelight</li>
            </ul>
          </div>

          {/* Col 5: Unduhan & Media Sosial */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Unduh Aplikasi</h4>
            <p className="text-xs text-slate-300">
              Dapatkan installer versi terbaru secara cuma-cuma dan bebas iklan.
            </p>
            <button
              onClick={onOpenDownload}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-merah-600 to-merah-700 text-white font-bold text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-merah-400/30"
            >
              <span>Download APK v1.0.0</span>
            </button>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">Media Sosial Resmi:</span>
              <div className="flex gap-2">
                <a
                  href="https://www.youtube.com/@SirnarasaOfficial"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-merah-600/30 hover:text-white border border-white/10 transition-colors"
                  title="YouTube Sirnarasa Official"
                >
                  YouTube
                </a>
                <a
                  href="https://www.instagram.com/sirnarasa"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-emas-500/30 hover:text-white border border-white/10 transition-colors"
                  title="Instagram Sirnarasa"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong>Robithoh</strong>. Khidmat Ilmiah Amaliyah Pondok Pesantren Sirnarasa Ciamis Jawa Barat.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dirancang dengan</span>
            <Heart className="w-3.5 h-3.5 text-merah-500 fill-merah-500 inline" />
            <span>untuk Ummat &amp; Ikhwan TQN 38</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
