
import Vue from 'vue'
import hook from './hook'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/index' //重定向到登录页面 
    }, 
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
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'login'
      },
      component: () => import('../views/login.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      meta: {
        title: 'personal'
      },
      component: () => import('../views/personal.vue')
    },
    {
      path: '/pagedetail',
      name: 'pagedetail',
      meta: {
        title: 'pagedetail'
      },
      component: () => import('../views/page-detail.vue')
    }
  ]
})

for (let h in hook) router[h](hook[h])

export default router
