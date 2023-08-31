import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Pages from 'vite-plugin-pages';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/_variables.scss' as *;`
      }
    }
  },
  plugins: [
    Vue(),
    Pages({
      dirs: ['src/pages'],
      onRoutesGenerated: (routes) => [...routes]
    }),
    Layouts({
      defaultLayout: 'default',
      layoutsDirs: 'src/layouts'
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver()],
      dts: true
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      dts: 'auto-imports.d.ts',
      vueTemplate: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages/', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/api/axios.ts', import.meta.url)),
      '@enums': fileURLToPath(new URL('./src/enums/', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores/', import.meta.url)),
      '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@directives': fileURLToPath(new URL('./src/directives', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 5000
  }
});
