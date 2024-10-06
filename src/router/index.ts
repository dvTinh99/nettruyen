import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomePage.vue'
import DetailView from '@/pages/DetailView.vue'

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/truyen-tranh/:slug', component: DetailView, name: 'detail' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
