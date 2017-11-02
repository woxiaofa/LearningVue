<template>
  <div class="bar">
    <button v-text="btnText" @click="showToggle"></button>
    <p v-show="isShow">原本可以成为Google、Facebook的“爸爸”，或者微软的“儿子”，最后却像“孙子”一样被贱卖，沦为互联网浪潮的“弃子”。</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnText: '隐藏',
      isShow: true
    }
  },
  methods: {
    showToggle: function () {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.btnText = '隐藏'
      } else {
        this.btnText = '显示'
      }
    }
  }
}
</script>
<style scoped>
.bar{width:100%;height:200px;background: red;color:#fff;}
.bar button{width: 100px;height:40px; color: #333;}
</style>