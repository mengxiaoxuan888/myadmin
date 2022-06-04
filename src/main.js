import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

Vue.config.productionTip = false
//应用插件
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
