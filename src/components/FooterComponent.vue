<template>
  <div class="footer flex items-center m-5">
    <div class="pl-2">
      <IconComponent
        :icon-name="`me`"
        :icon-width="`20`"
        :icon-height="`20`"
        :stroke="`text-secondaryContent`"
      />
    </div>
    <div class="pl-2">
      {{ currentDate.getFullYear() }} © Salma EL HAJRAOUI
    </div>
  </div>
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
  }
}
</script>

<style scoped>

.footer {
  bottom: 0;
  height: 30px;
  left: 0;
  position: absolute;
  right: 0;
  display: -webkit-box;
}

.footer>span {
  line-height: 0px;
  vertical-align: middle;
  left: 0;
}
</style>
