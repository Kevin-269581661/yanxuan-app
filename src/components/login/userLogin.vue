<template>
  <!-- 登录子组件 -->
  <div class="login-form ">
    <div class="input" :class="{'fail':unameCheck == 2}">
      <input type="text" placeholder="请输入手机号码" maxlength="11" v-model="uname" @blur="handleCheckUname" >
      <div class="msg">{{unameMsg}}</div>
    </div>
    <div class="input" :class="{'fail':upwdCheck == 2}">
      <input type="password" placeholder="请输入密码" maxlength="16" v-model="upwd" @blur="handleCheckUpwd">
      <div class="msg">{{upwdMsg}}</div>
    </div>
    <mt-button size="large" @click="handleLogin">登 录</mt-button>
  </div>
</template>
<script>
 import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      uname:'',  //输入的用户名
      upwd:'',  //输入的密码
      unameCheck:0,  //保存检查状态  0为初始  1为通过 2为不通过
      upwdCheck:0,
      unameMsg:'',
      upwdMsg:''
    }
  },
  methods: {
    //用户名失去焦点验证
    handleCheckUname(){
      var reg=/^1[3-8]\d{9}$/
      if(reg.test(this.uname)){
        this.unameCheck = 1;
        this.unameMsg = "";
      }else{
        this.unameCheck = 2;
        this.unameMsg = "请输入符合要求的手机号"
      }
    },
    //密码失去焦点验证
    handleCheckUpwd(){
      var reg=/^[\w_-]{6,16}$/
      if(reg.test(this.upwd)){
        this.upwdCheck = 1;
        this.upwdMsg = "";
      }else{
        this.upwdCheck = 2;
        this.upwdMsg = "密码长度为6-16位"
      }
    },
    // 点击登录按钮
    handleLogin(){
      if(this.unameCheck==1 && this.upwdCheck==1){
        var uname = this.uname;
        var upwd = this.upwd;
        this.axios.post(
          'http://localhost:3030/users/login',
          this.qs.stringify({
            uname,upwd
          })).then(res=>{
            // console.log(res.data.userInfo)
            if(res.data.code == 1){
              Toast({
                message:"登录成功",
                duration:1500,
                iconClass:"mintui mintui-success"
              })
              this.$router.push('/home');
              this.$store.commit("userLogin");//修改用户登录状态
              this.$store.commit("userInfoChange",res.data.userInfo)  //保存用户登录信息
              this.axios.get("http://localhost:3030/users/")  //获取用户购物车中数量保存Vuex中
            }else{
              Toast({
                message:res.data.msg,
                duration:1500
              })
            }
          })
      }else{
        Toast({
          message:"请检查输入",
          duration:1500
        })
      }
    }
  },
}
</script>
<style lang="css" scoped>
  .mint-button{
    background-color: #b7272d;
    color:#fff;
    margin-top:0.2rem;
  }
  
</style>