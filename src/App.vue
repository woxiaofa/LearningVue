<template>
  <div id="app">
    <tab></tab>
    <router-view/>
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

