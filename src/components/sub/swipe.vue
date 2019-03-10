<template>
  <div class="app-swipe">
    <mt-swipe :auto="3000" :stopPropagation="true">
      <mt-swipe-item v-for="(item,index) in list" :key="index">
        <img :src="item.img_url" :alt="index"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data(){
    return{ }
  },
  props:["list"]
}
</script>
<style lang="css" scoped>
  .app-swipe .mint-swipe{
    height:1.82rem;
  }
  .app-swipe .mint-swipe img{
    width:100%;
  }
</style>