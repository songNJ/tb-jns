
import axios from './index'

export default {

  getUserInfo:data=>axios.post('/getUserInfo',data),
  getIndexList:data=>axios.post('/getIndexList',data),
  getSearchList:data=>axios.post('/getSearchList',data),
  getIntroList:data=>axios.post('/getSearchList',data),
  getHisList:data=>axios.post('/getHisList',data),
  login:data=>axios.get('/login',data),
  reg:data=>axios.get('/reg',data),
}
