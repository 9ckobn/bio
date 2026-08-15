import type { Lang } from '../i18n/ui';

export interface CaseLink {
  label: string;
  url: string;
  icon?: 'apple' | 'github' | 'telegram' | 'zynerio';
}

export interface CaseVideo {
  src: string;
  poster: string;
}

export interface CaseScreenshot {
  thumb: string;
  full: string;
  alt?: string;
}

export interface Case {
  id: string;
  icon?: string;
  orientation?: 'portrait' | 'landscape';
  monogram: string;
  accent: string;
  name: string;
  tagline: Record<Lang, string>;
  badges: string[];
  shots: number;
  video?: CaseVideo;
  screenshots?: CaseScreenshot[];
  description: Record<Lang, string>;
  stack: string[];
  links: CaseLink[];
}

export const cases: Case[] = [
  {
    id: 'ai-chan',
    icon: '/icons/aichan.png',
    monogram: 'AC',
    accent: '#bf3989',
    name: 'AI Chan',
    tagline: {
      en: 'AI anime companion with Live2D, emotions & voice',
      ru: 'AI-вайфу с Live2D, эмоциями и голосом',
    },
    badges: ['Live product'],
    shots: 5,
    video: {
      src: '/videos/aichan.mp4',
      poster: '/videos/aichan-poster.jpg',
    },
    screenshots: [
      {
        thumb: '/shots/ai-chan/shot-1-thumb.jpg',
        full: '/shots/ai-chan/shot-1.jpg',
        alt: 'AI Chan object recognition & pricing',
      },
      {
        thumb: '/shots/ai-chan/shot-2-thumb.jpg',
        full: '/shots/ai-chan/shot-2.jpg',
        alt: 'AI Chan calorie counting with emotional reaction',
      },
      {
        thumb: '/shots/ai-chan/shot-3-thumb.jpg',
        full: '/shots/ai-chan/shot-3.jpg',
        alt: 'AI Chan gaming slang dialogue & emotions',
      },
      {
        thumb: '/shots/ai-chan/shot-4-thumb.jpg',
        full: '/shots/ai-chan/shot-4.jpg',
        alt: 'AI Chan translator mode & TTS speech',
      },
    ],
    description: {
      en: 'Interactive chat companion with animated Live2D characters: real-time lip-sync, TTS/STT voice dialogue, vision, and image generation. Full mobile production stack: in-app subscriptions, ads, analytics, push notifications, and WebSocket streaming.',
      ru: 'Чат-бот с «живыми» аниме-персонажами: Live2D-анимация с липсинком, голосовой ввод/вывод (TTS/STT), распознавание фото и генерация картинок. Полный цикл: встроенные покупки и подписки, реклама, аналитика, пуши и WebSocket-стриминг.',
    },
    stack: ['Flutter', 'iOS', 'Live2D', 'TTS / STT', 'IAP / Subscriptions', 'AdMob', 'Analytics'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/ai-chan-chatbot-with-emotions/id6743831992',
        icon: 'apple',
      },
    ],
  },
  {
    id: 'zynerio',
    monogram: 'Z',
    accent: '#1a7f37',
    name: 'Zynerio',
    tagline: { en: 'VPN service, solo full cycle — placeholder', ru: 'VPN-сервис полного цикла — плейсхолдер' },
    badges: ['Live product'],
    shots: 3,
    description: {
      en: 'Placeholder description. Infra, billing, API, bot, web — shipped solo.',
      ru: 'Плейсхолдер. Инфра, биллинг, API, бот, веб — всё соло.',
    },
    stack: ['Python', 'FastAPI', 'Ansible', 'PostgreSQL'],
    links: [
      { label: 'zynerio.com', url: 'https://zynerio.com/', icon: 'zynerio' },
      { label: 'Bot', url: 'https://t.me/zynerio_vpn_bot', icon: 'telegram' },
    ],
  },
  {
    id: 'video-conveyor',
    monogram: 'VC',
    accent: '#9a6700',
    name: 'Video Conveyor',
    tagline: { en: 'Autonomous short-video pipeline — placeholder', ru: 'Автономная видео-ферма — плейсхолдер' },
    badges: ['Automation'],
    shots: 2,
    description: {
      en: 'Placeholder description. Whisper → LLM clip selection → FFmpeg → publish.',
      ru: 'Плейсхолдер. Whisper → LLM-отбор → FFmpeg → публикация.',
    },
    stack: ['Python', 'Whisper', 'FFmpeg'],
    links: [{ label: 'GitHub', url: 'https://github.com/9ckobn/video-conveyor', icon: 'github' }],
  },
  {
    id: 'coloring-book',
    monogram: 'CB',
    icon: '/icons/coloring-book.png',
    orientation: 'landscape',
    accent: '#0969da',
    name: 'Cozy Coloring',
    tagline: {
      en: 'Drawing & coloring app with custom canvas and pixel-perfect palettes',
      ru: 'Интерактивная раскраска с кастомным холстом и цветовыми палитрами',
    },
    badges: ['App Store', 'Flutter'],
    shots: 4,
    screenshots: [
      {
        thumb: '/shots/coloring-book/shot-1-thumb.jpg',
        full: '/shots/coloring-book/shot-1.jpg',
        alt: 'Cozy Coloring rabbit coloring canvas & palette',
      },
      {
        thumb: '/shots/coloring-book/shot-2-thumb.jpg',
        full: '/shots/coloring-book/shot-2.jpg',
        alt: 'Cozy Coloring watermelon brush & opacity controls',
      },
      {
        thumb: '/shots/coloring-book/shot-3-thumb.jpg',
        full: '/shots/coloring-book/shot-3.jpg',
        alt: 'Cozy Coloring cozy cafe scene drawing workflow',
      },
      {
        thumb: '/shots/coloring-book/shot-4-thumb.jpg',
        full: '/shots/coloring-book/shot-4.jpg',
        alt: 'Cozy Coloring landscape coloring & precision tools',
      },
    ],
    description: {
      en: 'Drawing app built with Flutter and a high-performance custom canvas engine. Features intuitive brush controls, opacity layering, dynamic color palettes, and seamless in-app purchases via RevenueCat & StoreKit.',
      ru: 'Приложение для раскрашивания на Flutter с высокопроизводительным кастомным движком холста. Включает гибкую настройку кистей и прозрачности, палитры оттенков и подписки через RevenueCat и StoreKit.',
    },
    stack: ['Flutter', 'iOS', 'Custom Canvas', 'StoreKit', 'RevenueCat'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/cozy-coloring-learn-to-draw/id6761141160',
        icon: 'apple',
      },
    ],
  },
];

export interface Stat {
  value: string;
  label: Record<Lang, string>;
}

export const stats: Stat[] = [
  { value: '5+', label: { en: 'years shipping', ru: 'лет в разработке' } },
  { value: '2', label: { en: 'App Store releases', ru: 'релиза в App Store' } },
  { value: '6', label: { en: 'open-source projects', ru: 'опенсорс-проектов' } },
  { value: '1', label: { en: 'live product, solo', ru: 'живой продукт соло' } },
];

export interface Repo {
  name: string;
  url: string;
  description: Record<Lang, string>;
  lang: string;
  langColor: string;
}

export const repos: Repo[] = [
  {
    name: 'musomatic-server',
    url: 'https://github.com/9ckobn/musomatic-server',
    description: { en: 'Placeholder — lossless music API', ru: 'Плейсхолдер — lossless music API' },
    lang: 'Python',
    langColor: '#3572A5',
  },
  {
    name: 'musomatic-client',
    url: 'https://github.com/9ckobn/musomatic-client',
    description: { en: 'Placeholder — CLI/TUI music client', ru: 'Плейсхолдер — CLI/TUI-клиент' },
    lang: 'Python',
    langColor: '#3572A5',
  },
  {
    name: 'tg_agent',
    url: 'https://github.com/9ckobn/tg_agent',
    description: { en: 'Placeholder — TG channel discovery CLI', ru: 'Плейсхолдер — поиск TG-каналов' },
    lang: 'Python',
    langColor: '#3572A5',
  },
];
