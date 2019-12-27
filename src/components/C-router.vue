<template>
  <div class="c-router">
    <pre>
      这是路由页面 C , 为动态路由匹配、命名路由
      路由传递参数：
      1. 必须在路由内加入路由的 name
      2. 必须在 path 后加 :/+传递的参数，动态路径参数 以冒号开头，
         当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
      3. 通过 $route.params.要传递的参数名来获取参数，此处为：$route.params.id-->{{$route.params.id}}
      
      4. 具体实现：
      1) 在 router/index.js 中，路由C的定义
      {
        name: 'router-c',
        path:'/c/:id',
        component:Crouter
      }
      2) 在 App.vue 中，通过 :to="{name:'router-c',params:{id:123}}" 来传递参数
      3) 在 C-router 中，可以通过 $route.params.id 来读取参数
    </pre>
  </div>
</template>