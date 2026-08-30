import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, Heart, Volume2, Shield, RefreshCw, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SmartphoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dzikir' | 'tasbih' | 'manqobah' | 'quran'>('dzikir');
  const [tasbihCount, setTasbihCount] = useState(17);
  const [tasbihTarget, setTasbihTarget] = useState(33);
  const [manqobahLang, setManqobahLang] = useState<'ar' | 'id' | 'su'>('id');
  const [isTapping, setIsTapping] = useState(false);

  const handleTasbihTap = () => {
    setIsTapping(true);
    setTimeout(() => setIsTapping(false), 120);

    const nextCount = tasbihCount + 1;
    setTasbihCount(nextCount);

    if (nextCount % tasbihTarget === 0) {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#CE1126', '#FFFFFF']
      });
    }
  };

  const handleResetTasbih = () => {
    setTasbihCount(0);
  };

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] w-full select-none">
      {/* Ambient Glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-merah-600/30 via-emas-500/20 to-merah-900/30 rounded-[50px] blur-2xl opacity-70 animate-pulse-glow" />
      
      {/* Outer Phone Chassis */}
      <div className="relative rounded-[46px] p-3 bg-gradient-to-b from-[#33383F] via-[#1C1F24] to-[#121417] shadow-2xl shadow-black/80 border border-slate-600/40">
        
        {/* Antenna bands & buttons simulation */}
        <div className="absolute -left-[5px] top-28 w-[4px] h-10 bg-slate-500/80 rounded-l" />
        <div className="absolute -left-[5px] top-44 w-[4px] h-14 bg-slate-500/80 rounded-l" />
        <div className="absolute -right-[5px] top-32 w-[4px] h-16 bg-slate-500/80 rounded-r" />

        {/* Screen Frame (Inner Bezel) */}
        <div className="relative rounded-[36px] overflow-hidden bg-canvas-dark border border-slate-800 flex flex-col h-[680px] shadow-inner">
          
          {/* Dynamic Island / Speaker Notch & Status Bar */}
          <div className="pt-2 px-6 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-20">
            <span className="text-[11px] font-semibold text-slate-300">09:41</span>
            
            {/* Dynamic Island */}
            <div className="w-24 h-5 rounded-full bg-black border border-slate-800 flex items-center justify-center gap-2 px-2 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono text-emas-400 font-bold tracking-wider">TQN 38</span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
              <span>5G</span>
              <div className="w-5 h-2.5 rounded-sm border border-slate-400 p-0.5 flex items-center">
                <div className="w-full h-full bg-emerald-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Top Bar */}
          <div className="px-4 py-2.5 border-b border-white/5 bg-gradient-to-r from-merah-900/40 via-canvas-surface to-canvas-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-merah-600/30 border border-merah-500/40 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-emas-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide">ROBITHOH</h4>
                <p className="text-[9px] text-emas-400/90 font-medium">Silsilah Mursyid TQN</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-[9px] font-bold text-emas-300">
              Offline Ready
            </span>
          </div>

          {/* Screen Content Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            
            {/* Screen 1: Dzikir Jahr */}
            {activeTab === 'dzikir' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Header Banner */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-merah-900/60 to-merah-950/80 border border-merah-500/30 text-white relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-emas-500/10 rounded-full blur-xl" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emas-300">
                    Amaliyah Ba'da Sholat
                  </span>
                  <h3 className="text-sm font-bold mt-0.5">Dzikir Jahr TQN 38</h3>
                  <p className="text-[10px] text-slate-300 mt-1">
                    Lafadz pengetuk kalbu dengan menghunus kalimat tauhid.
                  </p>
                </div>

                {/* Arabic Text Card */}
                <div className="p-4 rounded-2xl bg-canvas-card border border-emas-500/20 text-center space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/5 pb-2">
                    <span className="flex items-center gap-1 text-emas-400 font-semibold">
                      <Volume2 className="w-3 h-3" /> Audio Mengalun
                    </span>
                    <span className="bg-white/5 px-2 py-0.5 rounded text-slate-300">33x Ulang</span>
                  </div>

                  <p className="font-arabic text-xl leading-loose text-white text-right py-1 dir-rtl" dir="rtl">
                    لَا إِلٰهَ إِلَّا اللهُ، لَا إِلٰهَ إِلَّا اللهُ، لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ
                  </p>

                  <div className="text-left bg-black/40 p-2.5 rounded-xl border border-white/5 text-[11px] text-slate-300">
                    <span className="text-emas-400 font-semibold block text-[10px] uppercase mb-0.5">Transliterasi:</span>
                    Lâ ilâha illallâh, Muhammadu-r-Rasûlullâh shallallâhu ‘alayhi wa sallam.
                  </div>
                </div>

                {/* Quick Prayer Time Widget */}
                <div className="p-2.5 rounded-xl bg-canvas-surface border border-slate-800 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-emas-400" />
                    <span>Jadwal Waktal / Sholat</span>
                  </div>
                  <span className="font-bold text-white bg-merah-950/60 px-2 py-0.5 rounded border border-merah-500/30 text-[10px]">
                    Ashar: 15:18 WIB
                  </span>
                </div>
              </div>
            )}

            {/* Screen 2: Tasbih Engine */}
            {activeTab === 'tasbih' && (
              <div className="space-y-3 text-center animate-fadeIn">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold text-slate-200">Interactive Tasbih</span>
                  <div className="flex gap-1">
                    {[33, 100, 165].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => {
                          setTasbihTarget(preset);
                          setTasbihCount(0);
                        }}
                        className={`text-[10px] px-2 py-0.5 rounded-md font-bold transition-all ${
                          tasbihTarget === preset
                            ? 'bg-emas-500 text-black shadow-sm'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {preset}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Big Interactive Tap Circle */}
                {(() => {
                  const currentMockupTarget = Math.max(tasbihTarget, Math.ceil(Math.max(1, tasbihCount) / tasbihTarget) * tasbihTarget);
                  const isMockupMilestone = tasbihCount > 0 && tasbihCount % tasbihTarget === 0;
                  const mockupRoundProgress = tasbihCount === 0 ? 0 : (tasbihCount % tasbihTarget === 0 ? tasbihTarget : tasbihCount % tasbihTarget);
                  const mockupProgressPercent = Math.min(100, Math.round((mockupRoundProgress / tasbihTarget) * 100));

                  return (
                    <>
                      <div
                        onClick={handleTasbihTap}
                        className={`cursor-pointer mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-merah-950 via-canvas-card to-[#200508] border-4 ${
                          isMockupMilestone ? 'border-emas-400 shadow-gold-glow' : 'border-merah-600/40 shadow-crimson-glow'
                        } flex flex-col items-center justify-center p-4 transition-all transform ${
                          isTapping ? 'scale-95 border-emas-400' : 'hover:scale-[1.02]'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                          {isMockupMilestone ? `🎉 Target ${tasbihCount}x Selesai!` : 'Ketuk Layar'}
                        </span>
                        <span className="text-4xl font-extrabold text-white my-1 font-mono tracking-tight">
                          {tasbihCount}
                        </span>
                        <span className="text-[11px] font-bold text-emas-400">
                          / Target {currentMockupTarget}x
                        </span>
                        
                        {/* Mini Progress Bar */}
                        <div className="w-24 h-1.5 bg-black/60 rounded-full mt-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-merah-500 to-emas-400 rounded-full transition-all duration-150"
                            style={{ width: `${mockupProgressPercent}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-3 pt-1">
                        <button
                          onClick={handleResetTasbih}
                          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] border border-white/5"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>Reset Hitungan</span>
                        </button>
                      </div>

                      <p className="text-[10px] text-slate-400">
                        {isMockupMilestone
                          ? `🎉 Target ${tasbihCount}x tercapai! Lanjut rotasi berikutnya.`
                          : 'Ketuk di mana saja pada lingkaran untuk menghitung.'}
                      </p>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Screen 3: Manqobah 1-56 */}
            {activeTab === 'manqobah' && (
              <div className="space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Kitab Manqobah</span>
                  <div className="flex rounded-lg bg-black/40 p-0.5 border border-white/10 text-[9px]">
                    {(['ar', 'id', 'su'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setManqobahLang(lang)}
                        className={`px-2 py-0.5 rounded-md font-bold uppercase transition-all ${
                          manqobahLang === lang ? 'bg-merah-600 text-white' : 'text-slate-400'
                        }`}
                      >
                        {lang === 'ar' ? 'Arab' : lang === 'id' ? 'Indo' : 'Sunda'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-canvas-card border border-emas-500/20 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-emas-400">
                    <span className="font-bold">Manqobah Ke-1</span>
                    <span className="bg-emas-500/10 px-1.5 py-0.5 rounded text-[9px] border border-emas-500/30">
                      Presentation Mode
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white">Nasab Syeikh Abdul Qodir Al-Jailani r.a.</h4>

                  {manqobahLang === 'ar' && (
                    <p className="font-arabic text-sm text-right leading-relaxed text-slate-200" dir="rtl">
                      فَهُوَ سَيِّدِي الشَّيْخُ عَبْدُ الْقَادِرِ الْجَيْلَانِيُّ بْنُ أَبِي صَالِحٍ جَنْكِي دَوْسَتَ...
                    </p>
                  )}

                  {manqobahLang === 'id' && (
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Menyebutkan tentang kesucian nasab keturunan Baginda Syeikh Abdul Qodir Al-Jailani r.a. dari jalur Sayyidina Hasan (Hasani) dan Sayyidina Husain (Husaini).
                    </p>
                  )}

                  {manqobahLang === 'su' && (
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Nerangkeun kamulyaan nasab katurunan Sayyid Syeikh Abdul Qodir Al-Jailani r.a. ti payun rama nyambung ka Sayyidina Hasan r.a., ti payun ibu ka Sayyidina Husain r.a.
                    </p>
                  )}
                </div>

                <div className="p-2.5 rounded-xl bg-canvas-surface border border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">Daftar Bab (1 s.d 56)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-emas-400" />
                </div>
              </div>
            )}

            {/* Screen 4: Al-Qur'an Digital */}
            {activeTab === 'quran' && (
              <div className="space-y-2.5 animate-fadeIn">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-merah-950 to-canvas-card border border-emas-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-emas-400 tracking-wider">Terakhir Dibaca</span>
                    <h4 className="text-xs font-bold text-white mt-0.5">Surah Al-Kahf (Ayat 10)</h4>
                  </div>
                  <span className="w-7 h-7 rounded-lg bg-emas-500/20 text-emas-400 flex items-center justify-center font-bold text-xs">
                    18
                  </span>
                </div>

                <div className="space-y-1.5">
                  {[
                    { num: '01', name: 'Al-Fatihah', meaning: 'Pembukaan', ayahs: 7, type: 'Makkiyah' },
                    { num: '36', name: 'Ya-Sin', meaning: 'Jantung Al-Qur\'an', ayahs: 83, type: 'Makkiyah' },
                    { num: '56', name: 'Al-Waqi\'ah', meaning: 'Hari Kiamat', ayahs: 96, type: 'Makkiyah' },
                    { num: '67', name: 'Al-Mulk', meaning: 'Kerajaan', ayahs: 30, type: 'Makkiyah' },
                  ].map((surah) => (
                    <div
                      key={surah.num}
                      className="p-2 rounded-xl bg-canvas-surface hover:bg-white/5 border border-white/5 flex items-center justify-between text-[11px] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded bg-merah-600/30 text-merah-300 text-[10px] font-bold flex items-center justify-center">
                          {surah.num}
                        </span>
                        <div>
                          <p className="font-bold text-white leading-tight">{surah.name}</p>
                          <p className="text-[9px] text-slate-400">{surah.meaning} • {surah.ayahs} Ayat</p>
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-400 bg-black/40 px-1.5 py-0.5 rounded">
                        {surah.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mini Floating Audio Player inside Phone */}
          <div className="mx-3 mb-2 p-2 rounded-xl bg-gradient-to-r from-canvas-card to-merah-950/80 border border-emas-500/30 flex items-center justify-between text-[10px] shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emas-500 text-black flex items-center justify-center font-bold">
                <Volume2 className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-white truncate max-w-[140px]">Dzikir Jahr (TQN 38)</p>
                <p className="text-[8px] text-emas-400 truncate">Pangersa Abah Aos Ra. Qs.</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[9px] font-mono text-slate-300">03:23</span>
            </div>
          </div>

          {/* Bottom App Navigation Tabs */}
          <div className="border-t border-white/5 bg-canvas-card/95 py-2 px-3 flex items-center justify-around">
            <button
              onClick={() => setActiveTab('dzikir')}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'dzikir' ? 'text-emas-400' : 'text-slate-500'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Amaliyah</span>
            </button>

            <button
              onClick={() => setActiveTab('tasbih')}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'tasbih' ? 'text-emas-400' : 'text-slate-500'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Tasbih</span>
            </button>

            <button
              onClick={() => setActiveTab('manqobah')}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'manqobah' ? 'text-emas-400' : 'text-slate-500'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Manqobah</span>
            </button>

            <button
              onClick={() => setActiveTab('quran')}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'quran' ? 'text-emas-400' : 'text-slate-500'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span className="text-[9px] font-semibold">Al-Qur'an</span>
            </button>
          </div>

          {/* Home Indicator Bar */}
          <div className="pb-1.5 flex justify-center bg-canvas-card">
            <div className="w-28 h-1 rounded-full bg-slate-600/60" />
          </div>
        </div>
      </div>
    </div>
  );
};
