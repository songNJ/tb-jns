
import Vue from 'vue'
import hook from './hook'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      meta: {
        title: 'test'
      },
      component: () => import('../views/test.vue')
    }
  ]
})

for (let h in hook) router[h](hook[h])

export default router
