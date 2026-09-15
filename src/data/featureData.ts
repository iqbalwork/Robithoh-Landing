import { FeatureItem } from '../types';

export const featureData: FeatureItem[] = [
  {
    id: 'quran-mushaf-mode',
    title: "Mode Baru Al-Qur'an Per Halaman (Mushaf Page)",
    subtitle: 'Tampilan Lembaran Mushaf Standar Kemenag RI 604 Halaman',
    description: "Nikmati kemudahan tilawah Al-Qur'an otentik dengan tampilan lembaran mushaf utuh standar Kementerian Agama RI lengkap 604 halaman 30 juz. Dilengkapi pemetaan ayat interaktif, navigasi loncat juz & surah seketika, penanda halaman terakhir (last read), serta 100% tersimpan luring tanpa kuota internet.",
    badge: 'Baru di v1.2.0',
    iconName: 'BookOpen',
    cols: 'md:col-span-2',
    highlightText: '604 Halaman Mushaf Kemenag • Pemetaan Ayat Interaktif • 100% Offline'
  },
  {
    id: 'doa-live-search',
    title: 'Halaman Khusus Doa & Live Search',
    subtitle: 'Pencarian Instan Doa Amaliyah, Shalawat & Wirid Tarekat',
    description: "Tampilan baru yang lebih luas untuk mencari doa amaliyah tarekat secara instan dengan fitur pencarian langsung (Live Search). Temukan seketika Nadzom Shalawat Bani Hasyim, Doa Ba'da Sholat Jumat, Kaifiyat Wirid Kemalaikatan 7 Hari, Doa Rijalul Ghoib, hingga doa khataman secara terstruktur.",
    badge: 'Baru di v1.2.0',
    iconName: 'Compass',
    cols: 'md:col-span-1',
    highlightText: 'Live Search Cepat • Nadzom Bani Hasyim • Doa Ba\'da Jumat • Wirid Kemalaikatan'
  },
  {
    id: 'manqobah-12-bulan',
    title: 'Penyempurnaan Naskah Manqobah 12 Bulan',
    subtitle: 'Bahasa Indonesia, Basa Sunda & Teks Arab Bertasykil Rapi',
    description: "Penyempurnaan komprehensif naskah Manqobah Karomah Syeikh Abdul Qodir Al-Jailani r.a. untuk 12 bulan hijriyah (Muharrom s.d. Dzulhijjah) dalam Bahasa Indonesia dan Basa Sunda halus. Teks dzikir jahr, khofi, dan tawassul silsilah ditata ulang lebih presisi dan nyaman dibaca saat majlis khotaman.",
    badge: 'Disempurnakan di v1.2.0',
    iconName: 'BookOpen',
    cols: 'md:col-span-1',
    highlightText: '12 Bulan Hijriyah Lengkap • Basa Sunda & Indo • Teks Dzikir Presisi'
  },
  {
    id: 'tasbih-kemalaikatan',
    title: 'Tasbih Digital & Pilihan Wirid Kemalaikatan',
    subtitle: 'Sentuhan Haptik Taktil dengan Preset Dzikir & Malaikat Penjaga',
    description: "Hitungan tasbih digital fullscreen yang responsif dengan animasi pegas dan getaran haptic berirama. Kini hadir pilihan khusus Wirid Kemalaikatan (Ahad s.d. Jum'at dengan target 222x s.d. 777x sesuai Malaikat penjaga), preset Dzikir Jahr 165x, istighfar 100x, tasbih 33x, serta target kustom.",
    badge: 'Fitur Baru v1.2.0',
    iconName: 'Sparkles',
    cols: 'md:col-span-2',
    highlightText: 'Preset Wirid Kemalaikatan (222x–777x) • Dzikir Jahr 165x • Haptic Feedback'
  },
  {
    id: 'home-widgets',
    title: '8 Home Screen Widget Interaktif',
    subtitle: 'Pantau Ibadah & Amaliyah Tanpa Buka Aplikasi',
    description: "Hadir langsung di layar utama ponsel Android Anda: Jadwal Sholat Ringkas (4x1) & Lengkap (4x2) dengan hitung mundur realtime, Tasbih Digital & Target Dzikir Cepat (2x2 & 4x1), Mutiara Wasiat Tanbih & Manqobah (4x2), Penanda Terakhir Tilawah Al-Qur'an (2x2 & 4x1), serta Bilah Akses Cepat 4 Menu Utama.",
    badge: '8 Varian Android',
    iconName: 'LayoutGrid',
    cols: 'md:col-span-2',
    highlightText: '8 Varian Android Widget • Realtime Countdown • Sinkron Otomatis'
  },
  {
    id: 'system-fixes',
    title: 'Notifikasi Sholat Bersih & Startup Kilat',
    subtitle: 'Nama Kota Rapih & Perbaikan Splash Screen Freeze',
    description: "Notifikasi jadwal sholat kini menampilkan nama kota yang bersih dan rapi (bukan lagi titik koordinat GPS). Aplikasi terbuka seketika tanpa jeda atau freeze pada splash screen, serta pengoptimalan paket pembaruan Google Play dengan ukuran aplikasi yang semakin ringan.",
    badge: 'Peningkatan Sistem v1.2.0',
    iconName: 'Cpu',
    cols: 'md:col-span-1',
    highlightText: 'Nama Kota Bersih • Splash Screen Fix • Aplikasi Lebih Ringan'
  },
  {
    id: 'adzan-volume',
    title: 'Pengatur Volume Adzan Mandiri',
    subtitle: 'Slider Suara 0%–100% dengan Mode Senyap',
    description: 'Atur intensitas volume suara kumandang adzan secara independen sesuai kondisi sekitar (rumah, kantor, atau majlis). Menggeser ke 0% membisukan suara audio tanpa mematikan pengingat visual di layar, menjaga kekhidmatan ibadah kapan pun.',
    badge: 'Kendali Mandiri',
    iconName: 'Volume2',
    cols: 'md:col-span-1',
    highlightText: 'Slider 0%–100% • Mode Senyap Fleksibel • Alarm Android Native'
  },
  {
    id: 'offline-first',
    title: '100% Arsitektur Offline-First',
    subtitle: 'Didukung Database Lokal SQLDelight',
    description: "Seluruh teks doa amaliyah, wirid kemalaikatan, mushaf 114 surah 604 halaman, silsilah 1–38, dan kitab manqobah tersimpan luring langsung di memori perangkat SQLite type-safe. Tetap lancar diakses di ruang bawah tanah majlis zikir, pegunungan, maupun saat tanpa kuota internet.",
    badge: 'SQLDelight Engine',
    iconName: 'Database',
    cols: 'md:col-span-2',
    highlightText: 'Zero Cloud Lag • 100% Data Lokal • Instant Startup < 850ms'
  }
];
