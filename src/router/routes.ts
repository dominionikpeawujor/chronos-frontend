import { RouteRecordRaw } from 'vue-router';
import LoginPage from 'src/pages/LoginPage.vue';
import HomePage from 'src/pages/HomePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'LoginPage', component: LoginPage },
      { path: 'home', name: 'HomePage', component: HomePage },
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
