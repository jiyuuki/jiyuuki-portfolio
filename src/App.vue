<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'App',

  setup () {
    onMounted(() => {
      import('@/assets/icons/dark.svg?sprite').then((response) => {
        console.log({ response })
      }).catch((error) => {
        console.log({ error })
      })
    })
  }
}
</script>
<style></style>
