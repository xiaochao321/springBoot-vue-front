import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
// import HelloWorld from '@/components/HelloWorld'//组件的位置
// import Login from '@/components/Login'
// import Fail from '@/components/Fail'
// import Home from '@/components/home'
// import CustInfo from '@/components/CustInfo'
// import CustList from '@/components/CustList'
// import HomePage from '@/components/HomePage'
// import Index from '@/components/index'
// import Foot from '@/components/foot'
Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/',//系统的首页面url
    //   name: 'Login',
    //   component: Login//对应上文的import
    // },{
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },{
    //   path: '/Fail',
    //   name: 'Fail',
    //   component: Fail
    // },{
    //   path: '/Home',
    //   name: 'Home',
    //   component: Home
    // },{
    //   path: '/CustInfo',
    //   name: 'CustInfo',
    //   component: CustInfo
    // },{
    //   path: '/CustList',
    //   name: 'CustList',
    //   component: CustList
    // },{
    //   path: '/HomePage',
    //   name: 'HomePage',
    //   component: HomePage
    // },{
    //   path: '/Index',
    //   name: 'Index',
    //   component: Index
    // },{
    //   path: '/Foot',
    //   name: 'Foot',
    //   component: Foot
    // },
    {
      path: '/write/:id?',
      component: r => require.ensure([], () => r(require('@/views/blog/BlogWrite')), 'blogwrite'),
      meta: {
        requireLogin: true
      },
    },
    {
      path: '',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: r => require.ensure([], () => r(require('@/views/Index')), 'index')
        },
        {
          path: '/log',
          component: r => require.ensure([], () => r(require('@/views/Log')), 'log')
        },
        {
          path: '/archives/:year?/:month?',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogArchive')), 'archives')
        },
        {
          path: '/messageBoard',
          component: r => require.ensure([], () => r(require('@/views/MessageBoard')), 'messageboard')
        },
        {
          path: '/view/:id',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogView')), 'blogview')
        },
        {
          path: '/:type/all',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogAllCategoryTag')), 'blogallcategorytag')
        },
        {
          path: '/:type/:id',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogCategoryTag')), 'blogcategorytag')
        }
      ]
    },
    {
      path: '/login',
      component: r => require.ensure([], () => r(require('@/views/Login')), 'login')
    },
    {
      path: '/register',
      component: r => require.ensure([], () => r(require('@/views/Register')), 'register')
    }
  ]
})
