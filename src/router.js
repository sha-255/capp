import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./exeptions/NotFound.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./viewes/HomeView.vue')
    },
    {
      path: '/coins-list',
      name: 'CoinList',
      component: () => import('./viewes/CoinListView.vue')
    }
  ]
})
