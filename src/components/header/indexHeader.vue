<template>
  <div>
    <!--页面头部-->
    <header class="header">
      <div class="saoma">
        <div class="iconfont icon-saoyisao"></div>
        <div>扫一扫</div>
      </div>
      <div class="search-box">
        <input type="text" placeholder="搜索商品，共20000款好物">
        <div class="iconfont icon-sousuo"></div>
      </div>
      <div class="msg">
        <div class="iconfont icon-xiaoxizhongxin"></div>
        <div>消息</div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
   .header{
    background-color: #fff;
    height: 0.45rem;
    display:flex;
    justify-content:space-between;
    padding:0.05rem 0;
    box-sizing:border-box;
  }
  .header .search-box{
    flex-grow:1;
    padding:0 0.05rem;
    position:relative;
  }
  .header .search-box input{
    height:100%;
    background-color:#EDEDED;
    border:none;
    border-radius:0.05rem;
    font-size:0.14rem;
    padding-left:22%;
  }
  .search-box .icon-sousuo{
    position:absolute;
    top:22%;
    left:16%;
  }
  .header .saoma,.header .msg{
    text-align:center;
    font-size:0.1rem;
    color:#7F7F7F;
    width:0.5rem;
    line-height:0.17rem;
  }
</style>