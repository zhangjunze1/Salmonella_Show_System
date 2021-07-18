<template>
  <div class="hello">
    <p style="font-size: 0.5rem">Serotype Data: total is </p>
    <div :id="'Map'" style="height:600px;width:800px"></div>
  </div>
</template>

<script>
// 1.导入 echarts
import * as echarts from 'echarts'
import 'echarts/map/js/china.js'
// 使用地图 需要先注册地图
export default {
  name: 'map',
  data () {
    return {
      dataList: [],
      total: ''
    }
  },
  mounted () {
    this.drawChart('Province')
    console.log(1)
  },
  created () {
    // console.log(1)
    // this.drawChart('Province')
  },
  methods: {
    // async getData () {
    //   const res = await this.$http.post("/country", this.addForm);
    //   console.log(res.data)
    // }
    drawChart (chartid) {
      var myChart = echarts.init(document.getElementById(chartid))
      var option = {
        title: {
          text: '地图'
        },
        // 控制数据和显示问题
        series: [{
          name: '确诊人数',
          type: 'map', // 告诉echarts 渲染地图
          map: 'china',
          // label默认是不显示的，省份字体
          label: {
            show: true, // 显示各个省份名称
            fontSize: 10
          },
          itemStyle: {
            areaColor: '#fff' // 区域的背景颜色
          },
          emphasis: {
            // 控制鼠标滑过时的高亮样式
            itemStyle: {
              areaColor: '#c7fffd'
            }
          },
          zoom: 1.2, // 控制地图的放大缩小
          data: [
            { name: '南海诸岛', value: 9 },
            { name: '北京', value: 23 },
            { name: '天津', value: 24 },
            { name: '上海', value: 444 },
            { name: '重庆', value: 345 },
            { name: '河北', value: 235 },
            { name: '河南', value: 236 },
            { name: '云南', value: 678 },
            { name: '辽宁', value: 999 },
            { name: '黑龙江', value: 2345 },
            { name: '湖南', value: 1235 },
            { name: '安徽', value: 1234 },
            { name: '山东', value: 3512 },
            { name: '新疆', value: 26 },
            { name: '江苏', value: 976 },
            { name: '浙江', value: 345 },
            { name: '江西', value: 125 },
            { name: '湖北', value: 23 },
            { name: '广西', value: 123 },
            { name: '甘肃', value: 4532 },
            { name: '山西', value: 1234 },
            { name: '内蒙古', value: 3323 },
            { name: '陕西', value: 1122 },
            { name: '吉林', value: 5678 },
            { name: '福建', value: 1234 },
            { name: '贵州', value: 9 },
            { name: '广东', value: 88 },
            { name: '青海', value: 1 },
            { name: '西藏', value: 5 },
            { name: '四川', value: 3 },
            { name: '宁夏', value: 9 },
            { name: '海南', value: 55 },
            { name: '台湾', value: 6666 },
            { name: '香港', value: 777 },
            { name: '澳门', value: 88 }]
        }],
        visualMap: [{
          type: 'piecewise',
          show: true,
          splitNumber: 6,
          pieces: [{
            min: 4
          }, {
            min: 4,
            max: 4
          }, {
            min: 3,
            max: 3
          }, {
            min: 2,
            max: 2
          }, {
            min: 1,
            max: 1
          }, {
            min: 0,
            max: 0
          }],
          inRange: {
            symbol: 'rect',
            color: ['#fff', '#ffaa85', '#ff7b69', '#cc2929', '#8c0d0d', '#660208']
          },
          itemHeight: 10,
          itemWidth: 20
        }],
        tooltip: {
          trigger: 'item'
        }
      }
      option && myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
</style>
