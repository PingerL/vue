(function(e){function t(t){for(var n,u,l=t[0],c=t[1],i=t[2],p=0,f=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/blog/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Vue Router")]),r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/a"}},[e._v("Router-A")]),r("router-link",{attrs:{to:"/b"}},[e._v("Router-B")]),r("router-link",{attrs:{to:{name:"router-c",params:{id:123}}}},[e._v("Router-C")]),r("hr"),r("router-view")],1)},a=[],u=(r("034f"),r("2877")),l={},c=Object(u["a"])(l,o,a,!1,null,null,null),i=c.exports,s=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"a-router"},[e._v(" 这是路由页面 A ,现在是最简单的路由跳转 ")])},f=[],d={},m=Object(u["a"])(d,p,f,!1,null,null,null),v=m.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"b-router"},[e._v(" 这是路由页面 B , this is b-router page ")])},b=[],_={},y=Object(u["a"])(_,h,b,!1,null,null,null),O=y.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"c-router"},[r("pre",[e._v("    这是路由页面 C , 为动态路由匹配、命名路由\n    路由传递参数：\n    1. 必须在路由内加入路由的 name\n    2. 必须在 path 后加 :/+传递的参数，动态路径参数 以冒号开头，\n       当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用\n    3. 通过 $route.params.要传递的参数名来获取参数，此处为：$route.params.id--\x3e"+e._s(e.$route.params.id)+"\n    \n    4. 具体实现：\n    1) 在 router/index.js 中，路由C的定义\n    {\n      name: 'router-c',\n      path:'/c/:id',\n      component:Crouter\n    }\n    2) 在 App.vue 中，通过 :to=\"{name:'router-c',params:{id:123}}\" 来传递参数\n    3) 在 C-router 中，可以通过 $route.params.id 来读取参数\n  ")])])},j=[],w={},x=Object(u["a"])(w,g,j,!1,null,null,null),$=x.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._v(" HOME PAGES "),r("pre",[e._v("    {\n      name:'root',\n      path:'/',\n      components: {default:Home}\n    }\n    路由中若使用 components: {}对象，router-view 中又没有指定 name,则默认为 default,路由中\n    的 components 对象要指定 default \n  ")])])}],P={},k=Object(u["a"])(P,C,E,!1,null,null,null),S=k.exports;n["a"].use(s["a"]);var M=[{name:"root",path:"/",components:{default:S}},{name:"router-a",path:"/a",component:v},{name:"router-b",path:"/b",component:O},{name:"router-c",path:"/c/:id",component:$}],A=new s["a"]({mode:"history",base:"/blog/",routes:M}),R=A;n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.cd2f4376.js.map