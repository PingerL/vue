import Vue from 'vue'
import App from './App.vue'
import router from './router' //导入 router

Vue.config.productionTip = false

new Vue({
  router, // 通过 router 配置参数注入路由，从而让整个应用都有路由功能
  render: h => h(App)
}).$mount('#app')
