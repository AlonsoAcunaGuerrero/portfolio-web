import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const routes = url.pathname.split('/').filter((path: string) => path.length > 0);
    const lang = routes.at(-1) || "en";
    
    if (lang in ui) return lang as keyof typeof ui;

    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}