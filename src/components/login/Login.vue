<template>
  <div class="app-login">
    <!-- 顶部返回上一页 -->
    <div class="go-back">
      <span class="iconfont icon-shouye" @touchstart="handleBack"></span>
      <span class="header-title">心选小铺</span>
      <span class="iconfont icon-sousuo"></span>
    </div>
    <!-- logo -->
    <div class="per-top">
      <div class="logo">
        <img src="http://127.0.0.1:3030/img/person/logo01.png" alt="">
      </div>
    </div>
    <!-- 使用了嵌套子路由 '/login/log' 和 '/login/reg' -->
    <router-view></router-view>
    <!-- 点击切换注册 -->
    <div class="per-bottom" @touchstart="handleChangeState">
      {{loginSate ? "已注册，点我登录" : "还没注册？点我注册" }}
      <span class="iconfont icon-xiangyoujiantou"></span>
    </div>
    <!-- 底部 -->
    <div class="other-login" v-show="!loginSate">
      <div>
        <span class="mui-icon mui-icon-weixin"></span>微信
      </div>
      <div>
        <span class="mui-icon mui-icon-qq"></span>QQ
      </div>
      <div>
        <span class="mui-icon mui-icon-weibo"></span>微博
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return {
      loginSate:false  //当前登录状态 true为注册 false为登录
    }
  },
  methods:{
    handleBack(){
      this.$router.push('/home');
    },
    // 点击注册登录切换按钮
    handleChangeState(){
      if(!this.loginSate){
        this.$router.push('/login/reg');
      }else{
        this.$router.push('/login/log');
      }
      this.loginSate = !this.loginSate;
    }
  }
}
</script>
<style lang="css" scoped>
  /* 顶部返回 */
  .go-back{
    position:fixed;
    top:0;
    height:0.45rem;
    width:100%;
    background-color:#fff;
    padding:0 0.1rem;
    z-index: 99;
    border-bottom: 1px solid #ececec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .icon-sousuo,.icon-shouye{
    font-size: 0.25rem;
    color:#666;
  }
  .header-title{
    font-size: 0.19rem;
    color:#333;
    font-weight: bold;
  }
  /* logo */
  .app-login{
    background: #F2F5F4;
    padding-top:0.45rem;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
  }
  .per-top{
    height:2.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo{
    height: 0.45rem;
  }
  .logo img{
    height: 100%;
  }
  /* 切换按钮 */
  .per-bottom{
    text-align:right;
    font-size: 0.14rem;
    color:#666;
    margin-top:0.2rem;
    padding-right:0.1rem;
  }
  /* 底部其他登录 */
  .other-login{
    position:absolute;
    bottom:0.4rem;
    height: 0.2rem;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.13rem;
    color:#999;
  }
  .other-login div{
    padding:0 0.2rem;
    line-height: 0.2rem;
    height: 0.2rem;
  }
  .other-login div:nth-child(2){
    border-left: 1px solid #999;
    border-right: 1px solid #999;
  }
  .mui-icon{
    margin-right:0.05rem;
  }
  .mui-icon-weixin{
    font-size: 0.17rem;
  }
  .mui-icon-qq{
    font-size: 0.15rem;
  }
  .mui-icon-weibo{
    font-size: 0.2rem;
  }
</style>
