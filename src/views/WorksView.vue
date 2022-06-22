<template>
  <div class="work">
    <div class="pt-10">
      <span style="text-align: center; font-size: 24px;">
        See All my Works on
        <a class="text-secondaryContent" href="https://github.com/jiyuuki" target="_blank"
          style="font-weight: 700; font-size: 21px;">
          Github
        </a>
      </span>
    </div>
    <div class="container mx-auto" style="padding-bottom: 50px; margin: 0 auto;">
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3">
        <div v-for="work in works" :key="work.id" class="project p-6 border rounded-xl">
          <div class="md:flex md:items-start md:-mx-4">
            <div class="mt-4 md:mx-4 md:mt-0">
              <div class="flex justify-between">
                <h1 class="text-2xl font-medium capitalize">
                  {{ work.name }}
                </h1>
                <span class="inline-block rounded-xl md:mx-4">
                  <IconComponent :icon-name="`space`" :stroke="`var(--color-icon)`" />
                </span>
              </div>
              <div class="call-action mt-5 mb-5">
                <a v-for="({ actionName, actionUrl}, index) in work.actions" :key="index" style="padding-right: 15px;"
                  class="text-secondaryContent" :href="actionUrl" target="_blank">
                  {{ actionName }}
                </a>
              </div>
              <p class="mt-3 text-gray-500 dark:text-gray-300">
                {{ work.description }}
              </p>
              <div class="tags">
                <div class="my-3 flex flex-wrap -m-1">
                  <span v-for="(tag, index) in work.tags" :key="index" style="padding-right: 15px;"
                    class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
                    {{ tag}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconComponent from '@/components/IconComponent.vue'
import useWorkStore from '@/stores/workStore'
import { onMounted, ref } from 'vue'

export default {
  name: 'WorksView',

  components: {
    IconComponent
  },

  setup () {
    const workStore = useWorkStore()
    const pageTitle = workStore.getPageTitle
    const works = ref([])

    onMounted(() => {
      works.value = workStore.getWorks()
    })

    return {
      pageTitle,
      works
    }
  }
}
</script>

<style scoped>
.work {
  color: var(--color-primary-content);
}

.project {
  border: 1px solid var(--color-gray-border);
}
</style>
