<template>
  <div id="app">
    <tab></tab>
    <router-view/>
    <router-view class="view two" name="a"></router-view>
  </div>
</template>
<script>
import tab from './components/tabnav'
export default {
  components: {
    tab
  }
}
</script>

<style scoped>
</style>

