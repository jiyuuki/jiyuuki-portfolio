<template>
  <qrcode-vue
    :value="value"
    :size="size"
    :level="level"
    :foreground="foreground"
    :background="background"
  />
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { ref, onMounted } from 'vue'

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
    const foreground = ref()
    const background = ref()
    const size = ref(100)
    const level = ref('H')
    const value = ref('https://docs.google.com/document/d/1jmXAejt9H304VGs0UFtfGW3i1y4_Qtz6/edit?usp=sharing&ouid=101840272969327448219&rtpof=true&sd=true')

    const QrCodeTheme = {
      fore: props.theme === 'dark' ? '--darkForeground' : '--lightForeground',
      back: props.theme === 'dark' ? '--darkBackground' : '--lightBackground'
    }

    onMounted(() => {
      foreground.value = getComputedStyle(document.documentElement).getPropertyValue(QrCodeTheme.fore)
      background.value = getComputedStyle(document.documentElement).getPropertyValue(QrCodeTheme.back)
    })

    return {
      foreground,
      background,
      size,
      level,
      value
    }
  }
}
</script>

<style scoped></style>
