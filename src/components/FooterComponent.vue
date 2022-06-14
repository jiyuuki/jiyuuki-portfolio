<template>
  <IconComponent
    :icon-name="`me`"
    :icon-width="`20`"
    :icon-height="`20`"
  />
  <h1>
    {{ currentDate.getFullYear() }} © Salma EL HAJRAOUI
  </h1>
</template>

<script>
import IconComponent from './IconComponent.vue'

export default {
  name: 'FooterComponent',

  components: {
    IconComponent
  },

  setup () {
    const currentDate = new Date()

    return {
      currentDate
    }
    //
  }
}
</script>

<style scoped></style>
