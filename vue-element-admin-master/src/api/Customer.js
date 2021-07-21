import request from '@/utils/request'

export function getCus() {
  return request({
    url: '/vue-element-admin/Customer/query',
    method: 'get'
  })
}
