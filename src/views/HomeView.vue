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
      With over nine years of experience in front-end development, I excel at creating dynamic, scalable, and visually compelling web applications.
    </p>
  </div>
  <div class="py-6 text-primaryContent break-normal text-lg">
    My expertise lies in the JavaScript ecosystem and modern design systems, enabling me to transform complex ideas into seamless digital experiences. Whether it's building high-performance web products or delivering user-centric solutions, I focus on combining functionality with exceptional aesthetics. I’ve had the privilege of collaborating with diverse clients, helping them bring their visions to life through intuitive, scalable, and high-performing applications tailored for long-term success.
  </div>
  
  <div class="pt-6 h-30">
    <a href="https://www.linkedin.com/in/elhajraoui/" target="_blank" class="bg-secondaryContent text-white py-2 px-4 rounded inline-flex items-center space-x-2 h-30 hover:bg-secondaryContent-700">
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
