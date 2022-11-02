<template>
  <div class="header">
    <h1 class="font-bold break-normal text-primaryContent pt-6 pb-6 text-3xl md:text-4xl">
      Hi,
      <br>
      I'm <span class="text-secondaryContent">SALMA EL HAJRAOUI</span>
    </h1>
    <p class="pb-6 text-sm md:text-base text-gray-600 text-primaryContent">
      <span class="break-normal text-2xl">
        Senior Software Engineer - Front End
      </span>
    </p>
    <p class="py-6 text-primaryContent break-normal text-lg">
      I love
      <span class="text-secondaryContent no-underline hover:underline">
        build, code and occasionally designe
      </span>
      solid, scalable and beautiful product for the web
    </p>
  </div>
  <div class="py-6 text-primaryContent break-normal text-lg">
    {{ aboutMe }}
  </div>
  <div class="py-6 text-primaryContent break-normal text-lg">
    <span class="text-secondaryContent break-normal text-xl font-bold">
      Stack i use :
    </span>
    <div class="pt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div class="flex items-center" v-for="(value, index) in stack" :key="index">
        <span class=" mr-3">
          <IconComponent :icon-name="`check`" :icon-width="`15`" :icon-height="`15`" :stroke="`#e19ce7`"
            :fill="`#e19ce7`" />
        </span>
        <span>
          {{ value.tag }}
        </span>
      </div>
    </div>
  </div>
  <div class="pt-6 grid grid-cols-3 gap-4 items-center">
    <div class="col-span-2 social-media break-normal text-lg">
      <blockquote class="border-l-4 border-secondaryContent italic my-8 pl-8 md:pl-12 text-primaryContent">
        You can say Hi on
        <a class="text-secondaryContent font-bold no-underline hover:underline" target="_blank"
          href="https://twitter.com/SalmaElHajraoui">Twitter</a>
        or
        <a class="text-secondaryContent font-bold no-underline hover:underline" target="_blank"
          href="https://www.linkedin.com/in/elhajraoui">Linkdin</a>
        or scan this QR code to download my resume
      </blockquote>
    </div>
    <div>
      <span class="qr-code">
        <QrCodeComponentVue
          :key="theme"
          :theme="theme"
        />
      </span>
    </div>
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
