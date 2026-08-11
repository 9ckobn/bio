import type { Lang } from '../i18n/ui';

export interface CaseLink {
  label: string;
  url: string;
  icon?: 'apple' | 'github' | 'telegram' | 'zynerio';
}

export interface Case {
  id: string;
  /** Emoji-free monogram or icon id; real artwork at content stage */
  monogram: string;
  accent: string; // placeholder accent color for the app icon tile
  name: string;
  tagline: Record<Lang, string>;
  badges: string[];
  /** Number of screenshot slots in the carousel (placeholders until media arrives) */
  shots: number;
  description: Record<Lang, string>;
  stack: string[];
  links: CaseLink[];
}

// PLACEHOLDER CONTENT — names/order are real, copy is not.
// Media (screenshots, screencasts) arrives from Anton at the content stage.
export const cases: Case[] = [
  {
    id: 'ai-chan',
    monogram: 'AC',
    accent: '#bf3989',
    name: 'AI Chan',
    tagline: { en: 'AI companion chat — placeholder', ru: 'AI-чатбот — плейсхолдер' },
    badges: ['App Store', 'Flutter'],
    shots: 4,
    description: {
      en: 'Placeholder description. Problem → what was done → measurable result.',
      ru: 'Плейсхолдер. Проблема → что сделано → измеримый результат.',
    },
    stack: ['Flutter', 'Metal', 'Platform channels'],
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
    accent: '#0969da',
    name: 'Coloring Book',
    tagline: { en: 'Drawing app with custom canvas — placeholder', ru: 'Рисовалка с кастомным холстом — плейсхолдер' },
    badges: ['App Store', 'Flutter'],
    shots: 3,
    description: {
      en: 'Placeholder description. Custom canvas, CV scoring, subscriptions.',
      ru: 'Плейсхолдер. Кастомный холст, CV-скоринг, подписки.',
    },
    stack: ['Flutter', 'StoreKit', 'RevenueCat'],
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

// PLACEHOLDER numbers — real stats at the content stage
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
