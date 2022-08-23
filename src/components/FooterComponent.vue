<template>
  <div class="footer pt-10 pb-5">
    <div class="w-full z-10 top-0">
      <div class="max-w-2xl flex flex-wrap items-center justify-start mt-0">
        <div class="pr-2">
          <IconComponent :icon-name="`light`" :icon-width="`20`" :icon-height="`20`" :stroke="`text-secondaryContent`" />
        </div>
        <div class="text-sm">
          {{ currentDate.getFullYear() }} © Salma EL HAJRAOUI
        </div>
      </div>
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
  right: 0;
  display: -webkit-box;
}

.footer>span {
  line-height: 0px;
  vertical-align: middle;
  left: 0;
}
</style>
