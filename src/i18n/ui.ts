export const languages = { en: 'EN', ru: 'RU' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Anton Chuprun — Full-Stack Flutter & Python Engineer',
    'meta.description':
      'Full-stack engineer: Flutter mobile apps, Python automation pipelines, AI companions, and end-to-end products shipped to production.',
    'nav.cases': 'Work',
    'nav.cv': 'About',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Full-Stack Flutter & Python Engineer. Open to part-time and full-time contracts.',
    'cases.title': 'Selected work',
    'cases.view': 'View',
    'cases.screenshots': 'Screenshots',
    'cv.title': 'About & Experience',
    'cv.about.title': 'Background',
    'cv.about.body':
      'I started my engineering path in game development (Unity), building interactive mechanics, custom rendering, and high-framerate visuals. That mindset naturally evolved into full-stack product engineering: today I build complete systems across the entire lifecycle — from high-performance Flutter mobile apps with Live2D character animation, real-time voice, vision AI, and in-app subscriptions, to GPU-powered Python automation farms (Whisper, LLMs, FFmpeg), scalable backends (FastAPI, PostgreSQL), Telegram bots, and automated server fleets managed via Ansible.\n\nI love building products that solve real problems, work without friction, and scale cleanly. Async-first by default, comfortable owning features end-to-end, and focused on shipping working software to production.',
    'cv.verticals.title': 'What I do',
    'oss.title': 'Open source',
    'oss.all': 'All repositories',
    'services.flutter.title': 'Flutter & Mobile Products',
    'services.flutter.body':
      'Full-cycle mobile development: custom high-performance canvas engines, AI-powered interactive companions (Live2D, real-time lip-sync, TTS/STT, computer vision), in-app purchases & subscriptions (StoreKit, RevenueCat), push notifications, WebSocket streaming, and App Store releases.',
    'services.python.title': 'Python, AI & Automation Pipelines',
    'services.python.body':
      'Backend systems and autonomous media farms: GPU-accelerated video/audio processing pipelines (Whisper large-v3, FFmpeg 9:16 rendering, Ollama LLM scripting), Telegram bots with analytics (aiogram 3), FastAPI microservices, and automated server fleet provisioning (Ansible, Docker, VLESS/XRay).',
    'services.pilot.title': 'Start with a fast paid pilot',
    'services.pilot.body':
      '2–3 days with a fixed price and clear scope to test team chemistry, build a high-impact feature or prototype, and seamlessly transition into a retainer or full contract.',
    'how.format': 'Remote · Part-time (priority) & Full-time',
    'how.async': 'Async-first, text-based workflow',
    'how.tz': 'UTC+2 (Kaliningrad)',
    'how.payment': 'USDT / USDC / Bybit UID / Mellow / 4dev',
    'contact.title': 'Get in touch',
    'contact.tg': 'Telegram',
    'contact.email': 'Email',
    'contact.copied': 'Copied to clipboard',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Русская версия',
  },
  ru: {
    'meta.title': 'Антон Чупрун — Full-Stack Flutter и Python инженер',
    'meta.description':
      'Фуллстак-разработчик: мобильные приложения на Flutter, пайплайны автоматизации на Python, AI-продукты и законченные проекты в проде.',
    'nav.cases': 'Кейсы',
    'nav.cv': 'Обо мне',
    'nav.contact': 'Контакты',
    'hero.subtitle': 'Full-Stack Flutter и Python разработчик. Открыт к парт-тайм и фулл-тайм проектам.',
    'cases.title': 'Избранные проекты',
    'cases.view': 'Открыть',
    'cases.screenshots': 'Скриншоты',
    'cv.title': 'Обо мне и опыт',
    'cv.about.title': 'История и подход',
    'cv.about.body':
      'Мой путь в разработке начался с геймдева (Unity), где я учился выжимать максимум производительности, работать с кастомным рендерингом и создавать живой интерактивный визуал. Со временем этот опыт перерос в полноценную фуллстак-разработку: сейчас я закрываю полный цикл создания продуктов — от мобильных приложений на Flutter с Live2D-анимациями, голосовым вводом/выводом (TTS/STT), AI-зрением и подписками в App Store, до GPU-конвейеров автоматизации (Whisper, локальные LLM, FFmpeg), микросервисов на FastAPI, Telegram-ботов с админками (aiogram 3) и автоматизации инфраструктуры нод через Ansible.\n\nЛюблю понятные, надёжные решения, которые приносят пользу и работают как часы. Привык брать ответственность за проект целиком от архитектуры до деплоя, работать в async-first формате и быстро доставлять готовый результат в прод.',
    'cv.verticals.title': 'Что я делаю',
    'oss.title': 'Опенсорс',
    'oss.all': 'Все репозитории',
    'services.flutter.title': 'Flutter и мобильные продукты',
    'services.flutter.body':
      'Полный цикл мобильной разработки: кастомные графические движки и холсты, интерактивные AI-персонажи (Live2D, липсинк, TTS/STT, распознавание фото), монетизация и подписки (StoreKit, RevenueCat), WebSocket-стриминг, пуши и публикации в App Store.',
    'services.python.title': 'Python, AI и конвейеры автоматизации',
    'services.python.body':
      'Бэкенд-системы и автономные медиа-фермы: GPU-пайплайны нарезки и уникализации видео (Whisper large-v3, FFmpeg 9:16, сценарии через Ollama LLM), Telegram-боты с аналитикой и оплатой (aiogram 3), FastAPI-микросервисы и автоматизация флота серверов (Ansible, Docker, VLESS/XRay).',
    'services.pilot.title': 'Начнём с платного пилота',
    'services.pilot.body':
      '2–3 дня с фиксированной ценой и чётким скоупом, чтобы проверить совместимость на реальной задаче, собрать фичу или PoC, а затем легко перейти на ретейнер или долгосрочный контракт.',
    'how.format': 'Ремоут · Парт-тайм (в приоритете) и фулл-тайм',
    'how.async': 'Async-first, текстовая коммуникация',
    'how.tz': 'Калининград, UTC+2',
    'how.payment': 'USDT / USDC / Bybit UID / Mellow / 4dev',
    'contact.title': 'Связаться',
    'contact.tg': 'Telegram',
    'contact.email': 'Email',
    'contact.copied': 'Скопировано в буфер',
    'theme.toggle': 'Сменить тему',
    'lang.switch': 'English version',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}
