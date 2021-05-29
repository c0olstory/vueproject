import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import Page404 from '../page/Page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: PageDashboard
    // },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/add/payment/:category',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '*',
      name: 'notfound',
      component: Page404
    }
  ]
})
