import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomePage.vue'
import DetailView from '@/pages/DetailView.vue'
import SearchManga from '@/pages/SearchManga.vue'
import ReadManga from '@/pages/ReadManga.vue'

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/truyen-tranh/:slug', component: DetailView, name: 'detail' },
  { path: '/truyen-tranh/:slug/:chapter', component: ReadManga, name: 'read' },
  { path: '/tim-truyen', component: SearchManga, name: 'search' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
