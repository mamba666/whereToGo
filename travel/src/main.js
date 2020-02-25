import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入css  @ 代表 src/
import "styles/reset.css"
import "styles/border.css"
import "styles/iconfont.css"
import "styles/iconfont.css"
import "styles/icon.css"


import "styles/iconfont.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
