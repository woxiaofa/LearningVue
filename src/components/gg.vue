<template>
  <div>
    <span :class="{'bg-primary text-danger':isA,'bg-success text-white':!isA}" @click="toggle()">点击切换颜色CLASS</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isA: true
    }
  },
  methods: {
    toggle: function () {
      this.isA = !this.isA
    }
  }
}
</script>
<style>
span{cursor: pointer;display: block;width:100px;height:100px;}
.bg-primary{ background:purple;}
.text-danger{ color:yellow}
.bg-success{ background:seagreen}
.text-white{color:#fff;}
</style>
