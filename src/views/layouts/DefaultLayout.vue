<template>
  <div class="root flex flex-col" :class="mainStore.theme">
    <NavBarComponent />
    <div class="content">
      <router-view />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import useMainStore from '@/stores/mainStore'

export default {
  name: 'DefaultLayout',
  components: {
    NavBarComponent,
    FooterComponent
  },
  setup () {
    const mainStore = useMainStore()
    return {
      mainStore
    }
  }
}
</script>

<style scoped>

.root {
  width: 100%;
  min-width: 0;
  margin: 0 auto;
  min-height: 100%;
  padding: 0px 30px 0px 30px;
  color: var(--color-primary-content)
}
.content {
  padding-bottom: 20px;
  padding-top: 10px;
  max-width: 83%;
  margin: 0 auto;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
