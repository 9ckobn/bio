export const languages = { en: 'EN', ru: 'RU' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Anton Chuprun — Flutter & Automation Engineer',
    'meta.description':
      'Flutter and Python engineer. Mobile apps, automation pipelines, products shipped end-to-end.',
    'nav.cases': 'Work',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'hero.subtitle':
      'Placeholder subtitle: one or two sentences on positioning. Final copy at the content stage.',
    'cases.title': 'Selected work',
    'cases.view': 'View',
    'cases.screenshots': 'Screenshots',
    'cv.title': 'CV',
    'cv.about.title': 'About',
    'cv.about.body': 'Placeholder — final copy at the content stage.',
    'cv.download': 'Download CV (PDF)',
    'cv.verticals.title': 'What I do',
    'oss.title': 'Open source',
    'oss.all': 'All repositories',
    'services.flutter.title': 'Flutter for web3 & AI products',
    'services.flutter.body': 'Placeholder — final copy at the content stage.',
    'services.python.title': 'Python automation',
    'services.python.body': 'Placeholder — final copy at the content stage.',
    'services.pilot.title': 'Start with a paid pilot',
    'services.pilot.body': 'Placeholder — 2–3 days, fixed price, narrow scope. Then a retainer.',
    'how.async': 'Async-first, text-based',
    'how.tz': 'Kaliningrad, UTC+2',
    'how.payment': 'USDT / Mellow',
    'contact.title': 'Contact',
    'contact.tg': 'Telegram',
    'contact.email': 'Copy email',
    'contact.copied': 'Copied',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Русская версия',
  },
  ru: {
    'meta.title': 'Антон Чупрун — Flutter и автоматизация',
    'meta.description':
      'Flutter- и Python-инженер. Мобильные приложения, пайплайны автоматизации, продукты под ключ.',
    'nav.cases': 'Кейсы',
    'nav.cv': 'Резюме',
    'nav.contact': 'Контакты',
    'hero.subtitle': 'Плейсхолдер: одно-два предложения позиционирования. Финальный текст позже.',
    'cases.title': 'Избранные проекты',
    'cases.view': 'Открыть',
    'cases.screenshots': 'Скриншоты',
    'cv.title': 'Резюме',
    'cv.about.title': 'Обо мне',
    'cv.about.body': 'Плейсхолдер — финальный текст позже.',
    'cv.download': 'Скачать CV (PDF)',
    'cv.verticals.title': 'Что я делаю',
    'oss.title': 'Опенсорс',
    'oss.all': 'Все репозитории',
    'services.flutter.title': 'Flutter для web3 и AI-продуктов',
    'services.flutter.body': 'Плейсхолдер — финальный текст позже.',
    'services.python.title': 'Python-автоматизация',
    'services.python.body': 'Плейсхолдер — финальный текст позже.',
    'services.pilot.title': 'Начнём с платного пилота',
    'services.pilot.body': 'Плейсхолдер — 2–3 дня, фикс-цена, узкий scope. Дальше ретейнер.',
    'how.async': 'Async-first, переписка',
    'how.tz': 'Калининград, UTC+2',
    'how.payment': 'USDT / Mellow',
    'contact.title': 'Контакты',
    'contact.tg': 'Telegram',
    'contact.email': 'Скопировать email',
    'contact.copied': 'Скопировано',
    'theme.toggle': 'Сменить тему',
    'lang.switch': 'English version',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}
