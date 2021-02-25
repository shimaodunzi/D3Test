import Index from '../../views'
import Rotate from '../../views/other/rotate-carousel'
import Carousel from "../../views/other/carousel"
import CircleCarousel from "../../views/other/circle-carousel"

export default {
  path: "/other",
  meta: {title: "其他"},
  component: Index,
  redirect: "/other/Rotate",
  children: [
    {
      path: "Carousel",
      meta: {title: "轮播"},
      component: Carousel,
    },
    {
      path: "Rotate",
      meta: {title: "弧形轮播"},
      component: Rotate,
    },
    {
      path: "Circle",
      meta: {title: "圆形轮播"},
      component: CircleCarousel,
    },
  ],
}
