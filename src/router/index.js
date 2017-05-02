import Vue from 'vue'
import Router from 'vue-router'

/*
知识重温
*/

const Zscw = resolve => {
  require.ensure(['../views/zscw.vue'], () => {
    resolve(require('../views/zscw.vue'))
  })
}

Vue.use(Router)

const Routers = [
  {
    path: '/',
    name: 'home',
    component: Zscw
  },
  {
    path: '/zscw',
    name: 'zscw',
    component: Zscw
  },
  {
    path: '/zxcs',
    name: 'zxks',
    component(resolve) {
      require.ensure(['../views/zxks.vue'], () => {
        resolve(require('../views/zxks.vue'))
      })
    }
  },
  {
    path: '/zscj',
    name: 'zscj',
    component(resolve) {
      require.ensure(['../views/zscj.vue'], () => {
        resolve(require('../views/zscj.vue'))
      })
    }
  },
  {
    path: '/zxcs/list',
    name: 'list',
    component(resolve) {
      require.ensure(['../views/list.vue'], () => {
        resolve(require('../views/list.vue'))
      })
    }
  },
  {
    path: '/zscw/paper/:id',
    name: 'paper',
    component(resolve) {
      require.ensure(['../views/paper.vue'], () => {
        resolve(require('../views/paper.vue'))
      })
    }
  },
  {
    path: '/zxcs/paper',
    name: 'zxcspaper',
    component(resolve) {
      require.ensure(['../views/lx_detail.vue'], () => {
        resolve(require('../views/lx_detail.vue'))
      })
    }
  },
  {
    path: '/resetpasswd',
    component(resolve) {
      require.ensure(['../views/passwd.vue'], () => {
        resolve(require('../views/passwd.vue'))
      })
    }
  }
]
export default new Router({
  routes: Routers
})
