import { createRouter, createWebHistory } from 'vue-router';
import Barroco from '../views/Barroco.vue';

const routes = [
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
