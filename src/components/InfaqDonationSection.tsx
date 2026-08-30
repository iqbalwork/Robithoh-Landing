import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck } from 'lucide-react';

export const InfaqDonationSection: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const bankAccounts = [
    {
      bank: 'Bank Syariah Indonesia (BSI)',
      number: '7111222333',
      name: 'YAYASAN SIRNARASA PANJALU',
      code: '451',
      category: 'Infaq & Operasional Dakwah'
    },
    {
      bank: 'Bank Mandiri',
      number: '1310011122233',
      name: 'PONDOK PESANTREN SIRNARASA',
      code: '008',
      category: 'Pembangunan & Sarana Ibadah'
    },
    {
      bank: 'Bank Rakyat Indonesia (BRI)',
      number: '010001011122501',
      name: 'BAITUL MAAL SIRNARASA (BMS)',
      code: '002',
      category: 'Beasiswa Santri Dhuafa'
    },
  ];

  const handleCopy = (number: string, bank: string) => {
    navigator.clipboard.writeText(number);
    setCopiedBank(bank);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  return (
    <section id="infaq" className="py-24 bg-canvas-surface/60 relative overflow-hidden">
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-merah-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emas-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-merah-950/60 border border-merah-500/30 text-xs font-bold text-merah-400">
            <Heart className="w-3.5 h-3.5" />
            <span>Kanal Khidmat &amp; Amal Jariyah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Infaq &amp; Wakaf <span className="gold-gradient-text">Dakwah Sirnarasa</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Dukung kelangsungan dakwah Thoriqoh Qodiriyyah Naqsyabandiyyah, penyediaan fasilitas sarana ibadah, dan beasiswa pendidikan santri prasejahtera.
          </p>
        </div>

        {/* Bank Grid & QRIS Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bank Cards */}
          <div className="lg:col-span-7 space-y-4">
            {bankAccounts.map((acc) => (
              <div
                key={acc.bank}
                className="glass-card rounded-2xl p-5 sm:p-6 border-emas-500/20 hover:border-emas-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emas-400 block mb-1">
                    {acc.category}
                  </span>
                  <h4 className="text-base font-bold text-white">{acc.bank}</h4>
                  <p className="text-lg sm:text-xl font-extrabold font-mono text-emas-300 mt-1 tracking-wider">
                    {acc.number}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">a.n. {acc.name}</p>
                </div>

                <button
                  onClick={() => handleCopy(acc.number, acc.bank)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emas-500/40 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all flex-shrink-0"
                >
                  {copiedBank === acc.bank ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Nomor Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-emas-400" />
                      <span>Salin Rekening</span>
                    </>
                  )}
                </button>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Seluruh dana infaq dikelola secara amanah oleh Baitul Maal Sirnarasa (BMS) dan dilaporkan berkala.</span>
            </div>
          </div>

          {/* Right Column: QRIS Infaq Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 text-center border-emas-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emas-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <span className="text-xs font-bold text-emas-400 uppercase tracking-wider block mb-1">
              QRIS Infaq Digital
            </span>
            <h3 className="text-lg font-bold text-white mb-2">Pindai QRIS Semua Dompet Digital</h3>
            <p className="text-xs text-slate-400 mb-6">
              Mendukung GoPay, OVO, DANA, LinkAja, ShopeePay, dan seluruh Mobile Banking (BCA, Mandiri, BRI, BSI).
            </p>

            {/* QRIS Graphic Box */}
            <div className="p-4 bg-white rounded-2xl shadow-xl inline-block border-2 border-emas-500/40 mb-4">
              <div className="w-48 h-48 bg-slate-900 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-lg bg-merah-600 flex items-center justify-center text-white mb-2">
                  <Heart className="w-6 h-6 text-emas-300" />
                </div>
                <span className="text-white font-extrabold text-xs tracking-wider">QRIS INFAQ</span>
                <span className="text-emas-400 font-mono text-[9px] mt-1">SIRNARASA PANJALU</span>
                <span className="text-[8px] text-slate-400 mt-2">NMID: ID1020038111000</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-medium">
              Konfirmasi Infaq via WhatsApp Sekretariat: <span className="text-emas-400 font-bold">+62 811-111-7890</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
