<template>
  <qrcode-vue :value="getQrCodeTheme().value" :size="getQrCodeTheme().size" :level="getQrCodeTheme().level"
    :foreground="getQrCodeTheme().foreground" :background="getQrCodeTheme().background" />
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'QrCode',
  components: {
    QrcodeVue
  },
  setup () {
    // TODO: set mode in props
    const store = useStore()
    const getQrCodeTheme = () => {
      const mode = computed(() => store.getters['getMode'])
      const foreground = mode.value === 'dark' ? '--darkForeground' : '--lightForeground'
      const background = mode.value === 'dark' ? '--darkBackground' : '--lightBackground'
      return {
        foreground: getComputedStyle(document.documentElement).getPropertyValue(foreground),
        background: getComputedStyle(document.documentElement).getPropertyValue(background),
        size: 100,
        level: 'H',
        value: 'https://docs.google.com/document/d/1jmXAejt9H304VGs0UFtfGW3i1y4_Qtz6/edit?usp=sharing&ouid=101840272969327448219&rtpof=true&sd=true'
      }
    }
    return {
      getQrCodeTheme
    }
  }
}
</script>

<style scoped></style>
