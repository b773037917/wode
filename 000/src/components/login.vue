<template>
    <div class="head">
       
      <div class="login_head">
        <a href="" class="login_head2"><img src="../assets/elm_login.png" alt=""><span>密码登录</span></a>
         <a class="login_head1" href="">注册</a> 
         </div>
         
<van-cell-group>
  <van-field
 v-model="uname"
    clearable
    right-icon="question-o"
    placeholder="用户名/邮箱/手机号"
    @click-right-icon="$toast('question')"
  />
  <van-field
    v-model="upwd"
    type="password"
    placeholder="密码"
  />
</van-cell-group>
<van-button type="primary" @click="login">登录</van-button>
<div class="login_btn1">
<span><a class="login_2" href="">忘记密码？</a></span>
<span><a href="" class="login_3">手机验证码登录</a></span>
</div>
<van-divider class="xian" :style="{ color: '##D0D0D0', borderColor: '#DADADA', padding: '0 16px' }">
第三方登录
</van-divider>
<div class="tubiao">
<img  src="../assets/weixin.png" alt="">
<img src="../assets/zhifub.png" alt="">
<img src="../assets/weibo.png" alt="">
<img  src="../assets/QQ.png" alt="">
</div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      uname:"",
      upwd:""
    };
  },
  methods:{
    login(){
      var reg=/^[a-z0-9]{3,12}$/i;
      var u=this.uname;
      var p=this.upwd;
      if(!reg.test(u)){
        this.$toast('1用户名错误');
        return;
      }
      if(!reg.test(p)){
        this.$toast('1密码错误');
        return;
      }
      var url="login";
 var obj={ uname: u , upwd: p };
 this.axios.get(url,{params:obj}).then(res=>{
    console.log(res)
    if(res.data.code==1){
    this.$toast("登录成功")
  }else{
    this.$toast("登录失败")
  }
 })
 .catch(err=>{
    console.log(err)
 })
    }
  }
}
 
</script>
<style scoped>
  .login_head{
    width: 100%;
    height: 45px;
    background: #1296DB;
    line-height: 45px;
    margin-bottom:10px ;
    position: relative;
  }
 .login_head1{
   float: right;
    padding-right: 10px;
    /* text-decoration: none; */
    color:white;
    font-size:16px;
  }
   .login_head2{
     padding-left:10px ;
    float: left;
    color:white;
    font-size:16px;
   }
  .login_head1{
    float: right;
  }
  .login_head img{
    /* width: 5%; */
    position: absolute;
    top:14%;
  }
  .login_head span{
      padding-left:30px;
  }

  .van-button{
    height: 40px;
    width: 95%;
    border-radius: 2px;
    margin-top:10px ;
    font-size: 17px;
  }
  .login_btn1{
    width: 356px;
    margin: 0 auto;
    margin-top:10px 
  }
  .login_2,.login_3{
    font-size:13px;
    color:  #24ACF2;
    display: block;
    text-align: left;
  }
  .login_2{
    float:right;
  }
  
  .van-field__label{
    width: 70px 
  }
  
  .tubiao{
    height: 50px;
    width: 394px;
    text-align: center;
    border:0px solid  red;
   position: absolute;;
   bottom: 40px;
   
  }
  .tubiao img{
 margin-right:20px ;
 width: 38px;
 height: 38px;
  }
  .xian{
     margin-top:325px ;
  }
  
</style>