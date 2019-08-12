import Vue from 'vue'
const state = {
  searchValue: '',
  access_token: null,
  userInfo: null,
  loginStatus: false
}

const actions = {
  toLogin({ commit }, info) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$Http.login(info).then(res => {
        window.localStorage.setItem('access_token', res.access_token)  // 存储进 localStroage
        resolve(res)
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  },
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$Http.getUserInfo().then(res => {
        commit('USERINFO', res.userInfo) // 把 userInfo 存进 Vuex
        commit('LOGINSTATUS', true)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  logOut({ commit }) { // 退出登录
    return new Promise((resolve, reject) => {
      commit('USERINFO', null)        // 情况 userInfo
      commit('LOGINSTATUS', false)  // 登录状态改为 false
      commit('LOGIN', '')          // 清除 token
      window.localStorage.removeItem('access_token')
    })
  }

}

const mutations = {
  SET_SEARCH(state, searchValue) {
    state.searchValue = searchValue
  },
  LOGIN: (state, value) => {
    state.access_token = value
  },
  USERINFO: (state, info) => {
    state.userInfo = info
  },
  LOGINSTATUS: (state, bool) => {
    state.loginStatus = bool
  }

}

export default {
  state,
  actions,
  mutations
}
