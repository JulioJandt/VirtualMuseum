import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Barroco from '../views/Barroco.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/barroco',
    name: 'Barroco',
    component: Barroco,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
