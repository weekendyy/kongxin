<template>
  <div class="kx-header">
    <div class="kx-box clearfix">
      <a href="javascript:;" class="kx-logo"><img src="../assets/images/common/logo.png"></a>
      <ul class="kx-nav">
        <li><a href="javascript:;" class="kx-active">首页</a></li>
        <li><a href="javascript:;">运营中心</a></li>
        <li><a href="javascript:;">人才库</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;">联系我们</a></li>
        <li class="kx-slide-trigger">
          <div class="kx-slide-btn">
            <img src="../assets/images/common/kx-headImg.jpeg">
            <span>个人中心</span>
          </div>
          <ul class="kx-header-slide">
            <li><a href="javascript:;">我发布的</a></li>
            <li><a href="javascript:;">我参与的</a></li>
            <li><a href="javascript:;">我的战队</a></li>
            <li><a href="javascript:;">钱包与发票</a></li>
            <li><a href="javascript:;">个人资料</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'publicHeader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.kx-box{
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.kx-header{
  width: 100%;
  height: 60px;/*示例导航高度为60px,可根据需求修改*/
  background: #000;
  overflow: hidden;
}
.kx-header .kx-logo{
  display: block;
  float: left;
  height: 60px;
  line-height: 60px;/*此处同导航高度，可根据需求修改*/
  display: flex;
}
.kx-header .kx-logo img{
  height: 45px;
  margin-top: 7.5px;
}

.kx-header .kx-nav{
  float: right;
  padding-left: 0;
}
.kx-header .kx-nav > li{
  float: left;
  list-style: none;
  position: relative;
  margin: 0 10px;
}
.kx-header .kx-nav > li > a{
  display: block;
  line-height: 60px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  position: relative;
  width: 80px;
  text-align: center;
}

.kx-header .kx-nav > li > a:after{
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  background: #3cc8b4;
  width: 100%;
  height: 4px;

  /*此处为CSS3动画代码 为导航hover动画  如项目考虑兼容性 根据需求修改*/
  -webkit-transform: scale(0,1);
  -ms-transform: scale(0,1);
  -o-transform: scale(0,1);
  transform: scale(0,1);
  -webkit-transition: all .75s;
  -o-transition: all .75s;
  transition: all .75s;
}

.kx-header .kx-nav > li > a:hover:after{
  -webkit-transform: scale(1,1);
  -ms-transform: scale(1,1);
  -o-transform: scale(1,1);
  transform: scale(1,1);
}
.kx-header .kx-nav > li > .kx-active:after{
  -webkit-transform: scale(1,1);
  -ms-transform: scale(1,1);
  -o-transform: scale(1,1);
  transform: scale(1,1);
}

.kx-header .kx-nav li .kx-slide-btn{
  line-height: 60px;
  cursor: pointer;
}
.kx-header .kx-nav li .kx-slide-btn img{
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.kx-header .kx-nav li .kx-slide-btn span{
  font-size: 16px;
  color: #fff;
}

.kx-header .kx-nav li .kx-header-slide{
  width: 150px;
  position: absolute;
  left: 0;
  top: 60px;
  background: #fff;
  -webkit-box-shadow: 0 0 10px 1px rgba(0,0,0,.2);
  box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
  padding: 0 10px;
  padding: 10px 0;
  border-radius: 0 0 5px 5px;
  display: none;
}

.kx-header .kx-nav li .kx-header-slide li{
  padding-left: 0;
  list-style: none;
  line-height: 35px;

}
.kx-header .kx-nav li .kx-header-slide li a{
  text-decoration: none;
  font-size: 14px;
  color: #333;
  padding-left: 25px;
  display: block;

}

</style>

