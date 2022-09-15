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
      <span class="text-secondaryContent text-xl">
        {{ note.title }}
      </span>
      <p class="text-colorGray text-base">
        {{ note.description }}
      </p>
      <p class="py-6 text-lg font-medium">
        <code-highlight language="javascript">
          {{ note. content }}
        </code-highlight>
      </p>
    </div>
  </div>
</template>

<script>
import useNoteStore from '@/stores/noteStore'
import { onMounted, ref } from 'vue'
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'
import 'vue-code-highlight/themes/duotone-sea.css'
import 'vue-code-highlight/themes/window.css'

export default {
  name: 'NotesView',

  components: {
    CodeHighlight
  },

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
