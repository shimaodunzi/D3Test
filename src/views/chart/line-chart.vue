<template>
  <div class="area-chart" :id="id" ref="chart"></div>
</template>

<script>
  import * as d3 from "d3";
  export default {
    name: "area-chart",
    data() {
      return {
        id: "chart",
        width: 500,
        height: 250,
        dataset: [1, 8, 5, 6, 8, 9, 3, 5, 2]
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        d3.select("#svg" + this.id).remove();
        let width = this.width ? this.width : 600;
        let height = this.height ? this.height : 600;
        let margin = {left: 50, top: 30, right: 20, bottom: 20};
        let g_width = width - margin.left - margin.right,
          g_height = height - margin.top - margin.bottom;
        //绘制画布
        d3.select("#" + this.id)
          .append("svg")
          //width,height
          .attr("width", width)
          .attr("height", height);
        //绘制主要内容
        var g = d3
          .select("svg")
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //X轴和Y轴的度量
        var scale_x = d3
          .scaleLinear()
          .domain([0, this.dataset.length - 1])
          .range([0, g_width]);
        var scale_y = d3
          .scaleLinear()
          .domain([0, d3.max(this.dataset)])
          .range([g_height, 0]);
        //X轴
        g.append("g")
          .call(d3.axisBottom(scale_x))
          .attr("transform", "translate(0," + g_height + ")");

        //Y轴
        g.append("g").call(d3.axisLeft(scale_y));

        //y轴文字
        g.append("text")
          .text("Price($)")
          .attr("transform", "rotate(-90)")
          .attr("dy", "1em")
          .attr("text-anchor", "end");

        //画线函数
        var line_generator = d3
          .line()
          .x(function (d, i) {
            return scale_x(i);
          })
          .y(function (d) {
            return scale_y(d);
          })
          .curve(d3.curveMonotoneX);
        // .curve(d3.curveMonotoneX) // apply smoothing to the line

        //画路径
        let colorZ = d3.scaleOrdinal(d3.schemeDark2);
        g.append("path")
          .attr("d", line_generator(this.dataset)) //d="M1,0L20,40.....  d-path data
          .attr("fill", "none")
          .attr("stroke", (d, i) => colorZ(0))
          .attr("stroke-width", 2)
          .style("stroke-dasharray", function (d, i) {
            return d3
              .select(this)
              .node()
              .getTotalLength(); //返回用户代理对路径总长度(以用户单位为单位)
          })
          .style("stroke-dashoffset", function (d, i) {
            return d3
              .select(this)
              .node()
              .getTotalLength();
          })
          .transition()
          .duration(2000)
          .ease(d3.easePolyOut)
          .delay((d, i) => i * 200)
          .style("stroke-dashoffset", 0);
      }

    }
  };
</script>

<style scoped>
  #chart {
    background: #ddd;
    width: 500px;
    height: 250px;
  }

  path {
    fill: none;
    stroke: steelblue;
    stroke-width: 2;
  }

  .domain,
  .tick line {
    stroke: gray;
    stroke-width: 1;
  }
</style>
