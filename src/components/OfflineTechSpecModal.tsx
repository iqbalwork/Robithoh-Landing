import React from 'react';
import { X, Database, Cpu, ShieldCheck, Layers, Terminal } from 'lucide-react';

interface OfflineTechSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineTechSpecModal: React.FC<OfflineTechSpecModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white border border-border-hairline rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-on-surface transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md">
            <Cpu className="w-6 h-6 text-gold-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-on-surface">Spesifikasi Arsitektur 100% Offline-First</h3>
            <p className="text-xs text-text-muted">Kotlin Multiplatform 2.4 • Compose Multiplatform 1.11 • SQLDelight • Adhan 2 KMP</p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-700">
          
          {/* Section 1: Overview */}
          <div className="p-4 rounded-2xl bg-surface-warm border border-border-hairline space-y-2 shadow-xs">
            <h4 className="font-bold text-primary flex items-center gap-2">
              <Database className="w-4 h-4 text-gold-accent" /> Filosofi Offline-First &amp; Zero Latency
            </h4>
            <p className="leading-relaxed text-text-muted">
              Aplikasi Robithoh dibangun dengan prinsip bahwa kebutuhan ibadah tidak boleh terhalang oleh ketiadaan kuota atau hilangnya sinyal di dalam masjid dan majlis zikir. Seluruh teks amaliyah (56 Bab Manqobah, 114 Surah Al-Qur'an, Wirid Harian, Tanbih, Silsilah 1-38, Jadwal Sholat Kemenag, dan audio inti) tersimpan secara luring dalam SQLite lokal perangkat.
            </p>
          </div>

          {/* Section 2: Tech Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-warm border border-border-hairline space-y-2 shadow-xs">
              <h5 className="font-bold text-on-surface flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" /> Database &amp; Data Layer
              </h5>
              <ul className="space-y-1 text-xs text-slate-600">
                <li>• <strong>SQLDelight:</strong> Schema type-safe SQLite terkompilasi ke Kotlin.</li>
                <li>• <strong>Android:</strong> <code>AndroidSqliteDriver</code> dengan SQLite native.</li>
                <li>• <strong>iOS:</strong> <code>NativeSqliteDriver</code> berbasis SQLite3 Darwin.</li>
                <li>• <strong>Adhan Engine:</strong> Kalkulasi astronomis waktu sholat presisi on-device.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-surface-warm border border-border-hairline space-y-2 shadow-xs">
              <h5 className="font-bold text-on-surface flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gold-accent" /> State, Audio &amp; Notifikasi
              </h5>
              <ul className="space-y-1 text-xs text-slate-600">
                <li>• <strong>MVI Architecture:</strong> Clean Architecture dengan Reactive StateFlow.</li>
                <li>• <strong>Koin 4.0:</strong> Multiplatform Dependency Injection tanpa refleksi.</li>
                <li>• <strong>Alarm &amp; Notifikasi:</strong> Pengingat Adzan &amp; 10 menit pra-sholat.</li>
                <li>• <strong>Audio Engine:</strong> Media3 / AVPlayer dengan Audio Downloader pintar.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Performance Benchmarks */}
          <div className="p-4 rounded-2xl bg-red-soft/40 border border-primary/20 space-y-2 shadow-xs">
            <h4 className="font-bold text-on-surface flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Tolok Ukur Kinerja (Benchmark)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
              <div className="p-2.5 rounded-xl bg-white border border-border-hairline shadow-xs">
                <span className="text-primary font-extrabold text-lg block">&lt; 350 ms</span>
                <span className="text-[10px] text-text-muted">Cold App Launch</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-border-hairline shadow-xs">
                <span className="text-emerald-700 font-extrabold text-lg block">60 / 120 FPS</span>
                <span className="text-[10px] text-text-muted">Smooth Rendering</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-border-hairline shadow-xs">
                <span className="text-primary font-extrabold text-lg block">&lt; 65 MB</span>
                <span className="text-[10px] text-text-muted">Active RAM Footprint</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-border-hairline shadow-xs">
                <span className="text-amber-800 font-extrabold text-lg block">100%</span>
                <span className="text-[10px] text-text-muted">Offline Resilience</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-200/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            Tutup Spesifikasi
          </button>
        </div>
      </div>
    </div>
  );
};
