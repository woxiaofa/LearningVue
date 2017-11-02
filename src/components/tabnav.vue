<template>
  <div id="main">
    <!-- <h2>导航tab</h2> -->
    <nav>
      <router-link to="/foo">添加，删除todolist</router-link>
      <router-link to="/bar">点击，显示隐藏</router-link>
      <router-link to="/ba1r">循环列表</router-link>
      <router-link to="/gg" >点击换class</router-link>
    </nav>
    <!-- <p>你现在选择的是
      <b>{{active}}</b>
    </p>  -->
  </div>
</template>
<script>
</script>
<style>
*{margin:0;padding:0;}
a{display:inline-block;text-decoration:none;padding:10px 20px;color:#fff;background-color:transparent; cursor: pointer}
nav{background-color:#666;}
.router-link-active{background-color:orange;}

</style>
