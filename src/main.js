
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import 'amfe-flexible/index.js'
import {Button, List,  Swipe, Pagination, Tab , Tabs,Tabbar,TabbarItem,Lazyload, SwipeItem,Toast,NoticeBar,Icon,NavBar} from 'vant'
// import '@/theme/common.less'
import http from '@/plugins/axios/http'

Vue.use(Button).use(List).use(Swipe).use(Pagination).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem).use(Lazyload).use(SwipeItem).use(Toast).use(NoticeBar).use(Icon).use(NavBar)
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
