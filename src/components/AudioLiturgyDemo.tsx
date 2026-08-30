import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  SkipForward,
  SkipBack,
  Copy,
  Check,
  Globe,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Music,
  Headphones
} from 'lucide-react';
import { liturgySamples } from '../data/liturgyData';
import { Language } from '../types';

interface AudioLiturgyDemoProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export const AudioLiturgyDemo: React.FC<AudioLiturgyDemoProps> = ({ onPlayStateChange }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLang, setActiveLang] = useState<Language>('ar');
  const [showTransliteration] = useState(true);
  const [fontSizeOffset, setFontSizeOffset] = useState(0); // -1, 0, 1, 2
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSample = liturgySamples[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.loop = isLooping;
    }
  }, [volume, isMuted, isLooping]);

  useEffect(() => {
    onPlayStateChange?.(isPlaying);
  }, [isPlaying, onPlayStateChange]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Audio play prevented by browser policy:', e);
        setIsPlaying(false);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (!duration && audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % liturgySamples.length;
    setCurrentTrackIndex(nextIdx);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handlePrevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + liturgySamples.length) % liturgySamples.length;
    setCurrentTrackIndex(prevIdx);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCopyText = () => {
    let textToCopy = currentSample.arabicText;
    if (activeLang === 'id') {
      textToCopy = `${currentSample.arabicText}\n\nTerjemahan:\n${currentSample.indonesianText}`;
    } else if (activeLang === 'su') {
      textToCopy = `${currentSample.arabicText}\n\nTarjamah Sunda:\n${currentSample.sundaneseText}`;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="audio-demo" className="py-24 bg-canvas-dark/95 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-merah-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emas-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-merah-950/60 border border-merah-500/30 text-xs font-bold text-merah-400">
            <Headphones className="w-3.5 h-3.5" />
            <span>Interactive Web Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pemutar Audio &amp;{' '}
            <span className="gold-gradient-text">Liturgi Tiga Bahasa</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Dengarkan lantunan dzikir berirama langsung di browser dan telusuri bacaan suci dalam Bahasa Arab, Terjemahan Indonesia, dan Basa Sunda halus.
          </p>
        </div>

        {/* Audio Player & Liturgy Reader Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Custom Audio Player Deck */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden border-emas-500/30 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            {/* Hidden native audio element */}
            <audio
              ref={audioRef}
              src={currentSample.audioSrc}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => {
                if (!isLooping) {
                  handleNextTrack();
                }
              }}
            />

            {/* Track Info Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-merah-600 to-merah-900 flex items-center justify-center text-white shadow-lg ${isPlaying ? 'animate-pulse' : ''}`}>
                  <Music className="w-6 h-6 text-emas-300" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emas-400">
                    {currentSample.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {currentSample.title}
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                Track {currentTrackIndex + 1}/{liturgySamples.length}
              </span>
            </div>

            {/* Animated Audio Waveform Visualizer Simulation */}
            <div className="h-20 bg-black/40 rounded-2xl p-4 flex items-end justify-center gap-1.5 border border-white/5 overflow-hidden">
              {[18, 35, 60, 85, 45, 70, 95, 40, 65, 80, 50, 90, 30, 75, 45, 60, 85, 30, 70, 95, 40, 65, 80, 35, 55, 75, 40, 60].map((height, i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-150 ${
                    isPlaying
                      ? 'bg-gradient-to-t from-merah-600 to-emas-400'
                      : 'bg-slate-700/60'
                  }`}
                  style={{
                    height: isPlaying
                      ? `${Math.max(12, Math.sin((currentTime * 3) + i) * 35 + height * 0.6)}%`
                      : '15%'
                  }}
                />
              ))}
            </div>

            {/* Seek Bar & Timers */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emas-400"
              />
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Primary Audio Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`p-2.5 rounded-xl border transition-colors ${
                  isLooping
                    ? 'bg-emas-500/20 text-emas-400 border-emas-500/40'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
                }`}
                title={isLooping ? 'Looping Aktif' : 'Ulangi Lagu'}
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevTrack}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5 transition-colors"
                  title="Track Sebelumnya"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-merah-500 via-merah-600 to-merah-800 text-white flex items-center justify-center shadow-xl shadow-merah-600/40 hover:scale-105 active:scale-95 transition-all border border-merah-400/40"
                  title={isPlaying ? 'Jeda' : 'Putar Audio'}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </button>

                <button
                  onClick={handleNextTrack}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5 transition-colors"
                  title="Track Berikutnya"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors"
                title={isMuted ? 'Batal Bisukan' : 'Bisukan'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-merah-400" /> : <Volume2 className="w-4 h-4 text-emas-400" />}
              </button>
            </div>

            {/* Playlist Track Selection List */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Daftar Audio Amaliyah
              </span>
              <div className="space-y-1.5 max-h-64 overflow-y-auto scrollbar-thin pr-1">
                {liturgySamples.map((sample, idx) => (
                  <button
                    key={sample.id}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      setCurrentTime(0);
                      setIsPlaying(true);
                      setTimeout(() => {
                        audioRef.current?.play().catch(console.warn);
                      }, 50);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between text-xs transition-all ${
                      currentTrackIndex === idx
                        ? 'bg-gradient-to-r from-merah-950/80 to-canvas-card border border-emas-500/40 text-white font-bold'
                        : 'bg-black/20 hover:bg-white/5 border border-transparent text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="w-5 text-center font-mono text-[10px] text-emas-400">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate">{sample.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">
                      {sample.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3-Language Liturgy Reader */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden border-emas-500/30 shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-merah-600/10 via-emas-500/5 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="space-y-6">
              {/* Header & Controls Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                
                {/* 3-Language Selector Tabs */}
                <div className="flex rounded-xl bg-black/50 p-1 border border-white/10 shadow-inner">
                  <button
                    onClick={() => setActiveLang('ar')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeLang === 'ar'
                        ? 'bg-gradient-to-r from-merah-600 to-merah-700 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    العربية (Arab)
                  </button>
                  <button
                    onClick={() => setActiveLang('id')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeLang === 'id'
                        ? 'bg-gradient-to-r from-merah-600 to-merah-700 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Indonesia
                  </button>
                  <button
                    onClick={() => setActiveLang('su')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeLang === 'su'
                        ? 'bg-gradient-to-r from-merah-600 to-merah-700 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Basa Sunda
                  </button>
                </div>

                {/* Font Scaling & Copy Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-xl bg-black/40 border border-white/10 p-1">
                    <button
                      onClick={() => setFontSizeOffset(Math.max(-1, fontSizeOffset - 1))}
                      className="p-1 text-slate-400 hover:text-white text-xs font-bold"
                      title="Perkecil Teks"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 text-[10px] font-mono text-emas-400">
                      {fontSizeOffset === 0 ? 'Normal' : fontSizeOffset > 0 ? `+${fontSizeOffset}` : fontSizeOffset}
                    </span>
                    <button
                      onClick={() => setFontSizeOffset(Math.min(2, fontSizeOffset + 1))}
                      className="p-1 text-slate-400 hover:text-white text-xs font-bold"
                      title="Perbesar Teks"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleCopyText}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-emas-400" />
                        <span>Salin Teks</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Liturgy Title & Explanation */}
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{currentSample.title}</span>
                  <Sparkles className="w-4 h-4 text-emas-400" />
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {currentSample.description}
                </p>
              </div>

              {/* Main Arabic Text Box */}
              <div className="p-6 rounded-2xl bg-black/40 border border-emas-500/20 relative shadow-inner">
                <div className="text-right font-arabic leading-loose text-white" dir="rtl">
                  <p
                    className={`transition-all duration-200 ${
                      fontSizeOffset === -1
                        ? 'text-lg'
                        : fontSizeOffset === 1
                        ? 'text-2xl sm:text-3xl'
                        : fontSizeOffset === 2
                        ? 'text-3xl sm:text-4xl'
                        : 'text-xl sm:text-2xl'
                    }`}
                  >
                    {currentSample.arabicText}
                  </p>
                </div>
              </div>

              {/* Transliteration & Translations */}
              <div className="space-y-3">
                {showTransliteration && (
                  <div className="p-4 rounded-xl bg-canvas-surface/60 border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-emas-400 tracking-wider block mb-1">
                      Transliterasi Latin
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                      "{currentSample.transliteration}"
                    </p>
                  </div>
                )}

                {activeLang === 'id' && (
                  <div className="p-4 rounded-xl bg-merah-950/40 border border-merah-500/20">
                    <span className="text-[10px] uppercase font-bold text-merah-300 tracking-wider block mb-1">
                      Terjemahan Bahasa Indonesia
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {currentSample.indonesianText}
                    </p>
                  </div>
                )}

                {activeLang === 'su' && (
                  <div className="p-4 rounded-xl bg-emas-950/40 border border-emas-500/20">
                    <span className="text-[10px] uppercase font-bold text-emas-300 tracking-wider block mb-1">
                      Tarjamah Basa Sunda Halus
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {currentSample.sundaneseText}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Notice */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emas-400" />
                <span>Tersedia luring di aplikasi mobile Robithoh</span>
              </span>
              <span className="text-emas-400 font-bold">100% Offline</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
