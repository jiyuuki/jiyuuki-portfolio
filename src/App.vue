<template>
  <router-view/>
</template>
<script>
import { onBeforeMount } from 'vue'

export default {
  name: 'App',

  setup () {
    onBeforeMount(() => {
      if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark')
    })
  }
}
</script>
<style></style>
