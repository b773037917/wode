<template >
  <div>
    <div>
      <div class="login_head">
        <a href class="login_head2">
          <img src="../assets/elm_login.png" alt />
          <span>登录</span>
        </a>
        <a class="login_head1" href>注册</a>
      </div>
      <van-cell-group>
        <van-field
          v-model="uname"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="用户名/邮箱"
          @click-right-icon="$toast('question')"
        />

        <van-field v-model="upwd" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <van-button type="primary" @click="reg">注册</van-button>
      
    </div>
    <a href="" class="reg_2">已有账号 ? 点击登录</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname:"",
      upwd:""
    };
  },
  methods: {
    
    reg(){
      var u=this.uname;
      var p=this.upwd;
      var url="reg"
      var obj={uname:u,upwd:p};
      this.axios.post(url, {params:obj} ).then(res=>{
        if(res.data.code==1){
          this.$toast("成功")
          
        }else{
          this.$toast("失败")
        }
      }).catch(err=>{
        this.$toast("失败")
      })
  }
  },
  

};
</script>
<style scoped>
.reg_2{

    display: block;
   padding-top:8px ;
    color:#1296db;
    font-size:14px 
}
.van-button{
    height: 40px;
    width: 95%;
    border-radius: 2px;
    margin-top:10px ;
    font-size: 14px;
  }
.login_head {
  width: 100%;
  height: 45px;
  background: #1296db;
  line-height: 45px;
  margin-bottom: 10px;
  position: relative;
}
.login_head1 {
  color: white;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  font-size:23px 
}
.login_head2 {
  padding-left: 10px;
  float: left;
  color: white;
  font-size: 13px;
}

.login_head img {
  /* width: 5%; */
  position: absolute;
  top: 12%;
}
.login_head span {
  padding-left: 30px;
}


</style>