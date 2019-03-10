<template>
  <div class="app-product-list">
    <div class="top-img">
      <img src="http://127.0.0.1:3030/img/gongge/product-list-top-img01.jpg" alt="banner">
    </div>
    <!-- 列表标题 -->
    <div class="header">
      <div class="name">男士外套</div>
      <div class="desc">自在潇洒穿着感</div>
    </div>
    <!-- 商品列表 -->
    <div class="pro-list">
      <div class="pro-item">
        <div class="pro-img">
          <img src="http://127.0.0.1:3030/img/products/product09.png" alt="外套">
          <!-- 引入子组件 -->
          <select-color></select-color>
        </div>
        <div class="pro-desc ell">洁净如白雪的鹅绒，天生给你温暖的满足感。</div>
        <div class="pro-title ell">男式真皮休闲夹克</div>
        <div class="pro-price">
          <span class="new-price">¥259</span>
          <span class="old-price">¥566</span>
        </div>
        <!-- 引入子组件 -->
        <product-mark></product-mark>
      </div>
    </div>
  </div>
</template>
<script>
import SelectColor from '../sub/selectColor'
import ProductMark from '../sub/productMark'

export default {
  data() {
    return {
      
    }
  },
  components:{
    'select-color':SelectColor,
    'product-mark':ProductMark
  }
}
</script>
<style lang="css" scoped>
  .top-img{
    height:1.85rem;
    overflow: hidden;
    margin-bottom: 0.1rem;
  }
  .top-img img{
    width:100%;
    height: 100%;
  }
  /* 头部 */
  .header{
    height: 0.6rem;
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
  .header .name{
    color:#333;
    font-size: 0.16rem;
  }
  .header .desc{
    color:#999;
    font-size: 0.14rem;
  }
  /* 商品列表 */
  .pro-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding:0 0.1rem;
  }
  .pro-item{
    width:49%;
    padding-bottom:0.15rem; 
  }
  .pro-img{
    background-color: #f4f4f4;
    position: relative;
    height: 1.73rem;
    overflow: hidden;
    border-radius:.05rem .05rem 0 0;
  }
  .pro-img img{
    width:100%;
  }
  .pro-desc{
    height: 0.24rem;
    line-height: 0.24rem;
    padding:0 0.05rem;
    background-color: #F1ECE2;
    color:#9F8A60;
    border-radius: 0 0 .05rem .05rem;
    font-size: 0.12rem;
  }
  .pro-title{
    font-size: 0.14rem;
    color:#333;
    height: 0.2rem;
    line-height: 0.2rem;
    margin-top:0.08rem;
  }
  .pro-price{
    height:0.24rem;
  }
  .pro-price .new-price{
    color: #b4282d;
    font-size: 0.16rem;
    line-height: 0.24rem;
    margin-right: 0.05rem;
  }
  .pro-price .old-price{
    text-decoration: line-through;
    color: #999;
    font-size: 0.12rem;
    line-height: 0.17rem;
  }
</style>