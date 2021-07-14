<template>
  <div id="app" class="myhome" >
    <div class="home-banner">
      <div class="banner-container">
        <p class="home-title">
          沙门氏杆菌展示系统
        </p>
        <!-- 联系方式 -->
        <div class="blog-contact animated zoomIn">
          <a class="github circular icon button" data-content="https://github.com/zhangjunze1/salmonella_show_system" data-position="bottom center" style="margin-right: 50px"><i class="github icon"></i></a>
          <a class="wechat circular icon button" style="margin-right: 50px"><i class="weixin icon"></i></a>
          <a class="qq circular icon button" data-content="412057605" data-position="bottom center"><i class="qq icon"></i></a>
        </div>

        <!-- 向下滚动 -->
        <div class="scroll-down" @click="scrollDown">
          <h4>向下滚动<i class="el-icon-arrow-down"></i></h4>
        </div>
      </div>
    </div>
    <div class="m-home">
      <div class="ui container">

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/layout/Footer'
export default {
  name: 'System',
  // 注册组件
  components: {
    Footer
  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
    // 初始化
    scrollDown () {
      window.scrollTo({
        behavior: 'smooth',
        top: document.documentElement.clientHeight
      })
    }
  }
}
</script>

<style scoped>
.m-home {
  padding-top: 80vh !important;
  padding-bottom: 0px !important;
}
.home-title {
  font-size: 32px;
  font-weight: 700;
}
.home-banner {
     position: absolute;
     top: 0px;
     left: 0;
     right: 0;
     height: 20vh;
    /*  background: #EEEEEE;*/
    /* background: url("../assets/img/system.jpg") center center /*/
    /*cover no-repeat;*/
     background-color: #EEEEEE;
     background-attachment: fixed;
     text-align: center;
     color: #fff !important;
     animation: header-effect 1s !important;
   }
.banner-container {
  margin-top: 5vh;
  line-height: 1.5;
  color: black;
}
.blog-contact a {
     color: #fff !important;
   }
.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.scroll-down i {
  font-size: 2rem;
}
body {
  background: url("../assets/img/bg.png");
}
</style>
