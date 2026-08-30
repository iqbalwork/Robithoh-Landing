import React from 'react';
import { Phone, Mail, Heart, Code2, Clock, Smartphone } from 'lucide-react';

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
          
          {/* Col 1 & 2: Brand & Project Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-merah-600 to-merah-900 p-0.5 shadow-md flex items-center justify-center">
                <img
                  src="./assets/icons/icon.png"
                  alt="Logo Robithoh"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white">ROBITHOH</span>
                <p className="text-[10px] text-emas-400 font-semibold">Aplikasi Ibadah &amp; Amaliyah TQN</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              Aplikasi pendamping ibadah &amp; amaliyah independen bagi ikhwan/akhwat Thoriqoh Qodiriyyah Naqsyabandiyyah dan seluruh umat muslim. Memadukan arsitektur modern 100% luring (offline-first), dzikir berirama, Al-Qur'an 30 Juz, Manqobah 1–56, dan jadwal sholat presisi.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-merah-400 flex-shrink-0" />
                <span>Pengembang: Iqbal Fauzi (Robithoh Dev)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/6287822882668" target="_blank" rel="noreferrer" className="hover:text-emas-400 transition-colors">
                  +62 878-2288-2668 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:work.iqbalfauzi@gmail.com" className="hover:text-emas-400 transition-colors">
                  work.iqbalfauzi@gmail.com
                </a>
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
                <a href="#screenshots" className="hover:text-emas-400 transition-colors">Tampilan Layar</a>
              </li>
              <li>
                <a href="#tasbih" className="hover:text-emas-400 transition-colors">Tasbih Digital</a>
              </li>
              <li>
                <a href="#audio-demo" className="hover:text-emas-400 transition-colors">Audio &amp; Liturgi</a>
              </li>
              <li>
                <a href="./privacy.html" className="text-emas-400/90 hover:text-emas-300 font-semibold transition-colors flex items-center gap-1">
                  <span>Kebijakan Privasi</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Fitur Utama Aplikasi */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Fitur Aplikasi</h4>
            <ul className="space-y-2">
              <li>• Jadwal Sholat &amp; Notifikasi Adzan</li>
              <li>• Pengingat 10 Menit Pra-Sholat</li>
              <li>• Dzikir Jahr &amp; Khofi Harian</li>
              <li>• Kitab Manqobah 1–56 (3 Bahasa)</li>
              <li>• Naskah MC Manaqib (Indo/Sunda)</li>
              <li>• Tanbih &amp; Silsilah TQN 1–38</li>
              <li>• Al-Qur'an Digital 114 Surah</li>
              <li>• Audio Downloader &amp; Background Player</li>
              <li>• 100% Offline-First SQLDelight</li>
            </ul>
          </div>

          {/* Col 5: Unduhan & Repositori */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Unduh &amp; Sumber</h4>
            <p className="text-xs text-slate-300">
              Dapatkan aplikasi resmi langsung di Google Play Store.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-merah-600 to-merah-700 hover:from-merah-500 hover:to-merah-600 text-white font-bold text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-merah-400/30"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-300" />
              <span>Google Play Store</span>
            </a>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">Hubungi Pengembang:</span>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/6287822882668"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600/30 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
                  title="WhatsApp Pengembang"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:work.iqbalfauzi@gmail.com"
                  className="p-2 rounded-lg bg-white/5 hover:bg-emas-500/30 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
                  title="Email Pengembang"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>
              © {new Date().getFullYear()} <strong>Robithoh</strong>. Dikembangkan secara independen oleh Iqbal Fauzi.
            </p>
            <span className="text-slate-600">•</span>
            <a href="./privacy.html" className="text-slate-400 hover:text-emas-400 transition-colors underline underline-offset-2">
              Kebijakan Privasi
            </a>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dirancang dengan</span>
            <Heart className="w-3.5 h-3.5 text-merah-500 fill-merah-500 inline" />
            <span>untuk Umat &amp; Pengamal Dzikir TQN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
