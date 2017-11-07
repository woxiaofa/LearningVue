import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import gg from '@/components/gg'
import hh from '@/components/hh'

Vue.use(Router)

export default new Router({
  routes: [
    // name 是标题我没测明白，path是 地址栏里显示的路径，实际路径上面from里的，component 声明 主要是和上面对应的名字
    { name: '首页', path: '/', redirect: '/foo/' },
    {
      name: '添加todolist',
      path: '/foo/',
      components: {
        default: Foo,
        a: hh
      }
    },
    { name: '点击隐藏显示', path: '/bar/', component: Bar },
    { name: '点击切换颜色', path: '/gg/', component: gg },
    { name: '点击切换class', path: '/ba1r/', component: HelloWorld }
  ]
})
