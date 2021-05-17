<template>
  <div>
    <header>
      <h1>
        {{ title }}
      </h1>
      <NuxtLink to="/">top</NuxtLink>
    </header>
    <Nuxt ref="page" />
    <div v-if="hasConfirm">Confirm</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  middleware(context: Context) {
    // Routing発生時にstateを初期化する
    // Layoutが複数ある場合、アプリ共通のmiddlewareで実行する
    context.store.commit('page/initialize')
  },
  computed: {
    title(): string {
      return this.$store.state.page.title
    },
    hasConfirm(): string {
      return this.$store.state.page.hasConfirm
    },
  },
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
