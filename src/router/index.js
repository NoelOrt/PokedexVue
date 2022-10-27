import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/amPoke/:pokeid',
      name: 'amPoke',
      props: true,
      component: () => import('../views/amPokeView.vue')
    },
    {
      path: '/batalla',
      name: 'batalla',
      props: true,
      component: () => import('../views/BatallaView.vue')
    },
    {
      path: '/vistas/:id',
      name: 'vistas',
      component: () => import('../views/VistasView.vue')
    }
  ]
})

export default router
