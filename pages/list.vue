<template>
  <ul>
    <li v-for="item in list" :key="item">
      <NuxtLink :to="`${item}`">id:{{ item }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import layoutOptionSetter from '~/mixins/layoutOptionSetter'

export default Vue.extend({
  mixins: [
    layoutOptionSetter({
      title: '一覧',
      hasConfirm: false,
    }),
  ],
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
})
</script>

<style scoped></style>
