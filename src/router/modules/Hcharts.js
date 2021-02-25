// 报表
import Index from '../../views'
import LadderPie from "../../views/Hcharts/ladder-pie-chart"

export default {
  path: "/Hchart",
  meta: { title: "H图表" },
  component: Index,
  redirect:"/Hchart/LadderPie",
  children:[
    {
      path:"LadderPie",
      meta:{title:"阶梯饼图"},
      component: LadderPie,
    },
  ]
}
