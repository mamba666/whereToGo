import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/router/home/Home"
import City from "@/router/city/City"

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
  }
]

const router = new VueRouter({
  routes
})

export default router
