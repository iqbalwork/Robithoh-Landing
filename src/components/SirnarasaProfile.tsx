import React, { useState } from 'react';
import { MapPin, Award, Building2, CheckCircle2 } from 'lucide-react';
import { institutionsData } from '../data/pesantrenData';

export const SirnarasaProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [selectedInstId, setSelectedInstId] = useState<string>('sirnarasa');

  const filteredInstitutions = institutionsData.filter((item) => {
    if (selectedTab === 'all') return true;
    return item.category === selectedTab;
  });

  return (
    <section id="sirnarasa" className="py-24 bg-canvas-dark relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-merah-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emas-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-xs font-bold text-emas-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>Profil Lembaga &amp; Ekosistem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pondok Pesantren <span className="crimson-gradient-text">Sirnarasa</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Pusat peradaban tasawuf, khidmat ilmiah amaliyah, dan pembinaan kesucian jiwa di bawah asuhan Guru Agung <strong className="text-emas-400 font-semibold">Pangersa Abah Aos Ra. Qs.</strong> (Silsilah TQN ke-38).
          </p>
        </div>

        {/* Featured Pesantren Profile Hero Card */}
        <div className="glass-card rounded-3xl p-8 lg:p-10 mb-12 border-emas-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-merah-600/15 via-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Logo / Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-black/40 border border-white/5">
              <div className="w-32 h-32 rounded-3xl bg-white/5 border-2 border-emas-500/40 p-3 shadow-xl flex items-center justify-center mb-4">
                <img
                  src="/assets/images/logo-sirnarasa.png"
                  alt="Logo Pesantren Sirnarasa"
                  className="max-h-full max-w-full object-contain filter drop-shadow"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-lg font-extrabold text-white">Pesantren Sirnarasa</h3>
              <p className="text-xs text-emas-400 font-medium">Ciceuri, Panjalu, Ciamis</p>
              
              <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-merah-400" />
                <span>Jawa Barat, Indonesia</span>
              </div>
            </div>

            {/* Content & History */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-merah-950/80 border border-merah-500/30 text-xs font-bold text-merah-300">
                <Award className="w-3.5 h-3.5 text-emas-400" />
                <span>Pusat Kemursyidan Silsilah 38</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Menebar Kedamaian, Menyucikan Jiwa &amp; Membangun Negeri
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Pondok Pesantren Sirnarasa didirikan dan dibimbing langsung oleh Guru Agung <strong>Syeikh Muhammad Abdul Gaos Saefulloh Maslul Ra. Qs. (Pangersa Abah Aos)</strong>, sebagai mata rantai penerus kemursyidan Thoriqoh Qodiriyyah Naqsyabandiyyah (TQN) Pondok Pesantren Suryalaya setelah wafatnya Syekh Ahmad Shohibulwafa Tajul Arifin (Pangersa Abah Anom Ra. Qs.).
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                Pesantren Sirnarasa memadukan dzikir khusyuk, sholat berjamaah awal waktu, manaqib akbar rutin, kajian kitab kuning salafus sholih, serta pendidikan tinggi modern berwawasan global.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Dzikir Jahr &amp; Khofi Terbina Silsilah Mutashil</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Penyelenggaraan Manaqib Rutin Skala Nasional &amp; Dunia</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Affiliated Ecosystem Directory Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white">Jejaring Lembaga &amp; Afiliasi Sirnarasa</h3>
            <p className="text-xs text-slate-400">Ekosistem dakwah, pendidikan, ekonomi umat, dan media</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-canvas-card p-1 rounded-xl border border-white/10 text-xs">
            {[
              { id: 'all', label: 'Semua Lembaga' },
              { id: 'spiritual', label: 'Spiritual' },
              { id: 'pendidikan', label: 'Pendidikan' },
              { id: 'pemuda', label: 'Pemuda' },
              { id: 'ekonomi', label: 'Ekonomi' },
              { id: 'media', label: 'Media' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-merah-600 to-merah-700 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstitutions.map((inst) => (
            <div
              key={inst.id}
              onClick={() => setSelectedInstId(inst.id)}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedInstId === inst.id
                  ? 'border-emas-500 shadow-gold-glow scale-[1.01]'
                  : 'hover:border-slate-600 hover:-translate-y-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 p-2 flex items-center justify-center">
                    <img
                      src={inst.logo}
                      alt={inst.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-emas-400 tracking-wider">
                    {inst.category}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">{inst.fullName}</h4>
                <p className="text-xs text-emas-400 font-semibold mb-3">{inst.tagline}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{inst.description}</p>

                {/* Highlights */}
                <div className="space-y-1.5 border-t border-white/5 pt-3">
                  {inst.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-merah-500 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Ekosistem Resmi</span>
                <span className="text-emas-400 font-bold">Sirnarasa 38</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
