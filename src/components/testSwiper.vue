<template>
  <div class="container">
    <!-- 模拟测试使用swiper组件 -->
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide1" >Slide 1</div>
            <div class="swiper-slide slide2">Slide 2</div>
            <div class="swiper-slide slide3">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
    
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
    
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
      <button @touchstart="handle">测试</button>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  data() {
    return {
      mySum:0
    }
  },
  methods: {
    handle(){
      console.log(this)
    }
  },
  mounted() {
    new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      centeredSlides:false,
      slidesPerView : 2,
      spaceBetween : 20,
      freeMode : true,
      on: {
        touchStart:()=>{
          //console.log(this.clickedIndex)
          console.log(this.mySum)
        }
      }
      // loop: true, // 循环模式选项
      
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })      
   }
}
</script>
<style lang="css" scoped>
  .swiper-container {
    width: 600px;
    height: 300px;
  }
  .slide1{
    background-color: aqua;
  }
  .slide2{
    background-color: yellow;
  }  
  .slide3{
    background-color: red;
  }    
</style>