import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/router/home/Home"
import City from "@/router/city/City"
import Detail from "@/router/detail/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  //返回后定位到最顶端
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
