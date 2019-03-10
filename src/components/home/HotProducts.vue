<template>
  <!-- 热门商品推荐子组件 -->
  <div class="hot-product">
    <div class="hot-pro">
      <div class="hot-title">
        <div class="hot-title-left">人气推荐</div>
        <div class="hot-title-right">
          更多
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
      <div class="hot-top">
        <div class="hot-top-left">
          <img :src="hotProducts.img_url" alt="?">
        </div>
        <div class="hot-top-right">
          <div class="hot-top-title ell">{{hotProducts.title}}</div>
          <div class="hot-top-info">{{hotProducts.sub_title}}</div>
          <div class="hot-top-price">¥{{hotProducts.price}}</div>
        </div>
      </div>
      <!-- 修改为swiper -->
      <div class="swiper-container" id="swiper2">
        <div class="swiper-wrapper">
         
            <div class="swiper-slide hot-item" v-for="(item,index) in hotProducts.hotItem" :key="index">
              <div class="hot-item-top">
                <img :src="item.img_url" alt="?">
                <div class="select-color" v-if="item.color_count != 1">
                  <div>{{item.color_count}}</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </div>
              <div class="hot-item-title">
              {{item.title}}
                <span class="hot-item-price">¥{{item.price}}</span>
              </div>
              <div>
                <div v-if="item.mark.length">
                  <div class="mark" v-for="(cell,index) in item.mark" :key="index">
                    <span>{{cell}}</span>
                  </div>                  
                </div>
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
      hotProducts:[]
    }
  },
  created() {
    this.axios.get("http://localhost:3030/index/hotproducts").then(res=>{
      this.hotProducts = res.data
      //console.log(this.hotProducts)
    })
  },
  mounted() {
   
  },
  components:{
   
  }
}
</script>
<style lang="css" scoped>
  /* 人气推荐 */
  .hot-pro{
    padding:0 0.15rem 0.15rem;
  }
  .hot-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:0.5rem;
  }
  .hot-title-left{
    font-size: 0.16rem;
    color:#333;
  }
  .hot-title-right{
    font-size: 0.14rem;
    color:#333;
  }
  .icon-xiangyoujiantou{
    font-size: 0.12rem;
  }
  .hot-top{
    display: flex;
    background-color: #FEF0DF;
    align-items: center;
    border-radius: 0.05rem;
    margin-bottom: 0.1rem;
  }
  .hot-top-left{
    width:1.4rem;
    height:1.4rem;
    margin-right:0.15rem;
    overflow:hidden;
  }
  .hot-top-left img{
    width:100%;
  }
  .hot-top-right{
    width:54%;
  }
  .hot-top-title{
    font-size: 0.14rem;
    color:#333;
  }
  .hot-top-info{
    font-size: 0.12rem;
    color:#7F7F7F;
  }
  .hot-top-price{
    color:#b4282d;
    font-size: 0.14rem;
  }
  .hot-item{
    width:31%;
  }
  .hot-item-top{
    position:relative;
    height:1.08rem;
    overflow:hidden;
    margin-bottom:0.07rem;
    background-color: #f5f5f5;
  }
  .hot-item-top img{
    width:100%;
  }
  .hot-item-top .select-color{
    position:absolute;
    top:0.05rem;
    left:0.05rem;
    width:0.16rem; 
    color:#b4a078;
    border:1px solid #b4a078;
    text-align:center;
    padding:0.03rem 0;
  }
  .select-color div{
    /*webkit不支持12px以下字体 */
    transform:scale(0.8);
    font-size:0.12rem;
    line-height:0.11rem;
  }
  .hot-item-title{
    font-size:0.12rem;
    line-height:0.17rem;
    color:#333;
    height:0.34rem;
    overflow:hidden;
  }
  .hot-item-title .hot-item-price{
    color: #b4282d;
  }
  .mark{
    display: inline-block;
    height:0.16rem;
    line-height: 0.16rem;
    color:#B4282D;
    border: 1px solid #B4282D;
    margin-right: 0.08rem;
  }
  .mark span{
    display: inline-block;
    font-size: 0.12rem;
    transform: scale(0.8);
    vertical-align: top;
  }
</style>
