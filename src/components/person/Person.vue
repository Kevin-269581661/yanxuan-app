<template>
  <div class="app-person">
    <!-- 头部 -->
    <header class="top">
      <div class="user-avatar">
        <img src="http://127.0.0.1:3030/img/person/person01.png" alt="?">
      </div>
      <div class="user-info">
        <div class="user-name">17526094906</div>
        <div class="user-level">
          <div class="user-mark">普通用户</div>
        </div>
      </div>
      <div class="super-vip">
        <div class="icon-wraper">
          <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
        </div>
        <div class="vip-content">
          <div class="vip-top">超级会员</div>
          <div class="vip-bottom">享受特权
            <span class="mui-icon-extra mui-icon-extra-arrowrightcricle"></span>
          </div>
        </div>
      </div>
    </header>
    <!-- 主体 -->
    <section class="content">
      <div class="wrap-box">
        <div class="hongbao">
          <div>5</div>
          <div>红包</div>
        </div>
        <div class="youhuiquan">
          <div>0</div>
          <div>优惠券</div>
        </div>
        <div class="qiandao">
          <div>5</div>
          <div>签到</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="css" scoped>
  .app-person{
    background-color: #F4F4F4;;
  }
  .top{
    height: 1.35rem;
    width:100%;
    background-image: linear-gradient(to top,#F4F4F4 0%,#E1D3B6 17%,#C0A368 100%);
    padding-left:0.15rem;
    display: flex;
    align-items: center;
    position: absolute;
    top:0;
  }
  .user-avatar{
    width:0.71rem;
    height:0.71rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.15rem;
  }
  .user-avatar img{
    width:100%;
    height:100%;
  }
  .user-info{
    color:#fff
  }
  .user-info .user-name{
    font-size: 0.18rem; 
  }
  .user-mark{
    display: inline-block;
    border-radius: 0.2rem;
    background-color: rgba(248,243,240,0.4);
    font-size: 0.14rem;
    line-height: 0.2rem;
    padding:0 0.05rem;
    color:#715821;
  }
  /* vip开通 */
  @keyframes vipshow {
    0%{
      transform: translate(0)
    }
    25%{
      transform: translate(0.1rem)
    }
    50%{
      transform: translate(0)
    }
    75%{
      transform: translate(0.1rem)
    }
    100%{
      transform: translate(0)
    }
  }
  .super-vip{
    width:1.01rem;
    height:0.42rem;
    background-color: #444;
    position:absolute;
    top:50%;
    right:0;
    margin-top:-0.21rem;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    display: flex;
    align-items: center;
    animation: vipshow 1s linear;
  }
  .icon-wraper{
    width:0.28rem;
    height:0.28rem;
    line-height: 0.35rem;
    border-radius: 50%;
    text-align: center;
    background-color: #575757;
    margin:0 0.05rem;
  }
  .mui-icon-extra-heart-filled{
    color:#AD7E1C;
    font-size: 0.22rem;
  }
  .vip-content{
    color:#EDE7DB;
    line-height: 0.17rem;
  }
  .vip-top{
    font-size: 0.14rem;
  }
  .vip-bottom{
    font-size: 0.12rem;
    white-space: nowrap;
    transform:translate(-0.06rem) scale(0.8);
    text-align: left;
  }
  .mui-icon-extra-arrowrightcricle{
    font-size: 0.08rem;
  }
  /* 主体 */
  .content{
    position: relative;
    top:1.15rem;
    z-index: 99;
  }
  .wrap-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width:95%;
    margin:0 auto;
    border-radius: 0.1rem;
    padding:0.1rem 0.15rem;
    /* box-shadow: 0px 1px 10px 2px #ddd; */
    border:1px solid #F2F5F4
  }
</style>