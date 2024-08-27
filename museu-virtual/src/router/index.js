import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Barroco from '../views/Barroco.vue';

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
