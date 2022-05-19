import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'dashboard',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/main/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/auth/Register.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
