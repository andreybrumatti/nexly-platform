import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import fs from 'fs';
import os from 'os';

const certPath = `${os.homedir()}/Library/Application Support/Herd/config/valet/Certificates`

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        https: {
            key: fs.readFileSync(`${certPath}/nexly-plataform.test.key`),
            cert: fs.readFileSync(`${certPath}/nexly-plataform.test.crt`),
        },
        host: 'nexly-plataform.test',
        port: 5173,
        cors: {
        origin: [
            'https://nexly-plataform.test',
            'https://epistatic-grayish-rudolph.ngrok-free.dev',
        ],
        },
        hmr: {
            host: 'nexly-plataform.test',
            protocol: 'wss',
        },
    },
});
