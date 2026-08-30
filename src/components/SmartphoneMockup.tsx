import React, { useState } from 'react';
import { Sparkles, Compass, Clock, BookOpen, Layers } from 'lucide-react';

interface ScreenTab {
  id: string;
  label: string;
  imageSrc: string;
  badge: string;
  icon: React.ReactNode;
}

const screenTabs: ScreenTab[] = [
  {
    id: 'home',
    label: 'Beranda',
    imageSrc: './assets/screenshots/home.png',
    badge: 'Dashboard',
    icon: <Sparkles className="w-3.5 h-3.5" />
  },
  {
    id: 'sholat',
    label: 'Sholat',
    imageSrc: './assets/screenshots/sholat.png',
    badge: 'Jadwal Adzan',
    icon: <Clock className="w-3.5 h-3.5" />
  },
  {
    id: 'kiblat',
    label: 'Kiblat',
    imageSrc: './assets/screenshots/kiblat.png',
    badge: 'Kompas GPS',
    icon: <Compass className="w-3.5 h-3.5" />
  },
  {
    id: 'quran',
    label: 'Quran',
    imageSrc: './assets/screenshots/quran.png',
    badge: '114 Surah',
    icon: <BookOpen className="w-3.5 h-3.5" />
  },
  {
    id: 'tasbih',
    label: 'Tasbih',
    imageSrc: './assets/screenshots/tasbih.png',
    badge: '165x Haptik',
    icon: <Layers className="w-3.5 h-3.5" />
  }
];

export const SmartphoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const currentTab = screenTabs.find((t) => t.id === activeTab) || screenTabs[0];

  return (
    <div className="relative mx-auto max-w-[290px] sm:max-w-[310px] w-full select-none flex flex-col items-center">
      {/* Ambient Glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-merah-600/30 via-emas-500/20 to-merah-900/30 rounded-[50px] blur-2xl opacity-70 animate-pulse-glow pointer-events-none" />
      
      {/* Outer Phone Chassis */}
      <div className="relative w-full rounded-[42px] p-2.5 bg-gradient-to-b from-[#383D45] via-[#1E2126] to-[#121417] shadow-2xl shadow-black/90 border border-slate-600/40">
        
        {/* Antenna bands & buttons simulation */}
        <div className="absolute -left-[5px] top-28 w-[4px] h-10 bg-slate-500/80 rounded-l" />
        <div className="absolute -left-[5px] top-44 w-[4px] h-14 bg-slate-500/80 rounded-l" />
        <div className="absolute -right-[5px] top-32 w-[4px] h-16 bg-slate-500/80 rounded-r" />

        {/* Screen Frame (Inner Bezel with exact 460/1024 screenshot aspect ratio) */}
        <div className="relative rounded-[32px] overflow-hidden bg-black border border-slate-800 shadow-inner w-full aspect-[460/1024]">
          {/* Active Screenshot Full Display */}
          <img
            key={currentTab.id}
            src={currentTab.imageSrc}
            alt={currentTab.label}
            className="w-full h-full object-cover animate-fadeIn transition-opacity duration-200"
          />

          {/* Subtle Screen Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Screen Switcher Bar below Phone */}
      <div className="mt-4 p-1.5 bg-canvas-card/90 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center gap-1 shadow-xl z-20 flex-wrap sm:flex-nowrap">
        {screenTabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-1.5 px-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-merah-600 to-merah-700 text-white shadow-md shadow-merah-600/40 scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <span className={isActive ? 'text-emas-300' : 'text-slate-400'}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
