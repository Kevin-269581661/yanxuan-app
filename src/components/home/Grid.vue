<template>
  <!-- 九宫格子组件 -->
  <div class="grid-container" v-cloak>
    <div class="pro-sort">
      <div class="sort-item" v-for="(item,index) in gridList" :key="index" >
        <img :src="item.img_url" :alt="item.id">
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridList:[]
    }
  },
  created() {
    this.axios.get("http://localhost:3030/index/sortlist").then(res=>{
      this.gridList = res.data
    })
  },
}
</script>
<style lang="css" scoped>
  .pro-sort{
    background-color:#fff;
    display: flex;
    flex-flow: row wrap;
  }
  .sort-item{
    font-size: 0.13rem;
    color:#343434;
    width:20%;
    padding:0.05rem 0;
    text-align: center;
  }
  .sort-item img{
    width:80%;
    margin-bottom: 0.05rem;
  }
</style>