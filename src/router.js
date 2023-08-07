import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./exeptions/not-found.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./viewes/home-view.vue')
    },
    {
      path: '/coins-list',
      name: 'CoinList',
      component: () => import('./viewes/coin-list-view.vue')
    }
  ]
})
