import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import Dashboard from '@/views/main/Dashboard.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Store from '../store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'dashboard',
    component: MainLayout,
    meta: { requiredAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/',
    redirect: 'login',
    meta: { requiredAuth: false },
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !Store.state.status.isLoggedIn) {
    return next('/login');
  }
  if (!to.meta.requiredAuth && Store.state.status.isLoggedIn) {
    return next('/');
  }
  next();
});

export default router;
