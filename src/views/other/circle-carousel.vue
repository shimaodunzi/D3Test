<template>
  <div class="container">
    <div style="width:60%;margin:300px auto;">
      <div id="circles-container-text">
        <div id="main-circle-content-text"></div>
        <div id="circle-text">
          <div class="min-circle" data-inside="min-circle"> <a href="imgs/a1.png" style="display:block;width:80%;margin:30% 10%;height:40%;text-align:center;font-size:1.2em;"> Title </a>
            <div class="content-text">
              <h2>Title</h2>
              <p>we are always keep for nice idea about sun and other copleted jobs about us.</p>
              <p><em>EM</em> is good way about tiger and it...</p>
              <img src="imgs/a1.png" alt="" style="width:20%;height:20%;float:left;"> Is it possible to improve some taskes..this text have no meaning any way :). </div>
          </div>
          <div class="min-circle" data-inside="min-circle"> <a href="imgs/a2.png" style="display:block;width:80%;margin:30% 10%;height:40%;text-align:center;font-size:1.2em;"> About </a>
            <div class="content-text">
              <h2>About</h2>
              <p>we are always keep for nice idea about sun and other copleted jobs about us.</p>
              <p><em>EM</em> is good way about tiger and it...</p>
              <span class="fa fa-heart" style="color:red;font-size:2.2em;"></span>Is it possible to improve some :) </div>
          </div>
          <div class="min-circle" data-inside="min-circle"> <a href="imgs/a3.png" style="display:block;width:80%;margin:30% 10%;height:40%;text-align:center;font-size:1.2em;"> Services </a>
            <div class="content-text">
              <h2>Services</h2>
              <p>Services always keep for nice idea about sun and other copleted jobs about us.</p>
              <p><b>Bold</b> is good way about tiger and it...</p>
              <span class="fa fa-link" style="color:green;font-size:1em;"></span>Is it possible to improve some taskes..this text have no meaning any way :). </div>
          </div>
          <div class="min-circle" data-inside="min-circle"> <a href="imgs/a4.png" style="display:block;width:80%;margin:30% 10%;height:40%;text-align:center;font-size:1.2em;"> Support </a>
            <div class="content-text">
              <h2>Support</h2>
              <p>Support always keep for nice idea about sun and other copleted jobs about us.</p>
              <p><b>Yep</b> is good way about tiger and it...</p>
              <span class="fa fa-download" style="color:blue;font-size:1em;"></span>Is it possible to improve some taskes..this text have no meaning any way :). </div>
          </div>
          <div class="min-circle" data-inside="min-circle"> <a href="imgs/a5.png" style="display:block;width:80%;margin:30% 10%;height:40%;text-align:center;font-size:1.2em;"> Offers </a>
            <div class="content-text">
              <h2>Offers</h2>
              <p>Offers always keep for nice idea about sun and other copleted jobs about us.</p>
              <p>is good way about tiger and it...</p>
              <span class="fa fa-circle" style="color:green;font-size:1em;"></span>Is it possible to improve some taskes..this text have no meaning any way :). </div>
          </div>
          <div class="min-circle" data-inside="min-circle"> <a href="imgs/a6.png" style="display:block;width:80%;margin:30% 10%;height:40%;text-align:center;font-size:1.2em;"> Jobs </a>
            <div class="content-text">
              <h2>Jobs</h2>
              <p>Jobs always keep for nice idea about sun and other copleted jobs about us.</p>
              <p><b>Bold</b> is good way about tiger and it...</p>
              <span class="fa fa-list" style="color:red;font-size:1em;"></span>Is it possible to improve some taskes..this text have no meaning any way :). </div>
          </div>
          <div class="min-circle" data-inside="min-circle"> <a href="imgs/a7.png" style="display:block;width:80%;margin:30% 10%;height:40%;text-align:center;font-size:1.2em;"> Like </a>
            <div class="content-text">
              <h2>Like</h2>
              <p>Like always keep for nice idea about sun and other copleted jobs about us.</p>
              <p><span class="fa fa-gg" style="color:green;font-size:3em;"> is good way about tiger and it...</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "circle-carousel",
  data() {
    return {
      options: {
        container: "circles-container-text", // Contains All Content, DIV ID
        circle: "circle-text", // DIV That Contain Mini DIVs Circles ,Div ID
        mainContent: "main-circle-content-text", // Center Big Circle, DIV ID
        minCirclesClass: "min-circle", // Class Name For Mini Circles DIVs
        minCircles: [], // For Internal Use, Array Of Mini Circles DIVs
        mainViewStyle: "normal", // 默认状态，[正常|放大视图]
        animateCircles: true, //设置小圆圈动画？[是|否]
        animateType: "rotateAround", // 迷你圆动画类型["rotateAround", "rotateSelf", "fade"]
        animateStatus: "play", // 动画[暂停|播放]
        speed: 3, // 动画延迟时间（速度）[秒数]
        stopOnOverMain: true, //将鼠标移到主圆上停止动画[真|假]
        stopOnOverMini: true, //将鼠标移到任何小圆圈上停止动画[真|假]
        minCirclesEffectOver: "none", // 鼠标移到小圆圈上时的效果[脉冲、缩放、翻转、旋转]
        contentType: "text", // 主要内容类型[图像|文本]
        mainContentOverAction: "normal" // 用鼠标放大中心区域
      }
    };
  },
  mounted() {
    this.init1();
    this.init();
  },
  methods: {
    init1() {
      this.options.container = document.getElementById(this.options.container);
      this.options.circle = document.getElementById(this.options.circle);
      this.options.mainContent = document.getElementById(
        this.options.mainContent
      );
      this.options.container.className =
        this.options.container.className + " circles-container";
      this.options.circle.className = this.options.circle.className + " circle";
      this.options.mainContent.className =
        this.options.mainContent.className + " main-circle-content";
      if (this.options.mainViewStyle == "enlarge-view")
        this.options.mainContent.className =
          this.options.mainContent.className + " enlarge-view";
      var mCircles = this.options.circle.getElementsByTagName("div");
      var j = 0;
      for (var i = 0; i < mCircles.length; i++) {
        if (mCircles[i].getAttribute("data-inside") == "min-circle") {
          this.options.minCircles[j] = mCircles[i];
          j++;
        }
      }
      this.options.circleNumber = this.options.minCircles.length;
      if (this.options.mainContentOverAction === "enlarge-view") {
        this.options.mainContent.className =
          this.options.mainContent.className + " enlarge-main-circle-content";
      }
      if (this.options.animateCircles) {
        var _ = this;
        var animationRepeat;
        animationRepeat = setInterval(
          this.animate,
          _.options.speed * 1000,
          this,
        );
        if (_.options.stopOnOverMini) {
          for (var i = 0; i < this.options.circleNumber; i++) {
            this.options.minCircles[i].addEventListener(
              "mouseover",
              function() {
                _.options.animateStatus = "pause";
              }
            );
            this.options.minCircles[i].addEventListener("mouseout", function() {
              _.options.animateStatus = "play";
            });
          }
        }
      }
      // if (this.options.minCirclesEffectOver != "none") {
      //   var minCirclesEffects = ["pulse", "zoomOutIn", "flip", "rotate"];
      //   for (var a in minCirclesEffects) {
      //     if (this.options.minCirclesEffectOver == minCirclesEffects[a]) {
      //       var divs = this.options.minCircles;
      //       for (var i = 0; i < divs.length; i++) {
      //         divs[i].className =
      //           divs[i].className + " " + minCirclesEffects[a];
      //       }
      //     }
      //   }
      // }
    },
    getStyle(elem, name) {
      if (elem.style[name]) return elem.style[name];
      else if (elem.currentStyle) return elem.currentStyle[name];
      else if (document.defaultView && document.defaultView.getComputedStyle) {
        var s = document.defaultView.getComputedStyle(elem, "");
        return s && s.getPropertyValue(name);
      } else {
        return null;
      }
    },
    init() {
      var {
        circle,
        container,
        circleNumber,
        mainContent,
        contentType
      } = this.options;
      var _ = this;
      if (circleNumber > 0) {
        //初始化样式
        var r = parseFloat(this.getStyle(circle, "width")) / 2 - 2;
        var s = (2 * Math.PI) / circleNumber;
        var l = s * r;
        var minCirclesR = (l - l * 0.1) / 2;
        // var mainCircleR =
        //   parseFloat(this.getStyle(circle, "width")) - minCirclesR;
        container.style.margin = 2 * minCirclesR + "px auto";
        circle.style.height = parseFloat(this.getStyle(circle, "width")) + "px";
        container.style.height =
          parseFloat(this.getStyle(circle, "width")) + 200 + "px";
        mainContent.style.width =
          parseFloat(this.getStyle(circle, "width")) + "px";
        mainContent.style.height =
          parseFloat(this.getStyle(circle, "width")) + "px";

        var mCircle;
        for (var i = 0; i < circleNumber; i++) {
          mCircle = this.options.minCircles[i];
          var si = s * i;
          var x = (r + 1.4 * minCirclesR) * Math.cos(si);
          var y = (r + 1.4 * minCirclesR) * Math.sin(si);
          var right = r - minCirclesR - x;
          var top = r - minCirclesR - y;

          mCircle.style.right = right + "px";
          mCircle.style.top = top + "px";
          mCircle.style.width = 2 * minCirclesR + "px";
          mCircle.style.height = 2 * minCirclesR + "px";

          mCircle
            .getElementsByTagName("a")[0]
            .addEventListener("click", function(e) {
              e.preventDefault();

               if (contentType == "text") {
                mainContent.innerHTML = this.parentNode.getElementsByTagName(
                  "div"
                )[0].innerHTML;
              }
            });
          if (_.options.stopOnOverMain) {
            mainContent.addEventListener("mouseover", function() {
              if (_.options.animateStatus == "play")
                _.options.animateStatus = "pause";
            });
            mainContent.addEventListener("mouseout", function() {
              if (_.options.animateStatus == "pause")
                _.options.animateStatus = "play";
            });
          }
        }
       if (this.options.contentType == "text")
          mainContent.innerHTML = circle
            .getElementsByTagName("div")[0]
            .getElementsByTagName("div")[0].innerHTML;
        return _;
      } else {
        return null;
      }
    },
    animate(elem) {
      if (!elem.options.animateCircles || elem.options.animateStatus == "pause")
        return;
      // var circle = elem.options.circle;
      var div = elem.options.minCircles;
      var topCircleNTH = 0;
      var c1Top = this.getStyle(div[0], "top");
      var c1Right = this.getStyle(div[0], "right");
      for (var i = 0; i < elem.options.circleNumber; i++) {
        var j = i + 1;
        if (i == elem.options.circleNumber - 1) {
          div[i].style.top = c1Top;
          div[i].style.right = c1Right;
        } else {
          div[i].style.top = this.getStyle(div[j], "top");
          div[i].style.right = this.getStyle(div[j], "right");
        }
        if (
          parseInt(this.getStyle(div[i], "right")) <=
          parseInt(this.getStyle(div[topCircleNTH], "right"))
        ) {
          topCircleNTH = i;
        }
      }
      if (elem.options.contentType == "text"){
        elem.options.mainContent.innerHTML = div[
          topCircleNTH
          ].getElementsByTagName("div")[0].innerHTML;
      }
    }
  }
};
</script>

<style>
.circles-container {
  position: relative;
  width: 60%;
  height: 60%;
  z-index: 99;
}
.main-circle-content {
  position: relative;
  border-radius: 50%;
  border-width: 0px;
  overflow: hidden;
  background-color: #eaeaea;
  left: 5%;
  top: 5%;
  width: 88%;
  height: 88%;
  padding: 1%;
  z-index: 10;
  opacity: 1;
  text-align: center;
  transition-timing-function: ease-in-out;
  transition-property: all;
  transition-duration: 300ms;
}
.main-circle-content img {
  width: 100%;
  height: 100%;
  border-width: 0px;
  border-radius: 50%;
  transition-timing-function: ease-in-out;
  transition-property: all;
  transition-duration: 300ms;
}
.main-circle-content .caption {
  position: absolute;
  bottom: 20%;
  left: 15%;
  right: 15%;
  width: 66%;
  color: #fff;
  opacity: 0;
  font-size: 1.1em;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition-timing-function: ease-in-out;
  transition-property: all;
  transition-duration: 300ms;
}
.main-circle-content:hover .caption,
.main-circle-content:focus .caption {
  opacity: 0.6;
  transition-timing-function: ease-in-out;
  transition-property: all;
  transition-duration: 300ms;
}
.circle {
  position: absolute;
  left: 5%;
  top: 5%;
  width: 89%;
  border-width: 0px;
  border-radius: 50%;
  text-align: center;
}

.min-circle {
  position: absolute;
  z-index: 999;
  border: 1px solid #aeaeae;
  text-align: center;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  background-color: #efefef;
  overflow: hidden;
  font-size: 1em;
  transition-duration: 1000ms;
  transition-property: all;
  transition-timing-function: ease-in-out;
}
.min-circle img {
  width: 100%;
  height: 100%;
}
.min-circle .content-text {
  visibility: hidden;
  font-size: 0.8em;
}
/***** End Main Elements Structure *****/

/***** RunTime Styles *****/
/*.enlarge-view,*/
/*.enlarge-view img {*/
  /*border-radius: 10%;*/
/*}*/
/*.enlarge-main-circle-content,*/
/*.enlarge-main-circle-content img {*/
  /*animation-duration: 300ms;*/
  /*animation-timing-function: ease-in-out;*/
/*}*/
/*.enlarge-main-circle-content:hover,*/
/*.enlarge-main-circle-content:focus,*/
/*.enlarge-main-circle-content img:hover,*/
/*.enlarge-main-circle-content img:focus {*/
  /*animation-name: borderfulldown;*/
  /*animation-duration: 300ms;*/
  /*animation-timing-function: ease-in-out;*/
  /*animation-iteration-count: 1;*/
  /*animation-fill-mode: forwards;*/
  /*border-radius: 10%;*/
/*}*/
/*@keyframes borderfulldown {*/
  /*0% {*/
    /*border-radius: 50%;*/
  /*}*/
  /*10% {*/
    /*border-radius: 40%;*/
  /*}*/
  /*20% {*/
    /*border-radius: 30%;*/
  /*}*/
  /*30% {*/
    /*border-radius: 20%;*/
  /*}*/
  /*40% {*/
    /*border-radius: 10%;*/
  /*}*/
  /*50% {*/
    /*border-radius: 0%;*/
  /*}*/
  /*60% {*/
    /*border-radius: 10%;*/
  /*}*/
  /*70% {*/
    /*border-radius: 13%;*/
  /*}*/
  /*80% {*/
    /*border-radius: 16%;*/
  /*}*/
  /*90% {*/
    /*border-radius: 12%;*/
  /*}*/
  /*100% {*/
    /*border-radius: 10%;*/
  /*}*/
/*}*/

/***** End RunTime Styles *****/

/***** On Over Mini Circles *****/
/*.pulse:hover,*/
/*.pulse img:hover {*/
  /*animation-name: pulse;*/
  /*animation-duration: 200ms;*/
  /*animation-timing-function: ease-in-out;*/
  /*animation-fill-mode: forwards;*/
/*}*/
/*.zoomOutIn:hover,*/
/*.zoomOutIn img:hover {*/
  /*animation-name: zoomOutIn;*/
  /*animation-duration: 600ms;*/
  /*animation-timing-function: ease-in-out;*/
  /*animation-fill-mode: forwards;*/
/*}*/
/*.flip:hover,*/
/*.flip img:hover {*/
  /*animation-name: flip;*/
  /*animation-duration: 600ms;*/
  /*animation-timing-function: ease-in-out;*/
  /*animation-fill-mode: forwards;*/
/*}*/
/*.rotate:hover,*/
/*.rotate img:hover {*/
  /*animation-name: rotate;*/
  /*animation-duration: 200ms;*/
  /*animation-timing-function: ease-in-out;*/
  /*animation-fill-mode: backwards;*/
  /*animation-iteration-count: 1;*/
/*}*/
/*@keyframes pulse {*/
  /*0% {*/
    /*transform: scale(1);*/
  /*}*/
  /*50% {*/
    /*transform: scale(1.1);*/
  /*}*/
  /*100% {*/
    /*transform: scale(1);*/
  /*}*/
/*}*/
/*@keyframes zoomOutIn {*/
  /*0% {*/
    /*transform: scale(1);*/
  /*}*/
  /*50% {*/
    /*transform: scale(0.5);*/
  /*}*/
  /*100% {*/
    /*transform: scale(1);*/
  /*}*/
/*}*/
/*@keyframes flip {*/
  /*0% {*/
    /*-webkit-transform: scaleY(1);*/
    /*transform: scaleY(1);*/
  /*}*/
  /*50% {*/
    /*-webkit-transform: scaleY(-1);*/
    /*transform: scaleY(-1);*/
  /*}*/
  /*100% {*/
    /*-webkit-transform: scaleY(1);*/
    /*transform: scaleY(1);*/
  /*}*/
/*}*/
/*@keyframes rotate {*/
  /*0% {*/
    /*-webkit-transform: rotate(0deg);*/
    /*transform: rotate(0deg);*/
  /*}*/
  /*100% {*/
    /*-webkit-transform: rotate(360deg);*/
    /*transform: rotate(360deg);*/
  /*}*/
/*}*/
</style>
