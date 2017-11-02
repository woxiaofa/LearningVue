<template>
  <div id="main">
    <!-- 提交事件不再重载页面 -->
    <nav v-bind:class="aa">
      <a href="#"  v-for="sss in ssss" class="home" v-on:click="sss('home')">{{sss.num}}</a>
      <a href="#" class="project" v-on:click="sss('project')">project</a>
      <a href="#" class="services" v-on:click="sss('services')">services</a>
      <a href="#" class="contact" v-on:click="sss('contact')">contact</a>
    </nav>
    <!-- <p>你现在选择的是
      <b>{{active}}</b>
    </p> -->
   
    <div class="neirong">消息是: {{ cc }} <p class="bianji"><input v-model="cc" placeholder="编辑我……"></p></div>
    <p><router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link></p>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      aa: 'home',
      cc: '写点啥',
      ssss: [
        { num: '全部' },
        { num: '观察' },
        { num: '深度' },
        { num: '产品' },
        { num: '资本' }
      ]
    }
  },
  methods: {
    sss: function (bb) {
      this.aa = bb
      // alert(bb)
    }
  }
}
</script>
<style>
*{margin:0;padding:0;}
a{display:inline-block;text-decoration:none;padding:10px 20px;color:#fff;background-color:transparent;}
nav{background-color:#666;}
nav.home .home,nav.project .project,nav.services .services,nav.contact .contact{background-color:#f00;}
.neirong{width:100px;height:40px;border:1px solid #ccc;position: relative;}
.bianji{display: none;position: absolute;top:0;left:0;}
.neirong:hover .bianji{display: block}
</style>
