<template>
  <div id="app" class="myhome" >
    <div class="home-banner">
      <div class="banner-container">
        <p class="home-title" style="color: whitesmoke">
          沙门氏杆菌展示系统
        </p>
<!--        &lt;!&ndash; 向下滚动 &ndash;&gt;-->
<!--        <div class="scroll-down" @click="scrollDown">-->
<!--          <h4><i class="el-icon-arrow-down" style="color: whitesmoke"></i></h4>-->
<!--        </div>-->
      </div>
    </div>
    <div class="m-home">
      <div class="container">
        <div class="row" >
          <div class="col-md-10">
            <div class="ibox-title" style="width: 95%; height: 16.67%;">
              <p class="home-title">研究菌群概述</p>
              <p style="text-align: left;margin-top: -5.10%;font-size: 0.3rem">沙门氏菌属（Salmonella）是一大群寄生于人类和动物肠道内生化反应和抗原构造相似的革兰氏阴性杆菌。本展示系统旨在通过将沙门杆菌不同的血清种类抗生素的研究实现基本的年、省、血清种类等信息的数据库检索和实现数据库内菌株的采样宿主、血清型、菌株的分布情况的可视化功能。</p>
            </div>
<!--&lt;!&ndash;            左一&ndash;&gt;-->
          </div>
        </div>
        <div class="row" style="margin-top: 2%">
          <div class="col-md-5">
            <div class="ibox float-e-margins">
              <div class="ibox-title" style="width: 47%;height: 31.375%;margin-top: 3%">
                <p class="home-title">Visit Map</p>
                <a href="https://clustrmaps.com/site/1biyz" title="Visit tracker"><img style="margin-top: -9%;" src="//clustrmaps.com/map_v2.png?cl=080808&w=500&t=m&d=83coUy6Rxh1QXy69RFx_WvfA4T_pf1vCwg7k3KvHIcI&co=ffffff&ct=808080" /></a>
              </div>
            </div>
          </div>
          <div class="col-md-5" style="margin-left: 4%">
            <div class="ibox float-e-margins">
              <div class="ibox-title" style="width: 47%;height: 31.375%;margin-top: 3%">
                <p class="home-title">Data Retrieval</p>
                <a href="http://localhost:8080/#/dataQuery" title="Data Retrieval"><img style="margin-top: -9%;" src="../assets/img/data.png" /></a>
              </div>
            </div>
          </div>
        </div>
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
    console.log(window.sessionStorage.getItem('id'))
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
  padding-top: 5% !important;
  padding-bottom: 0px !important;
}
.home-title {
  font-size: 20px;
}
.home-banner {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     height: 5%;
    /*  background: #EEEEEE;*/
    /* background: url("../assets/img/system.jpg") center center /*/
    /*cover no-repeat;*/
     background-color: #1b2327;
     background-attachment: fixed;
     text-align: center;
     color: #fff !important;
     animation: header-effect 1s !important;
   }
.banner-container {
  margin-top: 0.5%;
  line-height: 1.5;
  color: black;
}
.blog-contact a {
     color: #fff !important;
   }
.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: -3.958%;
  width: 100%;
}
.scroll-down i {
  font-size: 0.75rem;
}
body {
  background: url("../assets/img/bg.png");
}
.container {
  width: 100%;
}

.row {
  width: 100%;
  padding-right: 0%;
  padding-left: 5%;
}

.col-md-10 {
  position: relative;
  min-height: 10%;
  padding-right: 0%;
  width: 100%;
  box-shadow: 0 0.0825rem 0.556rem rgba(51,51,51,0.25);
}

.ibox-title {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background-color: #ffffff;
  border-color: #e7eaec;
  -webkit-border-image: none;
  -o-border-image: none;
  border-image: none;
  border-style: solid solid none;
  border-width: 0 0 0;
  color: inherit;
  margin-bottom: 0;
  padding: 0.7% 0.7% 0.5%;
  min-height: 0.889rem;
}

.ibox {
  clear: both;
  margin-bottom: 0.7%;
  margin-top: 0;
  padding: 0;
}
.col-md-5 {
  position: relative;
  min-height: 10%;
  padding-right: 0%;
  width: 48%;
  box-shadow: 0 0.0825rem 0.556rem rgba(51,51,51,0.25);
}
</style>
