
import Vue from 'vue'
import hook from './hook'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '主页'
      },
      component: () => import('../views/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        title: 'search'
      },
      component: () => import('../views/search.vue')
    }
  ]
})

for (let h in hook) router[h](hook[h])

export default router
