import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/dashboard/:page',
      name: 'dashboardPage',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/dashboard/add/payment/:category',
      name: 'dashboardCategory',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/dashboard/add/payment*',
      name: 'dashboardAll',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import('../page/Page404')
    }
  ]
})
