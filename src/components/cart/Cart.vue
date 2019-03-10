<template>
  <div class="app-cart">
    <!-- 顶部导航 -->
    <div class="cart-top">
      <span>购物车</span>
      <div class="get-card">领券</div>
    </div>
    <!-- 顶部承诺栏 -->
    <div class='promiss'>
      <div>
        <div class='circle'></div>30天无忧退货
      </div>
      <div>
        <div class='circle'></div>48小时快速退款
      </div>
      <div>
        <div class='circle'></div>满88元免邮费
      </div>
    </div>
    <!-- 加入购物车的商品栏 -->
    <div class='product-con d-none'>
      <!-- 滑动删除 -->
      <div class='pro-item'>
        <swipeout  >
          <swipeout-item :threshold=".5" underlay-color="#eee">
            <div slot="right-menu">
              <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">
                <span class="mui-icon mui-icon-trash"></span>
              </swipeout-button>
            </div>
            <div slot="content" class="demo-content vux-1px-tb">
              <icon type="circle" class="select-icon"></icon>
              <div class='pro-img'>
                <img src='http://127.0.0.1:3030/img/products/product09.png'>
              </div>
              <div class='info-right'>
                <div class='pro-title ell'>
                  <span class='mark'>全场满减</span>
                  <span class='title'>男士真皮休闲夹克</span>
                </div>
                <div class='guige ell'>
                  <div class='pro-guige'>黑色休闲款
                    <div class='drop-icon'></div>
                  </div>
                </div>
                <div class='money'>
                  <span class='price'>¥159.00</span>
                  <div class='count'>
                    <div class='btn'>-</div>
                    <div class="number">1</div>
                    <div class='btn act-btn'>+</div>
                  </div>
                </div>
              </div>   
            </div>
          </swipeout-item>
        </swipeout>
        <div class='split'></div>
      </div>
    </div>
    <!-- 购物车为空-显示 -->
    <div class=''>
      <div class='empty-cart'>
        <div class='empty-content'>
          <img src='http://127.0.0.1:3030/img/products/empty-cart.png' >
          <div class="empty-info">去添加点什么吧</div>
        </div>
        <router-link to="/login/log" class="login-button" v-show="!$store.getters.optIsLogin">登录</router-link>
      </div>
      <div class='split'></div>
    </div>
    <!-- 底部结算 -->
    <div class='con-bottom'>
    <div class='footer-left'>
      <icon :type='allSelect?"success":"circle"'></icon>
      <span class='select-info'>已选（{{count}}）</span>
    </div>
    <div class='footer-right'>
      <span class='total'>合计：¥12.00</span>
      <div class='buy' catchtap='toBuy'>下单</div>
    </div>
  </div>
  </div>
</template>
<script>
// 滑动删除组件
import { Swipeout, SwipeoutItem, SwipeoutButton,Icon} from 'vux'
export default {
  data(){
    return {
      changeValue:1,
      allSelect:false,
      count:0
    }
  },
  methods:{
    onButtonClick (type) {
      alert('on button click ' + type)
    }
    
  },
  components:{
    Swipeout, 
    SwipeoutItem, 
    SwipeoutButton,
    Icon
  }
}
</script>
<style lang="css" scoped>
  /* 顶部 */
  .cart-top{
    position: relative;
    background-color: #fff;
    height:0.45rem;
    line-height: 0.45rem;
    text-align:center;
    color:#333;
    font-size: 0.18rem;
    padding:0 0.15rem;
    border-bottom: 1px solid #d9d9d9;
  }
  .cart-top .get-card{
    height:0.2rem;
    line-height: 0.19rem;
    position: absolute;
    top:50%;
    transform: translate(0,-50%);
    right:0.15rem;
    font-size: 0.14rem;
    color:#B4282D;
    padding:0 0.15rem;
    border-radius: 0.1rem;
    border:1px solid #B4282D;
  }
  /* 顶部承诺 */
  .promiss{
  display: flex;
  justify-content: space-around;
  font-size: 0.12rem;
  color:#6C6C6C;
  height:0.4rem;
  line-height: 0.4rem;
  background-color: #F4F4F4;
  }
  .circle{
    display: inline-block;
    vertical-align: middle;
    width:0.05rem;
    height:0.05rem;
    border:1px solid #6C6C6C;
    border-radius: 50%;
    margin-right: 0.05rem;
  }
  /* 商品列表 */
  .product-con{
    margin-bottom:1.25rem;
  }
  .pro-item{
    position: relative;
  }
  .demo-content{
    height:1.14rem;
    padding:0 0.1rem 0 0.05rem;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  .vux-swipeout-button{
    border-radius:0;
    font-size: 0.16rem;
  }
  .select-icon{
    margin-right:0.05rem; 
  }
  .is-selected{
    color:#AC282D;
  }
  .pro-img{
    width:0.8rem;
    height:0.8rem;
    background-color: #F4F4F4;
    margin-right:8px;
  }
  .pro-img>img{
    width:100%;
    height:100%;
  }
  .info-right{
    width:65%;
    height:0.8rem;
  }
  .info-right .pro-title{
    height:0.22rem;
    line-height: 0.22rem;
    margin-bottom: 0.03rem;
  }
  .info-right .mark{
    color:#F48F19;
    font-size: 0.12rem; 
  }
  .info-right .title{
    color:#383838;
    font-size: 0.13rem;
    margin-left:0.03rem;
  }
  .guige{
    margin-bottom: 0.05rem;
  }
  .info-right .pro-guige{
    display: inline-block;
    line-height: 0.2rem;
    padding:0 0.05rem;
    color:#6D6D6D;
    font-size: 0.12rem;
    background-color: #F4F4F4;
    vertical-align: top;
    margin-right:0.05rem;
  }
  .pro-guige .drop-icon{
    display: inline-block;
    width:0.05rem;
    height:0.05rem;
    border-right:1px solid #ACACAC;
    border-bottom:1px solid #ACACAC;
    vertical-align: middle; 
    transform: rotate(45deg);
    margin:0 0 0.03rem 0.03rem;
  }
  .money{
    display: flex;
    justify-content: space-between;
    line-height: 0.25rem;
  }
  .price{
    color:#333333;
    font-size: 0.14rem;
    line-height: 0.28rem;
  }
  .count{
    white-space:nowrap;
    display: flex;
  }
  .count .btn{
    width:0.42rem;
    height:0.26rem;
    display: inline-block;
    border:1px solid #7F7F7F;
    text-align: center;
    color:#7F7F7F;
    font-size:0.23rem;
  }
  .count .number{
    display: inline-block;
    width:0.4rem;
    height:0.26rem;
    border: 1px solid #7F7F7F;
    vertical-align: top;
    margin: 0 -1px;
    text-align: center;
    font-size: 0.15rem;
    color:#333333;
  }
  .count .btn-disabled{
    border-color:#C5C5C5;
    color:#C5C5C5;
  }
 /* 底部结算 */
  .con-bottom{
    height:0.5rem;
    line-height: 0.5rem;
    position:fixed;
    bottom:0.5rem;
    width:100%;
    display: flex;
    justify-content: space-between;
    padding-left: 0.05rem;
    box-sizing: border-box;
    border-top:1px solid #F4F4F4;
    overflow: hidden;
    background-color:#fff; 
    z-index: 100
  }
  .con-bottom .select-info{
    font-size: 0.14rem;
    color:#6B6B6B;
  }
  .footer-right .total{
    font-size: 0.15rem;
    color:#AD1318;
  }
  .footer-right .buy{
    display: inline-block;
    height:100%;
    width:1.1rem;
    background-color: #B4282D;
    text-align: center;
    font-size: 0.14rem;
    color:#fff;
    vertical-align: top;
  }
   /* 购物车为空显示 */
  .empty-cart{
    height:2.78rem;
    width:100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
  .empty-cart image{
    width:1.5rem;
    height:1.22rem;
  }
  .empty-content{
    text-align: center;
  }
  .empty-info{
    font-size: 0.14rem;
    color:#7F7F7F;
  }
  .login-button{
    height:0.46rem;
    width:65%;
    color: #fff;
    background-color: #b4282d;
    border-radius: 0.04rem;
    line-height: 0.46rem;
    text-align: center;
    font-size: 0.16rem;
    margin-top:0.25rem;
  }
</style>