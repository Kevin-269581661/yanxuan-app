<template>
  <div class="app-product-sort">
    <!-- 搜索框 -->
    <div class="search-box">
      <div class="search-input">
        <span class="iconfont icon-sousuo"></span>
        <span class="search-text">搜索商品, 共21433款好物</span>
      </div>
    </div>
    <!-- 左侧导航 -->
    <div class="sort-left">
      <ul>
        <li class="left-item ell" :class="{'active': currenIndex == index}" v-for="(item,index) in leftList" :key="index" @touchstart="handleSeleted" :data-index="index" :data-id="item.id">{{item.title}}</li>
        <li class="active-box" :style="{top}"></li>
      </ul>
    </div>
    <!-- 右侧商品列表 -->
    <div class="sort-right-swiper" ref="right">
      <div class="sort-right">
        <div class="sort-right-top">
          <img :src="rightList.goodImgUrl" alt="?">
        </div>
        <div class="sort-right-bottom">
          <div class="product-wraper" v-for="(item,index) in rightList.goodsSort" :key="index">
            <div class="sort-title" v-if="item.sortTitle">{{item.sortTitle}}</div>
            <ul class="product-content">
              <li class="product-item" v-for="(cell,index) in item.goods" :key="index">
                <div class="pro-img">
                  <img :src="cell.imgUrl" alt="?">
                </div>
                <div class="pro-title">{{cell.title}}</div>
              </li>
            </ul>
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
      leftList:[],  //左侧类目表
      currenIndex:0,  //左侧选中类目 index
      top:0.17+"rem", //左侧滑动div top
      leftId:1,   //左侧类目id 
      rightList:{}, //右侧商品列表
    }
  },
  created() {
    //加载左侧列表
    this.axios.get("http://localhost:3030/sort/leftlist").then(res=>{
      this.leftList = res.data
    })
    //加载右侧列表
    this.requestRight(this.leftId);
  },
  methods: {
    //点击左侧类目选中
    handleSeleted(e){
      //获取绑定的index
      var currenIndex = e.target.dataset.index;
      this.currenIndex = currenIndex;
      this.top = 0.47*currenIndex + 0.17+"rem";
      this.leftId = e.target.dataset.id;
      this.requestRight(this.leftId);
    },
    //封装右侧列表请求
    requestRight(id){
      var url="http://localhost:3030/sort/rightlist?id="+id
      this.axios.get(url).then(res=>{
        this.rightList = res.data;
        //右侧列表滚动条距离顶部距离
        this.$refs.right.scrollTop = 0;
      })
    }
  },
  components:{
    
  }
}
</script>
<style lang="css" scoped>
  .app-product-sort{
    position:relative;
  }
  /* 搜索框 */
  .search-box{
    height: 0.45rem;
    width:100%;
    border-bottom:1px solid #ECECEC;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    box-sizing: border-box;
    background-color: #fff;
  }
  .search-input{
    width:90%;
    height:0.28rem;
    background-color: #ededed;
    font-size: 0.13rem;
    color:#666;
    border-radius:0.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-input .icon-sousuo{
    margin-right: 0.05rem;
  }
  /* 左侧导航 */
  .sort-left{
    position: fixed;
    top:0.45rem;
    bottom:0.5rem;
    left:0;
    width:22%;
    border-right:1px solid #ECECEC;
    overflow-y:scroll; 
  }
  .left-item{
    height: 0.25rem;
    line-height: 0.25rem;
    font-size: 0.14rem;
    text-align: center;
    color:#333;
  }
  .sort-left ul{
    padding:0.17rem 0;
    position: relative;
  }
  .sort-left ul li:first-child~li:not(:last-child){
    margin-top:0.22rem;
  }
  .sort-left li.active{
    color: #ab2b2b;
  }
  .active-box{
    position: absolute;
    top:0.17rem;
    left:0;
    width:0.02rem;
    height:0.25rem;
    background-color: #ab2b2b;
    transition: 0.2s linear;
  }
  /* 右侧商品列表 */
  .sort-right-swiper{
    position: fixed;
    top:0.45rem;
    bottom:0.5rem;
    right:0;
    width:78%;
    overflow-y:scroll; 
  }
  .sort-right{
    padding:0.15rem;
  }
  .sort-right-top{
    height:0.96rem;
    border-radius: 0.04rem;
    overflow: hidden;
    margin-bottom: 0.15rem;
  }
  .sort-right-top img{
    width:100%;
    height: 100%;
  }
  .sort-title{
    font-size: 0.13rem;
    font-weight: bold;
    color:#333;
    height:0.25rem;
    padding-bottom: 0.04rem;
    line-height: 0.2rem;
    margin-bottom: 0.14rem;
    border-bottom: 1px solid #ECECEC;
  }
  .product-wraper{
    margin-bottom: 0.05rem;
  }
  .product-content{
    display: flex;
    flex-flow: row wrap;
  }
  .product-item{
    width:0.72rem;
    height:1.08rem;
    margin-right:0.15rem;
  }
  .product-item:nth-child(3n){
    margin-right:0;
  }
  .product-item .pro-img{ 
    height:0.72rem;
    overflow: hidden;
  }
  .product-item .pro-img img{
    width:100%;
    height:100%;
  }
  .pro-title{
    font-size: 0.12rem;
    color:#333;
    text-align: center;
  }
</style>