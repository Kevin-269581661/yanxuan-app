// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'
//配置axios
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
//引入QS解析模块
import qs from 'Qs'
Vue.prototype.qs = qs


// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    isLogin:false,  //用户是否登录
    cartCount:0,   //购物车数量
    userInfo:null  //用户登录信息
  },
  mutations:{
    //修改购物车总数
    increment(state,count){state.cartCount+=parseInt(count)},  //
    substrack(state){state.cartCount--},
    clear(state){state.cartCount = 0},
    //修改用户登录状态
    userLogin(state){state.isLogin = true},
    userLogout(state){state.isLogin = false},
    //修改用户登录信息
    userInfoChange(state,info){state.userInfo = info}
  },
  getters:{
    optCartCount(state){return state.cartCount}, //获取购物车数量
    optIsLogin(state){return state.isLogin}  //获取登录状态
  }
})


//引入组件库样式文件
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.css'
//引入字体图标样式
import '../static/icon-font/iconfont.css'
//引入mint-ui组件
import { TabContainer, TabContainerItem,Button,Cell,Swipe,SwipeItem,Navbar,TabItem} from 'mint-ui'
//注册组件
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name,Button);
Vue.component(Cell.name,Cell);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Navbar.name,Navbar);
Vue.component(TabItem.name,TabItem);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
