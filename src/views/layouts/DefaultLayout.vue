<template>
  <div class="root light">
    <NavBarComponent />
    <div class="content">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarComponent from '../../components/NavBarComponent.vue'
import FooterComponent from '../../components/FooterComponent.vue'

export default {
  name: 'DefaultLayout',

  components: {
    NavBarComponent,
    FooterComponent
  },

  setup () {
    //
  }
}
</script>

<style scoped>
.root {
  width: 100%;
  min-width: 0;
  margin: 0 auto;
  min-height: 100%;
  position: relative;
  padding: 0px 30px 0px 30px;
}
.content {
  padding-bottom: 20px;
  padding-top: 40px;
  max-width: 75%;
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
