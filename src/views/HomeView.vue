<template>
  <div class="header">
    <h1 class="font-bold break-normal text-primaryContent pt-6 pb-6 text-3xl md:text-4xl">
      Hi,
      <br>
      I'm <span class="text-secondaryContent">SALMA EL HAJRAOUI</span>
    </h1>
    <p class="pb-6 text-sm md:text-base text-gray-600 text-primaryContent">
      <span class="break-normal text-xl">
        Frontend Tech Lead | Senior Frontend Developer | Open to Tech Leadership & Freelance Roles
      </span>
    </p>
    <p class="text-primaryContent break-normal text-lg">
      With over nine years of experience in front-end development, I specialize in crafting dynamic, scalable, and visually stunning web products.
    </p>
  </div>
  <div class="py-6 text-primaryContent break-normal text-lg">
    I specialize in creating dynamic, scalable, and visually stunning web products. With a deep understanding of the JavaScript ecosystem and design systems, I transform ideas into seamless digital experiences. Over the years, I’ve helped clients bring their vision to life, building high-performance applications with a focus on usability, aesthetics, and functionality.
  </div>
  
  <div class="pt-6 h-30">
    <a href="https://www.linkedin.com/in/elhajraoui/" target="_blank" class="bg-pink-600 text-white py-2 px-4 rounded inline-flex items-center space-x-2 h-30 hover:bg-pink-700">
      <span>Let’s build something exceptional together!</span>
    </a>
  </div>
</template>

<script>
import IconComponent from '@/components/IconComponent.vue'
import QrCodeComponentVue from '@/components/QrCodeComponent.vue'
import useMainStore from '@/stores/mainStore'
import { computed } from '@vue/runtime-core'

export default {
  name: 'HomeView',
  components: {
    QrCodeComponentVue,
    IconComponent
  },
  setup () {
    const mainStore = useMainStore()
    const aboutMe = mainStore.aboutMe
    const stack = mainStore.stack

    const theme = computed(() => {
      return mainStore.theme
    })

    return {
      aboutMe,
      stack,
      theme
    }
  }
}
</script>

<style scoped>
.header>h1 {
  line-height: 3.5rem;
}

.qr-code {
  display: inherit;
  padding: 8px;
}
</style>
