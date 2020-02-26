import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//安装的插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

//引入css  @ 代表 src/
import "styles/reset.css"
import "styles/border.css"
import "styles/iconfont.css"
import "styles/iconfont.css"
import "styles/icon.css"
import 'swiper/dist/css/swiper.css'


import "styles/iconfont.js"

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
