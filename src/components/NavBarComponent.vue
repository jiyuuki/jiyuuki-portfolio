<template>
  <div class="nav-bar">
    <nav class="w-full z-10 top-0">
      <div class="md:max-w-6xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div class="pl-4">
          <router-link :to="{ name: 'HomeView'}">
            <span class="no-underline hover:no-underline text-xl font-medium">
              Jiyuuki
            </span>
          </router-link>
        </div>
        <div class="w-full flex-grow lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 md:bg-transparent z-20"
          id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li v-for="item in menuItems" :key="item.id" class="mr-3 contents">
              <router-link :to="{ name: item.name }">
                <span class="inline-block py-2 px-4 hover:text-gray-900 hover:text-underline text-lg font-medium">
                  {{ item.title }}
                </span>
              </router-link>
            </li>
            <li class="mr-3 contents">
              <a class="inline-block py-2 px-4 hover:text-gray-900 hover:text-underline text-secondaryContent"
                target="_blank" href="https://github.com/jiyuuki">
                <IconComponent :icon-name="`github`" :icon-width="`20`" :icon-height="`20`" />
              </a>
            </li>
            <li class="mr-3 contents">
              <button class="inline-block py-2 px-4 hover:text-gray-900 hover:text-underline">
                <IconComponent :icon-name="`light`" :icon-width="`20`" :icon-height="`20`" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import menuItems from '@/data/menuItems.js'
import IconComponent from './IconComponent.vue'

export default {
  name: 'NavBar',

  components: {
    IconComponent
  },
  setup () {
    return {
      ...menuItems
    }
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  color: var(--color-primary-content);
}

.nav-bar a.router-link-exact-active {
  color: var(--color-secondary-content);
}

</style>
