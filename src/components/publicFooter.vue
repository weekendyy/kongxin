<template>
  <div class="footer-wrap">
    <div class="kx-box clearfix">
      <div class="fl">&copy;Copyright 2016 空心科技 鄂ICP备 16003656 号</div>
      <h3 class="fr">by:<a href="http://www.kxhtml.com" target="_blank">空心科技</a></h3>
    </div>
  </div>
</template>
<script>
  export default {
    name:'publicFoot',
  }
</script>

<style scoped>
.kx-box{
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.footer-wrap{
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #333;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
}



.footer-wrap a{
  color: #fff;
  margin-left: 5px;
}
</style>
