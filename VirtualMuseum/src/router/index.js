import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Barroco from '../views/Barroco.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/barroco',
      name: 'barroco',
      component: Barroco
    },
  ]
})

export default router
