<template>
  <div class="chart-bar" :id="id" ref="chart"></div>
</template>

<script>
import * as d3 from "d3";
// import * as d3Tip from 'd3-tip'
export default {
  name: "bar-chart",
  data(){
    return{
      id:"chart",
      width: 400,
      height: 400,
      data: [
        { name: "北京", value: 55 },
        { name: "厦门", value: 200 },
        { name: "大兴安岭", value: 97 },
        { name: "苏州", value: 10 },
      ],
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //移除
      d3.select("#svg" + this.id).remove();
      let width = this.width ? this.width : 600;
      let height = this.height ? this.height : 600;
      //绘制画布
      let svg = d3
        .select(this.$refs.chart)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "svg" + this.id);
      let begincolor = this.begincolor ? this.begincolor : "steelblue";
      let endcolor = this.endcolor ? this.endcolor : "green";
      let selectcolor = this.selectcolor ? this.selectcolor : "steelblue";
      let linecolorid = "linecolor" + this.id;
      //设置渐变色
      let linearGradient = svg
        .append("defs")
        .append("linearGradient")
        .attr("id", linecolorid)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");
      linearGradient
        .append("stop")
        .attr("offset", "0%")
        .attr("style", "stop-color:" + begincolor + "; stop-opacity:1");
      linearGradient
        .append("stop")
        .attr("offset", "100%")
        .attr("style", "stop-color:" + endcolor + "; stop-opacity:1");
      let gwidth = width - 80;
      let gheight = height - 100;
      let values = this.data.map(d => d.value);
      //设置X轴坐标轴
      let xScale1 = d3
        .scaleBand()
        .range([0, gwidth])
        .domain(this.data.map(d => d.name));
      //设置Y轴坐标轴
      let yScale1 = d3
        .scaleLinear()
        .domain([0, d3.max(values)])
        .range([gheight, 0]);

      // axisBottom x轴Bottom位置绘制坐标轴
      let xAxis = d3.axisBottom().scale(xScale1);
      let yAxis = d3.axisLeft().scale(yScale1);

      //每个柱形的数据坐标轴
      let xScale = d3
        .scaleBand()
        .domain(d3.range(this.data.length))
        .rangeRound([0, gwidth])
        .round(0.05);
      let yScale = d3
        .scaleLinear()
        .domain([0, d3.max(values)])
        .range([0, gheight]);

      //背景柱
      // let num=d3.max(values)>10?10:d3.max(values);
      // var grid = svg
      //   .selectAll(".grid")
      //   .data(yScale1.ticks(num))
      //   .enter()
      //   .append("g")
      //   .attr("class", "grid");
      // grid
      //   .append("line")
      //   .attr("y1", yScale1)
      //   .attr("y2", yScale1)
      //   .attr("x1", 60)
      //   .attr("x2", gwidth+60)
      //   .attr("stroke", "#cccccc");
      let stepArray=d3.ticks(0, d3.max(this.data, d => d.frequency), 10);
      const colors = ["#ccc", "#ddd"] // 用于生成背景柱
      svg.append("g") // 设置背景柱
              .attr("class", "bar--bg-bar")
              .selectAll("rect")
              .data(d3.range(stepArray.length - 1))
              .enter()
              .append("rect")
              .attr("stroke", "none")
              .attr("stroke-width", 0)
              .attr("fill", function(d, i) {
                return colors[i % 2]
              })
              .attr("x", 1)
              .attr("width", width)
              .attr("height", function(d, i) {
                return yScale1(stepArray[i]) - yScale1(stepArray[i + 1])
              })
              .attr("y", function(d, i) {
                return yScale1((i + 1) * stepArray[1])
              })

      // let tip = d3Tip() // 设置tip
      //         .attr('class', 'd3-tip')
      //         .offset([-10, 0])
      //         .html(function(d) {
      //           return (
      //                   '<strong>星期' +
      //                   d.letter +
      //                   "<br>空置率:</strong> <span style='color:#ffeb3b'>" +
      //                   (d.frequency * 100).toFixed(2) +
      //                   '%</span>'
      //           )
      //         })
      //
      // svg.call(tip)

      //绘制每个柱形
      let barSpace = 1; //柱形间的空隙
      svg
        .selectAll("rect")
        .data(values)
        .enter()
        .append("rect")
        .attr("x", (d, i) => 60 + xScale(i))
        .attr("width", xScale.bandwidth() - barSpace)
        .attr("y", 50 + gheight)
        .attr("height", 0)
        .attr("fill", "red")
        .on("click", this.onRectClick)
        //鼠标hover效果
        .on("mouseover", function() {
          // tip.show;
          d3.select(this).attr("fill", selectcolor);
          // .css("cursor","pointer")
        })
        .on("mouseout", function() {
          // tip.hide;
          d3.select(this).attr("fill", "url(#" + linecolorid + ")");
        })
        .transition()
        .duration(1500)
        .ease(d3.easeBounce)
        .delay((d, i) => i * 200)
        .attr("y", d => 50 + gheight - yScale(d))
        .attr("height", yScale)
        .attr("fill", "url(#" + linecolorid + ")");

      svg
        .selectAll("text")
        .data(values)
        .enter()
        .append("text")
        .attr("x", (d, i) => 60 + xScale(i))
        .attr("y", d => 50 + gheight - yScale(d))
        .attr("dx", xScale.bandwidth() / 4)
        .attr("dy", 15)
        .attr("text-anchor", "begin")
        .attr("font-size", () => {
          if (width > 400) return 14;
          else return 10;
        })
        .attr("fill", "white")
        .transition()
        .delay(2000)
        .text(d => d);
      //X轴文字
      let xvalues = svg
        .append("g")
        .attr("transform", "translate(60, " + (gheight + 50) + ")")
        .call(xAxis);

      if (this.rotate) {
        xvalues
          .selectAll("text")
          .attr("dx", -30)
          .attr("dy", 10)
          .attr("transform", "rotate(-30)");
      }
      //Y轴文字
      svg
        .append("g")
        .attr("transform", "translate(60, 50)")
        .call(yAxis);
    },
  },
  watch: {
    data() {
      this.init();
    },
  },
};
</script>

<style scoped></style>
