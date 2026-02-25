import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://AlonsoAcunaGuerrero.github.io',
    base: "/portfolio-web",
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    },
    integrations: [react()],
    vite: {
        ssr: {
            noExternal: ["react-icons"],
        }
    },
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "en",
    }
});
