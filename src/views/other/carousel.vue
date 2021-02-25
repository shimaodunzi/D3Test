<template>
    <div class="carousel">
      <div class="table">
        <table border="1" >
          <div ref="table" :style="tableStyle" :class="{ marquee_top: animate }">
            <tr>
              <th><span class="table-item">序号</span></th>
              <th><span class="table-item">姓名</span></th>
              <th><span class="table-item">分数</span></th>
              <th><span class="table-item">描述</span></th>
            </tr>

            <tr v-for="(item,index) in tableData" :key="index">
              <td><span class="table-item">{{item.index}}</span></td>
              <td><span class="table-item">{{item.name}}</span></td>
              <td><span class="table-item">{{item.score}}</span></td>
              <td><span class="table-item">{{item.description}}</span></td>
            </tr>
          </div>

        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "carousel",
      data(){
          return{
            tableData:[
              {
                index: 1,
                name: "Lucy",
                score: "98",
                description: "long description that make up the number of amount"
              },
              {
                index: 2,
                name: "Lily",
                score: "92",
                description: "long"
              },
              {
                index: 3,
                name: "Merry",
                score: "81",
                description: "long description that make up the number of amount"
              },
              {
                index: 4,
                name: "John",
                score: "99",
                description: "long"
              },
              {
                index: 5,
                name: "Davi",
                score: "62",
                description: "long description that make up the number of amount"
              },
              {
                index: 6,
                name: "Lucy",
                score: "98",
                description: "long"
              },
              {
                index: 7,
                name: "Lily",
                score: "92",
                description: "long description that make up the number of amount"
              },
              {
                index: 8,
                name: "Merry",
                score: "81",
                description: "long dt"
              },
              {
                index: 9,
                name: "John",
                score: "99",
                description: "long description that make up the number of amount"
              },
              {
                index: 10,
                name: "Davi",
                score: "62",
                description: "long description"
              }
            ],
            timer:null,
            speed:2000,
            height:100,
            page:10,
            carouselRow:2,
            distance:0,
            animate:false,
          }
      },
      computed:{
        tableStyle(){
          let style={};
          style.height=this.height+"px";
          style.overflow="hidden";
          if (this.animate) {
            style.marginTop= this.distance+"px";
          }
          return style;
        }
      },
      created() {
        setTimeout(()=>{
          let table=this.$refs.table.getElementsByTagName("tr");
          this.height=0;
          for(let i=0;i<this.page;i++){
            this.height=this.height+table[i].clientHeight
          }
          this.timer=setInterval(()=>{
            this.carousel();
          },this.speed)
        },500)

      },
      methods:{
        carousel(){
          let trHeight =this.$refs.table.getElementsByTagName("tr");
          let Y = 0;
          for(let i=0;i<this.carouselRow;i++){
            Y = Y + trHeight[i].clientHeight;
            this.tableData.push(this.tableData[i]);
          }
          this.distance = 0;
          this.distance = this.distance - Y;
          this.animate = true;
          setTimeout(() => {
            this.tableData.splice(0,this.carouselRow);
            this.animate = false;
            this.height = 0;
            for (let i = 0; i <= this.page; i++) {
              this.height =
                this.height + trHeight[i].clientHeight;
            }
          }, 500);
        }
      },
      destroyed() {
        clearInterval(this.timer);
      }
    }
</script>

<style scoped>
.carousel{
height: 100%;
}
  .table{
    margin-top: 100px;
    display: inline-block;
    overflow: hidden;
  }
  .table-item{
    padding: 0px 10px;
  }
.marquee_top {
  transition: all 0.5s ease-out;
}
</style>
