import Vue from 'vue'
import VueRouter from 'vue-router'
import Arouter from '../components/A-router.vue'
import Brouter from '../components/B-router.vue'
import Crouter from '../components/C-router.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    name:'root',
    path:'/',
    components: {default:Home}
  },
  {
    name: 'router-a',
    path: '/a',
    component: Arouter
  },
  {
    name: 'router-b',
    path: '/b',
    component: Brouter
  },
  {
    name: 'router-c',
    path:'/c/:id', //动态路径参数 以冒号开头，当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
    component: Crouter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
