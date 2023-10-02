import { createRouter, createWebHistory } from 'vue-router';
import AboutView from './components/About.vue'; // Updated path

const routes = [
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;