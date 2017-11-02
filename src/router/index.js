import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import gg from '@/components/gg'

Vue.use(Router)

export default new Router({
  routes: [
    { name: '首页', path: '/', component: Foo },
    { name: 'foo', path: '/foo/', component: Foo },
    { name: '点击隐藏显示', path: '/bar/', component: Bar },
    { name: '点击切换颜色', path: '/gg/', component: gg },
    { name: '首页', path: '/ba1r/', component: HelloWorld }
  ]
})
