<template>
  <div class="home">
    HOME PAGES
    <pre>
      {
        name:'root',
        path:'/',
        components: {default:Home}
      }
      路由中若使用 components: {}对象，router-view 中又没有指定 name,则默认为 default,路由中
      的 components 对象要指定 default 
    </pre>
  </div>
</template>