import store from "../store";

export default {

  beforeEach: (to, from, next) => {
    document.title = to.meta.title
    const access_token = window.localStorage.getItem('access_token')
    const status = store.state.app.loginStatus
    
    if (to.meta.requiresAuth) {
      if (access_token) {
        if(!status){
          store.dispatch('getUser')
        }
        next()
      } else {
        store.dispatch('logOut')
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    } else {
      if(access_token&&!status){
        store.dispatch('getUser')
      }
      next()
    }
  }
}
