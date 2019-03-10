<template>
  <div class="app-details">
    <!-- 顶部轮播 -->
    <div class="app-swipe">
      <mt-swipe :auto="3000" :showIndicators=false>
        <mt-swipe-item v-for="(item,index) in list" :key="index">
          <img :src="item.img_url" :alt="index"/>
          <div class="img-count">1/4</div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 商品介绍 -->
    <div class="pro-intro">
      <div class="intro-item">
        <div class="intro-item-left">
          <img src="http://127.0.0.1:3030/img/pro-intro/p03-i03.jpg" alt="">
        </div>
        <div class="intro-item-right">
          <div>金属辅料</div>
          <div>光泽感强</div>
        </div>
      </div>
      <div class="intro-item">
        <div class="intro-item-left">
          <img src="http://127.0.0.1:3030/img/pro-intro/p03-i01.jpg" alt="">
        </div>
        <div class="intro-item-right">
          <div>金属辅料</div>
          <div>光泽感强</div>
        </div>
      </div>
      <div class="intro-item">
        <div class="intro-item-left">
          <img src="http://127.0.0.1:3030/img/pro-intro/p03-i02.jpg" alt="">
        </div>
        <div class="intro-item-right">
          <div>金属辅料</div>
          <div>光泽感强</div>
        </div>
      </div>
    </div>
    <!-- 价格 -->
    <div class='product-content'>
      <div class='title'>男式真皮休闲夹克</div>
      <div class='subtitle'>儒雅风度，小羊皮的真实质感</div>
      <div class='price'>
        <span class='rmb'>¥</span>
        <span class='how'>1499</span>
        <span class='old-price'>¥1688</span>
      </div>
      <div class='mark'>
        <span>三石福利价</span>
        <div class='mark-icon'></div>
      </div>
    </div>
    <!-- 分隔条 -->
    <div class='split'></div>
    <!-- 规格 -->
    <div class='pro-guige'>
      <div class='pro-item' >
        <div>数量规格选择</div>
        <div class='toright-icon'></div>
      </div>
      <div class='pro-item'>
        <div>配送</div>
        <div class='toright-icon'></div>
      </div>
      <div class='pro-item'>
        <div>服务</div>
        <div class='toright-icon'></div>
      </div>
    </div>
    <!-- 底部tabbar -->
    <div class='content-bottom'>
      <div class='to-home' >
        <span class="mui-icon mui-icon-home"></span>
        <div>首页</div>
      </div>
      <div class='to-cart' >
         <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <div>购物车</div>
      </div>
      <div class='add-cart' >加入购物车</div>
      <div class='to-buy' >立即购买</div>
    </div>
    <!-- 添加购物车弹窗 -->
    <!-- 遮罩 -->
    <div class='con-wrap' v-show="addShow">
      <!-- 主体 -->
      <div class='add-content'>
        <!-- 关闭按钮 -->
        <div class='close' >X</div>
        <!-- 内容 -->
        <div class='con-top'>
          <div class='pro-img'>
            <img src='http://127.0.0.1:3030/img/products/product100.jpg' >
          </div>
          <div class='info-right'>
            <div class='p-price'>价格：¥156</div>
            <div class='sel-info'>请选择规格属性</div>
          </div>
        </div>
        <div class="out-warper">
          <div class="inner-content">
             <!-- 选择颜色 -->
            <div class='sel-title'>颜色</div>
            <div class='sel-color'>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
              <div class='color-item '>黑色休闲款</div>
            </div>
            <!-- 选择数量 -->
            <div class='sel-title'>数量</div>
            <div class='count'>
              <div class='btn ' >-</div>
              <input type='number' v-model="value">
              <div class='btn act-btn' >+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[
        {id:1,img_url:"http://127.0.0.1:3030/img/details/p03-d03.jpg"},
        {id:2,img_url:"http://127.0.0.1:3030/img/details/p03-d01.jpg"},
        {id:3,img_url:"http://127.0.0.1:3030/img/details/p03-d02.jpg"},
        {id:4,img_url:"http://127.0.0.1:3030/img/details/p03-d04.jpg"}
      ],
      addShow:true,
      value:0
    }
  },
}
</script>
<style lang="css" scoped>
   .app-swipe .mint-swipe{
    height:3.75rem;
    position: relative;
  }
  .app-swipe .mint-swipe img{
    width:100%;
    height: 100%;
  }
  .img-count{
    position:absolute;
    bottom:0.1rem;
    right:0.1rem;
    padding:0 0.06rem;
    background-color: #fff;
    font-size: 0.12rem;
    line-height: 0.18rem;
    color:#333;
    border-radius: 4px;
  }
  .pro-intro{
    height: 0.64rem;
    display: flex;
    align-items: center;
    margin:0 0.15rem;
    background-color: #F9F9F9;
  }
  .pro-intro .intro-item{
    width:33.3%;
    display: flex;
  }
  .intro-item-left{
    width:0.36rem;
    height:0.36rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 0.05rem;
  }
  .intro-item-left img{
    width:100%;
    height:100%;
  }
  .intro-item-right{
    font-size: 0.14rem;
    color:#333;
    line-height: 0.16rem;
  }
  .intro-item-right div:first-child{
    margin-bottom: 0.08rem;
  }
  /* 价格部分 */
  .product-content{
    padding:0.15rem;
    background-color: #fff;
  }
  .product-content .title{
    color:#333333;
    font-size: 0.16rem;
    font-weight: bold;
    margin-bottom: 0.05rem;
  }
  .product-content .subtitle{
    color:#7F7F7F;
    font-size: 0.14rem;
    margin-bottom: 0.15rem;
  }
  .product-content .price{
    color:#B4282D;
    font-weight: bold;
  }
  .price .rmb{
    font-size: 0.16rem;
  }
  .price .how{
    font-size: 0.28rem;
  }
  .product-content .mark{
    border:1px solid #F48F18;
    color:#F48F18;
    font-size: 0.12rem;
    padding: 0 0.07rem 0 0.04rem;
    display: inline-block;
    margin-right: 0.05rem;
    line-height: 0.19rem;
    height: 0.19rem;
  }
  .mark-icon{
    display: inline-block;
    width:0.05rem;
    height:0.05rem;
    border-top:1px solid #F48F18;
    border-right:1px solid #F48F18;
    transform: rotate(45deg) translate(0,-1px);
    vertical-align: middle;
  }
  .price .old-price{
    color:#999999;
    font-size: 0.14rem;
    text-decoration: line-through;
    font-weight: normal;
    margin:0 0 0.05rem 0.15rem;
    display: inline-block;
    vertical-align: middle;
  }
  .pro-guige{
    padding-left:0.15rem;
  }
  .pro-item{
    height: 0.52rem;
    border-bottom: 1px solid #d9d9d9;
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:0.15rem;
  }
  .toright-icon{
    display: inline-block;
    width:0.08rem;
    height:0.08rem;
    border-top:1px solid #696969;
    border-right:1px solid #696969;
    transform: rotate(45deg);
  }
  /* 底部 */
  .sel-color .selected{
  color:#B4282D;
  border-color:#B4282D;
}
.content-bottom{
  height:0.5rem;
  position:fixed;
  bottom:0;
  width:100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top:1px solid #D6D6D6;
  overflow: hidden;
  z-index: 10;
  background-color: #fff;
}
.content-bottom .to-home,
.content-bottom .to-cart{
  width:12.5%;
  height:100%;
  background-color: #fff;
  text-align: center;
  font-size: 0.12rem;
  color:#575757;
  padding-top:5px;
  line-height: 0.17rem;
}
.content-bottom .to-home{
  border-right:1px solid #F2F2F2;
  box-sizing: border-box;
  
}
.content-bottom .add-cart,
.content-bottom .to-buy{
  width:37.5%;
  height:100%;
  font-size: 0.15rem;
  color:#fff;
  text-align: center;
  line-height: 0.5rem;
}
.content-bottom .add-cart{
  background-color: #FF8587;
}
.content-bottom .to-buy{
  background-color: #E31436;
}
/* 弹窗 */
/* 遮罩层 */
.con-wrap{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0, 0, 0, .5)
}
.close{
  position:absolute;
  top:20px;
  right:20px;
  color:#333;
  font-size: 0.16rem;
}
/* 窗体 */
@keyframes boxShow {
  0%{
    transform: translate(0,-100%)
  }
  100%{
    transform: translate(0,0)
  }
}
.add-content{
  padding:0.15rem 0.15rem 0.5rem;
  width:100%;
  background-color: #fff;
  position:absolute;
  bottom:0;
  z-index: 99;
  box-sizing:border-box;
  animation: boxShow 0.25s ease-in both;
}
.con-top{
  display: flex;
  font-size: 0.12rem;
  color:#333;
  margin-bottom: 0.2rem;
}
.pro-img{
  width:1rem;
  height:1rem;
  background-color: #F4F4F4;
  margin-right:0.08rem;
  overflow: hidden;
}
.pro-img>img{
  width:100%;
  height:100%;
}
.info-right{
  width:65%;
  height:160rpx;
}
.info-right .p-price{
  color:#B4282D;
  margin:0.6rem 0 0 0;
}
.sel-info{
  font-size: 0.13rem;
}
/* 滑框 */
.out-warper{
  height:2.86rem;
  overflow-y: scroll;
}
.inner-content{
  padding-bottom: 0.2rem;
}
.sel-title{
  font-size: 0.14rem;
  color:#333;
  margin-bottom: 0.05rem;
}
.sel-color{
  width:70%;
  margin-bottom: 0.2rem;
}
.color-item{
  color:#7F7F7F;
  font-size: 0.12rem;
  border:1px solid #7F7F7F;
  padding:0.05rem 0.1rem;
  display: inline-block;
  margin:0 0.15rem 0.06rem 0;
  border-radius: 0.05rem;
}
.count{
  display: flex;
}
.count .btn{
  width:0.45rem;
  height:0.32rem;
  line-height: 0.32rem;
  display: inline-block;
  border:1px solid #7F7F7F;
  text-align: center;
  color:#7F7F7F;
  font-size:0.23rem;
}
.count input{
  display: inline-block;
  width:0.645rem;
  height:0.32rem;
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
</style>