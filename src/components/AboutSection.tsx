import React from 'react';
import { ShieldCheck, Sparkles, Globe, Phone, ExternalLink, Award, MessageCircle } from 'lucide-react';

interface ProfileCard {
  name: string;
  role: string;
  category: 'mentor' | 'developer' | 'partner';
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
    role: 'Pembimbing Padepokan Talangraga · Wakil Talqin Abah Aos',
    category: 'mentor',
    badge: 'Pembimbing dan Penasihat',
    badgeColor: 'bg-gold-light/60 text-amber-900 border-gold-accent/30',
    description:
      'Pembimbing Roudhoh Padepokan Talangraga Ponpes Suryalaya Sirnarasa yang bertempat di Indihiang (Tasikmalaya), sekaligus Wakil Talqin Pangersa Abah Aos. Beliau senantiasa memberikan arahan, restu, dan bimbingan amaliyah agar seluruh kaifiyat dzikir dalam aplikasi Robithoh senantiasa terjaga kemurniannya dan muttashil dengan tuntunan Guru Mursyid.',
    highlights: [
      'Pembimbing Roudhoh Padepokan Talangraga (Indihiang)',
      'Wakil Talqin Pangersa Abah Aos (Silsilah Ke-38)',
      'Pengayom & Penasihat Amaliyah Thoriqoh'
    ],
    avatarText: 'EG'
  },
  {
    name: 'Dr. Eko Yulianto',
    role: 'Wakil Talqin Pangersa Abah Aos',
    category: 'mentor',
    badge: 'Pembimbing dan Penasihat',
    badgeColor: 'bg-gold-light/60 text-amber-900 border-gold-accent/30',
    description:
      'Wakil Talqin Pangersa Abah Aos yang juga merupakan bagian dari didikan Eyang Epi Ruhiat Ganefi di Padepokan Talangraga Indihiang. Beliau bertindak sebagai pembimbing dan penasihat yang memverifikasi keaslian naskah Kitab Manaqib 1–56, teks sanad Tawassul Silsilah, susunan MC Manaqib, serta rujukan liturgi amaliyah dalam aplikasi Robithoh.',
    highlights: [
      'Bagian dari Didikan Eyang Epi Ruhiat Ganefi',
      'Wakil Talqin Pangersa Abah Aos (Silsilah Ke-38)',
      'Verifikasi Sanad & Liturgi Kitab Manaqib'
    ],
    avatarText: 'EY'
  },
  {
    name: 'Acep Deden Praja Tasman',
    role: 'Presiden Siswatama IAISM · Admin Kalam Mursyid',
    category: 'partner',
    badge: 'Kolaborasi & Kemitraan Media',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    description:
      'Presiden Siswatama IAISM (Institut Agama Islam Saefulloh Maslul) dan Admin Channel Kalam Mursyid, serta penulis naskah cetakan terbaru Amaliyah Mursyid yang telah melewati proses verifikasi dan validasi langsung oleh Pangersa Abah Aos. Channel Kalam Mursyid menjadi mitra kolaborasi bersama Tim Pengembang Aplikasi Robithoh.',
    highlights: [
      'Presiden Siswatama IAISM',
      'Admin Channel Kalam Mursyid',
      'Penulis Naskah Cetakan Terbaru Amaliyah Mursyid (Tervalidasi Abah Aos)',
      'Media Kolaborasi & Partnership Robithoh'
    ],
    link: 'https://whatsapp.com/channel/0029VaxXzTVGehEOn9g0fs0S',
    linkText: 'Join Channel Kalam Mursyid',
    avatarText: 'AD'
  },
  {
    name: 'Iqbal Fauzi',
    role: 'Creator & Lead Software Engineer',
    category: 'developer',
    badge: 'Pengembang Aplikasi',
    badgeColor: 'bg-red-soft/70 text-primary border-primary/20',
    description:
      'Software engineer yang juga merupakan bagian dari didikan Eyang Epi Ruhiat Ganefi di Padepokan Talangraga Indihiang. Merancang arsitektur, mengembangkan, dan memelihara aplikasi Robithoh secara multiplatform (Kotlin Multiplatform & Compose Multiplatform) sebagai dedikasi teknologi untuk kemaslahatan ikhwan dan akhwat.',
    highlights: [
      'Bagian dari Didikan Eyang Epi Ruhiat Ganefi',
      'Kotlin Multiplatform & Mobile Specialist',
      'Arsitek 100% Offline-First Engine Robithoh'
    ],
    link: 'https://iqbalwork.github.io/',
    linkText: 'Portfolio: iqbalwork.github.io',
    avatarText: 'IF'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-red-50/50 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-light/60 border border-gold-accent/30 text-xs font-bold text-amber-900">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span>Dedikasi Khidmat &amp; Bimbingan Sanad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Tentang <span className="text-primary">Robithoh</span>,{' '}
            <span className="text-gold-accent">Guru Mursyid</span> &amp; Pembimbing
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            Aplikasi Robithoh dihadirkan sebagai wujud khidmat dan mahabbah kepada Pangersa Guru Mursyid, dibangun di bawah bimbingan Roudhoh Padepokan Talangraga Indihiang serta para Wakil Talqin guna menjaga keaslian sanad dan kemurnian amaliyah Madrasah Thoriqoh Qodiriyyah Naqsyabandiyyah Suryalaya Sirnarasa PPKN III.
          </p>
        </div>

        {/* SPOTLIGHT TRIBUTE TO GURU MURSYID ABAH AOS */}
        <div className="mb-16 relative group">
          <div className="relative rounded-[28px] bg-gradient-to-b from-white to-surface-warm border border-border-hairline p-6 sm:p-10 shadow-sm overflow-hidden">
            {/* Corner Decorative Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-light/30 via-transparent to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Photo Column */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative">
                  <div className="w-56 sm:w-64 aspect-[4/5] rounded-3xl p-1.5 bg-gradient-to-b from-gold-accent via-primary to-gold-accent shadow-md overflow-hidden">
                    <img
                      src="./assets/images/abah_aos.jpg"
                      alt="Pangersa Guru Mursyid Syaikh Muhammad Abdul Gaos Saefulloh Maslul Ra. Qs."
                      className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-white border border-gold-accent/40 text-amber-900 text-[11px] font-extrabold shadow-md flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-gold-accent" />
                    <span>Mursyid Silsilah Ke-38</span>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <a
                    href="https://www.instagram.com/abahaos38/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface hover:bg-surface-warm border border-border-hairline hover:border-gold-accent/40 text-xs font-semibold text-text-muted hover:text-on-surface transition-all group/ig"
                  >
                    <svg className="w-3.5 h-3.5 fill-pink-500 group-hover/ig:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>@abahaos38</span>
                    <ExternalLink className="w-3 h-3 text-text-muted" />
                  </a>
                </div>
              </div>

              {/* Text & Tribute Column */}
              <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-soft text-xs font-bold text-primary border border-primary/20">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span>Penghormatan Khusus</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-on-surface leading-tight">
                    Syaikh Muhammad Abdul Gaos Saefulloh Maslul Ra. Qs.
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-primary mt-1">
                    Pangersa Abah Aos
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border-hairline text-slate-700 text-sm sm:text-base leading-relaxed italic space-y-3 shadow-xs">
                  <p>
                    &ldquo;Rasa syukur dan terima kasih tak terhingga kami haturkan kepada Pangersa Guru Agung atas limpahan karomah, doa, restu, dan bimbingan ruhani yang senantiasa menaungi para murid.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-text-muted not-italic font-normal">
                    Aplikasi <strong>Robithoh</strong> ini didedikasikan secara tulus sebagai washilah kemudahan mengamalkan Dzikir, Kitab Manaqib, dan seluruh Amaliyah Madrasah Thoriqoh Qodiriyyah Naqsyabandiyyah Suryalaya Sirnarasa PPKN III bagi ikhwan dan akhwat di seluruh penjuru dunia.
                  </p>
                </div>

                {/* Verifikasi & Koordinasi Langsung via Usluk */}
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 text-left shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-gold-light text-amber-900 border border-gold-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-on-surface">
                        Verifikasi &amp; Koordinasi Langsung Guru Mursyid
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-gold-light text-amber-900 text-[10px] font-extrabold uppercase tracking-wider border border-gold-accent/30">
                        Terverifikasi Langsung
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      Aplikasi ini bekerja sama langsung dengan asisten pribadi Pangersa Abah yaitu <strong className="text-on-surface font-semibold">Usluk</strong> untuk verifikasi dan koordinasi langsung dengan Pangersa Abah.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mentors & Developer Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 relative overflow-hidden border border-border-hairline hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-xs hover:-translate-y-1"
            >
              <div className="space-y-4 relative z-10">
                
                {/* Avatar & Badges Header */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-base tracking-wider ${
                      profile.category === 'developer'
                        ? 'bg-red-soft text-primary'
                        : profile.category === 'partner'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-gold-light text-amber-900'
                    }`}
                  >
                    <span>{profile.avatarText}</span>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border ${profile.badgeColor}`}>
                    {profile.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-lg font-extrabold text-on-surface group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary mt-1">
                    {profile.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  {profile.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {profile.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer (Link for Partner / Developer) */}
              {profile.link && (
                <div className="pt-4 mt-4 border-t border-slate-100 relative z-10 flex items-center justify-between text-xs text-text-muted">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`${
                      profile.category === 'partner'
                        ? 'text-emerald-700 hover:text-emerald-900'
                        : 'text-primary hover:text-red-800'
                    } font-bold flex items-center gap-1.5 transition-colors underline underline-offset-4 text-xs`}
                  >
                    {profile.category === 'partner' ? (
                      <MessageCircle className="w-3.5 h-3.5" />
                    ) : (
                      <Globe className="w-3.5 h-3.5" />
                    )}
                    <span>{profile.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom Banner of Feedback & Communication */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-surface-warm border border-border-hairline text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-on-surface">
              Punya Saran, Koreksi Teks, atau Masukan?
            </h4>
            <p className="text-xs sm:text-sm text-text-muted max-w-2xl">
              Kami senantiasa membuka ruang komunikasi untuk koreksi penulisan lafadz, tajwid, maupun masukan fungsional demi kesempurnaan aplikasi Robithoh.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/6287822882668"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
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
