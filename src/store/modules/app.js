import Vue from 'vue'
const state = {
  searchValue: '',
  userInfo: null,
  loading: false
}

const actions = {
  toLogin({ commit }, info) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$Http.login(info).then(res => {
        window.localStorage.setItem('access_token', res.access_token)  // 存储进 localStroage
        commit('USERINFO', res.userInfo) // 把 userInfo 存进 Vuex
        resolve(res)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$Http.getUserInfo().then(res => {
        commit('USERINFO', res.userInfo) // 把 userInfo 存进 Vuex
        resolve(res)
      }).catch((error) => {
        commit('USERINFO', null)
        window.localStorage.removeItem('access_token')
        reject(error)
      })
    })
  },
  logOut({ commit }) { // 退出登录
    return new Promise((resolve, reject) => {
      commit('USERINFO', null)        // 情况 userInfo
      window.localStorage.removeItem('access_token')
      resolve()
    })
  }

}

const mutations = {
  SET_SEARCH(state, searchValue) {
    state.searchValue = searchValue
  },
  USERINFO: (state, info) => {
    state.userInfo = info
  },
  SET_LOADING(state, loading) {
    state.loading=loading
  }
}

export default {
  state,
  actions,
  mutations
}
