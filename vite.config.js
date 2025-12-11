import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import markdown from 'unplugin-vue-markdown/vite'
import Prism from 'markdown-it-prism'

export default defineConfig({
  plugins: [
    markdown({
      wrapperClasses: 'markdown-body',
      markdownItUses: [Prism],
    }),
    vue({
      include: [/\.vue$/, /\.md$/], // 支持 .md 文件作为 Vue 组件
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
