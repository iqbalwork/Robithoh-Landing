import React from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface ReleaseAnnouncementBarProps {
  onOpenReleaseModal: () => void;
  onDismiss?: () => void;
}

export const ReleaseAnnouncementBar: React.FC<ReleaseAnnouncementBarProps> = ({
  onOpenReleaseModal,
  onDismiss
}) => {
  return (
    <aside aria-label="Pengumuman Rilis v1.2.0" className="relative z-50 bg-gradient-to-r from-merah-950 via-[#40060B] to-merah-950 border-b border-emas-500/30 px-4 py-2.5 text-xs text-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emas-500/20 text-emas-300 font-extrabold text-[10px] tracking-wide uppercase border border-emas-500/40">
            <Sparkles className="w-3 h-3 text-emas-400 animate-pulse" />
            Pembaruan v1.2.0
          </span>

          <span className="text-slate-200 font-medium">
            Telah Rilis: <strong className="text-white font-semibold">Mode Mushaf Kemenag RI</strong>, <strong className="text-white font-semibold">Halaman Khusus Doa &amp; Live Search</strong>, dan <strong className="text-white font-semibold">Wirid Kemalaikatan</strong>!
          </span>

          <button
            onClick={onOpenReleaseModal}
            className="inline-flex items-center gap-1 font-bold text-emas-400 hover:text-emas-300 underline underline-offset-2 transition-colors ml-1"
          >
            <span>Lihat Detail Rilis &amp; Update</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
            title="Tutup Bar"
            aria-label="Tutup Pengumuman"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </aside>
  );
};
