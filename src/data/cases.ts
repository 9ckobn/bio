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
  /** Square (non-phone) shot: rendered in a 1:1 tile instead of the 9/19 phone box. */
  square?: boolean;
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
    icon: '/icons/aichan.webp',
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
      poster: '/videos/aichan-poster.webp',
    },
    screenshots: [
      {
        thumb: '/shots/ai-chan/shot-1-thumb.webp',
        full: '/shots/ai-chan/shot-1.webp',
        alt: 'AI Chan object recognition & pricing',
      },
      {
        thumb: '/shots/ai-chan/shot-2-thumb.webp',
        full: '/shots/ai-chan/shot-2.webp',
        alt: 'AI Chan calorie counting with emotional reaction',
      },
      {
        thumb: '/shots/ai-chan/shot-3-thumb.webp',
        full: '/shots/ai-chan/shot-3.webp',
        alt: 'AI Chan gaming slang dialogue & emotions',
      },
      {
        thumb: '/shots/ai-chan/shot-4-thumb.webp',
        full: '/shots/ai-chan/shot-4.webp',
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
    icon: '/icons/zynerio.webp',
    monogram: 'Z',
    accent: '#6c5ce7',
    name: 'Zynerio',
    tagline: {
      en: 'VPN service run solo: bot, backend, web & fleet automation',
      ru: 'VPN-сервис под соло-управлением: бот, бэкенд, веб и автоматизация флота',
    },
    badges: ['Live product'],
    shots: 5,
    screenshots: [
      {
        thumb: '/shots/zynerio/shot-1-thumb.webp',
        full: '/shots/zynerio/shot-1.webp',
        square: true,
        alt: 'Zynerio VPN landing (zynerio.com)',
      },
      {
        thumb: '/shots/zynerio/shot-2-thumb.webp',
        full: '/shots/zynerio/shot-2.webp',
        square: true,
        alt: 'Web cabinet: active subscription & 1-click connect',
      },
      {
        thumb: '/shots/zynerio/shot-3-thumb.webp',
        full: '/shots/zynerio/shot-3.webp',
        alt: 'In-bot admin panel: grants, promos, refunds, analytics',
      },
      {
        thumb: '/shots/zynerio/shot-4-thumb.webp',
        full: '/shots/zynerio/shot-4.webp',
        alt: 'Tariff picker in the Telegram bot',
      },
      {
        thumb: '/shots/zynerio/shot-5-thumb.webp',
        full: '/shots/zynerio/shot-5.webp',
        alt: 'SBP QR payment flow in the Telegram bot',
      },
    ],
    description: {
      en: 'VLESS/XRay VPN sold through a Telegram bot (aiogram): plans, promos, referrals, refunds, Platega QR payments, in-bot admin with analytics. Web cabinet on React + FastAPI (JWT, Telegram Login). Remnawave is the only third-party piece (panel, config distribution, user DB); nodes run remnanode + Cloudflare WARP. The fleet is managed by a custom CLI over Ansible: one-command node bootstrap, rolling updates, DNAT front-relays, backups, healthchecks.',
      ru: 'VPN на VLESS/XRay с продажей через Telegram-бота (aiogram): тарифы, промо, рефералка, возвраты, оплата QR-кодом через Platega, админка с аналитикой прямо в боте. Веб-кабинет на React + FastAPI (JWT, вход через Telegram). Remnawave — единственный чужой компонент (панель, раздача конфигов, БД пользователей); ноды — remnanode + Cloudflare WARP. Флот под управлением собственного CLI поверх Ansible: bootstrap ноды одной командой, rolling-обновления, DNAT фронт-релеи, бэкапы, healthcheck.',
    },
    stack: ['Python', 'FastAPI', 'aiogram 3', 'React', 'PostgreSQL', 'Ansible', 'Docker', 'VLESS / XRay'],
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
    tagline: {
      en: 'Autonomous short-video farm: any source → viral clips for TikTok / Reels / Shorts',
      ru: 'Автономная ферма шортсов: любой сурс → виральные клипы под TikTok / Reels / Shorts',
    },
    badges: ['Automation'],
    shots: 4,
    video: {
      src: '/videos/conveyor.mp4',
      poster: '/videos/conveyor-poster.webp',
    },
    screenshots: [
      {
        thumb: '/shots/video-conveyor/shot-1-thumb.webp',
        full: '/shots/video-conveyor/shot-1.webp',
        alt: 'Ready clip: hook title, karaoke subs & animated banner',
      },
      {
        thumb: '/shots/video-conveyor/shot-2-thumb.webp',
        full: '/shots/video-conveyor/shot-2.webp',
        alt: 'Ready clip from another source: subs & banner overlay',
      },
      {
        thumb: '/shots/video-conveyor/shot-3-thumb.webp',
        full: '/shots/video-conveyor/shot-3.webp',
        alt: 'Ready clip: per-platform render for TikTok / Reels / Shorts',
      },
    ],
    description: {
      en: 'Short-form video farm promoting Zynerio VPN. Any source (YouTube channel/video or local files) is fetched by yt-dlp with bot-wall bypass and transcribed by faster-whisper large-v3 on GPU with word-level timings. A local LLM (Ollama) picks viral moments, verifies story boundaries and refines cuts by waveform. FFmpeg renders 9:16 blur-pad clips with word-by-word pop-in subtitles (libass), a censorship filter, programmatically rendered animated banners, and per-platform uniqueness packs (background, speed, crop jitter, mirror) for TikTok / Reels / Shorts. Jobs run as an on-disk state machine with a FIFO scheduler and a ledger deduping already-cut scenes.',
      ru: 'Ферма коротких вертикалок для продвижения Zynerio VPN. Любой сурс (YouTube-канал/видео или локальные файлы) качается yt-dlp с обходом bot-wall и транскрибируется faster-whisper large-v3 на GPU с пословными таймингами. Локальная LLM (Ollama) находит виральные моменты, верифицирует границы историй и точит резы по waveform. FFmpeg рендерит 9:16 blur-pad клипы с пословными pop-in субтитрами (libass), фильтром цензуры, анимированными баннерами и пакетами уникализации (фон, спид, кроп-джиттер, зеркалка) под TikTok / Reels / Shorts. Джобы — state machine на диске с FIFO-планировщиком и ledger-дедупом уже нарезанного.',
    },
    stack: ['Python', 'FastAPI', 'Whisper', 'LLM / Ollama', 'FFmpeg', 'yt-dlp', 'Docker'],
    links: [
      { label: 'GitHub', url: 'https://github.com/9ckobn/video-conveyor', icon: 'github' },
      { label: 'TikTok', url: 'https://www.tiktok.com/@skymbria11' },
    ],
  },
  {
    id: 'coloring-book',
    monogram: 'CB',
    icon: '/icons/coloring-book.webp',
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
        thumb: '/shots/coloring-book/shot-1-thumb.webp',
        full: '/shots/coloring-book/shot-1.webp',
        alt: 'Cozy Coloring rabbit coloring canvas & palette',
      },
      {
        thumb: '/shots/coloring-book/shot-2-thumb.webp',
        full: '/shots/coloring-book/shot-2.webp',
        alt: 'Cozy Coloring watermelon brush & opacity controls',
      },
      {
        thumb: '/shots/coloring-book/shot-3-thumb.webp',
        full: '/shots/coloring-book/shot-3.webp',
        alt: 'Cozy Coloring cozy cafe scene drawing workflow',
      },
      {
        thumb: '/shots/coloring-book/shot-4-thumb.webp',
        full: '/shots/coloring-book/shot-4.webp',
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
