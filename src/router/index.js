import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Resume from '@/views/Resume.vue';
import Development from '@/views/Development.vue';
import Photography from '@/views/Photography.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/development', component: Development },
  { path: '/photography', component: Photography },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
