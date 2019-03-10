<template>
    <!-- 注册子组件 -->
   <div class="regist-form">
    <div class="input" :class="{'fail':unameCheck == 2}">
      <input type="text" name="uname" maxlength="11" placeholder="请输入手机号码" v-model="uname" @blur="handleCheckUname">
      <div class="msg">{{unameMsg}}</div>
    </div>
    <div class="input" :class="{'fail':upwdCheck == 2}">
      <input type="password" name="upwd" maxlength="16" placeholder="请输入密码" v-model="upwd" @blur="handleCheckUpwd">
      <div class="msg">{{upwdMsg}}</div>
    </div>
    <div class="input" :class="{'fail':upwdAginCheck == 2}">
      <input type="password" name="upwd" placeholder="请确认密码" v-model="upwdAgin" @blur="handleCheckUpwdAgin" :disabled="isDisabled">
      <div class="msg">{{upwdAginMsg}}</div>
    </div>
    <div class="agree">
      <label>
        <input type="checkbox"  v-model="agree">
        <span class="check-box">
          <span class="mui-icon mui-icon-checkmarkempty" v-show="agree"></span>
        </span>
        <span>我同意
          <a href="javascript:;" class="agree-msg">《服务条款》</a>和
          <a href="javascript:;" class="agree-msg">《隐私政策》</a>
        </span>
      </label>
    </div>
    <mt-button size="large" @click="handleRegist">注 册</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      uname:'',
      upwd:'',
      upwdAgin:'',
      checkBox:'',
      agree:true,  //复选框选中状态
      unameCheck:0,
      upwdCheck:0,
      upwdAginCheck:0,
      unameMsg:'',
      upwdMsg:'',
      upwdAginMsg:'',
      isDisabled:true  //控制密码重复框是否禁用  false不禁用/true禁用
    }
  },
  watch: {
    //监控是否输入密码 如果输入 取消密码重复框禁用
    upwd(val){
      if(val == ""){
        this.isDisabled = true;
      }else{
        this.isDisabled = false;
      }
    }
  },
  methods: {
    //失去焦点验证用户名
    handleCheckUname(){
      var reg=/^1[3-8]\d{9}$/
      if(reg.test(this.uname)){
        this.axios.get("http://localhost:3030/users/checkuname?uname="+this.uname).then(res=>{
          if(res.data.code == 0){
            this.unameMsg = res.data.msg;
            return
          }
        })
        this.unameCheck = 1;
        this.unameMsg = "";
      }else{
        this.unameCheck = 2;
        this.unameMsg = "请输入符合要求的手机号"
      }
    },
    //失去焦点验证用户密码
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
    //失去焦点验证用户重复密码
    handleCheckUpwdAgin(){
      if(this.upwd === this.upwdAgin){
        this.upwdAginCheck = 1;
        this.upwdAginMsg = "";
      }else{
        this.upwdAginCheck = 2;
        this.upwdAginMsg = "两次输入密码不一样"
      }
    },
    //点击注册按钮
    handleRegist(){
      //判断验证是否都通过
      if(
        this.unameCheck == 1 && 
        this.upwdCheck == 1 && 
        this.upwdAginCheck == 1 && 
        this.agree == true
      ){
        //发送注册请求
        var uname = this.uname;
        var upwd = this.upwd;
        this.axios.post(
          'http://localhost:3030/users/regist',
          this.qs.stringify({
            uname,upwd
          })
        ).then((res)=>{
          if(res.data.code == 1){
            Toast({
              message:"注册成功",
              duration:1500,
              iconClass:"mintui mintui-success"
            })
            this.$router.push('/login/log');
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
  }
}
</script>
<style lang="css" scoped>
  .mint-button{
    background-color: #b7272d;
    color:#fff;
    margin-top:0.2rem;
  }
  .agree{
    font-size: 0.12rem;
    color:#999;
    height:0.2rem;
    line-height: 0.2rem;
    position: relative;
  }
  .agree input{
    width:0.15rem;
    height:0.15rem;
    opacity:0;
    position: relative;
    z-index: 99;
    left:0;
    top:50%;
    transform: translate(0,-50%);
  }
  .agree .check-box{
    background-color: #fff;
    position: absolute;
    left:0;
    top:50%;
    transform: translate(0,-50%);
    width:0.15rem;
    height:0.15rem;
    border: solid 1px #aaa;
    margin-right:0.05rem;  
  }
  .mui-icon-checkmarkempty{
    font-size: 0.35rem;
    font-weight: bold;
    color:#68B93C;
    position: absolute;
    top: -0.12rem;
    left: -0.09rem;
  }
</style>
