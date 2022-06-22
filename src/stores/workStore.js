import { defineStore } from 'pinia'
import works from '@/data/worksData'

const useWorkStore = defineStore('WorkStore', {
  state: () => ({
    ...works,
    pageTitle: works.pageTitle
  }),
  getters: {
    getPageTitle: state => state.pageTitle
  },
  actions: {
    getWorks () {
      return this.works
    }
  }
})

export default useWorkStore
