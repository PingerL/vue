<template>
  <div id="app">
    <h1>Vue Router</h1>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/">Home</router-link>
    <router-link to="/a">Router-A</router-link>
    <router-link to="/b">Router-B</router-link>
    <router-link :to="{name:'router-c',params:{id:123}}">Router-C</router-link>
    <hr>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#app {
  padding: 30px;
}
#app h1,a {
  text-align: center
}
#app a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#app a.router-link-exact-active {
  color: #42b983;
}
</style>
