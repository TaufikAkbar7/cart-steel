import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../modules/home/views/HomeUI.vue'),
      meta: {
        layout: 'AppLayoutDefault'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../modules/cart/views/CartUI.vue'),
      meta: {
        layout: 'AppLayoutDefault'
      }
    }
  ]
})

export default router
