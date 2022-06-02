<template>
  <router-view/>
</template>
<script>
import { onMounted } from 'vue'

export default {
  name: 'App',

  setup () {
    onMounted(() => {
      import('@/assets/icons/bug.svg?sprite').then((response) => {
        console.log({ response })
      }).catch((error) => {
        console.log({ error })
      })
    })
  }
}
</script>
<style></style>
