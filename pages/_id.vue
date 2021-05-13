<template>
  <div>{{ id }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import layoutOptionSetter from '~/mixins/layoutOptionSetter'

export default Vue.extend({
  mixins: [
    layoutOptionSetter({
      title: '詳細',
      hasConfirm: true,
    }),
  ],
  data() {
    return {
      id: '',
    }
  },
  created() {
    this.id = this.$route.params.id
  },
})
</script>

<style scoped></style>
