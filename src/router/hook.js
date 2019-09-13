import store from "../store";

export default {

  beforeEach: (to, from, next) => {
    document.title = to.meta.title
    const access_token = window.localStorage.getItem('access_token')
    const userInfo = store.state.app.userInfo

    if (to.meta.requiresAuth) {
      if(!userInfo) {
        if(access_token){
          store.dispatch('getUser').then(()=>{
            next()
          }).catch(()=>{
            next({
              path: '/login',
              query: { redirect: to.fullPath }
            })
          })
        } else {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }
      }else {
        next()
      }
    } else {
      next()
    }
  }
}
