const Mock = require('mockjs')
const { asyncRoutes, constantRoutes } = require('./routes.js')
const a = [{name:"客户一",phone:"11111",sex:"男"},{name:"客户二",phone:"11111",sex:"男"},{name:"客户三",phone:"11111",sex:"女"},{name:"客户四",phone:"11111",sex:"男"},{name:"客户五",phone:"11111",sex:"女"}]

module.exports = [
  {
    url: '/vue-element-admin/Customer/query',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: a
      }
    }
  },
]
