# LearningVue
Learning Vue
先确定有安装过nood.js Vue webpack

vue init webpack my-project
最新版的都会自动装 路由vue-router，如果没有自动装的话npm install vue-router
my-project可以自己命名

cd my-project
npm install

然后可以把我这里的src文件夹覆盖原来的src

npm run dev
可以自己调试测试，没问题就套用到自己的项目里。
这里暂时有
导航tab切换页面功能
点击添加todolist
删除当前一条
点击切换隐藏显示
点击切换当前容器class
官网一样简单循环

main.js 没修改默认的
index.js 路由 简单的修改过加了几条导航tab需要的页面；
其他的都可以自己建，所以都是新的或者全修改过

切换页面回到顶部的官方解决方案，和案例
https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js
https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8

他人解决方案
 export default {
        watch:{
            '$route':function(to,from){
　　　　　　　　　　 document.body.scrollTop = 0；
                 document.documentElement.scrollTop = 0; 
           }
        }
    }
