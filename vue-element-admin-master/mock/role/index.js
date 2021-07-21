const Mock = require('mockjs')
const { deepClone } = require('../utils')
const { asyncRoutes, constantRoutes } = require('./routes.js')

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.',
    routes: routes
  },
  {
    key: 'editor',
    name: 'editor',
    description: 'Normal Editor. Can see all pages except permission page',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'visitor',
    name: 'visitor',
    description: 'Just a visitor. Can only see the home page and the document page',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]
const a = [{id:1,name:"张三",role:"经理"},{id:2,name:"李四",role:"员工"},{id:3,name:"王五",role:"员工"},{id:4,name:"金六",role:"员工"},{id:5,name:"赵七",role:"员工"}]
const b = [{name:"客户一",phone:"11111",sex:"男"},{name:"客户二",phone:"11111",sex:"女"},{name:"客户三",phone:"11111",sex:"男"},{name:"客户四",phone:"11111",sex:"女"},{name:"客户五",phone:"11111",sex:"男"},]
module.exports = [
  // mock get all routes form server
  {
    url: '/vue-element-admin/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },

  // mock get all roles form server
  {
    url: '/vue-element-admin/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },
  {
    url: '/vue-element-admin/role',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: a
      }
    }
  },
  {
    url: '/vue-element-admin/cus',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: b
      }
    }
  },
  // add role
  {
    url: '/vue-element-admin/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },
  // delete role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
