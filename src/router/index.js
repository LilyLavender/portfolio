import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Resume from '@/views/Resume.vue';
import Development from '@/views/Development.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/development', component: Development }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
