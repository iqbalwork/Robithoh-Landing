import { FeatureItem } from '../types';

export const featureData: FeatureItem[] = [
  {
    id: 'offline-first',
    title: '95% Arsitektur Offline-First',
    subtitle: 'Didukung Database SQLDelight 2.3.2',
    description: 'Seluruh teks doa, wirid, mushaf 114 surah, silsilah 1-38, dan kitab manqobah tersimpan luring langsung di memori perangkat. Tetap lancar diakses di ruang bawah tanah majlis, pegunungan, maupun saat tanpa kuota internet.',
    badge: 'SQLDelight Engine',
    iconName: 'Database',
    cols: 'md:col-span-2',
    highlightText: 'Zero Cloud Lag • 100% Data Lokal • Instant Startup < 1s'
  },
  {
    id: 'manqobah-3-lang',
    title: 'Kitab Manqobah 1–56 Tiga Bahasa',
    subtitle: 'Arab, Terjemahan Indonesia, & Basa Sunda',
    description: 'Kompilasi lengkap 56 bab manqobah karomah Syeikh Abdul Qodir Al-Jailani r.a. dengan pilihan teks Arab bertasykil jelas, terjemahan Bahasa Indonesia, dan Basa Sunda halus. Dilengkapi Majlis Presentation Mode (Wake Lock) agar layar tidak mati saat dibaca.',
    badge: 'Multi-Language',
    iconName: 'BookOpen',
    cols: 'md:col-span-1',
    highlightText: '56 Bab Lengkap + Mode Presentasi'
  },
  {
    id: 'tasbih-haptik',
    title: 'Interactive Haptic Tasbih Engine',
    subtitle: 'Sentuhan Responsif & Getaran Berirama',
    description: 'Hitungan tasbih digital fullscreen yang responsif dengan animasi pegas (spring dynamic), getaran haptic feedback pada tiap klik dan getaran khusus milestone target 33x (ba\'da sholat), 100x (istighfar), dan 165x (dzikir khataman).',
    badge: 'Haptic Engine',
    iconName: 'Sparkles',
    cols: 'md:col-span-1',
    highlightText: 'Preset 33x / 100x / 165x + Custom'
  },
  {
    id: 'audio-background',
    title: 'Integrated Background Audio Player',
    subtitle: 'Lantunan Dzikir & Shalawat Tetap Mengalun',
    description: 'Didukung native Media3 ExoPlayer (Android) & AVPlayer (iOS). Audio tetap berjalan di latar belakang saat layar terkunci atau saat membuka aplikasi lain. Disertai mini floating player bar di setiap halaman.',
    badge: 'Native Media3 / AVPlayer',
    iconName: 'Music',
    cols: 'md:col-span-2',
    highlightText: 'Lockscreen Control • Mini Floating Bar • Audio HQ'
  },
  {
    id: 'quran-mushaf',
    title: 'Al-Qur\'an Digital 114 Surah & Tajwid',
    subtitle: 'Mushaf Standar Kemenag RI yang Jernih',
    description: 'Indeks lengkap 114 surah Makkiyah & Madaniyah dengan pewarnaan tajwid yang memudahkan tilawah, arti per ayat, serta penanda bacaan terakhir (Last Read Bookmark) yang tersimpan otomatis.',
    badge: 'Mushaf Tajwid',
    iconName: 'Layers',
    cols: 'md:col-span-1',
    highlightText: '114 Surah 30 Juz • Bookmark Otomatis'
  },
  {
    id: 'mc-silsilah',
    title: 'Susunan MC, Tanbih & Silsilah 1–38',
    subtitle: 'Panduan Baku Majlis Manaqib TQN',
    description: 'Naskah MC Manaqib dwibahasa (Indonesia & Sunda), Wasiat Tanbih Pangersa Abah Anom & Syekh Ahmad Shohibulwafa Tajul Arifin, serta sanad emas Tawassul Silsilah 1 s/d 38 hingga Pangersa Abah Aos Ra. Qs.',
    badge: 'Sanad Mutashil',
    iconName: 'ShieldCheck',
    cols: 'md:col-span-2',
    highlightText: 'Silsilah 1-38 • Naskah MC Resmi • Tanbih Luhur'
  }
];
