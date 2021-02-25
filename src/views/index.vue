<template>
  <div class="test">
    <head-mune></head-mune>
    <div class="content" :style="contentStyle">
      <div class="mune" style="height: 100%;">
        <mune></mune>
      </div>
      <div class="mune-content">
        <keep-alive :max="1" :include="/-alive/">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

  </div>
</template>

<script>
  import HeadMune from "../components/headMune"
  import Mune from '../components/muneList'
import barChart from "./chart/bar-chart";
import DbarChart from "./chart/3D-bar-chart";
import lineChart from "./chart/line-chart"
export default {
  name: "test",
  data() {
    return {
      chartType: "3Dbar",
      rotate: true,
      data: [
        { name: "北京", value: 55 },
        { name: "厦门", value: 200 },
        { name: "大兴安岭", value: 97 },
        { name: "苏州", value: 10 },
      ],
    };
  },
  computed:{
    contentStyle(){
      let style={};
      let height=(document.documentElement.clientHeight||document.body.clientHeight)-50;
      style.height=height+"px";
      console.log("kankan 高度",style)
      return style;
    }
  },
  created(){

  },
  components: {
    HeadMune,
    Mune,
    barChart,
    DbarChart,
    lineChart,
  },
  methods: {
    test(d, i) {
      console.log("点击", d, i);
    },
  },
};
</script>

<style scoped>
  .content{
    display: flex;
  }
  .mune{
    width: 200px;
  }
  .mune-content{
    flex: 1;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
