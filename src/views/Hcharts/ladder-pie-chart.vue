<template>
    <div id="container" ref="chart"></div>
</template>

<script>
  export default {
    name: "test",
    data(){
      return{
        data:[
          {
            name: "Firefox",
            y: 30.0,
          }, {
            name: "IE",
            y: 26.8,
          }, {
            name: "Chrome",
            y: 12.8,
          }, {
            name: "Safari",
            y: 8.5,
          }, {
            "name": "Opera",
            y: 6.2,
          }, {
            name: "Others",
            y: 0.7,
          }]
      }
    },
  };
</script>

<style scoped>
    #container {
        height: 400px;
    }
</style>
