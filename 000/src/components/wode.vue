<template>
  <div>
    <div class="wode">
      <div class="wode_1">
        <a href>
          <img src="../assets/lingdang.png" alt />
        </a>
        <a href>
          <img src="../assets/shezhi.png" alt />
        </a>
      </div>
    </div>
    <div class="wode1">
      <img class="wode1_1" src="../assets/elm0.png" alt />
      <div class="wode1_2">
        <h2 style="color:#242424">请登录</h2>
        <p style="color:#676767;font-size:15px;margin-top:10px">再忙，也要记得吃饭呦~</p>
        <div class="wode1_2_2">
          <img src="../assets/rili.png" alt />签到领10元红包
        </div>
      </div>
    
    </div>
      <div class="huiyuan"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.huiyuan{
  width: 97%;
  height: 50px;
  border:1px solid red;
  margin: 0 auto ;
background:linear-gradient(90deg,RGB(251,230,187,0.4),RGB(250,231,188) );
}
.wode1_2_2 img {
  position: absolute;
  left: 5px;
  top: 1px;
}
.wode1_2_2 {
  position: relative;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background: transparent;
  border: 1px solid #a8a6a6;
  font-size: 10px;
  padding-left: 30px;
}
.wode1_1 {
  height: 90px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.wode1_2 {
  text-align: justify;
  width: 180px;
  height: 128px;
  border: 1px solid red;
  position: absolute;
  left: 15px;
  top: 10px;
}
.wode1 {
  height: 145px;
  width: 100%;
  border: 0px solid red;
  position: relative;
}
.wode a {
  margin-left: 5px;
}
.wode_1 {
  margin-right: 10px;
}
.wode {
  text-align: right;
}

h2 {
  margin: 0;
}
.wode,
.wode1 {
  background: white;
}
</style>