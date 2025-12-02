import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: home }],
})

export default router
