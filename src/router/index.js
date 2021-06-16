import Vue from 'vue'
import Router from 'vue-router'

// import PageDashboard from '../page/PageDashboard'
// import Page404 from '../page/Page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
      // component: PageDashboard
    },
    {
      path: '/dashboard/:page',
      name: 'dashboardPage',
      component: () => import('../page/PageDashboard')
      // component: PageDashboard
    },
    {
      path: '/dashboard/add/payment/:category',
      name: 'dashboardCategory',
      component: () => import('../page/PageDashboard')
      // component: PageDashboard
    },
    // {
    //   path: '/dashboard/add/payment/*=:price',
    //   name: 'dashboardPrice',
    //   component: PageDashboard
    // },
    {
      path: '/dashboard/add/payment*',
      name: 'dashboardAll',
      component: () => import('../page/PageDashboard')
      // component: PageDashboard
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import('../page/Page404')
      // component: Page404
    }
  ]
})
