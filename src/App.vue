<template>
  <div id="app">
    <Audio></Audio>
    <router-view/>
  </div>
</template>

<script>
import Audio from './components/music/Audio'
import Vue from 'vue'
export default {
  data () {
    return {
      path: '',
      myApp: new Vue() // 为了非父子组件共享值
    }
  },
  components: {
    Audio
  },
  // 判断路由
  mounted () {
    this.path = this.$route.path
    // console.log(this.$route.path)
  },
  watch: {
    $route (to, from) {
      this.path = to.path
    }
  }
}
</script>
<style>
</style>
