<template>
  <div class="select-color">
    <div>2</div>
    <div>色</div>
    <div>可</div>
    <div>选</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="css" scoped>
  .select-color{
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
</style>