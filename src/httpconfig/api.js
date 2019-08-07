import ajax from './flyio'
import Toast from '../../static/vant-weapp/toast/toast.js'
export function findAllByTenantCodeAndType(postData) {
 /* wx.showToast({
    title: '成功',
    icon: 'success',
    duration: 2000
  })
  return false*/
  return ajax.get("/moby-mall/shop/api/v1/shops/findScShopByTenantCode",postData)
}

