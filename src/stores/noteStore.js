import { defineStore } from 'pinia'
import notes from '@/data/notesData'

const useNoteStore = defineStore('NoteStore', {
  state: () => ({
    ...notes,
    pageTitle: notes.pageTitle,
    quotes: notes.quotes
  }),
  getters: {
    getPageTitle: state => state.pageTitle,
    getQuotes: state => state.quotes
  },
  actions: {
    getNotes () {
      return this.notes
    }
  }
})

export default useNoteStore
