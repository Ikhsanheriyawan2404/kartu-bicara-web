import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '@/views/GameView.vue'
import AboutView from '@/views/AboutView.vue'
import InputView from '@/views/InputView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/input',
      name: 'input',
      component: InputView,
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
    {
      path: '/tentang',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
