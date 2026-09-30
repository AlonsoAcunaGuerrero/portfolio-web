import es from './locales/es.json';
import en from './locales/en.json';

export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'en';

export const ui = {
    es: es,
    en: en,
} as const;