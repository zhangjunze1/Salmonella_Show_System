<template>
  <div id="app" class="myhome">
    <div class="home-banner">
      <div class="banner-container">
        <p class="home-title" style="color: whitesmoke">
          Data Charts
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataCharts'
}
</script>

<style scoped>
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
  min-height: 100%;
  margin-top: 0.5%;
  line-height: 1.5;
  color: black;
  width: 100%;
}
.home-title {
  font-size: 20px;
}
</style>
