<template>
  <ul class="cont_ul">
    <li v-for="item in items">
      <h2>{{ item.price }}</h2>
      <p>{{ item.title }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { price: '129', title: '大学' },
        { price: '256.00', title: '中庸' },
        { price: '399.00', title: '论语' }
      ]
    }
  }
}
</script>
<style>
.cont_ul li {background: red; color: #fff; margin-bottom: 5px;}
</style>
