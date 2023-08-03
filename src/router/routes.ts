import { RouteRecordRaw } from 'vue-router';
import LoginPage from 'src/pages/LoginPage.vue';
import HomePage from 'src/pages/HomePage.vue';
import CartPage from 'src/pages/CartPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'auth', name: 'LoginPage', component: LoginPage },
      { path: '', name: 'HomePage', component: HomePage },
      { path: 'cart', name: 'CartPage', component: CartPage },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
