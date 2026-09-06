import { FeatureItem } from '../types';

export const featureData: FeatureItem[] = [
  {
    id: 'home-widgets',
    title: '8 Home Screen Widget Interaktif',
    subtitle: 'Pantau Ibadah & Amaliyah Tanpa Buka Aplikasi',
    description: 'Hadir langsung di layar utama ponsel Android Anda: Jadwal Sholat Ringkas (4x1) & Lengkap (4x2) dengan hitung mundur realtime, Tasbih Digital & Target Dzikir Cepat (2x2 & 4x1), Mutiara Wasiat Tanbih & Manqobah (4x2), Penanda Terakhir Tilawah Al-Qur\'an (2x2 & 4x1), serta Bilah Akses Cepat 4 Menu Utama.',
    badge: 'Baru di v1.1.0',
    iconName: 'LayoutGrid',
    cols: 'md:col-span-2',
    highlightText: '8 Varian Android Widget • Realtime Countdown • Sinkron Otomatis'
  },
  {
    id: 'spotlight-onboarding',
    title: 'Onboarding & Spotlight Guideline',
    subtitle: 'Panduan Visual Interaktif Ramah Pemula & Sesepuh',
    description: 'Alur selamat datang 5 slide terpandu yang memperkenalkan filosofi Robithoh, keunggulan offline-first, kenyamanan baca, dan izin notifikasi adzan. Dilengkapi animasi sorotan Spotlight interaktif pada Layar Bacaan, Jadwal Salat, dan Mushaf Al-Qur\'an agar jama\'ah dapat menguasai fitur tanpa rasa bingung.',
    badge: 'Fitur Baru',
    iconName: 'Compass',
    cols: 'md:col-span-1',
    highlightText: '5 Slide Onboarding • Spotlight Cutout Tour • Reset Tutorial di Profil'
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
    id: 'reading-comfort',
    title: 'Kenyamanan Baca Ramah Semua Usia',
    subtitle: 'Font Zoom Dinamis & Pilihan Warna Latar Kertas',
    description: 'Dirancang khusus dengan aksesibilitas tinggi untuk generasi muda hingga jama\'ah sepuh: pembesar huruf interaktif (Font Zoom 85%–165%), tipografi Arab Scheherazade New & Amiri Quran berharakat renggang anti-tumpuk, 3 tema latar (Krem Khidmat, Putih Bersih, Gelap Kontras Tinggi), dan terjemahan 3 bahasa (Arab, Indonesia, Sunda).',
    badge: 'Ramah Lansia',
    iconName: 'Eye',
    cols: 'md:col-span-2',
    highlightText: 'Font Zoom 85%–165% • 3 Tema Warna Latar • Teks Harakat Renggang'
  },
  {
    id: 'offline-first',
    title: '100% Arsitektur Offline-First',
    subtitle: 'Didukung Database Lokal SQLDelight',
    description: 'Seluruh teks doa, wirid, mushaf 114 surah 30 juz, silsilah 1–38, dan kitab manqobah tersimpan luring langsung di memori perangkat SQLite type-safe. Tetap lancar diakses di ruang bawah tanah majlis zikir, pegunungan, maupun saat tanpa kuota internet.',
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
    highlightText: '56 Bab Lengkap + Mode Presentasi Majlis'
  },
  {
    id: 'tasbih-haptik',
    title: 'Interactive Haptic Tasbih Engine',
    subtitle: 'Sentuhan Responsif & Getaran Berirama',
    description: 'Hitungan tasbih digital fullscreen yang responsif dengan animasi pegas (spring dynamic), getaran haptic feedback pada tiap klik dan getaran khusus milestone target 33x (ba\'da sholat), 100x (istighfar), dan 165x (dzikir khataman).',
    badge: 'Haptic Engine',
    iconName: 'Sparkles',
    cols: 'md:col-span-1',
    highlightText: 'Preset 33x / 100x / 165x + Custom Target'
  },
  {
    id: 'audio-background',
    title: 'Integrated Background Audio Player',
    subtitle: 'Lantunan Dzikir & Shalawat Tetap Mengalun',
    description: 'Didukung native Media3 ExoPlayer (Android) & AVPlayer (iOS). Audio tetap berjalan di latar belakang saat layar terkunci atau saat membuka aplikasi lain. Disertai mini floating player bar di setiap halaman.',
    badge: 'Native Media3 / AVPlayer',
    iconName: 'Music',
    cols: 'md:col-span-2',
    highlightText: 'Lockscreen Control • Mini Floating Bar • Audio Langgam HQ'
  }
];
