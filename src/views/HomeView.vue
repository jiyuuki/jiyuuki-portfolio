<template>
  <div class="header">
    <h1 class="font-bold break-normal text-primaryContent pt-6 pb-6 text-3xl md:text-4xl">
      Hi,
      <br>
      I'm <span class="text-secondaryContent">SALMA EL HAJRAOUI</span>
    </h1>
    <p class="pb-6 text-sm md:text-base text-gray-600 text-primaryContent">
      <span class="break-normal text-2xl">
        Front-end Developer
      </span>
    </p>
    <p class="py-6 text-primaryContent break-normal text-lg">
      Hallo to lorem Pariatur
      <span class="text-secondaryContent no-underline hover:underline">
        proident occaecat
      </span>
      proident occaecat consectetur eu ipsum duis deserunt esse aliqua veniam do officia enim
      deserunt.
    </p>
  </div>
  <div class="py-6 text-primaryContent break-normal text-lg">
    {{ aboutMe }}
  </div>
  <div class="py-6 text-primaryContent break-normal text-lg">
    <span class="text-secondaryContent break-normal text-xl">
      Stack i use :
    </span>
    <div class="grid gap-x-8 gap-y-4 grid-cols-2 mt-6">
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
  <div class="grid grid-cols-4 gap-3">
    <div class="col-span-3 social-media break-normal text-lg">
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
        <QrCodeComponentVue :theme="theme" />
      </span>
    </div>
  </div>
</template>

<script>
import IconComponent from '@/components/IconComponent.vue'
import QrCodeComponentVue from '@/components/QrCodeComponent.vue'
import useMainStore from '@/stores/mainStore'
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
    const theme = mainStore.theme

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

.social-media {
  margin: 0 auto;
}
</style>
