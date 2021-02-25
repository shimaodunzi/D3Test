<template>
  <div class="pie_chart" :id="id" ref="chart"></div>
</template>

<script>
  import * as d3 from "d3";
  export default {
    name: "ring-chart",
    data() {
      return {
        id: "chart",
        width: 400,
        height: 400,
        data: [
          { name: "北京", value: 55 },
          { name: "厦门", value: 200 },
          { name: "大兴安岭", value: 97 },
          { name: "苏州", value: 10 }
        ]
      };
    },
    methods: {
      init(){
        let width = this.width ? this.width : 600;
        let height = this.height ? this.height : 600;
        //绘制画布
        let svg = d3
          .select(this.$refs.chart)
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .attr("id", "svg" + this.id);
        var g = svg.append("g")
          .attr("transform","translate(200, 200)")

        var arc_generator = d3.arc()
          .innerRadius(100)//设置内半径
          .outerRadius(150)//设置外半径

        var angle_data = d3.pie()
          .value(function(d){return d.value;})

        var color =d3.scaleOrdinal(d3.schemeCategory10);;

        g.selectAll("path")
          .data(angle_data(this.data))
          .enter()
          .append("path")
          .attr("d", arc_generator)
          .style("fill",function(d,i){return color(i)})//给不同的扇形区填充不同的颜色

        g.selectAll("text")//给每个扇形去添加对应文字
          .data(angle_data(this.data))
          .enter()
          .append("text")
          .text(function(d){return d.data.name+"("+d.data.value+")"})
          .attr("transform",function(d){return "translate("+arc_generator.centroid(d)+")"})//调成每个文字的对应位置
          .attr("text-anchor","middle")//是文字居中
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style scoped></style>
