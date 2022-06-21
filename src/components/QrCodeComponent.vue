<template>
  <qrcode-vue
    :value="getQrCodeTheme().value"
    :size="getQrCodeTheme().size"
    :level="getQrCodeTheme().level"
    :foreground="getQrCodeTheme().foreground"
    :background="getQrCodeTheme().background"
  />
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'QrCode',
  components: {
    QrcodeVue
  },
  props: {
    theme: {
      type: String,
      require: true
    }
  },
  setup (props) {
    // TODO: set mode in props
    const getQrCodeTheme = () => {
      const foreground = props.theme === 'dark' ? '--darkForeground' : '--lightForeground'
      const background = props.theme === 'dark' ? '--darkBackground' : '--lightBackground'
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
