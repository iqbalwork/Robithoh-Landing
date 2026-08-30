import React from 'react';
import { ShieldCheck, Sparkles, Globe, Phone, ExternalLink, Award } from 'lucide-react';

interface ProfileCard {
  name: string;
  role: string;
  category: 'mentor' | 'developer';
  badge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
  link?: string;
  linkText?: string;
  avatarText: string;
}

const profiles: ProfileCard[] = [
  {
    name: 'Eyang Epi Ruhiat Ganefi',
    role: 'Wakil Talqin Pangersa Abah Aos',
    category: 'mentor',
    badge: 'Pembimbing dan Penasihat',
    badgeColor: 'bg-emas-500/10 text-emas-400 border-emas-500/30',
    description:
      'Sesepuh serta pembimbing dan penasihat yang senantiasa memberikan arahan, restu, dan bimbingan amaliyah agar seluruh kaifiyat dzikir dalam aplikasi Robithoh senantiasa terjaga kemurniannya dan muttashil dengan tuntunan Guru Mursyid.',
    highlights: [
      'Wakil Talqin TQN Pangersa Abah Aos',
      'Pembimbing Kaifiyat & Adab Dzikir TQN',
      'Pengayom & Penasihat Amaliyah'
    ],
    avatarText: 'EG'
  },
  {
    name: 'Dr. Eko Yulianto',
    role: 'Wakil Talqin Pangersa Abah Aos',
    category: 'mentor',
    badge: 'Pembimbing dan Penasihat',
    badgeColor: 'bg-emas-500/10 text-emas-400 border-emas-500/30',
    description:
      'Pembimbing dan penasihat yang memverifikasi keaslian naskah Kitab Manaqib 1–56, teks sanad Tawassul Silsilah, susunan MC Manaqib, serta rujukan liturgi amaliyah dalam aplikasi Robithoh.',
    highlights: [
      'Wakil Talqin TQN Pangersa Abah Aos',
      'Verifikasi Sanad & Kitab Amaliyah',
      'Penasihat Konsep & Khidmat Ilmiah'
    ],
    avatarText: 'EY'
  },
  {
    name: 'Iqbal Fauzi',
    role: 'Creator & Lead Software Engineer',
    category: 'developer',
    badge: 'Pengembang Aplikasi',
    badgeColor: 'bg-merah-500/10 text-merah-400 border-merah-500/30',
    description:
      'Software engineer independen yang merancang arsitektur, mengembangkan, dan memelihara aplikasi Robithoh secara multiplatform (Kotlin Multiplatform & Compose Multiplatform) sebagai dedikasi teknologi untuk kemaslahatan umat.',
    highlights: [
      'Kotlin Multiplatform & Mobile Specialist',
      'Arsitek 100% Offline-First Engine',
      'Pemelihara & Pengembang Mandiri'
    ],
    link: 'https://iqbalwork.github.io/',
    linkText: 'Portfolio: iqbalwork.github.io',
    avatarText: 'IF'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-canvas-dark/95 relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-merah-950/25 via-emas-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emas-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-xs font-bold text-emas-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedikasi Khidmat &amp; Bimbingan Sanad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tentang <span className="crimson-gradient-text">Robithoh</span>,{' '}
            <span className="gold-gradient-text">Guru Mursyid</span> &amp; Pembimbing
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Aplikasi Robithoh dihadirkan sebagai wujud khidmat dan mahabbah kepada Pangersa Guru Mursyid, dibangun dengan bimbingan dan nasihat para Wakil Talqin guna menjaga keaslian sanad serta kemurnian amaliyah Thoriqoh Qodiriyyah Naqsyabandiyyah.
          </p>
        </div>

        {/* SPOTLIGHT TRIBUTE TO GURU MURSYID ABAH AOS */}
        <div className="mb-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emas-500/40 via-merah-600/40 to-emas-500/40 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="relative rounded-[28px] bg-gradient-to-b from-canvas-card via-[#1A1D22] to-canvas-dark border-2 border-emas-500/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Islamic motif subtle background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emas-500/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Photo Column */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative">
                  <div className="w-56 sm:w-64 aspect-[4/5] rounded-3xl p-1.5 bg-gradient-to-b from-emas-400 via-merah-600 to-emas-600 shadow-2xl shadow-emas-500/20 overflow-hidden">
                    <img
                      src="./assets/images/abah_aos.jpg"
                      alt="Pangersa Guru Mursyid Syaikh Muhammad Abdul Gaos Saefulloh Maslul Ra. Qs."
                      className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-merah-950 border border-emas-500/60 text-emas-300 text-[11px] font-extrabold shadow-lg flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emas-400" />
                    <span>Mursyid Ke-38 TQN</span>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <a
                    href="https://www.instagram.com/abahaos38/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emas-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-all group/ig"
                  >
                    <svg className="w-3.5 h-3.5 fill-pink-400 group-hover/ig:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>@abahaos38</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Text & Tribute Column */}
              <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-merah-500/10 border border-merah-500/30 text-xs font-bold text-merah-400">
                  <Award className="w-3.5 h-3.5 text-merah-400" />
                  <span>Penghormatan Khusus</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Syaikh Muhammad Abdul Gaos Saefulloh Maslul Ra. Qs.
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-emas-400 mt-1">
                    Pangersa Abah Aos — Guru Mursyid Thoriqoh Qodiriyyah Naqsyabandiyyah Silsilah Ke-38
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-emas-500/20 text-slate-200 text-sm sm:text-base leading-relaxed italic space-y-3">
                  <p>
                    &ldquo;Rasa syukur dan terima kasih tak terhingga kami haturkan kepada Pangersa Guru Mursyid Syaikh Muhammad Abdul Gaos Saefulloh Maslul Ra. Qs. (Abah Aos) atas limpahan karomah, doa, restu, dan bimbingan ruhani yang senantiasa menaungi para murid.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 not-italic font-normal">
                    Aplikasi <strong>Robithoh</strong> ini didedikasikan secara tulus sebagai washilah kemudahan mengamalkan Dzikir, Kitab Manaqib, dan seluruh Amaliyah TQN bagi ikhwan, akhwat, serta umat Islam di seluruh penjuru dunia.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mentors & Developer Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 relative overflow-hidden border-white/10 hover:border-emas-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Corner Subtle Gradient */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none ${
                  profile.category === 'developer'
                    ? 'bg-gradient-to-bl from-merah-600/15 to-transparent'
                    : 'bg-gradient-to-bl from-emas-500/15 to-transparent'
                }`}
              />

              <div className="space-y-5 relative z-10">
                
                {/* Avatar & Badges Header */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`w-14 h-14 rounded-2xl p-0.5 shadow-lg flex items-center justify-center font-extrabold text-lg tracking-wider ${
                      profile.category === 'developer'
                        ? 'bg-gradient-to-br from-merah-600 to-merah-900 text-white'
                        : 'bg-gradient-to-br from-emas-500 to-amber-800 text-canvas-dark'
                    }`}
                  >
                    <div className="w-full h-full rounded-[14px] bg-canvas-card flex items-center justify-center">
                      <span className={profile.category === 'developer' ? 'text-merah-400 font-bold' : 'text-emas-400 font-bold'}>
                        {profile.avatarText}
                      </span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${profile.badgeColor}`}>
                    {profile.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-emas-300 transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-semibold text-emas-400 mt-1">
                    {profile.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {profile.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {profile.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer (Link for Developer) */}
              {profile.link && (
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex items-center justify-between text-xs text-slate-400">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emas-400 hover:text-emas-300 font-bold flex items-center gap-1.5 transition-colors underline underline-offset-4"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{profile.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom Banner of Feedback & Communication */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-merah-950/60 via-canvas-card to-canvas-card border border-emas-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-white">
              Punya Saran, Koreksi Teks, atau Masukan?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Kami senantiasa membuka ruang komunikasi untuk koreksi penulisan lafadz, tajwid, maupun masukan fungsional demi kesempurnaan aplikasi Robithoh.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/6287822882668"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-merah-600 to-merah-700 hover:from-merah-500 hover:to-merah-600 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 border border-merah-400/30"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hubungi Pengembang</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
