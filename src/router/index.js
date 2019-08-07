import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'//组件的位置
import Login from '@/components/Login'
import Fail from '@/components/Fail'
import Home from '@/components/home'
import CustInfo from '@/components/CustInfo'
import CustList from '@/components/CustList'
import HomePage from '@/components/HomePage'
import Index from '@/components/index'
import Foot from '@/components/foot'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',//系统的首页面url
      name: 'Login',
      component: Login//对应上文的import
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Fail',
      name: 'Fail',
      component: Fail
    },{
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/CustInfo',
      name: 'CustInfo',
      component: CustInfo
    },{
      path: '/CustList',
      name: 'CustList',
      component: CustList
    },{
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },{
      path: '/Index',
      name: 'Index',
      component: Index
    },{
      path: '/Foot',
      name: 'Foot',
      component: Foot
    }
  ]
})
