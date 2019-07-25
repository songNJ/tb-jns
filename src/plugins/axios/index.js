
import _axios from 'axios'
import Vue from 'vue'

// 基本参数
let options = {
  baseURL: '/api/jns/tb',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

// 根据配置创建axios
let axios = _axios.create(options)

// http request 请求拦截器
axios.interceptors.request.use(
  request => {
    return request
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 请求拦截器
axios.interceptors.response.use(
  response => {
    // _config.response.handle(config)
    return response
  },
  err => {
    // _config.response.err(err)
    return Promise.reject(err)
  }
)

function request (method, url, data, config) {
  // 所需请求的参数
  let _data = {
    requestHeader: {
      'systemName': '',
      'version': '',
      'modelNumber': '',
      'clentOs': '',
      'osVersion': '',
      'osImage': ''
    },
    params: {
      // access_token: sessionStorage.getItem('access_token'),
      ...data
    }
  }

  // 根据请求方式将请求参数放在不同的地方
  let _config = { ...config }
  if (method.toUpperCase() === 'GET') {
    _config.params = _data
  } else {
    _config.data = _data
  }

  return axios({
    method,
    url,
    ..._config
  }).then(resp => {
    // 判断条件是否符合
    if (resp.data.returnCode === '0') {
      return resp.data
    }

    return Promise.reject(new Error(resp.data.errorInfo || '服务器异常，请重试'))
  }).catch(err => {
    Vue.prototype.$toast(err.message)
    return Promise.reject(new Error(err))
  })
}
let axiosInstance = {}
let methodList = ['post', 'get', 'delete', 'put']
methodList.forEach(method => {
  axiosInstance[method] = (url, data, config = {}) => request(method, url, data, config)
})

export default axiosInstance
