import React from 'react';
import { Phone, Mail, ShieldCheck, Smartphone, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenDownload?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      {/* FINAL DOWNLOAD CTA BANNER (STITCH DESIGN SPEC) */}
      <section className="w-full py-16 sm:py-24 bg-surface" id="unduh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-3xl bg-primary overflow-hidden shadow-2xl shadow-primary/20 text-white p-8 sm:p-12 lg:p-16">
            {/* Ambient Gold Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-accent/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-900/60 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text CTA Left */}
              <div className="lg:col-span-7 flex flex-col gap-4 items-start text-left">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-gold-accent" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                    Aplikasi Pendamping Ibadah · 100% Bebas Iklan
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Unduh Aplikasi Robithoh Sekarang di Google Play
                </h2>

                <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
                  Jadikan smartphone Anda pendamping ibadah yang penuh berkah. Akses mushaf Kemenag 604 halaman, jadwal sholat presisi, kompas kiblat, dan amaliyah harian TQN kapan saja tanpa kuota internet.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.iqbalwork.robithoh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white hover:bg-gold-light text-on-surface px-6 py-3.5 rounded-2xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Smartphone className="w-6 h-6 text-primary" />
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-[10px] uppercase text-text-muted font-bold">Unduh Gratis di</span>
                      <span className="text-on-surface font-extrabold text-base">Google Play</span>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => alert('Versi iOS sedang dalam tahap finalisasi dan akan segera hadir (Coming Soon) di Apple App Store!')}
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-2xl border border-white/20 backdrop-blur-sm transition-all cursor-pointer group"
                  >
                    <svg className="w-6 h-6 fill-current text-white/90 group-hover:text-gold-accent transition-colors shrink-0" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.95 2.77.99.08 2.03-.5 2.68-1.27z"/>
                    </svg>
                    <div className="flex flex-col text-left leading-tight">
                      <div className="flex items-center gap-1.5">
                        <span className="text-white font-bold text-sm">App Store</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-gold-light text-amber-900 font-extrabold uppercase tracking-tight">
                          Soon
                        </span>
                      </div>
                      <span className="text-[10px] text-white/70 mt-0.5">Apple iOS</span>
                    </div>
                  </button>

                  <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white border border-white/15 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4 text-gold-accent" />
                    <span>Aman &amp; Terverifikasi Play Protect</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup Preview Right */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
                <div className="relative w-56 sm:w-64 rounded-[36px] p-2 bg-white/20 backdrop-blur-md shadow-2xl">
                  <div className="rounded-[28px] overflow-hidden bg-black aspect-[1008/2244] shadow-inner">
                    <img
                      src="./assets/screenshots/home.png"
                      alt="Robithoh Mobile App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN FOOTER NAVIGATION */}
      <footer className="w-full bg-surface-warm border-t border-border-hairline text-text-muted text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Information */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm overflow-hidden p-0.5">
                  <img
                    src="./assets/icons/icon.png"
                    alt="Robithoh Logo"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg text-on-surface tracking-wider">ROBITHOH</span>
                  <span className="bg-gold-light text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-gold-accent/30">
                    v1.2.0
                  </span>
                </div>
              </div>

              <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-md">
                Platform pendamping ibadah harian, jadwal sholat presisi, dzikir amaliyah, dan khidmah spiritual digital untuk ikhwan &amp; akhwat TQN Pondok Pesantren Suryalaya Sirnarasa.
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Bandung / Tasikmalaya, Jawa Barat</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-bold text-primary uppercase text-xs tracking-wider">
                Navigasi Cepat
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#ikhtisar" className="hover:text-primary transition-colors">
                    Ikhtisar Aplikasi
                  </a>
                </li>
                <li>
                  <a href="#fitur" className="hover:text-primary transition-colors">
                    Fitur Unggulan
                  </a>
                </li>
                <li>
                  <a href="#tampilan" className="hover:text-primary transition-colors">
                    Tampilan Layar
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="hover:text-primary transition-colors">
                    Tentang &amp; Pembimbing
                  </a>
                </li>
                <li>
                  <a href="#unduh" className="hover:text-primary transition-colors">
                    Unduh Aplikasi
                  </a>
                </li>
              </ul>
            </div>

            {/* Access & Distribution */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-bold text-primary uppercase text-xs tracking-wider">
                Distribusi &amp; Kontak
              </h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Aplikasi Robithoh dapat diunduh langsung secara gratis melalui Google Play Store untuk seluruh perangkat Android (Android 7.0 Nougat ke atas). Versi iOS sedang dalam tahap pengembangan dan segera hadir di Apple App Store.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <a
                    href="https://wa.me/6287822882668"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors font-medium"
                  >
                    +62 878-2288-2668 (WhatsApp Pengembang)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <a
                    href="mailto:work.iqbalfauzi@gmail.com"
                    className="hover:text-primary transition-colors font-medium"
                  >
                    work.iqbalfauzi@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="./privacy.html"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-red-800 transition-colors"
                >
                  <span>Lihat Kebijakan Privasi Lengkap</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} <strong>Robithoh</strong>. Dikembangkan secara independen dengan penuh khidmah untuk umat oleh Iqbal Fauzi.
            </p>
            <div className="flex items-center gap-4">
              <a href="./privacy.html" className="hover:text-on-surface transition-colors">
                Kebijakan Privasi
              </a>
              <span>·</span>
              <a href="https://wa.me/6287822882668" target="_blank" rel="noreferrer" className="hover:text-on-surface transition-colors">
                Hubungi Pengembang
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
