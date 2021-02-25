<template>
  <div style="background: #cccccc">
    <div
      class="holderCircle"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <div class="dotCircle" ref="dotCircle" :style="dotCircleStyle">
        <span
          class="itemDot"
          :style="itemDotStyle(index)"
          :class="[`itemDot${index + 1}`, { active: active == index }]"
          :data-tab="index"
          v-for="(item, index) in itemList"
          :key="index"
          @click="itemClick(index)"
        >
          <div class="item-text" :style="textStyle">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-num">{{ item.num }}</div>
          </div>
        </span>
      </div>

      <div
        class="contentCircle"
        ref="contentCircle"
        :style="contentCircleStyle"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rotate",
  data() {
    return {
      renderer: null,
      width: 400, //容器高度
      height: 400, //容器宽度
      baseL: 0,
      isClockwise: true, //是顺时针
      scale: 0.5, //圆的缩放
      time: 5000, //轮播时间
      i: 1,
      timer: null,
      active: 0,
      itemList: [
        {
          name: "成功数据",
          num: 233
        },
        {
          name: "失败数据",
          num: 15
        },
        {
          name: "中等数据",
          num: 15
        },
        {
          name: "中等2数据",
          num: 15
        }
      ]
    };
  },
  created() {
    if (this.itemList.length == 2) {
      this.itemList.splice(1, 0, {});
      this.itemList.splice(3, 0, {});
    }
    if (this.width > this.height) {
      this.baseL = this.width;
    } else {
      this.baseL = this.height;
    }
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  computed: {
    textStyle() {
      let style = {};
      style.position = "absolute";
      style.top = `${((this.baseL / 4) * 1.4 * 2) / 3 / 3}px`;
      style.left = "0";
      style.right = "0";
      style.margin = "auto";
      return style;
    },
    dotCircleStyle() {
      let style = {};
      style.height = `${this.baseL * this.scale}px`;
      return style;
    },
    contentCircleStyle() {
      let style = {};
      style.width = `${this.baseL / 2}px`;
      style.height = `${this.baseL / 2}px`;
      style.top = `${this.baseL / 4}px`;
      style.transform = `scaleY(${this.scale})`;
      return style;
    }
  },
  methods: {
    itemDotStyle(index) {
      let style = {};
      style.width = `${this.baseL / 4}px`;
      style.height = `${(this.baseL / 4) * 1.5}px`;
      console.log("Kankan index",index,this.itemList)
      if(!this.itemList[1].name&&(index==1||index==3)){
        style.display="none"
      }
      return style;
    },
    drawChart() {
      var fields = document.getElementsByClassName("itemDot");
      var container = this.$refs.dotCircle;
      var width = container.offsetWidth;
      var radius = width / 2.5;
      var height = container.offsetHeight;
      var angle = 0,
        step = (2 * Math.PI) / fields.length;
      Object.values(fields).forEach(item => {
        var x = Math.round(
          width / 2 + radius * Math.cos(angle) - item.offsetWidth / 2
        );
        var y = Math.round(
          height / 2 + radius * Math.sin(angle) - item.offsetHeight / 2
        );
        item.style.left = `${x - 10}px`;
        item.style.top = `${y}px`;
        angle += step;
      });
      this.autoCausol();
    },
    itemClick(dataTab) {
      this.i = dataTab;
      let dotCircleRotate = 360 - (this.i * 360) / this.itemList.length;
      this.$refs.dotCircle.style.transform = `rotate(${dotCircleRotate}deg)`;
      this.$refs.dotCircle.style.transition = "2s";
      console.log("外圆角度", dotCircleRotate);
      let itemDot = document.getElementsByClassName("itemDot");
      let itemDotRotate = (this.i * 360) / this.itemList.length;
      console.log("内部旋转角度", this.i, itemDotRotate);
      Object.values(itemDot).forEach(item => {
        item.style.transform = `rotate(${itemDotRotate}deg)`;
        item.style.transition = "1s";
      });
    },
    autoCausol() {
      this.timer = setInterval(() => {
        // if(this.i>this.itemList.length){
        //   this.i=0;
        // }
        // let dotCircleRotate =
        //   360 - ((this.i + this.itemList.length) * 360) / this.itemList.length;
        // let itemDotRotate = (this.i * 360) / this.itemList.length;
        // console.log("看看内外圆角", dotCircleRotate, itemDotRotate);
        // this.$refs.dotCircle.style.transform = `rotate(${dotCircleRotate}deg)`;
        // this.$refs.dotCircle.style.transition = "2s";
        // let itemDot = document.getElementsByClassName("itemDot");
        // Object.values(itemDot).forEach(item => {
        //   item.style.transform = `rotate(${itemDotRotate}deg)`;
        //   item.style.transition = "1s";
        // });
        // this.i++;
        let circle = document.getElementsByClassName("itemDot");
        console.log("看看circle", circle, circle.length);
        var topCircleNTH = 0;
        var c1Top = circle[0].style.top;
        var c1Right = circle[0].style.left;
        console.log("circle[0] top", c1Top, c1Right);
        for (var i = 0; i < circle.length; i++) {
          var j = i + 1;
          if (i === circle.length - 1) {
            console.log("一样", i, circle[i]);
            circle[i].style.top = c1Top;
            circle[i].style.left = c1Right;
          } else {
            console.log("不一样", i, j, circle[j]);
            circle[i].style.top = circle[j].style.top;
            circle[i].style.left = circle[j].style.left;
          }
          if (circle[i].style.left <= circle[topCircleNTH].left) {
            topCircleNTH = index;
          }
        }
      }, this.time);
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style>
.holderCircle {
  border-radius: 100%;
  margin: 60px auto;
  position: relative;
}
.dotCircle {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100%;
  z-index: 20;
}
.itemDot {
  display: block;
  position: absolute;
  background: #ddd;
  color: #fff;
  background: url("../../assets/image/rotate-carousel/item_circleBg@2x.png")
    no-repeat center;
  background-size: 100%;
  /*border-radius: 100%;*/
  text-align: center;
  z-index: 3;
  vertical-align: middle;
  transition-duration: 1000ms;
  transition-property: all;
  transition-timing-function: ease-in-out;
}
.item-name {
  font-size: 13px;
}
.item-num {
  font-size: 22px;
}
.contentCircle {
  /*border-radius: 100%;*/
  color: #fff;
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0px 0px 69px 1px #2b152e;
  margin: auto;
}
</style>
