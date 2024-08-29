import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import 'dotenv/config';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/react/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
