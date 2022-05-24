<template>
  <svg
    :viewBox="icon.viewBox"
    :width="iconWidth"
    :height="iconHeight"
    :fill="fill"
    :stroke="stroke"
  >
    <use
      :xlink:href=" '#' + icon.id"
    />
  </svg>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'IconComponent',

  props: {
    iconName: {
      type: String,
      default: 'bug'
    },
    iconWidth: {
      type: String,
      default: '25'
    },
    iconHeight: {
      type: String,
      default: '25'
    },
    fill: {
      type: String,
      default: 'none'
    },
    stroke: {
      type: String,
      default: 'none'
    }
  },

  setup (props) {
    const icon = ref('')
    console.log(icon)
    onMounted(() => {
      import(`@/assets/icons/${props.iconName}.svg?sprite`).then((response) => {
        icon.value = response.default
      }).catch((error) => {
        console.log({ error })
      })
    })
    return {
      icon
    }
  }
}
</script>

<style scoped></style>
