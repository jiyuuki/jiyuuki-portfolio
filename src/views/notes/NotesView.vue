<template>
  <div class="pt-10 text-2xl">
    <p class="text-secondaryContent">
      {{ pageTitle }}
    </p>
    <p class="text-colorGray text-lg">
      {{ quotes }}
    </p>
  </div>
  <div class="mx-auto">
    <div class="mt-20" v-for="(note, index) in notes" :key="index">
      <span class="text-secondaryContent text-2xl">
        {{ note.title }}
      </span>
      <p class="text-colorGray text-base">
        Published on {{ note.published }}
      </p>
      <p class="py-6 text-lg font-medium">
        {{ note.description }}
      </p>
      <span class="text-secondaryContent py-2 rounded-full font-medium">
        Read More
      </span>
    </div>
  </div>
</template>

<script>
import useNoteStore from '@/stores/noteStore'
import { onMounted, ref } from 'vue'

export default {
  name: 'NotesView',

  setup () {
    const store = useNoteStore()
    const pageTitle = store.pageTitle
    const quotes = store.quotes
    const notes = ref([])

    onMounted(() => {
      notes.value = store.getNotes()
    })

    return {
      pageTitle,
      quotes,
      notes
    }
  }
}
</script>

<style scoped>
.notes {
  color: var(--color-primary-content);
}
</style>
