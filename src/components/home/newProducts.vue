<template>
  <!-- 新品推荐子组件 -->
  <div class="new-product-list">  
    <div class="new-pro">
      <div class="new-title">新品推荐</div>
      <div class="new-top">
        <div class="new-top-left">
          <img :src="newProducts.img_url" alt="?">
        </div>
        <div class="new-top-right">
          <div class="new-top-title ell">{{newProducts.title}}</div>
          <div class="new-top-price">¥{{parseInt(newProducts.price).toFixed(2)}}</div>
          <div class="new-top-info">{{newProducts.info}}</div>
        </div>
      </div>
      <div class="new-content">
        <div class="new-item" v-for="(item,index) in newProducts.sameProducts" :key="index">
          <div class="item-img">
            <img :src="item.img_url" alt="?">
          </div>
          <div class="item-bottom">
            <div class="item-title ell">
            {{item.title}}
            <div class="item-price">¥{{item.price.toFixed(2)}}</div>
            </div>
            <div class="split-hr"></div>
            <div class="item-info">{{item.info}}</div>
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
      
    }
  },
  props:["newProducts"],
  created() {
    
  },
}
</script>
<style lang="css" scoped>
  /* 新品推荐 */
  .new-pro{
    padding: 0 0.15rem;
  }
  .new-title{
    text-align: center;
    font-size: 0.16rem;
    color:#333;
    background-color: #fff;
    height:0.5rem;
    line-height: 0.5rem;
  }
  .new-top{
    display: flex;
    align-items: center;
    padding: 0.2rem 0.15rem;
    background-color: #F5F5F5;
    height:1.45rem;
    border-radius: 0.05rem;
  }
  .new-top-left{
    width:30%;
    margin-right:0.2rem;
  }
  .new-top-left img{
    width:100%;
  }
  .new-top-right{
    width:60%;
    font-size:0.14rem;
  }
  .new-top-title{
    color:#1F1F1F;
  }
  .new-top-price{
    color:#B4282D;
    margin:0.02rem 0;
  }
  .new-top-info{
    font-size: 0.13rem;
    color:#808080;
  }
  .new-content{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    padding-bottom:0.15rem;
  }
  .new-item{
    width:31%;
    background-color: #F5F5F5;
    margin-top:0.1rem;
    border-radius: 0.05rem;
  }
  .new-item .item-img{
    width:98%;
    height:1rem;
    margin-bottom: 0.1rem;
  }
  .item-img img{
    width:100%;
  }
  .item-bottom{
    padding:0 0.07rem 0.2rem;
    line-height: 0.17rem;
  }
  .new-item .item-title{
    font-size: 0.12rem;
    color:#272727;
  }
  .item-title,.item-info{
    height:0.34rem;
    overflow: hidden;
  }
  .new-item .item-price{
    font-size: 0.12rem;
    color:#B4282D;
  }
  .split-hr{
    background-color:#DDDDDD;
    width:90%;
    height:1px;
    margin:0.1rem auto;
  }
  .new-item .item-info{
    font-size: 0.13rem;
    color:#7F7F7F;
  }
</style>
