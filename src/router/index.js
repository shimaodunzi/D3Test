import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index";
import Hcharts from "./modules/Hcharts"
import Dchart from "./modules/3Dchart";
import other from "./modules/other"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
      redirect:"/olap"
    },
    Dchart,
    Hcharts,
    other,
  ]
});
