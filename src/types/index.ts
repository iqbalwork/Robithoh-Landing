export type Language = 'ar' | 'id' | 'su';

export interface LiturgySample {
  id: string;
  title: string;
  category: string;
  audioSrc: string;
  duration: string;
  arabicText: string;
  transliteration: string;
  indonesianText: string;
  sundaneseText: string;
  description: string;
}

export interface Institution {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  logo: string;
  category: 'pendidikan' | 'spiritual' | 'pemuda' | 'ekonomi' | 'media';
  highlights: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  cols: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'md:col-span-2' | 'md:col-span-1';
  highlightText?: string;
}
