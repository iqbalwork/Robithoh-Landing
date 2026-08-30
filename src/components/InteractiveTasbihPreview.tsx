import React, { useState } from 'react';
import { Sparkles, RotateCcw, Volume2, VolumeX, Flame, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveTasbihPreview: React.FC = () => {
  const [count, setCount] = useState(0);
  const [basePreset, setBasePreset] = useState(33);
  const [isPressed, setIsPressed] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Dynamic calculations for continuous multi-round rotation (33 -> 66 -> 99 ...)
  const completedRounds = Math.floor(count / basePreset);
  const isAtMilestone = count > 0 && count % basePreset === 0;
  const currentTarget = Math.max(basePreset, Math.ceil(Math.max(1, count) / basePreset) * basePreset);
  
  // Progress within current round (resets each 33/100/165 cycle to show 0% -> 100%)
  const progressInCurrentRound = count === 0 ? 0 : (count % basePreset === 0 ? basePreset : count % basePreset);
  const progressPercent = Math.min(100, Math.round((progressInCurrentRound / basePreset) * 100));

  // Web Audio synth for clicking sound
  const playClickSound = (isMilestone: boolean) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = isMilestone ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(isMilestone ? 880 : 520, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (isMilestone ? 0.25 : 0.08));

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + (isMilestone ? 0.25 : 0.08));
    } catch {
      // Ignore audio synthesis errors on strict browsers
    }
  };

  const handleTap = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 100);

    const next = count + 1;
    setCount(next);

    const isMilestone = next % basePreset === 0;
    playClickSound(isMilestone);

    if (isMilestone) {
      // Celebrate each finished round (33, 66, 99...)
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#CE1126', '#FFFFFF']
      });
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section id="tasbih" className="py-24 bg-gradient-to-b from-canvas-dark via-canvas-surface to-canvas-dark relative overflow-hidden">
      {/* Dynamic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-merah-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emas-500/10 border border-emas-500/30 text-xs font-bold text-emas-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Haptic Tasbih Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Penghitung Dzikir Digital{' '}
            <span className="crimson-gradient-text">Berdaya Haptik</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Rasakan kelembutan dan kepuasan sentuhan saat melantunkan dzikir harian. Lengkap dengan target preset amaliyah Dzikir Jahr 165x.
          </p>
        </div>

        {/* Interactive Tasbih Box */}
        <div className="max-w-xl mx-auto glass-card rounded-3xl p-6 sm:p-10 text-center border-emas-500/30 shadow-2xl relative">
          
          {/* Target Presets & Sound Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
              {[
                { val: 33, label: '33x' },
                { val: 100, label: '100x' },
                { val: 165, label: '165x' },
              ].map((p) => (
                <button
                  key={p.val}
                  onClick={() => {
                    setBasePreset(p.val);
                    setCount(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    basePreset === p.val
                      ? 'bg-gradient-to-r from-merah-600 to-merah-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors ${
                soundEnabled
                  ? 'bg-emas-500/10 border-emas-500/30 text-emas-400'
                  : 'bg-white/5 border-white/5 text-slate-500'
              }`}
              title={soundEnabled ? 'Suara Aktif' : 'Suara Mati'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline font-semibold">{soundEnabled ? 'Suara ON' : 'MUTE'}</span>
            </button>
          </div>

          {/* Main Tap Counter Disk */}
          <div className="relative my-4 flex justify-center">
            {/* Pulsing ring */}
            <div
              className={`absolute -inset-4 rounded-full transition-all duration-300 blur-xl ${
                isAtMilestone
                  ? 'bg-emas-500/30 opacity-100 animate-pulse'
                  : isPressed
                  ? 'bg-merah-500/40 opacity-80'
                  : 'bg-merah-600/15 opacity-50'
              }`}
            />

            {/* Clickable Button Disk */}
            <button
              onClick={handleTap}
              className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-merah-950 via-canvas-card to-[#1d0508] border-4 ${
                isAtMilestone
                  ? 'border-emas-400 shadow-gold-glow-lg'
                  : 'border-merah-600/50 shadow-crimson-glow'
              } flex flex-col items-center justify-center p-6 cursor-pointer active:scale-95 transition-all duration-100 select-none group`}
            >
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400 group-hover:text-emas-400 transition-colors">
                {isAtMilestone ? `🎉 Target ${count}x Tercapai!` : 'Ketuk untuk Menghitung'}
              </span>

              <span className="text-6xl sm:text-7xl font-extrabold text-white my-2 font-mono tracking-tighter">
                {count}
              </span>

              <div className="flex items-center gap-1.5 text-sm font-bold text-emas-400">
                <Flame className="w-4 h-4 text-merah-400" />
                <span>Target: {currentTarget}x</span>
              </div>

              {/* Radial or circular progress bar indicator */}
              <div className="w-36 h-2 bg-black/60 rounded-full mt-4 overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-merah-500 via-emas-400 to-emas-300 rounded-full transition-all duration-150"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-around text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emas-400" />
              <span className="text-slate-300">
                Putaran Selesai: <strong className="text-white font-mono">{completedRounds}x</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-300">
                Kemajuan: <strong className="text-emas-400 font-mono">{progressPercent}%</strong>
              </span>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
