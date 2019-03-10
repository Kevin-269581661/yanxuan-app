<template>
  <!-- 主页 -->
  <div class="app-container">
    <!-- 引入头部子组件 -->
    <my-header></my-header>
    <div>
      <!-- 顶部导航 -->
      <div class="view-swiper">
        <div class="nav-con">
          <mt-navbar v-model="selected">
            <mt-tab-item id="tab1">推荐</mt-tab-item>
            <mt-tab-item id="tab2">新品</mt-tab-item>
            <mt-tab-item id="tab3">福利社</mt-tab-item>
            <mt-tab-item id="tab4">限时购</mt-tab-item>
            <mt-tab-item id="tab5">居家</mt-tab-item>
            <mt-tab-item id="tab6">鞋包配饰</mt-tab-item>
            <mt-tab-item id="tab7">服装</mt-tab-item>
            <mt-tab-item id="tab8">电器</mt-tab-item>
            <mt-tab-item id="tab9">洗护</mt-tab-item>
          </mt-navbar>
        </div>
      </div>
      <div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="selected" swipeable>
          <mt-tab-container-item id="tab1">
            <!-- 引入轮播子组件 -->
            <div>
              <swiper-box :list="list"></swiper-box>
            </div>
            <!-- 商家承诺 -->
            <div class="promise">
              <div>
                <span class="iconfont icon-wancheng"></span>自营品牌
              </div>
              <div>
                <span class="iconfont icon-wancheng"></span>30天无忧退换货
              </div>
              <div>
                <span class="iconfont icon-wancheng"></span>48小时快速退款
              </div>
            </div>
            <!-- 引入九宫格子组件 -->
            <my-grid></my-grid>
            <!-- 分隔条 -->
            <div class="split"></div>
            <!-- 引入新品推荐子组件 -->
            <new-product :newProducts="newProducts"></new-product>
            <!-- 分隔条 -->
            <div class="split"></div>
            <!-- 引入热门商品推荐子组件 -->
            <hot-product></hot-product>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab2">
            <!-- cell组件 -->
            <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab3">
            <!-- cell组件 -->
            <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab4">
            <!-- cell组件 -->
            <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab5">
            <!-- cell组件 -->
            <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab6">
            <!-- cell组件 -->
            <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab7">
            <!-- cell组件 -->
            <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab8">
            <!-- cell组件 -->
            <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab9">
            <!-- cell组件 -->
            <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../header/indexHeader.vue'
import Swipe from '../sub/swipe.vue'
import NewProducts from './newProducts.vue'
import HotProducts from './HotProducts.vue'
import Grid from './Grid.vue'

export default {
  data(){
    return{
      selected: 'tab1',  //顶部导航
      list:[],  //轮播图列表
      newProducts:{}  //新品推荐表
    }
  },
  created(){
    this.axios.get("http://localhost:3030/index/bannerlist").then(res=>{
      this.list = res.data
    });
    this.axios.get("http://localhost:3030/index/newproducts").then(res=>{
      //console.log(res.data)
      var sameProducts = res.data.slice(1);
      //console.log(sameProducts)
      var newProducts = res.data[0];
      newProducts.sameProducts = sameProducts;
      this.newProducts = newProducts;
      //console.log(this.newProducts)
    })

  },
  methods: {
    handle(key,index){
      this.selected = key;
      this.n = index
    }
  },
  
  components:{
    "my-header":Header,
    "swiper-box":Swipe,
    "new-product":NewProducts,
    "hot-product":HotProducts,
    "my-grid":Grid
  },
  mounted() {
    
    
  },
}
</script>
<style >
  .app-container{
    padding:0 0 0.5rem;
  }
  .navbar{
    background-color:#fff;
    height:0.4rem;
    border-bottom:1px solid #D9D9D9;
    box-sizing: border-box;
    padding-top:0.08rem;
  }
  .navbar .tab{
    display: inline-block !important;
    width: auto;  /* 必须要加这个宽度属性，否则li独占一行 */
    height:0.32rem;
    line-height:0.32rem;
    padding:0 0.1rem ;
    box-sizing:border-box;
    color:#1F1F1F;
    margin:0 2px;
    font-size: 0.15rem;
  }
  .act{
    color:#AD151B !important;
    border-bottom:2px solid #AD151B !important;
  }
  .view-swiper{
    height: 0.4rem;
    overflow: hidden;
  }
  .nav-con{
    overflow:scroll;
    white-space: nowrap;
    height: 1rem;
  }
  .mint-navbar .mint-tab-item.is-selected{
    color:#AD151B !important;
    border-bottom:2px solid #AD151B !important;
  }
  .mint-tab-item{
    flex: none !important;
    display: inline-block;
    height:0.32rem;
    line-height:0.32rem !important;
    padding:0 0.1rem !important;
    box-sizing:border-box;
    color:#1F1F1F;
    margin:0 2px;
  }
  .mint-navbar{
    display: block !important;
    background-color:#fff;
    height:0.4rem;
    border-bottom:1px solid #D9D9D9;
    box-sizing: border-box;
    padding-top:0.08rem;
  }
  .mint-tab-item .mint-tab-item-label{
    line-height:0.32rem !important;
    font-size: 0.15rem; 
  }
  .icon-wancheng{
    color:#B4282D;
  }
  .promise{
    display: flex;
    justify-content: space-between;
    color:#B4282D;
    font-size:0.12rem;
    height:0.32rem;
    line-height: 0.32rem;
    vertical-align: middle;
    background-color:#fff;
    padding: 0 0.1rem;
  }
  .icon-wancheng{
    margin:0.05rem 0.05rem 0 0 ;
    font-size:0.12rem;
  }
</style>