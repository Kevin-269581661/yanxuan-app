<template>
  <div>
    <!-- 头部 -->

    <router-view></router-view>
    <!--底部-->
    <nav class="mui-bar mui-bar-tab" v-show="tabbarShow">
			<router-link class="mui-tab-item"  to="/home">
				<span class="mui-icon iconfont icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/sort">
				<span class="mui-icon iconfont icon-fenlei"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
          <span class="mui-icon iconfont icon-tubiaozhizuomoban"><span class="mui-badge">{{$store.getters.optCartCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/person">
				<span class="mui-icon iconfont icon-wode"></span>
				<span class="mui-tab-label">个人</span>
			</router-link>
		</nav> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabbarShow:true
    }
  },
  watch:{
    $route(to,from){
      //console.log(to)
      console.log("跳到"+to.path)
      if(to.path == '/person'){
        if(!this.$store.getters.optIsLogin){
          this.$router.push('/login/log');  
        }
      }else if(to.path == '/login/log' || to.path == '/login/reg'){
        this.tabbarShow = false;
      }else{
        this.tabbarShow = true;
      }
      //console.log("从"+from.path+"跳转过来")
      
      //console.log(this.tabbarShow)
    }
  },
  methods: {
    handleTap(){}
  },
}
</script>

<style scoped>
  .mui-bar{
		box-shadow: none !important;
		border-top:1px solid #F2F2F2;
  }
  .mui-bar-tab .mui-tab-item.mui-active {
    color: #E43929;
  }
</style>
