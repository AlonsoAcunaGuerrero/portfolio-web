import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://AlonsoAcunaGuerrero.github.io',
    base: "/portfolio-web",
    integrations: [react()],
    vite: {
        ssr: {
            noExternal: ["react-icons"],
        }
    }
});
