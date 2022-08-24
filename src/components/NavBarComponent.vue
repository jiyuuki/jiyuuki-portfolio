<template>
  <div class="nav-bar">
    <nav class="">
      <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <div>
            <router-link :to="{ name: 'HomeView'}">
              <span class="no-underline hover:no-underline font-medium text-lg">
                Jiyuuki
              </span>
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="items-center md:flex">
          <div class="flex flex-col md:flex-row md:mx-6 items-center">
            <router-link v-for="(item, index) in menuItems" :key="index" :to="{ name: item.name }">
              <span class="my-1 text-lg font-medium md:mx-4 md:my-0">
                {{ item.title }}
              </span>
            </router-link>
            <a class="text-secondaryContent my-1 text-lg font-medium md:mx-4 md:my-0" target="_blank"
              href="https://github.com/jiyuuki">
              <IconComponent :icon-name="`github`" :icon-width="`21`" :icon-height="`21`" />
            </a>
            <button class="text-secondaryContent my-1 text-lg font-medium md:mx-4 md:my-0"  @click="changeTheme">
              <IconComponent :key="count" :icon-name="icon" :icon-width="`21`" :icon-height="`21`" :fill="`stroke`" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import menuItems from '@/data/mainData.js'
import IconComponent from './IconComponent.vue'
import useMainStore from '@/stores/mainStore'
import { ref } from 'vue'

export default {
  name: 'NavBar',

  components: {
    IconComponent
  },
  setup () {
    const mainStore = useMainStore()
    const count = ref(0)

    const icon = ref(localStorage.getItem('theme') === 'light' ? 'dark' : 'light')

    const changeTheme = () => {
      mainStore.$patch((state) => {
        state.theme = state.theme === 'light' ? 'dark' : 'light'

        icon.value = state.theme === 'light' ? 'dark' : 'light'
        count.value++

        localStorage.setItem('theme', state.theme)
      })
    }

    return {
      ...menuItems,
      changeTheme,
      mainStore,
      icon,
      count
    }
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  color: var(--color-primary-content);
}
.nav-bar span:hover {
  color: var(--color-secondary-content);
}
.nav-bar a.router-link-exact-active {
  color: var(--color-secondary-content);
  /* text-decoration: underline; */
}
</style>
