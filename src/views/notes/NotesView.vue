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
        <prism-editor
          class="my-editor"
          v-model="note.content"
          :highlight="highlighter"
          line-numbers
        />
      </p>
    </div>
  </div>
</template>

<script>
import useNoteStore from '@/stores/noteStore'
import { onMounted, ref } from 'vue'

import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  name: 'NotesView',

  components: {
    PrismEditor
  },

  setup () {
    const store = useNoteStore()
    const pageTitle = store.pageTitle
    const quotes = store.quotes
    const notes = ref([])
    const highlighter = (code) => {
      return highlight(code, languages.js)
    }

    onMounted(() => {
      notes.value = store.getNotes()
    })

    return {
      pageTitle,
      quotes,
      notes,
      highlighter
    }
  }
}
</script>

<style scoped>
.notes {
  color: var(--color-primary-content);
}
.my-editor {
  background: var(--color-bg-notes);
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}
.prism-editor__textarea:focus {
  outline: none;
}
</style>
