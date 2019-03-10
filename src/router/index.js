import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../components/home/Home.vue'
import ProductList from '../components/productList/ProductList.vue'
import Details from '../components/details/Details.vue'
import Person from '../components/person/Person.vue'
import Sort from '../components/sort/ProductSort.vue'
import Cart from '../components/cart/Cart.vue'
import Login from '../components/login/Login.vue'
import UserLogin from '../components/login/userLogin.vue'
import UserRegist from '../components/login/userRegist.vue'

import TestSwiper from '../components/testSwiper.vue'
import TestVux from '../components/testVux.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path:'/home',component:Home},
    {path:'/productlist',component:ProductList},
    {path:'/details',component:Details},
    {path:'/person',component:Person},
    {path:'/sort',component:Sort},
    {path:'/cart',component:Cart},
    {path:'/login',component:Login,
      children:[
        {path:'log',component:UserLogin},
        {path:'reg',component:UserRegist}
      ]
    },

    {path:'/testvux',component:TestVux},
    {path:'/testswiper',component:TestSwiper}
  ],
  linkActiveClass: 'mui-active'
})
