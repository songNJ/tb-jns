
import axios from './index'

export default {
  /** 查询订单列表 */
  queryOrderList: data => axios.post('/mbp-vas/vas/lhs/order/v1/list', data),
  querySearchList: data => axios.post('/search', data)
}
