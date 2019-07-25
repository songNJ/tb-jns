
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import 'amfe-flexible/index.js'
import {Button, Cell, CellGroup, List,  Swipe, Pagination, Tab , Tabs,Tabbar,TabbarItem,Lazyload, SwipeItem,Toast} from 'vant'
// import '@/theme/common.less'
import http from '@/plugins/axios/http'

Vue.use(Button).use(Cell).use(CellGroup).use(List).use(Swipe).use(Pagination).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Lazyload).use(SwipeItem).use(Toast)
Vue.use(http)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
})
