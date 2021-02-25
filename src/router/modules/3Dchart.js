// 报表
import Index from '../../views'
import Bar from '../../views/chart/bar-chart'
import DBar from '../../views/chart/3D-bar-chart'
import LineChart from '../../views/chart/line-chart'
import AreaChart from '../../views/chart/area-chart'
import PieChart from "../../views/chart/ring-chart"

export default {
  path: "/olap",
  meta: { title: "D3图表" },
  component: Index,
  redirect:"/olap/bar",
  children:[
    {
      path:"bar",
      meta:{title:"柱状图"},
      component: Bar,
    },
    {
      path:"DBar",
      meta:{title:"3D柱状图"},
      component: DBar,
    },
    {
      path:"LineChart",
      meta:{title:"基本线性图"},
      component: LineChart,
    },
    {
      path:"AreaChart",
      meta:{title:"基本面积图"},
      component: AreaChart,
    },
    {
      path:"PieChart",
      meta:{title:"基本饼图"},
      component: PieChart,
    },
    {
      path:"RingChart",
      meta:{title:"基本环形图"},
      component: PieChart,
    },
    {
      path:"3dPieChart",
      meta:{title:"3D饼图"},
      component: PieChart,
    },
  ]
}
